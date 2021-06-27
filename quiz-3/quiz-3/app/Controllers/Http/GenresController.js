"use strict";

import Genre from "../../Models/Genre";

class GenresController {
  async index({ response }) {
    let genres = await Genre.all();
    return response.json(genres);
  }
  async show({ params, response }) {
    const genre = await Genre.find(params.id);
    return response.json(genre);
  }

  async store({ request, response }) {
    const genreInfo = request.only(["name"]);
    const genre = new Genre();
    // genre.id = genreInfo.id;
    genre.name = genreInfo.name;
    await genre.save();
    return response.status(201).json(genre);
  }

  async update({ params, request, response }) {
    const genreInfo = request.only(["name"]);
    const genre = await Genre.find(params.id);
    if (!genre) {
      return response.status(404).json({ data: "Resource not found" });
    }
    genre.name = genreInfo.name;
    await genre.save();
    return response.status(200).json(genre);
  }

  async delete({ params, response }) {
    const genre = await Genre.find(params.id);
    if (!genre) {
      return response.status(404).json({ data: "Resource not found" });
    }
    await genre.delete();
    return response.status(204).json(null);
  }
}
module.exports = GenresController;
