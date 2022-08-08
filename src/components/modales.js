export const mensajesModales = {
  registroExitoso: () => {
    const mensajeRegistro = `
      <div class= "mensaje">
        <i class="ph-envelope"></i>
        <p>Correo de verificación enviado. Por favor revisa tu bandeja de entrada.</p>
      </div>
    `;
    return mensajeRegistro;
  },
  correoYaRegistrado: () => {
    const correoExistente = `
      <div class= "mensaje">
        <i class="ph-warning-circle"></i>
        <p>Correo ya existe. Por favor inicia sesión.</p>
      </div>
    `;
    return correoExistente;
  },
  contraseñaDebil: () => {
    const correoExistente = `
      <div class= "mensaje">
        <i class="ph-warning-circle"></i>
        <p>La contraseña debe contener al menos 6 caracteres.</p>
      </div>
    `;
    return correoExistente;
  },
  errorConfirmar: () => {
    const confirmaCorreo = `
      <div class= "mensaje">
      <i class="ph-warning-circle"></i>
      <p>Por favor revisa tu bandeja de entrada y confirma tu correo</p>
      </div>
    `;
    return confirmaCorreo;
  },
  errorNoRegistrado: () => {
    const errorRegistrate = `
      <div class= "mensaje">
      <i class="ph-warning-circle"></i>
      <p>No estas registrado. Por favor registrate.</p>
      </div>
    `;
    return errorRegistrate;
  },
  errorContraseña: () => {
    const contraseñaErrada = `
      <div class= "mensaje">
      <i class="ph-warning-circle"></i>
      <p>La contraseña que ingresaste no es correcta. Vuelve a intentarlo.</p>
      </div>
    `;
    return contraseñaErrada;
  },
  otrosErrores: (errorfirebase) => {
    const mensajeError = `
      <div class= "mensaje">
      <i class="ph-warning-circle"></i>
      <p>${errorfirebase}</p>
      </div>
    `;
    return mensajeError;
  },

};
