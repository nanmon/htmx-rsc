import { Context } from "elysia";

export function createChat(ctx: Context) {
  const chatId = Date.now().toString(36);
  return Response.redirect(`/${chatId}`);
}
