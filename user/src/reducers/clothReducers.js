export const getAllClothsReducer = (state = { cloths: [] }, action) => {
  switch (action.type) {
    case "GET_CLOTHS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CLOTHS_SUCCESS":
      return {
        loading: false,
        cloths: action.payload,
      };
    case "GET_CLOTHS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM_REQUEST":
      return {
        loading: true,
      };
    case "ADD_ITEM_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_ITEM_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
