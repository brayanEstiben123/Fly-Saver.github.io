//inicio-----------------------
function pruebaContinuar(){
    alert("¡Bienvenido, podras realizar comprar con FLY-SAVER!");
    confirmacion = document.getElementById("confirmacion").value;
    window.location.href = "https://www.youtube.com/watch?v=X1e724AA-wU"; 

}
//Registro-----------------------
document.getElementById('registro-form').addEventListener('submit', function(event) {
    const password = document.getElementById('contraseña').value;
    const confirmPassword = document.getElementById('confirmar-contraseña').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault(); // Evita el envío del formulario
    }
});
