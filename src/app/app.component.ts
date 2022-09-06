import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid d-flex justify-content-center mt-5">
    <div class="container text-center">
      siamo in app.component ma aggiungo <app-hello></app-hello>
  
    </div>

  </div>
    `,
  styles: []
})
export class AppComponent {
  title = 'custom-components';
}

// Hello Components

// nel file ts.lint.json in "component-selector" posso modificare 
// le impostazioni di un componente, per esempio se non avesse prefisso "app"
