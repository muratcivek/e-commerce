import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import App from "../components/App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  }    
]);
