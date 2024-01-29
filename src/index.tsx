import { chatController } from "./controllers/chat.controller";

const app = chatController.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
