<?php
	require "head.php";
	
	$count = count($crewmateColors);
	
	shuffle($crewmateColors);
?>
<div id="voteScreen">
	<div id="background"></div>
	<h1 id="MainTitle" class="rainbow unselectable <?=$crewmateColors[array_rand($crewmateColors)]["name"]?> mogus">Mamongus</h1>
	<h2 id="SubTitle" class="rainbow unselectable <?=$crewmateColors[array_rand($crewmateColors)]["name"]?> mogus"><br><br>limprostoe</h2>

	<h1>
		<form method="GET" action="/RainbowLab/">
			<button id="emergencyButton" name="impostor" class="mogus" value="<?php ?>"
				<?=$emergencyButtonEvents?>
			></button>
		</form>
		<?php foreach($crewmateColors as $key => $color) : ?>
			<button class="mogus crewmate unselectable vote <?=$color['name']?>" id="<?=$color['name']?>" onclick="rainbow(<?=$color['name']?>)"
				onmousedown="<?=$color['name']?>.style.cursor='grabbing'"
				onmouseenter="<?=$color['name']?>.style.cursor='grab'"
				onmouseup="<?=$color['name']?>.style.cursor='grab'"
			>
				A
			</button>
		<?php endforeach ?>
	</h1>
</div>

<div style="display:none;" id="ejectStringContainer"><?=
		isset($_GET['impostor'])?
			$_GET["impostor"]? ucwords($_GET["impostor"])." was not the impostor.\n1 impostor remains." : ""
		:
			"";
	?></div>


<?php if(isset($_GET['impostor'])) : ?>
	<span id="ejected" class="mogus crewmate unselectable <?=$_GET['impostor']?>">A</span>
<?php endif ?>

<pre class="background unselectable" id="ejectScreen">

</pre>

<?php
	require "footer.php";
?>