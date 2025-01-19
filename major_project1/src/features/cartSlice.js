import {createSlice} from '@reduxjs/toolkit'


const initialState={
    cartItem:[],
    cartTotalQuntity:0,
    cartTotalAmount:0,
}

export const cartSlice=createSlice[{
    name:"cart",
    initialState,
    reducers:{
        addtoCart(state,action){
            state.cartItem.push(action.payload)
            state.cartTotalQuntity += action.payload.quantity;
            state.cartTotalAmount += action.payload.price * action.payload.quantity;
        },
        
    }
}
]