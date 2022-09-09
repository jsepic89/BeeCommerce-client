import { createSlice } from '@reduxjs/toolkit'
import { logout } from './userSlice';

const initialState = {
    products: [],
    quantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.totalPrice += action.payload.price
        },
        deleteProduct: (state, action) => {
            state.quantity -= 1;
            state.products.splice(state.products.findIndex(product => product._id === action.payload.id), 1);
            state.totalPrice -= action.payload.price
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logout, (state) => {
            return initialState;
        });
      }
});

const { addProduct, deleteProduct } = cartSlice.actions;

export { addProduct, deleteProduct };

export default cartSlice.reducer;