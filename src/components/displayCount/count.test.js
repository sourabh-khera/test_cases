import React from 'react';
import { shallow, mount } from 'enzyme';
import DisplayCount from './index';

describe('Count Component',  () => {
  const wrapper = shallow(<DisplayCount />);

  it('count should render without errors', () => {
    expect(wrapper.find(`[data-test='countComponent']`).length).toBe(1);
  });

  it('should have a initial state count of 0 and name as empty string ', () => {
    expect(wrapper.state().count).toBe(0);
    expect(wrapper.state().name).toBe('');
  });
  
  it('increment function should increment state count by 1', () => {
    wrapper.instance().incrementCount();
    expect(wrapper.state().count).toBe(1);
  });

  it('handle change function should change the name state whenever onchange is called', () => {
      wrapper.find('input').at(0).simulate('change', {target: {name, value: 'sourabh'}});
      expect(wrapper.state().name).toBe('sourabh');
  });
});