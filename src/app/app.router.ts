import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent }
];
export const routing = RouterModule.forRoot(routes);