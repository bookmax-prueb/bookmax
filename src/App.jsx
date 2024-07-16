import { BrowserRouter, Routes,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import BooksCatalogue from "./components/BooksCatalogue"
import AuthorsCatalogue from "./components/AuthorsCatalogue"
import Register from "./components/Register"
import ErrorPage from "./components/ErrorPage"
import AuthProvider from "./context/AuthContext"
import PrivateRoute from "./router/PrivateRouter"
import Profile from "./components/Profile"


function App() {
  return (
    <>
    <BrowserRouter> 
    <AuthProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<BooksCatalogue/>} />
      <Route path='/authors' element={<AuthorsCatalogue/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<ErrorPage/>} />
      <Route element={<PrivateRoute />}>
        <Route path='profile' element={<Profile/>} />
      </Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
