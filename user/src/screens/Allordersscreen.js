import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../components/Loading";
import Error from "./../components/Error";
import { getAllOrders, updateOrder } from "./../actions/orderActions";

export default function Allordersscreen() {
  const dispatch = useDispatch();

  const ordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { orders, error, loading } = ordersstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      <div class="container">
        <h2>Orders</h2>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <table className="table table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>User id</th>
                <th>User name</th>
                <th>User email</th>
                <th>Shipping address</th>
                <th>Mobile</th>
                <th>Amount</th>
                <th>Order status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr>
                    <td>{order.userid}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.shippingAddress}</td>
                    <td>{order.mobile}</td>
                    <td>{order.orderAmount}</td>
                    <td>
                      {order.isDelivered ? (
                        <h5 className="text-success">Delivered</h5>
                      ) : (
                        <button
                          className="btn-danger"
                          onClick={() => {
                            dispatch(updateOrder(order._id));
                          }}
                        >
                          Pending
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
