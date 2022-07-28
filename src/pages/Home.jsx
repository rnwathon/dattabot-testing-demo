import React from 'react';
import { TodoInput, TodoList } from '../components';
import logo from '../logo.svg';

function Home() {
  const [taskList, setTaskList] = React.useState([
   
  ])

  const handleSubmit = (value) => {
    const newTaskList = [...taskList, value]
    setTaskList(newTaskList)
  }

  return (
    <div className="h-screen">
      <header className="bg-slate-900 w-100 p-4">
        <img src={logo} className="h-60 mx-auto p-5" alt="logo" />
        <TodoInput onSubmit={handleSubmit} />
      </header>
      <main className='w-96 mx-auto py-5'>
        <TodoList>
          {taskList.map((task, index) => (
            <TodoList.Item key={index}>{task}</TodoList.Item>
          ))}
        </TodoList>
      </main>
    </div>
  );
}

export default Home;
