import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Create() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const dataRef = collection(db, "Vehicle");

  const addVehicle = async () => {
    await addDoc(dataRef, {
      VehicleMake: make,
      VehicleModel: model,
      VehicleYear: year,
      time: new Date(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (make && model && year) {
      addVehicle();
      setMake("");
      setModel("");
      setYear("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="vehicleMake">Make:</label>
      <input
        id="vehicleMake"
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <label htmlFor="vehicleModel">Model:</label>
      <input
        id="vehicleModel"
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <label htmlFor="vehicleYear">Year:</label>
      <input
        id="vehicleYear"
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
}

export default Create;
