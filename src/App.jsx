import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import MainPage from './MainPage';

import ArticleComponent from './ArticleComponent';
import SlideshowComponent from "./SlideshowComponent";

import article_main from './ArticleMain';
import article_about from './ArticleAbout';
import article_contact from './ArticleContact';

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route index element={<><SlideshowComponent srcimg1={img1} srcimg2={img2} srcimg3={img3}/><ArticleComponent data={article_main}/></>}></Route>
            <Route path="/news" element={<div>News</div>}></Route>
            <Route path="/gallery" element={<div>Gallery</div>}></Route>
            <Route path="/about" element={<ArticleComponent data={article_about}/>}></Route>
            <Route path="/contact" element={<ArticleComponent data={article_contact}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;