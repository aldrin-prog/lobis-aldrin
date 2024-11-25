const express=require("express");
const router=express.Router();
const TodoController = require("../controllers/TodoController");

// Define Routes

router.get('/todos',TodoController.getAllTodos);
router.post('/todos',TodoController.createTodo);
router.get('/todos/:id',TodoController.getTodoById);
router.put('/todos/:id',TodoController.updateTodo);
router.delete('/todos/:id',TodoController.deleteTodo)
module.exports=router 