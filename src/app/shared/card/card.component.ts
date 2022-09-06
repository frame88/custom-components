import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  template: `
  <div class="card mb-5">
    <div class="card-header">{{titolo}}</div>
    <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit sed ipsum provident alias blanditiis cupiditate libero,
       vero sequi magni, nesciunt eos sint ex aperiam error veritatis. Sequi, atque culpa.
    </div>
  </div>

  <!-- <div class="card mb-5">
    <div class="card-header">Titolo di esempio.2</div>
    <div class="card-body">
      <input type="text">
      <input type="text">
      <input type="text">
    </div>
  </div> -->
  `,
})
export class CardComponent {
  @Input() titolo: string | undefined;

}
