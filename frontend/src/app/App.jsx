import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { BlogDetail, Blogs, Home, SignIn } from '../views';
import Navbar from '../components/navbar/navbar';

import './App.css'
import { useEffect, useState } from 'react';
import { NavbarActiveContext, IsLikeContext, BlogDataContext } from '../context/mainContext';
import { blogData } from '../constants/blogData';
import SignUp from '../views/signUp/signUp';

const App = () => {
  const [linkActive, setLinkActive] = useState('home')
  const [data, SetData] = useState([])
  const routeLink = useLocation()

  const setLinkActiveHandler = link => {
    setLinkActive(link)
  }
  useEffect(() => {
    setLinkActive(routeLink.pathname)
  }, [routeLink.pathname])

  const ChangeDataHandler = (data) => {
    SetData(data)
    console.log(data);
  }

  useEffect(() => {
    ChangeDataHandler(blogData)
  }, [])

  console.log(data);
  
  return (
    <>
      <BlogDataContext.Provider value={{ data, ChangeDataHandler }}>
        <nav>
          <NavbarActiveContext.Provider value={{ linkActive, setLinkActiveHandler }}>
            <Navbar setLinkActiveHandler={setLinkActiveHandler} />
          </NavbarActiveContext.Provider>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/blog-detail/:id' element={<BlogDetail />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
          </Routes>
        </main>
      </BlogDataContext.Provider>
    </>
  );
}

export default App;