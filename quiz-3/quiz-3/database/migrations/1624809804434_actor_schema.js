'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActorSchema extends Schema {
  up () {
    this.create('actors', (table) => {
      table.increments()
      table.string("name").notNullable();
      table.string("bio").nullable();
      table.dateTime('date_of_births').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('actors')
  }
}

module.exports = ActorSchema
