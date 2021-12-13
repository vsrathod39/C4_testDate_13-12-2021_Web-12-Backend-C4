const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const userController = require("./controllers/users.controller");
const movieController = require("./controllers/movies.controller");

app.use("/users", userController);
app.use("/post", movieController);

app.listen(2345, async () => {
    await connect();
    console.log("Listening at port 2343...");
})