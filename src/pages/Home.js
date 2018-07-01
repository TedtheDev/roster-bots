import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoster } from '../modules/rosters';

export class Home extends Component {

    renderPlayers = (players) => {
        if(players.length > 0) {
            return <ul>{players.map(player => <li key={player.id}>{player.firstName}</li>)}</ul>;
        } else {
            return <p>Click Button to Load List</p>
        }
    }

    render() {
        return (
            <React.Fragment>
                <div><button type="button" onClick={() => this.props.dispatch(createRoster())}>Create Players</button></div>
                <div>{this.renderPlayers(this.props.roster.players)}</div>
            </React.Fragment>
        )
    }
}

function mapStateToProps (state){
    return {
        roster: state.roster.players
    }
}

export default connect(mapStateToProps)(Home);