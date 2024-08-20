import { useContext } from 'react';

import './DotComponent.css';
import { SlideIdContext } from "./SlideIdContext";

function DotComponent(props) {

    const {slide_id, setSlideId} = useContext(SlideIdContext);
    const id = props.id;
    var dot = <span className="inactive" onClick={props.onClick}>#</span>;

    if (slide_id == id) {
        dot = <span className="active" onClick={props.onClick}>#</span>;
    }

    return (
        <>{dot}</>
    );
}

export default DotComponent;