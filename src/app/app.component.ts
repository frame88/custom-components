import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid d-flex justify-content-center mt-5">
    <div class="container text-center">
      <app-card titolo="form card"></app-card>  
      <app-card titolo="example card"></app-card>  
    </div>

  </div>
    `,
  styles: []
})
export class AppComponent {
  title = 'custom-components';
}

//  Componenti "stateful" e Input default value

// creazione di una card che mostra il body solo se mostro
// il titolo

