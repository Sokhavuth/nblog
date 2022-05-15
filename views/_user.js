//views/_user.js
import styles from '../styles/admin/User.module.css'
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Video from './_video.js'
import {useState} from 'react'
import $ from "jquery"

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

export default function Ckeditor() {
  
  const [videos, setVideos] = useState([])
  const formData = {}
  const [content, setContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    formData.title = $('[name="title"]').val()
    formData.content = content
    formData.category = $('[name="category"]').val()
    formData.thumb = $('[name="thumb"]').val()
    formData.date = $('[name="datetime"]').val()
    formData.videos = videos
    formData.email = $('[name="email"]').val()
    formData.password = $('[name="password"]').val()
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }
    
    fetch('/api/user/create', requestOptions)
      .then(response => response.json())
      .then(data=>alert(data.result))
  }

  function getExistVideos(){
    const videos = $('.existVideos').val()
    return videos
  }

  return (
    <div className="Ckeditor">
        <form target='/admin/post' method='post' onSubmit={handleSubmit}>
            <input type='text' className={styles.title} name='title' 
              placeholder='​​​​​​​​​​​​​​​​​​​​ឈ្មោះអ្នក​ប្រើប្រាស់' required />
            
            <CKEditor
                editor={ ClassicEditor }
                config={ editorConfig }
                setContent = {setContent}
                onReady={ (editor) => {
                  //
                } }
                onChange={ ( event, editor ) => {
                  const data = editor.getData()
                  setContent(data)
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
                    <option>​​​​​​​​​​​​​​​​Author</option>
                    <option>Admin</option>
                </select>
                <input className={styles.entry} type='text' name='thumb' 
                  placeholder='តំណរ​ភ្ជាប់​រូប​តំណាង' required />
                <input className={styles.entry} type='datetime-local' 
                  name='datetime' required />
                <input className={styles.entry} type='hidden' 
                  name='videos'/>
                <input className={styles.entry} type='submit' value='បញ្ជូន' />
                <input type='text' disabled />
                <input name='email' className={styles.entry} type='email' required  
                placeholder='Email'/>
                <input name='password' className={styles.entry} type='password' />
                <input type='text' disabled/>
            </div>
        </form>
        <Video 
            setVideos={setVideos} 
            videos={videos} 
            getExistVideos={getExistVideos} 
        />
    </div>
  )
}