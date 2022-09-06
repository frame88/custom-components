import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-hello',
    template: `<h1 [style.color] = "color">stringa di esempio {{name}}</h1>`
})
export class HelloComponent {
    @Input() name: string | undefined;
    @Input() color: string = 'blue';
}