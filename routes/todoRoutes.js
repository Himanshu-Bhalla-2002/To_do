const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const taskController=require('../controllers/taskController');
const taskFolderController=require('../controllers/taskFolderController')
const router = express.Router();


router.post('/taskFolders', authMiddleware.authenticateUser, taskFolderController.createTaskFolder);
router.get('/taskFolders', authMiddleware.authenticateUser, taskFolderController.getTaskFolders);
router.get('/taskFolders/:folderId', authMiddleware.authenticateUser, taskFolderController.getTasksInFolder);
router.put('/taskFolders/:folderId', authMiddleware.authenticateUser, taskFolderController.updateTaskFolder);
// Implement routes for retrieving and updating task folders

// Task Routes

router.post('/tasks', authMiddleware.authenticateUser, taskController.createTask);
router.put('/tasks/:taskId/complete', authMiddleware.authenticateUser, taskController.completeTask);
router.put('/tasks/:taskId/uncomplete', authMiddleware.authenticateUser, taskController.uncompleteTask);
// Implement routes for retrieving, updating, completing, and uncompleting tasks

module.exports = router;

