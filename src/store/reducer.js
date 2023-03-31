import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    language: 'pl',
    error: null,
    country: 'us'
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getInitialData: (state)=>{
            state.isLoading = true,
            state.error = null
        },
        getDataSuccess: (state, action)=>{
            state.isLoading = false,
            state.data = action.payload
        },
        getDataFailure: (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        },
        getCurrCountry: (state, action)=>{
            state.country = action.payload
        },
        getCurrLanguage: (state, action)=> {
            state.language = action.payload
        }
    }
})

export const { getInitialData, getDataSuccess, getDataFailure, getCurrCountry, getCurrLanguage } = dataSlice.actions

export const reducer = dataSlice.reducer