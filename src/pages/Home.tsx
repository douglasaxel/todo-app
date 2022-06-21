import Input from '../components/atoms/input';
import Textarea from '../components/atoms/textarea';
import { FaPlus } from 'react-icons/fa';

import { useAppSelector } from '../hooks/redux';
import { classNames } from '../utils/classNames';
import TodoAdd from '../components/molecules/todoAdd';
import Card from '../components/atoms/card';
import { getTodos } from '../redux/todoSlice';

function Home() {
  const todos = useAppSelector(getTodos);

  console.log(todos);

  return (
    <main
      className={classNames(
        'w-screen h-screen bg-gray-100',
        'flex items-center justify-center'
      )}
    >
      <Card>
        <h1 className={classNames('text-4xl mb-4')}>Sua lista de tarefas:</h1>
        <ul className={classNames('w-full bg-red-500')}>
          {todos.map((todo) => (
            <li key={todo.id} className={classNames()}>
              <div className={classNames('flex-1 flex items-center')}>
                <input type="checkbox" id={todo.id} />
                <strong className={classNames()}>{todo.title}</strong>
              </div>
              {todo.text && <p className={classNames()}>{todo.text}</p>}
            </li>
          ))}
        </ul>

        <TodoAdd />
      </Card>
    </main>
  );
}

export default Home;
