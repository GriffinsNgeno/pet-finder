import { useState, useEffect } from 'react'


const AnimalList = () => {
    const [animals, setAnimals] = useState([])
  
    useEffect(()=>{
        fetch("http://localhost:9292/animal")
        .then(response=>response.json())
        .then(data=>setAnimals(data))
    },[])
    console.log(animals);
    const animalArray = animals.map((animal)=>{
        return <div>
            <img src= {animal.image} alt='animal' ></img>
             <h2>{animal.name}, {animal.age}, {animal.breed}, {animal.gender}</h2>
        </div>
       
            
    })
  return (
    <div>
        <h1>Animal List</h1>
        <div className="card-container" style={{ display: "flexbox",  }}>{animalArray}</div>
        {/* {animalArray} */}
    </div>
  )
}

export default AnimalList