const router = require("express").Router();
const Task = require("../models/task");
const User = require("../models/user");

//create-task
router.post("/create-task", async(req,res) => {
    try {
       const {title, desc } = req.body;
       const { id } = req.headers;
       const newTask = new Task({ title:title, desc:desc });
       const saveTask = await newTask.save();
       const taskId = saveTask._id;
       await User.findByIdAndUpdate(id,{$push:{tasks: taskId._id}});
       res.status(200).json({message:"Task Created"})
    } catch (error) {
        console.log(error);
    res.status(400).json({message: "Server Error!!"});
    }
});
//get All Tasks
router.get("/get-all-tasks", async(req, res) => {
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate({path: "tasks", options: {sort: {createdAt: -1}},
        });
        res.status(200).json({data: userData })
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Server Error!!"});
    }
});

//delete Task
router.delete("/delete-task/:id", async(req,res) => {
    try {
        const{ id } = req.params;
        const userId = req.headers.id;
        await Task.findByIdAndDelete(id);
        await User.findByIdAndUpdate(userId, {$pull:{tasks:id}})
        res.status(200).json({ message: "Task deleted Successfully!!" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//update Task
router.put("/update-task/:id", async(req,res) => {
    try {
        const{ id } = req.params;
        const {title, desc} = req.body;
        await Task.findByIdAndUpdate(id, {title:title ,desc: desc});
        res.status(200).json({ message: "Task updated Successfully!!" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//update-Important Task
router.put("/update-imp-task/:id", async(req,res) => {
    try {
        const{ id } = req.params;
        const TaskData = await Task.findById(id)
        const ImpTask = TaskData.important;
        await Task.findByIdAndUpdate(id, {important: !ImpTask});
        res.status(200).json({ message: "Task updated Successfully!!" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//update-Complete Task
router.put("/update-complete-task/:id", async(req,res) => {
    try {
        const{ id } = req.params;
        const TaskData = await Task.findById(id)
        const CompleteTask = TaskData.Complete;
        await Task.findByIdAndUpdate(id, {complete: !CompleteTask});
        res.status(200).json({ message: "Task updated Successfully!!" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//get Important Tasks
router.get("/get-imp-tasks", async(req,res) => {
    try {
        const{ id } = req.headers;
        const Data = await User.findById(id).populate({path : "tasks",match: {important: true} ,options: {sort: {createdAt: -1}},
        });
        const ImpTaskData = Data.tasks;
        res.status(200).json({ data: ImpTaskData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//get Completed Tasks
router.get("/get-complete-tasks", async(req,res) => {
    try {
        const{ id } = req.headers;
        const Data = await User.findById(id).populate({path : "tasks",match: {complete: true} ,options: {sort: {createdAt: -1}}});
        const CompTaskData = Data.tasks;
        res.status(200).json({ data: CompTaskData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});

//get InComplete Tasks
router.get("/get-incomplete-tasks", async(req,res) => {
    try {
        const{ id } = req.headers;
        const Data = await User.findById(id).populate({path : "tasks",match: {complete: false} ,options: {sort: {createdAt: -1}}});
        const InCompTaskData = Data.tasks;
        res.status(200).json({ data: InCompTaskData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error!!" });
    }
});



module.exports = router;