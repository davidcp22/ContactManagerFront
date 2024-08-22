import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,  
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  imports: [RouterModule , CommonModule ]  
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}


  ngOnInit(): void {
    this.loadContacs()
  }

  deleteContact(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      // this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
    this.loadContacs();

  }

  loadContacs(){
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
