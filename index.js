const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

let todos = [
  { id: 1, task: "Learn REST API", completed: true },
  { id: 2, task: "Build Todo App", completed: false },
  { id: 3, task: "Practice CSS", completed: true }
];


app.get("/todos" , (req , res)=>{
    res.render("index.ejs" , {todos});
});


app.get("/todos/new" , (req , res)=>{
    res.render("new.ejs");
});

app.post("/todos" , (req , res) =>{
    let {task} = req.body;
    let id = todos.length + 1;
    todos.push({id , task , completed:false});
    res.redirect("/todos");
});

app.get("/todos" , (req , res) =>{
    const completedTodos = todos.filter(todo => todo.completed);
    const incompletedTodos = todos.filter(todo => !todo.completed);
    res.render("index.ejs" , {
        completedTodos,
        incompletedTodos
    });
});

app.post("/todos/:id/complete" , (req , res)=>{
    const id = parseInt(req.params.id);

    const todo = todos.find(t => t.id == id);
    if(todo){
        todo.completed = true;
    }
    res.redirect("/todos");
});

app.get("/todos/:id/edit" , (req , res) =>{
    const {id} = req.params;
    const todo = todos.find(t=>t.id == id);

    if(!todo || todo.completed){
        return res.redirect("/todos");
    }

    res.render("edit.ejs" , {todo});
});

app.post("/todos/:id" , (req , res) =>{
    const { id } = req.params;
    const { task } = req.body;

    const todo = todos.find(t => t.id == id);

    if(todo || !todo.completed){
        todo.task = task;
    }

    res.redirect("/todos");
});

app.listen(port , () => {
    console.log("Listing to port : 8080");
});


