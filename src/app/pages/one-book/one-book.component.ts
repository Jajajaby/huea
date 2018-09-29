import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from "@angular/forms";

import { Books } from "../../interface/books.interface";
import { DatabaseService } from "../../services/database.service";


@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html'
})
export class OneBookComponent implements OnInit {

	@Input() book:Books;

	editForm:FormGroup;

	constructor( 	private formBuilder: FormBuilder,
					private _dbService:DatabaseService, ) { 
		let user = JSON.parse( localStorage.getItem( "user" ) );
	}

	ngOnInit() {
		this.editForm = new FormGroup({
			title: 			new FormControl(this.book.title),
		// this.editForm = this.formBuilder.group({
	 //      	title:		[this.book.title]
			// author: 		['', Validators.required],
			// editorial: 		['', Validators.required],
			// type: 			['', Validators.required],
			// genres: 		['', Validators.required],
			// transaction: 	['', Validators.required],
			// price: 			[''],
			// language: 		['', Validators.required],
			// original: 		['', Validators.required],
			// num_pages: 		['', Validators.required],
			// comment: 		[''],
			// images: 		['']
	    });

	}

// updateData( collection:string, id:string, document:any )
	jj() {
	    // this._dbService.updateData("books", "", this.editForm.value);
	    let credentials = this.editForm.value;
	    console.log( credentials );
  	}

  	clg(){
  		console.log( this.book.id );
  		console.log( this.book.title);

  	}


}
