const express=require('express');
const router=express.Router();

const {getAllTasks,createTask,updateTask,deleteTask}=require('../controllers/tasks')
router.route('/').get(getAllTasks)
router.post('/',createTask);
router.patch('/',updateTask);
router.delete('/',deleteTask)

module.exports=router