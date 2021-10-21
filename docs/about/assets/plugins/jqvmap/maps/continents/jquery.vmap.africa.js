<!DOCTYPE html>
<html lang="en">

  <head>
  
  		<meta charset="UTF-8">
  		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
  		<meta http-equiv="X-UA-Compatible" content="IE=edge">
  		<meta name="Description" content="">
  		<meta name="Author" content="Christian 'Herr Bär' Göbert">
  		<meta name="Keywords" content="Awesome Coding Tutorials ESP32 Arduino RaspberryPI Pi Robotic Robot Bot Microservice Cloud Programming Development"/>
  
  		<title>  </title>
  
  		<link rel="icon" href="../../assets/img/brand/favicon.png" type="image/x-icon"/>
  
  		<link href="../../assets/css/icons.css" rel="stylesheet">
  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  
  		<link href="../../assets/plugins/mscrollbar/jquery.mCustomScrollbar.css" rel="stylesheet"/>
  
  		<link href="../../assets/plugins/sidebar/sidebar.css" rel="stylesheet">
  
  		<link href="../../assets/plugins/morris.js/morris.css" rel="stylesheet">
  
  		<link href="../../assets/css/style.css" rel="stylesheet">
  		<link href="../../assets/css/boxed.css" rel="stylesheet">
  		<link href="../../assets/css/dark-boxed.css" rel="stylesheet">
  
  		<link href="../../assets/css/style-dark.css" rel="stylesheet">
  		<link href="../../assets/css/skin-modes.css" rel="stylesheet" />
  
  	</head>
	<body class="main-body">

		<!-- Loader -->
		<div id="global-loader">
			<img src="assets/img/loader.svg" class="loader-img" alt="Loader">
		</div>
		<!-- /Loader -->

		<!-- Page -->
		<div class="page">

      			<!-- main-header opened -->
      			<div class="main-header nav nav-item hor-header">
      				<div class="container">
      					<div class="main-header-left ">
      						<a class="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a><!-- sidebar-toggle-->
      						<a class="header-brand" href="index.html">
      							<img src="../../assets/img/brand/logo-white.png" class="desktop-dark">
      							<img src="../../assets/img/brand/logo.png" class="desktop-logo">
      							<img src="../../assets/img/brand/favicon.png" class="desktop-logo-1">
      							<img src="../../assets/img/brand/favicon-white.png" class="desktop-logo-dark">
      						</a>
      						<div class="main-header-center  ms-4">
      							<input class="form-control" placeholder="Search for anything..." type="search"><button class="btn"><i class="fe fe-search"></i></button>
      						</div>
      					</div><!-- search -->
      					<div class="main-header-right">
      						<ul class="nav nav-item  navbar-nav-right ms-auto">
      							<li class="nav">
      									<div class="dropdown  nav-itemd-none d-md-flex">
      										<a href="#" class="d-flex  nav-item country-flag1" data-bs-toggle="dropdown" aria-expanded="false">
      											<span class="avatar country-Flag me-0 align-self-center bg-transparent"><img src="../../assets/img/flags/us_flag.jpg" alt="img"></span>
      											<div class="my-auto">
      												<strong class="me-2 ms-2 my-auto">English</strong>
      											</div>
      										</a>
      										<div class="dropdown-menu dropdown-menu-left dropdown-menu-arrow" x-placement="bottom-end">
      											<a href="#" class="dropdown-item d-flex ">
      												<span class="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/french_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">French</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/germany_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Germany</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/italy_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Italy</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/russia_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Russia</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar  me-3 align-self-center bg-transparent"><img src="../../assets/img/flags/spain_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">spain</span>
      												</div>
      											</a>
      										</div>
      									</div>
      							</li>
      							<li class="nav-link" id="bs-example-navbar-collapse-1">
      								<form class="navbar-form" role="search">
      									<div class="input-group">
      										<input type="text" class="form-control" placeholder="Search">
      										<span class="input-group-btn">
      											<button type="reset" class="btn btn-default">
      												<i class="fas fa-times"></i>
      											</button>
      											<button type="submit" class="btn btn-default nav-link resp-btn">
      												<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      											</button>
      										</span>
      									</div>
      								</form>
      							</li>
      							<li class="dropdown nav-item main-header-message ">
      								<a class="new nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span class=" pulse-danger"></span></a>
      								<div class="dropdown-menu">
      									<div class="menu-header-content bg-primary text-start">
      										<div class="d-flex">
      											<h6 class="dropdown-title mb-1 tx-15 text-white fw-semibold">Messages</h6>
      											<span class="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
      										</div>
      										<p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
      									</div>
      									<div class="main-message-list chat-scroll">
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="  drop-img  cover-image  " data-bs-image-src="../../assets/img/faces/3.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Petey Cruiser</h5>
      												</div>
      												<p class="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
      												<p class="time mb-0 text-start float-start ms-2 mt-2">Mar 15 3:55 PM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-bs-image-src="../../assets/img/faces/2.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Jimmy Changa</h5>
      												</div>
      												<p class="mb-0 desc">All set ! Now, time to get to you now......</p>
      												<p class="time mb-0 text-start float-start ms-2 mt-2">Mar 06 01:12 AM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-bs-image-src="../../assets/img/faces/9.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Graham Cracker</h5>
      												</div>
      												<p class="mb-0 desc">Are you ready to pickup your Delivery...</p>
      												<p class="time mb-0 text-start float-start ms-2 mt-2">Feb 25 10:35 AM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-bs-image-src="../../assets/img/faces/12.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Donatella Nobatti</h5>
      												</div>
      												<p class="mb-0 desc">Here are some products ...</p>
      												<p class="time mb-0 text-start float-start ms-2 mt-2">Feb 12 05:12 PM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-bs-image-src="../../assets/img/faces/5.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Anne Fibbiyon</h5>
      												</div>
      												<p class="mb-0 desc">I'm sorry but i'm not sure how...</p>
      												<p class="time mb-0 text-start float-start ms-2 mt-2">Jan 29 03:16 PM</p>
      											</div>
      										</a>
      									</div>
      									<div class="text-center dropdown-footer">
      										<a href="text-center">VIEW ALL</a>
      									</div>
      								</div>
      							</li>
      							<li class="dropdown nav-item main-header-notification">
      								<a class="new nav-link" href="#">
      								<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span class=" pulse"></span></a>
      								<div class="dropdown-menu">
      									<div class="menu-header-content bg-primary text-start">
      										<div class="d-flex">
      											<h6 class="dropdown-title mb-1 tx-15 text-white fw-semibold">Notifications</h6>
      											<span class="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
      										</div>
      										<p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
      									</div>
      									<div class="main-notification-list Notification-scroll">
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-pink">
      												<i class="la la-file-alt text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">New files available</h5>
      												<div class="notification-subtext">10 hour ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-purple">
      												<i class="la la-gem text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">Updates Available</h5>
      												<div class="notification-subtext">2 days ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-success">
      												<i class="la la-shopping-basket text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">New Order Received</h5>
      												<div class="notification-subtext">1 hour ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-warning">
      												<i class="la la-envelope-open text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">New review received</h5>
      												<div class="notification-subtext">1 day ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-danger">
      												<i class="la la-user-check text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">22 verified registrations</h5>
      												<div class="notification-subtext">2 hour ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-primary">
      												<i class="la la-check-circle text-white"></i>
      											</div>
      											<div class="ms-3">
      												<h5 class="notification-label mb-1">Project has been approved</h5>
      												<div class="notification-subtext">4 hour ago</div>
      											</div>
      											<div class="ms-auto" >
      												<i class="las la-angle-right text-end text-muted"></i>
      											</div>
      										</a>
      									</div>
      									<div class="dropdown-footer">
      										<a href="">VIEW ALL</a>
      									</div>
      								</div>
      							</li>
      							<li class="nav-item full-screen fullscreen-button">
      								<a class="new nav-link full-screen-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></a>
      							</li>
      							<li class="dropdown main-profile-menu nav nav-item nav-link">
      								<a class="profile-user d-flex" href=""><img alt="" src="../../assets/img/faces/6.jpg"></a>
      								<div class="dropdown-menu">
      									<div class="main-header-profile bg-primary p-3">
      										<div class="d-flex wd-100p">
      											<div class="main-img-user"><img alt="" src="../../assets/img/faces/6.jpg" class=""></div>
      											<div class="ms-3 my-auto">
      												<h6>Petey Cruiser</h6><span>Premium Member</span>
      											</div>
      										</div>
      									</div>
      									<a class="dropdown-item" href=""><i class="bx bx-user-circle"></i>Profile</a>
      									<a class="dropdown-item" href=""><i class="bx bx-cog"></i> Edit Profile</a>
      									<a class="dropdown-item" href=""><i class="bx bxs-inbox"></i>Inbox</a>
      									<a class="dropdown-item" href=""><i class="bx bx-envelope"></i>Messages</a>
      									<a class="dropdown-item" href=""><i class="bx bx-slider-alt"></i> Account Settings</a>
      									<a class="dropdown-item" href="signin.html"><i class="bx bx-log-out"></i> Sign Out</a>
      								</div>
      							</li>
      							<li class="dropdown main-header-message right-toggle">
      								<a class="nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
      									<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      								</a>
      							</li>
      						</ul>
      					</div>
      				</div>
      			</div>
      			<!-- /main-header -->
      
      			<!-- centerlogo-header opened -->
      			<div class="main-header nav nav-item hor-header top-header">
      				<div class="container">
      					<div class="main-header-left ">
      						<a class="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a><!-- sidebar-toggle-->
      						<a class="header-brand" href="index.html">
      							<img src="../../assets/img/brand/logo-white.png" class="desktop-dark">
      							<img src="../../assets/img/brand/logo.png" class="desktop-logo">
      							<img src="../../assets/img/brand/favicon.png" class="desktop-logo-1">
      							<img src="../../assets/img/brand/favicon-white.png" class="desktop-logo-dark">
      						</a>
      						<div class="main-header-center  ml-4">
      							<input class="form-control" placeholder="Search for anything..." type="search"><button class="btn"><i class="fe fe-search"></i></button>
      						</div>
      					</div><!-- search -->
      					<a class="header-brand header-brand2 d-none d-lg-block" href="index.html">
      						<img src="../../assets/img/brand/logo-white.png" class="desktop-dark">
      						<img src="../../assets/img/brand/logo.png" class="desktop-logo">
      						<img src="../../assets/img/brand/favicon.png" class="desktop-logo-1">
      						<img src="../../assets/img/brand/favicon-white.png" class="desktop-logo-dark">
      					</a>
      					<div class="main-header-right">
      						<ul class="nav nav-item  navbar-nav-right ml-auto">
      							<li class="nav">
      									<div class="dropdown  nav-itemd-none d-md-flex">
      										<a href="#" class="d-flex  nav-item country-flag1" data-bs-toggle="dropdown" aria-expanded="false">
      											<span class="avatar country-Flag mr-0 align-self-center bg-transparent"><img src="../../assets/img/flags/us_flag.jpg" alt="img"></span>
      											<div class="my-auto">
      												<strong class="mr-2 ml-2 my-auto">English</strong>
      											</div>
      										</a>
      										<div class="dropdown-menu dropdown-menu-left dropdown-menu-arrow" x-placement="bottom-end">
      											<a href="#" class="dropdown-item d-flex ">
      												<span class="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/french_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">French</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/germany_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Germany</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/italy_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Italy</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/russia_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">Russia</span>
      												</div>
      											</a>
      											<a href="#" class="dropdown-item d-flex">
      												<span class="avatar  mr-3 align-self-center bg-transparent"><img src="../../assets/img/flags/spain_flag.jpg" alt="img"></span>
      												<div class="d-flex">
      													<span class="mt-2">spain</span>
      												</div>
      											</a>
      										</div>
      									</div>
      							</li>
      							<li class="nav-link" id="bs-example-navbar-collapse-1">
      								<form class="navbar-form" role="search">
      									<div class="input-group">
      										<input type="text" class="form-control" placeholder="Search">
      										<span class="input-group-btn">
      											<button type="reset" class="btn btn-default">
      												<i class="fas fa-times"></i>
      											</button>
      											<button type="submit" class="btn btn-default nav-link resp-btn">
      												<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      											</button>
      										</span>
      									</div>
      								</form>
      							</li>
      							<li class="dropdown nav-item main-header-message ">
      								<a class="new nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span class=" pulse-danger"></span></a>
      								<div class="dropdown-menu">
      									<div class="menu-header-content bg-primary text-left">
      										<div class="d-flex">
      											<h6 class="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Messages</h6>
      											<span class="badge badge-pill badge-warning ml-auto my-auto float-right">Mark All Read</span>
      										</div>
      										<p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
      									</div>
      									<div class="main-message-list chat-scroll">
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="  drop-img  cover-image  " data-image-src="../../assets/img/faces/3.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Petey Cruiser</h5>
      												</div>
      												<p class="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
      												<p class="time mb-0 text-left float-left ml-2 mt-2">Mar 15 3:55 PM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-image-src="../../assets/img/faces/2.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Jimmy Changa</h5>
      												</div>
      												<p class="mb-0 desc">All set ! Now, time to get to you now......</p>
      												<p class="time mb-0 text-left float-left ml-2 mt-2">Mar 06 01:12 AM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-image-src="../../assets/img/faces/9.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Graham Cracker</h5>
      												</div>
      												<p class="mb-0 desc">Are you ready to pickup your Delivery...</p>
      												<p class="time mb-0 text-left float-left ml-2 mt-2">Feb 25 10:35 AM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-image-src="../../assets/img/faces/12.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Donatella Nobatti</h5>
      												</div>
      												<p class="mb-0 desc">Here are some products ...</p>
      												<p class="time mb-0 text-left float-left ml-2 mt-2">Feb 12 05:12 PM</p>
      											</div>
      										</a>
      										<a href="#" class="p-3 d-flex border-bottom">
      											<div class="drop-img cover-image" data-image-src="../../assets/img/faces/5.jpg">
      												<span class="avatar-status bg-teal"></span>
      											</div>
      											<div class="wd-90p">
      												<div class="d-flex">
      													<h5 class="mb-1 name">Anne Fibbiyon</h5>
      												</div>
      												<p class="mb-0 desc">I'm sorry but i'm not sure how...</p>
      												<p class="time mb-0 text-left float-left ml-2 mt-2">Jan 29 03:16 PM</p>
      											</div>
      										</a>
      									</div>
      									<div class="text-center dropdown-footer">
      										<a href="text-center">VIEW ALL</a>
      									</div>
      								</div>
      							</li>
      							<li class="dropdown nav-item main-header-notification">
      								<a class="new nav-link" href="#">
      								<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span class=" pulse"></span></a>
      								<div class="dropdown-menu">
      									<div class="menu-header-content bg-primary text-left">
      										<div class="d-flex">
      											<h6 class="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Notifications</h6>
      											<span class="badge badge-pill badge-warning ml-auto my-auto float-right">Mark All Read</span>
      										</div>
      										<p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
      									</div>
      									<div class="main-notification-list Notification-scroll">
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-pink">
      												<i class="la la-file-alt text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">New files available</h5>
      												<div class="notification-subtext">10 hour ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3" href="#">
      											<div class="notifyimg bg-purple">
      												<i class="la la-gem text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">Updates Available</h5>
      												<div class="notification-subtext">2 days ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-success">
      												<i class="la la-shopping-basket text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">New Order Received</h5>
      												<div class="notification-subtext">1 hour ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-warning">
      												<i class="la la-envelope-open text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">New review received</h5>
      												<div class="notification-subtext">1 day ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-danger">
      												<i class="la la-user-check text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">22 verified registrations</h5>
      												<div class="notification-subtext">2 hour ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      										<a class="d-flex p-3 border-bottom" href="#">
      											<div class="notifyimg bg-primary">
      												<i class="la la-check-circle text-white"></i>
      											</div>
      											<div class="ml-3">
      												<h5 class="notification-label mb-1">Project has been approved</h5>
      												<div class="notification-subtext">4 hour ago</div>
      											</div>
      											<div class="ml-auto" >
      												<i class="las la-angle-right text-right text-muted"></i>
      											</div>
      										</a>
      									</div>
      									<div class="dropdown-footer">
      										<a href="">VIEW ALL</a>
      									</div>
      								</div>
      							</li>
      							<li class="nav-item full-screen fullscreen-button">
      								<a class="new nav-link full-screen-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></a>
      							</li>
      							<li class="dropdown main-profile-menu nav nav-item nav-link">
      								<a class="profile-user d-flex" href=""><img alt="" src="../../assets/img/faces/6.jpg"></a>
      								<div class="dropdown-menu">
      									<div class="main-header-profile bg-primary p-3">
      										<div class="d-flex wd-100p">
      											<div class="main-img-user"><img alt="" src="../../assets/img/faces/6.jpg" class=""></div>
      											<div class="ml-3 my-auto">
      												<h6>Petey Cruiser</h6><span>Premium Member</span>
      											</div>
      										</div>
      									</div>
      									<a class="dropdown-item" href=""><i class="bx bx-user-circle"></i>Profile</a>
      									<a class="dropdown-item" href=""><i class="bx bx-cog"></i> Edit Profile</a>
      									<a class="dropdown-item" href=""><i class="bx bxs-inbox"></i>Inbox</a>
      									<a class="dropdown-item" href=""><i class="bx bx-envelope"></i>Messages</a>
      									<a class="dropdown-item" href=""><i class="bx bx-slider-alt"></i> Account Settings</a>
      									<a class="dropdown-item" href="signin.html"><i class="bx bx-log-out"></i> Sign Out</a>
      								</div>
      							</li>
      							<li class="dropdown main-header-message right-toggle">
      								<a class="nav-link pr-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
      									<svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      								</a>
      							</li>
      						</ul>
      					</div>
      				</div>
      			</div>
      			<!-- /centerlogo-header closed -->
      
            <!--Horizontal-main -->
      			<div class="sticky">
      				<div class="horizontal-main hor-menu clearfix side-header">
      					<div class="horizontal-mainwrapper container clearfix">
      						<!--Nav-->
      						<nav class="horizontalMenu clearfix">
      							<ul class="horizontalMenu-list">
      								<li aria-haspopup="true"><a href="index.html" class=""><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"/><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"/></svg>Dashboard</a></li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg> Charts<i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="chart-morris.html" class="slide-item">Morris Charts</a></li>
      										<li aria-haspopup="true"><a href="chart-flot.html" class="slide-item">Flot Charts</a></li>
      										<li aria-haspopup="true"><a href="chart-chartjs.html" class="slide-item">ChartJS</a></li>
      										<li aria-haspopup="true"><a href="chart-echart.html" class="slide-item">Echart</a></li>
      										<li aria-haspopup="true"><a href="chart-sparkline.html" class="slide-item">Sparkline</a></li>
      										<li aria-haspopup="true"><a href="chart-peity.html" class="slide-item"> Chart-peity</a></li>
      									</ul>
      								</li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3"/><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> E-Commerce<i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="products.html" class="slide-item"> Products</a></li>
      										<li aria-haspopup="true"><a href="product-details.html" class="slide-item">Product-Details</a></li>
      										<li aria-haspopup="true"><a href="product-cart.html" class="slide-item">Shopping Cart</a></li>
      									</ul>
      								</li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3"/><path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"/></svg> Elements<i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<div class="horizontal-megamenu clearfix">
      										<div class="container">
      											<div class="mega-menubg hor-mega-menu">
      												<div class="row">
      													<div class="col-lg-3 col-md-12 col-xs-12 link-list">
      
      														<ul>
      															<li><h3 class="fs-14 fw-bold mb-1 mt-2">Elements</h3></li>
      															<li aria-haspopup="true"><a href="alerts.html" class="slide-item">Alerts</a></li>
      															<li aria-haspopup="true"><a href="avatar.html" class="slide-item">Avatar</a></li>
      															<li aria-haspopup="true"><a href="breadcrumbs.html" class="slide-item">Breadcrumbs</a></li>
      															<li aria-haspopup="true"><a href="buttons.html" class="slide-item">Buttons</a></li>
      															<li aria-haspopup="true"><a href="badge.html" class="slide-item">Badge</a></li>
      															<li aria-haspopup="true"><a href="dropdown.html" class="slide-item">Dropdown</a></li>
      															<li aria-haspopup="true"><a href="thumbnails.html" class="slide-item">Thumbnails</a></li>
      															<li aria-haspopup="true"><a href="images.html" class="slide-item">Images</a></li>
      															<li aria-haspopup="true"><a href="list-group.html" class="slide-item">List Group</a></li>
      
      														</ul>
      													</div>
      													<div class="col-lg-3 col-md-12 col-xs-12 link-list">
      														<ul>
      															<li aria-haspopup="true"><a href="navigation.html" class="slide-item">Navigation</a></li>
      															<li aria-haspopup="true"><a href="pagination.html" class="slide-item">Pagination</a></li>
      															<li aria-haspopup="true"><a href="popover.html" class="slide-item">Popover</a></li>
      															<li aria-haspopup="true"><a href="progress.html" class="slide-item">Progress</a></li>
      															<li aria-haspopup="true"><a href="spinners.html" class="slide-item">Spinners</a></li>
      															<li aria-haspopup="true"><a href="media-object.html" class="slide-item">Media Object</a></li>
      															<li aria-haspopup="true"><a href="typography.html" class="slide-item">Typography</a></li>
      															<li aria-haspopup="true"><a href="tooltip.html" class="slide-item">Tooltip</a></li>
      															<li aria-haspopup="true"><a href="toast.html" class="slide-item">Toast</a></li>
      															<li aria-haspopup="true"><a href="tags.html" class="slide-item">Tags</a></li>
      														</ul>
      													</div>
      													<div class="col-lg-3 col-md-12 col-xs-12 link-list">
      														<ul>
      															<li aria-haspopup="true"><a href="tabs.html" class="slide-item">Tabs</a></li>
      															<li><h3 class="fs-14 fw-bold mb-1 mt-2">Apps</h3></li>
      															<li aria-haspopup="true"><a href="cards.html" class="slide-item">Cards</a></li>
      															<li aria-haspopup="true"><a href="draggablecards.html" class="slide-item">Draggablecards</a></li>
      															<li aria-haspopup="true"><a href="rangeslider.html" class="slide-item">Range-slider</a></li>
      															<li aria-haspopup="true"><a href="calendar.html" class="slide-item">Calendar</a></li>
      															<li aria-haspopup="true"><a href="contacts.html" class="slide-item">Contacts</a></li>
      															<li aria-haspopup="true"><a href="image-compare.html" class="slide-item">Image-compare</a></li>
      															<li aria-haspopup="true"><a href="notification.html" class="slide-item">Notification</a></li>
      															<li aria-haspopup="true"><a href="widget-notification.html" class="slide-item">Widget-notification</a></li>
      														</ul>
      													</div>
      													<div class="col-lg-3 col-md-12 col-xs-12 link-list">
      														<ul>
      															<li aria-haspopup="true"><a href="treeview.html" class="slide-item">Treeview</a></li>
      															<li><h3 class="fs-14 fw-bold mb-1 mt-2">Icons <span class="badge bg-danger ">New</span></h3></li>
      															<li aria-haspopup="true"><a href="icons.html" class="slide-item">Icons</a></li>
      															<li><h3 class="fs-14 fw-bold mb-1 mt-2">Maps</h3></li>
      															<li aria-haspopup="true"><a href="map-leaflet.html" class="slide-item">Mapel Maps</a></li>
      															<li aria-haspopup="true"><a href="map-vector.html" class="slide-item">Vector Maps</a></li>
      
      															<li><h3 class="fs-14 fw-bold mb-1 mt-2">Tables</h3></li>
      															<li aria-haspopup="true"><a href="table-basic.html" class="slide-item">Basic Tables</a></li>
      															<li aria-haspopup="true"><a href="table-data.html" class="slide-item">Data Tables</a></li>
      
      														</ul>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      								</li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".3"/><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg> Advanced UI <i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="accordion.html" class="slide-item"> Accordion</a></li>
      										<li aria-haspopup="true"><a href="carousel.html" class="slide-item" >Carousel</a></li>
      										<li aria-haspopup="true"><a href="collapse.html" class="slide-item">Collapse</a></li>
      										<li aria-haspopup="true"><a href="modals.html" class="slide-item">Modals</a></li>
      										<li aria-haspopup="true"><a href="timeline.html" class="slide-item">Timeline</a></li>
      										<li aria-haspopup="true"><a href="sweet-alert.html" class="slide-item">Sweet Alert</a></li>
      										<li aria-haspopup="true"><a href="rating.html" class="slide-item">Ratings</a></li>
      										<li aria-haspopup="true"><a href="counters.html" class="slide-item">Counters</a></li>
      										<li aria-haspopup="true"><a href="search.html" class="slide-item">Search</a></li>
      										<li aria-haspopup="true"><a href="userlist.html" class="slide-item"> Userlist</a></li>
      										<li aria-haspopup="true"><a href="blog.html" class="slide-item">Blog</a></li>
      										<li aria-haspopup="true" class="sub-menu-sub"><a href="#">Submenu</a>
      											<ul class="sub-menu">
      												<li aria-haspopup="true"><a href="#" class="slide-item">Submenu-01</a></li>
      												<li aria-haspopup="true" class="slide-item sub-menu-sub"><a href="#">Submenu-02</a>
      													<ul class="sub-menu">
      														<li aria-haspopup="true"><a href="#" class="slide-item">SubmenuLevel-01</a></li>
      														<li aria-haspopup="true"><a href="#" class="slide-item">SubmenuLevel-02</a></li>
      														<li aria-haspopup="true"><a href="#" class="slide-item">SubmenuLevel-02</a></li>
      													</ul>
      												</li>
      												<li aria-haspopup="true"><a href="form-layouts.html" class="slide-item">Submenu-03</a></li>
      											</ul>
      										</li>
      									</ul>
      								</li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z" opacity=".3"/><path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z"/></svg> Utilities <i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="background.html" class="slide-item">Background</a></li>
      										<li aria-haspopup="true"><a href="border.html" class="slide-item">Border</a></li>
      										<li aria-haspopup="true"><a href="display.html" class="slide-item">Display</a></li>
      										<li aria-haspopup="true"><a href="flex.html" class="slide-item">Flex</a></li>
      										<li aria-haspopup="true"><a href="height.html" class="slide-item">Height</a></li>
      										<li aria-haspopup="true"><a href="margin.html" class="slide-item">Margin</a></li>
      										<li aria-haspopup="true"><a href="padding.html" class="slide-item">Padding</a></li>
      										<li aria-haspopup="true"><a href="position.html" class="slide-item">Position</a></li>
      										<li aria-haspopup="true"><a href="width.html" class="slide-item">Width</a></li>
      										<li aria-haspopup="true"><a href="extras.html" class="slide-item">Extras</a></li>
      									</ul>
      								</li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="side-menu__icon" viewBox="0 0 24 24" ><g><rect fill="none"/></g><g><g/><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z"/><path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity=".3"/></g><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z"/><path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z"/><path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z"/></g></g></svg>Pages <i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="profile.html" class="slide-item">Profile</a></li>
      										<li aria-haspopup="true"><a href="editprofile.html" class="slide-item">Edit-profile</a></li>
      										<li aria-haspopup="true" class="sub-menu-sub"><a href="#">Mail</a>
      											<ul class="sub-menu">
      												<li aria-haspopup="true"><a href="mail.html" class="slide-item">Mail-inbox</a></li>
      												<li aria-haspopup="true"><a href="mail-compose.html" class="slide-item">Mail-compose</a></li>
      												<li aria-haspopup="true"><a href="mail-read.html" class="slide-item">Mail-read</a></li>
      												<li aria-haspopup="true"><a href="mail-settings.html" class="slide-item">Mail-settings</a></li>
      												<li aria-haspopup="true"><a href="chat.html" class="slide-item">Chat</a></li>
      
      											</ul>
      										</li>
      										<li aria-haspopup="true" class="sub-menu-sub"><a href="#">Forms</a>
      											<ul class="sub-menu">
      												<li aria-haspopup="true"><a href="form-elements.html" class="slide-item">Form Elements</a></li>
      												<li aria-haspopup="true"><a href="form-advanced.html" class="slide-item">Advanced Forms</a></li>
      												<li aria-haspopup="true"><a href="form-layouts.html" class="slide-item">Form Layouts</a></li>
      												<li aria-haspopup="true"><a href="form-validation.html" class="slide-item">Form Validation</a></li>
      												<li aria-haspopup="true"><a href="form-wizards.html" class="slide-item">Form Wizards</a></li>
      												<li aria-haspopup="true"><a href="form-editor.html" class="slide-item">WYSIWYG Editor</a></li>
      											</ul>
      										</li>
      										<li aria-haspopup="true"><a href="invoice.html" class="slide-item">Invoice</a></li>
      										<li aria-haspopup="true"><a href="todotask.html" class="slide-item">Todotask</a></li>
      										<li aria-haspopup="true"><a href="pricing.html" class="slide-item">Pricing</a></li>
      										<li aria-haspopup="true"><a href="gallery.html" class="slide-item">Gallery</a></li>
      										<li aria-haspopup="true"><a href="faq.html" class="slide-item">Faqs</a></li>
      										<li aria-haspopup="true"><a href="empty.html" class="slide-item">Empty Page</a></li>
      									</ul>
      								</li>
      								<li aria-haspopup="true"><a href="widgets.html" class=""><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3"/><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> Widgets </a></li>
      								<li aria-haspopup="true"><a href="#" class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg> Custom <i class="fe fe-chevron-down horizontal-icon"></i></a>
      									<ul class="sub-menu">
      										<li aria-haspopup="true"><a href="signin.html" class="slide-item">Sign In</a></li>
      										<li aria-haspopup="true"><a href="signup.html" class="slide-item">Sign Up</a></li>
      										<li aria-haspopup="true"><a href="forgot.html" class="slide-item">Forgot Password</a></li>
      										<li aria-haspopup="true"><a href="reset.html" class="slide-item">Reset Password</a></li>
      										<li aria-haspopup="true"><a href="lockscreen.html" class="slide-item">Lock screen</a></li>
      										<li aria-haspopup="true"><a href="underconstruction.html" class="slide-item">UnderConstruction</a></li>
      										<li aria-haspopup="true"><a href="404.html" class="slide-item">404 Error</a></li>
      										<li aria-haspopup="true"><a href="500.html" class="slide-item">500 Error</a></li>
      									</ul>
      								</li>
      							</ul>
      						</nav>
      						<!--Nav-->
      					</div>
      				</div>
      			</div>
      			<!--Horizontal-main -->
			<!-- main-content opened -->
			<div class="main-content horizontal-content">

				<!-- container opened -->
				<div class="container">

					<!-- breadcrumb -->
					<div class="breadcrumb-header justify-content-between">
						<div class="left-content">
							<div>
							  <h2 class="main-content-title tx-24 mg-b-1 mg-b-lg-1">Hi, welcome back!</h2>
							  <p class="mg-b-0">Sales monitoring dashboard template.</p>
							</div>
						</div>
						<div class="main-dashboard-header-right">
							<div>
								<label class="tx-13">Customer Ratings</label>
								<div class="main-star">
									<i class="typcn typcn-star active"></i> <i class="typcn typcn-star active"></i> <i class="typcn typcn-star active"></i> <i class="typcn typcn-star active"></i> <i class="typcn typcn-star"></i> <span>(14,873)</span>
								</div>
							</div>
							<div>
								<label class="tx-13">Online Sales</label>
								<h5>563,275</h5>
							</div>
							<div>
								<label class="tx-13">Offline Sales</label>
								<h5>783,675</h5>
							</div>
						</div>
					</div>
					<!-- /breadcrumb -->

					<div class="row">
            /** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'africa_en', {"width":950,"height":550,"paths":{"dz":{"path":"m 419.83634,8.1546547 -9.8215,-3.2979062 -40.87478,7.6790665 -8.90675,6.764318 5.44034,28.092384 -16.24881,0.649952 -9.77336,15.719217 -23.27792,5.584776 0.0722,11.434346 76.6703,58.616072 13.07126,1.10732 43.59495,-34.06231 -4.35709,-5.48849 -8.18458,-1.107324 -4.91075,-8.232729 V 57.551031 l -3.27383,-3.297906 0.55366,-8.786393 -8.71418,-8.786392 -1.08325,-9.340056 3.80342,-2.744243 -1.63691,-9.893719 -2.14244,-6.5476673 0,0 z","name":"Algeria"},"ma":{"path":"m 358.23531,19.68529 h -27.80352 l -5.44034,12.084299 -12.54167,6.042149 -10.3511,28.020167 -20.17259,12.084298 -28.33311,46.676207 27.80352,-0.55366 1.08325,-13.72122 h 7.07726 V 91.637419 h 24.52968 l 0.55367,-24.168597 23.44642,-5.488487 9.82151,-15.935868 15.26184,-0.553663 -4.93482,-25.805514 0,0 z","name":"Morocco"},"mr":{"path":"m 253.78556,126.51819 5.24776,6.86061 -1.08325,29.65708 7.63092,-5.48848 5.44034,-1.10733 7.63093,2.74425 8.71417,12.08429 8.18459,-5.48848 39.79152,-0.55367 -9.8215,-66.463638 10.54367,-0.04815 -19.643,-15.045192 0.0241,9.773357 -24.8667,0.02407 -0.12036,18.656033 -7.14947,-0.0241 -0.91475,13.76936 -29.60894,0.64995 0,0 z","name":"Mauritania"},"sn":{"path":"m 270.94912,158.2455 -4.59781,1.13139 -9.48449,6.90876 -2.16651,3.85157 -0.67403,3.82749 3.44234,2.47945 11.67507,-0.14443 7.51056,-2.02208 0.84253,3.68307 -0.69809,4.88667 0.1685,0.0722 -18.65604,0.28887 3.00904,7.22169 1.63692,-4.4293 22.36317,1.87764 0.14444,0.14443 2.33501,0.0963 7.14948,0.28887 0.28887,-4.21266 -8.64196,-10.37516 -9.62893,-13.09534 -6.01807,-2.47944 z","name":"Senegal"},"gm":{"path":"m 258.57595,178.70696 -0.31294,2.67202 16.65804,-0.24072 0.84253,-2.47945 -0.36109,-2.50352 -4.79039,1.94986 -12.03615,0.60181 0,0 z","name":"Gambia"},"gw":{"path":"m 262.69231,193.60772 3.37013,6.66802 9.46042,-8.13644 0.0963,-2.50352 -11.14547,-1.61284 -1.78136,5.58478 0,0 z","name":"Guinea-Bissau"},"gn":{"path":"m 267.07347,201.81637 7.31799,11.26584 9.53263,-8.28087 9.77336,-0.4333 8.13644,10.80846 6.90875,4.54967 2.59981,-5.05518 2.31094,-1.29991 -0.16851,-11.12141 -4.59781,-13.19162 -14.10637,1.5647 -17.45242,-1.39619 -0.0963,4.47744 -10.15852,8.11237 0,0 z","name":"Guinea"},"sl":{"path":"m 275.52286,214.3099 13.60085,13.14348 9.70114,-11.77136 -6.06622,-9.50856 -8.35309,0.84253 -8.88268,7.29391 0,0 z","name":"Sierra Leone"},"lr":{"path":"m 290.54398,228.89772 26.43139,17.66907 -0.62588,-13.3842 -7.99201,-9.41227 -7.79942,-6.90875 -10.01408,12.03615 0,0 z","name":"Liberia"},"ci":{"path":"m 319.19002,247.09638 10.30295,-7.29391 12.80647,-2.23872 13.07126,2.81646 -6.66803,-10.0863 -1.94986,-6.16251 1.94986,-18.22274 -11.67507,0.55367 -5.29591,-5.05519 -11.1214,0.28887 -5.29591,0.84253 0.55366,12.32502 -2.79238,1.1314 -3.34606,6.16251 8.61789,10.0863 0.84253,14.85261 0,0 z","name":"Cote d'Ivoire"},"ml":{"path":"m 288.83484,172.68888 7.41427,-5.07926 41.21179,-0.24072 -9.53263,-66.29514 10.88068,-0.31294 52.64614,40.17669 7.07726,1.01103 -2.67203,22.3391 -33.09942,3.00904 -25.54072,19.06527 -4.64595,13.04719 -17.7413,0.74624 -4.52559,-13.02312 -13.60085,0.9629 0.52959,-4.2608 -8.40124,-11.14548 0,0 z","name":"Mali"},"bf":{"path":"m 363.77194,168.9336 8.76232,-0.6981 14.37116,20.31703 -13.33605,10.06223 -9.653,-2.47945 -12.97497,0.1685 -2.09429,7.60685 -10.88069,0.52959 -2.98496,-4.06822 3.85157,-12.37316 24.93891,-19.06527 0,0 z","name":"Burkina Faso"},"ne":{"path":"m 388.56641,187.51742 6.13844,-0.14443 5.53663,-8.30495 9.29191,-1.66099 9.89372,6.04215 21.11142,0.60181 16.32102,-6.64396 6.13844,-5.27183 0.45737,-6.93283 11.38621,-11.48249 3.00903,-25.34814 -7.48648,-15.69514 -19.16156,-4.67003 -44.34119,34.56783 -6.28287,-0.60181 -2.6961,24.0001 -22.62797,2.26279 13.31198,19.28192 0,0 z","name":"Niger"},"gh":{"path":"m 348.72674,223.74625 2.6961,6.33101 7.02912,11.02512 3.89971,-0.14443 10.63996,-6.04215 -0.74624,-34.39933 -8.23273,-2.40723 -11.53064,0.31294 -3.75528,25.32407 0,0 z","name":"Ghana"},"tg":{"path":"m 374.91741,233.85661 6.45138,-3.77935 -0.14443,-24.91484 -4.18858,-6.78839 -2.6961,2.2628 0.57773,33.21978 0,0 z","name":"Togo"},"bj":{"path":"m 383.31865,229.61989 h 5.10333 l 0.28887,-14.49153 6.45138,-9.36413 -0.28887,-16.29695 -5.84957,-0.14444 -10.03816,7.84758 4.18859,7.992 0.14443,24.45747 0,0 z","name":"Benin"},"ng":{"path":"m 390.20333,229.33102 9.43635,0.45737 11.3862,12.68611 5.53663,1.51656 4.33301,-2.11837 6.59582,-0.91474 2.23872,-9.19563 8.97897,-5.89771 9.72521,-0.45738 17.81351,-32.76241 -0.28887,-7.3902 -8.23273,-6.33101 -16.46545,7.24576 -22.02617,-0.31294 -10.49552,-6.64395 -7.48649,1.66098 -3.89971,6.7884 -0.28887,19.16155 -6.28287,8.90676 -0.57774,13.60085 0,0 z","name":"Nigeria"},"tn":{"path":"m 422.31579,7.7694978 13.31199,-5.3681247 4.38116,2.8405323 0.1685,3.4664124 -2.04614,2.6720262 0.31294,4.742245 2.04614,1.107326 v 8.521597 l -2.35908,3.947858 0.31294,2.527593 8.93082,3.153472 -7.19762,11.193623 -2.81646,-0.168506 -0.48144,9.003043 -3.1294,0.481446 -2.67203,-2.359086 0.62588,-9.147477 -8.76232,-8.521597 -1.10733,-7.414271 4.23673,-3.321978 -3.75528,-17.3561342 0,0 z","name":"Tunisia"},"ly":{"path":"m 434.68896,57.599175 3.75528,-0.62588 1.10732,-8.666031 h 1.87764 l 7.67907,-12.613889 18.9449,5.512559 5.17555,8.04015 18.63197,8.521597 9.70114,-4.092292 -0.93882,-4.092292 -4.23673,-4.092293 0.48145,-2.840532 6.88468,-5.825498 h 13.62492 l 5.17555,6.932824 10.9529,1.588773 1.42027,88.802739 -8.13644,-0.31294 -49.15566,-25.56479 -5.31998,3.00904 -20.19666,-5.05518 -5.48849,-7.245767 -7.99201,-1.107326 -4.06822,-7.245765 0.12037,-33.027207 0,0 z","name":"Libya"},"eg":{"path":"m 535.50378,45.635238 6.42731,0.168506 12.5176,3.466413 5.94586,0.168506 7.36612,-6.162511 h 3.44234 l 6.2588,3.466412 h 7.91979 l 1.42027,-0.09629 5.00704,14.39524 1.42027,4.645956 1.32397,6.956897 -2.35908,1.733206 -4.06822,-2.046146 -4.6941,-15.309988 -4.23673,-0.31294 -0.31294,5.199618 2.81646,9.003044 22.55575,27.923877 0.48145,11.988012 -6.57174,7.58278 -61.7214,-0.6981 -0.93882,-72.072493 0,0 z","name":"Egypt"},"td":{"path":"m 465.35708,173.07404 0.31294,-7.10133 11.41027,-11.09734 3.05718,-27.24985 -7.60685,-14.53967 5.31998,-2.72018 51.51474,26.84063 -0.31294,26.3351 -9.07526,7.72721 v 13.57679 l 5.94586,11.50656 h -10.49552 l -17.38021,17.18763 -0.45737,5.19962 -12.83054,-0.16851 -0.16851,2.35909 -7.31798,-0.9629 -5.00704,-9.46041 -3.75528,-1.85357 0.48144,-2.88868 4.71818,-3.61085 v -16.89876 l -6.5236,-1.01103 -7.87164,-5.84957 6.04215,-5.31998 0,0 0,0 z","name":"Chad"},"sd":{"path":"m 531.21891,164.48022 0.4333,-28.47754 5.92179,0.16851 -0.67402,-15.81551 62.10655,0.55367 8.88268,-8.9549 19.16156,30.64404 -10.49553,12.37317 v 18.89676 l -16.5136,35.50666 -5.68107,2.50352 1.80543,9.89372 h 7.07726 l 9.60485,13.93786 -7.70314,0.98697 -1.97393,3.58677 -0.19258,5.17555 -23.10941,-0.40923 -2.35909,-3.58678 -16.15252,-0.91474 -29.65708,-30.52369 2.96089,-1.78135 0.79439,-7.17355 -7.10133,-4.18858 -6.47545,-12.7824 0.36108,-11.89172 8.97897,-7.72721 0,0 z","name":"Sudan"},"cm":{"path":"m 429.32083,241.15052 7.75128,7.12541 -0.55366,11.02511 42.5117,-0.98696 3.46641,-3.89971 -12.18059,-13.11941 -1.80542,-4.74225 7.75128,-14.5156 -5.27183,-9.62892 -4.42931,-2.38316 v -4.88668 l 5.1274,-3.34605 0.28887,-15.2137 -4.06822,-0.45737 -0.0722,7.992 -17.86165,33.34015 -10.92883,0.55366 -7.48648,5.15148 -2.23873,7.992 0,0 z","name":"Cameroon"},"er":{"path":"m 619.22727,169.94464 -0.60181,-14.17859 9.53263,-11.12141 2.57574,1.97393 4.6941,15.69515 22.53168,16.77839 -4.09229,5.03112 -16.48953,-14.17859 h -18.15052 l 0,0 z","name":"Eritrea"},"dj":{"path":"m 654.78207,186.4101 -1.37212,8.08829 9.53263,-0.14443 0.14443,-11.89172 -3.49048,-2.14244 -4.81446,6.0903 0,0 z","name":"Djibouti"},"et":{"path":"m 601.84706,211.01199 17.52464,-38.99713 17.40428,0.0963 15.43035,13.40828 -1.08325,11.04919 h 11.96393 l 1.22769,6.64396 19.35414,11.57878 11.93986,0.6018 -22.70018,24.38525 -31.17364,9.60485 h -7.72721 l -13.76936,-11.74728 -5.44035,-2.28687 -10.54367,-15.52664 -6.95689,0.0963 -0.81846,-7.1254 5.36812,-1.78136 0,0 z","name":"Ethiopia"},"so":{"path":"m 665.03687,194.8354 9.8215,6.6921 2.91275,-0.14443 24.38525,-8.37716 2.76832,8.93082 -1.94986,7.53464 -5.27184,4.18858 -13.16755,-0.84253 -18.84862,-11.57878 -0.64995,-6.40324 0,0 m 39.06936,-2.38316 10.5196,-4.04414 3.7312,2.23872 -0.40923,9.34006 -9.70114,27.63501 -52.5017,56.23291 -6.09029,-4.18858 -0.40923,-23.7353 7.89571,-9.07526 16.75433,-5.17555 24.57783,-25.94994 6.4273,-5.72921 1.80543,-8.37717 -2.59981,-9.17155 0,0 z","name":"Somalia"},"cf":{"path":"m 472.26583,240.59686 11.21769,12.13244 4.42931,-5.72921 7.05318,0.28887 1.51656,-5.58477 6.93282,-4.33302 14.39525,9.91779 8.30494,-8.23273 32.23282,1.42027 -29.8978,-30.8607 4.02007,-2.50352 0.55366,-5.44034 -6.78839,-3.20162 h -9.96593 l -16.05623,15.9118 -0.55367,6.54767 -12.73425,-0.40923 -0.40923,2.79238 -8.30494,-0.84253 -7.48649,14.22674 1.54063,3.89971 0,0 z","name":"Central African Republic"},"gq":{"path":"m 426.96174,248.68516 -1.10732,4.74224 3.32198,1.80542 3.17754,-2.38315 -1.10732,-4.88668 -4.28488,0.72217 0,0 m 9.99001,12.71017 -0.14443,3.34606 10.92883,0.55366 -0.14444,-3.77935 -10.63996,-0.12037 0,0 z","name":"Equatorial Guinea"},"ga":{"path":"m 449.9508,261.2509 -0.28887,5.99401 -13.57678,-0.28887 -8.30495,16.05623 19.52264,21.35213 4.83854,-4.04414 -0.14444,-4.18858 -3.32197,-1.54063 v -2.93682 l 7.48648,-4.74225 6.64396,5.03111 7.34206,0.14444 -0.14444,-25.25185 -11.62692,-0.55367 -0.14444,-5.2959 -8.28087,0.26479 0,0 z","name":"Gabon"},"cg":{"path":"m 461.04813,260.98611 -0.14443,3.49048 11.50656,0.28887 0.40923,29.87373 -10.5196,-0.28887 -6.09029,-4.74224 -4.71817,2.64795 -0.21665,1.32398 2.4313,1.17954 0.6981,6.13844 -6.49953,5.58478 1.3962,2.93682 7.19762,-5.58478 h 3.46641 l 1.10733,3.34605 4.57373,1.94986 14.68411,-12.42131 -0.28887,-9.07526 3.05719,-7.3902 9.41227,-6.98097 2.52759,-23.61493 -6.6921,0.0241 -7.75128,10.61589 -19.54672,0.6981 0,0 z","name":"Congo"},"ao":{"path":"m 450.33596,310.83986 4.18858,5.44034 5.41627,-5.1274 -1.58878,-5.31998 -1.34804,-0.0963 -6.66803,5.10333 0,0 m 4.98296,8.37716 8.20866,30.64405 -0.19258,9.67706 -12.01208,12.90276 -1.80542,20.96698 46.21883,0.40923 15.02112,5.44034 12.39724,-1.61284 -7.22169,-9.05119 0.0241,-25.85366 14.20266,-0.60181 v -10.08629 l -11.53064,-0.48145 -2.31094,-23.87973 -4.8626,0.0722 -2.62389,-2.35909 -2.8646,0.14444 -3.80343,7.36612 H 487.5277 l -3.39419,-3.41827 1.01103,-4.83853 -3.996,-5.84957 -25.82959,0.40923 0,0 z","name":"Angola"},"cd":{"path":"m 457.14842,316.80979 24.81855,-0.4333 5.03111,7.14947 -0.19258,5.27184 1.85357,1.68506 h 12.32502 l 3.53863,-6.9569 h 5.03111 l 2.04615,2.07022 6.90875,-0.19258 2.04615,24.26489 11.93986,0.38516 v 1.87764 l 32.08839,14.46745 1.49248,2.81646 h 6.71618 l -0.74625,-10.15851 -12.13244,-5.8255 0.74624,-7.70314 5.22369,-12.22873 11.93987,-0.38516 -10.2548,-34.03824 0.19257,-14.46746 16.22474,-25.37221 0.19258,-3.5627 -2.4313,-1.32398 0.0963,-6.88468 -2.96089,-0.2648 -2.98497,-3.80342 -48.98714,-2.21465 -8.97897,8.73825 -14.70818,-9.67707 -5.17555,3.17754 -3.75528,31.60694 -9.29191,7.17355 -2.79239,6.35509 0.50552,9.41227 -16.75433,13.69715 -4.45337,-2.02208 0.6018,2.62388 -4.95889,4.74225 0,0 z","name":"Congo"},"rw":{"path":"m 573.75468,278.75147 6.76432,6.23473 -0.28887,6.66803 -10.49553,0.21665 v -7.36613 l 4.02008,-5.75328 0,0 z","name":"Rwanda"},"bi":{"path":"m 569.87904,293.9411 10.27887,-0.21666 -2.67202,9.00305 -2.59981,2.26279 h -3.17755 l -2.26279,-6.09029 0.4333,-4.95889 0,0 z","name":"Burundi"},"ug":{"path":"m 574.91015,276.80161 7.29391,6.83654 4.57374,-2.91275 12.37316,-2.02208 2.11837,0.21666 0.79438,-4.6941 6.98097,-14.68411 -5.87364,-12.22874 -19.0412,0.12037 -0.12036,5.03111 2.55167,2.45537 -0.38516,5.03112 -11.26584,16.85061 0,0 z","name":"Uganda"},"ke":{"path":"m 605.07275,246.54272 6.40324,12.49353 -7.67907,16.10437 -1.01104,4.88668 38.34719,23.71122 11.89172,-18.68011 -6.01808,-4.88667 -0.12036,-24.6019 7.53463,-8.23273 -12.01208,3.996 -9.07526,0.12036 -14.20266,-11.98801 -4.47745,-1.92578 -8.30495,0.77031 -1.46841,2.45538 0.19258,5.77735 0,0 z","name":"Kenya"},"tz":{"path":"m 604.44687,354.62738 42.05432,-5.15147 -9.46041,-18.29495 -0.50552,-17.52464 3.05718,-8.37717 -40.00817,-25.13149 -12.54168,2.07022 -4.35708,3.22569 -0.38516,7.34205 -2.81646,10.18259 -2.93682,3.49049 -4.21266,0.38515 8.06423,27.94795 13.16755,6.18659 9.07526,0.26479 1.80542,13.3842 0,0 z","name":"Tanzania"},"zm":{"path":"m 517.73842,386.59541 7.63092,10.59181 11.8195,0.72217 4.18858,2.31095 12.37317,0.14443 10.66403,-14.9489 29.80152,-13.33606 2.59981,-11.74729 -3.46641,-16.82654 -15.55071,-8.85861 -10.37517,0.72217 -5.17554,11.45842 0.14443,5.22369 12.22873,5.94586 0.72217,12.92683 -10.5196,0.57773 -2.59981,-4.35709 -29.22378,-12.46945 -0.8666,9.58078 -13.81751,0.4333 -0.57773,21.9058 0,0 z","name":"Zambia"},"mw":{"path":"m 596.23821,373.83709 7.48649,7.8235 -0.14443,10.01408 1.44434,4.21265 9.94186,-10.73625 -1.15547,-13.649 -5.31998,-4.06822 -4.74225,-23.95194 -8.20865,-0.28887 3.73121,17.25984 -3.03312,13.38421 0,0 z","name":"Malawi"},"mz":{"path":"m 581.8189,455.39407 6.47545,5.36812 15.26185,-9.29191 2.45537,-13.79343 v -22.77241 l 24.48154,-20.02816 4.18858,0.14444 14.82854,-14.22674 -2.31094,-29.32007 -39.31008,4.9589 1.15547,8.85861 6.76432,5.22369 1.58877,15.95994 -13.23977,12.92683 -3.17754,-7.24577 0.57773,-9.58078 -7.63092,-8.28087 -18.72825,8.71417 17.42835,8.85861 0.57773,25.82959 -11.53063,17.11541 0.14443,20.58183 0,0 z","name":"Mozambique"},"zw":{"path":"m 542.07552,404.89036 21.59286,24.38525 16.56175,4.21265 11.09733,-17.40427 -0.8666,-23.06128 -18.00609,-9.29191 -6.76431,3.05719 -10.0863,15.3822 -13.96194,-0.14443 0.4333,2.8646 0,0 z","name":"Zimbabwe"},"na":{"path":"m 474.40826,476.28883 8.06423,0.57773 4.74224,4.79039 11.24177,0.14444 2.74424,-31.91988 v -20.89477 l 7.19762,-1.44434 2.74425,-21.9058 18.29495,-0.57773 6.47545,-5.36813 -10.9529,-0.4333 -14.82854,2.02208 -15.98401,-5.80143 h -44.91893 l 1.15547,12.75832 14.97298,22.05024 -2.59981,11.31398 0.14443,5.94586 11.50656,28.74234 0,0 z","name":"Namibia"},"bw":{"path":"m 503.19874,450.45924 5.17555,1.58877 -0.72217,14.80447 5.31998,0.72217 12.22873,-11.02511 14.68411,1.58877 3.89972,-9.86965 18.58382,-16.97098 -22.31503,-25.68515 -0.28887,-4.21265 -2.45538,-0.72217 -6.76431,6.23473 -17.57279,0.4333 -2.45537,21.9058 -6.90876,1.58877 -0.40923,19.61893 0,0 z","name":"Botswana"},"sz":{"path":"m 581.09673,457.12727 -6.04215,1.01104 -2.59981,7.10133 4.62189,4.21265 h 5.60885 l 4.74224,-6.81246 -6.33102,-5.51256 0,0 z","name":"Swaziland"},"ls":{"path":"m 548.69541,484.54563 7.34205,-5.65699 3.46641,0.14443 4.18858,5.22369 -0.4333,5.22369 -7.05318,2.59981 v 2.02208 l -7.77536,-0.43331 -1.87764,-5.65699 2.14244,-3.46641 0,0 z","name":"Lesotho"},"za":{"path":"m 564.94421,432.16429 -19.01712,17.57278 -4.52559,10.85661 -15.06927,-1.87764 -12.54167,11.14548 -8.32902,-0.81846 0.67403,-15.40627 -2.9609,-1.03511 -2.07022,31.51065 -14.78039,-0.14444 -4.45338,-5.24776 -6.5236,-0.0722 5.94586,17.06727 10.61589,10.03815 -7.58278,8.83454 4.91076,11.07326 11.36212,4.33302 9.05119,-7.70314 25.92588,0.14443 1.85357,-2.31094 11.50656,-2.02207 38.92492,-38.75642 -0.14443,-12.20466 -4.16451,5.3922 h -6.23473 l -7.58278,-6.35509 3.85157,-9.58078 6.61989,-1.34805 -0.60181,-19.69115 -14.66004,-3.39419 0,0 z m -9.1234,44.53377 3.63492,-0.14444 5.89771,6.40324 -0.1685,7.41427 -6.90876,3.49048 -0.4333,2.45538 -10.54367,0.12036 -3.2979,-7.94386 3.00903,-5.8255 8.81047,-5.96993 0,0 z","name":"South Africa"},"mg":{"path":"m 704.90061,358.23823 -5.1274,12.18059 -8.78639,15.50256 -15.38221,1.10733 -6.59581,7.75128 1.10733,23.63901 -9.53264,11.07326 1.10733,18.82455 8.06422,9.21969 9.53264,-1.10733 9.53263,-7.02911 -2.19058,-11.07326 21.97802,-38.03425 -4.40523,-4.79039 4.40523,-9.21969 4.76632,1.46841 1.46841,-3.68306 -4.40524,-18.82455 -2.57573,-7.75128 -2.9609,0.74624 0,0 z","name":"Madagascar"}}});

					</div>

				</div>
			</div>
			<!-- Container closed -->

			<!-- Footer opened -->
        		<div class="main-footer ht-40">
      				<div class="container-fluid pd-t-0-f ht-100p">
      					<span>Copyright © 2021. Awesome Coding Tutorials - provided with &hearts; by Herr B&auml;r. All rights reserved.</span>
      				</div>
      			</div>			<!-- Footer closed -->

		</div>
		<!-- End Page -->

		<!-- Back-to-top -->
		<a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>

		<!-- JQuery min js -->
		<script src="assets/plugins/jquery/jquery.min.js"></script>

		<!-- Bootstrap Bundle js -->
		<script src="assets/plugins/bootstrap/js/popper.min.js"></script>
		<script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

		<!-- Ionicons js -->
		<script src="assets/plugins/ionicons/ionicons.js"></script>

		<!-- Moment js -->
		<script src="assets/plugins/moment/moment.js"></script>

		<!--Internal Sparkline js -->
		<script src="assets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>

		<!-- Moment js -->
		<script src="assets/plugins/raphael/raphael.min.js"></script>

		<!-- Internal Piety js -->
		<script src="assets/plugins/peity/jquery.peity.min.js"></script>

		<!-- Rating js-->
		<script src="assets/plugins/rating/jquery.rating-stars.js"></script>
		<script src="assets/plugins/rating/jquery.barrating.js"></script>

		<!-- P-scroll js -->
		<script src="assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
		<script src="assets/plugins/perfect-scrollbar/p-scroll.js"></script>

		<!-- Sidemenu js-->
		<script src="assets/plugins/sidebar/sidebar.js"></script>
		<script src="assets/plugins/sidebar/sidebar-custom.js"></script>

		<!-- Eva-icons js -->
		<script src="assets/js/eva-icons.min.js"></script>

		<!--Internal Apexchart js-->
		<script src="assets/js/apexcharts.js"></script>

		<!-- Horizontalmenu js-->
		<script src="assets/plugins/horizontal-menu/horizontal-menu-2/horizontal-menu.js"></script>

		<!-- Sticky js -->
		<script src="assets/js/sticky.js"></script>

		<!-- Internal Map -->
		<script src="assets/plugins/jqvmap/jquery.vmap.min.js"></script>
		<script src="assets/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>

		<!-- Internal Chart js -->
		<script src="assets/plugins/chart.js/Chart.bundle.min.js"></script>

		<!--Internal  index js -->
		<script src="assets/js/index.js"></script>
		<script src="assets/js/jquery.vmap.sampledata.js"></script>

		<!-- custom js -->
		<script src="assets/js/custom.js"></script>
		<script src="assets/js/jquery.vmap.sampledata.js"></script>

	</body>
</html>