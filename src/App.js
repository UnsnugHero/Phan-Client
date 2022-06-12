import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { setAxiosHeaderAuthToken } from './util/helpers';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth.action';
import { AUTH_TOKEN_STORAGE_KEY, NOT_IMPLEMENTED_ROUTES } from './util/constants';
import { AppBlackBackgroundContainer, AppContainer } from './components/styles/App.style';

import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import Profile from './components/profile/Profile';
import RequestSearch from './components/request-search/RequestSearch';
import RequestDetails from './components/request-details/RequestDetails';
import MakeRequest from './components/make-request/MakeRequest';
import EditRequest from './components/edit-request/EditRequest';
import NotFound from './components/general/NotFound';
import NotImplemented from './components/general/NotImplemented';
import About from './components/about/About';

import ScrollToTop from './components/routing/ScrollToTop';
import PrivateRoute from './components/routing/PrivateRoute';
import storageService from './services/storage.service';

if (storageService.getItem(AUTH_TOKEN_STORAGE_KEY)) {
  setAxiosHeaderAuthToken(storageService.getItem(AUTH_TOKEN_STORAGE_KEY));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  if (process.env.AXIOS_MOCK) {
    alert('This app is in display mode, so many actions will do nothing.');
  }

  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <ScrollToTop />
          <Header />
          <AppBlackBackgroundContainer className='app-black-background-container'>
            <AppContainer className='app-container'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <Route exact path='/requests' component={RequestSearch} />
                <Route exact path='/requests/:requestId' component={RequestDetails} />
                <PrivateRoute exact path='/make-request' component={MakeRequest} />
                <PrivateRoute exact path='/edit-request/:requestId' component={EditRequest} />

                <Route exact path='/about' component={About} />

                <Route exact path={NOT_IMPLEMENTED_ROUTES} component={NotImplemented} />
                <Route exact path='/404' component={NotFound} />
                <Redirect to='/404' />
              </Switch>
            </AppContainer>
          </AppBlackBackgroundContainer>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
