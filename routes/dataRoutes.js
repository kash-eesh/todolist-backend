import express from "express";
import todoController from "../controllers/dataController.js";
const router = express.Router();

router.get('/todo',todoController.handleGetAllTodos)
router.get('/todo/:id', todoController.handleGetTodoById)
router.post('/todo',todoController.handleAddTodo)
router.put('/todo/:id',todoController.handleEditTodo)
router.delete('/todo/:id', todoController.handleDeleteTodo)




export default router