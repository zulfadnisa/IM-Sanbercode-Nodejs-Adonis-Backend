import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Venues extends BaseSchema {
  protected tableName = "venues";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name", 191).notNullable();
      table.string("address", 255).notNullable();
      table.string("phone", 45).notNullable();
      table.integer("userId").references("id").inTable("users");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
