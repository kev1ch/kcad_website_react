import { Outlet, Link } from "react-router-dom";

import './MainPage.css';

import ArticleComponent from "./ArticleComponent";
import SlideshowComponent from "./SlideshowComponent";

import article_main from './ArticleMain';
import article_about from './ArticleAbout';
import article_contact from './ArticleContact';

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

import website_logo from "./img/logo.png";

function MainPage() {

    return (
        <>

            <header>
                <div className="navigation_bar">
                    <img src={website_logo} alt="website_logo"/>

                    {/*<nav>
                        <Link className="link-style" to="/">Home</Link>
                        <Link className="link-style" to="/news">News</Link>
                        <Link className="link-style" to="/gallery">Gallery</Link>
                        <Link className="link-style" to="/about">About</Link>
                        <Link className="link-style" to="/contact">Contact</Link>
                    </nav>*/}


                </div>

                {/*<div className="mobile_navigation_bar">
                    <div className="dropdown_navigaiton">
                        <button className="dropdown_button">&#9776;</button>
                        
                        <div className="dropdown_content">
                            <Link className="dropdown_element" to="/">Home</Link>
                            <Link className="dropdown_element" to="/news">News</Link>
                            <Link className="dropdown_element" to="/gallery">Gallery</Link>
                            <Link className="dropdown_element" to="/about">About</Link>
                            <Link className="dropdown_element" to="/contact">Contact</Link>
                        </div>

                    </div>
                    <div className="mobile_logo_container"><img src={website_logo} alt="website_logo"/></div>
                </div>*/}
            </header>

            {/*<Outlet/>*/}

            <SlideshowComponent srcimg1={img1} srcimg2={img2} srcimg3={img3}/><ArticleComponent data={article_main}/>
            <ArticleComponent data={article_about}/>

            <footer>
                KCAD 2024
            </footer>
        </>
    );
}

export default MainPage;