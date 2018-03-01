import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule } from '@angular/router';

//Componentes


import { HomeComponent} from './components/home/home.component';

import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
import { VotacionComponent} from '../app/admin/votacion';

const appRoutes : Routes =[
        {path:'', component: HomeComponent},
        {path :'', redirectTo: 'home', pathMatch :'full' },
        {path:'home', component: HomeComponent},
   

        {path:'login', component: LoginComponent},
        {path:'mis-datos', component: UserEditComponent},
        {path:'votacion', component: VotacionComponent},
        {path:'**', component: HomeComponent}
];

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);