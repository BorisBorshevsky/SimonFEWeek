import React from "react";
import styled from "styled-components";


const Squere = styled.div`
    height: 300px;
    width: 300px;
    flex: 1;
`;


export class ColoredBtn extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isHovered: false,
            isClicked: false,
            busy: false
        }

    }

    mouseEnter = () => {
        if (!this.props.busy) {
            this.setState({isHovered: true});
        }
    };

    mouseLeave = () => {
        if (!this.props.busy) {
            this.setState({isHovered: false});
        }
    };

    mouseUp = () => {
        if (!this.props.busy) {
            console.log("mouse up");
            this.setState({isClicked: false});
            this.props.clickCallback()
        }
    };

    mouseDown = () => {
        if (!this.props.busy) {
            console.log("mouse down");
            new Audio(this.props.sound).play();

            this.setState({isClicked: true});
        }
    };

    render() {
        let boxClass = String(this.props.className).split(" ");

        const {extra, color} = this.props;
        const {isClicked, isHovered} = this.state;

        if (extra.animated) {
            new Audio(this.props.sound).play();
            boxClass.push('active');
        }

        if (isClicked) {
            boxClass.push('active');
            new Audio(this.props.sound).play()
        } else if (isHovered) {
            boxClass.push('hover');
        }


        return (
            <Squere
                className={boxClass.join(" ")}
                style={{backgroundColor: color}}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
            />
        )

    }
}