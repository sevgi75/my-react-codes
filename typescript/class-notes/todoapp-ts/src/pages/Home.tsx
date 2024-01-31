import React, { useState } from 'react'
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import AddTodoComp from '../components/AddTodoComp'
import TodoList from '../components/TodoList'
import axios from "axios"

interface ITodoType {
    id: string | number;
    isDone: boolean;
    task: string;
    todo?: string;
}

const url:string = import.meta.env.VITE_BASE_URL;

const Home = () => {
    // const [todos,setTodos] = useState<[] as ITodoType>([]) //! type tanımlaması 1.yol
  // const [todos,setTodos] = useState<Array<ITodoType>>([])//* type tanımlaması 2.yol
  const [todos, setTodos] = useState<ITodoType[]>([]); //? type tanımlaması 3.yol ve yaygın kullanım

    const getTodos = async () =>{
        try {
            const {data} = await axios.get<ITodoType[]>(url)
            setTodos(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Container>
        <Typography>TodoApp with Typescript</Typography>
        <AddTodoComp />
        <TodoList />
    </Container>
  )
}

export default Home