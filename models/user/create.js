//models/users/create.js
//npm install bcryptjs
import bcryptjs from 'bcryptjs'
import db from '../setConSqlite.js'
import createTable from './createTable.js'

export default async (req,res)=>{

    createTable(db)
    
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword =  bcryptjs.hashSync(req.body.password, 12)

    const myrecord = [
      id,
      req.body.title,
      hashPassword,
      req.body.email,
      req.body.category,
      req.body.thumb,
      req.body.content,
      req.body.video,
      req.body.date
    ]

    let sql = `INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?)`
    db.run(sql,myrecord, function(err){
        if (err) {
          return console.log(err.message)
        }
    })
}