import React from "react";
import '../styles/App.css'
interface Props {
    picture:Picture
}
export const Picture: React.FC<Props> = ({picture}) => {
    console.log(picture.image)
    return (
        <div className="picture">
          <h1 >{picture.title}</h1>
          <img src={picture.image} alt={picture.title} style={{
              maxWidth:1280, maxHeight: 720,
              width:'auto',height:'auto'
              
              }}/>
          <p> Date: {picture.date}</p>
          <p>{picture.description}</p>
        </div>
    )
}