import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = false
        },
        loginError: (state) => {
            state.loading = false;
            state.error = true
        },
        logout: (state) => {
            state.user = null
        }
    }
});

const { loginStart, loginSuccess, loginError, logout  } = userSlice.actions;

export { loginStart, loginSuccess, loginError, logout };

export default userSlice.reducer;