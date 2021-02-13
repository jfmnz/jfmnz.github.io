import { Component } from '@angular/core';
import { timer } from 'rxjs';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jfm. ';
  counter:number = 0;

  ngOnInit() {
    // const source$ = timer(1000,1000);
    // source$.subscribe( this.onTick );

  //   setInterval(() => {
  //     this.title = this.title + '.';
  //  }, 1000);

    setInterval(() => this.onTick(this), 2000);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  async onTick(a:AppComponent) {
    console.log('tick');
    a.counter++;
    a.title += a.counter + ', ';

    await this.delay(1000);
    a.title += 'tock, ';
  }
}
