💬 Messenger Project (Termux + offline hotspot Supported)

A simple real-time chat application built with Flask + Socket.IO.
This project can run easily in Termux (Android) or any Linux system.

---

🚀 Features

- 🔐 User Login System
- 💬 Real-time Messaging
- ⚡ Socket.IO Communication
- 🗄️ SQLite Database (chat.db)
- 🎨 Simple Chat UI
- offline supported

---

📦 Requirements

Make sure you have:

- Python (3.10+ recommended)
- Git
- Internet connection
- or hotspot connected to the other device offline supported
---
### Full code for termux installation 
```bash
pkg update -y && pkg upgrade -y
pkg install -y python git
git clone https://github.com/nr-nazir-islam/Hotspot-message.git
cd Hotspot-message
pip install --upgrade pip
pip install -r requirements.txt
python server.py
```
---
### chack ip
```bash
ip a
# brouser search http://YOUR_IP:5000
```
---
### Full code for kali installation 
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip git
git clone https://github.com/nr-nazir-islam/Hotspot-message.git
cd Hotspot-message
pip3 install --upgrade pip
pip3 install -r requirements.txt
python3 server.py
```
---
### Chack ip
```bash
ip a
# brouser search http://YOUR_IP:5000
```
---
### Full code for Ubuntu installation
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip git
git clone https://github.com/nr-nazir-islam/Hotspot-message.git
cd Hotspot-message
pip3 install --upgrade pip
pip3 install -r requirements.txt
python3 server.py
```
---
### chack ip
```bash
ip a
# brouser search http://YOUR_IP:5000
```
---

📱 Termux Installation (Step-by-Step-method)
---
1️⃣ Install required packages

pkg update && pkg upgrade
---
pkg install python git

---

2️⃣ Clone the repository

git clone https://github.com/nr-nazir-islam/Hotspot-message.git
---
cd Hotspot-message
---

3️⃣ Install Python dependencies

pip install --upgrade pip
---
pip install -r r
equirements.txt

---

4️⃣ Run the server

python server.py

---

5️⃣ Open in browser

Go to:
http://YOUR_IP:5000

---


⚠️ Notes

- "chat.db" is automatic-created if not present
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


## 📡 Using Offline Hotspot (Local Network)

If you want to use MessengerProject **without internet**, via your phone's hotspot:

### 1️⃣ Turn on your hotspot
- On Android: Settings → Network → Hotspot → Turn On  
- Set a hotspot name & password

### 2️⃣ Connect your device
- Make sure your Termux device (or other device) is connected to the hotspot
---

### 3️⃣ Find your local IP  
```bash
ip addr show wlan0
# Look for "inet" under wlan0 (e.g., 192.168.43.101)
```
---
### How to run it
-first
-run command $ ip a
-example your ip is:10.30.17.89
-run $ python3 server.py
-search web http:your-ip:5000
-example
-web search:http://10.30.17.89:5000
-with other device
---
👨‍💻 Author

N R Nazir

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!
