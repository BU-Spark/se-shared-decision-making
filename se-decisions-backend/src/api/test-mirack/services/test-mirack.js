'use strict';

/**
 * test-mirack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-mirack.test-mirack');
