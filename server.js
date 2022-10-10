const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route pour afficher la liste des tâches et le formulaire

// route pour ajouter une tâche

// route pour supprimer une tâche

// route pour modifier une tâche

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})