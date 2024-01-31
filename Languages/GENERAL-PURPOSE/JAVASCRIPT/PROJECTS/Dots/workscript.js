const STEP = 3

let wDown = false
let sDown = false
let aDown = false
let dDown = false

let uniqueId = Math.round(Math.random()*10000).toString();

let point = {x: window.innerWidth/2, y: window.innerHeight/2, id: uniqueId}







//w
document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
        wDown = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'w' || event.key === 'W') {
        wDown = false
    }
});

//a
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'a') {
        aDown = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'a' || event.key === 'a') {
        aDown = false
    }
});

//s
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 's') {
        sDown = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 's' || event.key === 's') {
        sDown = false
    }
});

//d
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'd') {
        dDown = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'd' || event.key === 'd') {
        dDown = false
    }
});






;(async function(){while(true){
    if(wDown){
        point.y -= STEP
    }
    if(aDown){
        point.x -= STEP
    }
    if(sDown){
        point.y += STEP
    }
    if(dDown){
        point.x += STEP
    }

    debugPoint(point, null, 20)

    await sleep(.05)
}}());

(async function(){
    while(true){

        //send my own
        var xhr1 = new XMLHttpRequest();
        xhr1.open('POST', 'coordinates.php', true);
        xhr1.setRequestHeader('Content-Type', 'application/json');
        xhr1.send(JSON.stringify(point));

        //receive
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'coordinates.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let pointsObject = JSON.parse(xhr.responseText)
    
                //document.getElementById('board').innerHTML = ''
                for(const id in pointsObject){
                    if(pointsObject.hasOwnProperty(id)){
                        //if(id != uniqueId){
                            debugPoint(pointsObject[id], null, 20)
                        //}
                    }
                }
            }
        }
        xhr.send();

        await sleep(.2)
    }
}())