const AppRouter = {
  private: {
    user: '/user',
    events: '/user/[id]/events'
  },
  public: {
    signin: '/auth/signin',
    register: '/auth/register'
  }
}

export { AppRouter }
