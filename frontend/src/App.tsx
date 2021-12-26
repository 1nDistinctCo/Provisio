import React, { useState,useEffect } from 'react';

import { PictureList } from './pictures/PictureList';
import axios from 'axios';

// const initialTodos: Todo[] = [
//   {
//     text: 'Walk the dog',
//     complete: false,
//   },
//   {
//     text: 'Write app',
//     complete: true,
//   },
// ]
const initialPictures: Picture[] = [
  {
    title:'No Image',
    image_path: './logo512.png',
    description: 'No Image',
    date:'today'
  }
]


function App() {
  const [pictures,setPictures] = useState(initialPictures)
  const [data,setData] = useState([{}])
  const getPicOfDay = (params:object) => {
    return axios.get<string>('localhost:8000',{params:params}).then((response) =>{
        if (response.status ===200){
            setData(JSON.parse(response.data))
        }
        throw new Error(response.status.toString());

    }).catch(({response}) => {
        throw new Error(response.status)
    })
    }
    getPicOfDay({count:1}).then((result)=>{return result})
    // useEffect(() => {
    //   document.title = JSON.stringify(data)
    // })
    return(
    <>
      <PictureList pictures={pictures} />
      {/* <p>{data}</p> */}
    </> 
    
  )
}
    

// function App() {
//   const [todos,setTodos] = useState(initialTodos)
//   const toggleTodo = (selectedTodo:Todo) =>{
//     const newTodos = todos.map((todo) => {
//       if (todo === selectedTodo){
//         return {
//           ...todo,
//           complete: !todo.complete
//         };
//       }
//       return todo;
//     });
//     setTodos(newTodos)
//   }
//   const addTodo: AddTodo = (text:string) => {
//     const newTodo = {text, complete:false};
//     setTodos([...todos,newTodo])
//   }
//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo}/>
//       <AddTodoForm addTodo={addTodo}/>
//     </>
//   )
// }


export default App;
