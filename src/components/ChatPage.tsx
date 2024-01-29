import { ChatMessages } from "./ChatMessages";
import { Html } from "./Html";

async function getInitialMessage() {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Send a message to the chat"), 1000);
  });
}

interface ChatPageProps {
  id: string;
}
export async function ChatPage({ id }: ChatPageProps) {
  const message = await getInitialMessage();
  return (
    <Html>
      <main hx-ext="ws" ws-connect={`/${id}`}>
        <ChatMessages message={message} />
        <form ws-send="true">
          <input name="message" />
        </form>
      </main>
    </Html>
  );
}
