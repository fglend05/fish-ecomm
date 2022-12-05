import React from "react";
import Navabar from "../Landing/Navabar";
import DCBanner from "../../assets/dicban.png";
import Currency from "react-currency-formatter";
import { UserAuth } from "../Context/AuthContext";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../features/basketSlice";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutPage() {
  const { user } = UserAuth();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const phPrice = total * 54;

  return (
    <div>
      <Navabar />
      <div className="pt-20 lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src={DCBanner}
            className="object-contain w-[1020] h-[250]"
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
          </div>

          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold pl-1">
                  <Currency quantity={phPrice} currency="PHP" />
                </span>
              </h2>
              <button
                disabled={!user}
                className={`button mt-2 ${
                  !user &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!user ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
