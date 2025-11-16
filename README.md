# Udacity Deployment Project  
Prepared by **Rinad Alghamdi**

---

## 1. Project Overview

This project demonstrates deploying a full-stack application using:

- AWS RDS (PostgreSQL)
- AWS Elastic Beanstalk (Node.js backend)
- AWS S3 (static frontend hosting)

The backend connects to an RDS database, and the frontend communicates with the backend using the deployed API URL.

---

## 2. Architecture

The final architecture includes:

- Elastic Beanstalk environment for the backend  
- PostgreSQL RDS instance  
- S3 bucket for static frontend hosting  

**Architecture Screenshot:**  
`/screenshots/architecture.png`

---

## 3. Environment Variables

Configured in **Elastic Beanstalk → Configuration → Software**:

POSTGRES_HOST=xxxxxxxxxxxx.rds.amazonaws.com
POSTGRES_PORT=5432
POSTGRES_DB=udacitydb
POSTGRES_USER=postgres
POSTGRES_PASSWORD=********

yaml
Copy code

**EB Config Screenshot:**  
`/screenshots/eb-config.png`

---

## 4. Backend Deployment (Elastic Beanstalk)

Backend deployed as:

backend.zip

yaml
Copy code

Environment details:

- **Environment name:** udacity-backend-renad-env  
- **Platform:** Node.js 22 on Amazon Linux 2023  
- **API URL:**  
  `http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com`

**EB Dashboard Screenshot:**  
`/screenshots/eb-dashboard.png`

---

## 5. Database (AWS RDS)

RDS PostgreSQL instance configuration:

- Engine: PostgreSQL 13  
- Instance class: db.t4g.micro  
- Storage: 20 GB  
- Public access: Enabled (restricted by security group)

**RDS Screenshot:**  
`/screenshots/rds.png`

---

## 6. Frontend Deployment (AWS S3)

Frontend files uploaded:

index.html
app.js
config.js

markdown
Copy code

Static website hosting enabled.

**Frontend URL:**
http://udacity-frontend-renad.s3-website.eu-north-1.amazonaws.com

yaml
Copy code

**S3 Screenshot:**  
`/screenshots/s3.png`

---

## 7. Connecting Frontend to Backend

### config.js
```js
export const API_BASE_URL = "http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com";
app.js
js
Copy code
import { API_BASE_URL } from "./config.js";

async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    console.log(data);
}

getProducts();
Browser Console Screenshot:
/screenshots/frontend-console.png

8. Root Directory Structure
arduino
Copy code
udacity-deployment-project
│── backend.zip
│── frontend
│    ├── index.html
│    ├── app.js
│    ├── config.js
│── scripts
│── documents
│── README.md
9. Running Locally
Backend
bash
Copy code
npm install
npm run build
npm run dev
Frontend
Open directly:

bash
Copy code
frontend/index.html
10. Final Deployment URLs
Backend API
arduino
Copy code
http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com
Frontend Website
arduino
Copy code
http://udacity-frontend-renad.s3-website.eu-north-1.amazonaws.com
11. Required Screenshots (Udacity Submission)
Place all in /screenshots/ folder:

RDS dashboard

Elastic Beanstalk environment

EB software configuration (environment variables)

S3 bucket + hosting settings

Live frontend website

Browser console showing API response

Project folder structure

12. Notes
No secrets are committed to GitHub

All environment variables stored securely in Elastic Beanstalk

Deployment fully automated using AWS services

Project is fully deployed and ready for Udacity submission.


