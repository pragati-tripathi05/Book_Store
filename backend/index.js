const express = require("express");
const { userController } = require("./routes/user.routes");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const { connection } = require("./config/db");

app.use(express.json());
app.use(cors());
app.use("/user", userController);
app.use("/books", router);

cors({
  origin: ["http://localhost:3000"],
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db successfully");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log(`Listening on port ${PORT}`);
});
