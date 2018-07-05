import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: none;
    outline: ${props => props.duplicateError ? `3px solid red` : `none`};
    background: ${props => props.editable ? `white` : `transparent`};
    &:focus {
        outline: 1px solid green;
    }
`;

export class EditableInput extends Component {
    constructor(props) {
        super(props);

        this.state = {editable: false}
    }

    onClickEditable = () => {
        this.setState({editable: true});
    }

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
                duplicateError={this.props.error}
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