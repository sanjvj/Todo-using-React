import mongoose, { mongo } from "mongoose";
import { boolean } from "zod";

mongoose.connect("mongodb+srv://sanjay3012:Sanjaysurya%4007@cluster0.nz3bsgl.mongodb.net/")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos",todoSchema);

export{todo}