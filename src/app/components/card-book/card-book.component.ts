import { Component, OnInit, Input } from '@angular/core';

// INTERFACE
import { Books } from '../../interface/books.interface';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {

	@Input() type:string; // el tipo que se mostrara en pantalla
	@Input() booksHome:any[]; // Trae los books desde el home
	
	books:any[]; // array con los books a mostrar
	loading:boolean = true; // muestra y esconde un loading
	
	book_modal: Books = {
		author: 		'', 
		title: 			'', 
		editorial: 		'', 
		type: 			'', 
		genres: 		[], 
		language: 		'', 
		num_page: 		0,
		original: 		false, 
		transaction:	'', 	
		user: 			'', 
		id: 			'', 
		comment: 		'', 
		price: 			0, 
		images: 		[]
	};

	constructor() {}

	ngOnInit() {
		setTimeout( () => { 
			if( this.type === 'all' ){
				this.loading = false;
				this.books = this.booksHome;
			}else {
				let aux = [];

				for(let book of this.booksHome){
					if( book.transaction ===  this.type ) aux.push(book);
				}
				this.loading = false;
				this.books = aux;
			}
		}, 2000);
 	}
}
