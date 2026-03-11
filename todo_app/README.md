# Full-Stack Todo Application

A minimal, secure, and fully functional Full-Stack Todo Application built with **React**, **Vite**, **Express**, **Node.js**, and **MySQL**. It features JWT-based user authentication and CRUD operations for tasks.

## 🚀 Features

- **User Authentication**: Secure registration and login using JWT and bcrypt.
- **Task Management**: Create, Read, Update, and Delete (CRUD) your own personal todos.
- **Pagination**: Navigate through your tasks effortlessly.
- **Responsive UI**: Clean and minimal frontend using Vite and React.
- **RESTful API**: Well-structured Express backend API.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), React Router DOM, Axios
- **Backend**: Node.js, Express, cors
- **Database**: MySQL2
- **Security**: jsonwebtoken (JWT), bcryptjs, dotenv

## 💻 Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed (v16.x or later)
- MySQL Server installed and running

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/siddeshwardm/FullStack-projects.git
cd fullstack-projects/todo_app
```

### 2. Install Dependencies
Since this repository holds both frontend and backend dependencies together, install them simply by running:
```bash
npm install
```

### 3. Database Setup
Log into your MySQL server:
```bash
mysql -u root -p
```
Run the following SQL commands to create the database and tables:

```sql
CREATE DATABASE IF NOT EXISTS todo_app;
USE todo_app;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 4. Environment Variables
Create a `.env` file in the **root** of the `todo_app` directory and add the following configurations (make sure to update the credentials according to your local MySQL setup):

```env
PORT=5001

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YourSecurePassword
DB_NAME=todo_app

JWT_SECRET=your_super_secret_jwt_key
```

### 5. Running the Application

You need two terminal windows to run both the frontend and backend concurrently.

**Terminal 1: Start the Backend Server**
```bash
node src/server.js
```
*The server will start on `http://localhost:5001`.*

**Terminal 2: Start the Frontend (Vite)**
```bash
npm run dev
```
*The React app will be available at `http://localhost:5173`.*

---
Happy coding! 🎉
