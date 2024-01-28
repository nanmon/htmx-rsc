import { Elysia } from "elysia";
import { createChat } from "./controllers/create-chat";
import { renderChat } from "./controllers/render-chat";
import { sendMessage, wsMessage } from "./controllers/send-message";

const app = new Elysia()
  .get("/", createChat)
  .get("/:id", renderChat)
  .post("/:id", sendMessage)
  // @ts-ignore
  .ws("/:id", wsMessage)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
