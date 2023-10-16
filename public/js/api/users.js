class UserManager {
  constructor() {
    this.url = 'http://localhost:3000/api/users';
  }

  async getUsers(page, limit) {
    const response = await fetch(this.url + `?page=${page}&limit=${limit}`);
    const data = response.json();
    return data;
  }
}

export const userManager = new UserManager();
