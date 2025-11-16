Udacity Deployment Project – README

Prepared by Rinad Alghamdi

1. Project Overview

This project demonstrates deploying a full-stack application using:

AWS RDS (PostgreSQL)

AWS Elastic Beanstalk (Node.js Backend)

AWS S3 (Static Frontend Hosting)

The backend is connected to an RDS database, and the frontend communicates with the backend using the deployed API URL.

2. Architecture

The final architecture consists of:

Elastic Beanstalk Environment (Node.js backend)

PostgreSQL RDS instance (public access disabled except for EB)

S3 Bucket (Static website hosting for the frontend)

Add screenshot here:
/screenshots/architecture.png

3. Environment Variables

These values were stored in Elastic Beanstalk → Configuration → Software:

POSTGRES_HOST=xxxxxxxxxxxxxxxxx.rds.amazonaws.com
POSTGRES_PORT=5432
POSTGRES_DB=udacitydb
POSTGRES_USER=postgres
POSTGRES_PASSWORD=*************


Add screenshot of EB config page here

4. Backend Deployment (Elastic Beanstalk)

Backend folder zipped as:

backend.zip


Includes:

build/server.js

build/index.js

package.json

node_modules (installed on EB automatically)

Elastic Beanstalk created environment:

Environment name: udacity-backend-renad-env
Platform: Node.js 22 (64bit Amazon Linux 2023)
URL: http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com


Add EB screenshot here
/screenshots/backend-eb.png

5. Database (AWS RDS)

Created PostgreSQL instance:

Version: PostgreSQL 13

Class: db.t4g.micro

Storage: 20 GB

Public Access: Yes (Access restricted by SG)

Connected successfully from backend

Add screenshot of RDS here
/screenshots/rds.png

6. Frontend Deployment (AWS S3)

Frontend files uploaded:

index.html
app.js
config.js


Bucket hosting enabled:

Bucket: udacity-frontend-renad
URL: http://udacity-frontend-renad.s3-website.eu-north-1.amazonaws.com


Add screenshot of S3
/screenshots/s3.png

7. Connecting Frontend to Backend

Inside config.js:

export const API_BASE_URL = "http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com";


Inside app.js:

import { API_BASE_URL } from "./config.js";

async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    console.log(data);
}

getProducts();


Add screenshot of browser console showing data
/screenshots/frontend-console.png

8. Root Directory Structure
udacity-deployment-project
│── backend.zip
│── frontend/
│     ├── index.html
│     ├── app.js
│     ├── config.js
│── documents/
│── scripts/
│── README.md

9. How to Run Locally
Backend
npm install
npm run build
npm run dev

Frontend

Open directly:

frontend/index.html

10. Final URLs

Backend API:

http://udacity-backend-renad-env.eba-eknmiamu.eu-north-1.elasticbeanstalk.com


Frontend Website:

http://udacity-frontend-renad.s3-website.eu-north-1.amazonaws.com

11. Screenshots Required for Udacity Submission

Upload these inside /screenshots/ folder then reference them:

RDS Dashboard

Elastic Beanstalk Environment

EB Software Configuration (environment variables)

S3 Static Hosting Enabled + Bucket Files

Frontend Page Live

API Response visible in Browser Console

Project Folder Structure

12. Notes

No secrets included inside repository

All environment variables stored securely in AWS

App fully deployable using the zipped backend + S3 frontend
