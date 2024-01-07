import { Router } from "express";
import * as authController from "../v1/auth.router.js";

/**
 * Initializations
 */
const router = Router();

/**
 * @api {post} /api/auth/login User sign in
 * @apiName Login
 * @apiGroup Auth
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "firstname": "John",
 *     "lastname": "Doe"
 *   }
 */
router.post("/login", (req, res) => {
  authController.login;
});

/**
 * @api {post} /api/auth/register User sign in
 * @apiName Register
 * @apiGroup Auth
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "firstname": "John",
 *     "lastname": "Doe"
 *   }
 */
router.post("/register", (req, res) => {
  authController.register;
});

/**
 * Router export
 */
export default router;
