import './App.css';

import Chat from './components/chat/Chat';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <div className='App'>
      <LoginForm />
      <Chat />
    </div>
  );
}

export default App;
