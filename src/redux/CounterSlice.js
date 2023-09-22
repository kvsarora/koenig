import {createSlice} from '@reduxjs/toolkit'

// Acting As Action - object ,
// this part can be stored in separate file as well

const counterSlice= createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
    },
});



export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;