export function logInForm() {
    const logInDiv =
        `<div id="login" class="cajaInterna2">
 <form id="loginForm">

<div class="seccionIngreso">
<input type="text" id="correoIngreso" class="datosIngreso" placeholder="Correo electrónico" required>
<i class="ph-envelope"></i>
</div>

<div class="seccionIngreso">
<input type="password" id="claveIngreso" class="datosIngreso" placeholder="Contraseña" required>
<i id="botonContraseña" class="ph-eye-closed"></i>
</div>

<button type="submit" id="botonIngresar" class="iniciarSesion">Ingresar</button>

<p class="text">o ingresa con:</p>

<div class="logosInicio">
<img id="facebook" src="imagenes/FacebookOriginal.png">
<img id="google" src="imagenes/GoogleOriginal.png">
</div>

<p class="text">¿No tienes una cuenta? <a id="registrate" href="#/registro"> Regístrate</a></p> 
</form>
</div>`;
    return formIngreso;
};