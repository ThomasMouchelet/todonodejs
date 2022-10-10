const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

const taskList = ["task1", "task2", "task3"];

app.get('/', (req, res) => {
    res.render("index", {
        taskList: taskList
    });
})

app.get("/add_task", (req, res) => {
    console.log("add task");
    console.log(req.query);
    taskList.push(req.query.taskName);
    res.redirect("/");
})

// supprimer une tâche
app.get('/delete', (req, res) => {
    console.log("delete")
    const index = req.query.index
    console.log("index : ", index)
    taskList.splice(index, 1)
    res.redirect('/')
})
// modifier une tâche


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})