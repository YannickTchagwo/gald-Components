import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.component.html'
})

export class NotificationsPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
