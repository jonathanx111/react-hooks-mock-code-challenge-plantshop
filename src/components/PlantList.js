import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleEditPlant, onDeletePlant }) {
  const plantComponentsArray = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} handleEditPlant={handleEditPlant} onDeletePlant={onDeletePlant} />
  })
  
  return (
    <ul className="cards">{plantComponentsArray}</ul>
  );
}

export default PlantList;
