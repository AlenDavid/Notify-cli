import { Router } from "express";

import status from "./status";
import notify from "./notify";

const routes = Router();

routes.use(status);
routes.use("/notify", notify);

export default routes;
