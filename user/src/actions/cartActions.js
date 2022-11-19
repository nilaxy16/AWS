export const addToCart = (cloth, quantity, size) => (dispatch, getState) => {
  var cartItem = {
    name: cloth.name,
    _id: cloth._id,
    image: cloth.image,
    size: size,
    quantity: Number(quantity),
    prices: cloth.prices,
    price: cloth.prices[0][size] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("you cannot add more than 10 quantities");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: cloth });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (cloth) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: cloth });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
