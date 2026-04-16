import {leerService} from '../services/leer.service.js'


export function leerController (req, res){
    res.send(leerService())
}