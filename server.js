const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
   })

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todolist', { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

// Configuration des routes
app.use(express.json());

app.get('/todolist/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/todolist/tasks', async (req, res) => {   
  console.log(`the recieved title is : ${req.body}`);
  const { title } = req.body;
  const task = new Task({ title, completed: false });
  await task.save();
  res.json(task);
});

app.put('/todolist/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;
  const task = await Task.findByIdAndUpdate(taskId, { title, completed }, { new: true });
  res.json(task);
});

app.delete('/todolist/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  await Task.findByIdAndRemove(taskId);
  res.json({ message: 'Task deleted' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
