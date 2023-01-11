import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { auth, db } from "../Firebase/firebase";

export const Cod = ({ onClose, formData }) => {
  const { user } = UserAuth([]);
  const uid = (user ?? [])[0];

  const [deliveryAddress, setDeliveryAddress] = useState(uid.deliveryAddress);
  const [number, setNumber] = useState(uid.phoneNumber);
  const [totalPrice] = useState(formData.totalPrice);
  const [status] = useState("toPay");
  const [totalQty] = useState(formData.totalQty);
  const [cartProducts, setCartProducts] = useState([]);
  const nav = useNavigate();

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
  const handleCartSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("Buyer-Personal-Info").add({
        Name: uid.displayName,
        Email: uid.email,
        CellNo: number,
        DeliveryAddress: deliveryAddress,
        CartQty: totalQty,
        CartPrice: totalPrice,
      });
      const cartData = await db.collection("Cart " + uid.id).get();
      for (var snap of cartData.docs) {
        var data = snap.data();
        data.ID = snap.id;
        await db.collection("Buyer-cart " + uid.id).add(data);
        await db
          .collection("Cart " + uid.id)
          .doc(snap.id)
          .delete();
      }
      onClose();
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="bg-[rgba(0,0,0,0.5)] justify-center items-center fixed top-[50%] left-[50%] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative mx-auto w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ray-800 -white"
              data-modal-toggle="authentication-modal"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 ">
                Cart Summary
              </h3>
              <form className="space-y-6 lg:px-8" onSubmit={handleCartSubmit}>
                <div>
                  <label htmlFor="">Delivery Address</label>
                  <input
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label htmlFor="">Phone Number</label>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="">Cart Quantity</label>
                  <input
                    value={formData.totalQty}
                    className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="">Total Price</label>
                  <input
                    value={formData.totalPrice}
                    className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                    disabled
                  />
                </div>
                <div>
                  <button type="submit" className="">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
