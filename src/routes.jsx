import {
    createBrowserRouter
   
  } from "react-router-dom";
import App from './App'
import About from './components/about'
import Contact from './components/contact'
import Archive from './components/archive'
import Certifications from './components/certifications'
import Experience from './components/experience'

const router = createBrowserRouter([
    {
      path: "/",
      element: <><App/></>,
    },
    {
      path: "/components/about",
      element: <About/>
    },
    {
        path: "/components/contact",
        element: <Contact/>
    },
    {
        path: "/components/archive",
        element: <Archive/>
    },
    {
        path: "/components/certifications",
        element: <Certifications/>
    },
    {
        path: "/components/experience",
        element: <Experience/>
    }
]);
export default router;