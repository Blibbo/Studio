<?php require('partials/head.php')?>
<h1>
    <ul>
        <!--in case you forgot where $storie comes from:-->
        <!--
            to send data to a view you compact an associative array with the key being the name
            and the value being the value of course.
            so what happened here is the view() function was passed $storie as
            APP::get('database')->selectAll('everythingantonio')
        -->
        <?php foreach($storie as $storiaContainer) : ?>
            <li> <?= $storiaContainer->Storia_Piero?> </li>
        <?php endforeach; ?>
    </ul>
    <form method="POST" action="/risposta">
        È PIERO?<input name="epiero" type="checkbox">
        <button type="submit">Conferma scelta</button>
    </form>
</h1>
<?php require('partials/footer.php')?>