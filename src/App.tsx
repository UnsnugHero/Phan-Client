import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';
import LoginCard from './components/login/LoginCard';
import SignupCard from './components/signup/SignupCard';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/login' component={LoginCard} />
          <Route exact path='/signup' component={SignupCard} />
          {/* <Route exact path='/profile/:id' /> */}
          {/* <Route exact path='/requests' /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
