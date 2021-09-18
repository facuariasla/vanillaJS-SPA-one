export function SearchForm() {
    const d = document;
    
    const $form = document.createElement('form');
    const $input = document.createElement('input');

    $form.classList.add('search-form');
    $input.name = 'search';
    $input.classList.add("searchbar");
    //input semantico 'search'
    $input.type = 'search';
    $input.placeholder = 'Buscar...';
    //para cancelar el autocompletado:
    $input.autocomplete = "off";

    $form.appendChild($input);

    //If que indica que NO se borre la palabra buscada en el buscador 
    if(location.hash.includes('#/search')){
        $input.value = localStorage.getItem('wpSearch');
    }

    //Borra la palabra buscada del localStorage, si el usuario la borra del buscador (del input search).
    d.addEventListener("search", (e) => {
        if(!e.target.matches("input[type='search']"))return false;
        if(!e.target.value) localStorage.removeItem("wpSearch");
    })

    d.addEventListener('submit', (e)=> {
        if(!e.target.matches(".search-form"))return false;
        e.preventDefault();
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })

    return $form;
}