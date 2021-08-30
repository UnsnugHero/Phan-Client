import './App.css';

import Chat from './components/chat/Chat';
import LoginCard from './components/login/LoginCard';

function App() {
  return (
    <div className='App'>
      <LoginCard />
      <Chat />
    </div>
  );
}

export default App;
