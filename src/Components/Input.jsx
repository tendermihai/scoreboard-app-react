import React, { useState } from "react";

const Input = ({ handleAddPlayer }) => {

    const [newPlayerName, setNewPlayerName] = useState("")

    let handlePlayerNameChange = (event) => {
        setNewPlayerName(event.target.value)
    }

    const handleAddPlayerClick = () => {
        handleAddPlayer(newPlayerName);
        setNewPlayerName("");
    };

    return (
        <div className="input"><input type="text" className="player" placeholder="ENTER A PLAYER NAME" value={newPlayerName} onChange={handlePlayerNameChange} /><button
            className="btn playerAdd" onClick={handleAddPlayerClick}>Add player</button></div>

    )
}

export default Input;