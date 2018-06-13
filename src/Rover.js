import React from 'react';
import PropTypes from 'prop-types';
import Turn from './Turn';

const propTypes = {};

const defaultProps = {};

export default class Rover extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            direction: 'N'
        };
    }


    rotate(commands) {
        let commandsCollection = commands.split('');

        let turn = new Turn();

        commandsCollection.forEach(command => {
            this.state.direction = turn.turn(command);
        });

        return '0,0,' + this.state.direction;
    }


    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

Rover.propTypes = propTypes;
Rover.defaultProps = defaultProps;