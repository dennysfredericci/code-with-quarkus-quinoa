import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: any[] = [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main St'
  }, {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '987-654-3210',
    email: 'jane.smith@example.com',
    address: '456 Elm St'
  }];
}
