export function getCookie(cookieName: string, cookies: string): string | null {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(cookies);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null; // La cookie no se encontró
}

export function getCookiesFromSocket(socket) {
  const { handshake } = socket;
  if (handshake && handshake.headers && handshake.headers.cookie) {
    const cookies = {};
    const cookieString = handshake.headers.cookie;
    const cookieArray = cookieString.split(';');

    for (const cookie of cookieArray) {
      const [name, value] = cookie.trim().split('=');
      cookies[name] = decodeURIComponent(value);
    }
    return cookies;
  }
  return {};
}
