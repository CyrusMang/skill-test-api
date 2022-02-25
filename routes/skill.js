const ObjectID = require('mongodb').ObjectID
const { _ } = require('../helpers/router')
const { dbclient } = require('../helpers/database')

const Skill = dbclient.db('skill').collection('skills')

_({
  method: 'GET',
  path: '/api/skills',
  handler: [
    async (ctx, next) => {
      try {
        //
      } catch (e) {
        throw e
      }
    }
  ]
})