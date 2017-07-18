import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Grid, Row, Col} from 'react-bootstrap';

class Team extends React.Component {
    pickedTeam () {
        this.props.onClick()
    }
    render(){
        return (
            <div className="team" onClick={() => this.props.onClick()}>
                <div className="team_info">
                    {this.props.name}
                    {this.props.myTeam == this.props.name ? 'moj team' : null}

                </div>
                <div className="answers">
                    <Row className="show-grid" style={{height: "50px"}}>
                        <Col xs={6} md={6}>
                            <div style={{display: "flex"}}>
                                <div className="triangle-left"></div>
                                <div className="answer">Pierwsze pytanie</div>
                                <div className="triangle-right"></div>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div style={{display: "flex"}}>
                                <div className="triangle-left"></div>
                                <div className="answer">Drugie pytanie</div>
                                <div className="triangle-right"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid" style={{height: "50px"}}>
                        <Col xs={6} md={6}>
                            <div style={{display: "flex"}}>
                                <div className="triangle-left"></div>
                                <div className="answer">Trzecie pytanie</div>
                                <div className="triangle-right"></div>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div style={{display: "flex"}}>
                                <div className="triangle-left"></div>
                                <div className="answer">Czwarte pytanie</div>
                                <div className="triangle-right"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
// function Team(props) {
//
//     return (
//                 <div className="team" onClick={props.onClick}>
//                     <div className="team_info">
//                         {props.name}
//                     </div>
//                     <div className="answers">
//                         <Row className="show-grid" style={{height: "50px"}}>
//                             <Col xs={6} md={6}>
//                                 <div style={{display: "flex"}}>
//                                     <div className="triangle-left"></div>
//                                     <div className="answer">Pierwsze pytanie</div>
//                                     <div className="triangle-right"></div>
//                                 </div>
//                             </Col>
//                             <Col xs={6} md={6}>
//                                 <div style={{display: "flex"}}>
//                                     <div className="triangle-left"></div>
//                                     <div className="answer">Drugie pytanie</div>
//                                     <div className="triangle-right"></div>
//                                 </div>
//                             </Col>
//                         </Row>
//
//                         <Row className="show-grid" style={{height: "50px"}}>
//                             <Col xs={6} md={6}>
//                                 <div style={{display: "flex"}}>
//                                     <div className="triangle-left"></div>
//                                     <div className="answer">Trzecie pytanie</div>
//                                     <div className="triangle-right"></div>
//                                 </div>
//                             </Col>
//                             <Col xs={6} md={6}>
//                                 <div style={{display: "flex"}}>
//                                     <div className="triangle-left"></div>
//                                     <div className="answer">Czwarte pytanie</div>
//                                     <div className="triangle-right"></div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </div>
//     )
// }


class Board extends React.Component {

    renderTeam(i) {
        return <Team name={this.props.team.teamsName[i] } myTeam={this.props.team.myTeam}
                     onClick={() => this.props.onClick(i)}/>;
    }

    render() {

        return (
            <Grid fluid={true}>
                <Row className="no-gutter" style={{height: "50vh"}}>
                    <Col xs={6} md={6}> {this.renderTeam(0)}</Col>
                    <Col xs={6} md={6}> {this.renderTeam(1)}</Col>
                </Row>

                <Row className="no-gutter" style={{height: "50vh"}}>
                    <Col xs={6} md={6}> {this.renderTeam(2)}</Col>
                    <Col xs={6} md={6}> {this.renderTeam(3)}</Col>
                </Row>
            </Grid>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            x: true,
            teams:{
                teamsName:[1,2,3,4],
                myTeam:null
            }

        }

    }

    handleClick(i) {
        this.setState({
            teams: {
                teamsName:[1,2,3,4],
                myTeam:this.state.teams.teamsName[i]
            }
        });
    }


    render() {
        const team = this.state.teams;


        return (
            <div className="game">
                <div className="game-board">
                    <Board team={team} onClick={(i) => this.handleClick(i) }/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Game/>, document.getElementById('root')
);



