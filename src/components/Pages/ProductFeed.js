import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
import { db } from "../Firebase/firebase";
import DCBanner from "../../assets/dicban.png";
import Spinner from "../User/Spinner";

function ProductFeed() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getDataFromFirebase = [];
    const sub = db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataFromFirebase.push({ ...doc.data(), id: doc.id, key: doc.id });
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
          <Spinner />
        </>
      )}

      {data
        ?.slice(0, 4)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            sellerName,
            stock,
            size,
          }) => (
            <Product
              key={id}
              id={id}
              size={size}
              sellerName={sellerName}
              stock={stock}
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
              stock,
              size,
            }) => (
              <Product
                key={id}
                sellerName={sellerName}
                size={size}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                stock={stock}
              />
            )
          )}
      </div>

      {data
        ?.slice(5, data.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            sellerName,
            stock,
            size,
          }) => (
            <Product
              key={id}
              id={id}
              sellerName={sellerName}
              size={size}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              stock={stock}
            />
          )
        )}
    </div>
  );
}

export default ProductFeed;
