//import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import styles from '../../styles/admin/Post.module.css'

let editorConfig = {
  toolbar: ['fontfamily', 'fontsize', 'fontcolor', 'bold', 'italic',
        'alignment', 'bulletedList', 'indent', 'outdent', 
        'numberedList', 'link', 'blockQuote', 'HtmlEmbed', 
        'codeblock', 'imageinsert', 'mediaembed', 'undo', 'redo' ],
  fontFamily: {
    options: [
        'ឧត្តមាន​ជ័យ, OdorMeanChey', 'អក្សរដៃ, HandWriting',
        'គូលេន, Koulen', 'ក្រូច​ឆ្នារ, Limonf3',
        'បាយ័ន, Bayon', 'ក្រសាំង, Rooster',
        'មូល, Moul',
        'Arial, Helvetica, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif',
    ],
    supportAllValues: true
  },
  
  fontSize: {
    options: [9,11,13,'default',17,19,21],
    supportAllValues: true
  },
}

export default function Ckeditor(ckeditor) {
    
  return (
    <div className="Ckeditor">
        <form target='/admin/post' method='post'>
            <input type='text' className={styles.title} name='title' 
            placeholder='ចំណងជើង' required />
            <CKEditor
                editor={ ClassicEditor }
                config={ editorConfig }
                onReady={ (editor) => {
                    ckeditor = editor
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData()
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor )
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor )
                } }
            />
            <input type='hidden' name='content' />
            <div className={styles.wrapper}>
                <select className={styles.entry} name='category'>
                    <option>​​​​​​​​​​​​​​​​ការផ្សាយ</option>
                    <option>ជំពូក</option>
                </select>
                <input className={styles.entry} type='text' name='thumb' 
                placeholder='តំណរ​ភ្ជាប់​រូប​តំណាង'required/>
                <input className={styles.entry} type='datetime-local' 
                name='datetime' required />
                <input className={styles.entry} type='hidden' 
                name='entries' value='' />
                <input className={styles.entry} type='submit' value='បញ្ជូន' />
            </div>
        </form>

        <div className={styles.form}>
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
        <table className='viddata'></table>
    </div>
  )
}