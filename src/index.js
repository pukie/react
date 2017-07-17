import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Grid, Row, Col} from 'react-bootstrap';
// class Square extends React.Component {
//
//     render(){
//         return(
//             <button className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Team(props) {
    return (

        <div className="team" onClick={props.onClick}>

            <div className="team_info">
                {props.value}
            </div>
            <div className="answers">
                <Row className="show-grid" style={{height: "50px"}}>
                    <Col xs={6} md={6}>
                        <div style={{display: "flex"}}>
                            <div className="triangle-left"></div>
                            <div className="answer">aaa</div>
                            <div className="triangle-right"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div style={{display: "flex"}}>
                            <div className="triangle-left"></div>
                            <div className="answer">aaa</div>
                            <div className="triangle-right"></div>
                        </div>
                    </Col>
                </Row>

                <Row className="show-grid" style={{height: "50px"}}>
                    <Col xs={6} md={6}>
                        <div style={{display: "flex"}}>
                            <div className="triangle-left"></div>
                            <div className="answer">aaa</div>
                            <div className="triangle-right"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div style={{display: "flex"}}>
                            <div className="triangle-left"></div>
                            <div className="answer">aaa</div>
                            <div className="triangle-right"></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}


class Board extends React.Component {

    renderSquare(i) {
        return <Team value={this.props.squares[i]}
                     onClick={() => this.props.onClick(i)}/>;
    }

    render() {

        return (
            <Grid fluid={true}>
                <Row className="show-grid" style={{height: "50vh"}}>
                    <Col xs={6} md={6}> {this.renderSquare(0)}</Col>
                    <Col xs={6} md={6}> {this.renderSquare(1)}</Col>
                </Row>

                <Row className="show-grid" style={{height: "50vh"}}>
                    <Col xs={6} md={6}> {this.renderSquare(2)}</Col>
                    <Col xs={6} md={6}> {this.renderSquare(3)}</Col>
                </Row>
            </Grid>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            x: true,
            stepNumber: 0
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        squares[i] = this.state.x ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            x: !this.state.x,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            x: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];


        let status;

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i) }/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Game/>, document.getElementById('root')
);



