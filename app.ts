import express, { Express, Request, Response } from "express";
import cors from "cors";

// ROUTE IMPORTS
import tokenRoutes from "./src/routes/tokenRoutes";

// CONFIG
const port = 3001;
const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(function (err: any, req: Request, res: Response, next: any) {
  res.status(500).send({ message: err.message });
});

// Routers
app.use("/api/token", tokenRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
