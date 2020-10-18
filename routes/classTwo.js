const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskTwo          = require('../models/classTwo');

// CLASS TWO
router.get('/', (req,res) => {
    res.render('classTwo/two')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date;

   

    const newTask = { task: task, date: date};

    TaskTwo.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskTwo.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classTwo/edit', {taskTwo: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskTwo.findByIdAndUpdate(req.params.id, req.body.task, (err, taskOne) => {
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
    TaskTwo.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classTwo/delete', {taskTwo: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskTwo.findById(req.params.id, (err, task) => {
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