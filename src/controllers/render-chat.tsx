import { Context } from "elysia";
import { html } from "../services/response";
import { ChatPage } from "../components/ChatPage";

export function renderChat(ctx: Context) {
  const { id } = ctx.params as { id: string };
  return html(<ChatPage id={id} />);
}
