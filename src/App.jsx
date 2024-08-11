import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import About from './components/about'; 
import Contact from './components/contact';
import Archive from './components/archive'; 
import Certification from './components/certifications'; 
import Experience from './components/experience'; 
import Body from './components/body';

function App() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/certifications" element={<Certification />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </Router>
        <Body />
        </>
    );
}

export default App;
