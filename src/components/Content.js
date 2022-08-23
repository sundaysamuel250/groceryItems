import React from "react";
import "./Content.css";
import ItemList from "./ItemList";

function Content({items, handleCheck, handleDelete}) {
  return (
    <>
		{items.length ? (
			<ItemList 
			items={items}
			handleCheck={handleCheck}
			handleDelete={handleDelete}
			/>
		) : (
			<p style={{marginTop: "2rem" }}>Your list is empty</p>
		)}
      
    </>
  );
}

export default Content;
