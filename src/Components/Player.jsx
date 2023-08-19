import React from "react";

const Player = ({ jucator, onIncrement, onDecrement }) => {
    const { id, user, score } = jucator;


    return (
        <div className="playerBox">
            <div className="player"><i className="fa-solid fa-x cross"></i><i className="fa-solid fa-crown crown"></i>
                <p>{jucator.user}</p>
            </div>
            <div className="counter"><button className="gray reduce" onClick={() => onDecrement(id)}>-</button>
                <p>{jucator.score}</p><button className="gray add" onClick={() => onIncrement(id)}>+</button>
            </div>
        </div>
    )
}

export default Player;