<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Корректная работа с Internet Explorer -->
	<meta name="viewport" content="width=device-width, initial-scale=1"><!-- Правильное отображение xs на мобильных устройствах  -->
	<link rel="stylesheet" href="css/style.css">
	<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![if]-->
	<title>Металлические двери &laquo;Ваш Выбор!&raquo;</title>
</head>
<body>
	<?include('php/header.php');// Шапка?>
	<div class="container">
		<?
			include('php/structure.php');			// Как мы работаем
			include('php/advantages_product.php');	// Выгоды продукции
			include('php/advantages_company.php');	// Выгоды компании
			include('php/feedback.php');			// Отзывы клиентов
			include('php/contact.php');				// Контактная форма
			include('php/footer.php');				// Подвал
		?>
	</div>

	<script src="js/script.js"></script>
	<script type="text/javascript" src="http://localhost:35729/livereload.js"></script>
</body>
</html>