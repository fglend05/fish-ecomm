import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { db, storage } from "../Firebase/firebase";
import { ref } from "firebase/storage";
import { v4 } from "uuid";

function AddItem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [rating, setRating] = useState("");
  const [hasPrime, setHasPrime] = useState("");

  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError("");
    } else {
      setImage(null);
      setError("Only png and jpg are allowed");
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const uploadTask = storage
      .ref(`product-images/${image.name + v4()}`)
      .put(image);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Product")
              .add({
                title: title,
                price: Number(price),
                rating: rating,
                description: description,
                category: category,
                date: date,
                image: image,
                hasPrime: hasPrime,
              })
              .then(() => {
                setTitle("");
                setPrice(0);
                setRating("");
                setDescription("");
                setCategory("");
                setDate("");
                setImage("");
                setHasPrime("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
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
                  <option value="fresh">Fresh</option>
                  <option value="dried">Dried</option>
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
            <button type="submit" className="defButton ">
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
