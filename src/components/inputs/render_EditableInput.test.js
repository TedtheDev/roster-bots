import React from 'react';
import renderer from 'react-test-renderer';
import EditableInput  from './EditableInput';

describe('<EditableInput />', () => {
    it('renders correctly', () => {
        const wrapper = renderer.create(<EditableInput />);
        const tree = JSON.stringify(wrapper);

        expect(tree).toMatchSnapshot();
    });
});