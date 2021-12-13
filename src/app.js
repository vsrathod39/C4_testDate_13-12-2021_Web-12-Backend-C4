const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const userController = require("./controllers/users.controller");
const movieController = require("./controllers/movies.controller");
const screenController = require("./controllers/screens.controller");
const showController = require("./controllers/shows.controller");

app.use("/users", userController);
app.use("/post", movieController);
app.use("/screens", screenController);
app.use("/post", showController);
app.use("/get", showController);

app.listen(2345, async () => {
    await connect();
    console.log("Listening at port 2345...");
})