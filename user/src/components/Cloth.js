import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Cloth({ cloth }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(cloth, quantity, size));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" key={cloth._id}>
      <div onClick={handleShow}>
        <h1>{cloth.name}</h1>
        <img
          src={cloth.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Size</p>
          <select
            className="form-control"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            {cloth.size.map((s) => {
              return <option value={s}>{s}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <h1>Price: {cloth.prices[0][size] * quantity} Rs/=</h1>
        </div>

        <div className="w-100 m-1">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cloth.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={cloth.image}
            alt=""
            className="img-fluid"
            style={{ height: "300px !important" }}
          />
          import {useSelector} from 'react-redux'; import {addToCart} from
          './../actions/cartActions';
          <p>{cloth.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
