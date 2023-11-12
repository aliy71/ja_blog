import { Routes, Route, useLocation, useResolvedPath } from 'react-router-dom'
import { Admin, BlogDetail, Blogs, Home, SignIn } from '../views';
import Navbar from '../components/navbar/navbar';
import './App.css'
import { useEffect, useRef, useState } from 'react';
import { NavbarActiveContext, IsLikeContext, BlogDataContext, OverlayActive } from '../context/mainContext';
import { blogData } from '../constants/blogData';
import SignUp from '../views/signUp/signUp';
import { Footer, ImageOverlay } from '../components';
import ScrollToTop from '../units/srollToTop/scrollToTop';

const App = () => {
  const [linkActive, setLinkActive] = useState('home')
  const [data, SetData] = useState([])
  const routeLink = useResolvedPath()
  const [scrollyTop, setScrollyTop] = useState(0)
  const [ovelayActive, setOverlayActive] = useState(false)

  const overlayChangeHandler = () => {
    setOverlayActive(prev => !prev)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    SetData([...blogData])
    setLinkActive(routeLink.pathname)
  }, [routeLink.pathname])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollyTop(window.scrollY)
    })
  }, [scrollyTop])

  const changeScrollY = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='App'>
      <BlogDataContext.Provider value={{ data, SetData }}>
        <nav>
          <NavbarActiveContext.Provider value={{ linkActive }}>
            <Navbar />
          </NavbarActiveContext.Provider>
        </nav>
        <OverlayActive.Provider value={{ ovelayActive, overlayChangeHandler }} >
          <main>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/blogs' element={<Blogs />}></Route>
              <Route path='/blog-detail/:id' element={<BlogDetail />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/admin' element={<Admin />}></Route>
            </Routes>
            <ImageOverlay />
          </main>
        </OverlayActive.Provider>
        {/* {
          (routeLink.pathname === '/sign-in' || routeLink.pathname === '/sign-up' ) ? '' : <Footer />
        } */}
        <ScrollToTop scrolly={scrollyTop} changeScrollY={changeScrollY} />
        <Footer />
      </BlogDataContext.Provider>
    </div>
  );
}

export default App;