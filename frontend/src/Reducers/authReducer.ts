import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isLoggedIn: boolean;
    persona: string;
    userId: string;
}


//Loading stored states fro local storage
const loadStates = (): AuthState => {
    const persona = localStorage.getItem('persona')
    const userId = localStorage.getItem('userId')
    return {
        isLoggedIn: !!persona && !!userId,
        persona: persona || '',
        userId: userId|| '', 
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: loadStates(),
    reducers: {
        login(state, action: PayloadAction<{
            persona: string;
            userId: string
        }>) {
            state.isLoggedIn = true;
            state.persona = action.payload.persona;
            state.userId = action.payload.userId

            localStorage.setItem('persona', action.payload.persona)
            localStorage.setItem('userId', action.payload.userId)
        },
        logout(state) {
            state.isLoggedIn = false;
            state.persona= '';
            state.userId='';
            localStorage.removeItem('persona')
            localStorage.removeItem('userId')
        },
    },
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer