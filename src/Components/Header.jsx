import React, { useEffect, useState } from "react";


const Header = ({ jucatori }) => {
    const [score, setScore] = useState(0);


    let handlePoints = () => {
        let totalPoints = 0;

        for (let i = 0; i < jucatori.length; i++) {

            totalPoints += jucatori[i].score;
        }

        setScore(totalPoints);
    }

    useEffect(() => {
        handlePoints();
    }, [jucatori]);

    return (
        <header><button>test</button>
            <div className="score">
                <p>Total players:{jucatori.length}</p>
                <p>Total points:{score}</p>
            </div>
            <h1>SCOREBOARD</h1>
            <div className="stopwatch">
                <h1>STOPWACH</h1>
                <p>2</p>
                <div className="buttons"><button className="btn start">Start</button><button className="btn reset">Reset</button>
                </div>
            </div>
        </header>
    );
}

export default Header;