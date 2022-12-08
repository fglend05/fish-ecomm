import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";

const Showitem = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getDataFromFirebase = [];
    const sub = db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataFromFirebase.push({ ...doc.data(), key: doc.id });
      });
      setData(getDataFromFirebase);
      setLoading(false);
    });
    return () => sub();
  }, []);
  return (
    <div>
      {loading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default Showitem;
