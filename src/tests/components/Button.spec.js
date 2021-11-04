import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../../components/general/Button';

describe('button tests', () => {
  test('should render a button with proper values', () => {
    const props = { disabled: false, text: 'MockButton', onButtonClick: () => {} };
    const { getByRole } = render(<Button {...props} />);
    const mockButton = getByRole('button');

    fireEvent.click(mockButton);

    expect(mockButton.textContent).toEqual('MockButton');
    expect(mockButton.disabled).toEqual(false);
  });

  test('should disable button', () => {
    const props = { disabled: true, text: 'MockButton', onButtonClick: () => {} };
    render(<Button {...props} />);

    expect(screen.getByRole('button').disabled).toEqual(true);
  });
});
