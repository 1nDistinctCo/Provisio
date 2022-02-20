import React from "react";
import '../styles/styles.scss'
import { Card } from 'react-bootstrap';
interface Props {
    picture:Picture
}
export const Picture: React.FC<Props> = ({picture}) => {
    
    return (
        <Card className="card">
            <Card.Title>{picture.title}</Card.Title>
            <Card.Subtitle>Date: {picture.date}</Card.Subtitle>
            <Card.Img src={picture.image} alt={picture.title} style={{
              maxWidth:1280, maxHeight: 720,
              width:'auto',height:'auto'
              
              }}/>
            <Card.Body>{picture.description}</Card.Body>
        </Card>
    )
}