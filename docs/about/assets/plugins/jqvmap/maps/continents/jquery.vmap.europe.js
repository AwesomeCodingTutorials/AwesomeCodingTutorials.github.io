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
jQuery.fn.vectorMap('addMap', 'europe_en', {"width":950,"height":550,"paths":{"ee":{"path":"m 579.52752,247.70418 -14.10713,-0.50382 -8.94292,5.46651 -0.12596,4.0558 5.79401,5.46652 18.01178,3.04815 -0.62978,-17.53316 0,0 m -27.73563,10.02615 -3.90466,-0.12596 -2.26721,2.29241 1.63743,2.41836 3.90465,0.25192 2.01531,-2.92219 -1.38552,-1.91454 0,0 z","name":"Estonia"},"pt":{"path":"m 213.92602,432.50764 -3.42602,3.45121 6.14668,3.45121 0.68017,-4.81154 -3.40083,-2.09088 0,0 m 18.46523,-2.06569 -4.10618,2.74586 3.42602,2.74585 5.46651,-1.38552 -4.78635,-4.10619 0,0 m 2.72067,9.64828 -2.0405,5.51689 2.72066,3.45121 3.42602,-2.74585 -4.10618,-6.22225 0,0 m 16.39954,11.0086 -1.36033,3.45121 2.04049,2.06569 5.46652,-3.45121 -6.14668,-2.06569 0,0 m 51.94448,30.27995 -2.72066,3.45121 2.72066,3.45121 4.10619,-2.06568 -4.10619,-4.83674 0,0 m 57.31023,-63.43172 -1.56186,21.79049 -4.45886,4.03061 0.45345,2.46875 3.12372,5.16421 -2.01531,6.29783 3.35045,1.13361 7.8093,-0.90689 -0.45344,-6.29782 5.11384,-29.19673 -1.10842,-4.03061 -10.25287,-0.45345 0,0 z","name":"Portugal"},"es":{"path":"m 322.19828,524.98494 -4.40848,2.54433 2.04049,2.06568 2.36799,-4.61001 0,0 m -15.31632,0.47864 -5.46651,1.38552 2.72066,4.13138 h 4.10618 l -1.36033,-5.5169 0,0 m -12.99872,-4.13138 -3.42601,3.45121 4.78635,4.13138 2.72066,-6.19706 -4.081,-1.38553 0,0 M 404.67463,402.22769 H 372.5809 l -6.47417,-2.9222 -3.12372,0.22673 -3.7787,7.85968 1.33514,8.08642 12.26817,1.1336 1.56186,5.16422 -5.34056,30.10362 0.22673,5.39094 8.691,4.71078 10.02614,0.68016 20.05228,-4.9375 9.79942,-12.34374 0.22673,-12.57046 17.382,-15.71938 0.8817,-6.9528 -15.82015,-0.22672 -15.82014,-7.68335 0,0 m 32.09373,30.75859 -4.00542,1.36033 0.8817,3.60235 h 5.794 l 2.44356,-2.69547 -5.11384,-2.26721 0,0 z","name":"Spain"},"is":{"path":"m 298.87112,181.32508 -4.93749,-2.79624 -6.65051,4.20695 -5.71843,5.29018 0.15115,2.94738 7.40625,0.93208 -0.45345,5.29018 -2.61989,2.64508 0.62978,1.71301 7.40624,0.47864 v 8.56504 l 10.65593,1.86416 6.32302,3.57717 7.10395,0.30229 12.19259,-6.0711 9.42155,-12.44451 0.15115,-8.4139 -5.71843,-4.83673 -4.78635,-4.0558 -2.16645,1.56186 -3.24968,4.20695 -3.70312,-0.47864 -3.70312,-4.0558 -4.78635,0.45345 -6.9528,5.76881 -4.18176,4.50924 -2.3176,-2.0153 -0.15115,-4.98788 2.3176,-1.56187 -1.66263,-2.5947 0,0 z","name":"Iceland"},"no":{"path":"m 505.18796,21.738124 -4.15657,-4.181757 -9.22002,4.484053 h -16.92856 l -2.67028,9.874994 9.49713,8.388706 4.15657,-0.604591 5.94514,-10.17729 5.03827,3.602358 -3.57717,7.179523 -1.78858,10.479586 4.15656,6.574932 8.91773,-14.963639 11.588,-14.081943 -4.45886,-3.879462 -6.49936,-2.69547 0,0 m 5.03826,-17.9614046 -7.43143,6.8772276 4.45886,6.877228 h 8.01084 l 3.27487,4.484054 9.79942,5.088644 11.2857,-6.574932 7.73374,-6.574932 -2.67028,-5.3909405 -7.73374,-4.4840534 -5.64285,5.0886449 -3.85427,-4.7863491 -2.97257,0.3022957 -3.85428,8.3887064 -5.64285,-5.6932361 -0.60459,-3.8794619 -4.15657,0.2771044 0,0 m 16.92856,30.8341646 -5.94515,5.390941 -5.03826,3.879462 2.36799,4.181757 4.76115,1.486288 7.73374,-3.602358 3.57716,-4.484053 -3.27487,-5.390941 -4.18176,-1.461096 0,0 m 46.55355,108.498976 5.08864,-3.72831 -0.45344,-4.18176 -3.22449,-1.86416 0.45344,-5.11383 h 2.77105 v -2.79624 l -12.01626,-3.24968 -18.01178,1.86416 -1.83897,7.91007 -4.15657,-1.38552 -2.77104,-4.66039 -8.79177,0.45344 -0.93208,8.84215 -4.15656,1.86416 -2.3176,-4.6604 -18.49043,14.88807 3.70313,4.18176 -6.92761,3.24967 -15.71938,31.18685 -5.54209,3.72831 0.45344,2.79624 5.54209,2.79623 -1.38552,6.04592 -9.24521,-0.47864 -2.77105,-3.24968 -5.99553,6.978 -3.70312,2.79623 -0.93208,6.52455 -3.22449,1.86416 -8.31313,1.86416 -4.15657,13.04909 2.77105,21.41262 3.22449,9.77423 3.70312,3.72831 8.31313,-0.45344 12.01626,-11.63839 4.61001,-7.91007 1.38552,11.63839 7.85969,-13.95599 0.45344,-39.12211 6.39859,-4.03061 1.91454,-21.58895 19.39731,-27.93716 9.24521,-3.24968 4.15657,-5.11384 13.85522,3.24968 6.92761,4.18176 2.3176,-11.63839 11.56281,-6.97799 6.95281,12.11702 0,0 z","name":"Norway"},"ge":{"path":"m 674.47357,400.11162 8.23756,10.75669 10.27805,4.73596 6.32302,-0.0252 10.85746,-2.94738 2.72066,-4.25733 -32.11892,-12.01626 -6.29783,3.75351 0,0 z","name":"Georgia"},"am":{"path":"m 710.39638,414.54624 12.09183,15.76976 -3.55198,4.15656 -8.56504,-1.48628 -10.63073,-9.52232 0.5794,-6.24744 10.07652,-2.67028 0,0 z","name":"Armenia"},"az":{"path":"m 714.65371,409.07972 -2.54432,4.33291 11.86511,15.56823 4.13137,-1.33514 6.80166,7.12914 2.94738,-12.49489 7.38105,1.18399 -0.30229,-3.57717 -12.14221,-10.63073 -2.3176,6.24745 -15.82015,-6.42379 0,0 z","name":"Azerbaijan"},"cy":{"path":"m 643.61421,464.8029 3.09854,2.24203 -9.59789,9.09406 -4.58482,-0.15115 -3.40083,-2.39317 0.45344,-4.45886 6.95281,-0.45345 7.07875,-3.87946 0,0 z","name":"Cyprus"},"gb":{"path":"m 399.03178,261.35787 -4.61001,6.978 1.83896,2.79623 h 10.63074 v 4.6604 l -2.77105,3.72831 1.83897,9.77423 5.99553,11.63838 4.61001,10.70631 7.38105,2.79624 3.22449,5.59247 -0.45344,5.11383 -4.61001,2.79624 -0.45345,2.3176 3.22449,1.86416 -2.77104,3.72831 -6.47417,2.79624 -12.4697,-1.38553 -19.4225,8.84215 -6.47417,-3.24967 18.49043,-10.70631 -2.3176,-1.38552 -9.69866,-0.93208 5.99553,-8.84215 0.93208,-7.45663 7.85969,-0.93208 -1.38552,-14.43462 -9.24521,-0.45344 -2.77105,-3.24968 0.45345,-10.70631 -5.54209,0.45344 5.54209,-18.61638 10.17729,-7.45662 3.27487,3.22448 0,0 m -19.39731,31.21204 -8.31314,0.93208 -0.45344,7.45663 5.54209,3.72831 5.99553,-1.38552 2.3176,-4.18176 -5.08864,-6.54974 0,0 z","name":"United Kingdom"},"ie":{"path":"m 382.38032,305.36709 -2.29241,15.11479 -20.32939,7.45663 h -6.47416 l -4.61001,-3.24968 v -2.79624 l 10.17729,-6.52454 -2.77105,-5.59248 0.45344,-7.91007 8.79177,0.45345 4.03061,-9.47194 -0.52902,8.4139 6.82685,5.41613 6.72608,-1.30995 0,0 z","name":"Ireland"},"se":{"path":"m 529.01894,149.25654 4.9375,4.55963 h 9.24521 l 5.08864,9.77423 1.38553,16.75222 -12.4697,8.84215 v 8.84215 l -8.79177,12.11702 -5.08865,0.45344 -6.92761,11.63839 0.45345,11.18494 12.01625,8.84215 -0.93208,5.11384 -4.61001,6.97799 -6.92761,6.04591 0.45345,20.0271 -10.63074,3.72831 -3.70312,7.91007 h -5.08864 l -2.77105,-13.95598 -11.56281,-17.73469 9.49713,-15.89571 0.65497,-39.27326 6.54974,-3.60236 1.58705,-22.47064 18.66676,-26.72799 8.96811,-3.14891 0,0 m 1.93973,114.84719 -5.31536,4.20695 2.67027,6.17187 4.71078,-4.58482 -2.06569,-5.794 0,0 z","name":"Sweden"},"fi":{"path":"m 551.86746,180.393 5.2146,2.29241 3.22449,6.04591 -3.22449,4.18176 -16.17282,17.6843 -2.77104,9.32079 3.70312,13.50254 12.4697,9.32079 16.62626,-7.91008 13.40178,-1.86415 12.4697,-20.0271 -9.24521,-21.89124 -8.79177,-20.95918 1.38552,-13.50254 -5.54209,-0.93208 -1.4359,-9.8498 -7.45663,-12.1674 -8.26275,5.71843 -3.24968,13.27582 -8.76657,-5.26499 -12.1926,-2.97257 -2.72066,3.1741 4.68558,4.23214 8.53986,-0.15115 6.87723,11.10937 1.23437,17.63392 0,0 z","name":"Finland"},"lv":{"path":"m 580.28326,267.12668 -17.25605,-2.79623 0.37787,9.64827 15.99648,9.77423 6.54974,-1.91454 -0.37787,-7.35586 -5.29017,-7.35587 0,0 z","name":"Latvia"},"lt":{"path":"m 561.99437,275.51539 -5.41613,-0.12596 -7.43144,7.10395 h -6.29783 l 0.37787,8.89254 -3.7787,6.97799 13.60331,0.12596 3.90465,-0.50383 3.90466,4.71078 8.94291,-0.37787 8.56505,-10.90784 -0.50383,-6.47417 -15.87052,-9.42155 0,0 z","name":"Lithuania"},"by":{"path":"m 561.6165,304.71212 3.77869,6.22225 -1.51147,4.96269 0.25191,3.92985 1.38552,4.71077 7.80931,-4.43367 9.69865,0.25191 6.80166,2.79624 h 17.25604 l 5.03827,-12.06664 3.02295,-4.55962 v -3.04815 l -10.83226,-15.24075 -9.5727,-3.80388 -7.8093,-0.8817 -6.80166,2.16645 0.25191,6.85204 -9.44674,11.94068 -9.32078,0.20153 0,0 z","name":"Belarus"},"pl":{"path":"m 563.6318,326.04916 2.14126,3.92985 0.50383,4.18175 -1.76339,4.0558 -4.03061,7.75893 -3.40083,1.53667 -4.40848,-1.91454 -2.64509,0.12595 -6.42378,2.41837 -7.30548,-2.16645 -11.83992,-8.38871 -11.588,-6.22225 -4.66039,-7.10395 -0.8817,-16.75222 9.06887,-7.88488 11.83992,-3.92985 4.40848,-0.50382 -1.76339,3.55197 1.13361,1.38552 19.92632,0.37787 4.28253,-0.12595 7.05356,10.80707 -1.76339,4.43367 0.75574,5.2146 1.36033,5.2146 0,0 z","name":"Poland"},"it":{"path":"m 478.23326,423.338 -6.6757,3.37564 0.8817,13.02391 5.34055,0.90688 4.00542,-3.82907 v -12.34375 l -3.55197,-1.13361 0,0 m -13.32621,-41.31375 -1.56186,3.95504 0.42826,4.30771 6.02072,7.02838 9.47193,-0.32749 20.90879,24.28443 13.0491,3.77869 7.70854,7.28029 1.83897,16.60108 4.13137,-2.41837 3.57717,-9.04368 -0.8817,-6.49936 6.12149,-0.55421 0.8817,-3.67793 -17.25605,-8.26275 -16.37435,-16.09725 -6.52455,-9.62308 -1.58706,-9.14444 8.33833,-1.99012 -2.14126,-6.02072 -5.11384,-4.30771 -4.40848,-0.20153 -6.14668,1.68781 -5.794,8.11161 -3.50159,2.3176 -5.41614,-3.32526 -5.76881,2.14126 0,0 m 50.81088,65.59818 -3.65274,-1.96492 -12.4697,1.96492 0.42825,3.37563 11.21014,5.64286 1.68781,1.83896 2.94739,0.42826 -0.15115,-11.28571 0,0 z","name":"Italy"},"fr":{"path":"m 478.91342,407.16518 -4.9123,4.9375 -0.45345,4.48405 4.00542,2.46875 1.56186,-0.22672 0.8817,-6.52455 -1.08323,-5.13903 0,0 m -43.90845,-71.19064 -5.56728,1.36033 -11.13456,12.11702 -3.35045,0.22672 -4.45886,-3.14891 -2.897,0.68016 -2.21683,6.9528 -16.27359,0.45345 0.45344,3.60236 11.13456,7.40624 12.92315,10.32844 -0.22673,12.34374 -6.90242,12.11702 14.93845,7.17952 15.16517,0.45345 4.68558,-5.39094 9.5727,0.22672 2.67028,2.46875 9.5727,-0.68017 4.91231,-6.29783 -6.24745,-7.40624 -0.45344,-4.71078 1.33514,-5.16421 -3.12373,-4.48406 -5.34055,1.56186 -0.68017,-4.03061 11.81473,-13.0239 v -7.85969 l -7.80931,-4.48406 -4.00542,-0.68016 -18.49042,-12.11702 0,0 z","name":"France"},"nl":{"path":"m 459.41535,309.7 -11.41167,5.61766 2.41837,2.19165 0.25191,5.61766 -2.41836,-0.47864 -2.67028,-4.15656 -6.3734,10.10171 9.79942,2.0405 3.65274,3.85427 1.93973,0.0504 1.28476,-8.71619 6.17187,-2.59471 -2.64509,-13.52773 0,0 z","name":"Netherlands"},"be":{"path":"m 438.05312,330.48283 -1.61225,4.03061 17.33163,11.43686 4.98787,1.18399 0.17634,-5.41613 -4.35809,-4.88712 h -2.67028 l -3.65274,-4.15656 -10.20248,-2.19165 0,0 z","name":"Belgium"},"de":{"path":"m 462.06044,308.71754 8.99329,-1.4611 v -6.34821 l 7.53221,-1.23437 4.13137,4.15656 4.3581,0.47864 6.80165,-2.94738 6.07111,1.71301 5.34056,4.6352 0.73054,17.35681 5.34056,7.10395 -7.02837,0.98246 -11.66358,7.33067 0.98246,2.44356 10.4292,9.77423 -0.73054,4.88711 -9.69866,4.88712 -8.9933,0.25191 -2.19164,4.6352 h -4.61001 l -2.19165,-4.88711 -8.01083,-1.96493 -0.25192,-8.06122 -6.80165,-4.6352 0.73055,-5.86957 -4.61001,-6.34821 1.20918,-8.31313 6.29783,-2.94739 -2.16645,-15.61861 0,0 z","name":"Germany"},"dk":{"path":"m 476.24314,267.45417 -10.45439,11.56281 -0.37787,7.53221 4.76116,12.41931 7.45663,-1.41071 -0.93208,-10.1521 5.13903,-5.74362 -0.10077,-4.50924 -3.62755,-9.39636 -1.86416,-0.3023 0,0 m 11.76435,20.50573 -2.3428,-0.10077 -3.07334,2.82143 0.37787,4.40848 7.28029,0.20153 0.37787,-4.98788 -2.61989,-2.34279 0,0 z","name":"Denmark"},"ch":{"path":"m 466.5193,362.87886 -10.98341,11.68877 0.22672,1.18399 4.50924,-1.41072 4.0558,5.64286 6.85204,-2.41837 4.73597,3.67793 1.93973,-1.10841 5.84438,-9.16964 -1.48628,-1.41071 -5.76881,-0.15115 -2.79624,-5.71843 -7.12914,-0.80612 0,0 z","name":"Switzerland"},"cz":{"path":"m 505.61621,351.51758 h 7.48182 3.67793 l 5.97034,4.25733 11.05899,-9.19483 -10.7315,-7.65816 -10.63073,-5.13903 -7.28029,1.30995 -9.87499,6.34821 10.32843,10.07653 0,0 z","name":"Czech Republic"},"sk":{"path":"m 524.28297,357.21081 1.73821,1.53667 0.22672,2.6199 19.22097,-0.42825 14.2079,-6.12149 -0.22673,-6.22226 -2.72066,1.20919 -3.90465,-2.09088 -2.39317,-0.10077 -6.29783,2.51913 -8.56505,-2.06568 -11.28571,9.14444 0,0 z","name":"Slovakia"},"at":{"path":"m 485.96699,364.74301 -1.63743,3.40083 1.41071,2.41837 5.86957,-1.20919 h 4.98788 l 5.41614,4.58482 11.51242,-2.09088 8.46429,-5.03826 2.16645,-3.40082 -0.32749,-4.38329 -7.60777,-5.69324 -10.20249,0.10077 -0.8565,5.794 -10.7315,5.23979 -8.46428,0.2771 0,0 z","name":"Austria"},"hu":{"path":"m 526.55019,363.43307 -2.92219,4.58482 0.22672,7.00318 4.66039,2.39317 14.33386,0.42826 19.97671,-16.8278 0.10077,-3.72831 -2.16646,-1.08323 -14.43462,6.54974 -19.77518,0.68017 0,0 z","name":"Hungary"},"si":{"path":"m 521.66308,369.45379 -6.39859,3.82908 -11.94069,2.6199 2.39318,6.90241 8.36351,0.10077 7.70854,-6.44898 -0.12595,-7.00318 0,0 z","name":"Slovenia"},"hr":{"path":"m 523.72877,377.43944 -8.89254,7.33067 h -9.01849 l -1.08322,6.34821 4.13137,1.08322 2.06569,-3.07334 3.24968,2.84662 2.5947,9.06887 17.81026,8.31314 1.76339,-2.01531 -18.06217,-18.64157 1.83897,-3.40083 17.15528,-0.65497 1.7382,-5.46651 -11.18494,0.32748 -4.10618,-2.06568 0,0 z","name":"Croatia"},"ba":{"path":"m 521.66308,386.96175 -0.93208,1.53667 16.90337,17.43239 6.19706,-9.11926 -0.22672,-3.60235 -5.41613,-6.57494 -16.5255,0.32749 0,0 z","name":"Bosnia and Herzegovina"},"mt":{"path":"m 516.14618,466.38995 -4.20695,0.85651 0.15115,4.66039 3.7787,1.25957 1.68781,-1.41072 -1.41071,-5.36575 0,0 z","name":"Malta"},"ua":{"path":"m 573.98543,321.99336 -7.30548,4.10618 1.81378,7.75893 -6.75128,14.23309 0.0504,6.27263 3.1741,2.01531 20.35458,1.00765 5.69324,-4.71077 6.09629,2.04049 8.74139,11.66358 -6.39859,11.48724 7.60777,2.21683 9.95057,-11.46204 5.69324,1.03284 5.29017,3.67793 -4.66039,6.14668 6.29783,9.82461 h 6.70089 l 3.45121,-6.54974 7.10395,-1.4359 0.20153,-5.31537 -13.20025,-2.0405 0.40306,-5.71842 h 12.79719 l 13.80483,-11.05899 6.0963,-5.31537 1.00765,-16.77741 -27.20661,-2.44356 -11.15975,-15.74456 -7.70854,-2.64509 -9.34598,0.40306 -4.20695,10.40401 -19.1454,0.25191 -6.22225,-2.87181 -9.01849,-0.45344 0,0 z","name":"Ukraine"},"md":{"path":"m 587.03453,358.67191 7.80931,12.01625 -0.65498,6.80166 2.79624,0.12595 6.62531,-11.21013 -7.96045,-9.87499 -4.50925,-1.86416 -4.10618,4.00542 0,0 z","name":"Moldova"},"ro":{"path":"m 565.44558,358.3948 -0.65498,3.72832 -14.58577,12.14221 12.1926,17.88583 7.8093,5.46652 h 14.05676 l 4.6352,-3.87947 6.22225,-0.80612 4.6352,2.79624 8.21237,-9.34598 -1.58705,-4.68558 -8.33833,-2.14126 -5.69323,-0.27711 0.2771,-8.01084 -7.55739,-11.89029 -19.62403,-0.98247 0,0 z","name":"Romania"},"rs":{"path":"m 548.74374,375.87757 -5.16422,3.87947 h -2.51913 l -1.71301,5.34055 6.0963,7.07876 0.40306,5.61766 -7.5574,10.68112 1.05804,3.1993 4.38329,0.80612 3.45121,-4.68558 1.86415,-0.12596 3.17411,3.07334 9.67346,-2.94738 -0.80612,-13.75446 -12.34374,-18.16294 0,0 z","name":"Serbia"},"bg":{"path":"m 563.58142,395.65275 0.40306,12.54528 4.23214,8.81696 15.89572,0.2771 7.15433,-5.06345 7.02838,-2.79624 -1.71301,-8.01084 1.58705,-4.28252 -3.57717,-1.86416 -4.9123,0.40306 -3.85427,3.87947 -16.17282,0.12595 -6.07111,-4.03061 0,0 z","name":"Bulgaria"},"al":{"path":"m 544.88947,414.21875 v 11.61319 l 3.32525,6.27264 2.39317,-0.2771 4.10619,-7.48182 -2.39318,-3.35045 -0.93207,-8.28794 -3.17411,-2.94738 -3.32525,4.45886 0,0 z","name":"Albania"},"mk":{"path":"m 562.27147,409.81027 -8.48947,2.79624 0.40306,7.20471 1.99011,2.54432 10.07653,-4.68558 -3.98023,-7.85969 0,0 z","name":"Macedonia"},"gr":{"path":"m 551.66593,433.96874 -0.2771,3.35044 11.66357,5.86958 5.56728,2.14126 -2.92219,3.07334 -6.49936,0.65497 -0.93208,2.94739 2.24203,5.06345 7.28029,3.87946 3.1741,0.27711 0.40306,-8.69101 4.76116,-5.74362 -12.99871,-15.3667 1.71301,-5.2146 3.04814,-0.12595 4.63521,3.72831 2.92219,-1.46109 0.93208,-5.21461 13.65369,0.12596 0.52901,-8.01084 -5.69323,4.00542 -16.70184,-0.40306 -10.85746,5.61766 -5.64285,9.49713 0,0 m 25.31727,32.72351 4.10618,0.12596 1.71301,2.54432 h 5.97034 l 3.98023,-1.4611 1.33514,1.61225 -2.64509,3.4764 -11.66358,0.40306 -2.11607,-2.79624 -2.24202,-1.33514 1.56186,-2.56951 0,0 z","name":"Greece"}}});

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