import { Context } from "https://deno.land/x/oak/mod.ts";
import users from "./users.ts";
import key from "./key.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";


const header: Jose = {
  alg: "HS256",
  type: "JWT",
};

export const login = async (ctx: Context) => {
  const { value } = await ctx.request.body();

  for (const user of users) {
    if (value.username === user.username && value.password === user.password) {
      const payload: Payload = {
        iss: user.username,
        exp: setExpiration(new Date().getTime() + 60000),
      };

      const token = makeJwt({ key, header, payload });

      if (token) {
        ctx.response.status = 200;
        ctx.response.body = {
          id: user.id,
          username: user.username,
          token,
        };
      } else {
        ctx.response.status = 500;
        ctx.response.body = {
          message: "Erro ao acessar servidor",
        };
      }
      return;
    }
  }

  ctx.response.status = 422;
  ctx.response.body = {
    message: "Usuário ou senha inválido!!!",
  };
};

export const guest = (ctx: Context) => {
  ctx.response.body = "Guest Success";
};

export const auth = (ctx: Context) => {
  ctx.response.body = "Autenticado com  Sucesso";
};
