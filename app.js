import express from 'express';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js';

const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})