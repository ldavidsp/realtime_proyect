const express = require('express');
const http = require('http');
const cors = require('cors');

const PORT = process.env.port || 3303;
//instancia de express
const app = express();

//rutas
const routes = require('./routes/index');
app.use(routes);

//usando cors
app.use(cors());

//instancia del server
const server = http.createServer(app);

//running server
server.listen(PORT, ()=>{
    console.log("running server on ", PORT);
})
