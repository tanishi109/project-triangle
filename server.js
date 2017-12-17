require("babel-register");

const path = require("path");
const express = require("express");
const app = new (express)();
const port = process.env.PORT || 3000;

const router = express.Router();
if (process.env.NODE_ENV !== "production") {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const config = require("./webpack.config");

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
}

router.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/bundle.js"));
});
router.get("/dist/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/bundle.js"));
});

app.use("/", router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", port, port);
  }
});