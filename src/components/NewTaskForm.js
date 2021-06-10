import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, updateForm] = useState({text: '', category: 'Code'})
  
  function handleChange(e) {
    const name = e.target.name
    const updatedObj = {
      ...formData,
      [name]: e.target.value
    }
    updateForm(updatedObj)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const newTask = {...formData}

      onTaskFormSubmit(newTask)
    }} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {categories.map(cat => {
            if(cat != 'All') {
              return <option value={cat} key={cat}>{cat}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
