interface ChatMessagesProp {
  message?: string;
}
export function ChatMessages({ message }: ChatMessagesProp) {
  return (
    <section id="messages" hx-swap-oob="beforeend">
      {message && <p>{message}</p>}
    </section>
  );
}
