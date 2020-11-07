const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskFour           = require('../models/classFour');

// CLASS ONE
router.get('/', (req,res) => {
    res.render('classFour/four')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskFour.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskFour.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classFour/edit', {taskFour: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskFour.findByIdAndUpdate(req.params.id, req.body.task, (err, taskOne) => {
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
    TaskFour.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classFour/delete', {taskFour: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskFour.findById(req.params.id, (err, task) => {
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