//models/setConSqlite.js
//npm install sqlite3

import sqlite3 from 'sqlite3'
import path from 'path'
 
const __dirname = path.resolve()
let db = new sqlite3.Database(path.join(__dirname, 'models/database.sqlite3'),(err)=>{
    if(err){
        console.error(err.message);
    }
    console.log('Connected to the main database!!')
})
 
export default db