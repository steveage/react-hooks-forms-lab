import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [itemList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchPhraseChange(event) {
    setSearchPhrase(event.target.value);
  }

  function handleNewItem(newItem) {
    setItemsList([...itemList, newItem]);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All" && searchPhrase === "") return true;
    
    return item.category === selectedCategory || item.name.includes(searchPhrase);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchPhraseChange} search={searchPhrase} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
