import { Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import key from "./key.ts";

const authValidator = async (ctx: Context, next: any) => {
  console.log("authValidator Iniciado");

  const headers : Headers = ctx.request.headers;
  const authorization = headers.get("Authorization");
  if (!authorization) {
    ctx.response.status = 401;
    return;
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    ctx.response.status = 401;
    return;
  }

  if (await validateJwt(token, key, { isThrowing: false })) {
    await next();
    return;
  }
  ctx.response.status = 401;
  ctx.response.body = {message: "Token Inválido!!!"};
}

export default authValidator;
