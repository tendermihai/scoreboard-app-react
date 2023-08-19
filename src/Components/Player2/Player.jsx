import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HoverTrash from "./Player.style";



const Player = ({ jucator, onIncrement, onDecrement, onDelete }) => {
    const { id, user, score } = jucator;

    let handleHoverTrash = (id) => {
        onDelete(id);

    }


    return (
        <HoverTrash className="playerBox" >

            <button className="test" onClick={handleHoverTrash}>
                <FontAwesomeIcon icon={faTrash} />
            </button>

            <div className="player">

                <i className="fa-solid fa-x cross"></i><i className="fa-solid fa-crown crown"></i>
                <p>{jucator.user}</p>
            </div>
            <div className="counter"><button className="gray reduce" onClick={() => onDecrement(id)}>-</button>
                <p>{jucator.score}</p><button className="gray add" onClick={() => onIncrement(id)}>+</button>
            </div>
        </HoverTrash>
    )
}

export default Player;