//pages/admin/_video.js
import styles from '../styles/admin/Video.module.css'
import $ from 'jquery'

export default function Video(props){

    function createVideo(event){
        event.preventDefault()
        const type = $('.type').val()
        const id = $('.id').val()
        const ending = $('.ending').val()
        
        if(!id){
            return
        }

        const video = {
            "type":type,
            "id":id,
            "ending":ending,
        }  

        const updateVideos = [video,...(props.videos)]
        props.setVideos(updateVideos)
    }

    function removeItem(id){
        const newList = props.videos.filter((item,index) => index !== id)       
        
        props.setVideos(newList);   
    }

    return(
        <>
        <form className={styles.wrapper} onSubmit={createVideo}>
            <select className={`${styles.entry} type`} name='type'>
                <option>YouTube</option>
                <option>YouTubePlaylist</option>
                <option>Facebook</option>
                <option>OK</option>
                <option>Dailymotion</option>
                <option>Vimeo</option>
            </select>
            <input className={`${styles.entry} id`} name='id' type='text' 
            placeholder="អត្តសញ្ញាណវីដេអូ" required />
            <select className={`${styles.entry} ending`} name='ending'>
                <option>ចប់​</option>
                <option>មិន​ទាន់ចប់</option>
                <option>~ ចប់</option>
            </select>
            <input className={styles.entry} 
            type="submit" value="បញ្ចូល​វីដេអូ"/>
        </form>
        <div className={`${styles.videos} videos`}>
            <table className={styles.table}>
            {props.videos.map((item,index,array) => (
                <tr key={index}>
                    <td className={styles.type}>{item.type}</td>
                    <td className={styles.id}>{item.id}</td>
                    <td className={styles.ending}>{item.ending}</td>
                    <td title="លុប" onClick={()=>{removeItem(index)}} className={styles.part}>
                        {`ភាគ `+(array.length-index)}
                    </td>
                </tr>
            ))}
            </table>
        </div>
        </>
    )
}