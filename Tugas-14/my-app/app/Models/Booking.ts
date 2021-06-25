import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  BelongsTo,
  belongsTo,
  // hasMany,
  // HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Venue from './Venue';

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public start: DateTime;

  @column()
  public end: DateTime;

  @column()
  public userId: number;
  @column()
  public venueId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Relationship
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @belongsTo(() => Venue)
  public venue: BelongsTo<typeof Venue>;
}
