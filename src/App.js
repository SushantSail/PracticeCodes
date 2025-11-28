
import './App.css';
// import { FetchApi } from './components/FetchApi';
import { SendDataToApi } from './components/SendDataToApi';
// import { NewUserPage } from './components/NewUserPage';
// import { Login } from './components/Login';
// import { TodoList } from './components/TodoList';
import { Send_Receive_Api } from './components/Send_Receive_Api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NewUserPage /> */}
        {/* <Login /> */}
       {/* <TodoList/> */}
       {/* <FetchApi/> */}
       {/* <SendDataToApi/> */}
       <Send_Receive_Api/>
             </header>
    </div>
  );
}

export default App;
