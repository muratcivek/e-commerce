import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import App from "../components/App";
import { createBrowserRouter } from "react-router-dom";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetails from "../pages/catalog/ProductDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'catalog', element: <CatalogPage /> },
      { path: 'catalog/:id', element: <ProductDetails /> },

    ],
  }    
]);
