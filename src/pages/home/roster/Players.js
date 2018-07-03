import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Player from './players/Player';

const PlayerDiv = styled.div`
    display: grid;
    grid-template: 1fr / repeat(6, 1fr);
    background-color: ${ props => props.sub === true ? `yellow` : `green`};
    justify-content: center;
    align-content: center;
`;

const PlayerTable = styled.div`
    display: grid;
    grid-template: 10% 90% / 1fr;
    grid-template-areas:
        "header"
        "data";
`;

const PlayerHeader = styled.div`
    grid-area: header;
    display: grid;
    grid-template: 1fr / repeat(6, 1fr);
`;

const PlayerData = styled.div`
    grid-area: data;
    display: grid;
    grid-template: 1fr / 1fr;
`;

const renderPlayers = (players, rosters, rosterName) =>{
    console.log('rosters', rosters)
    return rosters[rosterName].players.map((rosterPlayer) => <PlayerDiv key={rosterPlayer.id} sub={rosterPlayer.sub}><Player  player={players.filter(player => player.id === rosterPlayer.id)[0]} /></PlayerDiv>);
};

export class Players extends Component {
    render() {
        return (
            <PlayerTable>
                <PlayerHeader>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Total Score</div>
                    <div>Strength</div>
                    <div>Agility</div>
                    <div>Speed</div>
                </PlayerHeader>
                <PlayerData>
                    {renderPlayers(this.props.players, this.props.rosters, this.props.rosterName)}
                </PlayerData>
            </PlayerTable>
        )
    }
}

const mapStateToProps = state => {
    return {
        rosters: state.rosters.rosters,
        players: state.players.players
    }
}

Players.propTypes = {
    rosterName: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Players);