const taskModel = require('../models/taskModel');


exports.createTask = async(taskDetails) => {
    try {
        let taskObj = {
            id: Math.floor(Math.random() * 1000000),
            title: taskDetails.title,
            description: taskDetails.description,
            due_date: taskDetails.dueDate,
            priority: taskDetails.priority,
            status: taskDetails.status
        }
        try{
        const task = await taskModel.query().insert(taskObj);
        if(task.id){
            return {created: true}
        }
        }catch(e){
            throw new Error(e);
        }
    }catch(e){
        throw new Error(e);
    }
}

exports.getTasks = async() => {
    try{
        const tasks = await taskModel.query();
        return tasks;
    }catch(e){
        throw new Error(e);
    }
}

exports.getTaskById = async(id) => {
    try{
        const task = await taskModel.query().findById(id);
        return task;
    }catch(e){
        throw new Error(e);
    }
}

exports.updateTask = async(taskId, taskDetails) => {
    try{
        const task = await taskModel.query().findById(taskId).patch({
            title: taskDetails.title,
            description: taskDetails.description,
            due_date: taskDetails.dueDate,
            priority: taskDetails.priority,
            status: taskDetails.status
        });
        try{
        if(task === 1){
            return {updated: true}
        }
        }catch(e){
            throw new Error(e);
        }
    }catch(e){
        throw new Error(e);
    }
}

exports.deleteTask = async(id) => {
    try{
        const task = await taskModel.query().findById(id).delete();
        try{
            if(task === 1){
                return {deleted: true}
            }
            }catch(e){
                throw new Error(e);
            }
    }catch(e){
        throw new Error(e);
    }
}