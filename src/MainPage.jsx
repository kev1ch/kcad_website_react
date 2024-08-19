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
                        <Link className={"link-style"} to="/">Home</Link>
                        <Link className={"link-style"} to="/news">News</Link>
                        <Link className={"link-style"} to="/gallery">Gallery</Link>
                        <Link className={"link-style"} to="/about">About</Link>
                        <Link className={"link-style"} to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="dropdown_navigaiton">
                    <button className="dropdown_button">&#9776;</button>
                    <div className="dropdown_content">
                        <div className="dropdown_element">Home</div>
                        <div className="dropdown_element">News</div>
                        <div className="dropdown_element">Gallery</div>
                        <div className="dropdown_element">About</div>
                        <div className="dropdown_element">Contact</div>
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