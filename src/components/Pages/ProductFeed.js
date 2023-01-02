import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
import { db } from "../Firebase/firebase";
import DCBanner from "../../assets/dicban.png";

function ProductFeed() {
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
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {loading && (
        <>
          <h1>Products Loading</h1>
        </>
      )}

      {data
        ?.slice(0, 4)
        .map(
          ({ id, title, price, description, category, image, sellerName }) => (
            <Product
              key={id}
              id={id}
              sellerName={sellerName}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}

      <img
        className="md:col-span-full w-[100%] h-[300px]"
        src={DCBanner}
        alt="Promo Details"
      />

      <div className="md:col-span-2">
        {data
          ?.slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
              sellerName,
            }) => (
              <Product
                key={id}
                id={id}
                sellerName={sellerName}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            )
          )}
      </div>

      {data
        ?.slice(5, data.length)
        .map(
          ({ id, title, price, description, category, image, sellerName }) => (
            <Product
              key={id}
              id={id}
              sellerName={sellerName}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
    </div>
  );
}

export default ProductFeed;
