const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//view engine
app.set('view engine', 'ejs');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static
app.use(express.static('public'));

//database
connection.authenticate().then(()=>{
    console.log("Conexão com banco de dados realizada!");
}).catch((error)=>{
    console.log(error);
})

//routes
app.get("/", (req,res)=>{
    res.render("index");
});


//Server connection
app.listen(8080, ()=>{
    console.log("Servidor Funcionando!")
})