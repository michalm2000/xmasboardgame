import { createReducer, on } from '@ngrx/store';
import { GameState } from "../board/model/game-state.model";
import { GameStateActions } from './gamestate.actions';

export const initialState: GameState = {state: [0,0,0,0], loading: false, currentPlayer: 0}
export const gameStateReducer = createReducer(
    initialState,
    on(GameStateActions.incrementPlayerPosition, (_state, {player}) =>  {
          return {..._state, state: incrementPositon(player, _state.state)}
       }
    ),
    on(GameStateActions.decrementPlayerPosition, (_state, {player}) =>  {
        return {..._state, state: decrementPositon(player, _state.state)}
     }
    ),
    on(GameStateActions.setLoading, (_state, {loading}) => ({..._state, loading})),
    on(GameStateActions.nextPlayer, (_state) => ({..._state, currentPlayer: (_state.currentPlayer + 1) % _state.state.length }))
)


function incrementPositon(player: number, array: number[]) {
    const newArray = [...array]
    newArray[player]++;
    return newArray;
}
function decrementPositon(player: number, array: number[]) {
    const newArray = [...array]
    newArray[player]--;
    return newArray;
}
