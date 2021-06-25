import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Booking from "../../Models/Booking";

export default class BookingsController {
     public async index({ request}: HttpContextContract)
    {
        const bookings = await Booking.query().preload('user').preload('venue');
        return bookings
    }

    public async show({ request, params}: HttpContextContract)
    {
        try {
            const booking = await Booking.find(params.id);
            if(booking){
                await booking.preload('user')
                await booking.preload('venue');
                return booking
            }
        } catch (error) {
            console.log(error)
        }
        
    }


    public async update({ auth, request, params}: HttpContextContract)
    {
        const booking = await Booking.find(params.id);

        if (booking) {
            booking.start = request.input('start');
            booking.end = request.input('end');
            if (await booking.save()) {
                await booking.preload('user')
                await booking.preload('venue')
                return booking
            }
            return; // 422
        }

        return; // 401
    }


    public async store({ auth, request, response}: HttpContextContract)
    {
        const user = await auth.authenticate();
        const booking = new Booking();
        booking.start = request.input('start');
        booking.end = request.input('end');
        booking.venueId = request.input('venue');
        await user.related('bookings').save(booking)
        return booking
    }

    public async destroy({response, auth, request, params}: HttpContextContract)
    {
       const user = await auth.authenticate();
       const booking = await Booking.query().where('userId', user.id).where('id', params.id).delete();
       return response.redirect('/dashboard');
    }
}