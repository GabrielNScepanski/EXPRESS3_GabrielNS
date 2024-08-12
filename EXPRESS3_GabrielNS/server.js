const express=require('express');
const mysql =require('mysql2');

const app = express();

app.listem(3000, ()=>{
    console.log("Servidor em execução");
})


const connection =mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    passoword: 'QLOP4TDcQGB2R97Djet7vXYHggatTSZE4',
    database: 'nodejs_tasks',
}) 
connection.conect(error =>{
    if(error){
    connection.connect('erro na conexão ao MySql'+console.error.message)
    return
    }
    console.log("Conexão realizada com sucesso")
})
 