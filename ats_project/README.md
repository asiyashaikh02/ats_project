# MERN Job App (backend)

1. Install dependencies

   npm install

2. Create .env file from .env.example and set MONGODB_URI

3. Start MongoDB locally (or provide a hosted URI)

4. Run server

   npm run dev   # nodemon for dev
   npm start     # production

API endpoints (base: /api)

- JD
  - POST /api/jds
  - GET /api/jds
  - GET /api/jds/:id
  - PUT /api/jds/:id
  - DELETE /api/jds/:id

- Applicants
  - POST /api/applicants
  - GET /api/applicants
  - GET /api/applicants/:id
  - PUT /api/applicants/:id
  - DELETE /api/applicants/:id
  - POST /api/applicants/shortlist/:jobId    # run shortlist for job
  - GET /api/applicants/status/:status?jobId=...   # list by status: Shortlisted/Rejected/Applied