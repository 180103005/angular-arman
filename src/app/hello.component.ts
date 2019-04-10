import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello There {{name}}!</h1>`,
  styles: [`h1 { font-family: Ink Free; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
