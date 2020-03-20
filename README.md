# Animations-and-effects
## A few animation an stuff here for beginners.
1. 3D Cube Animation using Swiper
<html>
<head>
	<title>3D Cube Slider</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<!-- Css here -->
	<link rel="stylesheet" type="text/css" href="styles/master.css">
	<!-- Swiper css here -->
	<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
</head>
<body>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="imgBx">
					<img src="images/1.jpg">
				</div>
				<div class="content">
					<h2>Shreyans Jain<br><span>Web Designer</span></h2>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="imgBx">
					<img src="images/1.jpg">
				</div>
				<div class="content">
					<h2>Shreyans Jain<br><span>Web Designer</span></h2>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="imgBx">
					<img src="images/1.jpg">
				</div>
				<div class="content">
					<h2>Shreyans Jain<br><span>Web Designer</span></h2>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="imgBx">
					<img src="images/1.jpg">
				</div>
				<div class="content">
					<h2>Shreyans Jain<br><span>Web Designer</span></h2>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>

	<!-- Swiper js here -->
	<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
	<script type="text/javascript">
		var swiper = new Swiper('.swiper-container',{
			effect: 'cube',
			grabCursor: true,
			cubeEffect: {
				shadow: true,
				slideShadows:true,
				shadowOffset: 20,
				shadowScale: 0.94,
			},
			pagination: {
        		el: '.swiper-pagination',
      		},
		});
	</script>
</body>
</html>
