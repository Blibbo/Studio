<?php require('partials/head.php');?>
<h1>
    ANTONIO
    <form method="POST" action="/inserire">
        <input placeholder="DAMMI UNA PAROLA" name="parola">
        <button type="submit">Invia</button>
    </form>
</h1>
<h4>
    <ul>
        <?php use App\Core\App; foreach(App::get('database')->selectAll('parole') as $parolaContainer) :?>
            <li><?=$parolaContainer->parola?></li>
        <?php endforeach;?>
    </ul>
</h4>
<?php require('partials/footer.php');?>