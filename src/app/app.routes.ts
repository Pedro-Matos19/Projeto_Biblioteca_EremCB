import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LivrosComponent } from './component/livros/livros.component';
import { LivrosListComponent } from './component/livros-list/livros-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'livros', component: LivrosComponent},
    {path: 'livros-lista', component: LivrosListComponent}
];
