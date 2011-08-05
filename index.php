<!doctype html>
<head>
<?
if (isset($_GET['url'])) {
	$url = $_GET['url'];
	$filename = 'cache/'.md5($url);
	$imagename = $filename . ".png";
	$cmd = escapeshellcmd("DISPLAY=:0 /usr/local/sbin/phantomjs fetch.js " . $url . " " . $imagename);
	$cmd .= ' > ' . $filename;
	
	$output = exec($cmd);
	
	//var har = <?php readfile($filename); 
}
?>

<link href='css/defaults.css' rel='stylesheet' />
<link href='css/styles.css' rel='stylesheet' />
<script type='text/javascript' src='scripts/jquery-1.6.2.js'></script>
<script type='text/javascript' src='scripts/app.js'></script>

</head>

<body>
<form method='get' target="index.php">
<input name='url' placeholder='enter a url' value='<?php echo $_GET['url'] ?>' />
<input type='submit' value='Go!' />
<?php echo $output; ?>
</form>
<table width='99%'>
<tr>
<td width='210'>
	<img src='<?=$imagename?>' width="200" />
</td>
<td>
	<div class="har" data-har="../<?php echo $filename; ?>" expand="true" height="100%"></div>
</td>
</tr>

</table>
<div class='har-details'>



</div>
<div class='har-viewer'>

</div>
<script id='har' type='text/javascript' src='harviewer/har.js'></script>


</body>
</html>