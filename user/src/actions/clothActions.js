import axios from "axios";

export const getAllCloths = () => async (dispatch) => {
  dispatch({ type: "GET_CLOTHS_REQUEST" });

  try {
    const response = await axios.get("/api/clothdatas/getallcloths");
    console.log(response);
    dispatch({ type: "GET_CLOTHS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CLOTHS_FAILED", payload: error });
  }
};

export const addItem = (item) => async (dispatch) => {
  dispatch({ type: "ADD_ITEM_REQUEST" });

  try {
    const response = await axios.post("/api/clothdatas/additem", item);
    console.log(response);
    dispatch({ type: "ADD_ITEM_SUCCESS" });
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "ADD_ITEM_FAILED", payload: error });
  }
};
