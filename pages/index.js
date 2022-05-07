//pages/index.py

export async function getServerSideProps(context){
    try{
        const module = await import('../models/setcon.js')
        await module.default
        return{
            props: { isConnected: 'Yes' },
        }
    }catch(e){
        console.error(e)
        return{
            props: { isConnected: 'No' },
        }
    }
}

import Index from '../views/index.js'
export default function indexRoute(props){
  return(
    <Index props={props} />
  )
}