import express from "express";
import { addMessages, getMessages} from "../repositories/messagesRepository.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getMessages());
});

router.post("/", async (req, res) => {
  await addMessages(req.body);
  res.send(req.body);
});

export default router;
