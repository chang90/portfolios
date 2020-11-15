import React from 'react';
import { shallow } from 'enzyme';
import ProjectTemplate from './ProjectTemplate';

describe('ProjectTemplate', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProjectTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
