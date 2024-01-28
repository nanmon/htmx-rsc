import { ReactNode } from "react";
import { renderToReadableStream } from "react-dom/server";

export async function html(elem: ReactNode) {
  const stream = await renderToReadableStream(elem);
  return new Response(stream, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
