import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [data, setData] = useState([]);
  const dataRef = collection(db, "Vehicle");

  useEffect(() => {
    const getData = async () => {
      const newData = await getDocs(dataRef);
      setData(newData.docs.map((doc) => ({ ...doc.data() })));
      console.log(newData);
    };

    getData();
  }, []);

  return (
    <div>
      <div>Home</div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car, key) => {
            return (
              <tr key={key}>
                <th>{car.VehicleMake}</th>
                <th>{car.VehicleModel}</th>
                <th>{car.VehicleYear}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
