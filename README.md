# Local Development Setup

## Prerequisites

1. Install Node.js (v18 or later)
   - Download from: https://nodejs.org/

2. Install Git
   - Download from: https://git-scm.com/downloads

## Setup Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
PORT=3000
DATABASE_URL=file:local.db
JWT_SECRET=your-secret-key-change-this-in-production
```

4. Initialize the database:
```bash
npm run server
```

5. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Development

The application runs on:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Project Structure

```
/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   ├── server/        # Backend server code
│   └── main.tsx       # Frontend entry point
├── public/            # Static assets
└── package.json       # Project configuration
```