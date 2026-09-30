# Job Application Tracker

A full-stack web application to track job applications during your job search.

## Live Demo
[job-tracker-ptxw.onrender.com](https://job-tracker-ptxw.onrender.com)

> Hosted on a free tier, so the first load after a period of inactivity can take up to a minute while the server wakes up.

## About
I built this project to learn full-stack web development while solving a real problem — keeping track of job applications. It helped me understand how a frontend communicates with a backend API, how data is stored in a cloud database, and how to deploy a Node.js application to production.

## Features
- Add job applications with company name, role, status, and notes
- Update application status (Applied, Interview, Offered, Rejected)
- Delete applications
- Real-time stats dashboard showing total, interviews, offers, and rejections

## Tech Stack
| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Frontend | HTML5, CSS3, JavaScript |
| Deployment | Render (free tier) |
| Version Control | Git, GitHub |

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/jobs | Fetch all job applications |
| POST | /api/jobs | Add a new application |
| PATCH | /api/jobs/:id | Update application status |
| DELETE | /api/jobs/:id | Delete an application |

## Project Structure
```
job-tracker/
├── public/              # Frontend files served by Express
│   ├── index.html       # Main HTML page
│   ├── style.css        # All styling
│   └── app.js           # Frontend JS (API calls, DOM updates)
├── routes/              # Backend API routes
│   └── jobs.js          # CRUD endpoints + Mongoose schema
├── .env                 # Local secret config (gitignored, never committed)
├── .gitignore           # Ignores node_modules and .env
├── server.js            # App entry point (Express + MongoDB setup)
└── package.json         # Project dependencies
```

## Run Locally
1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/sahilramteke7268/job-tracker.git
   cd job-tracker
   npm install
   ```
2. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas), add a database user, and allow your IP under Network Access.
3. Create a `.env` file in the project root:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/jobtracker
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open http://localhost:5000

## Environment Variables
| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string, including the database name |
| `PORT` | Server port (set automatically by Render; defaults to 5000 locally) |

## Deployment
Deployed on **Render** as a free web service, connected to a free **MongoDB Atlas** cluster.

- Build command: `npm install`, start command: `node server.js`
- `MONGO_URI` is set in Render's environment settings and is never committed to the repository
- Express serves the frontend from `public/`, so one service runs the whole app
- Auto-deploys on every push to the `main` branch
