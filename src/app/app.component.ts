import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number = 0;
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

    console.log(parsedValue);
  }

  onButtonClick() {
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
