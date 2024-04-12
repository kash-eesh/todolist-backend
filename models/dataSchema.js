import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {type: String , required:true , trim:true},
    completed: {type: Boolean , required:true , trim:true},
  });
  
const TodoModel = mongoose.model("todolist",TodoSchema);

export default TodoModel