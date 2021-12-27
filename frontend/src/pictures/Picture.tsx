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
          <img src={picture.image} alt={picture.title} style={{width: 600, height: 600}}/>
          <p> Date: {picture.date}</p>
          <p>{picture.description}</p>
        </div>
    )
}