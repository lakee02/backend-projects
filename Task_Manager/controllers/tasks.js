const getAllTasks=(req,res)=>{
    res.send('All items')
}

const createTask=(req,res)=>{
    res.json(req.body);
}

const updateTask=(req,res)=>{
    res.json({id:req.params.id})
}

const deleteTask=(req,res)=>{
    res.send('Delete Task');
}

module.exports={
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}