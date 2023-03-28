import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState('')
  const [editToggle, setEditToggle] = useState(false)
  const [editId, setEditId] = useState(null)
  const [local, setLocal] = useState(data)

  const selectData = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected }
      }
      return item
    })
    setData(newData)
  }
  const deleteData = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id
    })
    setData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length !== 0) {
      if (editToggle) {
        let editNewData = data.map((data) => {
          return data.id === editId
            ? { ...data, text: todo }
            : data;
        })
        console.log(data.text);
        setData(editNewData)
        setEditToggle(false)
        setTodo("")
      }
      else {
        let item = {
          id: Date.now(),
          text: todo,
          selected: false,
        }
        setData((prev) => {
          return [...prev, item]
        })
        setTodo('')
      }
    }

  }

  const editItem = (id, val) => {
    setTodo(val.text)
    console.log(typeof data);
    console.log(data[0]);
    const newData = data.filter((item) => {
      if (item.id === id) {
        return item
      }
    })
    setEditId(id)
    setEditToggle(true)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Daily To Do List</h1>
        <Form setData={setData} setTodo={setTodo} handleSubmit={handleSubmit} todo={todo} />
        <TodoList data={data} selectData={selectData} deleteData={deleteData} editItem={editItem} />
        <hr />
        <footer>
          <p className='items'>Items: {data.length}</p>
          <button className='clear' onClick={() => {
            setData([])
          }}>Clear All</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
