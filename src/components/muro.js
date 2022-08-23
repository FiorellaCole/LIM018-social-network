import { auth, signOut } from '../firebase.js';
import { crearPost, showFirestorePosts, deletePost, getPost, updatePost } from '../firestore.js';

export function headerMuro() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const headerMuroDiv = `<header class="muroHeader">
  <a href="#/muro"><img id="foodiesLogo" src="images/logo foodies.png" alt="Foodies"></a>
  <div class="derechaHeader">
    <p id="nombreUsuario">${user.username}</p>
    <a href="#/perfil"><img class="iconoUsuario" src="${user.fotoPerfil}"></a>
    <i id="cerrarSesion" class="ph-sign-out"></i>
  </div>
</header>`;

  const divHeaderMuro = document.createElement('div');
  divHeaderMuro.innerHTML = headerMuroDiv;
  return divHeaderMuro;
}

export function cerrarSesion() {
  const salir = document.getElementById('cerrarSesion');
  salir.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        window.location.hash = '#/inicio';
      }).catch((error) => {
        console.log(error);
      });
  });
}

export function divCategorias() {
  const navegadorCategorias = ` <nav class="categorias">
  <ul class="listaCategorias" >
    <li id="todo"><img src="images/todo.png">Todo</li>
    <li id="restaurantes"><img src="images/restaurantes.png">Restaurantes</li>
    <li id="recetas"><img src="images/recetas.png">Recetas</li>
    <li id="streetfood"><img src="images/streetfood.png">Streetfood</li>
  </ul>
  </nav>`;
  const divCategoriasMuro = document.createElement('div');
  divCategoriasMuro.innerHTML = navegadorCategorias;
  return divCategoriasMuro;
}
export function divCompartir() {
  const seccionCompartir = `<section id="compartir">
  <textarea id="description" placeholder="¿Qué te gustaria compartir?" cols="40" rows="5"></textarea>
  <div class="botonesCompartir">
  <select id="categorias" class="btn Categorias">
    <option value="" selected disabled>Categorias</option>
    <option value="Restaurantes">Restaurantes</option>
    <option value="Recetas">Recetas</option>
    <option value="Streetfood">Streetfood</option>
  </select>
  <div class="seccionCompartir">
  <input type="file" id="añadirImagen">
  <label for="añadirImagen"><i class="ph-image-bold"></i></label>
  <button class="btn" id="btnCompartir">Compartir</button>
  </div>
  </div>
</section>
<section id="postContainer" class="postContainer">
<div id="modalEditar" style="display:none">jaja</div>
</section>`;
  const divSeccionCompartir = document.createElement('div');
  divSeccionCompartir.innerHTML = seccionCompartir;
  return divSeccionCompartir;
}

export function addPosts() {
  const postSection = document.getElementById('btnCompartir');
  const categorias = document.getElementById('categorias');
  const user = JSON.parse(sessionStorage.getItem('user'));
  postSection.addEventListener('click', () => {
    const description = document.getElementById('description');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    crearPost(user.fotoPerfil, user.username, description.value, categoriaSeleccionada);
    description.value = '';
  });
}

function eliminarPost(e) {
  deletePost(e.target.dataset.id);
}

async function editarPost(e) {
  const doc = await getPost(e.target.dataset.id);
  const post = doc.data();
  const postContainer = document.getElementById('postContainer');
  console.log(postContainer);
  // const ubicacionModal = postContainer.querySelector('#modalEditar');
  // console.log(ubicacionModal);
  // ubicacionModal.style.display = 'inline';
  // ubicacionModal.innerHTML = `<div class="postEdition">
  //   <div class="headerPost">
  //   <div class="usuarioPost">
  //   <img class="imgUsuario" src="${post.userphoto}">
  //   <h1>${post.user}</h1></div>
  //   <h2>${post.categoria}</h2>
  //   </div>
  //   <p>${post.description}</p>
  //   <button>Guardar</button>
  //   </div>`;
}

export function setupBotones() {
  const botonesEliminar = document.getElementsByClassName('ph-trash-bold');
  const botonesEditar = document.getElementsByClassName('ph-pencil-simple-bold');
  Array.from(botonesEliminar).forEach((btn) => btn.addEventListener('click', eliminarPost));
  Array.from(botonesEditar).forEach((btn) => btn.addEventListener('click', editarPost));
}

export function showAllPosts() {
  const postContainer = document.getElementById('postContainer');
  showFirestorePosts((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const user = JSON.parse(sessionStorage.getItem('user'));
      const UsuarioLogeado = user.username === post.user;
      postContainer.innerHTML += `<div class="posts" data-id='${doc.id}'>
    <div class="headerPost">
    <div class="usuarioPost">
    <img class="imgUsuario" src="${post.userphoto}">
    <h1>${post.user}</h1></div>
    <h2>${post.categoria}</h2>
    </div>
    <p>${post.description}</p>
    ${UsuarioLogeado ? `<div class="botones">
    <i data-id ="${doc.id}" class="ph-pencil-simple-bold"></i>
    <i data-id ="${doc.id}" class="ph-trash-bold"></i>
    </div>` : ''}</div>`;
    });

    setupBotones();
  });
}
