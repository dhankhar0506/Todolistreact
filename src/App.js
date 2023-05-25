
import { Provider } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';
import store from './redux/store';
import { TodoList } from './components/TodoList';

function App() {
  return (
  
    <div className="App">
      <Provider store={store} >
        <h1>Todo-List using React-redux</h1>
      <Todo/>
      <TodoList/>
      </Provider>
    </div>
  );
}

export default App;