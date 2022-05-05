//pages/admin/_video.js
import styles from '../../styles/admin/video.module.css'


export default function Video(props){

    return(
        <>
        <div className={styles.wrapper}>
            <select className={styles.entry} name='type'>
                <option>YouTube</option>
                <option>YouTubePlaylist</option>
                <option>Facebook</option>
                <option>OK</option>
                <option>Dailymotion</option>
                <option>Vimeo</option>
            </select>
            <input className={styles.entry} name='id' type='text' 
            placeholder="អត្តសញ្ញាណវីដេអូ" required />
            <select className={styles.entry} name='ending'>
                <option>ចប់​</option>
                <option>មិន​ទាន់ចប់</option>
                <option>~ ចប់</option>
            </select>
            <input className={styles.entry} 
            type="button" value="បញ្ចូល​វីដេអូ" />
        </div>
        <div className={styles.video}>
            <div>ភាគ/លុប</div>
            <div>អត្តសញ្ញាណវីដេអូ</div>
            <div>ចប់​ឬ​នៅ</div>
            <buttion></buttion>
        </div>
        </>
    )
}