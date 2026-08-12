# Assignment 1 — Web Development Basics

1. Frontend vs Backend vs Full-stack

- Frontend: The part users interact with in their browser — UI, layout, styling, and client-side behavior. Example: an online store product page written in HTML/CSS/JS that shows product images, lets users add items to a cart, and runs client-side validation.
- Backend: Server-side logic, data processing, authentication, and APIs. Example: the store's order processing service that authenticates users, stores orders in a database, and sends confirmation emails.
- Full‑stack: Works on both frontend and backend, or coordinates them. Example: a developer who builds the store UI and implements the API endpoints that create orders.

2. Client–Server model diagram

```mermaid
graph LR
  Client[Client (Browser)] -->|HTTP Request| Server[Web Server / App Server]
  Server -->|DB Query| Database[(Database)]
  Server -->|API Response| Client
```

3. How a browser requests and displays a page

- User enters URL or clicks a link. Browser resolves domain via DNS to an IP.
- Browser opens a TCP (usually TLS) connection to the server and sends an HTTP request.
- Server processes the request and returns an HTTP response (HTML, or a redirect, or JSON for APIs).
- The browser parses the HTML, builds the DOM, fetches CSS/JS/assets referenced, applies CSS to compute layout, executes JavaScript which may modify the DOM, and paints pixels to the screen.

4. Tools for a web development environment (purpose)

- Code editor: VS Code — write/edit source files, extensions for HTML/CSS/JS.
- Git: version control — track changes, branches, collaboration.
- Node.js & npm: run build tools, package manager, local dev servers.
- Browser (Chrome/Firefox/Safari/Edge): testing and debugging; DevTools inspect DOM, network, and JS.
- Live Server (or a local static server): serve files locally for development.
- Prettier / ESLint: code formatting and linting.
- Database (SQLite/MySQL/Postgres): store persistent data for backend testing.

5. What is a web server? Examples

- A web server is software that listens for HTTP(S) requests and returns responses. It can serve static files or forward requests to application code.
- Examples: Apache HTTP Server, Nginx, IIS, Node.js (Express), Gunicorn (Python), Tomcat (Java).

6. Roles in a project

- Frontend Developer: builds UI, implements responsive layouts, accessibility, client-side logic, integrates with APIs.
- Backend Developer: designs and implements server logic, APIs, authentication, business rules, performance and scalability.
- Database Administrator (DBA): designs schema, tunes queries, manages backups, ensures data integrity and security.

7. VS Code install & configure (screenshot placeholder)

- Steps to install and configure VS Code for HTML/CSS/JS:
  1. Download and install from https://code.visualstudio.com/.
  2. Install extensions: Live Server, Prettier - Code formatter, ESLint, HTML CSS Support.
  3. Open the project folder, then open an HTML file and click "Go Live" (Live Server) to start a dev server.

- I cannot capture desktop screenshots from this environment. Add a screenshot to `assignment-1/vscode-setup-screenshot.png` after you complete setup locally.

8. Static vs Dynamic websites

- Static site: HTML files served as-is. Example: a simple portfolio site where each page is a static HTML file.
- Dynamic site: pages are generated at request or use client-side data to render. Example: an e-commerce platform where product pages are built from a database and user sessions affect content.

9. Web browsers and rendering engines

- Google Chrome — Blink (Chromium)
- Microsoft Edge — Blink (Chromium)
- Mozilla Firefox — Gecko (Quantum)
- Apple Safari — WebKit
- Opera — Blink (Chromium)

Rendering engine differences:
- Blink (Chromium) – high performance, used by Chrome/Edge/Opera; frequent updates and broad web-compatibility.
- Gecko – used by Firefox; different layout and CSS implementation details, strong standards focus.
- WebKit – used by Safari (and iOS webviews); has platform-specific optimizations and some CSS feature differences.

10. Basic web architecture flow diagram

```mermaid
graph TD
  Client[Client (Browser)] -->|HTTP(S) Request| WebServer[Web Server / Load Balancer]
  WebServer --> AppServer[Application Server / API]
  AppServer -->|SQL / Queries| Database[(Database)]
  AppServer -->|Calls| ExternalAPI[Third-party APIs]
  ExternalAPI --> AppServer
  AppServer -->|HTTP Response| Client
```

---

Files in this folder:
- ASSIGNMENT-1.md — this file with answers and diagrams.
- vscode-setup-instructions.md — step-by-step VS Code setup and screenshot instructions.

Next steps:
- I will create a local git branch `assignment-1` and commit these files. To push them to GitHub, provide the remote URL or run the push commands I will give.
