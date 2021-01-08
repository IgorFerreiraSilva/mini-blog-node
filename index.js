const express = require("express");
const app = express();

//view engine
app.set('view engine', 'ejs');

//routes
app.get("/", (req,res)=>{
    res.send("Bem-vindo ao site");
});


//Server connection
app.listen(8080, ()=>{
    console.log("Servidor Funcionando!")
})