import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private apiService : ApiService) { }
  sendingEmail: boolean;

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.sendingEmail = true;
    this.apiService.sendEmail(f.form.value).subscribe(
      (res) => this.onSuccess(res),
      (err) => this.onError(err)
    );
  }

  onSuccess = (res) => {
    this.sendingEmail = false;
    console.log(JSON.stringify(res));
  }

  onError = (err) => {
    this.sendingEmail = false;
    console.log(JSON.stringify(err));
  }

}
