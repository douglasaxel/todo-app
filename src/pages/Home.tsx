import Title from '../components/atoms/title';
import TodoCounterList from '../components/organisms/todoCounterList';
import TodoListSection from '../components/templates/todoListSection';
import { classNames } from '../utils/classNames';

function Home() {
  return (
    <main
      className={classNames(
        'w-screen min-h-screen bg-gray-100',
        'p-6 overflow-auto'
      )}
    >
      <Title
        className={classNames('text-4xl mb-6')}
        text="Sua lista de tarefas"
      />
      <div className={classNames('flex gap-16 flex-col-reverse xl:flex-row')}>
        <TodoListSection />
        <TodoCounterList />
      </div>
    </main>
  );
}

export default Home;
