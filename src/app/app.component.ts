import { Component, inject } from '@angular/core';
import { LoadService } from './core/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-template';
  // isLoading: boolean = false;
  loadService = inject(LoadService);
}
