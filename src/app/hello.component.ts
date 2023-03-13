import { Component, Input } from '@angular/core';
import { AppService } from './dataservice/app.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)="emit()">Emit</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(private appservice: AppService){
    this.appservice.sub.subscribe(x=>console.log('From hello component',x))
  }
  emit(){
    this.appservice.sendData(Math.random())
  }
}
