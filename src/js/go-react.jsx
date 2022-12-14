import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"
// import Footer from "./Footer";



function Layout() {

  const [filterStatus, setFilterStatus] = useState(0)

  const [todoItems, setTodoItems] = useState([])


  useEffect(() => {
    (async () => {
      console.log(1)
      if(localStorage.getItem('todos')===null){
        // setTodoItems([
        //         { id: 1, t: "眠る", c: false },
        //       ])
      }else{
        setTodoItems(JSON.parse(localStorage.getItem('todos')))
      }
    })()
  }, [])

  const add = (t) => {
    setTodoItems([...todoItems, { id: todoItems.length + 1, t: t, c: false }])
  }

  const upd = (id) => {
    setTodoItems(todoItems.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.c = !todoItem.c
      }
      return todoItem
    }))
  }

  const remove = (id) => {
    setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
  }


  return (
    <div>
      <iframe width="60%" height="auto" src="https://www.youtube.com/embed/Lf4EAHI534w" title="緑黄色社会『merry-go-round』Live Video (Actor tour 2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <InputComponent add={add} />
      <FilterComponent setFilterStatus={setFilterStatus} />
      <ListComponent todoItems={todoItems} upd={upd} remove={remove} filterStatus={filterStatus} setTodoItems={setTodoItems}/>
    </div>
  );
}



const app = document.getElementById('output');
ReactDOM.render(<Layout />, app);