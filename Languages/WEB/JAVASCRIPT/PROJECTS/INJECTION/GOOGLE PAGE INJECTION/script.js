const searchBar = document.getElementById('APjFqb');
const form = document.getElementsByTagName('form')[0];

const inputsArray = ['horny', 'not horny', 'a secret third thing'];

function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}

function lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1;
}
    
var i=0;
const SEARCH_TIME = 10;
const SLOWEST_SEARCH_INTERVAL = .3;
const FASTEST_SEARCH_INTERVAL = .0001;
const AVERAGE_SEARCH_TIME = .9;

function randomFromArray(array){
    let index = Math.round(Math.random()*(array.length-1));
    return array[index];
}

;(async function(){
    var timePassed = 0;
    let startTime = Date.now() / 1000;
    let submitted = false;
    while(timePassed <= SEARCH_TIME){
        timePassed = (Date.now()/1000) - startTime;

        /*x : 1 = timePassed : SEARCH_TIME*/
        let alpha = timePassed / SEARCH_TIME;
        currentSearchInterval = lerp(SLOWEST_SEARCH_INTERVAL, FASTEST_SEARCH_INTERVAL, alpha);
        searchBar.value = inputsArray[i];
        i = (i+1) % inputsArray.length;
        
        if ((timePassed >= SEARCH_TIME-AVERAGE_SEARCH_TIME) && !submitted){
            searchBar.value = randomFromArray(inputsArray);
            submitted = true;
            form.submit();
        }
        await sleep(currentSearchInterval);
    }
    /*
        >le cose cercate cambiano lentamente
        >poi velocemente
        >input cambiato a qualcos'altro e poi il form viene inviato
        >cerchio rosso si restringe su immagini
        >si apre "immagini"
        >le immagini iniziano a cambiare in ordine ogni secondo, pushando via via nuove immagini delle persone nell'array
    */
})();