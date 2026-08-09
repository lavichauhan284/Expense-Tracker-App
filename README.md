# 💰 Expense Tracker

A modern **Expense Tracker Web Application** built using the **MERN Stack** that helps users manage their income and expenses, track transactions, and understand their financial activity through an interactive dashboard.

## 📸 Screenshots

### 🏠 Dashboard

![Dashboard](./screenshots/dashboard1.png)

The dashboard provides an overview of:

* Total Income
* Total Expenses
* Current Balance / Savings
* Monthly financial summary
* Recent transactions
* Financial charts

### 💵 Income Management

![Income](./screenshots/income.png)

Users can:

* Add income
* View income transactions
* Delete income records
* Track income sources and amounts

### 💸 Expense Management

![Expenses](./screenshots/expenses.png)

Users can:

* Add expenses
* Categorize expenses
* View expense history
* Delete transactions
* Monitor spending patterns

### 📊 Financial Analytics

![Analytics](./screenshots/analytics.png)

Interactive charts help users understand their:

* Income trends
* Expense trends
* Monthly spending
* Savings

### 🔐 Authentication

![Login](./screenshots/login.png)

The application includes secure user authentication with:

* User Registration
* Login
* JWT Authentication
* Protected Routes

---

## 🚀 Features

* 🔐 User Authentication & Authorization
* 📊 Interactive Financial Dashboard
* 💰 Income Management
* 💸 Expense Management
* 🧾 Transaction History
* 📈 Income & Expense Charts
* 📅 Monthly Financial Tracking
* 🔍 Transaction Filtering
* 📱 Responsive UI
* 🗑️ Delete Transactions
* 🔒 Protected API Routes
* ⚡ Fast and Dynamic Interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Recharts
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST API

### Database

* MongoDB
* Mongoose

### Tools

* Git & GitHub
* VS Code
* Postman
* MongoDB Atlas

---

## 📂 Project Structure

```text
expense-tracker/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   ├── dashboard.png
│   ├── income.png
│   ├── expenses.png
│   ├── analytics.png
│   └── login.png
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
```

### 2. Navigate to the Project

```bash
cd expense-tracker
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 6. Start Backend

```bash
npm run dev
```

### 7. Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will run locally on the Vite development server.

---

## 🔑 Authentication Flow

The application uses **JWT-based authentication**.

```text
User
  ↓
Login / Register
  ↓
Backend Authentication
  ↓
JWT Token
  ↓
Protected Routes
  ↓
Dashboard
```

---

## 📊 Application Workflow

```text
Register / Login
       ↓
    Dashboard
       ↓
 ┌─────┴─────┐
 ↓           ↓
Income     Expenses
 ↓           ↓
Transactions
       ↓
Financial Analytics
       ↓
Track Savings
```

---

## 🎯 What I Learned

While developing this project, I gained practical experience in:

* Building a full-stack MERN application
* Creating REST APIs using Express.js
* Connecting React with backend APIs
* MongoDB database integration
* JWT authentication
* Protected routes
* CRUD operations
* State management in React
* Creating charts using Recharts
* API testing
* Git & GitHub workflow
* Debugging frontend and backend issues

---

## 🔮 Future Improvements

* 📱 Mobile application
* 🌙 Dark/Light mode
* 📧 Email notifications
* 📤 Export transactions to PDF/Excel
* 🤖 AI-based spending insights
* 💡 Smart budget recommendations
* 🔔 Expense reminders
* ☁️ Cloud deployment
* 📊 Advanced financial reports

---

## 👩‍💻 Author

**Lavi Chauhan**

B.Tech CSE (AI, ML & DL)

### Connect with Me

* GitHub: `https://github.com/your-username`
* LinkedIn: `https://linkedin.com/in/your-profile`

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
