import React, { useEffect, useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Firebase/firebase";

export const OrderDetails = () => {
  const { user } = UserAuth();
  const [cartProducts, setCartProducts] = useState([]);

  const uid = (user ?? [])[0];

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await db.collection("Buyer-cart " + uid.id).onSnapshot((snapshot) => {
          const newCart = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCart);
        });
      } else {
        console.log("Please sign in");
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};
