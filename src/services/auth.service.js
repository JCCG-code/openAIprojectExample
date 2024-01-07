export const login = (username, password) => {
  return { state: "OK", method: "login", user: { username: "username" } };
};

export const register = (username, email, password) => {
  return { success: true, method: "register", user: { username: "username" } };
};
