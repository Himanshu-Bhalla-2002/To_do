const TaskFolder = require('../models/TaskFolder');

async function createTaskFolder(req, res) {
    try {
        const { name } = req.body;
        const taskFolder = new TaskFolder({ name, user: req.user._id });
        await taskFolder.save();
        res.status(201).json(taskFolder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



async function getTaskFolders(req, res) {
    try {
        const taskFolders = await TaskFolder.find({ user: req.user._id });
        res.json(taskFolders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getTasksInFolder(req, res) {
    try {
        const tasks = await Task.find({ folder: req.params.folderId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateTaskFolder(req, res) {
    try {
        const { name } = req.body;
        const updatedFolder = await TaskFolder.findByIdAndUpdate(req.params.folderId, { name }, { new: true });
        res.json(updatedFolder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createTaskFolder, getTaskFolders, getTasksInFolder, updateTaskFolder };

// Implement functions for retrieving and updating task folders
