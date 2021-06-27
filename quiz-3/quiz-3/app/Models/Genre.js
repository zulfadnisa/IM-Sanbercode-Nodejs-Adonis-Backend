"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

export default class Genre extends Model {
  static get table() {
    return "genres";
  }
  static get primaryKey() {
    return "id";
  }
}
