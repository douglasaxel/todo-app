import { useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '../../hooks/redux';
import { addTodo, Todo } from '../../redux/todoSlice';
import { classNames } from '../../utils/classNames';
import Button from '../atoms/button';
import Input from '../atoms/input';
import Textarea from '../atoms/textarea';

function TodoAdd() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const handleCreateTodo = useCallback(() => {
    const todo: Todo = {
      id: uuid(),
      title,
      text,
      isCompleted: false,
    };

    dispatch(addTodo(todo));
  }, [title, text]);

  return (
    <div className={classNames('flex gap-x-2 w-full')}>
      <div className="flex flex-col gap-y-2 w-full">
        <Input
          type="text"
          placeholder="Ir no mercado"
          aria-label="Título da nova tarefa"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Comprar presunto, queijo, feijão..."
          aria-label="Texto da nova tarefa"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Button>
        <FaPlus
          className={classNames(
            'text-white text-2xl xl:text-4xl',
            'group-hover:text-gray-800 transition-colors duration-300'
          )}
          aria-label="Criar nova tarefa"
          onClick={handleCreateTodo}
        />
      </Button>
    </div>
  );
}

export default TodoAdd;
