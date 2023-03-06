import { useState, useEffect } from 'react'
import Animal from './Animal'
import AnimalDetails from './AnimalDetails'

const AnimalList = () => {
    const [animals, setAnimals] = useState([])
  
    useEffect(()=>{
        fetch("http://localhost:9292/animal")
        .then(response=>response.json())
        .then((data)=>{ 
          setAnimals(data)
        })
    },[])
    console.log(animals);
    const animalArray = animals.map((animal)=>{
        return <div>
            <img src= {animal.image} alt='animal' ></img>
             <h2>{animal.name}, {animal.age}, {animal.breed}, {animal.gender}</h2>
        </div>
       
            
    })
  return (
    <div className="bg-gray">
      <div className="flex flex-wrap w-3/4 mx-auto">

        {animals.map((animal, index) => {
          let imageUrl = animal.primary_photo_cropped?.small;
          return (
            <Animal
              key={index}
              image={
                imageUrl
                  ? imageUrl
                  : "https://loremflickr.com/120/150/animal"
              }
              name = {animal.name}
              breed={animal.breed}
              gender={animal.gender}
            
            />
          );
        })}
         <AnimalDetails
        animals={animalArray}
      />
      </div>
    </div>
  )
}

export default AnimalList