import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import AboutUs from './pages/about-us/AboutUs';
import CreateArticle from './pages/create-article/CreateArticle';
import ArticlePage from './pages/article-page/ArticlePage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/create" element={<CreateArticle/>}/>
        <Route path="/article-page" element={<ArticlePage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
