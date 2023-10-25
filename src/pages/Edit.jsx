import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function Edit() {
  let { state } = useLocation();
  let navigate = useNavigate();
  const [make, setMake] = useState(state.car.VehicleMake);
  const [model, setModel] = useState(state.car.VehicleModel);
  const [year, setYear] = useState(state.car.VehicleYear);

  const updateVehicle = async () => {
    const someVehicle = doc(db, "Vehicle", state.car.id);
    const newFields = {
      VehicleMake: make,
      VehicleModel: model,
      VehicleYear: year,
    };
    navigate("/");
    await updateDoc(someVehicle, newFields);
  };

  return (
    <div>
      <form onSubmit={updateVehicle}>
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
        <button className="button" type="submit">
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default Edit;
