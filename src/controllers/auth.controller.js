import * as authService from "../services/auth.service.js";

/**
 * Handles user login.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {import('express').Response} The JSON response with the login result.
 */
export const login = (req, res) => {
  try {
    // Checking req body essential parameters
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({ error: "Missing username or password." });
    }
    const { username, password } = req.body;
    // Call to service
    const loginRes = authService.login(username, password);
    // Check login response
    return loginRes.success
      ? res.status(200).json(loginRes)
      : res.status(401).json({ error: "Invalid credentials." });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

/**
 * Handles user registration.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {import('express').Response} The JSON response with the registration result.
 */
export const register = (req, res) => {
  try {
    // Checking req body essential parameters
    if (
      !req.body ||
      !req.body.username ||
      !req.body.email ||
      !req.body.password ||
      !req.body.password_confirm
    ) {
      return res.status(400).json({ error: "Missing some fields." });
    }
    const { username, email, password, password_confirm } = req.body;
    if (password !== password_confirm) {
      return res.status(400).json({ error: "Passwords do not match." });
    }
    // Call to service
    const registerRes = authService.register(username, email, password);
    // Check register response
    return registerRes.success
      ? res.status(200).json(registerRes)
      : res.status(401).json({ error: "Invalid credentials." });
  } catch (error) {
    console.error("Error during register:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
