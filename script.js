function scrollToChat() {
  document.getElementById("chat").scrollIntoView({ behavior: "smooth" });
}

const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("You", message);
  userInput.value = "";

  // Simulated bot reply
  setTimeout(() => {
    appendMessage("Bot", generateReply(message));
  }, 500);
}

function appendMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(input) {
  input = input.toLowerCase();
  if (input.includes("hello")) return "Hi there! How can I help you?";
  if (input.includes("who")) return "I'm Dinesh's chatbot assistant 🤖";
  if (input.includes("project")) return "This chatbot was built using HTML, CSS, and JS!";
  return "I'm still learning — please try another question.";
}
