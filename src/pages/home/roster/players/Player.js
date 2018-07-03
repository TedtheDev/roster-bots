import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditableInput from '../../../../components/inputs/EditableInput';

class Player extends Component {
    constructor(props) {
        super(props);

    }
    
    onClickEditable = () => {
        this.setState({editable: true});
    }

    // TODO: add dispatch to update player
    onKeyPressSubmit = (event) => {
        if(event.key === 'Enter') {
            console.log('dispatch')
        }
    }

    onBlurInput = () => {
        this.setState({editable: false});
    }

    render() {
        return (
            <React.Fragment>
                <EditableInput onKeyPress={this.onKeyPressSubmit} type='text' value={this.props.player.firstName} />
                <EditableInput  type='text' value={this.props.player.lastName} />
                <div>{this.props.player.strength + this.props.player.agility + this.props.player.speed} </div>
                <div> {this.props.player.strength}</div>
                <div> {this.props.player.agility}</div>
                <div> {this.props.player.speed}</div>
            </React.Fragment>
        )
    }
    
}

export default connect(null)(Player);