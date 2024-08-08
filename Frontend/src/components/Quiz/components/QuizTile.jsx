import React from "react";
import "./QuizTile.css";
import Reveal from "../../animations/Onscrollfadein";

function QuizTile(props) {
    const handleClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className="quiz-tiles">
            <Reveal>
                <div class="col-md-4 col-sm-6 col-xs-12" style={{ width: 300 }}>
                    <div class="card">
                        <div class="cover item-a">
                            <h1 className="quiztile-title">{props.title}</h1>
                            <div class="card-back">
                                <a onClick={handleClick}>
                                    {props.data[props.id] != null ? (
                                        <div>{`Your Score: ${props.data[props.id]}`}</div>
                                    ) : (
                                        <div>Unattempted</div>
                                    )}
                                </a>
                                <a onClick={props.onClick}>
                                    {props.data[props.id] != null ? "Reattempt" : "Attempt"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default QuizTile;