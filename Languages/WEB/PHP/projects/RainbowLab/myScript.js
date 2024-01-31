function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}

function getRGBArray(colorString){
	return colorString.substring(4, colorString.length-1)
         .replace(/ /g, '')
         .split(',');
}

function convertToRGBString(rgbArray){
	return "rgb("+rgbArray[0]+","+rgbArray[1]+","+rgbArray[2]+")";
}

function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}

function currentRainbowColorString(sat=1, val=1){
	let time = (new Date()).getTime();
	let hue = (time%1501)/1500;
	let rgbArray = HSVtoRGB(hue, sat, val);
	let rgbString = convertToRGBString(rgbArray);
	return rgbString
}
const rainbowWait = .01

function getStyle(myElement, attributeName){
	return (window.getComputedStyle ? window.getComputedStyle(myElement)[attributeName] : myElement.currentStyle[attributeName])
}

var emergencyButton = document.getElementById("emergencyButton");

function rainbow(myElement){
	//let myElement = document.getElementById(id);
		//console.log(myElement);
	var initialColor = getStyle(myElement, "background-color");
	var initialBoxShadow = getStyle(myElement, "box-shadow");
	var initialTextShadow = getStyle(myElement, "text-shadow");
	emergencyButton.value = myElement.id;
	(async function(){
		while(true){
			//let transitionDuration = getStyle(myElement, "transitionDuration");
			//console.log(transitionDuration);
			//myElement.style.transitionDuration = "0s";
			myElement.style["background-color"]=currentRainbowColorString(.5, 1);
			myElement.style["box-shadow"]="5px -5px 10px 10px "+currentRainbowColorString(.5, .5)+" inset";
			myElement.style["text-shadow"]="3px -3px 3px "+currentRainbowColorString(.5, .5);
			//myElement.style.transitionDuration = transitionDuration;
			await sleep(rainbowWait);
		}
	}())
}

let rainbowArray = document.getElementsByClassName("rainbow");
(async function(){
	while(true){
		for (let i = 0; i < rainbowArray.length; i++) {
			rainbowArray[i].style.color = currentRainbowColorString(.7);
			await sleep(rainbowWait);
		}
	}
}())

function displayTextProgressively(myElement, myString){
	(async function(){
		for(let i=0;i<myString.length;i++){
			let waitTime;
			myString.charAt(i)=='\n'? waitTime = .5 : waitTime = .07;
			await sleep(waitTime);
			myElement.textContent = (myElement.textContent||"")+myString.charAt(i);
		}
	}());
}

function ejectImpostor(ejected){
	(async function(){
		let left=0;
		while(ejected.style.left != "2000px;"){
			ejected.style.left=left.toString()+"px";
			ejected.style.transform="rotate("+left+"deg)";

			left+=3;
			await sleep(.01);
		}
	}());
}

function displayImpostorEject(){
	let vote = document.getElementById("voteScreen");
	let eject = document.getElementById("ejectScreen");
	let ejected = document.getElementById("ejected");
	ejected.style.display="block";
	vote.style.display="none";
	eject.style.display="flex";
	
	ejectImpostor(ejected);
	displayTextProgressively(eject, impostorString);
	
	(async function(){
		await sleep(5.5);
		ejected.style.display="none";
		eject.style.display="none";
		vote.style.display="block";
	}());
}

var impostorString = document.getElementById("ejectStringContainer").textContent;

if(impostorString && (impostorString != "")) displayImpostorEject();