import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,CanActivateChild, CanLoad, RouterStateSnapshot, Route, UrlSegment, CanDeactivate, Resolve} from "@angular/router";
import { Observable } from "rxjs";
import { SubjectComponent } from "../subject/subject.component";
@Injectable({
  providedIn:"root"
})
export class TestCanActivate implements CanActivate{
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<any> {
  console.log("can activate check")
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(true);
  },3000)
 })
}
}

@Injectable({
  providedIn:"root"
})
export class TestCanActivateChild implements CanActivateChild{
canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<any> {
  console.log("canactivate Child check")
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(true);
  },3000)
 })
}
}

@Injectable({
  providedIn:"root"
})
export class CanDeactivateTeam implements CanDeactivate<SubjectComponent> {
  canDeactivate( component: SubjectComponent ) {
    if(component.isDirty){
      return window.confirm("You have some unsaved changes. Sure you want to leave")
    }
    return true;
  }
}

@Injectable({
  providedIn:"root"
})
export class TestCanLoadGuard implements CanLoad{
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    return true;
  }
}

@Injectable({
  providedIn:"root"
})
export class TestResolve implements Resolve<any>{

  UserObj = {
    userId: 12,
    username:'Ramesh'
  };
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.UserObj;
  }
}