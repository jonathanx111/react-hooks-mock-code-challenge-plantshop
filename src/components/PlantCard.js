import React, { useState } from "react";
import EditPrice from "./EditPrice";

function PlantCard({ plant, handleEditPlant, onDeletePlant }) {
  const [soldOut, setSoldOut] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const {id, name, image, price} = plant
  
  function onUpdatePrice(newPrice) {
    setIsEditing(false)
    handleEditPlant(newPrice, plant)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isEditing ? <EditPrice price={price} onUpdatePrice={onUpdatePrice} id={id} /> : null}
      {soldOut ? (
        <button onClick={() => setSoldOut(!soldOut)}>Out of Stock</button>
      ) : (
        <button onClick={() => setSoldOut(!soldOut)} className="primary">In Stock</button>
      )}
      <button onClick={() => setIsEditing(!isEditing)} className="primary">Update Price of Plant</button>
      <button onClick={() => onDeletePlant(plant)} style={{color: "red", backgroundColor: "white"}}>Delete Plant :(</button>
    </li>
  );
}

export default PlantCard;
