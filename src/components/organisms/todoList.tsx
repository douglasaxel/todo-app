import { Todo } from '../../redux/todoSlice';
import { classNames } from '../../utils/classNames';
import TodoItem from '../molecules/todoItem';

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <div className={classNames('flex flex-col mb-4 gap-y-2')}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
