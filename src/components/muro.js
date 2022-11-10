/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { auth, signOut } from '../firebase.js';
import {
  crearPost,
  showFirestorePosts,
  deletePost,
  getPost,
  updatePost,
  arrayUnion,
  arrayRemove,
} from '../firestore.js';
import { subirFileStorage } from '../fstorage.js';

export function headerMuro() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const headerMuroDiv = `<header class="muroHeader">
  <a href="#/muro"><img id="foodiesLogo" src="images/logo foodies.png" alt="Foodies"></a>
  <div class="derechaHeader">
    <p id="nombreUsuario">${user.username}</p>
    <a href="#/perfil"><img class="iconoUsuario" src="${user.fotoPerfil}"></a>
    <i id="cerrarSesion" class="ph-sign-out"></i>
  </div>
</header>
<div id="modalEditar" style="display:none"></div>`;

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

export function divCompartir() {
  const seccionCompartir = `<section id="compartir">
  <textarea id="description" placeholder="¿Qué te gustaria compartir?" cols="40" rows="5" required></textarea>
  <div class="botonesCompartir">
  <select id="categorias" class="btn Categorias" required>
    <option value="" selected disabled>Categorias</option>
    <option value="Restaurantes">Restaurantes</option>
    <option value="Recetas">Recetas</option>
    <option value="Streetfood">Streetfood</option>
  </select>
    <div class="seccionCompartir">
    <input type="file" id="añadirImagen">
      <p class= "nombreImagen"></p>
      <label for="añadirImagen"><i class="ph-image-bold"></i></label>
      <button class="btn" id="btnCompartir">Compartir</button>
    </div>
  </div>
</section>
<section id="postContainer" class="postContainer">
</section>`;
  const divSeccionCompartir = document.createElement('div');
  divSeccionCompartir.innerHTML = seccionCompartir;
  return divSeccionCompartir;
}

// function getImageUrl() {
//   const image = document.getElementById('añadirImagen');
//   image.addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     subirFileStorage(file, 'imagePost').then((url) => { const imageUrl = url; return imageUrl; });
//   });
// }

function showImageName(seccionCompartir) {
  const image = document.getElementById('añadirImagen');
  image.addEventListener('change', (e) => {
    const file = e.target.files[0].name;
    const imageName = seccionCompartir.querySelector('.nombreImagen');
    imageName.innerHTML = file;
  });
}

export function addPosts() {
  const seccionCompartir = document.querySelector('.seccionCompartir');
  const postSection = document.getElementById('btnCompartir');
  const categorias = document.getElementById('categorias');
  const image = document.getElementById('añadirImagen');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const imageName = seccionCompartir.querySelector('.nombreImagen');
  showImageName(seccionCompartir);
  postSection.addEventListener('click', () => {
    const file = image.files[0];
    const description = document.getElementById('description');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    if (file === undefined) {
      crearPost(user.fotoPerfil, user.username, description.value, categoriaSeleccionada, [], '');
      description.value = '';
    } else {
      subirFileStorage(file, 'imagePost').then((url) => {
        crearPost(user.fotoPerfil, user.username, description.value, categoriaSeleccionada, [], url);
        description.value = '';
        imageName.innerHTML = '';
      });
    }
  });
}

export function showAllPosts() {
  const postContainer = document.getElementById('postContainer');
  const user = JSON.parse(sessionStorage.getItem('user'));
  showFirestorePosts((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const UsuarioLogeado = user.username === post.user;
      postContainer.innerHTML += `<section class="posts" data-id='${doc.id}'>
      <div class="headerPost">
        <div class="usuarioPost">
          <img class="imgUsuario" src="${post.userphoto}">
          <h1>${post.user}</h1>
        </div>
        <h2 class="categoria">${post.categoria}</h2>
      </div>
      <div class="postBody">
      <div class="image">
        <img class="imgPost" src="${post.imageUrl}">
      </div>
      <p>${post.description}</p>
      </div>
      <hr id="linea">
        <section class="botones">
          <div class="likes">
            <i id ="${doc.id}" class="ph-heart-bold"></i> 
            <p class="contador">${post.likes.length}</p>
          </div>
          ${UsuarioLogeado ? `<div class="botonesUsuario">
          <i data-id ="${doc.id}" class="ph-pencil-simple-bold"></i>
          <i data-id ="${doc.id}" class="ph-trash-bold"></i>
          </div>` : ''}
        </section>
   </section>`;
    });
    setupBotones();
    likes(user.id);
    // getImageUrl();
  });
}

export function setupBotones() {
  const botonesEliminar = document.getElementsByClassName('ph-trash-bold');
  const botonesEditar = document.getElementsByClassName('ph-pencil-simple-bold');
  Array.from(botonesEliminar).forEach((btn) => btn.addEventListener('click', eliminarPost));
  Array.from(botonesEditar).forEach((btn) => btn.addEventListener('click', editarPost));
}

function eliminarPost(e) {
  deletePost(e.target.dataset.id);
}

async function editarPost(e) {
  const doc = await getPost(e.target.dataset.id);
  const post = doc.data();
  const ubicacionModal = document.getElementById('modalEditar');
  ubicacionModal.style.display = 'inline';
  ubicacionModal.innerHTML = `<div class="postEdition">
      <div class="headerPost">
        <div class="usuarioPost">
          <img class="imgUsuario" src="${post.userphoto}">
          <h1>${post.user}</h1>
        </div>
        <select class="categoriasEditar">
          <option value="" selected disabled>${post.categoria}</option>
          <option value="Restaurantes">Restaurantes</option>
          <option value="Recetas">Recetas</option>
          <option value="Streetfood">Streetfood</option>
        </select>
     </div>
      <textarea class="postDescription" cols="40" rows="5">${post.description}</textarea>
      <div class="botonesEditar">
        <button class="ingresar guardar">Guardar</button>
        <button class="ingresar cancelar">Cancelar</button>
      </div>
    </div>`;

  cerrarModalEditar(ubicacionModal);
  updateEditedPost(doc.id, ubicacionModal);
}

function cerrarModalEditar(modalEditar) {
  const ubicacionModal = document.getElementById('modalEditar');
  const botonCerrar = modalEditar.querySelector('.cancelar');
  botonCerrar.addEventListener('click', () => {
    ubicacionModal.style.display = 'none';
  });
}

function updateEditedPost(postId, modalEditar) {
  const botonGuardar = modalEditar.querySelector('.guardar');
  const categoria = modalEditar.querySelector('.categoriasEditar');
  botonGuardar.addEventListener('click', () => {
    const postCategoria = categoria.options[categoria.selectedIndex].value;
    const description = modalEditar.querySelector('.postDescription').value;
    const postData = {
      categoria: postCategoria,
      description,
    };
    // eslint-disable-next-line no-param-reassign
    updatePost(postId, postData).then(() => { modalEditar.style.display = 'none'; });
  });
}

function likes(userId) {
  const btnsLike = document.querySelectorAll('.ph-heart-bold');
  btnsLike.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const postId = e.target.id;
      getPost(postId).then((doc) => {
        const post = doc.data();
        let newData;
        if (post.likes.includes(userId)) {
          newData = { likes: arrayRemove(userId) };
          btn.classList.toggle('ph-heart-fill');
          btn.classList.toggle('ph-heart-bold');
        } else {
          newData = { likes: arrayUnion(userId) };
          btn.classList.toggle('ph-heart-bold');
          btn.classList.toggle('ph-heart-fill');
        }
        updatePost(postId, newData);
      });
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

// export function showPostsByCategories() {
//   const allCategories = document.getElementById('todo');
//   const restaurantes = document.getElementById('restaurantes');
//   const recetas = document.getElementById('recetas');
//   const streetfood = document.getElementById('streetfood');
//   allCategories.addEventListener('click', () => {
//     showAllPosts();
//   });
//   restaurantes.addEventListener('click', () => {
//     showAllPosts()
//   })

// }
