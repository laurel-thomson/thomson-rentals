import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  onSubmit(content) {
    console.log('test');
    this._appService.sendEmail(content).subscribe(
      data => {
        console.log("email sent");
        return true;
      },
      error => {
        console.error("Error sending email");
        return Observable.throw(error);
      }
    );
  }

}
