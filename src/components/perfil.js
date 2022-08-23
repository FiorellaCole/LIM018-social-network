export function perfil() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const perfilUsuario = `<section class="profile">
  <section class="portada"> 
    <div class="userImagenes">
     <img src="${user.fotoPortada}" class="userPortada">
     <img src="${user.fotoPerfil}" class="userFoto">
    </div>
    <div class="userTitle">
      <h1 class="userName">${user.username}</h1>
      <p class="ubicacion">${user.ubicacion} </p>
    </div> 
    </section>
    <section class="userInfo">
        <p id="dob">${user.dob}</p>
        <p id="description">${user.descripcion}</p>
    </section>
    </section>`;
  const divPerfil = document.createElement('div');
  divPerfil.innerHTML = perfilUsuario;

  return divPerfil;
}
