import React from "react";

const TodoList = ({ children, ...props }) => {
  return (
    <ul 
      className="flex flex-col gap-2 rounded-lg border border-slate-300 shadow-md h-96 p-3"
      {...props}>
        {children.length === 0 ? <span className="text-center text-gray-500">No Task</span> : children}
    </ul>
  )
}

const TodoListItem = ({ children, ...props }) => {
  const [isDone, setIsDone] = React.useState(false)

  const handleClick = () => {
    setIsDone(prev => !prev)
  }

  return (
    <li 
      className={`cursor-pointer ${isDone && "line-through text-gray-400"}`} 
      onClick={handleClick}
      {...props}
    > 
      { children } 
    </li>
  )
}

TodoList.Item = TodoListItem

export default TodoList