import { Location } from '@angular/common';
import { Directive, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appGoBack]',
})
export class GoBackDirective {
  private location = inject(Location);

  @HostListener('click') onClick(): void {
    this.location.back();
  }
}
