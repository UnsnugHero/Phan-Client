import LoginForm from './LoginForm';

const LoginCard = (props) => {
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
