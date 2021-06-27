'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CastSchema extends Schema {
  up () {
    this.create('casts', (table) => {
      table.increments()
      table.integer("movieId").references("id").inTable("movies").notNullable().onDelete("CASCADE");
      table.integer("actorsId").references("id").inTable("actors").notNullable().onDelete("CASCADE");
      table.timestamps()
    })
  }

  down () {
    this.drop('casts')
  }
}

module.exports = CastSchema
