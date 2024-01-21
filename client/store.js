import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/noteReducer.js';

//redux store setup
const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
