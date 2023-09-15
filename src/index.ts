import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Api backend Zaiko");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
