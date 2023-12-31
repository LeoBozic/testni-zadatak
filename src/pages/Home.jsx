import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState("time");
  const [order, setOrder] = useState("asc");
  const dataRef = collection(db, "Vehicle");

  const deleteVehicle = async (id) => {
    const someVehicle = doc(db, "Vehicle", id);
    deleteDoc(someVehicle);
  };

  useEffect(() => {
    const getData = async () => {
      const newData = await getDocs(query(dataRef, orderBy(sorting, order)));
      setData(
        newData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      console.log(newData);
    };

    getData();
  }, [sorting, order]);

  return (
    <div className="home-page">
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>
              <select
                onChange={(e) => {
                  setSorting(e.target.value);
                }}
              >
                <option value={"time"}>Time added</option>
                <option value={"VehicleMake"}>Vehicle Make</option>
                <option value={"VehicleModel"}>Vehicle Model</option>
                <option value={"VehicleYear"}>Vehicle year</option>
              </select>
              <select onChange={(e) => setOrder(e.target.value)}>
                <option value={"asc"}>Ascending</option>
                <option value={"desc"}>Descending</option>
              </select>
            </th>
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
                  <button
                    className="button"
                    onClick={() => deleteVehicle(car.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="button button-link"
                    to="/edit"
                    state={{ car: car }}
                  >
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
