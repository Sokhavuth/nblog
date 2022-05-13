//models/users/create.js
//npm install bcryptjs
import bcryptjs from 'bcryptjs'
import db from '../setcon.js'

export default async (req,res)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword = bcryptjs.hashSync(req.body.password, 12)

    req.body.id = id
    req.body.password = hashPassword

    await db
    

    res.json({result: `${req.body.title} ត្រូវ​បាន​បញ្ចូល​ក្នុង​មូលដ្ឋាន​ទិន្នន័យ`})
}