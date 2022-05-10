//controllers/user/create.js

import { redirect } from 'next/dist/server/api-utils'

export default async (req,res)=>{
    const module = await import('../../models/user/create.js')
    module.default(req,res)
    
}