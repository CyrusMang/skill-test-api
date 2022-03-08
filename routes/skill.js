const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')
const Skill = require('../models/skill')

_({
  method: 'GET',
  path: '/api/skills',
  handler: [
    async (ctx, next) => {
      try {
        ctx.body = await m('Skill').find()
      } catch (e) {
        throw e
      }
    }
  ]
})