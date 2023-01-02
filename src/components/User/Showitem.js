import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserAuth } from "../Context/AuthContext";
import Currency from "react-currency-formatter";
import Edit from "./Edit";

const Showitem = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { user } = UserAuth();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getDataFromFirebase = [];
    const sub = db
      .collection("products")
      .where("sellerId", "==", user[0].uid)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setData(getDataFromFirebase);
        setLoading(false);
      });
    return () => sub();
  }, []);

  return (
    <div className="">
      <Edit open={openModal} onClose={() => setOpenModal(false)} />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Product Image
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {data?.map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
              sellerName,
            }) => (
              <tbody key={id}>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td className="py-3 px-6">{description}</td>
                  <td className="py-3 px-6">
                    <Currency quantity={price} currency="PHP" />
                  </td>
                  <td className="py-3 px-6">{category}</td>
                  <td className="py-3 px-6">
                    <img src={image} alt="" className="w-[150px] h-[150px]" />
                  </td>
                  <td className="py-3 px-6">
                    <button
                      className="mr-3 hover:text-green-600"
                      onClick={() => setOpenModal(true)}
                    >
                      <EditIcon />
                    </button>
                    <button className="hover:text-red-600">
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          )}
        </table>
      </div>
      {loading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default Showitem;
