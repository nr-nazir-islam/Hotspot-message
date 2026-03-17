import sqlite3

DB_NAME = "chat.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    c.execute("""
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        room TEXT,
        message TEXT
    )
    """)

    conn.commit()
    conn.close()


def save_message(username, room, message):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    c.execute(
        "INSERT INTO messages (username, room, message) VALUES (?, ?, ?)",
        (username, room, message)
    )

    conn.commit()
    conn.close()


def get_messages(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    c.execute(
        "SELECT username, message FROM messages WHERE room=?",
        (room,)
    )

    data = c.fetchall()
    conn.close()
    return data
