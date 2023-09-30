const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    taskFolders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TaskFolder' }]
});

module.exports = mongoose.model('User', userSchema);
