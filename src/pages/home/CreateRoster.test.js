import React from 'react';
import { mount } from 'enzyme';
import { CreateRoster } from './CreateRoster';

describe('<CreateRoster />', () => {
    it('should be able to enter text', () => {
        const wrapper = mount(<CreateRoster />);
        wrapper.find('input').simulate('change', {target: {value: 'Team1'}});
        expect(wrapper.find('input').props().value).toBe('Team1');
    });
});