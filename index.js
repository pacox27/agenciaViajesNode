//const express = require('express');
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";


const app = express();

//conectar a la base de datos 
db.authenticate()
    .then(() => console.log("conectado correctamente"))
    .catch(error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Body parser
app.use(express.urlencoded({extend:true}));

//definir carpeta public
app.use(express.static("public"));

//habilitar pug
app.set("view engine","pug");

//obtener el año actual
app.use( (req,res,next) => {
    const year = new Date()
    res.locals.currYear = year.getFullYear();
    res.locals.nombresition = "Agencia de Viajes";
    return next();
});

//Agregar router
app.use("/",router);

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});






