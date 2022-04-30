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
            <div className={styles.form_wrapper}>
                <div className={styles.title}>ចុះ​ឈ្មោះ​ចូល​ទំព័រ​គ្រប់គ្រង</div>
                <form>
                    <a>Username:</a><input type='text' required />
                    <a>Email:</a><input type='email' required />
                    <a>Password:</a><input type='password' required />
                    <a></a><input type='submit' value='បញ្ជូន' />
                    <div className={styles.infor}></div>
                </form>
            </div>
        </div>
    )
}