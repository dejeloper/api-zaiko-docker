import express, { Request, Response } from "express";
import routerApi from "./routes/api";

const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Api backend Zaiko");
});

routerApi(app);

export default app;
