const validation = (data)=>{

    let emailVal = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,35}$/);
    let passVal = new RegExp(/^(?=.*\d).+$/);
    let errors = {};

    if(!data.username){
        errors.username = "debe ingresar un usuario"
    }
    if(!emailVal.test(data.username)){
        errors.username = "el usuario debe ser un correo"
    }

    if(!passVal.test(data.password)){
        errors.password = "la contraseña debe contener un número"
    }
    if(data.password.length<6 || data.password.length>10){
        errors.password = "la contraseña debe tener de 6 a 10 carácteres"
    }
    
    return errors;

}

export default validation;