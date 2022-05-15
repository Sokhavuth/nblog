//models/users/create.js
//npm install bcryptjs
import bcryptjs from 'bcryptjs'

export default async (db)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword = bcryptjs.hashSync('xxxxx', 12)

    const myrecord = [id,'xxxxx',hashPassword,'xxxxxx']
    await db

    let sql = `INSERT INTO users(userid,title,password,email) VALUES(?,?,?,?)`
    db.run(sql,myrecord, function(err){
        if (err) {
          return console.log(err.message)
        }
        console.log('User has been successfully inserted into the database!!')
    })
}