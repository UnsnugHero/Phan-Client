import { render, fireEvent } from '@testing-library/react';

import Checkbox from '../../components/general/Checkbox';

describe('checkbox tests', () => {
  test('should render a checkbox with proper values', () => {
    const props = { text: 'check', name: 'box', checked: false, onCheckboxClick: () => {} };
    const { getByRole, getByText } = render(<Checkbox {...props} />);
    const mockCheckbox = getByRole('checkbox');
    const mockSpan = getByText('check');

    expect(mockCheckbox.type).toEqual('checkbox');
    expect(mockCheckbox.checked).toEqual(false);
    expect(mockSpan).toBeDefined();
    expect(mockCheckbox.name).toEqual('box');
  });

  test('should change checked value on click', () => {
    const props = { text: 'check', name: 'box', checked: false, onCheckboxClick: () => {} };
    const { getByRole } = render(<Checkbox {...props} />);
    const mockCheckbox = getByRole('checkbox');

    fireEvent.click(mockCheckbox);

    expect(mockCheckbox.checked).toEqual(false);
  });
});
