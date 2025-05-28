import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})