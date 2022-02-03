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
      TaskSeven = require('./models/classSeven'),
      TaskEight = require('./models/classEight'),
      TaskNine = require('./models/classNine'),
      TaskTen = require('./models/classTen'),
      TaskEleven = require('./models/classEleven'),
      TaskTwelve = require('./models/classTwelve'),
      User    = require('./models/user'),
      LocalStrategy             = require('passport-local'),
      bodyParser = require('body-parser'),
      passport   = require("passport");

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

// PASSPORT CONFIG

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// HOME PAGE

app.get('/', (req, res) => {
    TaskOne.find({}, (err, allOnes) => {
        TaskTwo.find({}, (err, allTwos) => {
            TaskThree.find({}, (err, allThrees) => {
                TaskFour.find({}, (err, allFours) => {
                    TaskFive.find({}, (err, allFives) => {
                        TaskSix.find({}, (err, allSixes) => {
                            TaskSeven.find({}, (err, allSevens) => {
                                TaskEight.find({}, (err, allEights) => {
                                    TaskNine.find({}, (err, allNines) => {
                                        TaskTen.find({}, (err, allTens) => {
                                            TaskEleven.find({}, (err, allElevens) => {
                                                TaskTwelve.find({}, (err, allTwelves) => {
                                                    res.render("index", {
                                                        taskOnes: allOnes.sort((a, b) => a.date - b.date),
                                                        taskTwos: allTwos.sort((a, b) => a.date - b.date),
                                                        taskThrees: allThrees.sort((a, b) => a.date - b.date),
                                                        taskFours: allFours.sort((a, b) => a.date - b.date),
                                                        taskFives: allFives.sort((a, b) => a.date - b.date),
                                                        taskSixes: allSixes.sort((a, b) => a.date - b.date),
                                                        taskSevens: allSevens.sort((a, b) => a.date - b.date),
                                                        taskEights: allEights.sort((a, b) => a.date - b.date),
                                                        taskNines: allNines.sort((a, b) => a.date - b.date),
                                                        taskTens: allTens.sort((a, b) => a.date - b.date),
                                                        taskElevens: allElevens.sort((a, b) => a.date - b.date),
                                                        taskTwelves: allTwelves.sort((a, b) => a.date - b.date),
                                                    })
                                                })
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

})

// REGISTER

app.get('/register', (req, res) => {
    res.render("register");
})

app.post('/register', (req,res) => {
    req.body.username
    req.body.password
    const newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            return res.redirect('/register');
        }
        req.flash('success', 'Successfully registered - Now logged in as ' + req.body.username)
        passport.authenticate('local')(req, res, () => {
            res.redirect('/');
        })
    })
})

app.post('/login', passport.authenticate('local',
{   
    failureRedirect: '/',
    failureFlash: true
    }), (req, res) => {
        req.flash('success', 'Successfully logged in');
        res.redirect('/')
});


//LOGOUT ROUTE

app.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/");
});


// REQUIRE ROUTES

const oneRoutes = require('./routes/classOne'),
      twoRoutes = require('./routes/classTwo'),
      threeRoutes = require('./routes/classThree'),
      fourRoutes = require('./routes/classFour'),
      fiveRoutes = require('./routes/classFive'),
      sixRoutes = require('./routes/classSix'),
      sevenRoutes = require('./routes/classSeven'),
      eightRoutes = require('./routes/classEight'),
      nineRoutes = require('./routes/classNine'),
      tenRoutes = require('./routes/classTen'),
      elevenRoutes = require('./routes/classEleven');
      twelveRoutes = require('./routes/classTwelve');

// ROUTES CONFIG

app.use('/one', oneRoutes);
app.use('/two', twoRoutes);
app.use('/three', threeRoutes);
app.use('/four', fourRoutes);
app.use('/five', fiveRoutes);
app.use('/six', sixRoutes);
app.use('/seven', sevenRoutes);
app.use('/eight', eightRoutes);
app.use('/nine', nineRoutes);
app.use('/ten', tenRoutes);
app.use('/eleven', elevenRoutes);
app.use('/twelve', twelveRoutes);

// LISTEN  PORT

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, () => {
    console.log("Server started " + port);
});