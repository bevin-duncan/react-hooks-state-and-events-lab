import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCat , setSelectedCat] = useState("All")

function handleCatChange(e){
      setSelectedCat(e.target.value)
}

const displayItems = items.filter((item) => {
  if (selectedCat === "All") return true;

  return item.category === selectedCat;
});
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
