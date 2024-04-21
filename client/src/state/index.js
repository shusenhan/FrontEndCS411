import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    schools:[]
};

/*理论上还需要将reduer来集成到全局状态树下，然后才能用useSelector访问到状态：
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer
        }
    });
但create-react-app脚手架已经预先设置过store了
*/ 

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setRecommandSchools: (state, action) => {
            state.schools = action.payload.schools
        }
    }
});

export const { setMode, setLogin, setLogout, setRecommandSchools } = authSlice.actions;
export default authSlice.reducer;