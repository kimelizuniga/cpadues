const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        Tasknine           = require('../models/classNine');

// CLASS nine
router.get('/', (req,res) => {
    res.render('classNine/nine')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date,
          submittal    = req.body.submittal;

   

    const newTask = { task: task, date: date, submit: submittal};

    Tasknine.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Tasknine.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classNine/edit', {taskNine: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    Tasknine.findByIdAndUpdate(req.params.id, req.body.task, (err, Tasknine) => {
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
    Tasknine.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classNine/delete', {taskNine: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    Tasknine.findById(req.params.id, (err, task) => {
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