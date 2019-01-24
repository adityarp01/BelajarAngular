import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactUsModel } from './contact-us.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {	
	contactForm: FormGroup;
	
  constructor() { }

  ngOnInit() {
		this.contactForm = new FormGroup({
		username: new FormControl(null, [Validators.required]),
		usermail: new FormControl(null, [Validators.required]),
		usermsg : new FormControl(null, [])
		});		
	}	
	kirim(){ 
		const contactUsModel = new ContactUsModel();
		
		contactUsModel.userMail = this.contactForm.get('usermail').value;
		contactUsModel.userName = this.contactForm.get('username').value;
		contactUsModel.userMsg = this.contactForm.get('usermsg').value;
	
		console.log(contactUsModel);
	}
}
	
