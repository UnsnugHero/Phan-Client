import SignupForm from './SignupForm';

const SignupCard = (props) => {
  return (
    <div className='signup-card'>
      <h3>Sign Up</h3>
      <SignupForm history={props.history} />
    </div>
  );
};

export default SignupCard;
