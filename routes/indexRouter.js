import { Router } from 'express';
import { getAllMessages } from '../db/db.js';

const indexRouter = Router();

indexRouter.get("/", async function (req, res) {
    const messages = await getAllMessages();
    res.render("index", {title: "mini messageboard", messages: messages });
})

export default indexRouter;