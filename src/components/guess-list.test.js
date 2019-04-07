import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';
import GuessSection from './guess-section';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

    it('Renders Guess List', () => {
        const guesses = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        const guessList = wrapper.find('li');
        expect(guessList.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(guessList.at(index).text()).toEqual(guess.toString());
        })
    })
})