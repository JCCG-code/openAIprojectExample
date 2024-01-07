import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

/**
 * Local imports
 */
import v1AuthRouter from "./routes/v1/auth.router.js";

/**
 * Initializations
 */
const app = express();
const port = process.env.PORT || 3001;

/**
 * Middelwares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * API routes
 */
app.use("/api/v1/auth", v1AuthRouter);

/**
 * Server and database are listening
 */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
