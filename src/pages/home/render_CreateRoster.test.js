import React from 'react';
import renderer from 'react-test-renderer';
import { CreateRoster } from './CreateRoster';

describe('<CreateRoster />', () => {
    it('renders correctly', () => {
        const wrapper = renderer.create(<CreateRoster />);
        const tree = JSON.stringify(wrapper);

        expect(tree).toMatchSnapshot();
    });
});