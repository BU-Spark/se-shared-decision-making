'use strict';

/**
 * waiting4-labor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::waiting4-labor.waiting4-labor');
