const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    folder: { type: mongoose.Schema.Types.ObjectId, ref: 'TaskFolder', required: true }
});

module.exports = mongoose.model('Task', taskSchema);
