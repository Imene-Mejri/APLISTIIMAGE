import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'


export default function Listimage() {
    const [image,setimage]=useState([])
    useEffect(() => {
      
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => setimage(res.data))
        .catch(err => alert(err))
      
    }, [])
  console.log(image.length)
    
    return (
        <div className='bigcard'>
           {image.map(el=>{
               <div className='container'>
                  
                  <h3>title:<span>{el.title}</span></h3>
                     <h3>picture: <img src= {el.url}/></h3>
                     <h3>picture1: <img src={el.thumbnailUrl}/></h3>

               </div>
           })}
            
        </div>
    )
}
