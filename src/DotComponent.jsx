import { useContext } from 'react';
import { SlideIdContext } from "./SlideIdContext";

import './DotComponent.css';

function DotComponent(props) {

    const {slide_id, setSlideId} = useContext(SlideIdContext);
    const id = props.id;
    var dot = <span className="inactive" onClick={() => {setSlideId(id)}}></span>;

    if (slide_id == id) {
        dot = <span className="active" onClick={() => {setSlideId(id)}}></span>;
    }

    return (
        <>{dot}</>
    );
}

export default DotComponent;