const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskFive           = require('../models/classFive');

// CLASS ONE
router.get('/', (req,res) => {
    res.render('classFive/five')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskFive.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskFive.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classFive/edit', {taskFive: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskFive.findByIdAndUpdate(req.params.id, req.body.task, (err, taskOne) => {
        if(err){
            req.flash('error', err.message);
            res.redirect('back');
        } else {
            req.flash('success','Successfully Updated!');
            res.redirect('/');
        }
    })
})

router.get('/:id/delete', (req,res) =>{
    TaskFive.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classFive/delete', {taskFive: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskFive.findById(req.params.id, (err, task) => {
        if(err){
            res.redirect('/')
        } else {
            task.remove();
            req.flash('success', 'Task removed successfully')
            res.redirect('/')
        }
    })
})

module.exports = router;