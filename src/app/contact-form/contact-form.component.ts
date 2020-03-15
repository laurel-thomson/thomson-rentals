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
  sentState: String = 'waiting';

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.sentState = 'sending';
    this.apiService.sendEmail(f.form.value).subscribe(
      (res) => this.onSuccess(res, f),
      (err) => this.onError(err, f)
    );
  }

  onSuccess = (res: Object, form: NgForm) => {
    this.sentState = 'success';
    console.log(JSON.stringify(res));
    this.clearForm(form);
  }

  onError = (err: Object, form: NgForm) => {
    this.sentState = 'failure';
    console.log(JSON.stringify(err));
    this.clearForm(form);
  }

  clearForm = (form: NgForm) => {
    form.reset();
  }

}
