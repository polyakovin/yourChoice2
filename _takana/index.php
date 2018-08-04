<!-- takana . -->
<!DOCTYPE HTML>
<html>
	<head>
		<title>Takana</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Корректная работа с Internet Explorer -->
		<meta name="viewport" content="width=device-width, initial-scale=1"><!-- Правильное отображение xs на мобильных устройствах  -->
		<link href="css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<?include('../_/php/header.php');// Шапка?>
		<div class="container">
			<?
				include('../_/php/structure.php');			// Как мы работаем
				include('../_/php/advantages_product.php');	// Выгоды продукции
				include('../_/php/advantages_company.php');	// Выгоды компании
				include('../_/php/feedback.php');			// Отзывы клиентов
				include('../_/php/contact.php');				// Контактная форма
				include('../_/php/footer.php');				// Подвал
			?>
		</div>
		<script type="text/javascript" src="../_/js/script.js"></script>

		<script type="text/javascript" src="http://localhost:48626/takana.js"></script>
		<script type="text/javascript">
			takanaClient.run();
		</script>
	</body>
</html>