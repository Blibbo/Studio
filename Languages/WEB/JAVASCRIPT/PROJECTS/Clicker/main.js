function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}


const WIDTH_START=500;
const STEP=5;
const HALF_WIDTH=WIDTH_START/2;
var width=WIDTH_START;
var firstClick=false;
var healthBar = document.getElementById("hp")
var textBar = document.querySelector(".text")
var counter=0;

//GETTING THE INITIAL COLOR
const START_COLORSTRING = (window.getComputedStyle ? window.getComputedStyle(healthBar).backgroundColor : healthBar.currentStyle.backgroundColor);

function lerp(p0, p1, alpha){
	return (1-alpha)*p0+alpha*p1;
}

function getRGBArray(colorString){
	return colorString.substring(4, colorString.length-1)
         .replace(/ /g, '')
         .split(',');
}

function convertToRGBString(rgbArray){
	return "rgb("+rgbArray[0]+","+rgbArray[1]+","+rgbArray[2]+")";
}

function reduceHealth(){
    if(!firstClick){
        firstClick=true;
        (async function(){
            while(width>=STEP){
				//width : WIDTH_START = x : 1
				//let alpha=width/WIDTH_START;
				//let colorString = healthBar.style.backgroundColor;
				//console.log(healthBar.style.backgroundColor);
				let RGBStart = getRGBArray(START_COLORSTRING);
				let RGBLow = [255,0,0];
                let RGBMid = [255,255,0];
				let newArray = [];
				for(let i=0;i<3;i++){
                    let currVal

                    if(width>HALF_WIDTH){//upper half

                        //width-HALF_WIDTH : HALF_WIDTH = x : 1
                        let alpha=(width-HALF_WIDTH)/HALF_WIDTH;

                        console.log("upper");
                        currVal=lerp(RGBMid[i], RGBStart[i], alpha);
                    }else{//lower half
                        //width : HALF_WIDTH = x : 1
                        let alpha=width/HALF_WIDTH;
                        console.log("lower");
                        currVal=lerp(RGBLow[i], RGBMid[i], alpha);
                    }
					newArray[i]=currVal;
				}
				healthBar.style.backgroundColor=convertToRGBString(newArray);
				
                textBar.innerHTML=counter.toString()+" bobux";

                let clicks = (WIDTH_START-width)/STEP;
                let CPS = /* 1:x=counter:clicks */clicks/counter;
                CPS = Math.round(CPS*1000)/1000;
                textBar.innerHTML=CPS+" CPS";

                await sleep(.1);
				counter*=10;
                counter++;
				counter/=10;
            }
            //Finish screen

        }())
    }
    width-=STEP;
    healthBar.style.width=width.toString()+"px";
}