const express = require("express");
const userRouter = require("./routers");

const app = express();

app.use(express.json());

app.use("/", userRouter);

app.listen(process.env.PORT || "4000", () => {
  console.log(`server run on port: ${process.env.PORT || "4000"}`);
});
