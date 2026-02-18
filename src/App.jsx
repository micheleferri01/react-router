import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}/>
            <Route path="/products" Component={ProductsPage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

