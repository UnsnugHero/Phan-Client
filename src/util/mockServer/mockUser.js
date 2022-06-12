export function mockUserInstance(instance) {
  instance.onGet('/api/user').reply(200, {
    message: 'Get user success',
    user: {
      role: 'user',
      _id: '62a558bfe738273a8c1a637b',
      username: 'MockUser',
      votedPolls: [],
      createdAt: '04/23/22',
      updatedAt: '04/23/22',
      __v: 0,
    },
  });
}
