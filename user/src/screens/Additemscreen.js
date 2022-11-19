import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../actions/clothActions";
import Loading from "./../components/Loading";
import Success from "./../components/Success";
import Error from "./../components/Error";

export default function Additemscreen() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.addItemReducer);
  const { loading, error, success } = itemstate;

  function add() {
    const item = {
      name,
      size,
      price,
      material,
      image,
      description,
    };
    console.log(item);
    dispatch(addItem(item));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Add a new item
          </h2>

          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          {success && <Success success="Your order is placed successfully" />}

          <div>
            <input
              type="text"
              required
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Size"
              className="form-control"
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Price"
              className="form-control"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Material"
              className="form-control"
              value={material}
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Image Link"
              className="form-control"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Description"
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button className="btn mt-3 mb-3" onClick={add}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
