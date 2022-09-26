import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const phPrice = price * 54;

  const dispatch = useDispatch();

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
    };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <img src={image} className="object-contain h-[200px] w-[200px]" alt="" />
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
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add To Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove From Cart  
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
