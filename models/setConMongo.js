//models/conMongoDB.js
//npm install mongodb
 
import {MongoClient} from 'mongodb'
const mymongo = MongoClient
const url = process.env.DATABASE_URI
 
let resultPromise = new Promise(function(resolve,reject){
    mymongo.connect(url, {useUnifiedTopology:true}, function(err, db){
        if (err) throw err
        const mydb = db.db(process.env.DB_NAME)
        if(mydb){
            resolve(mydb)
            console.log('Connected to the main database!!')
        }else{
            reject("Error occured!")
        }
    })
})
 
async function awaitPromise(){
    let mydb = await resultPromise
    return mydb
}
 
export default awaitPromise()