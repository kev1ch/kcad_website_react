import './SlideComponent.css';

function SlideComponent(props) {
    return (
        <div>
            <div>{props.id} / {props.total}</div>
            <img src={props.srcimg}/>
            <div>{props.text}</div>
        </div>
    );
}

export default SlideComponent;