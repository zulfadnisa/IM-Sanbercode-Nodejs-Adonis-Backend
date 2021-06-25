import { DateTime } from "luxon";
import Venue from "./Venue";
import Booking from "./Booking";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;
  public name: string;
  @column({ serializeAs: null })
  public password: string;
  @column()
  public rememberMeToken?: string;
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
  @hasMany(() => Venue)
  public venues: HasMany<typeof Venue>;
  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>;
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
