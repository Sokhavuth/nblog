//pages/login.js
import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Login(){
    return(
        <div className={styles.container}>
            <Head>
                <title>ទំព័រ​​ចុះ​ឈ្មោះ</title>
                <link rel="icon" href="/images/siteLogo.png" />
            </Head>
        </div>
    )
}