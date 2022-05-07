//pages/login.js
import {withIronSessionSsr} from "iron-session/next"
export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req,res }) {
        if(req.session.user){
            return {
                redirect: {
                    permanent: false,
                    destination: "/admin/post",
                },
                props:{},
            }
        }else{
            const message = req.session.message
            if(message){
                delete req.session.message
                await req.session.save()
                return {
                    props: {
                        message: message,
                    },
                }
            }else{
                return {
                    props: {
                        message: '',
                    },
                }
            }
        }
    },
    {
        cookieName: "myapp_cookiename",
        password: process.env.SECRET_KEY,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    },
)

import Login from '../views/login.js'
export default function loginRoute(props){
    return(
        <Login props={props}/>
    )
}