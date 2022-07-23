import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    updateStatus: ({ contacts }, { payload }) => {
      const index = contacts.findIndex(contacts => contacts.id === payload);
      const status = contacts[index].status === 'yes' ? 'no' : 'yes';
      contacts[index] = {
        ...contacts[index],
        status,
      };
    },
  },
});

export const { addContact, removeContact, updateStatus } =
  contactsSlice.actions;
export default contactsSlice.reducer;
