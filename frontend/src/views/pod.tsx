import React, {useState,useEffect} from 'react'
import { PictureList, getPicOfDay } from '../components/PictureList';
import DatePicker from "react-datepicker";
import { initialPictures } from '../objects';
import { Card } from 'react-bootstrap';
interface Props{}

const dateToString = (date:Date) => {
  return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}


const Pod:React.FC<Props> = () => {
  const today = new Date()
  const [dateValue, setDate] = useState(today);
  const [dateRange, setDateRange] = useState({startDate: today, endDate: today });
  const [count, setCount] = useState('0');
  const [pics,setPictures] = useState<Picture[]>(initialPictures)
  const [filter,setFilter] = useState<string>('date')
  
  const setPics = async () => {
    setPictures( await getPicOfDay(filter,count,dateValue,today, dateRange))
  } 
  
  const getFilter = () => {
    if (filter === 'date'){
      return (
      <span>
      Date: <DatePicker selected={dateValue} onChange={(dateValue:Date) => setDate(dateValue)} />
      </span>
      )}
    else if (filter === 'numberOfImages'){
      return (<span>
      
      <input value={count} placeholder="Number of Images" type="number" min="1" onChange={e => {
        let val =Number(e.target.value)
        if (val < 1 ){val = 1}
        setCount(String(val))
       }} />
      </span>
      )}
    else if (filter === 'dateRange'){
      return (<span>
      Start Date: <DatePicker selected={dateRange['startDate']} onChange={(dateValue:Date) => setDateRange({startDate: dateValue, endDate: dateRange['endDate'] })} />
      End Date: <DatePicker selected={dateRange['endDate']} onChange={(dateValue:Date) => setDateRange({startDate: dateRange['startDate'], endDate: dateValue  })} />
      </span>
      )}
  }

  useEffect(() => {
    setPics()
  },[])

  const htmlFilter = getFilter()
  return (
    
    <div className="filter">
      <div >
      <h3>Filters</h3>
      <select value={filter} onChange={(e) => {
        setFilter(e.target.value)
        }}>
          
      <option value="date">Date Of Image</option>
      <option value="numberOfImages">Number of Random Images</option>
      <option value="dateRange">Date Range Of Images</option>
      </select>
      <br/>
      <br/>
      {htmlFilter}
      <br/>
      <button onClick={async ()=> setPics()}>Get Image</button>
      </div>
      
      
      <PictureList pictureData={pics} />
    </div>
  );
};
  
  export { Pod, dateToString };