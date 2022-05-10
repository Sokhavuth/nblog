//models/users/create.js
//npm install bcryptjs
import bcryptjs from 'bcryptjs'

export default async (req,res)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword = bcryptjs.hashSync(req.body.password, 12)

    req.body.id = id
    req.body.password = hashPassword

    res.json({result: JSON.stringify(req.body)})
}