## Mars Rover Kata wih React
- [Statement](#statement)
- [Requirements](#requirements)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)

### Satatement
You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

### Requirements
- You are given the initial starting point (0,0,N) of a rover.
- 0,0 are X,Y co-ordinates on a grid of (10,10).
- N is the direction it is facing (i.e. N,S,E,W).
- L and R allow the rover to rotate left and right.
- M allows the rover to move one point in the current direction.
- The rover receives a char array of commands e.g. RMMLM and returns the finishing point after the moves e.g. 2,1,N
- The rover wraps around if it reaches the end of the grid.
- The grid may have obstacles. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle e.g. O,2,2,N

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).