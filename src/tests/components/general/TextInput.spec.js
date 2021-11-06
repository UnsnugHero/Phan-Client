import { render, fireEvent } from '@testing-library/react';
import TextInput from '../../../components/general/TextInput';

describe('text input tests', () => {
  let props;

  beforeEach(() => {
    props = {
      maxLength: 30,
      name: 'test-input',
      onInputChange: () => {},
      type: 'text',
      placeholder: 'mock input',
      value: '',
    };
  });

  it('should render a text input with proper values', () => {
    const { getByPlaceholderText } = render(<TextInput {...props} />);
    const input = getByPlaceholderText('mock input');

    fireEvent.change(input, { target: { value: 'ee' } });

    expect(input.value).toEqual('');
    expect(input.placeholder).toEqual('mock input');
  });

  it('should show error on error', () => {
    const { getByText } = render(<TextInput {...props} error='oops' />);
    const errorSpan = getByText('oops');

    expect(errorSpan).toBeDefined();
  });
});
