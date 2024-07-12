import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { GoBackDirective } from './directives/go-back.directive';
@NgModule({
  declarations: [GoBackDirective, SharedButtonComponent],
  imports: [CommonModule],
  exports: [GoBackDirective, SharedButtonComponent],
})
export class SharedModule {}
