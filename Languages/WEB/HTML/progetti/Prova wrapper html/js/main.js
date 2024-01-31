function queueNext(array, obj){
    array.push(obj)
    return array.shift()
}
var domande = [
    {
        Testo : "D1",
        Risposte : [
            "R1", "R2"
        ]
    },
    {
        Testo : "D2",
        Risposte : [
            "R1", "R2", "R3"
        ]
    },
    {
        Testo : "D3",
        Risposte : [
            "R1"
        ]
    }
]
console.log(domande[0].Testo)
queueNext(domande, domande[0])
console.log(domande[0].Testo)
document.querySelector("#buttonTest").value = "ciaos"
function attento(){
    alert("attento");
}
//document.body
//document.body.innerHTML = JSON.stringify(domande)

/*
    json.stringify(oggetto javascript) -> stringa json
    json.parse(stringa in json) -> oggetto javascript
    quindi
    json.parse(json.stringify(oggetto)) restituisce una copia dell'oggetto

    anonymous function syntax
    function(params){
        body
    }
    arrow function syntax
    (parameters)=>{body}
    se deve solo ritornare togli parentesi graffe e return,
    metti solo il valore

    arrow function minima
    parameter=>returnVal

    array.map(forEachObj=>quello che vuoi)
    versione estesa
    array.map(function(obj){
        return obj*2;
    })

    funzione filter
    array.filter(function(num){
        return Number.isInteger(num) && num>0;
    })
    alt
    array.filter(num=>Number.isInteger(num)&&num>0);

    destructuring
    const {field1 : myVar1, field2 : myVar2} = objWFields

    stringVar.indexOf(stringPiece) restituisce la posizione nella stringa in cui trova il coso
    stringVar.substring(ind1, ind2) dà la stringa in mezzo a quelle posizioni estremo2 escluso
    stringVar.replace(wordToReplace, word) self explanatory
    stringVar.toUpperCase()
    stringVar.lenght
    obj.join(stringToReplaceComma or null) returns string containing elements separated by comma
    obj.toString() same thing but comma and space
    
    document.querySelector("#thing") cerca thing basandosi su class o id. restituisce un
    oggetto -> proprietà value = stringa.
    parseInt(stringa)

    (function(){body}()) immediately invoked function expression
    alle proprietà di CSS con il carattere - per separare le parole si accede tramite
    dot notation e camel casing. Ex: background-repeat diventa backgroundRepeat
*/
