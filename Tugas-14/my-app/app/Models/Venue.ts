import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  BelongsTo,
  belongsTo,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
// import Field from "./Field";
import Booking from './Booking';

export default class Venue extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public name: string;
  @column()
  public address: string;
  @column()
  public phone: number;
  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Relationship
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  // @hasMany(() => Field)
  // public fields: HasMany<typeof Field>;
  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>;
}
