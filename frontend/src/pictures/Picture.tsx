import React from "react";
interface Props {
    picture:Picture
}
export const Picture: React.FC<Props> = ({picture}) => {
    console.log(picture.image)
    return (
        <div>
          <h1>{picture.title}</h1>
          <img src={picture.image} alt={picture.title}/>
          <p>{picture.date}</p>
          <p>{picture.description}</p>
        </div>
    )
}