const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskEight           = require('../models/classEight');

// CLASS eight
router.get('/', (req,res) => {
    res.render('classEight/eight')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskEight.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskEight.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classEight/edit', {taskEight: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskEight.findByIdAndUpdate(req.params.id, req.body.task, (err, TaskEight) => {
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
    TaskEight.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classEight/delete', {taskEight: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskEight.findById(req.params.id, (err, task) => {
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