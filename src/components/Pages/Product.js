import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { UserAuth } from "../Context/AuthContext";
import { addToCart } from "../features/basketSlice";
import { auth, db } from "../Firebase/firebase";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  sellerName,
  stock,
  size,
}) {
  const { user } = UserAuth([]);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const phPrice = price * 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const uid = (user ?? [])[0];

  let Products;
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
      sellerName,
    };

    // dispatch(addToCart(product));

    if (uid.id !== null) {
      // console.log(product);
      Products = product;
      Products["qty"] = 1;
      Products["TotalProductPrice"] = Products.qty * price;
      db.collection("Cart " + uid.id)
        .doc(id)
        .set(Products)
        .then(() => {
          console.log("added to cart");
        });
    } else {
      console.log("not signed in");
    }
  };

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-zinc-100 z-30 p-10">
      <p className="absolute top-2 left-2 text-xs "> {sellerName} </p>
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img
        src={image}
        alt="Product IMG"
        className="object-contain w-[200px] h-[200px] mx-7  "
      />
      <h4 className="mt-3 line-clamp-2">{title}</h4>
      <div className="flex mb-3">
        <span className="text-sm"> Size: {size}</span>
      </div>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarRateIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="flex place-content-evenly">
        <div className="mb-5">
          <Currency quantity={phPrice} currency="PHP" />{" "}
          <span className="text-xs"> /kg</span>
        </div>

        <div className="mb-5">
          Available: {stock} <span className="text-xs"> kg/kgs</span>
        </div>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="" alt="" />
          <p className="text-xs text-gray-500">Free Delivery</p>
        </div>
      )}
      {!user ? (
        <button
          disabled={!user}
          className={`button mt-2 ${
            !user &&
            "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          Login to checkout
        </button>
      ) : (
        <>
          {stock === 0 ? (
            <>
              <button
                className={`button mt-2 ${
                  stock === 0 &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                disabled
                onClick={addItemToCart}
              >
                No stock available
              </button>
            </>
          ) : (
            <button className="mt-auto button" onClick={addItemToCart}>
              Add to cart
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Product;
