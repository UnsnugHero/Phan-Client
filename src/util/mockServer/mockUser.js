export function mockUserInstance(instance) {
  instance.onGet('/api/user').reply(200, {
    message: 'Get user success',
    user: {
      role: 'user',
      _id: '62a558bfe738273a8c1a637b',
      username: 'MockUser',
      votedPolls: [],
      createdAt: '2022-06-12T03:08:47.344Z',
      updatedAt: '2022-06-12T03:08:47.344Z',
      __v: 0,
    },
  });
}
