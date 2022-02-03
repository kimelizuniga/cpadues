const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskTwelve           = require('../models/classTwelve');

// CLASS eleven
router.get('/', (req,res) => {
    res.render('classTwelve/twelve')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskTwelve.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskTwelve.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classTwelve/edit', {taskTwelve: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskTwelve.findByIdAndUpdate(req.params.id, req.body.task, (err, TaskTwelve) => {
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
    TaskTwelve.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classEleven/delete', {taskTwelve: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskTwelve.findById(req.params.id, (err, task) => {
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