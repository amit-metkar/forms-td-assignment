import {
  NgForm
} from '@angular/forms';
import {
  Component,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') userForm: NgForm;

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  userData = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() {}

  onSubmit() {
    this.userData.email = this.userForm.value.email;
    this.userData.subscription = this.userForm.value.subscription;
    this.userData.password = this.userForm.value.password;

    console.log(this.userData);

    this.userForm.reset();
  }
}
