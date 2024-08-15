 import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
 import'../Gallery/gallery.css'
   function Gallery() {
    const[images,setimages] =useState([]);
    const[loading,setLoading] = useState(true);
    const apiKey ="rQuvQJGT4AgsghBt_QQkkx9tsIFMEHhSPQqzuCe9Y80";
    useEffect(()=>{
        fetch (`https://api.unsplash.com/photos/?client_id=${apiKey}`)
        .then(response => response.json())
        .then(data =>{
            setimages(data);
            setLoading(false);
        })
        .catch(error => {
console.log(error)
setLoading(false)
        })
        
    },[])
   return (
     <div className='main-container'>
        {loading && <h1>Loading------------------------</h1>}
        <div className='images-container'>
         {images.map(img=>{
         return(
           <div key={img.id}>
           <img src={img.urls.small}></img>
           </div>      
         )
         })}
       </div>
      </div>
   )
 }
 
 




export default Gallery

