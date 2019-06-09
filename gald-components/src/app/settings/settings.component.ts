import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login.component";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsPage {

  constructor(public nav: NavController) {
  }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
