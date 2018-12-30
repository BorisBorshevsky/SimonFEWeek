import React from "react";


export class GameOver extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div id="gameover" className="gameover">
                <p> GAME </p>
                <p> OVER </p>

                <div className="score">Your Score is {this.props.score}</div>
                <div className="restart" onClick={this.props.reset}>Restart</div>
            </div>
        );
    }
}
