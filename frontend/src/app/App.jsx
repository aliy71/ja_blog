import { Routes, Route, useLocation, useResolvedPath } from 'react-router-dom'
import { Admin, BlogDetail, Blogs, Home, SignIn } from '../views';
import Navbar from '../components/navbar/navbar';
import './App.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { NavbarActiveContext, IsLikeContext, BlogDataContext, OverlayActive, ColorSchemaContext } from '../context/mainContext';
import { blogData } from '../constants/blogData';
import SignUp from '../views/signUp/signUp';
import { Footer, ImageOverlay } from '../components';
import ScrollToTop from '../units/srollToTop/scrollToTop';
import colors from '../constants/colors';

const App = () => {
  const [linkActive, setLinkActive] = useState('home')
  const [data, setData] = useState([])
  const routeLink = useResolvedPath()
  const [scrollyTop, setScrollyTop] = useState(0)
  const [ovelayActive, setOverlayActive] = useState(false)
  const [colorSchema, setColorSchema] = useState({ ...colors })

  const ctx = useContext(ColorSchemaContext);

  const changeColorSchema = () => {
    setColorSchema(prev => ({
      ...prev,
      primary: '#fff',
      secondary: '#1f2032'
    }))
  }

  const overlayChangeHandler = () => {
    setOverlayActive(prev => !prev)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setData([...blogData])
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
    <ColorSchemaContext.Provider value={{ colorSchema, changeColorSchema }}>
      <div className='App' >
        <BlogDataContext.Provider value={{ data, setData }}>
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
    </ColorSchemaContext.Provider>
  );
}

export default App;