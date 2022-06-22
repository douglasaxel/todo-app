import { createContext, ReactNode, useContext, useState } from 'react';
import { Todo } from '../redux/todoSlice';

type EditTodoContextType = {
  current?: Todo;
  setCurrentEditTodo: (todo: Todo) => void;
  clearCurrentEditTodo: () => void;
};

type EditTodoContextProps = {
  children: ReactNode;
};

const EditTodoContext = createContext({} as EditTodoContextType);

export function EditTodoProvider({ children }: EditTodoContextProps) {
  const [current, setCurrent] = useState<Todo>();

  function setCurrentEditTodo(todo: Todo) {
    setCurrent(todo);
  }

  function clearCurrentEditTodo() {
    setCurrent(undefined);
  }

  return (
    <EditTodoContext.Provider
      value={{
        current,
        setCurrentEditTodo,
        clearCurrentEditTodo,
      }}
    >
      {children}
    </EditTodoContext.Provider>
  );
}

export function useEditTodo() {
  const context = useContext(EditTodoContext);
  if (!context) {
    throw new Error('"useEditTodo" must be used within an "EditTodoProvider"');
  }

  return context;
}
