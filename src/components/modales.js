export const mensajesModales = {
  registroExitoso: () => {
    const mensajeRegistro = `
      <div class= "mensaje" id="registroExitoso">
        <i class="ph-envelope"></i>
        <p>Correo de verificación enviado. Por favor revisa tu bandeja de entrada.</p>
      </div>
    `;
    return mensajeRegistro;
  },
  errorConfirmar: () => {
    const confirmaCorreo = `
      <div class= "mensaje" id="confirmaCorreo">
      <i class="ph-warning-circle"></i>
      <p>Por favor revisa tu bandeja de entrada y confirma tu correo</p>
      </div>
    `;
    return confirmaCorreo;
  },

};
