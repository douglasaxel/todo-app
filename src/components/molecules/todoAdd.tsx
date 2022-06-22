import { useCallback, useEffect, useState } from 'react';
import { FaPenAlt, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import { useEditTodo } from '../../contexts/editTodo';

import { useAppDispatch } from '../../hooks/redux';
import { addTodo, Todo, updateTodo } from '../../redux/todoSlice';
import { classNames } from '../../utils/classNames';
import ButtonAdd from '../atoms/buttons/buttonAdd';
import Input from '../atoms/input';
import Textarea from '../atoms/textarea';

function TodoAdd() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();
  const { current: currentTodo, clearCurrentEditTodo } = useEditTodo();

  useEffect(() => {
    setTitle(currentTodo?.title || '');
    setText(currentTodo?.text || '');
  }, [currentTodo]);

  const handleSaveTodo = useCallback(() => {
    if (title.replace(/\s/g, '') === '') {
      toast.error('O Título é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!currentTodo) {
      const todo: Todo = {
        id: uuid(),
        title,
        text,
        isCompleted: false,
      };

      dispatch(addTodo(todo));
    } else {
      dispatch(
        updateTodo({
          ...currentTodo,
          title,
          text: text ? text : currentTodo.text,
        })
      );
      clearCurrentEditTodo();
    }

    setTitle('');
    setText('');
  }, [title, text, currentTodo]);

  return (
    <div className={classNames('flex gap-x-2 w-full')}>
      <div className="flex flex-col gap-y-2 w-full">
        <Input
          type="text"
          placeholder="Ir no mercado"
          aria-label="Título da nova tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Comprar presunto, queijo, feijão..."
          aria-label="Texto da nova tarefa"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <ButtonAdd aria-label="Criar nova tarefa" onClick={handleSaveTodo}>
        {currentTodo ? (
          <FaPenAlt
            className={classNames(
              'text-white text-2xl xl:text-4xl',
              'group-hover:text-gray-800 transition-colors duration-300'
            )}
          />
        ) : (
          <FaPlus
            className={classNames(
              'text-white text-2xl xl:text-4xl',
              'group-hover:text-gray-800 transition-colors duration-300'
            )}
          />
        )}
      </ButtonAdd>
    </div>
  );
}

export default TodoAdd;
