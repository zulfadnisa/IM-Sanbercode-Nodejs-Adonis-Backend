const express = require('express');
const router = express.Router();
const model = require('../models/index');
// GET users listing.
router.get('/', async function (req, res, next) {
    try {
      const venues = await model.venues.findAll({});
      if (venues.length !== 0) {
        res.json({
          'status': 'OK',
          'messages': '',
          'data': venues
        })
      } else {
        res.json({
          'status': 'ERROR',
          'messages': 'EMPTY',
          'data': {}
        })
      }
    } catch (err) {
      res.json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {}
      })
    }
  });
// POST users
router.post('/', async function (req, res, next) {
    try {
      const {
        name,
        address,
        phone
      } = req.body;
      const venues = await model.venues.create({
        name,
        address,
        phone
      });
    if (venues) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Venues berhasil ditambahkan',
        'data': venues,
      })
    }
   } catch (err) {
     res.status(400).json({
       'status': 'ERROR',
       'messages': err.message,
       'data': {},
     })
   }
  });
// UPDATE users
router.patch('/:id', async function (req, res, next) {
    try {
      const venuesId = req.params.id;
      const {
        name,
        address,
        phone
      } = req.body;
      const venues = await model.venues.update({
        name,
        address,
        phone
      }, {
        where: {
          id: venuesId
        }
      });
      if (venues) {
        res.json({
          'status': 'OK',
          'messages': 'Venues berhasil diupdate',
          'data': venues,
        })
      }
    } catch (err) {
      res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
      })
    }
  });
// DELETE users
router.delete('/:id', async function (req, res, next) {
    try {
      const venuesId = req.params.id;
      const venues = await model.Todo.destroy({ where: {
        id: venuesId
      }})
      if (venues) {
        res.json({
          'status': 'OK',
          'messages': 'Venues berhasil dihapus',
          'data': venues,
        })
      }
    } catch (err) {
      res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
      })
    }
  });
module.exports = router;