import actionTypes from "./cart.types";
import { addItemToShoppingCart, decreaseCartItemQty } from "../utils";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToShoppingCart(state.cartItems, action.payload),
      };
    case actionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case actionTypes.CART_DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: decreaseCartItemQty(state.cartItems, action.payload),
      };

    case actionTypes.CART_REMOVE_ALL_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    case actionTypes.CART_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
