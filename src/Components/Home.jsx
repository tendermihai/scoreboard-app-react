import React, { useState } from "react";
import Header from "../Components/Header";
import Player from "../Components/Player"
import Input from "../Components/Input";

const Home = () => {
    const [players, setPlayers] = useState([
        {
            id: 1,
            user: 'Michael',
            score: 100
        },
        {
            id: 2,
            user: 'Andrew',
            score: 200
        },
        {
            id: 3,
            user: 'John',
            score: 300
        },
        {
            id: 4,
            user: 'Ivan',
            score: 500
        },
        {
            id: 5,
            user: 'Paul',
            score: 250
        }
    ]);


    //todo:metodo changeScore
    const handleAddPlayer = (newPlayerName) => {
        const trimmedName = newPlayerName.trim();
        if (trimmedName !== "") {
            const newPlayer = {
                id: players.length + 1,
                user: trimmedName,
                score: 0,
            };
            setPlayers([...players, newPlayer]);
        }
    };

    const handleScoreChange = (playerId, increment) => {
        setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
                player.id === playerId
                    ? { ...player, score: player.score + (increment ? 1 : -1) }
                    : player
            )
        );
    };

    return (
        <>
            <Header jucatori={players} />
            <main>
                {
                    players.map(pl => {

                        return <Player key={pl.id} jucator={pl}
                            onIncrement={() => handleScoreChange(pl.id, true)}
                            onDecrement={() => handleScoreChange(pl.id, false)}
                        />
                    })
                }

                <Input handleAddPlayer={handleAddPlayer} />
            </main>

        </>
    )
}


export default Home;