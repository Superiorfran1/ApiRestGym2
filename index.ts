import express from "express";
import type{Express,Request,Response} from "express";
import {env} from "./src/config/env";
import v1Router from "./src/v1/routes";
import recordRouter from "./src/v1/routes/recordRoutes";
import cors from "cors";

const app:Express = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/workouts",v1Router);
app.use("/api/v1/records",recordRouter);


app.listen(env.port,() => console.log(`Servidor en el puerto ${env.port}`));