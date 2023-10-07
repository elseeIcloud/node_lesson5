const Task = require('../models/task');

async function getAllTasks() {
    try {
        return await Task.findAll();
    } catch (err) {
        throw err;
    }
}

async function createNewTask(newTaskData) {
    try {
        console.log(newTaskData);
        return await Task.create(newTaskData);
    } catch (err) {
        throw err;
    }
}

async function updateExistingTask(taskId, updatedTaskData) {
    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            throw new Error('Задача не найдена');
        }
        await task.update(updatedTaskData);
        return task;
    } catch (err) {
        throw err;
    }
}

async function deleteTaskById(taskId) {
    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            throw new Error('Задача не найдена');
        }
        await task.destroy();
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    updateExistingTask,
    deleteTaskById,
};
