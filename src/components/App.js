import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, updateTasks] = useState(TASKS)
  const [currentTasks, filterTasks] = useState(tasks)
  const [catState, updateCat] = useState('All') //Is this redundant with the 'selected' state in CategoryFilter?
                                                //Does it make sense to consolidate them?
  function removeTask(text) {
    const newCurrentArray = currentTasks.filter(task => task.text !== text)
    const newArray = tasks.filter(task => task.text !== text)
    updateTasks(newArray)
    filterTasks(newCurrentArray)
  }

  function onTaskFormSubmit(task) {
    const newArray = [...tasks, task]
    updateTasks(newArray)
    
    if(catState === task.category || catState === 'All') {
      const newCurrentArray = [...currentTasks, task]
      filterTasks(newCurrentArray) 
    }
  }

  function filterCats(chosenCat) {
    const newArray = tasks.filter(task => {
      if(chosenCat === 'All') {
        return true
      } else {
        return chosenCat === task.category
      }
    })
    updateCat(chosenCat)
    filterTasks(newArray)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter catState={catState} filterCats={filterCats} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={currentTasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
