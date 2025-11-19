# Udacity Deployment Project
Hosting a Full-Stack Application on AWS

This project deploys a simple full-stack application consisting of:
- A Node.js + Express backend deployed on AWS Elastic Beanstalk
- A static frontend hosted on AWS S3
- A PostgreSQL database hosted on AWS RDS

The project meets the Udacity rubric requirements including:
environment variables, infrastructure setup, CI preparation, backend deployment, frontend hosting, and full documentation with screenshots.

---

## 1. Project Structure

udacity-deployment-project  
│  
├── backend  
│   ├── package.json  
│   ├── tsconfig.json  
│   ├── src  
│   │   ├── index.ts  
│   │   ├── server.ts  
│   │   └── database.ts  
│   ├── .elasticbeanstalk/config.yml  
│   └── .ebextensions/01-node.config  
│  
├── frontend  
│   ├── package.json  
│   └── www/index.html  
│  
└── screenshots  

---

## 2. Running the App Locally

1. Clone the repository:
git clone https://github.com/reenad18gh/udacity-deployment-project

markdown
Copy code

2. Install backend dependencies:
cd backend
npm install
npm run dev

markdown
Copy code

3. Install frontend dependencies:
cd ../frontend
npm install
npm start

yaml
Copy code

The backend runs at:
http://localhost:8080

yaml
Copy code

The frontend runs at:
http://127.0.0.1:8080

yaml
Copy code

---

## 3. Environment Variables (Backend)

Create a `.env` file inside **backend**:

POSTGRES_HOST=YOUR_RDS_ENDPOINT
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=YOUR_PASSWORD
PORT=8080

yaml
Copy code

Do not commit the `.env` file to GitHub.

Set the same variables in:
- AWS Elastic Beanstalk → Configuration → Software
- RDS Security Group must allow EB inbound access

---

## 4. AWS Deployment

### Backend – Elastic Beanstalk
- Platform: Node.js 18
- Environment: Single Instance
- Linked to RDS security group
- Environment variables added manually
- Deployment done using:
eb init
eb use backend-env
eb deploy

sql
Copy code

Health check endpoint:
/health

yaml
Copy code

---

## 5. Frontend – AWS S3 Hosting

1. Build the frontend (static files inside `/www`)
2. Upload files to S3 bucket
3. Enable:
   - Static website hosting
   - Public access
4. Set index file to:
index.html

cpp
Copy code

Frontend calls backend API using:
https://YOUR-BACKEND-ENDPOINT/health

yaml
Copy code

---

## 6. Database – AWS RDS PostgreSQL

- Engine: PostgreSQL
- Public Access: No
- Connected only through Elastic Beanstalk security group
- Verified using test endpoint:
/db

yaml
Copy code

---

## 7. Screenshots (Required)

All screenshots are included inside `/screenshots`.

The folder contains the following:

- Elastic Beanstalk Dashboard  
- EB Environment Variables  
- RDS Dashboard  
- S3 Bucket Hosting Settings  
- Frontend Working Page  
- API Health Check  
- EB Deploy Logs  

---

## 8. Notes for Reviewers

- No secrets are committed to the repository  
- Environment variables configured manually in EB  
- RDS is connected through the backend `/db` test  
- Frontend successfully fetches data from the backend  
- Full deployment is active and functioning  

---

## 9. Author

Rinad Alghamdi  
Udacity Full-Stack JavaScript Nanodegree  
