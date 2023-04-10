import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import SequelizeConnection from "./databases/SequelizeConnection";
import cors from "cors";

import router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(cors());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use("/api", router);

(async () => {
  await SequelizeConnection.connect();
})();

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});