import { PropsWithChildren } from "react";

export function Html({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.10" />
        <script src="https://unpkg.com/htmx.org/dist/ext/ws.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
