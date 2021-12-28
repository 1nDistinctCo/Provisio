import React, {useState,useEffect} from "react";
import { Picture } from './Picture';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface Props {
    // pictures:Picture[]
}
const initialPictures: Picture[] = [
  {
    title:'No Image',
    image: 'abc',
    description: 'No Image',
    date:'today'
  }
]
const dateToString = (date:Date) => {
  return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}

export const PictureList: React.FC<Props> = () => {
  const today  =new Date()
  const todaysDate = dateToString(today)
  const [pics,setPictures] = useState<Picture[]>(initialPictures)
  const [dateValue, setDate] = useState(today);
  const [count, setCount] = useState('0');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  
  const getPicOfDay = async () =>{
    let queryParams = {}
    console.log(dateToString(dateValue))
    if (dateToString(dateValue) !==todaysDate){
      queryParams = {date:dateToString(dateValue)}
      setDate(today)
    }
    else if(count !== '0'){
      queryParams = {count:count}
      setCount('0')
    }
    try{
      setIsLoading(true)
      const {data}= await axios.get('http://localhost:8000/pod',{params:queryParams,headers:{'Access-Control-Allow-Origin': "http://localhost:8000/pod"}})
      setPictures(data)
    } catch(error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  
}
  useEffect(() => {
    getPicOfDay();
  },[])

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>There was an error trying to load the posts.</p>;
  }
  
  return (
    <>
      <div className="picture-settings">
      <p>Image Date: </p> <DatePicker selected={dateValue} onChange={(dateValue:Date) => setDate(dateValue)} />
      
      <p>Number of Images:</p> 
      <input placeholder="Number of Images" type="text" pattern="[0-9]*" onChange={e => setCount(e.target.value) } />
      <button onClick={()=> getPicOfDay()}>Get Image</button>
      </div>
    
      <ul className="picture">
      {
        pics.map((picture) =>(
          <Picture key={picture.title} picture={picture} />
        ))
      }
      </ul>
    </>
    )
}