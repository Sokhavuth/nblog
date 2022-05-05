//pages/api/login.js
import db from '../../models/setcon.js'
import {withIronSessionApiRoute} from "iron-session/next"

export default withIronSessionApiRoute(
    async function loginRoute(req,res) {
        const mydb = await db
        let user = await mydb.collection('users').findOne({username:req.body.username})

        if(user){
            if(user.email === req.body.email){
                if(user.password === req.body.password){
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
    },
    {
        cookieName: "myapp_cookiename",
        password: process.env.SECRET_KEY,
        cookieOptions:{
            secure: process.env.NODE_ENV === "production",
        },
    },
)