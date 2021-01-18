import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants]= useState([])
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plantObjects => {
        setPlants(plantObjects)
      })
  }, [])

  function onAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleEditPlant(newPrice, editedPlant) {
    fetch(`http://localhost:6001/plants/${editedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
      .then(r => r.json())
      .then(editedObject => {
        const afterPriceEditPlantArray = plants.map(plant => {
          if (plant.id === editedObject.id) {
            return {...plant, price: newPrice}
          } else {
            return plant
          }
        })
        setPlants(afterPriceEditPlantArray)
    })
  }

  function onDeletePlant(deletedPlant) {
    fetch(`http://localhost:6001/plants/${deletedPlant.id}`, {
      method: "DELETE"
    })
    const afterDeletePlantArray = plants.filter(plant => {
      return plant.id !== deletedPlant.id
    })

    setPlants(afterDeletePlantArray)
  }

  const visiblePlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase())
  })
  

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plants={visiblePlants} handleEditPlant={handleEditPlant} onDeletePlant={onDeletePlant} />
    </main>
  );
}

export default PlantPage;
