import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteIcon from "@mui/icons-material/Delete";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseItem,
} from "../features/basketSlice";
import Product from "./Product";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Firebase/firebase";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  qty,
  sellerName,
}) {
  const phPrice = price * 1;
  const { user } = UserAuth();

  const dispatch = useDispatch();
  const uid = user[0].id;
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
      qty,
      sellerName,
    };
    // dispatch(addToCart(product));
    // console.log(product);

    Products = product;
    Products.qty = Products.qty + 1;
    Products.TotalProductPrice = Products.qty * Products.price;

    if (user) {
      db.collection("Cart " + uid)
        .doc(id)
        .update(Products)
        .then(() => {
          console.log("Added to cart");
        });
    } else {
      console.log("Please Login");
    }
  };

  const decreaseItemFromCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
      qty,
      sellerName,
    };
    // dispatch(decreaseItem(product));

    Products = product;
    if (Products.qty > 1) {
      Products.qty = Products.qty - 1;
      Products.TotalProductPrice = Products.qty * Products.price;

      if (user) {
        db.collection("Cart " + uid)
          .doc(id)
          .update(Products)
          .then(() => {
            console.log("Decrement to cart");
          });
      } else {
        console.log("Please Login");
      }
    }
  };

  const removeItemFromCart = () => {
    const product = { id };

    if (user) {
      db.collection("Cart " + uid)
        .doc(product.id)
        .delete()
        .then(() => {
          console.log("Deleted to cart");
        });
    } else {
      console.log("Please Login");
    }

    // dispatch(removeFromCart({ id }));
  };
  return (
    <>
      <div className="pl-5 my-3">
        <span className="">Sold from: {sellerName}</span>
      </div>
      <div className="grid grid-cols-5">
        <img
          src={image}
          className="object-contain h-[200px] w-[200px]"
          alt=""
        />
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarRateIcon key={i} className="h-2 text-yellow-500" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <Currency quantity={phPrice} currency="PHP" />

          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img src="" alt="" loading="lazy" />
              <p className="text-xs text-gray-500">Free Delivery</p>
            </div>
          )}
        </div>

        <div className="flex h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={addItemToCart}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
          <span className="pl-[30%] outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700">
            {qty}
          </span>
          <button
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={decreaseItemFromCart}
          >
            <span className="m-auto text-2xl font-thin">-</span>
          </button>

          <button className="pl-5" onClick={removeItemFromCart}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
