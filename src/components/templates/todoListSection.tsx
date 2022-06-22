import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getTodos, Todo } from '../../redux/todoSlice';
import Card from '../atoms/card';
import TodoAdd from '../molecules/todoAdd';
import TodoList from '../organisms/todoList';

function TodoListSection() {
  const [list, setList] = useState<Todo[]>([]);

  const todos = useAppSelector(getTodos);

  useEffect(() => {
    const unfinisheds = todos.filter((todo) => !todo.isCompleted);
    const finisheds = todos.filter((todo) => todo.isCompleted);

    setList([...unfinisheds, ...finisheds]);
  }, [todos]);

  return (
    <Card className="bg-white xl:min-w-[720px]">
      <p className="text-sm text-gray-500 mb-4">
        *Clique na tarefa para editar
      </p>

      <TodoList todos={list} />

      <TodoAdd />
    </Card>
  );
}

export default TodoListSection;
