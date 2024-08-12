import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import MainPage from './MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route index element={<div>Main Page</div>}></Route>
            <Route path="/news" element={<div>News</div>}></Route>
            <Route path="/gallery" element={<div>Gallery</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;