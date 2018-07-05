import React from 'react';
import { shallow, mount } from 'enzyme';
import EditableInput from './EditableInput';

describe('<EditableInput />', () => {
    it('should contain an input', () => {
    const wrapper = mount(<EditableInput />);
        console.log('input', wrapper.find('input'))
        expect(wrapper.find('input').length).toBe(1);
    });

    it('should be editable when clicked ', () => {
        const spy = jest.fn();
        const wrapper = mount(<EditableInput onClick={spy}/>);
        wrapper.find('input').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
})