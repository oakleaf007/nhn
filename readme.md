## NHN (backend)

it is a backend service for NHN - a single vendor application

---

### Setup

- ``npm install``  
- create a **.env** file  
Env variables are:  
PORT  
BREVO_API  
SENDER_EMAIL  
SENDER_NAME  
JWT_SECRET  
DATABASE_URL  
- ``npm start`` or ``nodemon server.js``
### Tech stack
- Node.js
- express.js
- postgreSQL
---

### Documentation

- API endpoints  
``http://localhost:5000/api/v1/reqotp`` : to request OTP during signup  
``http://localhost:5000/api/v1/verifyotp`` : to verify OTP during signup  
``http://localhost:5000/api/v1/signup`` : accepts signupToken and password
``http://localhost:5000/api/v1/signin`` : accepts email and password
---


