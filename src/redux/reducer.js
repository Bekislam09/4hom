import {  createReducer, createAction } from '@reduxjs/toolkit'

const INCREMENT_NUM = 'INCREMENT_NUM'
const DECREMENT_NUM = 'DECREMENT_NUM'
const RESET = 'RESET'

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const reset = createAction(RESET)

const initialState = {
    num : 14,
}


export default createReducer(initialState, (builder) =>{
    builder
    .addCase(INCREMENT_NUM, (state, action)=>{
        if(state.num <= 10){
            state.num += 5
        }else{
            state.num = 15
        }
    })
    .addCase(DECREMENT_NUM, (state, action)=>{
        if(state.num >= 5){
            state.num -= 5
        }else{
            state.num = 0
        }
    })
    .addCase(RESET, (state) =>{
        state.num = 0 
    })
})
