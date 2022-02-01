import React from "react";
import { messages, contacts } from "../data";
import ContactList from "./ContactList";
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts} />
      <main>
        <MessageList messages={messages} />
        <MessageForm />
      </main>
    </div>
  );
}

export default App;
