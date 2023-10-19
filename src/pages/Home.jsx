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
      <div>
        {data.map((car) => {
          return (
            <div>
              <div>Marka: {car.VehicleMake}</div>
              <div>Model: {car.VehicleModel}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
