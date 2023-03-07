import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.use(express.static(DIST_DIR));

app.listen(port, function () {
  console.log("App listening on port: " + port);
});

