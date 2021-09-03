import LoginForm from './LoginForm';
import { LoginCardProps } from '../../models/login.model';

const LoginCard = (props: LoginCardProps) => {
  return (
    <div className='login-card'>
      <h3>Log In</h3>
      <LoginForm history={props.history} />
      <div>
        {'New to the Phansite? '}
        <a href='/signup'>Sign up</a>
      </div>
    </div>
  );
};

export default LoginCard;
