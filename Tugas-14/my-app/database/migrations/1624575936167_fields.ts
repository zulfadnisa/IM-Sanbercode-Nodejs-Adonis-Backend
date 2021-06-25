import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Fields extends BaseSchema {
  protected tableName = "fields";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name", 255).notNullable();
      table
        .integer("venueId")
        .references("id")
        .inTable("venues")
        .notNullable()
        .onDelete("CASCADE");
      //     table.foreign('user_id')
      // .references('id')
      // .inTable('users')
      // .onDelete('CASCADE')
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
