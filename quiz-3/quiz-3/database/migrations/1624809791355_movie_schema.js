'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('title').notNullable();
      table.string('resume').nullable();
      table.dateTime('release_date').notNullable();
      table.integer("genreId").references("id").inTable("genres").notNullable().onDelete("CASCADE");
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
