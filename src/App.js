import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostBlog from './components/PostBlog';
import Contact from './components/Contact';
import Home from './components/Home';  // ✅ Capitalized "Blog"
import Signup from './components/Signup';
import Login from './components/Login';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div> 
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />  {/* ✅ Fixed */}
            <Route path="/postblog" element={<PostBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:postId" element={<PostDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
