# TeachApp-
# 🧠 Flashcard App

A simple full-stack application that allows users to create, view, and delete flashcards. Built using **Flask**, **MongoDB**, and **React** as a proof-of-concept for mastering the tech stack during onboarding.

This app demonstrates RESTful API design, frontend-backend integration, MongoDB operations, and interactive UI components in React.

---

## 🚀 Tech Stack

**Frontend:** React (Vite), JavaScript  
**Backend:** Python (Flask, Flask-CORS)  
**Database:** MongoDB (Atlas)  
**HTTP Client:** Axios

---

## 📁 Project Structure

```
TeachApp-/
├── Server/                  # Flask backend
│   ├── app.py               # Main API app
│   └── requirements.txt     # Backend dependencies
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── FlashcardForm.jsx
│   │   │   ├── FlashcardList.jsx
│   │   │   └── Flashcard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js
│
└── README.md
```

---

## ✅ Features

### Backend (Flask)
- `GET /api/cards`: Get all flashcards
- `POST /api/cards`: Add a new flashcard
- `GET /api/cards/<id>`: Get a single card by ID
- `DELETE /api/cards/<id>`: Delete a card

### Frontend (React)
- Form to add flashcards
- Clickable flashcards (flip between question and answer)
- Delete button per flashcard
- Royal blue themed interface

---

## ⚙️ Prerequisites

- Python 3.9+
- Node.js & npm
- MongoDB Atlas account (or local MongoDB)

---

## 🌍 MongoDB Atlas Setup (Create Free Cluster & Database)

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up for a free account.
2. Once signed in, click **"Build a Database"**.
3. Choose the **Free Shared Cluster** option (it should be marked as free).
4. Choose a cloud provider (AWS, GCP, or Azure) and region close to you, then click **Create**.
5. After the cluster is ready (may take 1–2 minutes), create a **Database User**:
   - Go to **Database Access**
   - Add a new user with a username and password.
   - Make sure to copy the password somewhere safe.
6. Allow your computer to access the cluster:
   - Go to **Network Access**
   - Add your IP Address (or allow access from anywhere `0.0.0.0/0` for dev purposes).
7. Create a new **Database**:
   - Go to **Clusters → Browse Collections**
   - Click **Add My Own Data**
   - Enter a database name (e.g., `flashcards_db`)
   - Enter a collection name (e.g., `cards`)
   - Click **Create**
8. Connect your app:
   - Click **Connect** → "Connect your application"
   - Copy the connection string and replace the username/password in it.
   - Use it in your Python app like:

```python
from pymongo import MongoClient
client = MongoClient("mongodb+srv://<username>:<password>@clustername.mongodb.net/")
db = client.flashcards_db
```

> ⚠️ Do **NOT** commit your real password or full URI to GitHub. Use environment variables if needed.

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR-USERNAME/flashcard-app.git
cd flashcard-app
```

### 2. Backend Setup

```bash
cd Server
python -m venv .venv
source .venv/bin/activate   # or `.venv\Scripts\activate` on Windows
pip install -r requirements.txt
python app.py
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

> Make sure Flask is running on `localhost:5000` and React on `localhost:5173`.

---

## 🌐 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/cards`          | Get all flashcards       |
| GET    | `/api/cards/:id`      | Get a single flashcard   |
| POST   | `/api/cards`          | Create a new flashcard   |
| DELETE | `/api/cards/:id`      | Delete a flashcard       |

---

## 🧠 Lessons Demonstrated

- Building and routing a REST API with Flask
- Connecting Flask to MongoDB (Atlas)
- Using React hooks (`useState`, `useEffect`)
- Axios requests from React to Flask
- CORS handling
- Component-based design
- Dynamic UI with click-to-flip flashcards

---


## 👩🏽‍💻 Author

Avionte Williams  

---

## 📄 License

This project is open-source and available under the MIT License.
