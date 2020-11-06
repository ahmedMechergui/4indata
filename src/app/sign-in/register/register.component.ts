import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../sign-in.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() clickedLoginAccount = new EventEmitter()

  constructor() {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  loginAccountClicked() {
    this.clickedLoginAccount.emit();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
}
