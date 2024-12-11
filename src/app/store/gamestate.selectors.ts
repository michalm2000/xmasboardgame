import { GameState } from "../board/model/game-state.model";

export const selectGameState = (state: {gameState: GameState}) => state.gameState.state
export const selectCurrentPlayer = (state: {gameState: GameState}) => state.gameState.currentPlayer;
export const selectLoading = (state: {gameState: GameState}) => state.gameState.loading;
