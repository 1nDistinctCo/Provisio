import React from 'react'
import '../styles/styles.css'
interface Props{}
const Home:React.FC<Props> = () => {
    return (
      <div className='basic-text'>
          <h1>Welcome to Fun with friends!</h1>
      </div>
    );
  };
  
  export default Home;