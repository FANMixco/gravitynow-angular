import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toasts',
  standalone: false,
  template: `
    @for (toast of toastService.toasts; track toast) {
      <ngb-toast
        [header]="toast.headertext"
        [class]="toast.classname"
        [autohide]="toast.autohide"
        [delay]="toast.delay || 5000"
        (hide)="toastService.remove(toast)"
      >
        @if (isTemplate(toast)) {
          <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
        } @else {
          {{ toast.textOrTpl }}
        }
      </ngb-toast>
    }
  `,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
 
  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }
}
