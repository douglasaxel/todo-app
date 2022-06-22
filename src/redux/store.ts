import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { Todo, TodoState } from './todoSlice';

function saveToLocalStorage(state: TodoState) {
  try {
    const serializedState = JSON.stringify(state.todos);
    localStorage.setItem('@TodoApp:todos', serializedState);
  } catch (e) {
    console.warn(e);
  }
}

function getTodosFromLocalStorage() {
  try {
    const serializedTodos = localStorage.getItem('@TodoApp:todos');
    const todos = JSON.parse(serializedTodos || '[]') as Todo[];
    return todos;
  } catch {
    return undefined;
  }
}

const store = configureStore({
  reducer: todoReducer,
  preloadedState: {
    todos: getTodosFromLocalStorage(),
  },
});

// Listen store and save every change to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos: TodoState}
export type AppDispatch = typeof store.dispatch;

export { store };
