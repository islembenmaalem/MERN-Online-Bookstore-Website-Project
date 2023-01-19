var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const mongoose = require('mongoose');
const { Server } = require('mongodb');
mongoose.Promise = global.Promise;
const cors=require('cors');

app.use(cors());


const dbConfig = require('./config/userdb.config.js');
// Connexion à la base de données
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
        }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
        });
    app.get('/', (req, res) =>{ 
        res.json({"message":"Welcome"});  
    });
require('./routes/user.routes.js')(app);

app.listen(3002,()=>{console.log("Node server is running..")});