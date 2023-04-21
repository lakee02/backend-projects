const Task=require('../MODELS/model')
const getAllTasks=(req,res)=>{
    res.send('All items')
}

const createTask=async (req,res)=>{
    try{
        const task=await Task.create(req.body);
        res.status(201).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
    
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