import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected;

  constructor() {
    this.featureSelected = new EventEmitter<string>();
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
