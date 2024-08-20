import SlideComponent from "./SlideComponent";
import DotComponent from "./DotComponent";
import { SlideIdContext } from "./SlideIdContext";

import { useState } from "react";

import './SlideshowComponent.css';

function SlideshowComponent(props) {

    const [slide_id, setSlideId] = useState(0);

    return (
        <div className="slideshow-style">
            <div style={{textAlign: "center"}}>
                        
                {slide_id == 0 ?
                    <SlideComponent id={1} srcimg={props.srcimg1} total={3} text="Slide 1"/>
                        : slide_id == 1 ? <SlideComponent id={2} srcimg={props.srcimg2} total={3} text="Slide 2"/>
                        : <SlideComponent id={3} srcimg={props.srcimg3} total={3} text="Slide 3"/>
                    }
                        

                    <a className="prev" onClick={()=>{setSlideId((slide_id - 1) % 3 >= 0 ? (slide_id - 1) % 3 : 2)}}>&#10094;</a>
                    <a className="next" onClick={()=>{setSlideId((slide_id + 1) % 3)}}>&#10095;</a>
            </div>

            <div style={{textAlign: "center"}}>
                <SlideIdContext.Provider value={{slide_id, setSlideId}}>
                    <DotComponent id={0} onClick={() => {setSlideId(0)}}/>
                    <DotComponent id={1} onClick={() => {setSlideId(1)}}/>
                    <DotComponent id={2} onClick={() => {setSlideId(2)}}/>
                </SlideIdContext.Provider>
            </div>
        </div>
    );
}

export default SlideshowComponent;