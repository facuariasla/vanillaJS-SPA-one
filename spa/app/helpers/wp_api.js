//wordpress api js
//https://developer.wordpress.org/rest-api/

const NAME = "css-tricks",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    POST = `${API_WP}/posts`,
    CATEGORIES = `${API_WP}/categories`,
    SEARCH = `${API_WP}/search?_embed&search=`;
//Aca puedo crear distintas constantes que involucran parte de ese JSON
// Recordar despues exportarlos en el codigo debajo.
  
//Recordar como exportar en TYPESCRIPT, es distinto a JAVASCRIPT

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH
}

//Si el nombre de la propiedad del objeto, es igual al valor, se puede escribir 1 vez.


