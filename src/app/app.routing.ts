import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ChildComponent } from './custom-directive/child/child.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { TestCanActivate, TestCanActivateChild, TestCanLoadGuard,CanDeactivateTeam, TestResolve } from './dataservice/guards';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path:'observer', component:ObservableComponent,
    resolve:{
      data: TestResolve
    }
  },
  { path:'subject',component:SubjectComponent,
    canDeactivate: [CanDeactivateTeam]
  },
  { path:'forms',
    loadChildren: () => import('./forms/forms2.module').then(m=>m.Forms2Module)
  },
  {
    path:'directive',component:CustomDirectiveComponent,
    children:[
      {
        path:'childcustom',component:ChildComponent
      }
    ],
    canActivateChild:[TestCanActivateChild],
    canActivate:[TestCanActivate]
  },
  { path:'crud',
   canLoad:[TestCanLoadGuard],
    loadChildren: () => import('./crud/crud.module').then(m=>m.CrudModule)
  }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }