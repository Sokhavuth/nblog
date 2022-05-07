//pages/admin/index.js
import Head from 'next/head'
import styles from '../../styles/admin/Index.module.css'
import settings from '../../settings.js'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {useState,useEffect} from 'react'

import {withIronSessionSsr} from "iron-session/next"

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps(ctx) {
        let mySettings = await settings()
        
        if(ctx.req.session.user){
            if(ctx.params.page === 'post'){
                mySettings.pageTitle = 'ទំព័រ​ការផ្សាយ'
                mySettings.page = 'post'
            }else if(ctx.params.page === 'user'){
                mySettings.pageTitle = 'ទំព័រ​អ្នក​ប្រើប្រាស់'
                mySettings.page = 'user'
            }

            return {
                props: mySettings,
            }
        }else{
            return {
                redirect: {
                    permanent: false,
                    destination: "/login",
                },
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

export default function Index(props){
    
    let ckeditor
    let Page = null
    if(props.page === 'post'){
        Page = dynamic(() => import('../../views/_post.js'),{ ssr: false })
    }else if(props.page === 'user'){
        Page = dynamic(() => import('../../views/_user.js'),{ ssr: false })
    }

    return(
        <div className={styles.Index}>
            <Head>
                <title>{props.siteTitle} | {props.pageTitle}</title>
                <link rel="icon" href="/images/siteLogo.png" />
            </Head>

            <div className={styles.menuWrapper}>
                <div className={`${styles.menu} region`}>
                    <div className={styles.logo}>{props.pageTitle}</div>
                    <form>
                        <select name='label'>
                            <option>ការផ្សាយ</option>
                        </select>
                        <input type='text' name='querry' placeholder='ស្វែង​រក'/>
                        <input type='submit' value='បញ្ជូន' />
                    </form>
                    <div className={styles.logout}>
                        <Link href="/"><a>ទំព័រ​មុខ</a></Link> | <Link href="/api/logout"><a>ចេញ​ក្រៅ</a></Link>
                    </div>
                </div>
            </div>

            <div className={`${styles.main} region`}>
                <div className={styles.sidebar}>
                    <div className={styles.inner}>
                        <Link href='/admin/post'><a><img src='/images/movie.png' /></a></Link>
                        <Link href='/admin/post'><a>ការផ្សាយ</a></Link>
            
                        <Link href='/admin/category'><a><img src='/images/category.png' /></a></Link>
                        <Link href='/admin/category'><a>ជំពូក</a></Link>
            
                        <Link href='/admin/book'><a><img src='/images/books.png' /></a></Link>
                        <Link href='/admin/book'><a>សៀវភៅ</a></Link>
            
                        <Link href='/admin/upload'><a><img src='/images/upload.png' /></a></Link>
                        <Link href='/admin/upload'><a>Upload</a></Link>
            
                        <Link href='/admin/user'><a><img src='/images/users.png' /></a></Link>
                        <Link href='/admin/user'><a>អ្នក​ប្រើប្រាស់</a></Link>
            
                        <Link href='/admin/setting'><a><img src='/images/setting.png' /></a></Link>
                        <Link href='/admin/setting'><a>Setting</a></Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <Page editor={ckeditor}/>
                    
                </div>
            </div>

            <div className={`${styles.status} region`}>សរុប​ទាំងអស់​មានចំនួនៈ </div>

            <ul className={styles.items}></ul>

            <div className={`${styles.paginate} region`}>
                <a><img src="/images/paginate.png" /></a>
            </div>
        </div>
    )
}