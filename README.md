# Client Lead Management System

A full-stack mini CRM for capturing, organizing, and following up on website contact-form leads.

## Features

- JWT-authenticated admin login
- Create, view, update, and delete leads
- Lead lifecycle: **New → Contacted → Converted**
- Search by name, email, or source
- Filter leads by status
- Add notes and follow-up dates
- Dashboard statistics
- Responsive React UI
- REST API with MongoDB persistence
- Health-check endpoint for deployment monitoring
- Environment-based configuration and CORS

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| API | REST |

## Architecture

```text
React + Vite
     │
     │ REST / JSON
     ▼
Express.js API
     │
     ├── JWT Authentication
     ├── Lead CRUD
     ├── Status Workflow
     ├── Notes / Follow-ups
     │
     ▼
MongoDB + Mongoose
```

## Project Structure

```text
Client-Lead-Management-System/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── package.json
└── README.md
```

## Run Locally

### 1. Requirements

- Node.js 18+
- MongoDB

### 2. Configure environment variables

Copy the example environment files:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Configure the server with:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change_me
CLIENT_URL=http://localhost:5173
```

The client can use:

```env
VITE_API_URL=http://localhost:5000/api
```

Never commit real credentials or `.env` files.

### 3. Install and run

From the project root:

```bash
npm install
npm run install-all
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:5000/api`

Health check: `http://localhost:5000/api/health`

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/leads` | List/search/filter leads |
| GET | `/api/leads/stats` | Dashboard statistics |
| GET | `/api/leads/:id` | Get a lead |
| POST | `/api/leads` | Create a lead |
| PATCH | `/api/leads/:id` | Update a lead |
| DELETE | `/api/leads/:id` | Delete a lead |
| POST | `/api/leads/:id/notes` | Add a note |
| GET | `/api/health` | API health check |

## Security

- JWT-protected lead routes
- bcrypt password hashing
- Environment-based secrets
- Configurable CORS
- No credentials committed to source control

## Resume-Ready Description

**Client Lead Management System** — Developed a full-stack CRM using React.js, Node.js, Express.js, MongoDB, and REST APIs to manage website contact-form leads. Implemented authenticated lead CRUD operations, status workflows, notes, follow-up tracking, dashboard statistics, search/filtering, and structured frontend-backend communication.

## Author

**Shourya Bhatnagar** — GitHub: [Shourya26-08](https://github.com/Shourya26-08)
