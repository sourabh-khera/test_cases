import React from 'react';
import { shallow, mount } from 'enzyme';
import DisplayPosts from '../displayPosts';

describe('Display Posts Component', () => {
  const wrapper = mount(<DisplayPosts />);
  it('Posts component should render without error', () => {
    expect(wrapper.find(`[data-test='posts-component']`).length).toBe(1);
  });

  it('initially posts should be undefined', () => {
    expect(wrapper.props().posts).toBe(undefined);    
  });
  
  it('posts should update on props change', () => {
    const posts = [{name: 'Hello Sahil'}];
    wrapper.setProps({posts});    
    expect(wrapper.props().posts).toEqual(posts);    
  });

});
