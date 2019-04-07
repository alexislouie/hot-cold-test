import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    })

    it('Restarts the game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3],
            feedback: 'blah!',
            auralStatus: 'Her name is Han',
            correctAnswer: -1000
        })
        wrapper.instance().restartGame();
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    })

    it('Makes guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 1
        })

        wrapper.instance().makeGuess(51);
        expect(wrapper.state('guesses')).toEqual([51])
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
        
        wrapper.instance().makeGuess(31);
        expect(wrapper.state('guesses')).toEqual([51, 31])
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...')

        wrapper.instance().makeGuess(11);
        expect(wrapper.state('guesses')).toEqual([51, 31, 11])
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.')

        wrapper.instance().makeGuess(2);
        expect(wrapper.state('guesses')).toEqual([51, 31, 11, 2])
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!')

        wrapper.instance().makeGuess(1);
        expect(wrapper.state('guesses')).toEqual([51, 31, 11, 2, 1])
        expect(wrapper.state('feedback')).toEqual('You got it!')
    })

    it('Generates aural updates', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 1
        });
        wrapper.instance().makeGuess(10);
        wrapper.instance().makeGuess(20);
        wrapper.instance().makeGuess(30);

        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Warm. You\'ve made 3 guesses. In order of most- to least-recent, they are: 30, 20, 10');
    })
})