import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercice-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h1>Hi my name is: {{ 'bouba.says.replace.me.with.your.fullName' }}</h1>
      <div>
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" name="firstname" required />
        <p>Hint: utilise ngModel and ngModelChange for your inputs</p>
      </div>
      <div>
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>
    </div>
    <div>
      <h1>In my spare time I like to do:</h1>
      <ul>
        <li></li>
      </ul>
      <form #myFormStuff="ngForm" (ngSubmit)="addItem(myFormStuff)">
        <div>
          <label for="item">Item:</label>
          <input type="text" id="item" name="item" ngModel required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: [``],
})
export class Exercise1Component {
  /**
   *  Ex1
   *  - Create 2 signals one with your firstname and one with your lastname
   *  - Create a computed signal that will show the full name (firstname + lastname) and show this in the template, using the form
   *
   *  Ex2
   *  - Create a signal with an array and fill it with the things you like to do in your spare time using the form
   *
   *
   */
  addItem(value: NgForm) {
    // maarten.says: write some more stuff here
  }
}
