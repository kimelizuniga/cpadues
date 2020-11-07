const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskSix           = require('../models/classSix');

// CLASS ONE
router.get('/', (req,res) => {
    res.render('classSix/six')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskSix.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskSix.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classSix/edit', {taskSix: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskSix.findByIdAndUpdate(req.params.id, req.body.task, (err, taskSix) => {
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
    TaskSix.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classSix/delete', {taskSix: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskSix.findById(req.params.id, (err, task) => {
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