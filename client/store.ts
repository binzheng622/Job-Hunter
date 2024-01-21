import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/noteReducer';

//redux store setup
export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
