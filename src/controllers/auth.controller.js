import * as authService from "../services/auth.service.js";

export const login = (req, res) => {
  const loginRes = authService.login();
  return res.status(200).json(loginRes);
};

export const register = (req, res) => {
  const registerRes = authService.register();
  return res.status(200).json(registerRes);
};
