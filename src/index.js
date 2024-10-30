// import
import dotenv from "dotenv";
import app from "./App.js";
import dbConfig from "./db/dbConfig.js";

// function call
dotenv.config();
dbConfig();

// running port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
