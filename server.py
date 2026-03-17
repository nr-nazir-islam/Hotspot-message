from database import init_db, save_message, get_messages

from flask import Flask, render_template, request, redirect, url_for, session
from flask_socketio import SocketIO, join_room, leave_room, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'nrnazir'

socketio = SocketIO(app, async_mode="threading")

# init database
init_db()

# predefined rooms
rooms = ['General', 'Secret']


# ================= LOGIN =================
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        session["username"] = request.form["username"]
        session["room"] = request.form["room"]
        return redirect(url_for("chat"))

    return render_template("login.html", rooms=rooms)


# ================= CHAT PAGE =================
@app.route('/chat')
def chat():
    username = session.get("username")
    room = session.get("room")

    if not username:
        return redirect(url_for("login"))

    messages = get_messages(room)

    return render_template(
        "chat.html",
        username=username,
        room=room,
        messages=messages
    )


# ================= JOIN ROOM =================
@socketio.on("join")
def on_join(data):

    username = data["username"]
    room = data["room"]

    join_room(room)

    # ===== LOAD OLD MESSAGES =====
    messages = get_messages(room)

    for user, msg in messages:
        send({
            "username": user,
            "message": msg
        }, to=request.sid)

    # join notification
    send({
        "username": "System",
        "message": username + " joined the room"
    }, to=room)
# ================= SEND MESSAGE =================
@socketio.on("message")
def handle_message(data):

    username = data["username"]
    room = data["room"]
    msg = data["message"]

    # save DB
    save_message(username, room, msg)

    send({
        "username": username,
        "message": msg
    }, to=room)

# ================= RUN SERVER =================
if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
