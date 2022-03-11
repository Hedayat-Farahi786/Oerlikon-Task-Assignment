import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-component',
  template: `
    <div class="customer__info__item">
      <span class="customer__info__item__label">{{ label }}</span>
      <span class="customer__info__item__value">{{ value }}</span>
    </div>
    <p-divider type="dashed"></p-divider>
  `,
})
export class infoComponent {
  @Input() label!: string;
  @Input() value!: string;

}
