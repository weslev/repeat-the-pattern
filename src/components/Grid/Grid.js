import Box from '../Box/Box';
import './Grid.css'
import { useEffect, useState } from 'react';

const Grid = props => {
 
    const onBoxClick = e => {
            props.userAnswer(e.target.id);
    }
    
    const changeBoxBlink = i => {
        const prev = props.pattern[i-1]
        const curr = props.pattern[i];
        if (i > 0) {
            boxes[prev] = <Box key={prev} blink={!boxes[prev].props.blink} id={prev} click={onBoxClick}></Box>
        }
        if (i < props.pattern.length)
            boxes[curr] = <Box key={curr} blink={!boxes[curr].props.blink} id={curr} click={onBoxClick}></Box>
        setBoxes([...boxes]);
    }

    const [boxes, setBoxes] = useState(Array.from({ length: props.size }, (_, i) => <Box key={i} blink={false} id={i} click={onBoxClick}></Box>));
    const [allowClick, setAllowClick] = useState(true);


    useEffect(() => {
        setAllowClick(false);
        let blinkCount = 0;
        const blinker = setInterval(() => {
            changeBoxBlink(blinkCount++)
            if (blinkCount == props.pattern.length+1) {
                clearInterval(blinker);
                setAllowClick(true);
            }
        }, 1000)
    }, [props.pattern])


    return (
        <div class="container">
            {!allowClick ? <div className="overlay"></div> : ""}
            <div className='grid'>
                {boxes}
            </div>
        </div>
    );
}

export default Grid;