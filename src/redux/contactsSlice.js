import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlerPending = state => {
  state.error = false;
  state.isLoading = true;
};

const handlerRejected = state => {
  state.isLoading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: {
    [fetchContacts.pending]: handlerPending,
    [addContact.pending]: handlerPending,
    [deleteContact.pending]: handlerPending,
    [fetchContacts.rejected]: handlerRejected,
    [addContact.rejected]: handlerRejected,
    [deleteContact.rejected]: handlerRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;

      state.items = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;

      state.items.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;

      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;