import React from 'react';
import { shallow, mount } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    })

    it('Should restart game when link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find('.visuallyhidden')
        link.simulate('click', {
            preventDefault(){}
        });
        expect(callback).toHaveBeenCalled();
    })

    it('Should give aural update when link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault(){}
        })
        expect(callback).toHaveBeenCalled();
    })
})