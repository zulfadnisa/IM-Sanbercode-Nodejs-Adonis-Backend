import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public async bookingsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.preload("bookings");
    const bookings = user.bookings;
    return bookings;
  }

  public async venuesByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.preload("venues");
    const venues = user.venues;

    return venues;
  }
}