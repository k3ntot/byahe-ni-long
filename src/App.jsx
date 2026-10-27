import { useState } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [galleryOpen, setGalleryOpen] = useState(false)

  function handleExplore() {
    setGalleryOpen(true)
    // Give the DOM a tick to render before scrolling
    setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  function handleClose() {
    setGalleryOpen(false)
    setTimeout(() => {
      document.getElementById('hero-top')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <Hero onExplore={handleExplore} />
      <Gallery visible={galleryOpen} onClose={handleClose} />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
