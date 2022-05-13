import { Router } from "express";
import { send } from "../services/notification";

const routes = Router();

routes.post("/", async (req, res) => {
  console.log("New request at: ", req.originalUrl);

  console.log(req.body, req.headers);

  if (
    !(
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
  ) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const [token] =
    req.headers.authorization.match(/(?!Bearer )([\d\w]+)$/g) ?? [];

  if (!req.body.title || !req.body.body) {
    res.status(400).send({ error: "Missing body" });
  }

  const { title, body } = req.body;


  if (token) {
    try {
      const message = await send(token, title, body);
      res.json({ message })

      res.status(201).send(message);
    } catch (error) {
      console.error(error);

      res.status(500).send({ error: "Internal server error" });
    }
  }
});

export default routes;
