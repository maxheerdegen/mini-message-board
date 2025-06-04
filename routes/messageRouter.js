import { Router } from 'express';
import { getAllMessages ,createMessage } from '../db/db.js';

const messageRouter = Router();

messageRouter.get("/new", (req, res) => res.render("form"));

messageRouter.post("/new", async function (req, res) {
    const { messageText, messageAuthor } = req.body;
    const added = new Date().toLocaleString();
    await createMessage(messageAuthor, messageText, added);
    res.redirect("/");
})

messageRouter.get("/:id", async function (req, res) {
    const messages = await getAllMessages();
    res.render("message", {messages: messages, id: req.params.id})
})

export default messageRouter;