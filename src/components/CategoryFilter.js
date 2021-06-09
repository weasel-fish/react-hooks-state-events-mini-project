import React, {useState} from "react";

function CategoryFilter({categories, filterCats}) {
  const [selected, setSelected] = useState('')
  
  function handleClick(e) {
    setSelected(e.target.value)
    filterCats(e.target.value)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(cat => {
        return <button className={(selected === cat) ? 'selected' : ''} onClick={handleClick} key={cat} value={cat}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
