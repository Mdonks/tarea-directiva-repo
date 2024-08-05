import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.page.html',
  styleUrls: ['./primer-caso.page.scss'],
})
export class PrimerCasoPage {
  count: number = 0;

  increment() {
    this.count++;
  }
}
