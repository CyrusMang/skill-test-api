const { dbclient } = require('../helpers/database')
const { register } = require('../helpers/models')

const SkillCollection = dbclient.db('skill').collection('skills')

class Skill {
  constructor(ctx, data) {
    this.ctx = ctx
    this.data = data
  }
  static all = async ctx => {
    try {
      const skills = await SkillCollection.find().toArray()
      return skills.map(data => new Skill(ctx, data))
    } catch (e) {
      throw e
    }
  }
}

register('Skill', Skill)