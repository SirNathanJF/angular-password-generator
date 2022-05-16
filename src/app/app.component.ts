import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    console.log('Letters:', this.includeLetters);
    console.log('Numbers:', this.includeNumbers);
    console.log('Symbols:', this.includeSymbols);

    this.password = 'MY PASSWORD!!!!';
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
