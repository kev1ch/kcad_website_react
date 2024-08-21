import { Outlet, Link } from "react-router-dom";
import DotComponent from "./DotComponent";

import './MainPage.css';

import website_logo from "./img/logo.png";

function MainPage() {

    return (
        <>

            <header>
                <div className="navigation_bar">
                    <img src={website_logo} alt="website_logo"/>

                    <nav>
                        <Link className="link-style" to="/">Home</Link>
                        <Link className="link-style" to="/news">News</Link>
                        <Link className="link-style" to="/gallery">Gallery</Link>
                        <Link className="link-style" to="/about">About</Link>
                        <Link className="link-style" to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="mobile_navigation_bar">
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
                </div>
            </header>

            <Outlet/>

            <footer>
                KCAD 2024
            </footer>
        </>
    );
}

export default MainPage;