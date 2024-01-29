import { Elysia, t } from "elysia";
import { html } from "../services/response";
import { ChatPage } from "../components/ChatPage";
import { renderToString } from "react-dom/server";
import { ChatMessages } from "../components/ChatMessages";

export const chatController = new Elysia()
  .get("/", () => {
    const chatId = Date.now().toString(36);
    return Response.redirect(`/${chatId}`);
  })
  .get("/:id", (ctx) => {
    const { id } = ctx.params;
    // @ts-expect-error
    return html(<ChatPage id={id} />);
  })
  .ws("/:id", {
    body: t.Object({
      message: t.String(),
      HEADERS: t.Any(),
    }),
    open(ws) {
      const { id } = ws.data.params as { id: string };
      ws.subscribe(id);
    },
    message(ws, { message }) {
      const { id } = ws.data.params;
      const res = renderToString(<ChatMessages message={message} />);
      ws.publish(id, res);
      ws.send(res);
    },
  });
