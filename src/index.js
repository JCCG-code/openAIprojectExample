import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

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
 * Server and database are listening
 */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
