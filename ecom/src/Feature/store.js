import { configureStore } from "@reduxjs/toolkit";
import CartCountSlice from "./CartCountSlice";
import CartSlice from "./CartSlice";


export const store=configureStore({
    reducer:{
        count:CartCountSlice,
        cart:CartSlice,
       
    }
})

