import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ status: "OK" });
});

export default routes;
