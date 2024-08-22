// src/app/contact-form/contact-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  standalone: true,  
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  imports: [FormsModule] 
})
export class ContactFormComponent implements OnInit {
  contact: any = {};  // Define the contact object
  isEditMode: boolean = false;  // Define isEditMode

  constructor(private route: ActivatedRoute, private router: Router , private contactService: ContactService) {}

  ngOnInit(): void {
    // Check if we are in edit mode
    this.route.params.subscribe(params => {
      if (params['id']) {
        
        this.contactService.getContact(params['id']).subscribe(contact => this.contact = contact);
        this.isEditMode = true;
      } else {
        this.isEditMode = false;
      }
    });
  }

  saveContact(): void {
    if (this.isEditMode) {
      this.contactService.updateContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);

      });
    } else {
      this.contactService.addContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
