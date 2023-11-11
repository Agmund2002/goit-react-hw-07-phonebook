import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        key: ''
    },
    reducers: {
        change(state, action) {
            state.key = action.payload
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const { change } = filterSlice.actions;

export const getFilter = state => state.filter.key;