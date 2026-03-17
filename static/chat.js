// ================= Chat.js =================

const socket = io();

const username = "{{ username }}";
const room = "{{ room }}";

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");

// Generate random color for user avatar
function getAvatarColor(name) {
    let hash = 0;
    for(let i = 0; i < name.length; i++){
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 60%, 60%)`;
    return color;
}

// ===== JOIN ROOM =====
socket.emit("join", { username: username, room: room });

// ===== RECEIVE MESSAGE =====
socket.on("message", function(data){

    // If message delete notification
    if(data.delete_id){
        const msgDiv = document.getElementById(`msg-${data.delete_id}`);
        if(msgDiv) msgDiv.remove();
        return;
    }

    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + (data.username === username ? "sent" : "received");
    messageDiv.id = `msg-${data.id || Date.now()}`;

    // Avatar
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerText = data.username.charAt(0).toUpperCase();
    avatar.style.backgroundColor = getAvatarColor(data.username);

    // Text
    const text = document.createElement("div");
    text.className = "msg-text";
    text.innerHTML = `<b>${data.username}</b><br>${data.message}`;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(text);

    // Add Delete button for own messages
    if(data.username === username && data.username !== "System"){
        const actions = document.createElement("div");
        actions.className = "msg-actions";

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteMessage(messageDiv.id);
        actions.appendChild(delBtn);

        messageDiv.appendChild(actions);
    }

    messagesDiv.appendChild(messageDiv);
    scrollBottom();
});

// ===== SEND MESSAGE =====
function sendMessage(){
    const msg = input.value.trim();
    if(msg === "") return;

    const msgData = {
        id: Date.now(),
        username: username,
        message: msg,
        room: room
    };

    socket.emit("message", msgData);
    input.value = "";
}

// ===== DELETE MESSAGE =====
function deleteMessage(id){
    const msgDiv = document.getElementById(id);
    if(msgDiv){
        msgDiv.remove();
        socket.emit("delete_message", { id: id.replace("msg-",""), room: room });
    }
}

// ===== SCROLL TO BOTTOM =====
function scrollBottom(){
    messagesDiv.scrollTo({
        top: messagesDiv.scrollHeight,
        behavior: "smooth"
    });
}

// Enter key to send
input.addEventListener("keydown", function(e){
    if(e.key === "Enter") sendMessage();
});
