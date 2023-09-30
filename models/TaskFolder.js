const mongoose = require('mongoose');

const taskFolderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('TaskFolder', taskFolderSchema);

