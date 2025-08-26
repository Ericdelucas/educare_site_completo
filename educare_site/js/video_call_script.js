// Funcionalidade de levantar a mão
const raiseHandBtn = document.getElementById("raiseHandBtn");
let handRaised = false;

raiseHandBtn.addEventListener("click", () => {
    handRaised = !handRaised;
    if (handRaised) {
        raiseHandBtn.innerHTML = '<i class="fas fa-hand-paper"></i> Mão Levantada';
        raiseHandBtn.style.backgroundColor = "var(--secondary-orange)";
        alert("Você levantou a mão!");
    } else {
        raiseHandBtn.innerHTML = '<i class="fas fa-hand-paper"></i> Levantar a Mão';
        raiseHandBtn.style.backgroundColor = "var(--primary-purple)";
        alert("Você abaixou a mão.");
    }
});

// Funcionalidade de chat
const chatInput = document.getElementById("chatInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const chatMessages = document.getElementById("chatMessages");

sendMessageBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = '<span class="sender">Você:</span> ' + messageText;
        chatMessages.appendChild(messageElement);
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática para a última mensagem
    }
}

// Simulação de recebimento de mensagem (para demonstração)
setTimeout(() => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "received");
    messageElement.innerHTML = '<span class="sender">Aluno X:</span> Professor, pode repetir a última parte, por favor?';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}, 3000);

setTimeout(() => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "received");
    messageElement.innerHTML = '<span class="sender">Professor:</span> Claro! Vamos revisar o conceito de...';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}, 6000);

