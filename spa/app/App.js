import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";


export function App (){
    const $root = document.getElementById('root');

    //limpia el contenido
    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();   

    //PARA FORZAR UN ERORR y VER EL 404:
    // ajax({
    //     url: "no-valida",
    //     cbSuccess: () => {}
    // })

}

