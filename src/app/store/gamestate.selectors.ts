import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameState } from "../board/model/game-state.model";

export const selectGameState = (state: {gameState: GameState}) => state.gameState.state
