declare module '*.png' {
  const value: any;
  export = value;
}

interface Todo {
    text: string;
    complete: boolean;
  }

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text:string ) => void;

interface Picture {
  title:string 
  image:string
  description:string
  date:string
 }