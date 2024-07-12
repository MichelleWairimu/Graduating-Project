import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isLoggedIn: boolean;
    persona: string;
}

const initialState: AuthState = {
    isLoggedIn:false,
    persona: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.persona = action.payload
        },
        logout(state) {
            state.isLoggedIn = false
            state.persona= ''
        },
    },
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer