import { Router } from 'express';
import messages from '../db.js';

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", {title: "mini messageboard", messages: messages }));

indexRouter.get("/:id", (req, res) => {
    res.render("message", {messages: messages, id: req.params.id})
})

export default indexRouter;