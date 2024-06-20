javascript:(function() {

	/* Funzione per mettere in pausa il codice per [delay] secondi */
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay*1000));
	
	/*https://www.gamedev.net/articles/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/*/
	function lerp( a, b, t ) {
		return (1 - t) * a + b * t;
	}
	function invLerp( a, b, v ) {
		return (v - a) / ( b - a );
	}
	function remap( iMin, iMax, oMin, oMax, v ) {
		let t = invLerp( iMin, iMax, v );
		return lerp( oMin, oMax, t );
	}

		
	/*
	Funzioni di conversione per i colori prese online da https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
	*/
	
	function RGBtoHSV(r, g, b) {
		if (arguments.length === 1) {
			g = r.g, b = r.b, r = r.r;
		}
		var max = Math.max(r, g, b), min = Math.min(r, g, b),
			d = max - min,
			h,
			s = (max === 0 ? 0 : d / max),
			v = max / 255;

		switch (max) {
			case min: h = 0; break;
			case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
			case g: h = (b - r) + d * 2; h /= 6 * d; break;
			case b: h = (r - g) + d * 4; h /= 6 * d; break;
		}

		return [
			h,
			s,
			v
		];
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
	
	
	
	function mouseEventsHandler(
		eventObject,
		mouseEventTriggerCount,
		parentElement,
		ALTEZZA_INIZIALE,
		LARGHEZZA_INIZIALE,
		ALTEZZA_FINALE,
		LARGHEZZA_FINALE,
		OPACITA_INIZIALE,
		OPACITA_FINALE,
		FPS
	){		
		ALTEZZA_INIZIALE ??= 300;
		ALTEZZA_FINALE ??= ALTEZZA_INIZIALE;
		LARGHEZZA_INIZIALE ??= 300;
		LARGHEZZA_FINALE ??= LARGHEZZA_INIZIALE;
		OPACITA_INIZIALE ??= 1;
		OPACITA_FINALE ??= 0;
		FPS ??= 15;
		const DURATA_SPARIZIONE = .5;		
		const FRAME_TOTALI = FPS * DURATA_SPARIZIONE;
		const SECONDS_PER_FRAME = 1/FPS;
		
		const COLORE = "0,0,255";
		const COLORI = [
			[255,0,0],
			[255,255,0],
			[0,255,0],
			[0,255,255],
			[0,0,255],
			[255,0,255],
		];
		
		/*const SELECTED_COLOR = COLORI[mouseEventTriggerCount % COLORI.length];*/
		/*const SELECTED_COLOR = COLORE;*/
		const SELECTED_COLOR = HSVtoRGB((mouseEventTriggerCount % 100) * 0.01, 1, 1);

		
		const x = eventObject.pageX;
		const y = eventObject.pageY;
		let spazioDaSinistra = x - LARGHEZZA_INIZIALE/2;
		let spazioDallAlto = y - ALTEZZA_INIZIALE/2;
		
		const circle = document.createElement('div');
		parentElement.appendChild(circle);
		
		circle.style.width = LARGHEZZA_INIZIALE + "px";
		circle.style.height = ALTEZZA_INIZIALE + "px";
		circle.style.zIndex = "999999";
		circle.style.position = 'absolute';
		circle.style.left = spazioDaSinistra + "px";
		circle.style.top = spazioDallAlto + "px";
		circle.style.borderRadius = '9999999px';
		circle.style.pointerEvents = 'none';
		
		const STRINGA_RGB = SELECTED_COLOR[0] + ',' + SELECTED_COLOR[1] + ',' + SELECTED_COLOR[2];
		circle.style.backgroundColor = 'rgba('+ STRINGA_RGB +',' + OPACITA_INIZIALE + ')';
		
		/* ANIMAZIONE */
		;(async function(){
			
			let opacitaCorrente = OPACITA_INIZIALE;
			let larghezzaCorrente = LARGHEZZA_INIZIALE;
			let altezzaCorrente = ALTEZZA_INIZIALE;
			
			for(let frameCorrente = 1; frameCorrente <= FRAME_TOTALI; frameCorrente++){
				circle.style.backgroundColor = 'rgba('+ STRINGA_RGB +',' + opacitaCorrente + ')';
				/*circle.style.backgroundColor = '#BB0000';*/
				circle.style.width = larghezzaCorrente + "px";
				circle.style.height = altezzaCorrente + "px";
				
				circle.style.left = spazioDaSinistra + "px";
				circle.style.top = spazioDallAlto + "px";
				
				
				/*frameCorrente : FRAME_TOTALI = opacitaCorrente : OPACITA_FINALE*/
				/*opacitaCorrente = OPACITA_FINALE * frameCorrente / FRAME_TOTALI;
				larghezzaCorrente = (LARGHEZZA_FINALE * frameCorrente) / FRAME_TOTALI;
				altezzaCorrente = (ALTEZZA_FINALE * frameCorrente) / FRAME_TOTALI;*/
				opacitaCorrente = remap(1, FRAME_TOTALI, OPACITA_INIZIALE, OPACITA_FINALE, frameCorrente);
				larghezzaCorrente = remap(1, FRAME_TOTALI, LARGHEZZA_INIZIALE, LARGHEZZA_FINALE, frameCorrente);
				altezzaCorrente = remap(1, FRAME_TOTALI, ALTEZZA_INIZIALE, ALTEZZA_FINALE, frameCorrente);


				
				spazioDaSinistra = x - larghezzaCorrente * 0.5;
				spazioDallAlto = y - altezzaCorrente * 0.5;
				
				
				await sleep(SECONDS_PER_FRAME);
			}
			circle.remove();
		}());
	};

	const body = document.getElementsByTagName('body')[0];
	/*
	let documentOverlay = document.createElement('div');
	body.appendChild(documentOverlay);
	documentOverlay.style.position = 'fixed';
	documentOverlay.style.left = '0';
	documentOverlay.style.top = '0';
	documentOverlay.style.height = '100vh';
	documentOverlay.style.width = '100vw';
	documentOverlay.style.backgroundColor = 'rgba(150,150,150,.5)';
	documentOverlay.style.zIndex = "999999";
	console.log(documentOverlay);
	*/
	
	const PARENT_ELEMENT = body;

	let upCount = 0;
	PARENT_ELEMENT.addEventListener('mouseup', (eventObject)=>{
		upCount++;
		mouseEventsHandler(eventObject, upCount, PARENT_ELEMENT, 0, 0, 75, 75, null, null, 40);
	});
	
	/*let moveCount = 0;*/
	PARENT_ELEMENT.addEventListener('mousemove', (eventObject)=>{
		upCount++;
		mouseEventsHandler(eventObject, upCount, PARENT_ELEMENT, null, null, 0, 0, .5, 1);
	});
	
})();
