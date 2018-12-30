import styled from "styled-components";
import React from "react";


const Circle = styled.div`
    height: 100px;
    width: 100px;
    background: darkred;
    border-radius: 100px;
    box-shadow: 0 0px 21px 8px #555;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    font-weight: 800;
    font-size: 44px;
    font-family: monospace;
`;

export class Counter extends React.Component {
    render() {
        return <div style={{position: 'absolute'}}>
            <Circle onClick={this.props.onClick}>{this.props.score}</Circle>
        </div>
    }
}
