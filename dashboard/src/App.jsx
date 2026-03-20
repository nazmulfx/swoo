import { useState } from 'react'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import Hero from './components/Hero/Hero'
import FeaturedArea from './components/FeaturedArea/FeaturedArea'
import DealsOfTheDay from './components/DealsOfTheDay/DealsOfTheDay'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <FrappeProvider>
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <SearchBar />
                  <Hero />
                  <FeaturedArea />
                  <DealsOfTheDay />
                  <ProductShowcase />
                  <RecentlyViewed />
                  <Footer />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </FrappeProvider>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
