const Task = require('../models/Task');

async function createTask(req, res) {
    try {
        const { text, folderId } = req.body;
        const task = new Task({ text, folder: folderId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function completeTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.taskId, { completed: true }, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function uncompleteTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.taskId, { completed: false }, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createTask, completeTask, uncompleteTask };

// Implement functions for retrieving, updating, completing, and uncompleting tasks
