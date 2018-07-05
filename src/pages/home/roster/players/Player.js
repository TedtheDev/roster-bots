import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../../../../modules/players';
import PropTypes from 'prop-types';

import EditableInput from '../../../../components/inputs/EditableInput';

export class Player extends Component {
    constructor(props) {
        super(props);

        this.state = { playerFirstName: this.props.player.firstName, playerLastName: this.props.player.lastName };
    }

    onKeyPressSubmit = (event) => {
        if(event.key === 'Enter') {
            let updatedPlayer= Object.assign({}, this.props.player);
            updatedPlayer.firstName = this.state.playerFirstName;
            updatedPlayer.lastName = this.state.playerLastName;
            this.props.dispatch(updatePlayer(updatedPlayer));
        }
    }

    onChangePlayerFirstName = (event) => {
        this.setState({playerFirstName: event.target.value});
    }

    onChangePlayerLastName = (event) => {
        this.setState({playerLastName: event.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <EditableInput 
                    error={this.props.duplicateError} 
                    onKeyPress={this.onKeyPressSubmit} 
                    type='text' 
                    onChange={this.onChangePlayerFirstName} 
                    value={this.state.playerFirstName} 
                />
                <EditableInput 
                    error={this.props.duplicateError} 
                    onKeyPress={this.onKeyPressSubmit} 
                    type='text' 
                    onChange={this.onChangePlayerLastName} 
                    value={this.state.playerLastName} 
                />

                <div>{this.props.player.strength + this.props.player.agility + this.props.player.speed} </div>
                <div> {this.props.player.strength}</div>
                <div> {this.props.player.agility}</div>
                <div> {this.props.player.speed}</div>
            </React.Fragment>
        )
    }
    
}

Player.propTypes = {
    duplicateError: PropTypes.bool.isRequired,
    player: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        strength: PropTypes.number.isRequired,
        agility: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired
    })
};

export default connect(null)(Player);