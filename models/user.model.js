import { db } from "../config/db.js"
import mongoose from 'mongoose'; // Necesitas esta línea AUNQUE ya esté en db.js

// Ahora define el esquema usando la librería que acabas de importar
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String
});

export const userModel = mongoose.model('User', userSchema);