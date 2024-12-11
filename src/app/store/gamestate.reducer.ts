import { createReducer, on } from '@ngrx/store';
import { GameState } from "../board/model/game-state.model";
import { GameStateActions } from './gamestate.actions';

export const initialState: GameState = {state: [0,0,0,0]}
export const gameStateReducer = createReducer(
    initialState,
    on(GameStateActions.incrementPlayerPosition, (_state, {player}) =>  {
          return {..._state, state: incrementPositon(player, _state.state)}
       }
    ),
    on(GameStateActions.decrementPlayerPosition, (_state, {player}) =>  {
        return {..._state, state: decrementPositon(player, _state.state)}
     }
    )
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
