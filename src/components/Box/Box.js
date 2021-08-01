import "./Box.css";

const Box = props => (
    <div>
        <button id={props.id} className={"box" + (props.blink ? " box-blink" : "")} onClick={props.click}></button>
    </div>
); 

export default Box;