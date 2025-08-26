# 📌 API-Driven Mini Web App

## 🚀 Project Overview
A full-stack mini web application built with **MERN (MongoDB, Express, React, Node.js)**.  
The app allows users to:
1. Enter a keyword in a search form.  
2. Fetch related GitHub repositories using the **GitHub REST API**.  
3. Store the results in **MongoDB**.  
4. Display the stored results on a styled dashboard.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TailwindCSS (or plain CSS)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or Atlas)  
- **API Used:** GitHub Search API  

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/api-driven-app.git
cd api-driven-app
````

### 2. Backend Setup
```bash
  cd backend
  npm install
```
Create a .env file inside backend/:
```bash
  PORT=5000
  MONGODB_URI='mongodb://127.0.0.1:27017/_your_database_name'
  GITHUB_TOKEN=your_github_token_here
```
Start the backend:
```bash
  npm run dev
```

### 3. Frontend Setup
```bash
  cd frontend
  npm install
  npm run dev
```

### 4. Usage
- Open the frontend (default: http://localhost:5173/).
- Enter a keyword in the search bar.
- Results will be fetched from GitHub, saved in MongoDB, and displayed on the dashboard.

---
