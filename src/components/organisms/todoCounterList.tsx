import { useAppSelector } from '../../hooks/redux';
import { getTodos } from '../../redux/todoSlice';
import { classNames } from '../../utils/classNames';
import CounterInfo from '../molecules/counterInfo';

function TodoCounterList() {
  const todos = useAppSelector(getTodos);

  return (
    <section className={classNames('flex flex-col gap-6')}>
      <CounterInfo
        bgColor="#7bb6ff"
        textColor="#fff"
        count={todos.length}
        text="Total de tarefas"
      />
      <CounterInfo
        bgColor="#72df93"
        textColor="#fff"
        count={todos.filter((t) => t.isCompleted).length}
        text="Tarefas completas"
      />
      <CounterInfo
        bgColor="#ff7b7b"
        textColor="#fff"
        count={todos.filter((t) => !t.isCompleted).length}
        text="Tarefas incompletas"
      />
    </section>
  );
}

export default TodoCounterList;
