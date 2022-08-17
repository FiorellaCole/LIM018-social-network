import { auth, signOut } from '../firebase.js';
import { crearPost, showFirestorePosts } from '../firestore.js';

export function headerMuro() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const headerMuroDiv = `<header class="muroHeader">
  <img src="images/logo foodies.png" alt="Foodies">
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
<section id="postContainer" class="postContainer"
</section>`;
  const divSeccionCompartir = document.createElement('div');
  divSeccionCompartir.innerHTML = seccionCompartir;
  return divSeccionCompartir;
}

export function addPosts() {
  const postSection = document.getElementById('btnCompartir');
  const categorias = document.getElementById('categorias');
  postSection.addEventListener('click', () => {
    const description = document.getElementById('description');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    crearPost(description.value, categoriaSeleccionada);
    description.value = '';
  });
}

export async function showAllPosts() {
  const postContainer = document.getElementById('postContainer');
  // const querySnapshot = await getPost();
  showFirestorePosts((querySnapshot) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      postContainer.innerHTML += `<div class="posts">
    <div class="headerPost">
    <div class="usuarioPost">
    <img class="imgUsuario" src="${user.fotoPerfil}">
    <h1>${user.username}</h1></div>
    <h2>${post.categoria}</h2>
    </div>
    <p>${post.description}</p>
    <div class="botones">
    <i class="ph-pencil-simple-bold"></i>
    <i class="ph-trash-bold"></i>
    </div>`;
    });
  });
}
