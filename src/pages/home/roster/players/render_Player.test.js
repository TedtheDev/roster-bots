import React from 'react';
import renderer from 'react-test-renderer';
import { Player }  from './Player';

describe('<Player />', () => {
    it('renders correctly', () => {
        const player = {
            firstName: 'Frank',
            lastName: 'Frank',
            agility: 34,
            speed: 20,
            strength: 3,
            id: 'aaa222'
        }


        const wrapper = renderer.create(<Player player={player} duplicateError={false}/>);
        const tree = JSON.stringify(wrapper);

        expect(tree).toMatchSnapshot();
    });
});