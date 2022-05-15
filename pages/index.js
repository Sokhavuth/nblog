//pages/index.py

export async function getServerSideProps(context){
    try{
        let module = await import('../models/setConSqlite.js')
        const mydb = await module.default

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