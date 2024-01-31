<?php
$file = 'lettera.pdf'; // Path to the file you want to make downloadable
$filename = 'biscio.pdf'; // Name of the file seen by the user when downloaded

// Set headers to force download
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Length: ' . filesize($file));

// Read the file and output its contents
readfile($file);
?>