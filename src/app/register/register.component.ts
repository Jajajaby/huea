import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

// INTERFACE
import { Users } from "../interface/books.interface";

// SERVICES
import { DatabaseService } from "../services/database.service";
import { DateService } from '../services/date.service';

import { AngularFireAuth } from 'angularfire2/auth';

// Sweet Alert
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

	form:FormGroup;
	register_pages:string = "page_1"; //Muestra la primera página del registro por defecto
	categories:Array<string>=["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];
	selected_categories:Array<string> = [];

	constructor( 	private _dbService:DatabaseService,
								private _dateService:DateService,
								private afAuth: AngularFireAuth,
								public router: Router ) { }

	ngOnInit() {
		this.form = 		new FormGroup({
			name: 				new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			last_name1: 	new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			last_name2: 	new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			rut: 					new FormControl(undefined, [Validators.required, Validators.pattern('^[.0-9]{6,11}\-?[kK0-9]{1}$')]),
			phone: 				new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}$'),  Validators.minLength(8), Validators.maxLength(8)]),
			// TODO: Validar los géneros 
			categories: 	new FormControl([], Validators.required),
			email: 				new FormControl(undefined, [Validators.required, Validators.email, Validators.minLength(8)]),
			password: 		new FormControl(undefined, Validators.required),
			password2: 		new FormControl(undefined, Validators.required),
			conditions: 	new FormControl(false, Validators.required),
		}, { validators: this.areEquals( 'password', 'password2') });
	}

	// Verifica que ambas contraseñas ingresadas sean iguales
	areEquals(input1:string, input2:string){
		return (group: FormGroup) => {
			let pass1 = group.controls[input1].value;
			let pass2 = group.controls[input2].value;

			if( pass1 === pass2 ){
				return null;
			}

			return {
				areEquals: true
			}
		}
	}

	// Guarda un usuario nuevo, en DB
	saveUser(){
		if (this.form.valid) {
			let form=this.form.value;

			this.afAuth.auth.createUserWithEmailAndPassword( form.email, form.password )
				.then( (resp:any) => {

					// Guarda el form para validarlo
					const USER:Users = {
						uid: 					resp.user.uid,
						rut: 					form.rut,
						name: 				form.name.toLowerCase(),
						last_name1: 	form.last_name1.toLowerCase(),
						last_name2: 	form.last_name2.toLowerCase(),
						email: 				form.email.toLowerCase(),
						categories:		this.selected_categories, 
						phone: 				form.phone,
						google:      	false,
						status:				true,
						role:					'normal',
						created_date: this._dateService.actual_date()
					};

					if( !this.form.value.conditions ){
						swal("Importante", "Debe aceptar los términos y condiciones", "warning");
						return;
					}

					// Guarda al usuario en DB
					this._dbService.addDataIdCustom('users', USER.uid, USER)
						.then( () => {
							console.log("Se guardó el usuario");
							swal('Cuenta creada con éxito', USER.email, 'success');
							this.afAuth.auth.signOut();
							this.router.navigate([ '/login' ]);
						})
					.catch( (err) => {
						console.log("Error al guardar al usuario", err);
						swal("Error", "No se ha podido guardar el nuevo usuario", "warning");
					})
				})
				.catch( (err) => console.error('ERROR: Crear usuario en firebase', err) );
		}else{
			console.log("No funcionó")
		}
	}

	// Agrega una categoría al cuadro de categorías favoritas del usuario
	addCategory(index:number){
		this.selected_categories.push(this.categories[index]);
		this.categories.splice(index, 1);				
		// TODO: Ordenar por index
	}

	// Remueve una categoría del cuadro de categorías favoritas del usuario
	removeCategory(index:number){
		this.categories.push(this.selected_categories[index]);
		this.selected_categories.splice(index, 1);				
	}

	// Cambia el fondo del register dependiendo de en qué etapa se encuentre
	getBackground(page) { 
		switch (page) {
		  case 'page_1':
			return 'url(../../assets/images/background/book-5.jpg)';
		  case 'page_2':
			return 'url(../../assets/images/background/book-3.jpg)';
		  case 'page_3':
			return 'url(../../assets/images/background/book-1.jpg)';
		}
	  }
}
