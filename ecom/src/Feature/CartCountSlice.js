import { createSlice } from '@reduxjs/toolkit'
const initialState = { value: 0 }
const CartCountSlice = createSlice({
    name: 'cartCount',
    initialState,
    reducers: {
        increment: (state, action) => {
                        state.value++;
                    
        },
        decrement: (state) => {
            state.value--;
        },
       
    }
})
export const { increment, decrement } = CartCountSlice.actions
export default CartCountSlice.reducer