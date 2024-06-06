import React, {useState} from "react";
import plantsArray from "./plantsArray";

function PlantList(){

const [plantList, setPlantList] = useState(plantsArray)
    return (
        <>
            {
        plantList.map((category, index)=>(
          <div key={index}>
          <h1>{category.category}</h1>
          <div className='container'>
            <div className='row'>
            {category.plants.map((plant, index)=>(
              <div key = {index} className = "col-4">
                <div className='box'>
                  <div className='name'>{plant.name}</div>
                  <div className='plant'><img src='https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg'/></div>
                  <div className='price'>${plant.price}</div>
                  <p>{plant.description}</p>
                  <div ><button className='add-to-cart'> Add to cart </button></div>
                </div>
              </div>
            ))}
        </div>
          </div>
          </div>
          
        ))
      }
      
    </>
  )
}
        
    
export default PlantList
