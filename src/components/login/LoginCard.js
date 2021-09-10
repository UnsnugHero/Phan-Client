import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginCard = (props) => {
  return (
    <div className='login-card'>
      <h3>Log In</h3>
      <LoginForm history={props.history} />
      <div>
        {'New to the Phansite? '}
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  );
};

export default LoginCard;
