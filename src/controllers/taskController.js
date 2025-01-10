

const taskRepository = require('../repositories/taskRepository');

exports.createTask = async (req, res) => {
    try{
    const {title, description, dueDate, priority, status} = req.body;
    const response = await taskRepository.createTask({title, description, dueDate, priority, status})

    res.status(200).send(response);
    }catch(e){
        res.status(401).json({ error: e.message || 'An error occurred' });
    }
}

exports.getTasks = async (req, res) => {
    try{
        const response = await taskRepository.getTasks();
        res.status(200).send(response);
    }catch(e){
        res.status(401).json({ error: e.message || 'An error occurred' });
    }
}

exports.getTaskById = async (req, res) => {
    try{   
     const {id} = req.params;
     if(id){
    const response = await taskRepository.getTaskById(id);
    res.status(200).send(response);
     }else{
        throw new Error("Id is required");
     }
    }catch(e){
        res.status(401).json({ error: e.message || 'An error occurred' });
    }
}

exports.updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await taskRepository.updateTask(id, req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(401).json({ error: e.message || 'An error occurred' });
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await taskRepository.deleteTask(id);
        res.status(200).send(response);
    }catch(e){
        res.status(401).json({ error: e.message || 'An error occurred' });
    }
}