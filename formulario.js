const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	nacionalidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	domicilio: /^.{6,250}$/,
	escolaridad: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/, 
	idiomas: /^[a-zA-ZÀ-ÿ\s]{1,80}$/, 
	escolaridad__extra: /^[a-zA-ZÀ-ÿ\s]{1,200}$/,
	puestos__anteriores: /^[a-zA-ZÀ-ÿ\s]{4,900}$/,
	practicas__profesionales: /^[a-zA-ZÀ-ÿ\s]{1,300}$/,
	actividades__extracurriculares:/^[a-zA-ZÀ-ÿ\s]{4,300}$/,
	habilidades: /^[a-zA-ZÀ-ÿ\s]{4,400}$/,
	rol__empresa: /^.{4,40}$/,
	puesto__buscado: /^.{4,50}$/,
	empresa__deseada: /^.{4,50}$/,
	password: /^[a-zA-ZÀ-ÿ]{4,15}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const campos = {
	
	nombre: false,
	correo: false,
	telefono: false,
	apellidos: false,
	nacionalidad: false,
	domicilio: false,
	escolaridad: false,
	idiomas: false,
	escolaridad__extra: false,
	puestos__anteriores:  false,
	practicas__profesionales: false,
	actividades__extracurriculares: false,
	habilidades: false, 
	rol__empresa: false,
	puesto__buscado: false,
	empresa__deseada: false

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "nacionalidad":
			validarCampo(expresiones.nacionalidad, e.target, 'nacionalidad');
		break;
		case "domicilio":
			validarCampo(expresiones.domicilio ,e.target,'domicilio');
		break;
		case "escolaridad":
			validarCampo(expresiones.escolaridad ,e.target,'escolaridad');
		break;
		case "idiomas":
		validarCampo(expresiones.idiomas ,e.target,'idiomas');
		break;
		case "escolaridad__extra":
		validarCampo(expresiones.escolaridad__extra ,e.target,'escolaridad__extra');
		break;
		case "puestos__anteriores":
			validarCampo(expresiones.puestos__anteriores ,e.target,'puestos__anteriores');
		break;
		case "practicas__profesionales":
			validarCampo(expresiones.practicas__profesionales ,e.target,'practicas__profesionales');
		break;
		case "actividades__extracurriculares":
			validarCampo(expresiones.actividades__extracurriculares ,e.target,'actividades__extracurriculares');
		break;
		case "habilidades":
			validarCampo(expresiones.habilidades ,e.target,'habilidades');
		break;
		case "rol__empresa":
			validarCampo(expresiones.rol__empresa ,e.target,'rol__empresa');
		break;
		case "puesto__buscado":
			validarCampo(expresiones.puesto__buscado ,e.target,'puesto__buscado');
		break;
		case "empresa__deseada":
		validarCampo(expresiones.empresa__deseada ,e.target,'empresa__deseada');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		/*case "fecha__registro":
			validarCampo(expresiones.fecha__registro, e.target, 'fecha__registro');
		break;*/
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellidos && campos.nacionalidad && campos.domicilio && campos.escolaridad 
		&& campos.idiomas && campos.escolaridad__extra && campos.puestos__anteriores  && campos.practicas__profesionales
		&& campos.actividades__extracurriculares  && campos.habilidades  && campos.rol__empresa  && campos.puesto__buscado
		&& campos.empresa__deseada && campos.correo && campos.telefono && terminos.checked ){
			formulario.reset();
			
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
