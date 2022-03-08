const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')

_({
  method: 'GET',
  path: '/api/skills',
  handler: [
    async (ctx, next) => {
      try {
        const skills = await m('Skill').all(ctx)
        ctx.body = skills.map(s => s.data)
      } catch (e) {
        throw e
      }
    }
  ]
})