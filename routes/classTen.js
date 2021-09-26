const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskTen           = require('../models/classTen');

// CLASS ten
router.get('/', (req,res) => {
    res.render('classTen/ten')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    TaskTen.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskTen.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classTen/edit', {taskTen: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskTen.findByIdAndUpdate(req.params.id, req.body.task, (err, TaskTen) => {
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
    TaskTen.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classTen/delete', {taskTen: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskTen.findById(req.params.id, (err, task) => {
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