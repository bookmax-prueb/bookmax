import { BrowserRouter, Routes,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import BooksCatalogue from "./components/BooksCatalogue"
import AuthorsCatalogue from "./components/AuthorsCatalogue"
import Register from "./components/Register"
import ErrorPage from "./components/ErrorPage"


function App() {


  return (
    <>
    <BrowserRouter> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<BooksCatalogue/>} />
      <Route path="/authors" element={<AuthorsCatalogue/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
