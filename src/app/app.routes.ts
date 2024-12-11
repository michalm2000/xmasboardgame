import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
    {path: "start", component: StartComponent},
    {path: "game", component: BoardComponent},
    {path: "", redirectTo: "/start", pathMatch: "full"}
];
