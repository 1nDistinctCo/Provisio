import { PictureList } from './pictures/PictureList';
import './styles/App.css'

function App() {

    return(
    <>
    <div>
        <PictureList />
      </div>
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