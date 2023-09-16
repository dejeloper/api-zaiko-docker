import express from "express";

import loginRouterv1 from "./v1/login/login.route";

function routerApi(app: express.Application) {
  const routerv1 = express.Router();
  app.use("/api/v1", routerv1);
  routerv1.use("/login", loginRouterv1);
}

export default routerApi;
