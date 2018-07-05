import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Roster from './home/Roster';

const PlayerExistsWarning = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 5;
    height: 10%;
    width: 150px;
    background: white;
    border-radius: 10px;
    color: black;
    border: 2px solid red;
    transform: ${props => props.duplicatePlayer ? `translateY(-90%)` : `translateY(-100%)`};
    opacity: ${props => props.duplicatePlayer ? `1` : `0`};
    transition: all .2s ease-in;
`;

export class Home extends Component {

    renderRosters = rosters => {
        return rosters.map(rosterName => <Roster key={rosterName} rosterName={rosterName} />);
    }

    render() {
        return (
            <div>
                <PlayerExistsWarning duplicatePlayer={this.props.players.duplicatePlayer !== null ? true : false}>{this.props.players.duplicatePlayer !== null ? `${this.props.players.duplicatePlayer.firstName} ${this.props.players.duplicatePlayer.lastName} already exists` : null}</PlayerExistsWarning>
                {this.renderRosters(Object.keys(this.props.rosters))}
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        players: state.players,
        rosters: state.rosters.rosters
    }
}

export default connect(mapStateToProps)(Home);