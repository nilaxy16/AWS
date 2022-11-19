import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../components/Loading";
import Error from "./../components/Error";
import { getAllUsers } from "../actions/userActions";

export default function Allusersscreen() {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <div class="container">
        <h2>Users</h2>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.mobile}</td>
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
