const TOKEN_KEY = 'auth_token';

class TokenService {
  static setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  static getToken() {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  }

  static removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export default TokenService;
