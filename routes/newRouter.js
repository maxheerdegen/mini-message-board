import { Router } from 'express';
import messages from '../db.js';

const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form"));

newRouter.post("/", (req, res) => {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect("/");
})

export default newRouter;