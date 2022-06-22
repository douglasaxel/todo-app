import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Todo = {
  id: string;
  title: string;
  text?: string;
  isCompleted: boolean;
};

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: ({ todos }, action: PayloadAction<Todo>) => {
      const todo = {
        ...action.payload,
        isCompleted: false,
      };
      todos.push(todo);
    },
    updateTodo: ({ todos }, action: PayloadAction<Todo>) => {
      const index = todos.findIndex((t) => t.id === action.payload.id);
      if (index >= 0) {
        todos[index] = action.payload;
      }
    },
    removeTodo: ({ todos }, action: PayloadAction<string>) => {
      const index = todos.findIndex((t) => t.id === action.payload);
      if (index >= 0) {
        todos.splice(index, 1);
      }
    },
    changeTodoStatus: ({ todos }, action: PayloadAction<string>) => {
      const index = todos.findIndex((t) => t.id === action.payload);
      if (index >= 0) {
        todos[index].isCompleted = !todos[index].isCompleted;
      }
    },
  },
});

export const { addTodo, updateTodo, removeTodo, changeTodoStatus } =
  todoSlice.actions;

export const getTodos = (state: RootState) => state.todos;

export const totalTodos = (state: RootState) => state.todos.length;

export const totalTodosCompleted = (state: RootState) =>
  state.todos.filter((t) => t.isCompleted).length;

export const totalTodosIncompleted = (state: RootState) =>
  state.todos.filter((t) => !t.isCompleted).length;

export default todoSlice.reducer;
