import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jfm. ';
  counter:number = 0;

  constructor(private http: HttpClient) {

  }

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
    console.log('ticker');
    a.counter++;
    a.title += a.counter + ', ';

    await this.delay(1000);
    a.title += 'tocker, ';

    var s = await this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise();
    console.log(JSON.stringify(s));

  }
}
