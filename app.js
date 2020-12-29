const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const path = require('path')
const db = require('./database/connections');
const bodyParser = require('body-parser');
const Job = require('./models/Job');
const  Sequelize  = require('sequelize');
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Servidor Rodando na ${PORT}`);
});

// body parser 
app.use(bodyParser.urlencoded({extended: false}));

// handle bars 
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

// static folder 
app.use(express.static(path.join(__dirname,'public')));


// db connection
// Promisse para Conectar ao Banco de Dados
db
    .authenticate()
    .then(()=>{
        console.log("Conectado com Sucesso ");
    }).catch(err =>{
        console.log("Erro ao se Conectar",err);
    });



// routes 
app.get('/', (req,res)=>{
    let search = req.query.job;
    let query = '%'+search+'%';
    if(!search){
        Job.findAll({order:[
            ['createdAt','DESC']
        ]}).then(jobs=>{
                res.render('index',{
                    jobs
                });
        }).catch(err=> console.log(err));
    } else {
        Job.findAll({
            where:{title: {[Op.like]:query}},
            order:[
            ['createdAt','DESC']
        ]}).then(jobs=>{
                res.render('index',{
                    jobs, search
                });
        });
    }


    
});

// jobs routes 
app.use('/jobs', require('./routes/routes'));