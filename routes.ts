import { Context } from "https://deno.land/x/oak/mod.ts";

export const login = (ctx: Context) => {
    ctx.request.body();
};

export const guest = (ctx: Context) => {
    ctx.response.body ='Guest Success'
};

export const auth = (ctx: Context) => {
    ctx.response.body ='Auth Success' 
};