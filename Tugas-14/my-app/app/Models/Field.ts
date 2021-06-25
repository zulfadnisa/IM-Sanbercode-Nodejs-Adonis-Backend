import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  BelongsTo,
  belongsTo,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Venue from "./Venue";
import Booking from "./Booking";

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public name: string;
  @column()
  public venueId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Relationship
  @belongsTo(() => Venue)
  public venue: BelongsTo<typeof Venue>;

  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>;
}
