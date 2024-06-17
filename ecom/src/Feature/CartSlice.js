

import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const product = { ...action.payload, quantity: 1 }
            const itemindex = state.findIndex((item) => item.id === action.payload.id)
            if (itemindex >= 0) {
                alert("already added to the cart")



                state.count.value--

            }
            else {

                state.push(product)
            }


        },
        removeProduct: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        updateCart: (state, action) => {
            return action.payload
        },
        
    },
})

export const { addProduct, removeProduct, updateCart } = CartSlice.actions
export default CartSlice.reducer
