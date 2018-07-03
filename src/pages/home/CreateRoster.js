import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoster } from '../../modules/rosters';
import CleanString from '../../utils/cleanStrings';

class CreateRoster extends Component {
    constructor(props) {
        super(props);

        this.state = { rosterName: '', errorMessage: '' };
    }

    onChangeRosterName = event => {
        this.setState({rosterName: event.target.value});
    }

    onClickCreateRoster = () => {
        if(this.state.rosterName !== '') {
            this.props.dispatch(createRoster(CleanString.toPropertyValue(this.state.rosterName)));
            this.setState({rosterName: '' });
        } else {
            this.setState({ errorMessage: 'Enter a Roster name'});
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type='text' onChange={this.onChangeRosterName} value={this.state.rosterName} placeholder='Enter a Roster Name' />
                </div>
                <div>
                    {this.state.errorMessage && <span>{this.state.errorMessage}</span> || null}
                </div>
                <div>
                    <button type="button" onClick={this.onClickCreateRoster}>Create Roster</button>
                </div>
            </React.Fragment>
            
        )
    }
}

export default connect(null)(CreateRoster);