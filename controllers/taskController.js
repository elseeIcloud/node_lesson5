const taskService = require('../services/taskService');

async function getTasks(req, res, next) {
    try {
        const tasks = await taskService.getAllTasks();
        res.json({ tasks });
    } catch (err) {
        next(err);
    }
}

async function createTask(req, res, next) {
    const newTask = req.body.task;
    try {
        const task = await taskService.createNewTask(newTask);
        res.json({ task });
    } catch (err) {
        next(err);
    }
}

async function updateTask(req, res, next) {
    const taskId = req.params.id;
    const updatedTask = req.body.task;
    try {
        const task = await taskService.updateExistingTask(taskId, updatedTask);
        res.json({ task });
    } catch (err) {
        next(err);
    }
}

async function deleteTask(req, res, next) {
    const taskId = req.params.id;
    try {
        await taskService.deleteTaskById(taskId);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};
