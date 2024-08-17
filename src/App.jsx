import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import MainPage from './MainPage';
import ArticleComponent from './ArticleComponent';
import article_main from './ArticleMain';
import article_about from './ArticleAbout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route index element={<ArticleComponent data={article_main}/>}></Route>
            <Route path="/news" element={<div>News</div>}></Route>
            <Route path="/gallery" element={<div>Gallery</div>}></Route>
            <Route path="/about" element={<ArticleComponent data={article_about}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;