<style>

<?php
	$emergencyButtonDefaultFilter = " drop-shadow(7px 7px 1px black)";
?>

@font-face{
	src: url("/RainbowLab/AmongUs-Regular.ttf");
	font-family: mogus;
}

#background, .background{
	background-color:<?=$crewmateColors["black"]["light"]?>;
	position:fixed;
	width:100vw;
	height:100vh;
	margin: 0 0 0 -8px;
	z-index: -100;
}

.crewmate{
	/*background-color: rgb(100,210,255);*/
	font-size:100px;
	text-align:center;
	margin: 0 auto;
	border-radius: 20px;
	/*transition-duration:400ms;*/
	position:relative;
	left:3px;
	width:fit-content;
	border: 7px black solid;
}

/*.attento+.attento{
	background-color: rgb(150, 255, 170);
}*/

.vote:hover{
	background-color:rgb(255,150,150);
	box-shadow: 0 0 30px 10px black inset;
	text-shadow: 3px 3px 3px white;
	/*left:40px;*/
	cursor: grab;
}

.mogus{
	font-family: mogus, cursive;
}

h1{
	font-size: 100px;
	line-height:100px;
	width:100%;
	margin: 0 auto;
}

#MainTitle, #SubTitle{
	position:relative;
	border: 10px black solid;
	border-radius: 50px;
	text-shadow: 6px 6px 0 black;
}

#SubTitle{
	margin-top: -60px;
	width:500px;
	/*background-color: #DDDDDD;*/
	/*box-shadow: 0 0 5px 10px white inset, 0 0 5px 10px #DDDDDD inset;*/
	text-shadow: 2px 2px 0 black;
	z-index: -10;
}

#MainTitle{
	width:1000px;
	z-index: 10;
}

p{
	font-size: 40px;
}

.black{
	background-color:;
	box-shadow: 5px -5px 10px 10px  inset;
	text-shadow: 3px -3px 3px #1e1f25;
}

#emergencyButton{
	background-image: url('/RainbowLab/images/Emergency_button.png');
	height:100px;
	width:100px;
	background-position: center;
	background-size: contain;
	border: none;
	background-color: rgba(0,0,0,0);
	margin: 30px 0;
	
	filter: <?=$emergencyButtonDefaultFilter?>;
	
}

#emergencyButton:hover{
	filter: brightness(50%);
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#ejectScreen{
	background-image: url('/RainbowLab/images/stars.jpg');
	background-color: black;
	display: none;
	position: fixed;
	color:white;
	font-family: arial;
	font-size: 40px;
	
	
	align-items: center;
	justify-content: center;
}

#voteScreen{
	/*display:none;*/
}

#ejected{
	display:none;
	position:absolute;

	left:50px;
	top:45%;
}

<?php foreach($crewmateColors as $color) :?>
	.<?=$color['name']?>{
		background-color:<?=$color["light"]?>;
		box-shadow: 5px -5px 10px 10px <?=$color["dark"]?> inset;
		text-shadow: 3px -3px 3px <?=$color["dark"]?>
	}
<?php endforeach ?>

<?php
	$emergencyButton = "document.getElementById('emergencyButton')";
	$emergencyButtonEvents = "
			onmousedown=	\" ".$emergencyButton.".style.filter='brightness(150%) grayscale(40%)".$emergencyButtonDefaultFilter."' \"
			onmouseup=		\" ".$emergencyButton.".style.filter='brightness(50%)".$emergencyButtonDefaultFilter."' \"
			onmouseleave=	\" ".$emergencyButton.".style.filter='brightness(100%)".$emergencyButtonDefaultFilter."' \"
			onmouseenter=	\" ".$emergencyButton.".style.filter='brightness(50%)".$emergencyButtonDefaultFilter."' \"
	";
?>
</style>