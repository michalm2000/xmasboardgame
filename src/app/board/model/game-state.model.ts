export interface GameState {
    state: number[],
    currentPlayer: number;
    loading: boolean;
    currentDiceThrow: number | undefined;
}