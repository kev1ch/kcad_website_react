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
                    <button className="dropdown_button">=</button>
                    <div className="dropdown_content">
                        <div className="dropdown_element">111</div>
                        <div className="dropdown_element">222</div>
                        <div className="dropdown_element">333</div>
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