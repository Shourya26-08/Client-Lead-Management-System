# Client Lead Management System

A full-stack Mini CRM for capturing, organizing, and following up on website contact-form leads.

A full-stack mini CRM for managing leads generated from website contact forms. Built with React, Node.js, Express and MongoDB.

## Features
- Secure admin login with JWT
- Lead CRUD operations
- Lead status workflow: New, Contacted, Converted
- Search and status filtering
- Notes and follow-up dates
- Dashboard statistics
- Responsive interface
- RESTful API

## Tech Stack
**Frontend:** React + Vite + CSS  
**Backend:** Node.js + Express  
**Database:** MongoDB + Mongoose  
**Authentication:** JWT + bcryptjs

## Run locally
1. Install Node.js and MongoDB.
2. Copy `server/.env.example` to `server/.env` and configure MongoDB, JWT secret and admin credentials.
3. Copy `client/.env.example` to `client/.env` if your API URL differs from the default.
4. From the root:

```bash
npm install
npm run install-all
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:5000/api

## Default admin setup
Use the values configured in `server/.env` (`ADMIN_EMAIL` and `ADMIN_PASSWORD`). Never commit `.env` files.

## API endpoints
- `POST /api/auth/login`
- `GET /api/leads`
- `GET /api/leads/stats`
- `GET /api/leads/:id`
- `POST /api/leads`
- `PATCH /api/leads/:id`
- `DELETE /api/leads/:id`
- `POST /api/leads/:id/notes`

## Deployment
Deploy the server to a Node.js host and the client to a static host. Set `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `CLIENT_URL`, and `VITE_API_URL` in the respective deployment environments.


## Architecture

```text
React + Vite → Express.js REST API → MongoDB/Mongoose
                         ↓
                  JWT authentication
```

## Core Features
- JWT-protected admin login
- Lead CRUD operations
- Lead lifecycle: New → Contacted → Converted
- Search and status filtering
- Notes and follow-up tracking
- Dashboard statistics
- Responsive React interface
- Environment-based configuration

## Local Setup

```bash
git clone https://github.com/Shourya26-08/Client-Lead-Management-System.git
cd Client-Lead-Management-System
npm install
npm run install-all
npm run dev
```

Configure `server/.env` with `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `CLIENT_URL` before starting the application.

## API

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/leads` | List leads |
| GET | `/api/leads/stats` | Dashboard statistics |
| GET | `/api/leads/:id` | Get a lead |
| POST | `/api/leads` | Create a lead |
| PATCH | `/api/leads/:id` | Update a lead |
| DELETE | `/api/leads/:id` | Delete a lead |
| POST | `/api/leads/:id/notes` | Add a note |

## Security

JWT-protected routes, bcrypt password hashing, environment-based secrets, and configurable CORS are used. Never commit `.env` files.

## Resume Description

**Client Lead Management System** — Developed a full-stack CRM using React.js, Node.js, Express.js, MongoDB, and REST APIs to manage website contact-form leads. Implemented authenticated lead CRUD operations, status workflows, notes, follow-up tracking, dashboard statistics, and structured frontend-backend communication.
