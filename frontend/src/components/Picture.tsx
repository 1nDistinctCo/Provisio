import React from "react";
import '../styles/styles.css'
interface Props {
    picture:Picture
}
export const Picture: React.FC<Props> = ({picture}) => {
    
    return (
        <div>
          <h1 >{picture.title}</h1>
          <h3>Date: {picture.date}</h3>
          <img src={picture.image} alt={picture.title} style={{
              maxWidth:1280, maxHeight: 720,
              width:'auto',height:'auto'
              
              }}/>
          
          <p>{picture.description}</p>
        </div>
    )
}