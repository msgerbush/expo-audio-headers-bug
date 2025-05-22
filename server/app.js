import express from "express";

const app = express();

app.use((req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader === "Bearer valid-token") {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(express.static("public"));

app.listen(3000);
