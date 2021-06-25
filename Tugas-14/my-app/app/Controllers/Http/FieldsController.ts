// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Field from '../../Models/Field';

// export default class FieldsController {

//     public async index({ request}: HttpContextContract)
//     {
//         const fields = await Field.query().preload('venue').preload('bookings');
//         return fields
//     }

//     public async show({ request, params}: HttpContextContract)
//     {
//         try {
//             const field = await Field.find(params.id);
//             if(field){
//                 await field.preload('venue')
//                 await field.preload('bookings');
//                 return field
//             }
//         } catch (error) {
//             console.log(error)
//         }
        
//     }

//     public async update({ auth, request, params}: HttpContextContract)
//     {
//         const field = await Field.find(params.id);

//         if (field) {
//             field.name = request.input('name');
//             if (await field.save()) {
//                 await field.preload('venue')
//                 await field.preload('bookings')
//                 return field
//             }
//             return; // 422
//         }

//         return; // 401
//     }

//     public async store({ auth, request, response}: HttpContextContract)
//     {
//         const venue = await auth.authenticate();
//         const field = new Field();
//         field.name = request.input('name');
//         await venue.related('fields').save(field)
//         return field
//     }

//     public async destroy({response, auth, request, params}: HttpContextContract)
//     {
//        const user = await auth.authenticate();
//        const field = await Field.query().where('venueId', venue.id).where('id', params.id).delete();
//        return 404
//     }
// }
