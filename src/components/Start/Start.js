import './Start.css';

const Start = props => (
    <div class="start">
        <div>Welcome to a fun video game</div>
        <button class="start-button" onClick={props.onStart}>Start the fun</button>
    </div>
);

export default Start;