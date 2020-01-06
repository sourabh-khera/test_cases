import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Component', () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<Button handleClick={mockFunction}/>);

  it('button renders without errors' , () => {
    expect(wrapper.find(`[data-test='buttonComponent']`).length).toBe(1);
  });

  it('button should have a click function', () => {
    wrapper.find('button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

});