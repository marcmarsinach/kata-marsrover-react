import React from 'react';
import PropTypes from 'prop-types';

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
        let sCommands = commands.split('');

        sCommands.forEach(command => {
            this.turnRight(command);
        });

        return '0,0,' + this.state.direction;
    }


    turnRight(command) {
        if (this.state.direction == 'N')
            this.state.direction = 'E';
        else if (this.state.direction == 'E')
            this.state.direction = 'S';
        else if (this.state.direction == 'S')
            this.state.direction = 'W';
        else
            this.state.direction = 'N';
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