# Job Application Tracker

A full-stack web application to track job applications during your job search.

## Live Demo
[job-tracker-production-18dc.up.railway.app](https://job-tracker-production-18dc.up.railway.app)

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
| Deployment | Railway |
| Version Control | Git, GitHub |

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/jobs | Fetch all job applications |
| POST | /api/jobs | Add a new application |
| PATCH | /api/jobs/:id | Update application status |
| DELETE | /api/jobs/:id | Delete an application |

## Project Structure
job-tracker/
├── public/
│   ├── index.html     # Frontend structure
│   ├── style.css      # Styling
│   └── app.js         # Frontend logic (Fetch API)
├── routes/
│   └── jobs.js        # API routes and Mongoose schema
├── .env               # Environment variables (not committed)
├── server.js          # Express server entry point
└── package.json
