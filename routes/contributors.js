'use strict';

var Joi = require('joi');

module.exports = {
  method: 'GET',
  path: '/{user}/{repo}/{count?}',
  config: {
    handler: require('../controllers/contributors'),
    validate: {
      params: {
        user: Joi.string().required(),
        repo: Joi.string().required(),
        count: Joi.number().optional().min(1).max(100)
      }
    }
  }
};
