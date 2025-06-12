# 📌 Project Title: Task Manager Backend API

## 🗓 Duration
**2 Weeks**

## 🧰 Technology Stack
- **Backend:** Node.js, Express.js  
- **Authentication:** JWT, bcrypt  
- **Validation:** Joi 
- **Database:** MongoDB
- **Documentation:** Swagger  
- **Deployment:** Render 
- **Testing:** Postman  
- **Version Control:** Git + GitHub  

---

## 🎯 Project Goal
Building a secure, production-grade **Task Manager Backend API** that supports:
- User authentication
- Task CRUD operations
- Input validation
- Access control
- Clean API documentation

Deploying the backend service and showcasing it through a **walkthrough video** and **LinkedIn post**.

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

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Node.js & npm installed
- MongoDB Atlas or local MongoDB
- Postman (for testing)
- GitHub

### 🔑 Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 🚀 Install & Run

```bash
npm install       # Install dependencies
npm run dev       # Starts server with nodemon
# or
node server.js    # For production
```

---

## 🚦 API Endpoints Overview

| Method | Route            | Protected | Description                |
|--------|------------------|-----------|----------------------------|
| POST   | `/api/register`  | ❌        | Register a new user        |
| POST   | `/api/login`     | ❌        | User login (returns token) |
| GET    | `/api/tasks`     | ✅        | Get all tasks for user     |
| POST   | `/api/tasks`     | ✅        | Create a task              |
| PUT    | `/api/tasks/:id` | ✅        | Update a task              |
| DELETE | `/api/tasks/:id` | ✅        | Delete a task              |

> ✅ = Requires JWT token in headers

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

## 📚 API Documentation (Swagger)

Access interactive docs at:  
🔗 [`/api-docs`](https://zolvit-bootcamp-final-project.onrender.com/api-docs)

Uses `swagger.json` for documentation setup.

---

## 💡 Optional Bonus Features
- Task filtering by **date** or **status**
- **Pagination** and **sorting**
- **Email notifications** (via `nodemailer`)
- **Task tagging**

---

## 🌍 Deployment Link
Live Backend:  
🔗 [https://zolvit-bootcamp-final-project.onrender.com](https://zolvit-bootcamp-final-project.onrender.com)

---

## 🧪 Testing

You can test the API using Postman by importing your routes or manually using the Swagger UI.

---