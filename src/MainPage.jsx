import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import SlideComponent from "./SlideComponent";
import DotComponent from "./DotComponent";

import './MainPage.css';

import website_logo from "./img/logo.png";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function MainPage() {

    const [slide_id, setSlideId] = useState(0);

    return (
        <>

            <header>
                <div id="navigation_bar">
                    <img src={website_logo} alt="website_logo"/>

                    <nav className="navigation_bar">
                        <Link className={"link-style"} to="/">Home</Link>
                        <Link className={"link-style"} to="/news">News</Link>
                        <Link className={"link-style"} to="/gallery">Gallery</Link>
                        <Link className={"link-style"} to="/about">About</Link>
                        <Link className={"link-style"} to="/contact">Contact</Link>
                    </nav>
                </div>
            </header>


            <article>

                <div className="slideshow_container">
                    
                    {slide_id == 0 ?
                        <SlideComponent id={1} srcimg={img1} total={3} text="Slide 1"/>
                        : slide_id == 1 ? <SlideComponent id={2} srcimg={img2} total={3} text="Slide 2"/>
                        : <SlideComponent id={3} srcimg={img3} total={3} text="Slide 3"/>
                    }
                    

                    <a class="prev" onClick={()=>{setSlideId((slide_id - 1) % 3 >= 0 ? (slide_id - 1) % 3 : 2)}}>&#10094;</a>
                    <a class="next" onClick={()=>{setSlideId((slide_id + 1) % 3)}}>&#10095;</a>
                </div>

                <div style={{textAlign: "center"}}>
                    <span className="dot" onClick={() => {setSlideId(0)}}></span>
                    <span className="dot" onClick={() => {setSlideId(1)}}></span>
                    <span className="dot" onClick={() => {setSlideId(2)}}></span>
                </div>

            </article>

            <Outlet/>
        </>
    );
}

export default MainPage;