import { BrowserRouter, Routes, Route, useLocation, useResolvedPath } from 'react-router-dom'
import { Admin, BlogDetail, Blogs, Home, SignIn } from '../views';
import Navbar from '../components/navbar/navbar';

import './App.css'
import { useEffect, useState } from 'react';
import { NavbarActiveContext, IsLikeContext, BlogDataContext } from '../context/mainContext';
import { blogData } from '../constants/blogData';
import SignUp from '../views/signUp/signUp';
import { Footer } from '../components';

const App = () => {
  const [linkActive, setLinkActive] = useState('home')
  const [data, SetData] = useState([])
  const routeLink = useResolvedPath()

  useEffect(() => {
  }, [routeLink.pathname])
  
  useEffect(() => {
    SetData([...blogData])
    setLinkActive(routeLink.pathname)
  }, [routeLink.pathname])

  console.log(data);

  return (
    <>
      <BlogDataContext.Provider value={{ data, SetData }}>
        <nav>
          <NavbarActiveContext.Provider value={{ linkActive}}>
            <Navbar />
          </NavbarActiveContext.Provider>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/blog-detail/:id' element={<BlogDetail />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
          </Routes>
        </main>
        {
          (routeLink.pathname === '/sign-in' || routeLink.pathname === '/sign-up' ) ? '' : <Footer />
        }
      </BlogDataContext.Provider>
    </>
  );
}

export default App;