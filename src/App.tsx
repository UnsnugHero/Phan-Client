import './App.css';

import Button from './components/general/Button';
import TextInput from './components/general/TextInput';

function App() {
  const handleButtonClick = () => {
    console.log('button clicked');
  };

  const handleInputChange = (e: string) => {
    console.log(e);
  };

  return (
    <div className='App'>
      <TextInput
        maxLength={10}
        text='Text Input Here'
        onInputChange={handleInputChange}
      />
      <Button text='Big Button' onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
