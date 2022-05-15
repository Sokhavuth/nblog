//pages/api/user/[user].js

export default async function user(req,res){
    const {user} = req.query
    if(user === 'create'){
        const module = await import('../../../models/user/create.js')
        module.default(req,res)
    }

    res.json({result: "It work!"})
}