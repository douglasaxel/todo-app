import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos: TodoState}
export type AppDispatch = typeof store.dispatch;

export { store };
