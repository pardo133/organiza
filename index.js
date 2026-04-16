import express from 'express';
import { leerController } from './controllers/leer.controller.js';


const app = express(); 
const port = 3000;


app.use(express.json()); 


app.get('/', (req, res) => {
    res.send("conectado")
   
});

app.post('/lectura', leerController)


app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});