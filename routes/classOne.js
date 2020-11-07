const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskOne           = require('../models/classOne');

// CLASS ONE
router.get('/', (req,res) => {
    res.render('classOne/one')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskOne.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskOne.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classOne/edit', {taskOne: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskOne.findByIdAndUpdate(req.params.id, req.body.task, (err, taskOne) => {
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
    TaskOne.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classOne/delete', {taskOne: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskOne.findById(req.params.id, (err, task) => {
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