import { auth, signOut } from '../firebase.js';
import { crearPost, OngetTask } from '../firestore.js';

export function headerMuro() {
  const headerMuroDiv = `<header class="muroHeader">
  <img src="images/logo foodies.png" alt="Foodies">
  <div class="derechaHeader">
    <p id="nombreUsuario"></p>
    <a href="#/perfil"><img class="iconoUsuario" src=""></a>
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

export function categorias() {
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
  <textarea id="cuadroTexto" placeholder="¿Qué te gustaria compartir?" cols="40" rows="5"></textarea>
  <div class="botonesCompartir">
  <select class="btn Categorias">
    <option value="" selected disabled>Categorias</option>
    <option value="Restaurantes">Restaurantes</option>
    <option value="Recetas">Recetas</option>
    <option value="Streetfood">Streetfood</option>
  </select>
  <input type="file" id="añadirImagen">
  <label for="añadirImagen"><i class="ph-image-bold"></i></label>
  <button class="btn">Compartir</button>
  </div>
</section>`;
  const divSeccionCompartir = document.createElement('div');
  divSeccionCompartir.innerHTML = seccionCompartir;
  return divSeccionCompartir;
}

export const getPosts = async () => {
  const taskContainer = document.getElementById('cuadroTexto');
  OngetTask((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      // eslint-disable-next-line no-console
      console.log(doc.data());
      const dataPosts = doc.data();
      html += `
        <div class="text">
          <p>${dataPosts.description}</p>
        </div>
    `;
    });
    taskContainer.innerHTML = html;
  });
};

export const addHomePageEvents = () => {
  const taskForm = document.getElementById('cuadroTexto');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = taskForm['task-description'];

    crearPost(description.value);
    taskForm.reset();
  });
};
