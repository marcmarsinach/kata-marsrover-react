import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Turn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { direction: 'N'};
    }


    turn(command) {
        if (command == 'R')
            this.turnRight();
        else
            this.turnLeft();

        return this.state.direction;
    }


    turnLeft() {
        if (this.state.direction == 'N')
            this.state.direction = 'W';
        else if (this.state.direction == 'W')
            this.state.direction = 'S';
        else
            this.state.direction = 'E';
    }


    turnRight() {
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

 Turn.propTypes = propTypes;
 Turn.defaultProps = defaultProps;