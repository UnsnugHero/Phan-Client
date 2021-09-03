import { SignupCardProps } from '../../models/signup.model';
import SignupForm from './SignupForm';

const SignupCard = (props: SignupCardProps) => {
  return (
    <div className='signup-card'>
      <h3>Sign Up</h3>
      <SignupForm history={props.history} />
    </div>
  );
};

export default SignupCard;
