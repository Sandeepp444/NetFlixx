import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies.component";
import { TvshowsComponent } from "./tvshows.component";

export const router: Routes =[
    {path:"", redirectTo:'', pathMatch:'full'},
    {path:"movies", component:MoviesComponent},
    {path:"tvshows", component:TvshowsComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);