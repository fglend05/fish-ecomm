import React, { useEffect, useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Firebase/firebase";
import Spinner from "../User/Spinner";
import { OrderSpec } from "./OrderSpec";

export const OrderDetails = () => {
  const { user } = UserAuth();
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        });
      } else {
        console.log("Please sign in");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && (
        <>
          <Spinner />
        </>
      )}

      <div className="">
        {cartProducts.map((item, i) => (
          <>
            <OrderSpec
              key={i}
              sellerName={item.sellerName}
              image={item.image}
              title={item.title}
              qty={item.qty}
              description={item.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};
