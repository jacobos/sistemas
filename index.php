<!DOCTYPE html>
<html>

<head>
    <title>Clase</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <script src="js/jquery-1.11.1.js"></script>
    <script src="js/bootstrap.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

</head>

<body>
    <div class="container">
<?php 

$textos = '';

function endswith($string, $test) {
    $strlen = strlen($string);
    $testlen = strlen($test);
    if ($testlen > $strlen) return false;
    return substr_compare($string, $test, $strlen - $testlen, $testlen) === 0;
}


$d = dir(getcwd());
echo '<div class="row">';
while (($file = $d->read()) !== false){ 
    if(substr($file, -3) != "pdf" || substr($file, 0, 1) == "b")
	if($file != "wall_ball.jpg" && $file != "jquery-ui.css" && $file != "jquery-ui.js" && $file != "jquery-1.9.1.js" && $file != "." && $file != ".." && $file != "index.php" && $file != "exercises.html" &&  $file != "index2.php" && $file != "styles" && $file != "Libro1erTrimDAW.xlsx" && $file != "Classes" && $file != "faltas1er.php" && $file != "faltas.html" && $file != "insert.php" && $file != "alumn.html")
	{
		if(is_dir($file))
            echo '<div class="col-xs-3 "><a class="btn btn-default" href="'.$file.'" target="_blank">'.$file.'</a></div>';
//        echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.children[0].parentNode.insertBefore(app, document.body.children[0]); api.setAttribute("class", "dir"); api.setAttribute("href", "'.$file.'"); </script>'; 
		else{
			if($file == "upload_exercises.html")
				echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki upload"); api.setAttribute("href", "'.$file.'"); </script>'; 
			else
                if(!endsWith($file, '.png'))
                    $dirs[]=$file;
		}
	}
}
sort($dirs);

echo '</div>';
echo "<br>"; 
for($i = 0; $i < count($dirs); $i++){
    if($i % 4 == 0){
        $textos .= '<div class="row" style="padding: 3px">';
    }
    $textos .= '<div class="col-md-3 col-sm-6 col-xs-12"><a class="btn btn-success" href="'.$dirs[$i].'" target="_blank">'.$dirs[$i].'</a></div>';

    if(($i + 1) % 4 == 0){
        $textos .= '</div>';
    }
}

$d->close(); 
echo $textos; 
?>

<?php
//$file = "http://courseware.codeschool.com/javascript-roadtrip/js1.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("JS1 (codeschool, graphic)"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk"); ;api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://courseware.codeschool.com/javascript-roadtrip/js2.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("JS2 (codeschool, graphic)"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://courseware.codeschool.com.s3.amazonaws.com/cssxcountry_slides.pdf";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("CSS, Image Cropping, slides:126-136"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 

//$file = "http://it-ebooks.info/book/447/";
echo "<!-- http://it-ebooks.info/book/447/ -->";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("CANVAS book"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki lonk");api.setAttribute("href", "'.$file.'"); </script>'; 
//$file = "9/Nov Exercises, 12/Nov Exam";
//echo '<script> var app = document.createElement("div");var api = document.createElement("a");app.appendChild(api);var api2 = document.createTextNode("'.$file.'"); api.appendChild(api2); document.body.appendChild(app); api.setAttribute("class", "linki faltas");  </script>'; 

?>


</body>
</html>