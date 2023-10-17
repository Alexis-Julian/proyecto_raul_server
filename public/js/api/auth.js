class AuthManager {
  constructor() {
    this.url = 'http://localhost:3000/api/auth';
  }
  async AuthLogin(User) {
    const response = await fetch(this.url + '/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(User),
    });

    return await response.json();
  }
}

export const ManagerAuth = new AuthManager();
