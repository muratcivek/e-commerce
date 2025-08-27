import { useEffect, useState } from "react";
import { IProduct } from "../IProduct";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom"; // ÖNEMLİ

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
  fetch("http://localhost:5116/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);
  


  return (
    <>
    <CssBaseline></CssBaseline>
     <Header />
     <Container>
        <Outlet/>
     </Container>
    </>
  )
}

export default App
