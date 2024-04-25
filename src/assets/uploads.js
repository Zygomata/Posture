import React, {useState} from 'react'
import './uploads.css';
import image from'./images/insertImage.jpeg';


export const ImageUpload = () => {
  
    const [file, setFile] = useState("")
  
    function handleChange(event) {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    return (
    <div className='container'>
            <div>
                
                <input type="file" className='image' onClick={handleChange} accept="image/png, image/jpeg" 
                style={{ backgroundImage: `url(${image})` }}/> 
            </div>
            <button> Check Posture  </button>

    </div>
  )
}
