import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoster } from '../../modules/rosters';
import CleanString from '../../utils/cleanStrings';
import styled from 'styled-components';

const CreateRosterDiv = styled.div`
    margin: 5px;
`;

const ErrorMessage = styled.span`
    color: red;
`;

const PlayerLegendDiv = styled.div`
    border: 1px black solid;
    border-radius: 5px;
`;

export class CreateRoster extends Component {
    constructor(props) {
        super(props);

        this.state = { rosterName: '', errorMessage: '' };
    }

    onChangeRosterName = event => {
        this.setState({rosterName: event.target.value});
    }

    onClickCreateRoster = () => {
        if(this.state.rosterName !== '') {
            this.setState({ errorMessage: ''});
            this.props.dispatch(createRoster(CleanString.toPropertyValue(this.state.rosterName)));
            this.setState({rosterName: '' });
        } else {
            this.setState({ errorMessage: 'Enter a Roster name'});
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errorMessage !== this.props.errorMessage) {
            this.setState({errorMessage: nextProps.errorMessage});
        }
    }
    render() {

        return (
            <CreateRosterDiv>
                <div>
                    <input type='text' onChange={this.onChangeRosterName} value={this.state.rosterName} placeholder='Enter a Roster Name' />
                </div>
                <div>
                    {this.state.errorMessage ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : null}
                </div>
                <div>
                    <button type="button" onClick={this.onClickCreateRoster}>Create Roster</button>
                </div>
                <PlayerLegendDiv>
                    <div><strong>Player Legend:</strong></div>
                    <div>Green = Starters</div>
                    <div>Yellow = Subs</div>
                </PlayerLegendDiv>
            </CreateRosterDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.rosters.errorMessage
    }
}

export default connect(mapStateToProps)(CreateRoster);