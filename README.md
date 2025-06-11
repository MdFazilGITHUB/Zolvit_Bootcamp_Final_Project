# 📌 Project Title: Task Manager Backend API

## 🗓 Duration
**2 Weeks**

## 🧰 Technology Stack
- **Backend:** Node.js, Express.js  
- **Authentication:** JWT, bcrypt  
- **Validation:** Joi or express-validator  
- **Database:** Any (MongoDB, PostgreSQL, MySQL, SQLite, etc.) – student’s choice  
- **Documentation:** Swagger  
- **Deployment:** Render or similar  
- **Testing:** Postman  
- **Version Control:** Git + GitHub  

---

## 🎯 Project Goal
Build a secure, production-grade **Task Manager Backend API** that supports:
- User authentication
- Task CRUD operations
- Input validation
- Access control
- Clean API documentation

You’ll also deploy the backend service and showcase it through a **walkthrough video** and **LinkedIn post**.

---

## ✅ Key Requirements
- Full **CRUD support** for user-specific tasks
- **JWT-based** secure authentication
- **Input validation** and centralized **error handling**
- **Protected routes** with access control
- **Deployment** with environment variable configuration
- **Documented API** using Swagger
- **GitHub PRs** for every milestone
- **Walkthrough video** + LinkedIn post as final deliverable

---

## 📁 Suggested Folder Structure

```
task-manager-api/
├── config/          # DB connection and config
├── controllers/     # Logic for routes
├── middlewares/     # Auth and validation
├── models/          # Task and User schema
├── routes/          # Auth and task routers
├── utils/           # Helper functions
├── .env.example
├── swagger.json     # Or Swagger setup via code
├── README.md
└── index.js         # App entry point
```

---

## 📋 Key Guidelines
- Use **JWT** for secure access.
- Validate all user input to prevent bad data.
- Use appropriate **status codes** and consistent **JSON responses**.
- Document all routes using **Swagger** and test with **Postman**.
- Ensure each **PR includes a meaningful commit message**, not just “update”.

---

## 💡 Optional Bonus Features
- Task filtering by **date** or **status**
- **Pagination** and **sorting**
- **Email notifications** (via `nodemailer`)
- **Task tagging**

## ⚙️ Deployment Link
- [Render Link](https://zolvit-bootcamp-final-project.onrender.com)