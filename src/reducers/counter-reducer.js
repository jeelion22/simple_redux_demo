import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
   name: "counter",
   initialState: {counter: 0},
   reducers: {
    inc: (state, action)=>{
        state.counter += action.payload
        return state
    },
    dec: (state, action)=>{
        state.counter -= action.payload
        return state
    },
    reset: (state, action)=>{
        state.counter = action.payload
        return state
    }
   }
})

export const {inc, dec, reset} = counterSlice.actions