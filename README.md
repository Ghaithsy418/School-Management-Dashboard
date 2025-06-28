# 🚀 School Dashboard

A modern and feature-rich dashboard for managing school operations, built with React, TypeScript, and Vite. This application provides role-based access for Deans, Supervisors, and Teachers to manage students, classes, and other school-related activities.

![School Dashboard Screenshot](https://via.placeholder.com/800x450.png?text=Add+Your+App+Screenshot+Here)
*<p align="center">Add a screenshot or GIF of your application here.</p>*

---

## ✨ Key Features

- **Role-Based Access Control**: Separate dashboards and permissions for Dean, Supervisor, and Teacher roles.
- **User Management**: Add, view, and manage Teachers, Supervisors, and Students.
- **Class Management**: Create and manage classes.
- **Student Profiles**: View detailed information for each student.
- **Internationalization (i18n)**: Support for multiple languages (English and Arabic).
- **Dark/Light Mode**: Theme switching for user preference.
- **Responsive Design**: Fully responsive UI that works on all screen sizes.
- **CSV Data Parsing**: Functionality to parse student data from CSV files.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Query & React Context
- **Routing**: React Router DOM v7
- **Form Handling**: React Hook Form
- **Internationalization**: i18next
- **Animations**: Framer Motion
- **Linting/Formatting**: ESLint & Prettier

---

## 📂 Project Structure

The project follows a feature-sliced design approach to keep the codebase organized and scalable.

```
school-dashboard/
├── public/
│   ├── fonts/
│   └── images/
└── src/
    ├── components/         # Shared UI components (deprecated, see /ui)
    ├── context/            # React Context providers
    ├── features/           # Feature-based modules (auth, dean, students, etc.)
    ├── hooks/              # Custom React hooks
    ├── lib/                # Utility functions
    ├── pages/              # Page components
    ├── services/           # API service functions
    ├── ui/                 # Reusable UI components (Buttons, Modals, etc.)
    ├── utils/              # Type definitions and other utilities
    ├── App.tsx             # Main application component with routing
    ├── main.tsx            # Application entry point
    └── i18n.ts             # i18next configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/school-dashboard.git
    cd school-dashboard
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following environment variables.
    ```
    VITE_APP_URL=http://your-backend-api-url.com
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally.

---

## ☁️ Deployment

This project is configured for easy deployment on platforms like Vercel or Netlify. A `vercel.json` file is included to handle server-side routing for SPAs on Vercel.

To deploy, connect your Git repository to your preferred hosting service and follow their instructions for a Vite/React project.

---

## ❤️ Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details. (You might want to add a LICENSE file).
