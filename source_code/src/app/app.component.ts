import { Component } from '@angular/core';

import { ToastService } from './services/toast.service';
import { LocalStorage } from './classes/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GNow';
  localStorage:LocalStorage = new LocalStorage();

  constructor(public toastService: ToastService) {
    this.getFirstRun();
  }

  getFirstRun() {
    if (!this.localStorage.getLocalStorageValue("isFirstRun")) {
      this.showStandard();
      this.localStorage.setLocalStorage("isFirstRun", new Date());
    }
  }

  showStandard() {
    this.toastService.show('Drag and drop the green marker to update the gravity or click on the map to get the gravity on that place.', {
      classname: 'bg-success text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Notification'
    });
  }
}
