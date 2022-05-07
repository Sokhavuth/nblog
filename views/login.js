//views/login.js
import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function Login(props){
    return(
        <div className={styles.container}>
            <Head>
                <title>ទំព័រ​​ចុះ​ឈ្មោះ</title>
                <link rel="icon" href="/images/siteLogo.png" />
            </Head>
            <div className={styles.form_wrapper}>
                <div className={styles.title}>ចុះ​ឈ្មោះ​ចូល​ទំព័រ​គ្រប់គ្រង</div>
                <form action='/api/login' method='post'>
                    <a>Username:</a><input type='text' name='username' required />
                    <a>Email:</a><input type='email' name='email' required />
                    <a>Password:</a><input type='password' name='password' required />
                    <a></a><input type='submit' value='បញ្ជូន' />
                    <a></a><div className={styles.info}>{props.message}</div>
                </form>
            </div>
        </div>
    )
}