# 🚀 Node Application

---

<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />

</p>

---

A modern **Node.js + Express.js** web application featuring a responsive landing page, dark/light theme toggle, mobile navigation menu, interactive UI, and Docker support.

---

## 📂 Project Structure

```text
node-app/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── images/
│   │   └── node-logo.svg
│   │
│   └── js/
│       └── app.js
│
├── views/
│   └── index.html
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── LICENSE
└── README.md
```

---

## ⚙️ Pre-requisites

Before running the application, install:

- [Node.js 24+](https://nodejs.org/en/download)
- npm
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS)

  or

  [Docker Engine](https://docs.docker.com/engine/install/) (Linux)
  
Verify installation.

```bash
node -v
```

```bash
npm -v
```

```bash
docker --version
```

---

## 📥 Step 1 — Clone Repository

Clone the repository.

```bash
git clone https://github.com/Syed-Dadapeer226/node-app.git
```

Go inside the project.

```bash
cd node-app
```

---

## 📦 Step 2 — Install Dependencies

Install all required packages.

```bash
npm install
```

This installs:

- Express.js
- Nodemon (development)

---

## ▶️ Step 3 — Start the Application

Run the application.

```bash
npm start
```

Expected output:

```text
🚀 Node App running on port 3000
```

Open your browser.

```
http://localhost:3000
```

---

## 🔄 Step 4 — Development Mode

Run using Nodemon.

```bash
npm run dev
```

Nodemon automatically restarts the server whenever files are modified.

---

## 🖥️ Step 5 — Application Flow

When the application starts:

1. Express server initializes.
2. Static files are served from the **public** folder.
3. Visiting `/` returns **views/index.html**.
4. CSS styles are loaded.
5. JavaScript initializes:
   - Theme Toggle
   - Mobile Menu
   - Smooth Scroll
6. User interface becomes interactive.

Flow Diagram

```text
Browser
    │
    ▼
GET /
    │
    ▼
server.js
    │
    ▼
Express Server
    │
    ├──────────────► public/
    │                  │
    │                  ├── css
    │                  ├── images
    │                  └── js
    │
    ▼
views/index.html
    │
    ▼
Rendered Web Page
```

---

## 📦 Dependencies

Production dependency:

| Package | Purpose |
|----------|----------|
| Express | Web server |

Development dependency:

| Package | Purpose |
|----------|----------|
| Nodemon | Auto-restart during development |

---

## 🚀 Docker

The project includes a production-ready multi-stage Dockerfile.

### Step-1 - Build Docker Image

```bash
docker build -t node-app .
```

---

### Step-2 - Run Docker Container

```bash
docker run -d --name node-container -p 3000:3000 node-app
```

### Step-3 - Open Browser

```
http://localhost:3000
```
---

### Stop Container

```bash
docker stop node-app
```

---

### Remove Container

```bash
docker rm node-app
```

---

### Remove Image

```bash
docker rmi node-app
```

---

## # Default Port

```
3000
```

Override using (Optional)

```bash
PORT=8080 npm start
```

or

```bash
export PORT=8080
npm start
```

---

## 🎯 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js
- Express.js
- Docker

---

## 📷 UI Highlights

- Fixed navigation bar
- Hero banner
- Floating Node.js logo
- Gradient title
- Animated buttons
- Runtime status indicator
- Statistics cards
- Footer links
- Mobile menu
- Theme switcher

---

## 📜 Available Scripts

Install dependencies

```bash
npm install
```

Start production server

```bash
npm start
```

Start development server

```bash
npm run dev
```

---

## 🌐 Default URL

```
http://localhost:3000
```

---

## 📄 License

This project is licensed under the Apache License 2.0.

See the **LICENSE** file for more information.
