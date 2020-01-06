import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header Component',  () => {
  const wrapper = shallow(<Header />);
  it('render header div without errors', () => {
   expect(wrapper.find(`[data-test='headerComponent']`).length).toBe(1);
  })
});