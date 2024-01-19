import express from "express";
const app = express();
import { createTodo } from "./types.js";
import { updateTodo } from "./types.js";
import { todo } from "./db.js";

app.use(express.json());

app.post("/todo",async(req,res)=>{

    const input = req.body;
    const check = createTodo.safeParse(input);
    if(!check.success){
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }
    
    await todo.create({
        title : input.title,
        description : input.description,
        completed : false
    })

    res.json({
        msg:"Todo Created"
    })

})

app.get("/todos",async(req,res)=>{

    const allTodos = await todo.find({});

    res.json({
        allTodos
    })

})



app.put("/completed",async(req,res)=>{

    const updateInput = req.body;
    const updateCheck = updateTodo.safeParse(updateInput);
    if(!updateCheck.success){
        res.status(411).json({
            msg: "Wrong input"
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id,
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })



})
app.listen(3000,console.log("Server running on port 3000"));