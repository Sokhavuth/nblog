//pages/api/login.js
import db from '../../models/setConSqlite.js'
import {withIronSessionApiRoute} from "iron-session/next"
import bcryptjs from 'bcryptjs'

export default withIronSessionApiRoute(
    async function loginRoute(req,res) {
        const mydb = db

        let sql = `SELECT * FROM users WHERE title = '${req.body.username}'`
        
        mydb.all(sql,async function(err,user){
            if (err) {
                return console.log(err.message)
            }
            bcryptjs.hashSync(req.body.password, 12)
            if(user.length > 0){
                if(user[0].email === req.body.email){
                    const verified = bcryptjs.compareSync(req.body.password, user[0].password)
                    if(verified){
                        req.session.user = user
                        await req.session.save()
                        res.redirect('/admin/post')
                    }else{
                        req.session.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ!'
                        await req.session.save()
                        res.redirect('/login')
                    }
    
                }else{
                    req.session.message = 'Email មិន​ត្រឹមត្រូវ​ទេ!'
                    await req.session.save()
                    res.redirect('/login')
                }
            }else{
                req.session.message = 'ឈ្មោះ​អ្នក​ប្រើប្រាស់​មិន​ត្រឹមត្រូវ​ទេ!'
                await req.session.save()
                res.redirect('/login')
            }
        })
    },
    {
        cookieName: "myapp_cookiename",
        password: process.env.SECRET_KEY,
        cookieOptions:{
            secure: process.env.NODE_ENV === "production",
        },
    },
)