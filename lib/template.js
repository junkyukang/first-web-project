const { list } = require("session-file-store/lib/session-file-helpers");

module.exports={
  Html : function(list,login='<p><a href="/auth/login">로그인</a></p>',location=""){
    return `<html>
	<head>
		<title>J.K.KANG</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-with, initial-scale=1, user-scalable=no" />
		
		<link rel="stylesheet" href="${location}assets/css/main.css" />
		<noscript><link rel="stylesheet" href="${location}assets/css/noscript.css" /></noscript>
		
		</head>
 


	<body class="homepage is-preload">
		<div id="page-wrapper">
		
			<!-- Header -->
				<div id="header">

				
					<!-- Inner -->
						<div class="inner">
							<header>
								<h1><a href="/" id="logo">Hello</a></h1>
								<hr />
								${login}
							</header>
							
							<footer>
								<a href="#banner" class="button circled scrolly">둘러보기</a>
								
							</footer>
							
						</div>




					<!-- Nav -->    
					<nav id="nav">
						<ul>
							<li><a href="/">Home</a></li>
							<li>
								<a href="#">introduction</a>
								<ul>
									<li><a href="#">준비중</a></li>
									<li><a href="#">준비중</a></li>
									<li><a href="#">준비중</a></li>
									<li>
										<a href="#">준비중 &hellip;</a>
										<ul>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
										</ul>
									</li>
									<li><a href="#">준비중</a></li>
								</ul>
							</li>
							<li><a href="/topic/web">WEB</a></li>
							<li><a href="/topic/mobile">MOBILE</a></li>
							<li><a href="/topic/ai">A.I.</a></li>
							
						</ul>
					</nav>

			</div>






			<!-- Banner -->
				<section id="banner">
					<header>
						<h2>// <strong>//</strong>.</h2>
						<p>
							A (free) responsive site template by <a href="http://html5up.net">HTML5 UP</a>.
							Built with HTML5/CSS3 and released under the <a href="http://html5up.net/license">CCA</a> license.
						</p>
					</header>
				</section>








			<!-- ****Carousel -->
				<section class="carousel">
					<div class="reel">

						<article>
							<a href="#" class="image featured"><img src="${location}images/pic01.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Pulvinar sagittis congue</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						${list}
					</div>
				</section>






			<!-- Main -->
				<div class="wrapper style2">

					<article id="main" class="container special">
						<a href="#" class="image featured"><img src="${location}images/pic06.jpg" alt="" /></a>
						<header>
							<h2><a href="#">무슨내용을 쓸까요오오</a></h2>
							<p>
								준비중
							</p>
						</header>
						<p>
							준비중
						</p>
						<footer>
							<a href="#" class="button">detail</a>
						</footer>
					</article>

				</div>







			<!-- Features -->
				<div class="wrapper style1">

					<section id="features" class="container special">
						<header>
							<h2>준비 중</h2>
							<p>준비 중</p>
						</header>
						<div class="row">
							<article class="col-4 col-12-mobile special">
								<a href="#" class="image featured"><img src="${location}images/pic07.jpg" alt="" /></a>
								<header>
									<h3><a href="#">/준비 중/</a></h3>
								</header>
								<p>
									//
								</p>
							</article>
							<article class="col-4 col-12-mobile special">
								<a href="#" class="image featured"><img src="${location}images/pic08.jpg" alt="" /></a>
								<header>
									<h3><a href="#">준비 중</a></h3>
								</header>
								<p>
									/준비중/
								</p>
							</article>
						
						</div>
					</section>

				</div>

			<!-- Footer -->
				<div id="footer">
					<div class="container">
						<div class="row">

							<!-- Tweets -->
								<section class="col-4 col-12-mobile">
									<header>
										<h2 class="icon brands fa-twitter circled"><span class="label">Tweets</span></h2>
									</header>
									<ul class="divided">
										<li>
											<article class="tweet">
												Amet nullam fringilla nibh nulla convallis tique ante sociis accumsan.
												<span class="timestamp">5 minutes ago</span>
											</article>
										</li>
										<li>
											<article class="tweet">
												Hendrerit rutrum quisque.
												<span class="timestamp">30 minutes ago</span>
											</article>
										</li>
										<li>
											<article class="tweet">
												Curabitur donec nulla massa laoreet nibh. Lorem praesent montes.
												<span class="timestamp">3 hours ago</span>
											</article>
										</li>
										<li>
											<article class="tweet">
												Lacus natoque cras rhoncus curae dignissim ultricies. Convallis orci aliquet.
												<span class="timestamp">5 hours ago</span>
											</article>
										</li>
									</ul>
								</section>

							<!-- Posts -->
								<section class="col-4 col-12-mobile">
									<header>
										<h2 class="icon solid fa-file circled"><span class="label">Posts</span></h2>
									</header>
									<ul class="divided">
										<li>
											<article class="post stub">
												<header>
													<h3><a href="#">Nisl fermentum integer</a></h3>
												</header>
												<span class="timestamp">3 hours ago</span>
											</article>
										</li>
										<li>
											<article class="post stub">
												<header>
													<h3><a href="#">Phasellus portitor lorem</a></h3>
												</header>
												<span class="timestamp">6 hours ago</span>
											</article>
										</li>
										<li>
											<article class="post stub">
												<header>
													<h3><a href="#">Magna tempus consequat</a></h3>
												</header>
												<span class="timestamp">Yesterday</span>
											</article>
										</li>
										<li>
											<article class="post stub">
												<header>
													<h3><a href="#">Feugiat lorem ipsum</a></h3>
												</header>
												<span class="timestamp">2 days ago</span>
											</article>
										</li>
									</ul>
								</section>

							<!-- Photos -->
								<section class="col-4 col-12-mobile">
									<header>
										<h2 class="icon solid fa-camera circled"><span class="label">Photos</span></h2>
									</header>
									<div class="row gtr-25">
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic10.jpg" alt="" /></a>
										</div>
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic11.jpg" alt="" /></a>
										</div>
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic12.jpg" alt="" /></a>
										</div>
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic13.jpg" alt="" /></a>
										</div>
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic14.jpg" alt="" /></a>
										</div>
										<div class="col-6">
											<a href="#" class="image fit"><img src="${location}images/pic15.jpg" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
						<hr />
						<div class="row">
							<div class="col-12">

								<!-- Contact -->
									<section class="contact">
										<header>
											<h3>/주소/</h3>
										</header>
										<p>/서울..../tel...../e-mail...../</p>
										<ul class="icons">
											<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
											<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
											<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
											<li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>
											<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
											<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">Linkedin</span></a></li>
										</ul>
									</section>

								<!-- Copyright -->
									<div class="copyright">
										<ul class="menu">
											<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
										</ul>
									</div>

							</div>

						</div>
					</div>
				</div>

		</div>

		<!-- Scripts -->
			<script src="${location}assets/js/jquery.min.js"></script>
			<script src="${location}assets/js/jquery.dropotron.min.js"></script>
			<script src="${location}assets/js/jquery.scrolly.min.js"></script>
			<script src="${location}assets/js/jquery.scrollex.min.js"></script>
			<script src="${location}assets/js/browser.min.js"></script>
			<script src="${location}assets/js/breakpoints.min.js"></script>
			<script src="${location}assets/js/util.js"></script>
			<script src="${location}assets/js/main.js"></script>

	</body>
</html>`; 

}, list1 : function(filelist,location=""){
	var list= '';
	var i= 0;
	while(i < filelist.length){
		list = list +`<article>
		<a href="/topic/${filelist[i]}" class="image featured"><img src="${location}images/pic0${i+1}.jpg" alt="" /></a>
		<header>
			<h3><a href="/topic/${filelist[i]}">${filelist[i]}</a></h3>
		</header>
		<p>요약내용</p>
	</article>`;
		i = i + 1;
	  }
	  return list;
	
}, page : function(title,list,main,location=''){
	return `<!DOCTYPE HTML>
	<!--
		Helios by HTML5 UP
		html5up.net | @ajlkn
		Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
	-->
	<html>
		<head>
			<title>${title}</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			<link rel="stylesheet" href="${location}../assets/css/main.css" />
			<noscript><link rel="stylesheet" href="${location}../assets/css/noscript.css" /></noscript>
		</head>
		<body class="right-sidebar is-preload">
			<div id="page-wrapper">
	
				<!-- Header -->
					<div id="header">
	
						<!-- Inner -->
							<div class="inner">
								<header>
									<h1><a href="/" id="logo">KANG</a></h1>
								</header>
							</div>
	
					<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="/">Home</a></li>
							<li>
								<a href="#">introduction</a>
								<ul>
									<li><a href="#">준비중</a></li>
									<li><a href="#">준비중</a></li>
									<li><a href="#">준비중</a></li>
									<li>
										<a href="#">준비중 &hellip;</a>
										<ul>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
											<li><a href="#">준비중</a></li>
										</ul>
									</li>
									<li><a href="#">준비중</a></li>
								</ul>
							</li>
							<li><a href="/topic/web">WEB</a></li>
							<li><a href="/topic/mobile">MOBILE</a></li>
							<li><a href="/topic/ai">A.I.</a></li>
							
						</ul>
					</nav>
	
			</div>
	
				<!-- Main -->
					<div class="wrapper style1">
	
						<div class="container">
							<div class="row gtr-200">
								${main}









								<div class="col-4 col-12-mobile" id="sidebar">
									<hr class="first" />
									<section>
										<header>
											<h3><a href="#">Accumsan sed penatibus</a></h3>
										</header>
										<p>
											Dolor sed fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
											porttitor phasellus tempus cubilia ultrices tempor sagittis  tellus ante diam nec penatibus dolor cras
											magna tempus feugiat veroeros.
										</p>
										<footer>
											<a href="/topic/update/${title}" class="button">Update</a>
											<p><form action="/topic/delete_process" method="post">
											<input type ="hidden" name="delete" value=${title}>
											<input type="submit" value="Delete">
											</form></p>
										</footer>
									</section>
									<hr />
									<section>
										<header>
											<h3><a href="#">index</a></h3>
										</header>
										<p>
											설명 부분
										</p>
										<div class="row gtr-50">
											<div class="col-4">
												<a href="#" class="image fit"><img src="${location}../images/pic10.jpg" alt="" /></a>
											</div>
											<div class="col-8">
												<h4>Nibh sed cubilia</h4>
												<p>
													Amet nullam fringilla nibh nulla convallis tique ante proin.
												</p>
											</div>

											${list}
									









										</div>
										<footer>
											<a href="/topic/add" class="button">추가</a>
										</footer>
									</section>
								</div>
							</div>
							<hr />
							<div class="row">
								<article class="col-4 col-12-mobile special">
									<a href="#" class="image featured"><img src="${location}../images/pic07.jpg" alt="" /></a>
									<header>
										<h3><a href="#">Gravida aliquam penatibus</a></h3>
									</header>
									<p>
										Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
										porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
									</p>
								</article>
								<article class="col-4 col-12-mobile special">
									<a href="#" class="image featured"><img src="${location}../images/pic08.jpg" alt="" /></a>
									<header>
										<h3><a href="#">Sed quis rhoncus placerat</a></h3>
									</header>
									<p>
										Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
										porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
									</p>
								</article>
								<article class="col-4 col-12-mobile special">
									<a href="#" class="image featured"><img src="${location}../images/pic09.jpg" alt="" /></a>
									<header>
										<h3><a href="#">Magna laoreet et aliquam</a></h3>
									</header>
									<p>
										Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
										porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
									</p>
								</article>
							</div>
						</div>
	
					</div>
	
				<!-- Footer -->
					<div id="footer">
						<div class="container">
							<div class="row">
	
								<!-- Tweets -->
									<section class="col-4 col-12-mobile">
										<header>
											<h2 class="icon brands fa-twitter circled"><span class="label">Tweets</span></h2>
										</header>
										<ul class="divided">
											<li>
												<article class="tweet">
													Amet nullam fringilla nibh nulla convallis tique ante sociis accumsan.
													<span class="timestamp">5 minutes ago</span>
												</article>
											</li>
											<li>
												<article class="tweet">
													Hendrerit rutrum quisque.
													<span class="timestamp">30 minutes ago</span>
												</article>
											</li>
											<li>
												<article class="tweet">
													Curabitur donec nulla massa laoreet nibh. Lorem praesent montes.
													<span class="timestamp">3 hours ago</span>
												</article>
											</li>
											<li>
												<article class="tweet">
													Lacus natoque cras rhoncus curae dignissim ultricies. Convallis orci aliquet.
													<span class="timestamp">5 hours ago</span>
												</article>
											</li>
										</ul>
									</section>
	
								<!-- Posts -->
									<section class="col-4 col-12-mobile">
										<header>
											<h2 class="icon solid fa-file circled"><span class="label">Posts</span></h2>
										</header>
										<ul class="divided">
											<li>
												<article class="post stub">
													<header>
														<h3><a href="#">Nisl fermentum integer</a></h3>
													</header>
													<span class="timestamp">3 hours ago</span>
												</article>
											</li>
											<li>
												<article class="post stub">
													<header>
														<h3><a href="#">Phasellus portitor lorem</a></h3>
													</header>
													<span class="timestamp">6 hours ago</span>
												</article>
											</li>
											<li>
												<article class="post stub">
													<header>
														<h3><a href="#">Magna tempus consequat</a></h3>
													</header>
													<span class="timestamp">Yesterday</span>
												</article>
											</li>
											<li>
												<article class="post stub">
													<header>
														<h3><a href="#">Feugiat lorem ipsum</a></h3>
													</header>
													<span class="timestamp">2 days ago</span>
												</article>
											</li>
										</ul>
									</section>
	
								<!-- Photos -->
									<section class="col-4 col-12-mobile">
										<header>
											<h2 class="icon solid fa-camera circled"><span class="label">Photos</span></h2>
										</header>
										<div class="row gtr-25">
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic10.jpg" alt="" /></a>
											</div>
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic11.jpg" alt="" /></a>
											</div>
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic12.jpg" alt="" /></a>
											</div>
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic13.jpg" alt="" /></a>
											</div>
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic14.jpg" alt="" /></a>
											</div>
											<div class="col-6">
												<a href="#" class="image fit"><img src="${location}../images/pic15.jpg" alt="" /></a>
											</div>
										</div>
									</section>
	
							</div>
							<hr />
							<div class="row">
								<div class="col-12">
	
									<!-- Contact -->
										<section class="contact">
											<header>
												<h3>Nisl turpis nascetur interdum?</h3>
											</header>
											<p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
											<ul class="icons">
												<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
												<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
												<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
												<li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>
												<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
												<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">Linkedin</span></a></li>
											</ul>
										</section>
	
									<!-- Copyright -->
										<div class="copyright">
											<ul class="menu">
												<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
											</ul>
										</div>
	
								</div>
	
							</div>
						</div>
					</div>
	
			</div>
	
			<!-- Scripts -->
				<script src="${location}../assets/js/jquery.min.js"></script>
				<script src="${location}../assets/js/jquery.dropotron.min.js"></script>
				<script src="${location}../assets/js/jquery.scrolly.min.js"></script>
				<script src="${location}../assets/js/jquery.scrollex.min.js"></script>
				<script src="${location}../assets/js/browser.min.js"></script>
				<script src="${location}../assets/js/breakpoints.min.js"></script>
				<script src="${location}../assets/js/util.js"></script>
				<script src="${location}../assets/js/main.js"></script>
	
		</body>
	</html>`
}, list2 : function(filelist,location=""){
	var list= '';
	var i= 0;
	while(i < filelist.length){
		list = list +`<div class="col-4">
		<a href="/topic/${filelist[i]}" class="image fit"><img src="${location}../images/pic0${i+1}.jpg" alt="" /></a>
	</div>
	<div class="col-8">
		<h4><a href="/topic/${filelist[i]}">${filelist[i]}</a></h4>
		<p>
			내용내용 
		</p>
	</div>`;
		i = i + 1;
	  }
	  return list;
	
}, main : function(title,body){
	return						 `<div class="col-8 col-12-mobile" id="content">
									<article id="main">
										<header>
											<h2>${title}</h2>
											<p>
												made by 강준규
											</p>
										</header>
										<a href="#" class="image featured"><img src="../images/pic06.jpg" alt="" /></a>
										<p>
											${body}
										</p>
									
									</article>

								</div>`;
							}



  }








/*
module.exports={
  HTML:function(title, list, body, control, authStatusUI='<a href="/auth/login">login</a>'){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      ${authStatusUI}
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
*/