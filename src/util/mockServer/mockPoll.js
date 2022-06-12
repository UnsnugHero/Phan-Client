import { getPoll } from '../mockData/poll.mock';

export function mockPollInstance(instance) {
  instance.onGet('/api/poll').reply(200, getPoll);

  instance.onPut(new RegExp('/api/poll/vote/*')).reply(200, getPoll);
}
