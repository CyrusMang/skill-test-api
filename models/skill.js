const ObjectID = require('mongodb').ObjectID
const { dbclient } = require('../helpers/database')
const { register } = require('../helpers/models')

const SkillCollection = dbclient.db('skill').collection('skills')

class Skill {
  static find = async () => {
    try {
      return SkillCollection.find().toArray()
    } catch (e) {
      throw e
    }
  }
}

register('Skill', Skill)