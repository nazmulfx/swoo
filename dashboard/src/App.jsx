import { useState } from 'react'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import Hero from './components/Hero/Hero'
import FeaturedArea from './components/FeaturedArea/FeaturedArea'
import DealsOfTheDay from './components/DealsOfTheDay/DealsOfTheDay'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FrappeProvider>
        <Navbar />
        <SearchBar />
        <Hero />
        <FeaturedArea />
        <DealsOfTheDay />
        <ProductShowcase />
        <RecentlyViewed />
        <Footer />
        {/* <main className="container main-content">
          <section className="hero-placeholder">
            <h1>Welcome to Swoo Tech Mart</h1>
            <p>Modern Ecommerce powered by ERPNext</p>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                Count is {count}
              </button>
            </div>
          </section>
        </main> */}
      </FrappeProvider>
    </div>
  )
}

export default App
