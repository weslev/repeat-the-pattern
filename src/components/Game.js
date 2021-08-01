import { useEffect, useState } from "react";
import Grid from "./Grid/Grid";
const Game = props => {

    const [userPattern, setUserPattern] = useState([]);
    const [gamePattern, setGamePattern] = useState([0]);
    const [grid, setGrid] = useState(<Grid size={9} pattern={gamePattern} userAnswer={userChoice}></Grid>);

    
    function userChoice(choice) {
       userPattern.push(Number(choice));     
       setUserPattern(userPattern);
       if (userPattern.toString() === gamePattern.toString()) {
            setUserPattern([]);
            const newNum = Math.floor(Math.random() * 9);
            const newPattern = [...gamePattern, newNum]
            setGamePattern(newPattern);
       }
       else if (userPattern.length > gamePattern.length) {
            props.onLose() 
       } 
    }

    useEffect(() => {
        console.log(gamePattern)
        setGrid(<Grid size={9} pattern={gamePattern} userAnswer={userChoice}></Grid>)
    }, [gamePattern]);

    return(
        <> 
            {grid}
        </>
    );
}
export default Game;