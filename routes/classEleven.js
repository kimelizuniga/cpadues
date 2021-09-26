const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskEleven           = require('../models/classEleven');

// CLASS eleven
router.get('/', (req,res) => {
    res.render('classEleven/eleven')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskEleven.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskEleven.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classEleven/edit', {taskEleven: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskEleven.findByIdAndUpdate(req.params.id, req.body.task, (err, TaskEleven) => {
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
    TaskEleven.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classEleven/delete', {taskEleven: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskEleven.findById(req.params.id, (err, task) => {
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