# React Tic-Tac-Toe Game

This project is a simple tic-tac-toe game built using React.js and JS. Players take turns marking spaces in a 3x3 grid, aiming to get three of their symbols in a row, column, or diagonal.

## [Demo Link](https://novak-k.github.io/tic-tac-toe/)

## How to Play

1. **Setup**: Open the game in a web browser.

2. **Game Start**: The game starts with two players, each represented by a symbol (X and O).

3. **Player Names**: Before starting the game, players can customize their names by clicking the "Edit" button next to their symbol and entering their desired name. Click "Save" to confirm the changes.

4. **Gameplay**: Click on an empty square on the game board to make a move. The square will be marked with the current player's symbol.

5. **Winning**: The game ends when a player successfully gets three of their symbols in a row, column, or diagonal.

6. **Draw**: If all squares are filled and there is no winner, the game ends in a draw.

7. **Rematch**: After a game ends, click the "Rematch!" button to restart the game with the same player names.

## Code Description

The code consists of several components:

- **App.js**: The main component managing the game state, player turns, and rendering other components.
- **GameBoard.js**: Renders the game board grid and handles square selection.
- **GameOver.js**: Displays the game outcome (win/draw) and provides a button to restart the game.
- **Log.js**: Logs each turn made by players during the game.
- **Player.js**: Represents each player, allowing them to edit their name and displaying their symbol.

## Running the Game

To run the game locally:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install dependencies by running `npm install`.

4. Start the development server by running `npm start`.

5. Open your web browser and go to `http://localhost:3000` to play the game.
