import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {login, auth, guest} from './routes.ts';

const router = new Router();

router
    .post('/login', login)
    .get('/auth',auth)
    .get('/guest',guest);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server iniciado porta: 8000")