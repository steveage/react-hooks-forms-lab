import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("Produce");
  const [itemValue, setItemValue] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemChange(event) {
    setItemValue(event.target.value);
  }

  function handleItemSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemValue,
      category: selectedCategory
    };
    onItemFormSubmit(newItem);
    setItemValue("");
  }

  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemValue} onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
