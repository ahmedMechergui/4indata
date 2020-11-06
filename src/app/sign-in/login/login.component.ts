import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../sign-in.component.css']
})
export class LoginComponent implements OnInit {
  @Output() clickedCreateAccount = new EventEmitter()
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  createAccountClicked() {
    this.clickedCreateAccount.emit()
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
