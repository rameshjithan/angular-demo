import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  public resolvedata:any;
  constructor(private activeroute: ActivatedRoute) { 
    const test$ = new Observable(subscriber=>{
      subscriber.next('1');
      subscriber.next('2');
      subscriber.next('3');
      subscriber.complete()
      subscriber.next('4');
    });
    console.log('start')
    test$.subscribe(x=>{
      console.log("1st",x)
    });
    console.log('end')
    test$.subscribe(x=>{
      console.log("2nd",x)
    });
    //checking resolve guard 
    this.resolvedata = this.activeroute.snapshot.data;
  }

  ngOnInit() {
  }

}