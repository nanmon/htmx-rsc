import { Context, Elysia } from "elysia";
import { html } from "../services/response";

export function sendMessage(ctx: Context) {
  const { message } = ctx.body as { message: string };
  return html(<p>{message}</p>);
}

export const wsMessage: Parameters<Elysia["ws"]>[1] = {
  message(ws, message) {
    ws.send(message);
  },
};
