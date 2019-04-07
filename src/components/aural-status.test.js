import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Provides aural update', () => {
    const update = 'blah!'
    const wrapper = shallow(<AuralStatus auralStatus={update}/>);
    expect(wrapper.contains(update)).toEqual(true);
  })
});