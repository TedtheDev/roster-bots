import React from 'react';
import renderer from 'react-test-renderer';
import { Players }  from './Players';

describe('<Players />', () => {
    xit('renders correctly', () => {
        const wrapper = renderer.create(<Players rosterName='Team1' />);
        const tree = JSON.stringify(wrapper);

        expect(tree).toMatchSnapshot();
    });
});