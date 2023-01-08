import React, { useEffect, useState } from "react";
import Navabar from "../Landing/Navabar";
import DCBanner from "../../assets/dicban.png";
import Currency from "react-currency-formatter";
import { UserAuth } from "../Context/AuthContext";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../features/basketSlice";
import CheckoutProduct from "./CheckoutProduct";
import { db } from "../Firebase/firebase";
import { Cod } from "./Cod";

function CheckoutPage() {
  const { user } = UserAuth();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const phPrice = total * 1;

  const [cartProducts, setCartProducts] = useState([]);
  const [checkModal, setCheckModal] = useState(false);

  const uid = (user ?? [])[0];

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await db.collection("Cart " + uid.id).onSnapshot((snapshot) => {
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

  //Joining and getting total
  const qty = cartProducts.map((cartProduct) => {
    return cartProduct.qty;
  });
  const price = cartProducts.map((cartProduct) => {
    return cartProduct.TotalProductPrice;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalQty = qty.reduce(reducer, 0);
  const totalPrice = price.reduce(reducer, 0);

  const createCheckoutSession = async (e) => {
    e.preventDefault();

    setCheckModal(true);
  };

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
          {cartProducts.map((item, i) => (
            <>
              <CheckoutProduct
                key={i}
                sellerName={item.sellerName}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                qty={item.qty}
              />
            </>
          ))}
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {cartProducts.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({totalQty} items):
                <span className="font-bold pl-1">
                  <Currency quantity={totalPrice} currency="PHP" />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
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
          {checkModal === true && <Cod onClose={() => setCheckModal(false)} />}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
