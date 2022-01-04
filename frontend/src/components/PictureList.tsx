import React from "react";
import { Picture } from './Picture';
import axios from 'axios'
import { dateToString } from '../views/pod';
import { initialPictures } from "../objects";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Toast } from "react-bootstrap";
interface Props {

    pictureData:Picture[]
}

const Confirmation = ( toggle:any ) =>{
  return (
    <Toast onClose={() =>toggle(false)}>
      <Toast.Header>
        <strong className='me-auto'>We are filtering the images</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>
        Your Images will be viewable shortly.
      </Toast.Body>
    </Toast>
  )
}
const getPicOfDay = async (filter:string,count:string,dateValue:Date,today:Date,dateRange:any) =>{
  let queryParams = {}
  if (filter === 'date' && dateToString(dateValue) !== dateToString(today)){
    queryParams = {date:dateToString(dateValue)}
  }
  else if (filter === 'numberOfImages' && count !== '0'){
    queryParams = {count:count}
  }
  else if (filter === 'dateRange'){
    queryParams = {start_date:dateToString(dateRange.startDate), end_date:dateToString(dateRange.endDate)}
  }

  try{
    const {data}= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pod`,{params:queryParams,headers:{'Access-Control-Allow-Origin': `${process.env.BACKEND_URL}/pod`}})
    return data
  } catch(error) {
    console.log(error)
    return initialPictures
  } 

}

const PictureList: React.FC<Props> = ({pictureData}) => {

  
  return (
    <>
    <Confirmation/>
    <Row>
    {
      pictureData.map((picture) =>(
        <Picture key={picture.title} picture={picture} />
      ))
    }
    </Row>
    </>
    
    )
}

export {PictureList, getPicOfDay }