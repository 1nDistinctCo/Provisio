import React, {useState,useEffect} from "react";
import { Picture } from './Picture';
import axios from 'axios'
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


export const PictureList: React.FC<Props> = () => {
  const [pics,setPictures] = useState<Picture[]>(initialPictures)
  const [trace,setTrace] = useState<any>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const getPicOfDay = async () =>{
      try{
        setIsLoading(true)
        const {data}= await axios.get('http://localhost:8000/pod',{params:{count:1},headers:{'Access-Control-Allow-Origin': "http://localhost:8000/pod"}})
        setPictures(data)
      } catch(error) {
        setIsError(true)
        setTrace(error)
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
    return <p>There was an error trying to load the posts.{JSON.stringify(trace)}</p>;
  }
  
  return (
      <ul>
      {
        pics.map((picture) =>(
          <Picture key={picture.title} picture={picture} />
        ))
      }
      </ul>
    )
}