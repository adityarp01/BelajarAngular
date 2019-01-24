import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { Teman } from '../teman-model';
import { TemansService } from '../temans.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemansService]
})
export class TemanAddComponent implements OnInit {
	
	@ViewChild('inputContact')inputContact: ElementRef;
	@Output() temanAdded = new EventEmitter<Teman>();
	inputInfo: Teman =  new Teman();
	@Input() temanChild: Teman;
	@Input() temanEditParent: Teman;
	
  constructor(private temanServis: TemansService) { }

  ngOnInit() {
  }
  
  tambahTeman(inputEmail: HTMLInputElement){
	//console.log(this.inputInfo);
	//console.log(inputEmail.value);
	//console.log(this.inputContact.nativeElement.value);
	//this.temanAdded.emit(this.inputInfo);
	//this.inputInfo = new Teman();
	
	this.temanAdded.emit(this.temanServis.convertTeman(this.inputInfo));
	this.inputInfo = new Teman();
  }

}
