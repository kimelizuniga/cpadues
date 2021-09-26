const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskSeven          = require('../models/classSeven');

// CLASS seven
router.get('/', (req,res) => {
    res.render('classSeven/seven')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskSeven.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskSeven.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classSeven/edit', {taskSeven: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskSeven.findByIdAndUpdate(req.params.id, req.body.task, (err, TaskSeven) => {
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
    TaskSeven.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classSeven/delete', {taskSeven: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskSeven.findById(req.params.id, (err, task) => {
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