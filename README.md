# Client Lead Management System (Mini CRM)

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
