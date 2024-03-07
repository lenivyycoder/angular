import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MovieComponent } from './movie/movie.component';
// Import your components



// Define your routes
 export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', component: LoginComponent }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }