import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { db, storage } from "../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { UserAuth } from "../Context/AuthContext";

function AddItem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [progress, SetProgress] = useState(null);
  const [error, setError] = useState("");
  const [rating, setRating] = useState("");
  const [hasPrime, setHasPrime] = useState("");

  const { user } = UserAuth();
  const loggedUser = user[0].displayName;

  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Only png and jpg are allowed");
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          SetProgress(progress);
          console.log(progress);
        },
        //handle failed upload
        (error) => {
          console.log(error);
        },
        //handle sucess upload
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgURL(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "products"), {
        sellerName: loggedUser,
        productName: title,
        price: price,
        category: category,
        description: description,
        size: size,
        image: imgURL,
        productDate: date,
        timestamp: serverTimestamp(),
      })
        .then(() => {
          setTitle("");
          setPrice("");
          setDescription("");
          setCategory("");
          setSize("");
          setFile(null);
          setDate(new Date());
          setFile(null);
          setImgURL(null);
          SetProgress(null);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="">
        <h2 className="px-5 py-5 font-bold">List some fresh fish</h2>
        <form onSubmit={addProduct}>
          <div className="flex">
            <div className="flex-[0.5] px-3">
              <div className="pb-2">
                <h2>Product Name</h2>
                <input
                  type="text"
                  className="inputText"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <h1 className="text-gray-500 text-sm pl-5">
                  Do not exceed 20 characters
                </h1>
              </div>
              <div className="pb-2">
                <h2>Product Price</h2>
                <input
                  type="number"
                  className="inputText"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="pb-2">
                <h2>Category</h2>
                <select
                  name="category"
                  id="category"
                  className="selectDes"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="fresh">Smoked</option>
                  <option value="dried">Dried</option>
                  <option value="processed">Processed</option>
                </select>
              </div>
              <div className="pb-2">
                <h2>Description</h2>
                <textarea
                  cols="30"
                  rows="5"
                  className="inputText"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <h1 className="text-gray-500 text-sm pl-5">
                  Do not exceed 100 characters
                </h1>
              </div>
            </div>
            <div className="flex-[0.5]">
              <div>
                <h2>Product Images</h2>
                <input type="file" onChange={productImgHandler} />
              </div>
              <div>
                <h2>Product Sizes</h2>
                <select
                  className="selectDes"
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div>
                <h2>Product Date</h2>
                <DatePicker
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="defButton "
              disabled={progress !== null && progress < 100}
            >
              Add Product
            </button>
            <button className="defButton ">Save As Draft</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
