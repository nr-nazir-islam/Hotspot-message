💬 Messenger Project (Termux Supported)

A simple real-time chat application built with Flask + Socket.IO.
This project can run easily in Termux (Android) or any Linux system.

---

🚀 Features

- 🔐 User Login System
- 💬 Real-time Messaging
- ⚡ Socket.IO Communication
- 🗄️ SQLite Database (chat.db)
- 🎨 Simple Chat UI

---

📦 Requirements

Make sure you have:

- Python (3.10+ recommended)
- Git
- Internet connection

---

📱 Termux Installation (Step-by-Step)

1️⃣ Install required packages

pkg update && pkg upgrade
pkg install python git

---

2️⃣ Clone the repository

git clone https://github.com/nr-nazir-islam/Hotspot-message.git
cd Hotspot-message

---

3️⃣ Install Python dependencies

pip install --upgrade pip
pip install -r requirements.txt

---

4️⃣ Run the server

python server.py

---

5️⃣ Open in browser

Go to:

http://127.0.0.1:5000

---

📁 Project Structure

MessengerProject/
├── server.py
├── database.py
├── chat.db
├── requirements.txt
├── static/
│   ├── chat.js
│   ├── chat.css
│   └── login.css
└── templates/
    ├── login.html
    └── chat.html

---

⚠️ Notes

- "chat.db" is auto-created if not present
- Works best on local network / same device
- For production, use proper hosting (Render / Railway)

---

🛠️ Troubleshooting

❌ Module not found?

pip install -r requirements.txt

❌ Port already in use?

Change port in "server.py"

---

🤝 Contributing

Feel free to fork and improve this project!

---

👨‍💻 Author

Nazir

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!
