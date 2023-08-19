import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HoverTrash from "./Player.style";



const Player = ({ jucator, onIncrement, onDecrement }) => {
    const { id, user, score } = jucator;

    const [isHighlighted, setIsHighlighted] = useState(false);
    const styles = {
        color: isHighlighted ? 'red' : 'black',
        backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        display: isHighlighted ? 'block' : 'none',
        cursor: isHighlighted ? 'pointer' : 'none',
    }




    return (
        <div className="playerBox" onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>

            <div style={styles} >
                <FontAwesomeIcon icon={faTrash} />
            </div>


            <div className="player">

                <i className="fa-solid fa-x cross"></i><i className="fa-solid fa-crown crown"></i>
                <p>{jucator.user}</p>
            </div>
            <div className="counter"><button className="gray reduce" onClick={() => onDecrement(id)}>-</button>
                <p>{jucator.score}</p><button className="gray add" onClick={() => onIncrement(id)}>+</button>
            </div>
        </div>
    )
}

export default Player;