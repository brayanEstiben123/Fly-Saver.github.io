//inicio-----------------------
function pruebaContinuar(){
    alert("¡Bienvenido, podras realizar comprar con FLY-SAVER!");
    confirmacion = document.getElementById("confirmacion").value;
    window.location.href = "https://www.youtube.com/watch?v=X1e724AA-wU"; 

}
//Para mostar mediante el MOdal los datos del usuario en el FORMULARIO HORIZONTAL
document.getElementById('mostrarDatosBtn').addEventListener('click', function() {
    var usuario = document.getElementById('dato1').value;
    var Fecha_Salida= document.getElementById('dato2').value;
    var Fecha_Llegada= document.getElementById('dato3').value;
    var Pasajeros= document.getElementById('dato4').value;
    var kids= document.getElementById('dato5').value;

    if(MostrarUsuario && MostrarPartida && MostrarLlegada && Pasajeros && Ninos){
    document.getElementById('MostrarUsuario').textContent = 'Su Nombre de Usuario es: ' + usuario;
    document.getElementById('MostrarPartida').textContent = 'La fecha de Salida elegida es: ' + Fecha_Salida;
    document.getElementById('MostrarLlegada').textContent = 'La fecha de Llegada es: ' + Fecha_Llegada;
    document.getElementById('Pasajeros').textContent = 'La cantidad de Pasajeros es: ' + Pasajeros;
    document.getElementById('Ninos').textContent = 'La cantidad de Niños es: ' + kids;
    }else{
        alert("Todos los datos deben estar LLENOS!");
        return;
    }    
    var Mostrando_Modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    Mostrando_Modal.show();
});
//Registro-----------------------
document.getElementById('registro-form').addEventListener('submit', function(event) {
    const password = document.getElementById('contraseña').value;
    const confirmPassword = document.getElementById('confirmar-contraseña').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault(); // Evita el envío del formulario
    }
});
