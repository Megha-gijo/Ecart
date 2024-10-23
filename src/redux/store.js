import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice  from "./slices/wislistSlice";
import  cartSlice  from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        wishlist : wishlistSlice,
        cartItem : cartSlice

    }
})

export default store

