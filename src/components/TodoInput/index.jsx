import React from "react";

const TodoInput = ({ onSubmit }) => {
  const [value, setValue] = React.useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setValue("")
    onSubmit(value)
  }

  return (
    <div className="shadow-md w-96 mx-auto p-2 rounded-md flex gap-2 bg-white">
      <input className="grow focus:outline-0" placeholder="Add new task here" onChange={handleChange} value={value} />
      <button className="shrink bg-slate-700 text-white px-2 py-1 rounded-md" onClick={handleClick}> Add Todo </button>
    </div>
  )
}

export default TodoInput