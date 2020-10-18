const   express           = require("express"),
        app               = express(),
        router            = express.Router(),
        TaskThree           = require('../models/classThree');

// CLASS THREE
router.get('/', (req,res) => {
    res.render('classThree/Three')
})

router.post('/', (req, res) => {
    let   task         = req.body.task,
          date         = req.body.date;

   

    const newTask = { task: task, date: date};

    TaskThree.create(newTask, (err, newCreated) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    TaskThree.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classThree/edit', {taskThree: foundTask})
        }
    })
})

router.put('/:id', (req, res) => {
    TaskThree.findByIdAndUpdate(req.params.id, req.body.task, (err, taskThree) => {
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
    TaskThree.findById(req.params.id, (err, foundTask) => {
        if(err){
            console.log(err)
        } else {
            res.render('classThree/delete', {taskThree: foundTask})
        }
    })
})

router.delete('/:id', (req, res) => {
    TaskThree.findById(req.params.id, (err, task) => {
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