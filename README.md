# Job Candidates Application (MERN Stack)

## 📌 Description
This is a MERN stack application for managing job candidate information.
The backend is built using Node.js, Express, and MongoDB, and the frontend is built using React.

---

## 🛠 Tech Stack

**Frontend:**
- React/npm create vite@latest
- Axios
- HTML
- Tawilwindcss

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- install(dotenv, body-parsar, express, mongoose,nodemon)

- --
**## 📂 Project Structure**
backend/
│
├── server.js
├── package.json
├── .env
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Role.js
│   ├── Candidate.js
│   ├── Interview.js
│   ├── CandidateStatus.js
│   ├── Appointment.js
│   └── Upload.js
│
├── controllers/
│   ├── authController.js
│   ├── candidateController.js
│   ├── interviewController.js
│   ├── statusController.js
│   ├── appointmentController.js
│   └── uploadController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── candidateRoutes.js
│   ├── interviewRoutes.js
│   ├── statusRoutes.js
│   ├── appointmentRoutes.js
│   └── uploadRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── errorMiddleware.js
│
├── utils/
│   ├── excelParser.js
│   ├── fileDownloader.js
│   └── validators.js
│
├── uploads/
│   └── excel/
│
└── logs/
    └── activity.log
**Frontend
frontend/
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
│
├── public/
│   └── index.html
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│
│   ├── api/
│   │   ├── axiosInstance.js
│   │   ├── authApi.js
│   │   ├── candidateApi.js
│   │   └── interviewApi.js
│
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── candidates/
│   │   │   ├── CandidateTable.jsx
│   │   │   ├── CandidateForm.jsx
│   │   │   └── CandidateDetails.jsx
│   │   │
│   │   ├── interviews/
│   │   │   ├── ScheduleInterview.jsx
│   │   │   ├── UpcomingInterviews.jsx
│   │   │   └── CompletedInterviews.jsx
│   │   │
│   │   └── auth/
│   │       ├── Login.jsx
│   │       └── ProtectedRoute.jsx
│
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Candidates.jsx
│   │   ├── Interviews.jsx
│   │   ├── HiredCandidates.jsx
│   │   └── Profile.jsx
│
│   ├── context/
│   │   └── AuthContext.jsx
│
│   ├── hooks/
│   │   └── useAuth.js
│
│   ├── utils/
│   │   └── constants.js
│
│   └── styles/
│       └── index.css
