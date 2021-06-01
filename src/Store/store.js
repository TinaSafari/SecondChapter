import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initState = {
  user: {
    token: "",
    email: "",
    firstName: "",
    lastName: "",
    creditBalance: 100.0,
  },
  cart: []
};

// ACTION
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const FIRSTNAME = "FIRSTNAME";
export const LASTNAME = "LASTNAME";
export const CREDITBALANCE = "CREDITBALANCE";
export const UPDATEUSER = "UPDATEUSER";
export const SIGNUP = "SIGNUP";
export const ADDBOOK = "ADDBOOK";
export const REMOVEBOOK = "REMOVEBOOK";
export const CHECKOUT = "CHECKOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { accessToken: '', user: {} };
    case GET_USER:
      return { ...state, user: action.payload };
    case SIGNUP:
      return { user: action.payload };
    case FIRSTNAME:
      return { ...state, user: action.payload };
    case LASTNAME:
      return { ...state, user: action.payload };
    case CREDITBALANCE:
      return { ...state, user: { ...state.user, user: { ...state.user, creditBalance: action.payload } } };
    case UPDATEUSER:
      return { ...state, user: { ...state.user, user: action.payload } };
    case ADDBOOK:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVEBOOK:
      return {...state.cart, cart: state.cart.filter((item) => item !== action.payload) };
      case CHECKOUT:
      return { cart: (state.cart = []) };
    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initState)), {
  name: "storage",
});