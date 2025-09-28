
import './App.css';
// import { FetchApi } from './components/FetchApi';
import { SendDataToApi } from './components/SendDataToApi';
// import { NewUserPage } from './components/NewUserPage';
// import { Login } from './components/Login';
// import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NewUserPage /> */}
        {/* <Login /> */}
       {/* <TodoList/> */}
       {/* <FetchApi/> */}
       <SendDataToApi/>
             </header>
    </div>
  );
}

export default App;
