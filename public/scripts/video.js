//public/scripts/video.js
import $ from 'jquery'

class Video{
    constructor(){
        this.episode = 0
        
    }

    genJson(){
        const type = $('select[name="type"').val()
        const id = $('input[name="id"').val()
        const ending = $('select[name="ending"').val()
            
        var entries = {
            type: type,
            id: id,
            ending: ending,
        }
        
        var success = false
    
        for(let v in entries){
            if(entries[v] === ''){
                alert('You need to fill the required field '+v)
                success = false
                break
            }else{
                success = true
            }
        }

        if(success){
            let json = $('input[name="entries"]').val()
            entries = {
                type: type,
                id: id,
                ending: ending,
            }
            if((json === '')){
                json = JSON.stringify([entries])
                $('input[name="entries"]').val(json)
            }else{
                json = JSON.parse(json)
                json.push(entries)
                json = JSON.stringify(json)
                $('input[name="entries"').val(json)
            }

            let html = `<td title="Delete" onClick="video.deleteRow(event)" 
            class="episode">${++(this.episode)}</td>`
            for(let v in entries){
                html += `<td class="td${this.episode}">${entries[v]}</td>`
            }

            if($('.viddata').html() === ''){
                $('.viddata').append('<tr>')
                $('.viddata').append('<th>ភាគ/លុប</th>')
                $('.viddata').append('<th>ប្រភេទ​</th>')
                $('.viddata').append('<th>អត្តសញ្ញាណ​</th>')
                $('.viddata').append('<th>ចប់ឬ​នៅ?</th>')
                $('.viddata').append('</tr>')
            }

            //$('.viddata').append(`<tr>${html}</tr>`)
            setVideo((videos) => [...videos, <tr><td title="Delete" onClick={video.deleteRow(event)} 
            class="episode">{++(this.episode)}</td></tr>])
        }
    }

    deleteRow(e){
        e.target.parentElement.remove()
    
        let index = parseInt(e.target.innerHTML)
        index = index - 1
        let json = $('input[name="entries"]').val()
        json = JSON.parse(json)
        json.splice(index, 1)
        json = JSON.stringify(json)
        $('input[name="entries"').val(json)

        this.episode -= 1
        for(let v=0; v<this.episode; v++){
            $('.episode').eq(v).html(v+1)
        }
    }
}

export default new Video()