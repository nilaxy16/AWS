import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cloth from "../components/Cloth";
import { getAllCloths } from "../actions/clothActions";
import Loading from "./../components/Loading";
import Error from "./../components/Error";

export default function Homescreen() {
  const dispatch = useDispatch();

  const clothsstate = useSelector((state) => state.getAllClothsReducer);

  const { cloths, error, loading } = clothsstate;

  useEffect(() => {
    dispatch(getAllCloths());
  }, [dispatch]);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          cloths.map((cloth) => {
            return (
              <div className="col-md-3 m-3" key={cloth._id}>
                <div>
                  <Cloth cloth={cloth} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
