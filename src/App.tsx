import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';
import LoginCard from './components/login/LoginCard';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/login' component={LoginCard} />
          {/* <Route exact path='/register' /> */}
          {/* <Route exact path='/profile/:id' /> */}
          {/* <Route exact path='/requests' /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
