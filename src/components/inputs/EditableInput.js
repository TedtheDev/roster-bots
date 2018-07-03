import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: none;
    outline: none;
    background: ${props => props.editable ? `white` : `transparent`};

`;

export class EditableInput extends Component {
    constructor(props) {
        super(props);

        this.state = {editable: false}
    }

    onClickEditable = () => {
        this.setState({editable: true});
    }

    // TODO: add dispatch to update player
    onKeyPressEnter = (event) => {
        if(event.key === 'Enter') {
            this.setState({editable: false})
        }
    }

    onBlurInput = () => {
        this.setState({editable: false});
    }

    render() {
        return (
            <Input 
                onClick={this.onClickEditable}
                onBlur={this.onBlurInput} 
                onKeyPress={this.onKeyPressEnter} 
                editable={this.state.editable} 
                {...this.props} 
            />
        )
    }
}

export default EditableInput;