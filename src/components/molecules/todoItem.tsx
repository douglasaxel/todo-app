import { useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useEditTodo } from '../../contexts/editTodo';
import { removeTodo, changeTodoStatus, Todo } from '../../redux/todoSlice';
import { classNames } from '../../utils/classNames';
import Box from '../atoms/box';
import ButtonDelete from '../atoms/buttons/buttonDelete';
import Checkbox from '../atoms/checkbox';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { setCurrentEditTodo } = useEditTodo();
  const dispatch = useDispatch();

  const handleDeleteTodo = useCallback(() => {
    dispatch(removeTodo(todo.id));
  }, [todo.id]);

  const handleUpdateTodoStatus = useCallback(() => {
    dispatch(changeTodoStatus(todo.id));
  }, [todo.id]);

  const handleSelectEditTodo = useCallback(() => {
    setCurrentEditTodo(todo);
  }, [todo]);

  return (
    <Box className={classNames('flex items-start gap-x-2')}>
      <Checkbox
        id={todo.id}
        size={20}
        className="mt-1"
        defaultChecked={todo.isCompleted}
        onChange={handleUpdateTodoStatus}
      />
      <button
        className={classNames('flex-1 flex flex-col')}
        onClick={handleSelectEditTodo}
      >
        <strong
          className={classNames(
            todo.isCompleted ? 'line-through text-gray-500' : null
          )}
        >
          {todo.title}
        </strong>
        {todo.text && (
          <p
            className={classNames(
              'whitespace-pre-wrap text-justify',
              todo.isCompleted ? 'line-through text-gray-500' : null
            )}
          >
            {todo.text}
          </p>
        )}
      </button>
      <ButtonDelete aria-label="Criar nova tarefa" onClick={handleDeleteTodo}>
        <FaTrash
          className={classNames(
            'text-white',
            'group-hover:text-gray-800 transition-colors duration-300'
          )}
        />
      </ButtonDelete>
    </Box>
  );
}

export default TodoItem;
