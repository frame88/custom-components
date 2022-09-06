import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid d-flex justify-content-center mt-5">
    <div class="container text-center">
      <app-hello name="uno" color="red"></app-hello>
      <app-hello name="due"></app-hello>
      <app-hello name="tre"></app-hello>
  
    </div>

  </div>
    `,
  styles: []
})
export class AppComponent {
  title = 'custom-components';
}

// Input Properties
// style properties dei componenti e variabili di input importate

// Dividere header,main e footer, assegnando ad ognuno un background color diverso,
// ognuno creato tramite un Componente. Sarebbe comodo?