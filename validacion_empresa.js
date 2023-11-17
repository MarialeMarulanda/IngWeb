/*------------------------------------------------------------------------/-/-/-/-/-/*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

	giro__empresarial: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    nombre__empresa: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
	correo__empresa:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono__empresa: /^\d{7,14}$/, // 7 a 14 numeros.
	propietario:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	rfc__empresa:  /^.{4,50}$/,
    numero__empleados: /^\d{1,14}$/,
    certificaciones: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
    afiliaciones: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
	domicilio__fiscal: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
    vacantes:/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/

}

const campos = {
	
	giro__empresarial: false,
    nombre__empresa: false,
	correo__empresa: false,
	telefono__empresa: false,
	propietario: false,
	rfc__empresa: false,
    numero__empleados: false,
    certificaciones: false,
    afiliaciones: false,
	domicilio__fiscal: false,
    vacantes: false
}

const validarformulario = (e) => {
	switch (e.target.name) {
		case "giro__empresarial":
			validarCampo(expresiones.giro__empresarial ,e.target,'giro__empresarial');
		break;
		case "nombre__empresa":
			validarCampo(expresiones.nombre__empresa ,e.target,'nombre__empresa');
		break;
		case "domicilio__fiscal":
			validarCampo(expresiones.domicilio__fiscal ,e.target,'domicilio__fiscal');
		break;
		case "correo__empresa":
			validarCampo(expresiones.correo__empresa, e.target, 'correo__empresa');
		break;
		case "telefono__empresa":
			validarCampo(expresiones.telefono__empresa, e.target, 'telefono__empresa');
		break;
		case "numero__empleados":
			validarCampo(expresiones.numero__empleados, e.target, 'numero__empleados');
		break;
		case "afiliaciones":
			validarCampo(expresiones.afiliaciones, e.target, 'afiliaciones');
		break;
		case "vacantes":
			validarCampo(expresiones.vacantes, e.target, 'vacantes');
		break;
		case "propietario":
			validarCampo(expresiones.propietario, e.target, 'propietario');
		break;
		case "rfc__empresa":
			validarCampo(expresiones.rfc__empresa, e.target, 'rfc__empresa');
		break;
		case "certificaciones":
			validarCampo(expresiones.certificaciones ,e.target,'certificaciones');
		break;
		
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
	input.addEventListener('keyup', validarformulario);
	input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const terminos = document.getElementById('terminos');
	if(campos.nombre__empresa && campos.rfc__empresa && campos.giro__empresarial && campos.domicilio__fiscal
         && campos.propietario && campos.numero__empleados && campos.afiliaciones && campos.certificaciones 
         && campos.vacantes && campos.correo__empresa && campos.telefono__empresa
         && terminos.checked ){
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