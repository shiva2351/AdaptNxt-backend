const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all todos
router.get('/', async (req, res) => {
  console.log("todos/")
  const [rows] = await db.query('SELECT * FROM todos');
  res.json(rows);
});

router.get('/s', async (req, res) => {
  console.log("test")
  res.json("rows");
});

// Add a todo
router.post('/', async (req, res) => {
  const { task } = req.body;
  const [result] = await db.query('INSERT INTO todos (task) VALUES (?)', [task]);
  res.json({ id: result.insertId, task, completed: false });
});

// Toggle complete
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('UPDATE todos SET completed = NOT completed WHERE id = ?', [id]);
  res.json({ success: true });
});

// Delete todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM todos WHERE id = ?', [id]);
  res.json({ success: true });
});

module.exports = router;
