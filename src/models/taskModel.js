const {Model} = require('objection');
const BaseModel = require('./baseModel');

class tasksModel extends BaseModel {

    static get tableName(){
        return 'tasks'
    }

    static get idColumn(){
        return 'id'
    }
}

module.exports = tasksModel;