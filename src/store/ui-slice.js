import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState: {cartShow: false},
    reducers:{
            toggle(state){
                state.cartShow = !state.cartShow;
            }
        }
    }
);

export const uiActions = uiSlice.actions;

export default uiSlice;