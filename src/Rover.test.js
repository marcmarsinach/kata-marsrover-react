import React from 'react';
import ReactDOM from 'react-dom';
import Rover from './Rover';

describe('Rover should', () => {


    it('rotate_to_east_given_an_R_command', () => {
        let commands = 'R';
        let expectedPosition = '0,0,E';

        let currentPosition = new Rover().rotate(commands);

        expect(currentPosition).toEqual(expectedPosition);
    });


    it('rotate_to_south_given_a_RR_command', () => {
        let commands = 'RR';
        let expectedPosition = '0,0,S';

        let currentPosition = new Rover().rotate(commands);

        expect(currentPosition).toEqual(expectedPosition);
    });


    it('rotate_to_west_given_a_RRR_command', () => {
        let commands = 'RRR';
        let expectedPosition = '0,0,W';

        let currentPosition = new Rover().rotate(commands);

        expect(currentPosition).toEqual(expectedPosition);
    });
    

    it('rotate_to_north_given_a_RRRR_command', () => {
        let commands = 'RRRR';
        let expectedPosition = '0,0,N';

        let currentPosition = new Rover().rotate(commands);
        
        expect(currentPosition).toEqual(expectedPosition);
    })


    it('rotate_to_west_given_a_L_command', () => {
        let commands = 'L';
        let expectedPosition = '0,0,W';

        let currentPosition = new Rover().rotate(commands);
        
        expect(currentPosition).toEqual(expectedPosition);
    })


    it('rotate_to_south_given_a_LL_command', () => {
        let commands = 'LL';
        let expectedPosition = '0,0,S';

        let currentPosition = new Rover().rotate(commands);
        
        expect(currentPosition).toEqual(expectedPosition);
    })


    it('rotate_to_east_given_a_LLL_command', () => {
        let commands = 'LLL';
        let expectedPosition = '0,0,E';

        let currentPosition = new Rover().rotate(commands);
        
        expect(currentPosition).toEqual(expectedPosition);
    })    
});