import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  x;
  data = [
    { name: 'product 1', id: '1', price: 'INR 30', status: 'pending' },
    { name: 'product 2', id: '2', price: 'INR 90', status: 'active' },
  ];
  name = 'Angular';

  countries = [
    { name: 'India' },
    { name: 'Europe' },
    { name: 'Japan' },
    { name: 'Australia' },
    { name: 'America' },
    { name: 'China' },
  ];
  trackbyIndex(index, obj) {
    console.log(index, obj);
    return index;
  }
  updateStatus(cStatus, cID) {
    console.log(cStatus, cID);
  }
}
