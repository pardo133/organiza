import { userModel } from "../models/user.model.js"

// 1. Añade 'async' aquí
export async function leerService(){
    // 2. Añade 'await' aquí
    return await userModel.find()
}