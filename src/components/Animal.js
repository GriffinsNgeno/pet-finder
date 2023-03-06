import React from "react";

const Animal = ({ image, breed, name, age, gender }) => {
  return (
    <div>
      <div className="flex flex-wrap align-items-center hover:scale-110 p-4">
        <div className="rounded-lg shadow-xl bg-white h-64 w-48">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className=" h-2/3 rounded-t-lg w-full " src={image} alt="" />
          </a>
          <div className="p-2">
            <h4 className="text-cyan-900 text-l font-bold">Name: {name}</h4>
            <p className="text-gray-700 text-base">{age}</p>
            <p className="text-gray-700 text-base">Breed: {breed}</p>
            <p className="text-gray-700 text-base">Gender: {gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
