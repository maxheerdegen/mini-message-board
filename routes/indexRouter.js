import { Router } from 'express';
import messages from '../db.js';

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", {title: "mini messageboard", messages: messages }));

export default indexRouter;