import { Router } from 'express';
import messages from '../db.js';

const messageRouter = Router();

messageRouter.get("/new", (req, res) => res.render("form"));

messageRouter.post("/new", (req, res) => {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect("/");
})

messageRouter.get("/:id", (req, res) => {
    res.render("message", {messages: messages, id: req.params.id})
})

export default messageRouter;