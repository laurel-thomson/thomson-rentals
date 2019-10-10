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

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.apiService.sendEmail('test_data').subscribe((res) => {
      console.log("response" + res);
    });
  }

}
