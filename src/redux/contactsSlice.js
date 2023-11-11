import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    add: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    remove(state, action) {
      const index = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.contacts.items;
