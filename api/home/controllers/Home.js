'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const obj = {
  name: "Rodrigo"
}
module.exports = {
  test: async (ctx) => {
    ctx.send(obj);
  },
  count: async (ctx) => {
    ctx.send('Hello World!');
  }
};
