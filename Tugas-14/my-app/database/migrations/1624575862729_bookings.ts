import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bookings extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.string("user", 255).notNullable();
      // table.string("venue_name", 255).notNullable();
      table.dateTime('start').notNullable();
      table.dateTime('end').notNullable();
      // table.date("date").notNullable();
      // table.time("timeStart").notNullable();
      // table.time("timeEnd").notNullable();
      table.integer("userId").references("id").inTable("users").notNullable().onDelete("CASCADE");
      // table.integer("fieldId").references("id").inTable("fields").notNullable().onDelete("CASCADE");
      table.integer("venueId").references("id").inTable("venues").notNullable().onDelete("CASCADE");
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
