import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [data, setData] = useState([])
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

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Daily To Do List</h1>
        <Form setData={setData} />
        <TodoList data={data} selectData={selectData} deleteData={deleteData} />
        <hr />
        <footer>
          <p className='items'>Items: {data.length}</p>
          <button className='clear' onClick={()=>{
            setData([])
          }}>Clear All</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
