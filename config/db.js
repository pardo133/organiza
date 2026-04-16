
import  mongoose from "mongoose"

    export const db = await mongoose.connect('mongodb://ruizpardo133_db_user:HBzcGo0h8GZ445UC@ac-0gtx7cj-shard-00-00.rijyou0.mongodb.net:27017,ac-0gtx7cj-shard-00-01.rijyou0.mongodb.net:27017,ac-0gtx7cj-shard-00-02.rijyou0.mongodb.net:27017/marzo2026?replicaSet=atlas-ym6poq-shard-0&ssl=true&authSource=admin' )
    .then(()=>{
           console.log("conectado por console.log")
        return "conectado"
     

    })
    .catch((e)=>{
        console.log("no conectado")
        return e.message

    })
    
