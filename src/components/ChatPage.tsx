import { Html } from "./Html";

interface ChatPageProps {
  id: string;
}
export function ChatPage({ id }: ChatPageProps) {
  return (
    <Html>
      <main hx-ext="ws" ws-connect={`/${id}`}>
        <section id="messages" hx-swap-oob="beforeend" />
        <form ws-send="true">
          <input name="message" />
        </form>
      </main>
    </Html>
  );
}
