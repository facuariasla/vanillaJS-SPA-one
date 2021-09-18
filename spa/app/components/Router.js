import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main");

  let { hash } = location;
  console.log(hash);

  // Para asegurarnos que el cnotenido no se quede ahi; antes de entrar a las anidaciones, es decir, la carga dinamica de las vistas (o cards), lo hacemos igualando a NULL nuestros posts, nos aseguramos que cargue limpiamente (?)
  //Se trata de una 'buena practica'
  $main.innerHTML = null;

  //Esto equivale a lo que hizo marce, pero marce lo optimizo (?)
  //Se crea un objeto, o ifs, o switchs de todas las 'rutas' que se pueden encarar desde el inicio. Links internos.

  if(!hash || hash === "#/"){
    await ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
      let html = "";
      posts.forEach((post) => (html += PostCard(post)));
      // d.querySelector(".loader").style.display = "none";
      $main.innerHTML = html;
    },
  });
  // console.log(api.POST);

  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if(!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        if(search.length === 0){
          html = `
            <p class="error">
              No existen resultados de búsqueda para el término
              <mark>${query}</mark>
            </p>
          ;`
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }
        $main.innerHTML = html;
      }
    });

  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion de Contacto</h2>";
    // d.querySelector(".loader").style.display = "none";
  } else {
      await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });

  } 
  d.querySelector(".loader").style.display = "none";


}

//Al ser ASYNC el router, y await el ajax, no se ejecuta lo siguiente (el display none del loader) hasta que se termine de ejecutar la peticion (o sea cargar la info), por eso es que no desaparece el loader en el home