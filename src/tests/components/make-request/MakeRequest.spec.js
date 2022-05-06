import { render, fireEvent, act, waitFor } from '@testing-library/react';

import MakeRequest from '../../../components/make-request/MakeRequest';
import { makeRequest } from '../../../services/request.service';

const mockHistoryPush = jest.fn();

jest.mock('../../../services/request.service', () => ({
  ...jest.requireActual('../../../services/request.service'),
  makeRequest: () => new Promise(true),
}));

jest.mock('react-router', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({ requestId: 123 }),
}));

describe('Make request tests', () => {
  const setup = () => {
    const utils = render(<MakeRequest />);
    return {
      ...utils,
    };
  };

  it('should navigate to /requests on form cancel', () => {
    const { getByText } = setup();
    const cancelBtn = getByText('Cancel');

    fireEvent.click(cancelBtn);

    expect(mockHistoryPush).toHaveBeenCalledWith('/requests');
  });

  it('should submit and call makeRequest', async () => {
    const { getByText, getByPlaceholderText } = setup();
    const subjectInput = getByPlaceholderText('Subject');
    const descInput = getByPlaceholderText('Description');
    const locationInput = getByPlaceholderText('Location');
    const submitBtn = getByText('Submit');

    fireEvent.change(subjectInput, { target: { value: 'Mock Subject' } });
    fireEvent.change(descInput, { target: { value: 'Mock Description' } });
    fireEvent.change(locationInput, { target: { value: 'Mock Location' } });
    fireEvent.click(submitBtn);

    await waitFor(() => expect(makeRequest).toHaveBeenCalled());
  });
});
