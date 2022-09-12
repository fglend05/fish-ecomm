import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {loading && (
        <>
          <h1>Products Loading</h1>
        </>
      )}
      {data?.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
