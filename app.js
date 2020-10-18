const express = require('express'),
      app     = express(),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      flash   = require('connect-flash'),
      TaskOne = require('./models/classOne'),
      TaskTwo = require('./models/classTwo'),
      TaskThree = require('./models/classThree'),
      TaskFour = require('./models/classFour'),
      TaskFive = require('./models/classFive'),
      TaskSix = require('./models/classSix'),
      bodyParser = require('body-parser')

const url = process.env.MONGOURL || 'mongodb://localhost/due'; ;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() =>{
    console.log('Connected to Database!');
}).catch(err => {
    console.log('ERROR', err.message);
});      

// SAVE SESSION

app.use(require('express-session')({
    secret: 'CPA Class of 2023!!!',
    resave: false,
    saveUninitialized: false
}));

// APP CONFIG

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

// HOME PAGE

app.get('/', (req, res) => {
    TaskOne.find({}, (err, allOnes) => {
        if(err){
            console.log(err);
        } else {
            TaskTwo.find({}, (err, allTwos) => {
                if(err){
                    console.log(err);
                } else {
                    TaskThree.find({}, (err, allThrees) => {
                        if(err){
                            console.log(err);
                        } else {
                            TaskFour.find({}, (err, allFours) => {
                                if(err){
                                    console.log(err);
                                } else {
                                    TaskFive.find({}, (err, allFives) => {
                                        if(err){
                                            console.log(err);
                                        } else {
                                            TaskSix.find({}, (err, allSixes) => {
                                                if(err){
                                                    console.log(err);
                                                } else {
                                                    res.render("index", {
                                                        taskOnes: allOnes,
                                                        taskTwos: allTwos,
                                                        taskThrees: allThrees,
                                                        taskFours: allFours,
                                                        taskFives: allFives,
                                                        taskSixes: allSixes
                                                        });
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

// REQUIRE ROUTES

const oneRoutes = require('./routes/classOne'),
      twoRoutes = require('./routes/classTwo'),
      threeRoutes = require('./routes/classThree'),
      fourRoutes = require('./routes/classFour'),
      fiveRoutes = require('./routes/classFive'),
      sixRoutes = require('./routes/classSix');

// ROUTES CONFIG

app.use('/one', oneRoutes);
app.use('/two', twoRoutes);
app.use('/three', threeRoutes);
app.use('/four', fourRoutes);
app.use('/five', fiveRoutes);
app.use('/six', sixRoutes);

// LISTEN  PORT

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, () => {
    console.log("Server started " + port);
});