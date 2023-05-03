import { createRoot } from 'react-dom/client';
import App from './App'
import Resume from './components/Resume'
import './index.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <App />
    },
    {
        path: '/resume/*',
        element: <Resume />
    }
])

createRoot(document.querySelector("#root")).render(
    <RouterProvider router={router} />);
