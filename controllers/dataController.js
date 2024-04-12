// dataController.js
import TodoModel from '../models/dataSchema.js';

var count = 0;

const todoController = {
  handleAddTodo: async (req, res) => {
    try {
      const { name, completed } = req.body;
      const todo = await TodoModel.create({ name, completed });
      res.status(201).json({ message: 'Todo added successfully', data: todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  handleEditTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Todo updated successfully', data: updatedTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  handleGetAllTodos: async (req, res) => {
    try {
      const todos = await TodoModel.find({});
      res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  handleGetTodoById: async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await TodoModel.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  handleDeleteTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTodo = await TodoModel.findByIdAndDelete(id);
      if (!deletedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted successfully', data: deletedTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};


export default todoController;
