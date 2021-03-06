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

// Data
import { CATEGORIES } from '../../data/categories.data';
import  * as firebase from 'firebase';

// Inicializa los plugins
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

	form:FormGroup;
	register_pages:string = "page_1"; //Muestra la primera página del registro por defecto
	categories:any[] = [...CATEGORIES];
	selected_categories:any[] = [];
	submit1:boolean = false;
	submit2:boolean = false;
	submit3:boolean = false;

	constructor( 	private _dbService:DatabaseService,
								private _dateService:DateService,
								private afAuth: AngularFireAuth,
								public router: Router ) {
		if( JSON.parse(localStorage.getItem('session')).session ) router.navigate(['/']);
	}

	ngOnInit() {
		init_plugins();
		this.form = 		new FormGroup({
			name: 				new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			last_name1: 	new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			last_name2: 	new FormControl(undefined, [Validators.required, Validators.pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), Validators.minLength(2)]),
			rut: 					new FormControl(undefined, [Validators.required, Validators.pattern('^[.0-9]{6,11}\-?[kK0-9]{1}$')]),
			// phone: 				new FormControl('', [Validators.pattern('^[0-9]{8}$'),  Validators.minLength(8), Validators.maxLength(8)]),
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

		this.submit1 = true;
		this.submit2 = true;
		this.submit3 = true;

		if (this.form.valid) {
			let form=this.form.value;
		
			if( form.categories.length > 1 ) {
				console.log(form.categories);
			}

			this.afAuth.auth.createUserWithEmailAndPassword( form.email, form.password )
				.then( (resp:any) => {

					// FIXME: Esto hace que se seleccione un emoji aleatorio para la imagen del nuevo usuario.
					let num = Math.floor((Math.random() * 47) + 1);
					let path_img = "../assets/images/emojis/emoji("+num+").png";

					let user:any;


					// Guarda el form para validarlo
					if( form.categories.length > 1 ) { // si es mayor a uno es mobile.
						user = {
							uid: 					resp.user.uid,
							rut: 					form.rut,
							name: 				form.name.toLowerCase(),
							last_name1: 	form.last_name1.toLowerCase(),
							last_name2: 	form.last_name2.toLowerCase(),
							email: 				form.email.toLowerCase(),
							genres:		form.categories, 
							// phone: 				form.phone,
							firtSession:  false,
							google:      	false,
							status:				true,
							role:					'normal',
							created_date: this._dateService.actual_date(),
							img: 					path_img
						};
					} else {
						user = {
							uid: 					resp.user.uid,
							rut: 					form.rut,
							name: 				form.name.toLowerCase(),
							last_name1: 	form.last_name1.toLowerCase(),
							last_name2: 	form.last_name2.toLowerCase(),
							email: 				form.email.toLowerCase(),
							genres:		this.selected_categories, 
							// phone: 				form.phone,
							firtSession:  false,
							google:      	false,
							status:				true,
							role:					'normal',
							created_date: this._dateService.actual_date(),
							img: 					path_img
						};
					}

					if( !this.form.value.conditions ){
						swal("Importante", "Debe aceptar los términos y condiciones", "warning");
						return;
					}

					// Guarda al usuario en DB
					this._dbService.addDataIdCustom('users', user.uid, user)
						.then( () => {
							console.log("Se guardó el usuario");
							swal('Cuenta creada con éxito', user.email, 'success');
							this.afAuth.auth.signOut();
							this.router.navigate([ '/login' ]);

							// Envía un correo de verificación al usuario que se acaba de registrar
							var user = firebase.auth().currentUser;
							user.sendEmailVerification().then(function() {
								console.log("Email de verificación enviado")
							}).catch(function(error) {
								console.log("No se ha podido enviar el email de verificación enviado")
 							});

						})
					.catch( (err) => {
						console.log("Error al guardar al usuario", err);
						swal('Cuenta creada con éxito','', 'success');
						this.router.navigate([ '/login' ]);
					})
				})
				.catch( (err) => console.error('ERROR: Crear usuario en firebase', err) );
		}else{
			swal("Error", "Debe llenar todos los campos del formulario", "warning");
		}		
	}

	addCategory(index:number){
		this.selected_categories.push(this.categories[index]);
		this.categories.splice(index, 1);		
	}

	removeCategory(index:number){
		this.categories.push(this.selected_categories[index]);
		this.selected_categories.splice(index, 1);				
	}


	nextPage(page:string){
		let form = this.form;
		switch( page ) {
			case 'page_2':
				this.submit1 = true;
				if( form.controls['name'].valid && form.controls['last_name1'].valid && form.controls['last_name2'].valid && 	form.controls['rut'].valid)
					this.register_pages = 'page_2';

				
				break;
			case 'page_3':
				this.submit2 = true;
				if( this.selected_categories.length >= 3 || this.form.value.categories.length >= 3 )
					this.register_pages = 'page_3';
				break;
		}
	}
	// Cambia el fondo del register dependiendo de en qué etapa se encuentre
	getBackground(page:string) { 
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
