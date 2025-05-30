import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import indexRouter from './routes/indexRouter.js';
import messageRouter from './routes/messageRouter.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const assetsPath = path.join(__dirname, "public");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/message", messageRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})