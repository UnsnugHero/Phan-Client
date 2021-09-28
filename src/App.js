import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { setAxiosHeaderAuthToken } from './util/helpers';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth.action';
import { AUTH_TOKEN_STORAGE_KEY } from './util/constants';
import { AppBlackBackgroundContainer, AppContainer } from './components/styles/App.style';

import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Header from './components/general/Header';
import storageService from './services/storage.service';
import Footer from './components/general/Footer';
import ScrollToTop from './components/routing/ScrollToTop';

if (storageService.getItem(AUTH_TOKEN_STORAGE_KEY)) {
  setAxiosHeaderAuthToken(storageService.getItem(AUTH_TOKEN_STORAGE_KEY));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <ScrollToTop />
          <Header />
          <AppBlackBackgroundContainer className='app-black-background-container'>
            <AppContainer className='app-container'>
              <Route exact path='/' component={Landing} />
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                {/* <Route exact path='/profile/:id' /> */}
                {/* <Route exact path='/requests' /> */}
              </Switch>
            </AppContainer>
          </AppBlackBackgroundContainer>
          <Footer />
        </Router>
        <ToastContainer
          draggable={false}
          hideProgressBar={true}
          position={toast.POSITION.BOTTOM_CENTER}
          theme='colored'
          transition={Slide}
        />
      </div>
    </Provider>
  );
};

export default App;
