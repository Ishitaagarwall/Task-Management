# **Task Manager Web Application**

**Introduction**

The Task Manager Web Application is a full-stack web application that allows users to register, log in, and manage their tasks efficiently. The application provides authentication and authorization mechanisms, ensuring secure access to user-specific tasks. It follows the CRUD (Create, Read, Update, Delete) operations for task management.

**Features**

User Authentication: Secure registration and login using JWT.

Task Management: Users can add, view, update, and delete tasks.

Responsive UI: Built using modern frontend technologies.

Secure API: Implements security measures like password hashing and authentication middleware.

Database Integration: Uses MongoDB/PostgreSQL to store user and task data.

**Technologies Used**

**Backend:**

Node.js

Express.js

MongoDB (Mongoose) or PostgreSQL

JWT for authentication

Bcrypt.js for password hashing

**Frontend:**

React.js (or another frontend framework like Vue.js/Angular)

React Router for navigation

Axios for API calls

Tailwind CSS / Material-UI (optional for styling)

# **Backend Setup**

**Clone the repository**
git clone https://github.com/Ishitaagarwall/Task-management.git
cd task-manager/backend

**Install dependencies**
npm install

**Create a .env file and configure environment variables**
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

**Start the backend server**
npm run dev

# **Frontend Setup**

cd ../frontend

**Install dependencies**
npm install

**Start the frontend server**
npm start
