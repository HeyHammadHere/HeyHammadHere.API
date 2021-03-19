const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
app.use("/public", express.static("public"));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
  resp.end();
});
app.get("/dashboard", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("/admin-panel", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("/documentation", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("/api", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("/about", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("/contact", (res, resp) => {
  resp.send({ name: "Hammad", age: 22 });
});
app.get("*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "error.html"));
});
app.listen(process.env.PORT);
