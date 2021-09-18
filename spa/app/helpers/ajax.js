export async function ajax(props) {
    let { url, cbSuccess } = props;

    await fetch(url)
    .then(res => res.ok? res.json(): Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Ocurrio un error al acceder a la API";

        document.getElementById('main').innerHTML = `
            <div class="error">
            <p> Error ${err.status}: ${message} </p>
            </div>
        `;
        document.querySelector('.loader').style.display = 'none';

        console.log(err);
    });
}

//El await lo que hace es NO ejecutar la funcion hasta que la funcion fetch se haya cumplido. Debido a que la funcion ajax es asyncrona.
//Cuando estemos en el router, va a esperar para pasar al siguiente bloque de codigo