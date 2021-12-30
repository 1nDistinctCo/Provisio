import React from "react";
import { Picture } from './Picture';
import axios from 'axios'
import { dateToString } from '../views/pod';
import { initialPictures } from "../objects";
import "react-datepicker/dist/react-datepicker.css";
interface Props {

    pictureData:Picture[]
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
    const {data}= await axios.get('http://localhost:8000/pod',{params:queryParams,headers:{'Access-Control-Allow-Origin': "http://localhost:8000/pod"}})
    return data
  } catch(error) {
    console.log(error)
    return initialPictures
  } 

}

const PictureList: React.FC<Props> = ({pictureData}) => {

  
  return (
    <>
      <ul className="picture">
      {
        pictureData.map((picture) =>(
          <Picture key={picture.title} picture={picture} />
        ))
      }
      </ul>
    </>
    )
}

export {PictureList, getPicOfDay }