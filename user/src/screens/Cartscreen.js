import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { cartReducer } from "./../reducers/cartReducers";
import { addToCart } from "./../actions/cartActions";
import { deleteFromCart } from "./../actions/cartActions";
import { placeOrder } from "./../actions/orderActions";
//import { placeOrderReducer } from "./../reducers/orderReducers";
import Loading from "./../components/Loading";
import Success from "./../components/Success";
import Error from "./../components/Error";

export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var total = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  function ordernow() {
    dispatch(placeOrder(total));
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.size}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.size]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity:</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.size));
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.size));
                    }}
                  ></i>
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", wigth: "80px" }}
                    alt=""
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "40px" }}>Total: {total}Rs/=</h2>

          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          {success && <Success success="Your order is placed successfully" />}

          <button className="btn" onClick={ordernow}>
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
