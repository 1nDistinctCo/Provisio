import React from 'react'
import '../styles/styles.scss'
interface Props{}
const Home:React.FC<Props> = () => {
    return (
      <div className='basic-text'>
          <h1>Welcome to The InDistinct Co!</h1>
      </div>
    );
  };
  
  export default Home;