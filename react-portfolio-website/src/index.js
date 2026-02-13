/**
 * Application Entry Point
 * 
 * This file bootstraps the React application and configures client-side routing.
 * It uses React Router v6 to handle navigation between the main portfolio page
 * and the resume viewer.
 * 
 * Routing Configuration:
 * - '/*': Main portfolio page (default route) - renders the App component
 * - '/resume/*': Resume viewer page - displays PDF resume in iframe
 * 
 * The wildcard (*) allows for nested routing within each route if needed.
 * Uses createRoot API from React 18 for concurrent rendering features.
 */

import { createRoot } from 'react-dom/client';
import App from './App'
import Resume from './components/Resume'
import './index.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Configure application routes
const router = createBrowserRouter([
    {
        // Main portfolio page - default route
        path: '/*',
        element: <App />
    },
    {
        // Resume viewer page - displays PDF resume
        path: '/resume/*',
        element: <Resume />
    }
])

// Mount the application to the DOM using React 18's createRoot API
createRoot(document.querySelector("#root")).render(
    <RouterProvider router={router} />);
