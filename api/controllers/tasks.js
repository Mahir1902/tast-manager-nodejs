const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Quiries are not promises but have a .then() method
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.json({ msg: `No task with id: ${id}` }).status(404);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {

    try {
        
        const {id} = req.params
    
        const task = await Task.findOneAndUpdate({_id:id}, req.body, {
            new: true,
            runValidators: true
        })

        if(!task) return res.status(404).json({msg: `No task with id: ${id}`} )
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteTask = async (req, res) => {
    try {
        
        const { id } = req.params;
        const task = await Task.findByIdAndDelete({_id: id})
        if (!task) {
            return res.json({ msg: `No task with id: ${id}` }).status(404);
          }
          res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
