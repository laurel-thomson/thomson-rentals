import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thomson-rentals';

  constructor(private _appService: AppService) {}

  sendEmail(content) {
    this._appService.sendEmail(content).subscribe(
      data => {
        //todo: tell the user it worked
        console.log("Email sent");
        return true;
      },
      error => {
        console.log("Error sending email");
        return Observable.throw(error);
      }
    );
  }
}
