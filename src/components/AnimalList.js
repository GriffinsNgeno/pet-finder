import { useState, useEffect } from 'react'
// import axios from 'axios'

// const baseURL = 'http://localhost:9292/animal'

const AnimalList = () => {
    const [animals, setAnimals] = useState([])
    // const getAnimals = async () => {
    //     const response = await axios.get(baseURL)
    //     setAnimals(response.data)
    // }
    useEffect(()=>{
        fetch("http://localhost:9292/animal")
        .then(response=>response.json())
        .then(data=>setAnimals(data))
    },[])
    console.log(animals);
    const animalArray = animals.map((animal)=>{
        return <div>
            <img src= {animal.image}  ></img>
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