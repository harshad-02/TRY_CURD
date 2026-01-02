# 📝 Todo App (CRUD using Express & EJS)

A simple **Todo application** built using **Node.js, Express, and EJS**.  
This project demonstrates **CRUD operations** using a **simulated in-memory dataset** (no database).

---

## 🚀 Features

- ✅ View all todos
- ➕ Add a new todo
- ✏️ Update an existing todo (only if incomplete)
- ✔️ Mark todo as completed
- 📂 Separate views for:
  - Completed tasks
  - Incomplete tasks
- 🎨 Clean card-based UI using CSS
- 🧠 No database (data stored in memory)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Styling:** CSS (Flexbox layout)
- **Data Storage:** In-memory array (simulation)

---

## 📁 Project Structure

TRY_CURD/
│
├── views/
│ ├── index.ejs # Show todos (completed & incomplete)
│ ├── new.ejs # Add new todo
│ └── edit.ejs # Edit incomplete todo
│
├── public/
│ └── style.css # Styling
│
├── app.js # Main Express server
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/harshad-02/TRY_CURD.git
2️⃣ Go to project folder
bash
Copy code
cd TRY_CURD
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the server
bash
Copy code
node app.js
5️⃣ Open in browser
bash
Copy code
http://localhost:8080/todos
📌 Routes Overview
Method	Route	Description
GET	/todos	Show all todos
GET	/todos/new	Form to add new todo
POST	/todos	Create new todo
GET	/todos/:id/edit	Edit incomplete todo
POST	/todos/:id	Update todo
POST	/todos/:id/complete	Mark todo as completed

⚠️ Notes
❌ No database is used

🔄 Data resets when server restarts

📚 Ideal for learning Express, REST, and EJS

📸 UI Preview
Sticky-note style todo cards

Horizontal card layout

Completed tasks highlighted differently

👨‍💻 Author
Harshad Dudye

GitHub: https://github.com/harshad-02

LinkedIn: https://www.linkedin.com/in/harshad-dudye-827316327/

⭐ If you like this project
Don’t forget to star ⭐ the repository!

Happy Coding 🚀

yaml
Copy code

---

## ✅ Next (Optional Improvements)
If you want later, you can add:
- MongoDB / MySQL
- Authentication
- REST API only (no EJS)
- React frontend
- Drag & drop todos

If you want help with **any of these**, just tell me 👍
