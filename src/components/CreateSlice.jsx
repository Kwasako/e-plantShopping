import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],

}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers:{
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if (existingItem){
                existingItem.quantity += 1
            }
            else{
                state.cartItems.push({...action.payload, quantity:1})
            }
        }
    }
})

export const {
    addItemToCart
} = CartSlice.actions
export default CartSlice.reducer