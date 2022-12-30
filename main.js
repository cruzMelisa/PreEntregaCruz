function cotizar() {
    let nombre = document.getElementById("nombreDuenio").value
    let nombreMascota = document.getElementById("nombreMascota").value
    let edad = document.getElementById("edad").value
    let raza = document.getElementById("raza").value

    let costo = 0
    let intentos = 2
    
if (edad === "" || nombreMascota==="" || raza === "default" || nombre ==="") {
    alert("Debe completar el formulario con todos los datos para poder realizar la cotizacion")
}else

   
    if (edad <= 5 && raza === "Mestizo") {
        costo = 1100
    }
    else if(edad <= 5 && raza !== "Mestizo" && raza !== "default"){
        costo = 1200
    }
    else if(edad >= 5 && raza === "Mestizo"){
        costo = 1250
    }
    else if(edad >= 5 && raza !== "Mestizo" && raza !== "default" ){
        costo = 1350
    }

        if (costo > 0) {
            alert(`el precio del seguro para ${nombreMascota} seria de $${costo}`)
        }
        
        while (intentos > 0 && costo > 0) {

            let numero =Number(prompt("si adivina el numero de la suerte que esta entre 4 y 6 tiene un 50% de Descuento!"))
            
            if (numero === 5) {
                alert(`el precio del seguro para ${nombreMascota} con el descuento aplicado seria de $${costo/2}`)
                break
            }else{
                intentos--
                alert("Intentelo de Nuevo le quedan "+intentos)
                if (intentos===0) {
                alert("se quedo sin intentos el precio se mantiene en" +"$"+ costo)
                }
            }
        }
}