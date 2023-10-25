import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const dataRef = collection(db, "Vehicle");

  const deleteVehicle = async (id) => {
    const someVehicle = doc(db, "Vehicle", id);
    deleteDoc(someVehicle);
  };

  useEffect(() => {
    const getData = async () => {
      const newData = await getDocs(dataRef);
      setData(newData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(newData);
    };

    getData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car) => {
            return (
              <tr key={car.id}>
                <th>{car.VehicleMake}</th>
                <th>{car.VehicleModel}</th>
                <th>{car.VehicleYear}</th>
                <th>
                  <button onClick={() => deleteVehicle(car.id)}>Delete</button>
                  <Link to="/edit" state={{ car: car }}>
                    Edit
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
