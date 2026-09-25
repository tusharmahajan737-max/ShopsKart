import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './Styles/App.css'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Account from './pages/Account'
import Password_Help from './pages/Password_Help'
import Login from './pages/Login'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='password_help' element={<Password_Help />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
