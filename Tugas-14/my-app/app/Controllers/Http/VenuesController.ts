import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venue from '../../Models/Venue';

export default class VenuesController {

    public async index({ request}: HttpContextContract)
    {
        const venues = await Venue.query().preload('user').preload('bookings');
        return venues
    }

    public async show({ request, params}: HttpContextContract)
    {
        try {
            const venue = await Venue.find(params.id);
            if(venue){
                await venue.preload('user')
                await venue.preload('bookings');
                return venue
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    public async update({ auth, request, params}: HttpContextContract)
    {
        const venue = await Venue.find(params.id);

        if (venue) {
            venue.name = request.input('name');
            venue.address = request.input('address');
            venue.phone = request.input('phone');
            if (await venue.save()) {
                await venue.preload('user')
                await venue.preload('bookings')
                return venue
            }
            return; // 422
        }

        return; // 401
    }

    public async store({ auth, request, response}: HttpContextContract)
    {
        const user = await auth.authenticate();
        const venue = new Venue();
        venue.name = request.input('name');
        venue.address = request.input('address');
        venue.phone = request.input('phone');
        await user.related('venues').save(venue)
        return venue
    }

    public async destroy({response, auth, request, params}: HttpContextContract)
    {
       const user = await auth.authenticate();
       const venue = await Venue.query().where('userId', user.id).where('id', params.id).delete();
       return 404
    }
}
