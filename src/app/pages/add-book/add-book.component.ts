import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

// Angularfire2
import { AngularFireStorage } from 'angularfire2/storage';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

	public book:Books;

	nuevo:boolean = false;
	id:string;

	constructor( private _booksService:BooksService,
				 	 private router:Router,
					 private activatedRoute:ActivatedRoute,
					 private storage: AngularFireStorage 
				 ) { 

		// Observable
		this.activatedRoute.params
			.subscribe(parametros=>{
				this.id = parametros['id']
				
			});
	}

	ngOnInit() {
	}

	








	uploadFile(event) {
		const file = event.target.files[0];

		const separatedFile = file.name.split('.');
		const extension = separatedFile[separatedFile.length - 1];

		const typeValid = ['jpg', 'jpeg', 'png'];

		if( typeValid.indexOf( extension ) >= 0 ){
			const filePath = file.name;

			// forma de generar el codigo (nombre)
			//let code = `name-email-${new Date().toString() }`;
			//'harrypotter-mati@mati.com-4232452' (ejemplo de como quedaria)
			
			const ref = this.storage.ref('images/'+ filePath);
			ref.put(file);
		}else {
			console.log('Tipo de imagen no valido');
		}
	 }

}

				