import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import SlideshowComponent from "./SlideshowComponent";
import DotComponent from "./DotComponent";

import './MainPage.css';

import website_logo from "./img/logo.png";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function MainPage() {

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

                <SlideshowComponent srcimg1={img1} srcimg2={img2} srcimg3={img3}/>

            </article>

            <Outlet/>
        </>
    );
}

export default MainPage;