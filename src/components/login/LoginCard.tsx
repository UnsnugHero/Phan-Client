import { History } from 'history';

import LoginForm from './LoginForm';

export interface LoginCardProps {
  history: History;
}

const LoginCard = (props: LoginCardProps) => {
  return (
    <div className='login-card'>
      <h3>Log In</h3>
      <LoginForm history={props.history} />
      {/* im thinking a text that says: */}
      {/* 'New to the Phan-site? Sign up' */}
      {/* with sign up being a clickable link */}
      <div>
        {'New to the Phansite? '}
        <a href='/'>Sign up</a>
      </div>
    </div>
  );
};

export default LoginCard;
