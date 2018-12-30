import React, {Component} from 'react';
import './App.css';
import './gameOver.css'
import styled from 'styled-components';
import {delay} from "q";
import {ColoredBtn} from "./ColoredBtn";
import {Counter} from "./ScoreCircle";
import {GameOver} from "./GameOver";


const GameContainer = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
`;


const Green = "green";
const Red = "red";
const Blue = "blue";
const Yellow = "yellow";
const SimonColors = [Green, Blue, Red, Yellow];

const audioWrong = new Audio("http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3");


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 0,
            red: {animated: false},
            green: {animated: false},
            blue: {animated: false},
            yellow: {animated: false},
            busy: false,
            gameOver: false
        };

        this.flow = [SimonColors[Date.now() % 4]];
        this.clicked = []
    }

    compare = (flow, clicked) => {
        for (let i = 0; i < clicked.length; i++) {
            if (flow[i] !== clicked[i])
                return false
        }

        return true
    };

    reset = () => {
        console.log("reset");
        this.setState({score: 0, gameOver: false});
        this.flow = [SimonColors[Date.now() % 4]];
        this.clicked = [];
        setTimeout(this.displayFlow, 300)
    };

    onClick = (color) => {
        return () => {
            console.log("click ", color);
            this.clicked.push(color);
            let weAreGood = this.compare(this.flow, this.clicked);
            if (!weAreGood) {
                audioWrong.play();
                this.setState({gameOver: true})

            } else {

                if (this.flow.length === this.clicked.length) {
                    this.clicked = [];
                    this.flow.push(SimonColors[Date.now() % 4]);
                    this.setState({busy: true});
                    setTimeout(() => {
                        this.setState({busy: false});
                        this.displayFlow()
                    }, 500)
                }

                this.setState({score: this.state.score + 1})

            }

        };
    };

    animate = (color) => {
        let newState = {...this.state};
        newState[color].animated = true;
        this.setState(newState);
        return delay(500).then(() => {
            let state = {...this.state};
            state[color].animated = false;
            this.setState(state);
            return delay(200)
        })
    };


    displayFlow = () => {
        if (!this.state.busy) {
            this.setState({busy: true});
            let input = this.flow;
            let promise = this.animate(input[0]);
            for (let i = 1; i < input.length; i++) {
                promise = promise.then(() => this.animate(input[i]));
            }


            return promise.then(() => this.setState({busy: false}))
        }

        return Promise.resolve()
    };

    render() {
        if (!this.state.gameOver) {
            return (<div>
                <GameContainer>
                    <div>
                        <ColoredBtn className="topLeft simonBtn" color={Green} clickCallback={this.onClick(Green)}
                                    extra={this.state.green} busy={this.state.busy}
                                    sound="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"/>
                        <ColoredBtn className="bottomLeft simonBtn" color={Red} clickCallback={this.onClick(Red)}
                                    extra={this.state.red} busy={this.state.busy}
                                    sound="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"/>
                    </div>
                    <Counter score={this.state.score} onClick={this.displayFlow}/>
                    <div>
                        <ColoredBtn className="topRight simonBtn" color={Blue} clickCallback={this.onClick(Blue)}
                                    extra={this.state.blue} busy={this.state.busy}
                                    sound="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"/>
                        <ColoredBtn className="bottomRight simonBtn" color={Yellow} clickCallback={this.onClick(Yellow)}
                                    extra={this.state.yellow} busy={this.state.busy}
                                    sound="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"/>
                    </div>
                </GameContainer>
            </div>)
        } else {
            return (
                <div>
                    <GameContainer>
                        <GameOver score={this.state.score} reset={this.reset}/>
                    </GameContainer>
                </div>
            )
        }


    }
}

export {App};
