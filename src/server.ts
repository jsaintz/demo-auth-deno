import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { login, auth, guest } from "./routes.ts";
import authValidator from './authValidator.ts';

const router = new Router();

router
  .post("/login", login)
  .get("/auth", authValidator, auth)
  .get("/guest", guest);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log("Server iniciado porta: 8000");
