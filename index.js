// npx prisma generate
// npx prisma migrate dev --name init --create-only
// npx prisma migrate deploy

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server Running ");
});
