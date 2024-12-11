import { createActionGroup, props } from "@ngrx/store";

export const GameStateActions = createActionGroup({
    source: "GameState",
    events: {
        'incrementPlayerPosition': props<{player: number}>(),
        'decrementPlayerPosition': props<{player: number}>()
    }
})