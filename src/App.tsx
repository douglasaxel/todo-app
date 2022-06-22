import { ToastContainer } from 'react-toastify';
import { EditTodoProvider } from './contexts/editTodo';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <EditTodoProvider>
      <Routes />
      <ToastContainer />
    </EditTodoProvider>
  );
}

export default App;
