import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutUs from "./pages/AboutUs"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import NotFoundPage from "./pages/NotFoundPage"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}/>
            <Route path="/about-us" Component={AboutUs}/>
            <Route path="/products" Component={ProductsPage}/>
            <Route path="/products/:id" Component={ProductDetailsPage}/>
            <Route path="*" Component={NotFoundPage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

