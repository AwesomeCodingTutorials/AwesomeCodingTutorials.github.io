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
            /** Add Algeria Map Data Points */
jQuery.fn.vectorMap('addMap', 'dz_fr', {"paths": {"1": {"path":"M 268.306 457.87 c 0 0 2.249 -0.725 2.249 -0.725 c 0 0 -0.496 -2.893 -0.496 -2.893 c 0 0 -3.133 -7.454 -3.133 -7.454 c 0 0 -2.249 -3.262 -2.249 -3.262 c 0 0 0.031 -6.131 0.031 -6.131 c 0 0 -1.682 -5.848 -1.682 -5.848 c 0 0 -2.49 -5.061 -2.49 -5.061 c 0 0 -6.095 -6.187 -6.095 -6.187 c 0 0 -1.521 -7.254 -1.521 -7.254 c 0 0 -4.417 -0.47 -4.417 -0.47 c 0 0 -4.163 0.675 -4.163 0.675 c 0 0 0.63 -56.826 0.63 -56.826 c 0 0 -0.259 -38.388 -0.259 -38.388 c 0 0 -8.571 -12.135 -8.571 -12.135 c 0 0 -2.714 -6.038 -2.714 -6.038 c 0 0 7.482 -7.683 7.482 -7.683 c 0 0 1.19 -2.448 1.19 -2.448 c 0 0 2.635 -0.807 2.635 -0.807 c 0 0 0.883 0.813 0.883 0.813 c 0 0 1.749 -0.209 1.749 -0.209 c 0 0 0.138 0.823 0.138 0.823 c 0 0 2.35 -1.681 2.35 -1.681 c 0 0 0.465 -8.884 0.465 -8.884 c 0 0 2.565 -6.436 2.565 -6.436 c 0 0 -1.848 -2.78 -1.848 -2.78 c 0 0 -0.051 -6.214 -0.051 -6.214 c 0 0 1.856 -3.176 1.856 -3.176 c 0 0 0.81 -10.075 0.81 -10.075 c 0 0 3.164 -5.032 3.164 -5.032 c 0 0 1.104 -3.51 1.104 -3.51 c 0 0 0.784 -10.595 0.784 -10.595 c 0 0 1.118 -4.885 1.118 -4.885 c 0 0 -4.273 -23.743 -4.273 -23.743 c 0 0 2.643 -13.284 2.643 -13.284 c 0 0 0.684 -28.618 0.684 -28.618 c 0 0 -21.085 13.188 -21.085 13.188 c 0 0 -15.816 11.178 -15.816 11.178 c 0 0 -8.624 9.693 -8.624 9.693 c 0 0 -3.966 6.909 -3.966 6.909 c 0 0 -10.189 7.171 -10.189 7.171 c 0 0 -1.53 5.245 -1.53 5.245 c 0 0 1.021 6.805 1.021 6.805 c 0 0 -0.608 2.721 -0.608 2.721 c 0 0 -5.818 4.933 -5.818 4.933 c 0 0 -11.195 0.456 -11.195 0.456 c 0 0 -13.243 3.621 -13.243 3.621 c 0 0 -6.827 9.299 -6.827 9.299 c 0 0 -6.535 4.925 -6.535 4.925 c 0 0 -1.732 3.77 -1.732 3.77 c 0 0 -6.146 7.528 -6.146 7.528 c 0 0 -3.367 10.625 -3.367 10.625 c 0 0 1.165 1.254 1.165 1.254 c 0 0 -3.322 10.957 -3.322 10.957 c 0 0 -1.78 1.059 -1.78 1.059 c 0 0 -7.687 -0.561 -7.687 -0.561 c 0 0 -3.857 1.585 -3.857 1.585 c 0 0 -2.317 1.98 -2.317 1.98 c 0 0 -7.18 9.722 -7.18 9.722 c 0 0 -3.038 6.72 -3.038 6.72 c 0 0 -14.179 -0.237 -14.179 -0.237 c 0 0 -7.204 6.951 -7.204 6.951 c -0.001 0 -12.962 4.238 -12.962 4.238 c 0 0 37.868 29.441 37.868 29.441 c 0 0 91.412 67.584 91.412 67.584 c 0 0 0.398 1.977 0.398 1.977 c 0 0 27.738 18.602 27.738 18.602 c 0 0 0.568 2.959 0.568 2.959 c 0 0 -0.822 5.766 -0.822 5.766 c 0 0 0.463 1.174 0.463 1.174 c 0 0 3.119 -0.263 3.119 -0.263 c 0 0 1.575 2.019 1.575 2.019 c 0 0 6.354 2.238 6.354 2.238 c 0 0 0.896 4.331 0.896 4.331 c 0 0 3.206 2.918 3.206 2.918 c 0 0 1.768 -0.039 1.768 -0.039 c 0 0 0.994 1.532 0.994 1.532 c 0 0 1.018 -0.565 1.018 -0.565 c 0 0 1.242 0.478 1.242 0.478 c 0 0 0.795 -0.395 0.795 -0.395 c 0 0 1.279 1.151 1.279 1.151 c 0 0 1.88 -1.958 1.88 -1.958 c 0 0 1.563 0.354 1.563 0.354 c 0 0 2.465 2.305 2.465 2.305 c 0 0 1.674 3.077 1.674 3.077 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Adrar"},"2":{"path":"M 251.147 52.1578 c 0 0 0.255 -1.759 0.255 -1.759 c 0 0 -1.269 -0.908 -1.269 -0.908 c 0 0 -0.683 -1.607 -0.683 -1.607 c 0 0 0.258 -1.099 0.258 -1.099 c 0 0 -0.801 0.179 -0.801 0.179 c 0 0 -0.68 -0.703 -0.68 -0.703 c 0 0 -0.004 -1.019 -0.004 -1.019 c 0 0 1.33 -0.886 1.33 -0.886 c 0 0 -1.829 -0.536 -1.829 -0.536 c 0 0 1.196 -1.169 1.196 -1.169 c 0 0 -1.496 -1.623 -1.496 -1.623 c 0 0 0.13 -1.172 0.13 -1.172 c 0 0 2.229 -1.641 2.229 -1.641 c 0 0 1.099 -2.467 1.099 -2.467 c 0 0 -4.333 0.653 -4.333 0.653 c 0 0 -2.668 -0.688 -2.668 -0.688 c 0 0 -1.591 1.201 -1.591 1.201 c 0 0 -4.207 0.314 -4.207 0.314 c 0 0 -3.056 1.182 -3.056 1.182 c 0 0 -0.989 1.688 -0.989 1.688 c 0 0 -3.115 1.248 -3.115 1.248 c 0 0 -1 3.282 -1 3.282 c 0 0 2.055 0.32 2.055 0.32 c 0 0 2.173 -0.8 2.173 -0.8 c 0 0 0.468 1.895 0.468 1.895 c 0 0 0.537 0.021 0.537 0.021 c 0 0 -0.826 1.687 -0.826 1.687 c 0 0 0.509 -0.155 0.509 -0.155 c 0 0 0.519 1.997 0.519 1.997 c 0 0 1.774 -0.663 1.774 -0.663 c 0 0 -0.347 0.243 -0.347 0.243 c 0 0 0.593 0.041 0.593 0.041 c 0 0 0.541 1.18 0.541 1.18 c 0 0 1.563 0.984 1.563 0.984 c 0 0 2.838 -0.813 2.838 -0.813 c 0 0 2.173 3.286 2.173 3.286 c 0 0 0.06 -1.414 0.06 -1.414 c 0 0 0.518 -0.333 0.518 -0.333 c 0 0 -0.384 -0.349 -0.384 -0.349 c 0 0 2.264 -0.619 2.264 -0.619 c 0 0 0.035 -0.865 0.035 -0.865 c 0 0 1.22 -1.163 1.22 -1.163 c 0 0 1.035 1.876 1.035 1.876 c 0 0 1.906 1.174 1.906 1.174 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Chlef"},"3":{"path":"M 311.039 126.689 c 0 0 -3.193 -5.374 -3.193 -5.374 c 0 0 -4.008 -3.915 -4.008 -3.915 c 0 0 -1.49 -1.064 -1.49 -1.064 c 0 0 -8.125 -3.061 -8.125 -3.061 c 0 0 -1.408 -2.328 -1.408 -2.328 c 0 0 -3.983 -3.588 -3.983 -3.588 c 0 0 -5.242 -1.505 -5.242 -1.505 c 0 0 -1.604 -3.201 -1.604 -3.201 c 0 0 0.146 -1.212 0.146 -1.212 c 0 0 -2.38 -6.709 -2.38 -6.709 c 0 0 -1.252 0.433 -1.252 0.433 c 0 0 0.124 -0.432 0.124 -0.432 c 0 0 -1.456 -0.758 -1.456 -0.758 c 0 0 -2.267 2.288 -2.267 2.288 c 0 0 0.026 1.448 0.026 1.448 c 0 0 -0.695 -0.262 -0.695 -0.262 c 0 0 -2.258 1.064 -2.258 1.064 c 0 0 -1.209 -0.324 -1.209 -0.324 c 0 0 -3.377 -4.766 -3.377 -4.766 c 0 0 -0.441 0.087 -0.441 0.087 c 0 0 -1.244 -3.591 -1.244 -3.591 c 0 0 -0.566 -6.331 -0.566 -6.331 c 0 0 -3.015 0.373 -3.015 0.373 c 0 0 -0.437 1.043 -0.437 1.043 c 0 0 -1.978 0.888 -1.978 0.888 c 0 0 -2.349 2.563 -2.349 2.563 c 0 0 -4.876 1.753 -4.876 1.753 c 0 0 -1.839 2.088 -1.839 2.088 c 0 0 -0.366 2.438 -0.366 2.438 c 0 0 -1.644 0.977 -1.644 0.977 c 0 0 -0.273 -1.14 -0.273 -1.14 c 0 0 -3.773 2.229 -3.773 2.229 c 0 0 0.808 1.346 0.808 1.346 c 0 0 -2.194 1.46 -2.194 1.46 c 0 0 0.863 1.461 0.863 1.461 c 0 0 -0.165 0.989 -0.165 0.989 c 0 0 2.206 0.969 2.206 0.969 c 0 0 1.613 1.795 1.613 1.795 c 0 0 3.495 -0.817 3.495 -0.817 c 0 0 1.828 1.584 1.828 1.584 c 0 0 0.565 1.551 0.565 1.551 c 0 0 -0.247 2.655 -0.247 2.655 c 0 0 1.457 0.411 1.457 0.411 c 0 0 0.124 0.991 0.124 0.991 c 0 0 1.142 1.009 1.142 1.009 c 0 0 -0.82 1.435 -0.82 1.435 c 0 0 -0.285 2.856 -0.285 2.856 c 0 0 3.122 0.287 3.122 0.287 c 0 0 -0.206 1.673 -0.206 1.673 c 0 0 3.521 1.138 3.521 1.138 c 0 0 2.073 -0.452 2.073 -0.452 c 0 0 -0.203 3.901 -0.203 3.901 c 0 0 -3.998 0.134 -3.998 0.134 c 0 0 0.641 0.886 0.641 0.886 c 0 0 -0.146 1.528 -0.146 1.528 c 0 0 3.112 6.564 3.112 6.564 c 0 0 10.825 -0.946 10.825 -0.946 c 0 0 5.37 -1.604 5.37 -1.604 c 0 0 8.55 2.039 8.55 2.039 c 0 0 -0.331 -2.903 -0.331 -2.903 c 0 0 -3.66 -2.23 -3.66 -2.23 c 0 0 7.853 -0.362 7.853 -0.362 c 0 0 0.945 -0.734 0.945 -0.734 c 0 0 0.439 0.318 0.439 0.318 c 0 0 0.417 -0.754 0.417 -0.754 c 0 0 0.305 0.512 0.305 0.512 c 0 0 0.903 -0.387 0.903 -0.387 c 0 0 2.684 1.107 2.684 1.107 c 0 0 0.77 -0.422 0.77 -0.422 c 0 0 13.076 0.901 13.076 0.901 c 0 0 0 0 0 0","name":"Laghouat"},"4":{"path":"M 377.235 49.5529 c 0 0 0.701 0.387 0.701 0.387 c 0 0 0.531 2.116 0.531 2.116 c 0 0 1.615 0.739 1.615 0.739 c 0 0 -0.772 0.688 -0.772 0.688 c 0 0 0.142 1.093 0.142 1.093 c 0 0 1.311 2.659 1.311 2.659 c 0 0 -4.046 1.621 -4.046 1.621 c 0 0 -1.879 2.798 -1.879 2.798 c 0 0 -0.624 0.112 -0.624 0.112 c 0 0 -0.659 -1.052 -0.659 -1.052 c 0 0 -0.692 -0.06 -0.692 -0.06 c 0 0 -0.333 -1.191 -0.333 -1.191 c 0 0 -0.393 -0.313 -0.393 -0.313 c 0 0 -0.6 0.601 -0.6 0.601 c 0 0 0.179 -0.579 0.179 -0.579 c 0 0 -1.313 -0.926 -1.313 -0.926 c 0 0 -0.409 1.399 -0.409 1.399 c 0 0 -1.049 0.308 -1.049 0.308 c 0 0 0.063 -2.163 0.063 -2.163 c 0 0 -1.771 -0.877 -1.771 -0.877 c 0 0 -0.118 0.548 -0.118 0.548 c 0 0 -1.816 -0.27 -1.816 -0.27 c 0 0 -0.957 2.009 -0.957 2.009 c 0 0 -1.647 -0.482 -1.647 -0.482 c 0 0 0.408 -1.016 0.408 -1.016 c 0 0 -0.614 -0.53 -0.614 -0.53 c 0 0 -4.031 0.608 -4.031 0.608 c 0 0 -0.774 -1.596 -0.774 -1.596 c 0 0 -2.106 -2.413 -2.106 -2.413 c 0 0 -1.569 -0.717 -1.569 -0.717 c 0 0 -2.67 1.215 -2.67 1.215 c 0 0 -0.353 -0.517 -0.353 -0.517 c 0 0 0.464 -0.385 0.464 -0.385 c 0 0 -0.535 -0.365 -0.535 -0.365 c 0 0 0.359 -0.917 0.359 -0.917 c 0 0 -2.605 -0.267 -2.605 -0.267 c 0 0 -0.109 -0.587 -0.109 -0.587 c 0 0 -1.551 1.313 -1.551 1.313 c 0 0 -2.433 -1.298 -2.433 -1.298 c 0 0 0.803 -2.113 0.803 -2.113 c 0 0 1.65 -0.227 1.65 -0.227 c 0 0 0.715 0.51 0.715 0.51 c 0 0 -0.213 -0.771 -0.213 -0.771 c 0 0 0.78 0.116 0.78 0.116 c 0 0 1.221 -1.532 1.221 -1.532 c 0 0 0.161 -2.791 0.161 -2.791 c 0 0 2.365 -0.863 2.365 -0.863 c 0 0 -0.381 0.438 -0.381 0.438 c 0 0 0.595 1.16 0.595 1.16 c 0 0 1.011 0.369 1.011 0.369 c 0 0 -0.465 -0.805 -0.465 -0.805 c 0 0 1.122 0.603 1.122 0.603 c 0 0 0.375 -1.067 0.375 -1.067 c 0 0 2.243 -0.16 2.243 -0.16 c 0 0 0.264 -1.443 0.264 -1.443 c 0 0 1.445 1.166 1.445 1.166 c 0 0 3.62 0.066 3.62 0.066 c 0 0 -0.201 1.256 -0.201 1.256 c 0 0 1.267 0.551 1.267 0.551 c 0 0 -0.196 0.957 -0.196 0.957 c 0 0 0.998 0.166 0.998 0.166 c 0 0 2.784 -1.372 2.784 -1.372 c 0 0 0.683 -1.773 0.683 -1.773 c 0 0 1.257 -0.076 1.257 -0.076 c 0 0 0.424 2.263 0.424 2.263 c 0 0 0.736 0.045 0.736 0.045 c 0 0 0.649 2.12 0.649 2.12 c 0 0 1.024 1.332 1.024 1.332 c 0 0 2.675 0.939 2.675 0.939 c 0 0 -0.031 1.478 -0.031 1.478 c 0 0 2.814 -0.213 2.814 -0.213 c 0 0 -0.354 -1.537 -0.354 -1.537 c 0 0 0.815 -0.485 0.815 -0.485 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Oum El-Bouaghi"},"5":{"path":"M 354.598 79.5648 c 0 0 -0.634 -2.146 -0.634 -2.146 c 0 0 0.812 -0.795 0.812 -0.795 c 0 0 -0.611 -0.482 -0.611 -0.482 c 0 0 0.499 -0.58 0.499 -0.58 c 0 0 -1.347 -2.257 -1.347 -2.257 c 0 0 -0.802 -0.146 -0.802 -0.146 c 0 0 0.401 -0.844 0.401 -0.844 c 0 0 -0.438 -1.353 -0.438 -1.353 c 0 0 1.308 -1.429 1.308 -1.429 c 0 0 -0.23 -2.636 -0.23 -2.636 c 0 0 1.644 -1.396 1.644 -1.396 c 0 0 -1.052 -0.219 -1.052 -0.219 c 0 0 0.178 -1.438 0.178 -1.438 c 0 0 -0.634 -1.333 -0.634 -1.333 c 0 0 1.491 -1.386 1.491 -1.386 c 0 0 2.418 -0.599 2.418 -0.599 c 0 0 0.612 -1.514 0.612 -1.514 c 0 0 -0.74 -1.491 -0.74 -1.491 c 0 0 0.214 -1.337 0.214 -1.337 c 0 0 -2.106 -2.414 -2.106 -2.414 c 0 0 -1.569 -0.716 -1.569 -0.716 c 0 0 -2.67 1.214 -2.67 1.214 c 0 0 -0.353 -0.518 -0.353 -0.518 c 0 0 0.464 -0.385 0.464 -0.385 c 0 0 -0.535 -0.365 -0.535 -0.365 c 0 0 0.36 -0.917 0.36 -0.917 c 0 0 -2.606 -0.267 -2.606 -0.267 c 0 0 -0.11 -0.587 -0.11 -0.587 c 0 0 -1.55 1.313 -1.55 1.313 c 0 0 -2.433 -1.298 -2.433 -1.298 c 0 0 -3.583 -0.418 -3.583 -0.418 c 0 0 -0.49 0.384 -0.49 0.384 c 0 0 -0.965 0.569 -0.965 0.569 c 0 0 0.445 1.163 0.445 1.163 c 0 0 -2.807 -2.418 -2.807 -2.418 c 0 0 -1.214 0.316 -1.214 0.316 c 0 0 -1.424 1.56 -1.424 1.56 c 0 0 0.121 0.773 0.121 0.773 c 0 0 1.212 0.402 1.212 0.402 c 0 0 -0.792 1.303 -0.792 1.303 c 0 0 -0.682 -0.238 -0.682 -0.238 c 0 0 -0.502 0.541 -0.502 0.541 c 0 0 -2.294 -0.948 -2.294 -0.948 c 0 0 -0.241 0.685 -0.241 0.685 c 0 0 -0.797 -0.078 -0.797 -0.078 c 0 0 -1.382 1.093 -1.382 1.093 c 0 0 0.234 1.001 0.234 1.001 c 0 0 -0.78 1.759 -0.78 1.759 c 0 0 -1.127 -0.332 -1.127 -0.332 c 0 0 -2.661 2.963 -2.661 2.963 c 0 0 -1.817 0.906 -1.817 0.906 c 0 0 -0.723 -1.068 -0.723 -1.068 c 0 0 -1.061 -0.012 -1.061 -0.012 c 0 0 -0.828 0.921 -0.828 0.921 c 0 0 -0.075 -0.786 -0.075 -0.786 c 0 0 -0.958 1.506 -0.958 1.506 c 0 0 -1.945 -1.698 -1.945 -1.698 c 0 0 0.822 4.4 0.822 4.4 c 0 0 -0.38 2.546 -0.38 2.546 c 0 0 -0.915 1.547 -0.915 1.547 c 0 0 -0.525 -0.186 -0.525 -0.186 c 0 0 -1.186 1.173 -1.186 1.173 c 0 0 0.194 0.605 0.194 0.605 c 0 0 2.929 0.061 2.929 0.061 c 0 0 2.126 1.396 2.126 1.396 c 0 0 0.583 -0.342 0.583 -0.342 c 0 0 2.02 0.968 2.02 0.968 c 0 0 0.73 1.103 0.73 1.103 c 0 0 1.017 -0.474 1.017 -0.474 c 0 0 1.503 0.709 1.503 0.709 c 0 0 0.559 -0.079 0.559 -0.079 c 0 0 0.341 -1.11 0.341 -1.11 c 0 0 3.911 -0.103 3.911 -0.103 c 0 0 1.787 -0.953 1.787 -0.953 c 0 0 0.162 -0.935 0.162 -0.935 c 0 0 -0.656 -0.975 -0.656 -0.975 c 0 0 -1.454 -0.28 -1.454 -0.28 c 0 0 -0.321 -0.952 -0.321 -0.952 c 0 0 2.216 0.152 2.216 0.152 c 0 0 3.561 -2.397 3.561 -2.397 c 0 0 2.817 1.882 2.817 1.882 c 0 0 1.857 -0.219 1.857 -0.219 c 0 0 -2.247 2.121 -2.247 2.121 c 0 0 0.993 1.373 0.993 1.373 c 0 0 -0.826 1.425 -0.826 1.425 c 0 0 0.764 -0.211 0.764 -0.211 c 0 0 0.976 1.769 0.976 1.769 c 0 0 2.263 -2.836 2.263 -2.836 c 0 0 1.025 0.388 1.025 0.388 c 0 0 -0.085 1.186 -0.085 1.186 c 0 0 2.13 0.699 2.13 0.699 c 0 0 0.685 -1.448 0.685 -1.448 c 0 0 2.061 -0.262 2.061 -0.262 c 0 0 1.65 -1.111 1.65 -1.111 c 0 0 1.29 1.626 1.29 1.626 c 0 0 -0.779 1.125 -0.779 1.125 c 0 0 0.506 0.944 0.506 0.944 c 0 0 -0.438 2.539 -0.438 2.539 c 0 0 2.456 1.971 2.456 1.971 c 0 0 1.033 -0.363 1.033 -0.363 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Batna"},"6":{"path":"M 314.203 38.1218 c 0 0 -0.336 1.124 -0.336 1.124 c 0 0 -2.016 0.919 -2.016 0.919 c 0 0 -0.034 2.49 -0.034 2.49 c 0 0 -4.18 1.099 -4.18 1.099 c 0 0 -0.776 -1.701 -0.776 -1.701 c 0 0 0.222 -0.601 0.222 -0.601 c 0 0 -0.75 -0.99 -0.75 -0.99 c 0 0 0.743 -0.487 0.743 -0.487 c 0 0 0.148 -1.306 0.148 -1.306 c 0 0 -0.678 -1.324 -0.678 -1.324 c 0 0 1.795 -0.83 1.795 -0.83 c 0 0 2.18 -2.443 2.18 -2.443 c 0 0 -0.406 -0.66 -0.406 -0.66 c 0 0 1.259 -1.582 1.259 -1.582 c 0 0 -1.778 -0.942 -1.778 -0.942 c 0 0 0.148 -0.646 0.148 -0.646 c 0 0 1.229 -0.36 1.229 -0.36 c 0 0 0.704 0.539 0.704 0.539 c 0 0 0.672 -0.653 0.672 -0.653 c 0 0 -0.069 -1.338 -0.069 -1.338 c 0 0 -1.397 -1.952 -1.397 -1.952 c 0 0 3.611 -0.405 3.611 -0.405 c 0 0 3.398 1.061 3.398 1.061 c 0 0 2.038 1.439 2.038 1.439 c 0 0 1.871 0.364 1.871 0.364 c 0 0 -0.442 1.715 -0.442 1.715 c 0 0 2.887 1.563 2.887 1.563 c 0 0 4.324 -0.311 4.324 -0.311 c 0 0 0.029 1.315 0.029 1.315 c 0 0 0.916 0.194 0.916 0.194 c 0 0 -0.184 1.479 -0.184 1.479 c 0 0 -2.389 1.071 -2.389 1.071 c 0 0 0.252 0.685 0.252 0.685 c 0 0 -1.314 1.474 -1.314 1.474 c 0 0 0.471 0.919 0.471 0.919 c 0 0 -0.748 0.375 -0.748 0.375 c 0 0 -1.656 0.241 -1.656 0.241 c 0 0 0.025 -0.935 0.025 -0.935 c 0 0 -0.569 0.197 -0.569 0.197 c 0 0 0.023 -2.689 0.023 -2.689 c 0 0 0.535 -0.694 0.535 -0.694 c 0 0 -2.159 -1.465 -2.159 -1.465 c 0 0 -0.039 0.448 -0.039 0.448 c 0 0 -0.928 -0.088 -0.928 -0.088 c 0 0 -0.447 1.378 -0.447 1.378 c 0 0 -3.62 -0.479 -3.62 -0.479 c 0 0 -0.048 1.35 -0.048 1.35 c 0 0 -2.517 1.442 -2.517 1.442 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Béjaïa"},"7":{"path":"M 354.598 79.5648 c 0 0 -1.037 0.363 -1.037 0.363 c 0 0 -2.456 -1.971 -2.456 -1.971 c 0 0 0.438 -2.539 0.438 -2.539 c 0 0 -0.506 -0.943 -0.506 -0.943 c 0 0 0.779 -1.125 0.779 -1.125 c 0 0 -1.289 -1.626 -1.289 -1.626 c 0 0 -1.651 1.111 -1.651 1.111 c 0 0 -2.061 0.261 -2.061 0.261 c 0 0 -0.685 1.448 -0.685 1.448 c 0 0 -2.13 -0.699 -2.13 -0.699 c 0 0 0.085 -1.186 0.085 -1.186 c 0 0 -1.025 -0.387 -1.025 -0.387 c 0 0 -2.263 2.835 -2.263 2.835 c 0 0 -0.975 -1.768 -0.975 -1.768 c 0 0 -0.765 0.21 -0.765 0.21 c 0 0 0.826 -1.425 0.826 -1.425 c 0 0 -0.993 -1.373 -0.993 -1.373 c 0 0 2.247 -2.121 2.247 -2.121 c 0 0 -1.857 0.22 -1.857 0.22 c 0 0 -2.817 -1.883 -2.817 -1.883 c 0 0 -3.56 2.397 -3.56 2.397 c 0 0 -2.217 -0.152 -2.217 -0.152 c 0 0 0.321 0.952 0.321 0.952 c 0 0 1.454 0.28 1.454 0.28 c 0 0 0.656 0.975 0.656 0.975 c 0 0 -0.162 0.935 -0.162 0.935 c 0 0 -1.787 0.954 -1.787 0.954 c 0 0 -3.911 0.102 -3.911 0.102 c 0 0 -0.341 1.11 -0.341 1.11 c 0 0 -0.558 0.08 -0.558 0.08 c 0 0 -1.503 -0.709 -1.503 -0.709 c 0 0 -1.018 0.473 -1.018 0.473 c 0 0 -0.729 -1.102 -0.729 -1.102 c 0 0 -2.02 -0.969 -2.02 -0.969 c 0 0 -0.584 0.343 -0.584 0.343 c 0 0 0.446 3.492 0.446 3.492 c 0 0 0.547 0.305 0.547 0.305 c 0 0 -0.537 0.065 -0.537 0.065 c 0 0 -0.684 1.586 -0.684 1.586 c 0 0 -5.437 1.63 -5.437 1.63 c 0 0 -0.941 1.502 -0.941 1.502 c 0 0 -1.002 0.173 -1.002 0.173 c 0 0 1.299 1.086 1.299 1.086 c 0 0 -1.021 0.547 -1.021 0.547 c 0 0 -0.658 -0.445 -0.658 -0.445 c 0 0 -1.831 1.14 -1.831 1.14 c 0 0 -4.807 0.046 -4.807 0.046 c 0 0 -0.876 1.823 -0.876 1.823 c 0 0 -2.192 1.835 -2.192 1.835 c 0 0 0.522 0.302 0.522 0.302 c 0 0 0.418 3.083 0.418 3.083 c 0 0 1.216 1.271 1.216 1.271 c 0 0 -0.307 0.725 -0.307 0.725 c 0 0 1.814 0.933 1.814 0.933 c 0 0 -0.773 1.006 -0.773 1.006 c 0 0 -1.99 0.525 -1.99 0.525 c 0 0 -0.442 0.687 -0.442 0.687 c 0 0 0.935 1.143 0.935 1.143 c 0 0 1.888 0.264 1.888 0.264 c 0 0 0.385 1.491 0.385 1.491 c 0 0 2.354 0.396 2.354 0.396 c 0 0 0.57 0.73 0.57 0.73 c 0 0 -1.197 -0.003 -1.197 -0.003 c 0 0 -1.375 1.475 -1.375 1.475 c 0 0 -1.342 0.124 -1.342 0.124 c 0 0 -0.397 0.525 -0.397 0.525 c 0 0 0.45 0.688 0.45 0.688 c 0 0 6.57 2.831 6.57 2.831 c 0 0 1.081 1.471 1.081 1.471 c 0 0 3.26 0.627 3.26 0.627 c 0 0 0.39 0.95 0.39 0.95 c 0 0 1.965 -0.327 1.965 -0.327 c 0 0 0.724 1.225 0.724 1.225 c 0 0 4.001 0.998 4.001 0.998 c 0 0 -0.522 0.879 -0.522 0.879 c 0 0 0.117 1.904 0.117 1.904 c 0 0 3.919 3.499 3.919 3.499 c 0 0 0.91 -1.858 0.91 -1.858 c 0 0 0.663 -1.724 0.663 -1.724 c 0 0 -0.688 -1.585 -0.688 -1.585 c 0 0 -0.35 -4.63 -0.35 -4.63 c 0 0 -1.083 -2.091 -1.083 -2.091 c 0 0 0.858 -4.001 0.858 -4.001 c 0 0 1.969 -4.693 1.969 -4.693 c 0 0 -3.667 -3.257 -3.667 -3.257 c 0 0 0.702 -1.852 0.702 -1.852 c 0 0 -1.199 -1.354 -1.199 -1.354 c 0 0 1.889 -1.327 1.889 -1.327 c 0 0 -0.72 -0.627 -0.72 -0.627 c 0 0 1.104 -0.631 1.104 -0.631 c 0 0 2.287 1.521 2.287 1.521 c 0 0 11.929 1.271 11.929 1.271 c 0 0 5.31 -1.304 5.31 -1.304 c 0 0 5.733 2.047 5.733 2.047 c 0 0 1.45 1.393 1.45 1.393 c 0 0 1.654 -0.581 1.654 -0.581 c 0 0 1.726 -2.196 1.726 -2.196 c 0 0 -0.517 -1.926 -0.517 -1.926 c 0 0 1.047 -2.039 1.047 -2.039 c 0 0 -0.163 -3.493 -0.163 -3.493 c 0 0 0.727 -2.389 0.727 -2.389 c 0 0 -0.822 0.197 -0.822 0.197 c 0 0 0.415 -0.997 0.415 -0.997 c 0 0 -1.047 -1.056 -1.047 -1.056 c 0 0 0.4 -0.473 0.4 -0.473 c 0 0 -1.139 0.062 -1.139 0.062 c 0 0 -0.737 1.719 -0.737 1.719 c 0 0 -1.087 0.596 -1.087 0.596 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Biskra"},"8":{"path":"M 189.561 141.431 c 0 0 0.163 2.393 0.163 2.393 c 0 0 1.428 0.123 1.428 0.123 c 0 0 -0.542 2.863 -0.542 2.863 c 0 0 1.384 0.042 1.384 0.042 c 0 0 0.298 1.563 0.298 1.563 c 0 0 5.834 -3.103 5.834 -3.103 c 0 0 6.79 1.902 6.79 1.902 c 0 0 1.803 -1.33 1.803 -1.33 c 0 0 2.417 0.518 2.417 0.518 c 0 0 1.629 -2.4 1.629 -2.4 c 0 0 -0.953 4.385 -0.953 4.385 c 0 0 -2.081 -0.471 -2.081 -0.471 c 0 0 -1.103 0.817 -1.103 0.817 c 0 0 -1.05 2.219 -1.05 2.219 c 0 0 -0.139 4.177 -0.139 4.177 c 0 0 0.68 2.281 0.68 2.281 c 0 0 -0.686 0.065 -0.686 0.065 c 0 0 0.179 0.967 0.179 0.967 c 0 0 -0.602 0.846 -0.602 0.846 c 0 0 0.955 1.182 0.955 1.182 c 0 0 -1.242 1.209 -1.242 1.209 c 0 0 1.247 2.015 1.247 2.015 c 0 0 -1.014 1.204 -1.014 1.204 c 0 0 0.036 1.863 0.036 1.863 c 0 0 0.853 1.823 0.853 1.823 c 0 0 2.917 2.352 2.917 2.352 c 0 0 -0.818 2.98 -0.818 2.98 c 0 0 14.029 11.903 14.029 11.903 c 0 0 -8.624 9.693 -8.624 9.693 c 0 0 -3.966 6.909 -3.966 6.909 c 0 0 -10.189 7.171 -10.189 7.171 c 0 0 -1.53 5.245 -1.53 5.245 c 0 0 1.021 6.804 1.021 6.804 c 0 0 -0.608 2.722 -0.608 2.722 c 0 0 -5.818 4.933 -5.818 4.933 c 0 0 -11.195 0.456 -11.195 0.456 c 0 0 -13.243 3.621 -13.243 3.621 c 0 0 -6.827 9.299 -6.827 9.299 c 0 0 -6.535 4.925 -6.535 4.925 c 0 0 -1.732 3.771 -1.732 3.771 c 0 0 -6.146 7.526 -6.146 7.526 c 0 0 -3.367 10.625 -3.367 10.625 c 0 0 1.165 1.256 1.165 1.256 c 0 0 -13.244 -1.684 -13.244 -1.684 c 0 0 -3.001 -2.418 -3.001 -2.418 c 0 0 -5.835 -7.1 -5.835 -7.1 c 0 0 -0.084 -7.644 -0.084 -7.644 c 0 0 -6.775 -12.676 -6.775 -12.676 c 0 0 -5.777 -21.184 -5.777 -21.184 c 0 0 -5.817 -3.173 -5.817 -3.173 c 0 0 -8.409 -0.352 -8.409 -0.352 c 0 0 -4.977 -4.181 -4.977 -4.181 c 0 0 4.214 -5.384 4.214 -5.384 c 0 0 0.024 -1.372 0.024 -1.372 c 0 0 1.014 -1.498 1.014 -1.498 c 0 0 8.097 -5.763 8.097 -5.763 c 0 0 7.482 -3.241 7.482 -3.241 c 0 0 6.645 -5.965 6.645 -5.965 c 0 0 3.927 -1.254 3.927 -1.254 c 0 0 6.729 -0.776 6.729 -0.776 c 0 0 4.574 -1.715 4.574 -1.715 c 0 0 0.583 -0.765 0.583 -0.765 c 0 0 -1.006 -1.718 -1.006 -1.718 c 0 0 0.712 -1.927 0.712 -1.927 c 0 0 0.439 0.271 0.439 0.271 c 0 0 1.753 -2.209 1.753 -2.209 c 0 0 0.06 -2.135 0.06 -2.135 c 0 0 -0.201 -0.656 -0.201 -0.656 c 0 0 -0.495 0.514 -0.495 0.514 c 0 0 -0.386 -0.407 -0.386 -0.407 c 0 0 -0.456 -1.584 -0.456 -1.584 c 0 0 -0.47 0.188 -0.47 0.188 c 0 0 0.021 -1.495 0.021 -1.495 c 0 0 -0.024 1.793 -0.024 1.793 c 0 0 -0.667 0.211 -0.667 0.211 c 0 0 0.487 0.234 0.487 0.234 c 0 0 -0.779 -0.15 -0.779 -0.15 c 0 0 0.248 -1.646 0.248 -1.646 c 0 0 -0.643 -0.663 -0.643 -0.663 c 0 0 -0.118 0.998 -0.118 0.998 c 0 0 -0.614 -0.265 -0.614 -0.265 c 0 0 0.041 0.743 0.041 0.743 c 0 0 -0.644 -0.249 -0.644 -0.249 c 0 0 -0.354 0.62 -0.354 0.62 c 0 0 0.437 -2.005 0.437 -2.005 c 0 0 -0.625 -1.467 -0.625 -1.467 c 0 0 0.73 -0.664 0.73 -0.664 c 0 0 -0.554 -0.775 -0.554 -0.775 c 0 0 0.872 -1.707 0.872 -1.707 c 0 0 0.565 0.509 0.565 0.509 c 0 0 1.714 -1.251 1.714 -1.251 c 0 0 -0.12 -6.14 -0.12 -6.14 c 0 0 18.347 -3.483 18.347 -3.483 c 0 0 -2.126 -6.029 -2.126 -6.029 c 0 0 0.609 -2.241 0.609 -2.241 c 0 0 6.877 0.41 6.877 0.41 c 0 0 3.008 -1.097 3.008 -1.097 c 0 0 4.058 -0.094 4.058 -0.094 c 0 0 2.286 0.737 2.286 0.737 c 0 0 3.44 -0.906 3.44 -0.906 c 0 0 9.396 2.568 9.396 2.568 c 0 0 7.359 0.568 7.359 0.568 c 0 0 1.897 -1.269 1.897 -1.269 c 0 0 -1.222 -1.218 -1.222 -1.218 c 0 0 -1.895 0.225 -1.895 0.225 c 0 0 1.267 -1.027 1.267 -1.027 c 0 0 -0.083 -3.115 -0.083 -3.115 c 0 0 1.147 -1.937 1.147 -1.937 c 0 0 1.524 -0.259 1.524 -0.259 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Béchar"},"9":{"path":"M 284.26 36.7689 c 0 0 0.247 -1.279 0.247 -1.279 c 0 0 -0.585 -0.271 -0.585 -0.271 c 0 0 0.385 -0.414 0.385 -0.414 c 0 0 -0.471 -0.855 -0.471 -0.855 c 0 0 0.536 -0.479 0.536 -0.479 c 0 0 -0.888 0.351 -0.888 0.351 c 0 0 -0.756 -1.312 -0.756 -1.312 c 0 0 -1.009 0.771 -1.009 0.771 c 0 0 -0.61 -0.303 -0.61 -0.303 c 0 0 -0.7 1.808 -0.7 1.808 c 0 0 -1.118 0.075 -1.118 0.075 c 0 0 0.107 -1.082 0.107 -1.082 c 0 0 -1.49 1.068 -1.49 1.068 c 0 0 -3.771 -1.583 -3.771 -1.583 c 0 0 0.339 1.023 0.339 1.023 c 0 0 -2.109 0.599 -2.109 0.599 c 0 0 -1.479 1.646 -1.479 1.646 c 0 0 -1.06 0.141 -1.06 0.141 c 0 0 0.442 0.803 0.442 0.803 c 0 0 -0.447 0.64 -0.447 0.64 c 0 0 -1.568 -0.302 -1.568 -0.302 c 0 0 -1.037 1.464 -1.037 1.464 c 0 0 2.993 2.104 2.993 2.104 c 0 0 1.509 -1.087 1.509 -1.087 c 0 0 2.894 0.205 2.894 0.205 c 0 0 1.567 -1.178 1.567 -1.178 c 0 0 0.671 1.507 0.671 1.507 c 0 0 1.48 0.008 1.48 0.008 c 0 0 0.866 -0.967 0.866 -0.967 c 0 0 -0.188 -1.356 -0.188 -1.356 c 0 0 0.474 0.955 0.474 0.955 c 0 0 0.732 -0.597 0.732 -0.597 c 0 0 0.693 0.698 0.693 0.698 c 0 0 1.156 -1.154 1.156 -1.154 c 0 0 0.085 -1.381 0.085 -1.381 c 0 0 1.631 0.27 1.631 0.27 c 0 0 0.479 -0.536 0.479 -0.536 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Blida"},"10":{"path":"M 300.562 48.4998 c 0 0 1.468 -1.134 1.468 -1.134 c 0 0 0.186 -2.385 0.186 -2.385 c 0 0 1.708 -0.861 1.708 -0.861 c 0 0 0.796 -1.241 0.796 -1.241 c 0 0 1.361 0.091 1.361 0.091 c 0 0 0.781 -0.917 0.781 -0.917 c 0 0 0.224 -0.601 0.224 -0.601 c 0 0 -0.75 -0.99 -0.75 -0.99 c 0 0 0.742 -0.488 0.742 -0.488 c 0 0 0.148 -1.305 0.148 -1.305 c 0 0 -0.679 -1.324 -0.679 -1.324 c 0 0 -2.513 0.268 -2.513 0.268 c 0 0 -0.274 -0.535 -0.274 -0.535 c 0 0 -1.008 0.543 -1.008 0.543 c 0 0 -5.654 0.163 -5.654 0.163 c 0 0 -1.333 -0.33 -1.333 -0.33 c 0 0 -0.937 -1.637 -0.937 -1.637 c 0 0 -0.781 0.04 -0.781 0.04 c 0 0 -0.892 -1.236 -0.892 -1.236 c 0 0 -4.715 -0.709 -4.715 -0.709 c 0 0 -0.479 0.983 -0.479 0.983 c 0 0 -1.366 0.715 -1.366 0.715 c 0 0 -2.088 -0.118 -2.088 -0.118 c 0 0 -0.247 1.278 -0.247 1.278 c 0 0 2.723 2.63 2.723 2.63 c 0 0 1.561 -1.479 1.561 -1.479 c 0 0 1.357 0.704 1.357 0.704 c 0 0 -0.438 0.687 -0.438 0.687 c 0 0 0.997 1.391 0.997 1.391 c 0 0 -1.07 0.599 -1.07 0.599 c 0 0 -0.442 1.267 -0.442 1.267 c 0 0 1.07 0.978 1.07 0.978 c 0 0 -0.182 0.811 -0.182 0.811 c 0 0 -1.427 0.413 -1.427 0.413 c 0 0 -0.228 0.854 -0.228 0.854 c 0 0 0.655 1.041 0.655 1.041 c 0 0 -0.407 0.485 -0.407 0.485 c 0 0 -0.899 0.935 -0.899 0.935 c 0 0 -1.014 -0.015 -1.014 -0.015 c 0 0 0.479 0.781 0.479 0.781 c 0 0 2.788 0.435 2.788 0.435 c 0 0 1.405 2.648 1.405 2.648 c 0 0 0.532 -0.81 0.532 -0.81 c 0 0 1.537 0.153 1.537 0.153 c 0 0 0.654 0.925 0.654 0.925 c 0 0 1.071 0.222 1.071 0.222 c 0 0 0.351 1.005 0.351 1.005 c 0 0 0.802 0.049 0.802 0.049 c 0 0 1.27 -1.216 1.27 -1.216 c 0 0 2.542 0.892 2.542 0.892 c 0 0 -0.443 -1.387 -0.443 -1.387 c 0 0 1.058 -3.268 1.058 -3.268 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Bouira"},"11":{"path":"M 340.615 208.544 c 0 0 -43.124 33.261 -43.124 33.261 c 0 0 0.146 -0.413 0.146 -0.413 c 0 0 -17.526 -14.179 -17.526 -14.179 c 0 0 -11.145 0.971 -11.145 0.971 c 0 0 -10.264 3.806 -10.264 3.806 c 0 0 -0.784 10.595 -0.784 10.595 c 0 0 -1.104 3.51 -1.104 3.51 c 0 0 -3.164 5.032 -3.164 5.032 c 0 0 -0.81 10.075 -0.81 10.075 c 0 0 -1.856 3.177 -1.856 3.177 c 0 0 0.051 6.213 0.051 6.213 c 0 0 1.848 2.781 1.848 2.781 c 0 0 -2.565 6.435 -2.565 6.435 c 0 0 -0.465 8.885 -0.465 8.885 c 0 0 -2.35 1.68 -2.35 1.68 c 0 0 -0.139 -0.823 -0.139 -0.823 c 0 0 -1.748 0.209 -1.748 0.209 c 0 0 -0.883 -0.813 -0.883 -0.813 c 0 0 -2.635 0.807 -2.635 0.807 c 0 0 -1.19 2.448 -1.19 2.448 c 0 0 -7.482 7.684 -7.482 7.684 c 0 0 2.714 6.037 2.714 6.037 c 0 0 8.571 12.137 8.571 12.137 c 0 0 0.259 38.387 0.259 38.387 c 0 0 -0.63 56.825 -0.63 56.825 c 0 0 4.163 -0.675 4.163 -0.675 c 0 0 4.417 0.47 4.417 0.47 c 0 0 1.521 7.254 1.521 7.254 c 0 0 6.095 6.187 6.095 6.187 c 0 0 2.49 5.061 2.49 5.061 c 0 0 1.682 5.848 1.682 5.848 c 0 0 -0.031 6.131 -0.031 6.131 c 0 0 2.249 3.263 2.249 3.263 c 0 0 3.133 7.454 3.133 7.454 c 0 0 0.496 2.892 0.496 2.892 c 0 0 -2.249 0.725 -2.249 0.725 c 0 0 1.485 0.058 1.485 0.058 c 0 0 2.693 1.431 2.693 1.431 c 0 0 3.086 -0.021 3.086 -0.021 c 0 0 6.312 1.33 6.312 1.33 c 0 0 6.54 3.166 6.54 3.166 c 0 0 -0.412 3.706 -0.412 3.706 c 0 0 0.537 0.907 0.537 0.907 c 0 0 -0.542 1.742 -0.542 1.742 c 0 0 0.979 1.557 0.979 1.557 c 0 0 -0.357 0.987 -0.357 0.987 c 0 0 0.917 2.147 0.917 2.147 c 0 0 -1.474 1.56 -1.474 1.56 c 0 0 -0.373 1.711 -0.373 1.711 c 0 0 -2.086 2.864 -2.086 2.864 c 0 0 0.506 1.159 0.506 1.159 c 0 0 5.114 3.9 5.114 3.9 c 0 0 60.512 -13.771 60.512 -13.771 c 0 0 38.057 -37.723 38.057 -37.723 c 0 0 64.331 -46.843 64.331 -46.843 c 0 0 -0.719 -20.563 -0.719 -20.563 c 0 0 -7.48 -4.23 -7.48 -4.23 c 0 0 -2.209 0.049 -2.209 0.049 c 0 0 -1.657 -1.011 -1.657 -1.011 c 0 0 -13.903 0.818 -13.903 0.818 c 0 0 -12.891 9.613 -12.891 9.613 c 0 0 -17.177 4.161 -17.177 4.161 c 0 0 -6.243 -4.392 -6.243 -4.392 c 0 0 1.974 -2.233 1.974 -2.233 c 0 0 -5.578 -12.361 -5.578 -12.361 c 0 0 -1.04 -10.938 -1.04 -10.938 c 0 0 0.237 -3.784 0.237 -3.784 c 0 0 -5.594 -8.032 -5.594 -8.032 c 0 0 -4.477 -0.141 -4.477 -0.141 c 0 0 -2.836 -2.179 -2.836 -2.179 c 0 0 -3.687 -6.237 -3.687 -6.237 c 0 0 -1.628 -4.169 -1.628 -4.169 c 0 0 -5.061 -6.142 -5.061 -6.142 c 0 0 -5.932 -16.141 -5.932 -16.141 c 0 0 -1.532 -1.132 -1.532 -1.132 c 0 0 -0.138 -1.005 -0.138 -1.005 c 0 0 -2.248 -0.6 -2.248 -0.6 c 0 0 -1.181 -1.556 -1.181 -1.556 c 0 0 1.06 -3.062 1.06 -3.062 c 0 0 2.819 -2.351 2.819 -2.351 c 0 0 -0.418 -1.914 -0.418 -1.914 c 0 0 -12.688 -11.21 -12.688 -11.21 c 0 0 -0.039 -8.717 -0.039 -8.717 c 0 0 -3.73 -17.581 -3.73 -17.581 c 0 0 1.772 -8.354 1.772 -8.354 c 0 0 -1.292 -33.81 -1.292 -33.81 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tamanrasset"},"12":{"path":"M 377.235 49.5529 c 0 0 0.397 -1.363 0.397 -1.363 c 0 0 1.877 1.4 1.877 1.4 c 0 0 1.622 -0.03 1.622 -0.03 c 0 0 2.103 -2.353 2.103 -2.353 c 0 0 1.256 0.156 1.256 0.156 c 0 0 2.499 -1.112 2.499 -1.112 c 0 0 2.176 1.081 2.176 1.081 c 0 0 -0.663 1.284 -0.663 1.284 c 0 0 0.469 0.414 0.469 0.414 c 0 0 -0.029 4.161 -0.029 4.161 c 0 0 1.961 1.389 1.961 1.389 c 0 0 0.321 3.785 0.321 3.785 c 0 0 0.61 0.972 0.61 0.972 c 0 0 -1.389 1.917 -1.389 1.917 c 0 0 0.063 2.599 0.063 2.599 c 0 0 2.079 1.616 2.079 1.616 c 0 0 1.524 0.072 1.524 0.072 c 0 0 -2.348 3.782 -2.348 3.782 c 0 0 -0.661 3.932 -0.661 3.932 c 0 0 -1.401 0.803 -1.401 0.803 c 0 0 0.931 3.721 0.931 3.721 c 0 0 0.876 0.981 0.876 0.981 c 0 0 -1.63 1.313 -1.63 1.313 c 0 0 0.909 0.787 0.909 0.787 c 0 0 -1.388 1.372 -1.388 1.372 c 0 0 0.229 0.686 0.229 0.686 c 0 0 -1.096 0.116 -1.096 0.116 c 0 0 -1.104 1.673 -1.104 1.673 c 0 0 -5.352 2.981 -5.352 2.981 c 0 0 -0.735 4.246 -0.735 4.246 c 0 0 -8.26 -0.416 -8.26 -0.416 c 0 0 -4.263 -1.484 -4.263 -1.484 c 0 0 0.773 -5.083 0.773 -5.083 c 0 0 2.108 -3.938 2.108 -3.938 c 0 0 0.024 -1.697 0.024 -1.697 c 0 0 -0.637 -0.956 -0.637 -0.956 c 0 0 0.749 -2.004 0.749 -2.004 c 0 0 -0.869 -2.387 -0.869 -2.387 c 0 0 -1.271 -0.098 -1.271 -0.098 c 0 0 -0.661 0.97 -0.661 0.97 c 0 0 -0.441 1.352 -0.441 1.352 c 0 0 0.5 -0.146 0.5 -0.146 c 0 0 -0.088 1.582 -0.088 1.582 c 0 0 -0.908 -2.111 -0.908 -2.111 c 0 0 1.39 -3.602 1.39 -3.602 c 0 0 1.306 -0.817 1.306 -0.817 c 0 0 1.429 -2.436 1.429 -2.436 c 0 0 -1.051 -1.558 -1.051 -1.558 c 0 0 0.787 -1.188 0.787 -1.188 c 0 0 -0.763 -0.573 -0.763 -0.573 c 0 0 -0.117 -2.443 -0.117 -2.443 c 0 0 3.133 -1.132 3.133 -1.132 c 0 0 0.624 -0.112 0.624 -0.112 c 0 0 1.879 -2.798 1.879 -2.798 c 0 0 4.046 -1.621 4.046 -1.621 c 0 0 -1.311 -2.658 -1.311 -2.658 c 0 0 -0.142 -1.094 -0.142 -1.094 c 0 0 0.772 -0.688 0.772 -0.688 c 0 0 -1.615 -0.739 -1.615 -0.739 c 0 0 -0.531 -2.116 -0.531 -2.116 c 0 0 -0.698 -0.39 -0.698 -0.39 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tébessa"},"13":{"path":"M 193.764 72.7758 c 0 0 -0.686 0.069 -0.686 0.069 c 0 0 -0.264 -0.909 -0.264 -0.909 c 0 0 -3.488 -1.748 -3.488 -1.748 c 0 0 -0.331 0.33 -0.331 0.33 c 0 0 -0.372 -0.771 -0.372 -0.771 c 0 0 -1.081 0.455 -1.081 0.455 c 0 0 -2.338 -0.793 -2.338 -0.793 c 0 0 -0.918 1.336 -0.918 1.336 c 0 0 -1.082 0.265 -1.082 0.265 c 0 0 -1.053 -0.668 -1.053 -0.668 c 0 0 0.202 -0.954 0.202 -0.954 c 0 0 -0.848 -0.622 -0.848 -0.622 c 0 0 -3.998 2.927 -3.998 2.927 c 0 0 -0.671 -0.354 -0.671 -0.354 c 0 0 -2.174 1.167 -2.174 1.167 c 0 0 -3.447 0.248 -3.447 0.248 c 0 0 -1.838 -0.844 -1.838 -0.844 c 0 0 -1.167 0.414 -1.167 0.414 c 0 0 -0.104 0.95 -0.104 0.95 c 0 0 2.603 2.448 2.603 2.448 c 0 0 1.057 0.802 1.057 0.802 c 0 0 1.388 -0.219 1.388 -0.219 c 0 0 0.027 1.49 0.027 1.49 c 0 0 1.617 0.96 1.617 0.96 c 0 0 0.088 0.883 0.088 0.883 c 0 0 3.129 1.718 3.129 1.718 c 0 0 -2.502 3.209 -2.502 3.209 c 0 0 0.771 0.313 0.771 0.313 c 0 0 1.368 2.382 1.368 2.382 c 0 0 1.285 0.582 1.285 0.582 c 0 0 -2.119 2.566 -2.119 2.566 c 0 0 1.582 2.156 1.582 2.156 c 0 0 -0.213 1.807 -0.213 1.807 c 0 0 1.198 3.756 1.198 3.756 c 0 0 3.61 -2.621 3.61 -2.621 c 0 0 4.992 0.022 4.992 0.022 c 0 0 1.227 -1.408 1.227 -1.408 c 0 0 1.529 -0.482 1.529 -0.482 c 0 0 6.093 -5.633 6.093 -5.633 c 0 0 -0.362 -0.793 -0.362 -0.793 c 0 0 -0.956 -0.198 -0.956 -0.198 c 0 0 1.609 -0.95 1.609 -0.95 c 0 0 1.285 -2.754 1.285 -2.754 c 0 0 -0.23 -0.686 -0.23 -0.686 c 0 0 0.496 0.037 0.496 0.037 c 0 0 -0.273 -1.005 -0.273 -1.005 c 0 0 -2.376 0.271 -2.376 0.271 c 0 0 0.434 -3.193 0.434 -3.193 c 0 0 -1.177 0.239 -1.177 0.239 c 0 0 0.804 -1.134 0.804 -1.134 c 0 0 -1.191 -0.046 -1.191 -0.046 c 0 0 -0.506 -1.828 -0.506 -1.828 c 0 0 1.313 -2.126 1.313 -2.126 c 0 0 -1.942 -1.063 -1.942 -1.063 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tlemcen"},"14":{"path":"M 258.955 61.8178 c 0 0 -1.327 0.262 -1.327 0.262 c 0 0 0.221 1.396 0.221 1.396 c 0 0 6.776 4.105 6.776 4.105 c 0 0 1.052 1.839 1.052 1.839 c 0 0 2.688 -2.3 2.688 -2.3 c 0 0 1.052 0.797 1.052 0.797 c 0 0 0.327 1.125 0.327 1.125 c 0 0 1.748 0.418 1.748 0.418 c 0 0 -0.01 1.521 -0.01 1.521 c 0 0 -0.677 0.26 -0.677 0.26 c 0 0 -1.121 2.251 -1.121 2.251 c 0 0 1.432 1.277 1.432 1.277 c 0 0 -3.229 1.273 -3.229 1.273 c 0 0 -1.447 4.661 -1.447 4.661 c 0 0 -1.47 0.458 -1.47 0.458 c 0 0 0.167 2.428 0.167 2.428 c 0 0 -3.015 0.372 -3.015 0.372 c 0 0 -0.437 1.044 -0.437 1.044 c 0 0 -1.978 0.888 -1.978 0.888 c 0 0 -2.348 2.563 -2.348 2.563 c 0 0 -4.877 1.753 -4.877 1.753 c 0 0 -1.839 2.088 -1.839 2.088 c 0 0 -0.365 2.438 -0.365 2.438 c 0 0 -1.645 0.978 -1.645 0.978 c 0 0 -0.272 -1.14 -0.272 -1.14 c 0 0 -3.774 2.229 -3.774 2.229 c 0 0 0.808 1.346 0.808 1.346 c 0 0 -2.194 1.46 -2.194 1.46 c 0 0 -1.118 -1.577 -1.118 -1.577 c 0 0 -0.216 -1.843 -0.216 -1.843 c 0 0 -5.541 0.295 -5.541 0.295 c 0 0 0.672 -4.883 0.672 -4.883 c 0 0 -3.973 -0.827 -3.973 -0.827 c 0 0 1.657 -2.906 1.657 -2.906 c 0 0 -2.975 -1.225 -2.975 -1.225 c 0 0 -0.316 -0.531 -0.316 -0.531 c 0 0 0.755 -0.53 0.755 -0.53 c 0 0 -0.449 -1.181 -0.449 -1.181 c 0 0 -1.062 0.458 -1.062 0.458 c 0 0 -1.729 -3.065 -1.729 -3.065 c 0 0 0.385 -1.708 0.385 -1.708 c 0 0 -0.557 -0.922 -0.557 -0.922 c 0 0 3.161 -2.329 3.161 -2.329 c 0 0 -1.595 -2.433 -1.595 -2.433 c 0 0 -1.402 -0.632 -1.402 -0.632 c 0 0 -0.281 -0.991 -0.281 -0.991 c 0 0 -3.297 0.388 -3.297 0.388 c 0 0 1.071 -1.77 1.071 -1.77 c 0 0 1.552 -1.101 1.552 -1.101 c 0 0 -0.245 -0.949 -0.245 -0.949 c 0 0 1.176 -1.409 1.176 -1.409 c 0 0 1.083 -0.161 1.083 -0.161 c 0 0 1.521 0.789 1.521 0.789 c 0 0 1.112 -0.354 1.112 -0.354 c 0 0 0.873 -2.104 0.873 -2.104 c 0 0 0.688 -0.28 0.688 -0.28 c 0 0 -1.49 -1.555 -1.49 -1.555 c 0 0 0.9 -0.182 0.9 -0.182 c 0 0 1.728 -2.878 1.728 -2.878 c 0 0 1.215 -0.098 1.215 -0.098 c 0 0 0.112 -0.867 0.112 -0.867 c 0 0 0.812 0.11 0.812 0.11 c 0 0 0.164 -0.913 0.164 -0.913 c 0 0 2.058 0.206 2.058 0.206 c 0 0 0.567 -0.985 0.567 -0.985 c 0 0 1.449 -0.572 1.449 -0.572 c 0 0 1.345 1.67 1.345 1.67 c 0 0 0.589 -2.298 0.589 -2.298 c 0 0 1.271 0.93 1.271 0.93 c 0 0 0.538 -0.303 0.538 -0.303 c 0 0 1.353 0.765 1.353 0.765 c 0 0 0.063 1.414 0.063 1.414 c 0 0 1.952 -0.174 1.952 -0.174 c 0 0 1.046 1.72 1.046 1.72 c 0 0 0.813 0.153 0.813 0.153 c 0 0 0.172 -1.047 0.172 -1.047 c 0 0 0.958 0.973 0.958 0.973 c 0 0 3.798 -0.432 3.798 -0.432 c 0 0 2.435 -1.337 2.435 -1.337 c 0 0 -0.56 0.67 -0.56 0.67 c 0 0 1.55 0.067 1.55 0.067 c 0 0 -0.034 0.954 -0.034 0.954 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tiaret"},"15":{"path":"M 310.88 26.4728 c 0 0 1.398 1.952 1.398 1.952 c 0 0 0.068 1.338 0.068 1.338 c 0 0 -0.67 0.654 -0.67 0.654 c 0 0 -0.705 -0.539 -0.705 -0.539 c 0 0 -1.229 0.36 -1.229 0.36 c 0 0 -0.147 0.646 -0.147 0.646 c 0 0 1.777 0.943 1.777 0.943 c 0 0 -1.26 1.581 -1.26 1.581 c 0 0 0.406 0.661 0.406 0.661 c 0 0 -2.179 2.442 -2.179 2.442 c 0 0 -1.795 0.831 -1.795 0.831 c 0 0 -2.514 0.268 -2.514 0.268 c 0 0 -0.273 -0.535 -0.273 -0.535 c 0 0 -1.01 0.543 -1.01 0.543 c 0 0 -5.653 0.163 -5.653 0.163 c 0 0 -1.334 -0.33 -1.334 -0.33 c 0 0 -0.935 -1.637 -0.935 -1.637 c 0 0 -0.782 0.04 -0.782 0.04 c 0 0 -0.892 -1.236 -0.892 -1.236 c 0 0 -0.219 -1.694 -0.219 -1.694 c 0 0 1.417 -0.319 1.417 -0.319 c 0 0 0.845 0.592 0.845 0.592 c 0 0 -0.163 -1.288 -0.163 -1.288 c 0 0 1.354 0.313 1.354 0.313 c 0 0 -0.771 -0.862 -0.771 -0.862 c 0 0 0.386 -1.441 0.386 -1.441 c 0 0 1.042 0.231 1.042 0.231 c 0 0 0.179 -0.604 0.179 -0.604 c 0 0 0.945 -0.077 0.945 -0.077 c 0 0 0.045 -0.779 0.045 -0.779 c 0 0 1.354 -1.163 1.354 -1.163 c 0 0 -0.135 -1.239 -0.135 -1.239 c 0 0 5.439 -0.32 5.439 -0.32 c 0 0 1.851 0.426 1.851 0.426 c 0 0 0.986 -0.547 0.986 -0.547 c 0 0 3.174 0.626 3.174 0.626 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tizi-Ouzou"},"16":{"path":"M 285.549 29.5858 c 0 0 -0.27 0.609 -0.27 0.609 c 0 0 0.656 -0.216 0.656 -0.216 c 0 0 0.031 1.021 0.031 1.021 c 0 0 -2.278 0.745 -2.278 0.745 c 0 0 -0.66 -0.482 -0.66 -0.482 c 0 0 0.391 0.701 0.391 0.701 c 0 0 -0.688 0.546 -0.688 0.546 c 0 0 -1.01 0.771 -1.01 0.771 c 0 0 -0.609 -0.302 -0.609 -0.302 c 0 0 -0.701 1.807 -0.701 1.807 c 0 0 -1.117 0.075 -1.117 0.075 c 0 0 0.107 -1.082 0.107 -1.082 c 0 0 -1.49 1.068 -1.49 1.068 c 0 0 -3.771 -1.583 -3.771 -1.583 c 0 0 -0.135 -1.446 -0.135 -1.446 c 0 0 0.607 -1.614 0.607 -1.614 c 0 0 0.9 -0.174 0.9 -0.174 c 0 0 0.272 -0.944 0.272 -0.944 c 0 0 1.205 -0.234 1.205 -0.234 c 0 0 1.831 0.088 1.831 0.088 c 0 0 0.494 1.2 0.494 1.2 c 0 0 1.162 0.524 1.162 0.524 c 0 0 2.119 -0.622 2.119 -0.622 c 0 0 0.155 -1.295 0.155 -1.295 c 0 0 2.799 0.839 2.799 0.839 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Alger"},"17":{"path":"M 303.711 95.2648 c 0 0 -4.303 -3.584 -4.303 -3.584 c 0 0 0.313 -2.084 0.313 -2.084 c 0 0 -1.836 -1.982 -1.836 -1.982 c 0 0 0.299 -2.041 0.299 -2.041 c 0 0 -0.719 -4.249 -0.719 -4.249 c 0 0 -3.906 -0.974 -3.906 -0.974 c 0 0 -1.411 0.479 -1.411 0.479 c 0 0 -0.14 -1.652 -0.14 -1.652 c 0 0 -1.402 -0.321 -1.402 -0.321 c 0 0 0.209 -2.972 0.209 -2.972 c 0 0 -0.698 -0.953 -0.698 -0.953 c 0 0 0.551 -0.067 0.551 -0.067 c 0 0 0.504 -1.54 0.504 -1.54 c 0 0 -1.839 0.736 -1.839 0.736 c 0 0 -1.138 -3.13 -1.138 -3.13 c 0 0 4.281 -3.605 4.281 -3.605 c 0 0 -0.424 -1.941 -0.424 -1.941 c 0 0 0.865 -0.632 0.865 -0.632 c 0 0 0.075 -1.772 0.075 -1.772 c 0 0 -4.719 -3.806 -4.719 -3.806 c 0 0 -1.903 -1.954 -1.903 -1.954 c 0 0 -0.313 -1.257 -0.313 -1.257 c 0 0 -1.091 0.049 -1.091 0.049 c 0 0 -0.854 -1.716 -0.854 -1.716 c 0 0 -1.031 1.021 -1.031 1.021 c 0 0 0.104 1.206 0.104 1.206 c 0 0 -0.753 1.37 -0.753 1.37 c 0 0 -2.786 0.7 -2.786 0.7 c 0 0 -0.185 -2.199 -0.185 -2.199 c 0 0 -0.699 0.144 -0.699 0.144 c 0 0 -0.693 -2.337 -0.693 -2.337 c 0 0 -2.585 0.707 -2.585 0.707 c 0 0 0.677 5.005 0.677 5.005 c 0 0 -0.578 -0.259 -0.578 -0.259 c 0 0 -1.83 1.359 -1.83 1.359 c 0 0 -1.605 2.564 -1.605 2.564 c 0 0 -1.292 0.661 -1.292 0.661 c 0 0 -2.698 -1.908 -2.698 -1.908 c 0 0 -0.229 0.56 -0.229 0.56 c 0 0 -2.476 0.813 -2.476 0.813 c 0 0 -2.139 0.167 -2.139 0.167 c 0 0 -0.658 -2.362 -0.658 -2.362 c 0 0 -3.699 0.315 -3.699 0.315 c 0 0 -1.327 0.263 -1.327 0.263 c 0 0 0.221 1.396 0.221 1.396 c 0 0 6.777 4.106 6.777 4.106 c 0 0 1.051 1.838 1.051 1.838 c 0 0 2.688 -2.299 2.688 -2.299 c 0 0 1.052 0.796 1.052 0.796 c 0 0 0.327 1.125 0.327 1.125 c 0 0 1.748 0.418 1.748 0.418 c 0 0 -0.01 1.521 -0.01 1.521 c 0 0 -0.677 0.259 -0.677 0.259 c 0 0 -1.122 2.251 -1.122 2.251 c 0 0 1.432 1.277 1.432 1.277 c 0 0 -3.229 1.273 -3.229 1.273 c 0 0 -1.446 4.661 -1.446 4.661 c 0 0 -1.471 0.458 -1.471 0.458 c 0 0 0.169 2.428 0.169 2.428 c 0 0 0.566 6.331 0.566 6.331 c 0 0 1.244 3.59 1.244 3.59 c 0 0 0.441 -0.086 0.441 -0.086 c 0 0 3.376 4.766 3.376 4.766 c 0 0 1.209 0.325 1.209 0.325 c 0 0 2.258 -1.065 2.258 -1.065 c 0 0 0.695 0.262 0.695 0.262 c 0 0 -0.026 -1.447 -0.026 -1.447 c 0 0 2.266 -2.289 2.266 -2.289 c 0 0 1.456 0.758 1.456 0.758 c 0 0 -0.123 0.432 -0.123 0.432 c 0 0 1.253 -0.433 1.253 -0.433 c 0 0 2.38 6.709 2.38 6.709 c 0 0 -0.146 1.212 -0.146 1.212 c 0 0 1.604 3.201 1.604 3.201 c 0 0 5.243 1.505 5.243 1.505 c 0 0 3.983 3.588 3.983 3.588 c 0 0 1.407 2.328 1.407 2.328 c 0 0 8.125 3.061 8.125 3.061 c 0 0 1.49 1.064 1.49 1.064 c 0 0 4.01 3.915 4.01 3.915 c 0 0 3.191 5.374 3.191 5.374 c 0 0 11.872 3.224 11.872 3.224 c 0 0 -2.209 -11.442 -2.209 -11.442 c 0 0 2.42 -5.131 2.42 -5.131 c 0 0 -0.116 -1.902 -0.116 -1.902 c 0 0 0.521 -0.88 0.521 -0.88 c 0 0 -4 -0.997 -4 -0.997 c 0 0 -0.725 -1.226 -0.725 -1.226 c 0 0 -1.964 0.328 -1.964 0.328 c 0 0 -0.39 -0.95 -0.39 -0.95 c 0 0 -3.261 -0.627 -3.261 -0.627 c 0 0 -1.081 -1.472 -1.081 -1.472 c 0 0 -6.57 -2.83 -6.57 -2.83 c 0 0 -0.45 -0.689 -0.45 -0.689 c 0 0 0.395 -0.524 0.395 -0.524 c 0 0 1.344 -0.124 1.344 -0.124 c 0 0 1.375 -1.476 1.375 -1.476 c 0 0 1.195 0.003 1.195 0.003 c 0 0 -0.568 -0.73 -0.568 -0.73 c 0 0 -2.354 -0.395 -2.354 -0.395 c 0 0 -0.386 -1.492 -0.386 -1.492 c 0 0 -1.887 -0.264 -1.887 -0.264 c 0 0 -0.935 -1.142 -0.935 -1.142 c 0 0 0.443 -0.693 0.443 -0.693 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Djelfa"},"18":{"path":"M 335.112 34.2048 c 0 0 1.112 -0.339 1.112 -0.339 c 0 0 1.367 0.723 1.367 0.723 c 0 0 1.504 -0.446 1.504 -0.446 c 0 0 1.242 -1.671 1.242 -1.671 c 0 0 4.855 0.813 4.855 0.813 c 0 0 1.86 -1.232 1.86 -1.232 c 0 0 0.435 0.64 0.435 0.64 c 0 0 2.741 0.479 2.741 0.479 c 0 0 -0.254 -1.387 -0.254 -1.387 c 0 0 0.828 -0.194 0.828 -0.194 c 0 0 0.3 -0.784 0.3 -0.784 c 0 0 -2.966 -1.426 -2.966 -1.426 c 0 0 -0.699 -3.309 -0.699 -3.309 c 0 0 -1.636 -0.354 -1.636 -0.354 c 0 0 0.278 -1.183 0.278 -1.183 c 0 0 -0.458 -0.661 -0.458 -0.661 c 0 0 -5.771 2.994 -5.771 2.994 c 0 0 -3.482 0.854 -3.482 0.854 c 0 0 -0.857 -0.566 -0.857 -0.566 c 0 0 -1.676 0.329 -1.676 0.329 c 0 0 -2.381 1.442 -2.381 1.442 c 0 0 -1.033 2.037 -1.033 2.037 c 0 0 -1.852 0.936 -1.852 0.936 c 0 0 0.027 1.315 0.027 1.315 c 0 0 0.917 0.194 0.917 0.194 c 0 0 0.751 -0.023 0.751 -0.023 c 0 0 0.402 1.854 0.402 1.854 c 0 0 0.979 0.076 0.979 0.076 c 0 0 0.992 -0.957 0.992 -0.957 c 0 0 1.248 0.676 1.248 0.676 c 0 0 1.227 -0.83 1.227 -0.83 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Jijel"},"19":{"path":"M 335.112 34.2048 c 0 0 0.558 0.717 0.558 0.717 c 0 0 -0.125 2.048 -0.125 2.048 c 0 0 1.244 0.953 1.244 0.953 c 0 0 -0.114 1.348 -0.114 1.348 c 0 0 1.395 0.426 1.395 0.426 c 0 0 -0.097 1.172 -0.097 1.172 c 0 0 2.188 2.367 2.188 2.367 c 0 0 -0.978 0.521 -0.978 0.521 c 0 0 0.049 1.868 0.049 1.868 c 0 0 1.715 0.399 1.715 0.399 c 0 0 0.284 2.085 0.284 2.085 c 0 0 -0.688 0.604 -0.688 0.604 c 0 0 1.162 1.212 1.162 1.212 c 0 0 -1.2 1.294 -1.2 1.294 c 0 0 -0.965 0.569 -0.965 0.569 c 0 0 0.444 1.163 0.444 1.163 c 0 0 -2.806 -2.418 -2.806 -2.418 c 0 0 -1.214 0.316 -1.214 0.316 c 0 0 -1.424 1.56 -1.424 1.56 c 0 0 0.121 0.773 0.121 0.773 c 0 0 1.212 0.402 1.212 0.402 c 0 0 -0.792 1.303 -0.792 1.303 c 0 0 -0.682 -0.238 -0.682 -0.238 c 0 0 -0.502 0.541 -0.502 0.541 c 0 0 -2.294 -0.948 -2.294 -0.948 c 0 0 -0.241 0.685 -0.241 0.685 c 0 0 -0.797 -0.078 -0.797 -0.078 c 0 0 -1.382 1.093 -1.382 1.093 c 0 0 0.234 1.001 0.234 1.001 c 0 0 -0.78 1.759 -0.78 1.759 c 0 0 -1.127 -0.334 -1.127 -0.334 c 0 0 -3.493 -0.469 -3.493 -0.469 c 0 0 -0.547 -0.806 -0.547 -0.806 c 0 0 0.417 -0.537 0.417 -0.537 c 0 0 -0.486 -0.518 -0.486 -0.518 c 0 0 -1.107 0.239 -1.107 0.239 c 0 0 -1.474 -1.041 -1.474 -1.041 c 0 0 0.169 -0.628 0.169 -0.628 c 0 0 -0.018 -1.602 -0.018 -1.602 c 0 0 2.088 -0.288 2.088 -0.288 c 0 0 -0.484 -2.927 -0.484 -2.927 c 0 0 1.669 -2.858 1.669 -2.858 c 0 0 -0.97 -0.972 -0.97 -0.972 c 0 0 0.127 -2.078 0.127 -2.078 c 0 0 -0.963 -0.273 -0.963 -0.273 c 0 0 -1.48 -2.546 -1.48 -2.546 c 0 0 -1.203 -0.362 -1.203 -0.362 c 0 0 -0.961 0.653 -0.961 0.653 c 0 0 -2.854 0.298 -2.854 0.298 c 0 0 -0.779 -0.983 -0.779 -0.983 c 0 0 0.302 -1.874 0.302 -1.874 c 0 0 -1.26 -0.672 -1.26 -0.672 c 0 0 2.517 -1.449 2.517 -1.449 c 0 0 0.048 -1.349 0.048 -1.349 c 0 0 3.62 0.479 3.62 0.479 c 0 0 0.447 -1.378 0.447 -1.378 c 0 0 0.928 0.088 0.928 0.088 c 0 0 0.039 -0.447 0.039 -0.447 c 0 0 2.159 1.465 2.159 1.465 c 0 0 -0.535 0.692 -0.535 0.692 c 0 0 -0.024 2.691 -0.024 2.691 c 0 0 0.57 -0.199 0.57 -0.199 c 0 0 -0.025 0.937 -0.025 0.937 c 0 0 1.656 -0.241 1.656 -0.241 c 0 0 0.748 -0.375 0.748 -0.375 c 0 0 -0.471 -0.92 -0.471 -0.92 c 0 0 1.314 -1.474 1.314 -1.474 c 0 0 -0.252 -0.684 -0.252 -0.684 c 0 0 2.389 -1.072 2.389 -1.072 c 0 0 0.184 -1.478 0.184 -1.478 c 0 0 0.751 -0.023 0.751 -0.023 c 0 0 0.403 1.854 0.403 1.854 c 0 0 0.979 0.077 0.979 0.077 c 0 0 0.992 -0.958 0.992 -0.958 c 0 0 1.248 0.676 1.248 0.676 c 0 0 1.224 -0.831 1.224 -0.831 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Sétif"},"20":{"path":"M 233.026 90.7739 c 0 0 -2.853 -0.734 -2.853 -0.734 c 0 0 -4.583 3.134 -4.583 3.134 c 0 0 -1.732 -2.296 -1.732 -2.296 c 0 0 -2.898 2.009 -2.898 2.009 c 0 0 -2.172 -0.253 -2.172 -0.253 c 0 0 -2.096 -2.128 -2.096 -2.128 c 0 0 -2.331 -0.763 -2.331 -0.763 c 0 0 -1.5 -1.498 -1.5 -1.498 c 0 0 -2.199 1.248 -2.199 1.248 c 0 0 -0.138 -2.153 -0.138 -2.153 c 0 0 -0.979 -1.096 -0.979 -1.096 c 0 0 0.256 -1.511 0.256 -1.511 c 0 0 2.491 1.248 2.491 1.248 c 0 0 0.646 1.884 0.646 1.884 c 0 0 1.12 -1.667 1.12 -1.667 c 0 0 -1.379 -2.84 -1.379 -2.84 c 0 0 -2.113 -1.373 -2.113 -1.373 c 0 0 -0.294 -1.104 -0.294 -1.104 c 0 0 -1.77 -0.163 -1.77 -0.163 c 0 0 0.403 -1.189 0.403 -1.189 c 0 0 -1.328 -0.901 -1.328 -0.901 c 0 0 1.163 -0.801 1.163 -0.801 c 0 0 -0.396 -2.087 -0.396 -2.087 c 0 0 1.813 -0.197 1.813 -0.197 c 0 0 -0.485 -1.763 -0.485 -1.763 c 0 0 0.353 -0.945 0.353 -0.945 c 0 0 1.317 -0.403 1.317 -0.403 c 0 0 0.982 0.007 0.982 0.007 c 0 0 0.665 -1.239 0.665 -1.239 c 0 0 0.345 1.976 0.345 1.976 c 0 0 2.583 -0.188 2.583 -0.188 c 0 0 1.301 0.867 1.301 0.867 c 0 0 1.081 -0.098 1.081 -0.098 c 0 0 0.205 0.906 0.205 0.906 c 0 0 1.011 0.663 1.011 0.663 c 0 0 2.493 -1.648 2.493 -1.648 c 0 0 0.773 0.891 0.773 0.891 c 0 0 0.999 0.119 0.999 0.119 c 0 0 1.539 -1.518 1.539 -1.518 c 0 0 3.298 -0.388 3.298 -0.388 c 0 0 0.28 0.989 0.28 0.989 c 0 0 1.403 0.633 1.403 0.633 c 0 0 1.595 2.433 1.595 2.433 c 0 0 -3.162 2.329 -3.162 2.329 c 0 0 0.558 0.923 0.558 0.923 c 0 0 -0.385 1.708 -0.385 1.708 c 0 0 1.729 3.064 1.729 3.064 c 0 0 1.062 -0.458 1.062 -0.458 c 0 0 0.449 1.181 0.449 1.181 c 0 0 -0.755 0.531 -0.755 0.531 c 0 0 0.315 0.529 0.315 0.529 c 0 0 2.975 1.226 2.975 1.226 c 0 0 -1.655 2.904 -1.655 2.904 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Saida"},"21":{"path":"M 368.508 30.2198 c 0 0 -0.538 0.351 -0.538 0.351 c 0 0 -0.418 -0.446 -0.418 -0.446 c 0 0 -0.55 1.052 -0.55 1.052 c 0 0 -3.584 1.265 -3.584 1.265 c 0 0 -0.653 0.873 -0.653 0.873 c 0 0 0.42 1.242 0.42 1.242 c 0 0 -2.629 0.698 -2.629 0.698 c 0 0 -0.062 1.543 -0.062 1.543 c 0 0 -1.254 -0.13 -1.254 -0.13 c 0 0 -0.397 -0.7 -0.397 -0.7 c 0 0 -1.124 0.208 -1.124 0.208 c 0 0 0.207 -2.014 0.207 -2.014 c 0 0 0.97 -1.018 0.97 -1.018 c 0 0 -1.8 0.36 -1.8 0.36 c 0 0 -2.274 -0.424 -2.274 -0.424 c 0 0 -0.369 -1.324 -0.369 -1.324 c 0 0 -1.066 1.389 -1.066 1.389 c 0 0 -2.188 -0.147 -2.188 -0.147 c 0 0 -0.967 0.174 -0.967 0.174 c 0 0 -0.254 -1.387 -0.254 -1.387 c 0 0 0.828 -0.194 0.828 -0.194 c 0 0 0.3 -0.783 0.3 -0.783 c 0 0 -2.966 -1.427 -2.966 -1.427 c 0 0 -0.699 -3.309 -0.699 -3.309 c 0 0 -1.635 -0.354 -1.635 -0.354 c 0 0 0.277 -1.183 0.277 -1.183 c 0 0 -0.458 -0.661 -0.458 -0.661 c 0 0 -0.486 -1.046 -0.486 -1.046 c 0 0 0.477 -1.133 0.477 -1.133 c 0 0 1.46 -1.163 1.46 -1.163 c 0 0 2.801 -0.643 2.801 -0.643 c 0 0 1.617 0.827 1.617 0.827 c 0 0 0.77 2.041 0.77 2.041 c 0 0 2.885 0.665 2.885 0.665 c 0 0 0.642 -0.521 0.642 -0.521 c 0 0 0.391 0.479 0.391 0.479 c 0 0 1.646 -0.394 1.646 -0.394 c 0 0 0.779 1.6 0.779 1.6 c 0 0 1.483 0.237 1.483 0.237 c 0 0 2.637 -1.094 2.637 -1.094 c 0 0 1.659 0.04 1.659 0.04 c 0 0 2.043 -1.929 2.043 -1.929 c 0 0 -0.279 -1.044 -0.279 -1.044 c 0 0 -1.836 -1.298 -1.836 -1.298 c 0 0 2.469 0.061 2.469 0.061 c 0 0 0.865 0.703 0.865 0.703 c 0 0 -0.27 0.649 -0.27 0.649 c 0 0 0.934 1.558 0.934 1.558 c 0 0 -0.102 0.528 -0.102 0.528 c 0 0 -0.618 -0.109 -0.618 -0.109 c 0 0 1.345 1.255 1.345 1.255 c 0 0 0.646 3.424 0.646 3.424 c 0 0 -0.074 0.896 -0.074 0.896 c 0 0 -1.197 0.49 -1.197 0.49 c 0 0 0.196 1.267 0.196 1.267 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Skikda"},"22":{"path":"M 204.15 64.0609 c 0 0 -0.642 0.992 -0.642 0.992 c 0 0 0.241 0.965 0.241 0.965 c 0 0 -1.503 0.747 -1.503 0.747 c 0 0 -0.184 -0.672 -0.184 -0.672 c 0 0 -2.838 0.497 -2.838 0.497 c 0 0 -0.066 0.729 -0.066 0.729 c 0 0 -0.969 0.457 -0.969 0.457 c 0 0 -0.813 -0.548 -0.813 -0.548 c 0 0 -0.78 1.395 -0.78 1.395 c 0 0 -0.673 -0.18 -0.673 -0.18 c 0 0 0.286 1.945 0.286 1.945 c 0 0 -1.38 0.462 -1.38 0.462 c 0 0 -0.248 1.449 -0.248 1.449 c 0 0 -0.818 0.477 -0.818 0.477 c 0 0 1.942 1.063 1.942 1.063 c 0 0 -1.313 2.126 -1.313 2.126 c 0 0 0.506 1.828 0.506 1.828 c 0 0 1.191 0.045 1.191 0.045 c 0 0 -0.804 1.135 -0.804 1.135 c 0 0 1.177 -0.239 1.177 -0.239 c 0 0 -0.433 3.193 -0.433 3.193 c 0 0 2.376 -0.271 2.376 -0.271 c 0 0 0.272 1.004 0.272 1.004 c 0 0 -0.496 -0.036 -0.496 -0.036 c 0 0 0.23 0.687 0.23 0.687 c 0 0 -1.285 2.753 -1.285 2.753 c 0 0 -1.609 0.95 -1.609 0.95 c 0 0 0.956 0.198 0.956 0.198 c 0 0 0.362 0.793 0.362 0.793 c 0 0 -6.093 5.633 -6.093 5.633 c 0 0 1.08 1.632 1.08 1.632 c 0 0 2.133 -1.567 2.133 -1.567 c 0 0 0.589 1.018 0.589 1.018 c 0 0 0.342 -0.416 0.342 -0.416 c 0 0 2.966 0.896 2.966 0.896 c 0 0 4.055 -2.511 4.055 -2.511 c 0 0 1.843 1.041 1.843 1.041 c 0 0 3.133 9.769 3.133 9.769 c 0 0 0.314 -1.128 0.314 -1.128 c 0 0 0.854 0.04 0.854 0.04 c 0 0 2.091 -2.885 2.091 -2.885 c 0 0 1.632 -0.712 1.632 -0.712 c 0 0 1.374 0.198 1.374 0.198 c 0 0 1.501 -3.065 1.501 -3.065 c 0 0 0.941 -0.691 0.941 -0.691 c 0 0 -1.231 -5.509 -1.231 -5.509 c 0 0 -1.5 -1.498 -1.5 -1.498 c 0 0 -2.199 1.248 -2.199 1.248 c 0 0 -0.138 -2.153 -0.138 -2.153 c 0 0 -0.979 -1.096 -0.979 -1.096 c 0 0 0.256 -1.511 0.256 -1.511 c 0 0 2.491 1.248 2.491 1.248 c 0 0 0.646 1.884 0.646 1.884 c 0 0 1.12 -1.667 1.12 -1.667 c 0 0 -1.379 -2.84 -1.379 -2.84 c 0 0 -2.113 -1.373 -2.113 -1.373 c 0 0 -0.294 -1.104 -0.294 -1.104 c 0 0 -1.77 -0.163 -1.77 -0.163 c 0 0 0.403 -1.189 0.403 -1.189 c 0 0 -1.328 -0.901 -1.328 -0.901 c 0 0 1.163 -0.801 1.163 -0.801 c 0 0 -0.396 -2.087 -0.396 -2.087 c 0 0 1.813 -0.197 1.813 -0.197 c 0 0 -0.485 -1.763 -0.485 -1.763 c 0 0 0.353 -0.945 0.353 -0.945 c 0 0 1.317 -0.403 1.317 -0.403 c 0 0 -0.804 -2.202 -0.804 -2.202 c 0 0 0.376 -0.966 0.376 -0.966 c 0 0 1.477 -0.712 1.477 -0.712 c 0 0 -0.955 -0.354 -0.955 -0.354 c 0 0 -1.221 1.019 -1.221 1.019 c 0 0 -0.218 -0.549 -0.218 -0.549 c 0 0 1.312 -0.857 1.312 -0.857 c 0 0 0.38 -0.986 0.38 -0.986 c 0 0 -2.728 -0.854 -2.728 -0.854 c 0 0 -0.353 -0.632 -0.353 -0.632 c 0 0 -0.752 0.882 -0.752 0.882 c 0 0 -1.563 -0.12 -1.563 -0.12 c 0 0 0.231 -2.255 0.231 -2.255 c 0 0 -1.589 0.603 -1.589 0.603 c 0 0 -0.783 -0.393 -0.783 -0.393 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Sidi Bel Abbes"},"23":{"path":"M 375.158 30.0759 c 0 0 0.57 -1.447 0.57 -1.447 c 0 0 -0.427 -0.747 -0.427 -0.747 c 0 0 0.969 -1.14 0.969 -1.14 c 0 0 0.939 0.143 0.939 0.143 c 0 0 0.031 -1.328 0.031 -1.328 c 0 0 1.139 -0.009 1.139 -0.009 c 0 0 -0.366 -0.685 -0.366 -0.685 c 0 0 -1.192 -0.868 -1.192 -0.868 c 0 0 0.534 -2.257 0.534 -2.257 c 0 0 -1.771 0.605 -1.771 0.605 c 0 0 -1.04 -0.711 -1.04 -0.711 c 0 0 -0.714 0.503 -0.714 0.503 c 0 0 -2.358 -1.985 -2.358 -1.985 c 0 0 -2.144 0.188 -2.144 0.188 c 0 0 -0.479 -1.129 -0.479 -1.129 c 0 0 -2.073 0.349 -2.073 0.349 c 0 0 0.865 0.705 0.865 0.705 c 0 0 -0.27 0.648 -0.27 0.648 c 0 0 0.934 1.558 0.934 1.558 c 0 0 -0.102 0.529 -0.102 0.529 c 0 0 -0.618 -0.109 -0.618 -0.109 c 0 0 1.345 1.253 1.345 1.253 c 0 0 0.647 3.425 0.647 3.425 c 0 0 -0.075 0.896 -0.075 0.896 c 0 0 -1.196 0.49 -1.196 0.49 c 0 0 0.201 1.266 0.201 1.266 c 0 0 1.15 -0.122 1.15 -0.122 c 0 0 0.438 0.876 0.438 0.876 c 0 0 0.199 -0.74 0.199 -0.74 c 0 0 1.104 -0.509 1.104 -0.509 c 0 0 0.176 1.188 0.176 1.188 c 0 0 2.713 0.503 2.713 0.503 c 0 0 0.871 -1.339 0.871 -1.339 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Annaba"},"24":{"path":"M 375.158 30.0759 c 0 0 0.936 -0.309 0.936 -0.309 c 0 0 0.688 0.501 0.688 0.501 c 0 0 1.188 2.609 1.188 2.609 c 0 0 1.169 -0.383 1.169 -0.383 c 0 0 0.201 0.543 0.201 0.543 c 0 0 -0.047 -0.771 -0.047 -0.771 c 0 0 1.299 0.584 1.299 0.584 c 0 0 0.92 1.851 0.92 1.851 c 0 0 -1.832 1.544 -1.832 1.544 c 0 0 -1.021 -0.411 -1.021 -0.411 c 0 0 -0.195 1.316 -0.195 1.316 c 0 0 1.08 1.383 1.08 1.383 c 0 0 -0.374 0.437 -0.374 0.437 c 0 0 -2.218 0.173 -2.218 0.173 c 0 0 -2.16 2.08 -2.16 2.08 c 0 0 -1.194 -0.271 -1.194 -0.271 c 0 0 -2.52 0.934 -2.52 0.934 c 0 0 -2.854 -0.539 -2.854 -0.539 c 0 0 -0.494 1.348 -0.494 1.348 c 0 0 0.75 0.918 0.75 0.918 c 0 0 -1.257 0.076 -1.257 0.076 c 0 0 -0.683 1.774 -0.683 1.774 c 0 0 -2.784 1.371 -2.784 1.371 c 0 0 -0.998 -0.165 -0.998 -0.165 c 0 0 0.196 -0.958 0.196 -0.958 c 0 0 -1.267 -0.551 -1.267 -0.551 c 0 0 0.201 -1.256 0.201 -1.256 c 0 0 -0.077 -0.57 -0.077 -0.57 c 0 0 0.855 -0.474 0.855 -0.474 c 0 0 0.104 -1.688 0.104 -1.688 c 0 0 -0.561 -1.442 -0.561 -1.442 c 0 0 -1.225 -0.221 -1.225 -0.221 c 0 0 0.6 -0.717 0.6 -0.717 c 0 0 -1.052 -0.557 -1.052 -0.557 c 0 0 0.532 -0.551 0.532 -0.551 c 0 0 -0.572 -0.892 -0.572 -0.892 c 0 0 0.062 -1.543 0.062 -1.543 c 0 0 2.629 -0.698 2.629 -0.698 c 0 0 -0.42 -1.242 -0.42 -1.242 c 0 0 0.653 -0.873 0.653 -0.873 c 0 0 3.583 -1.265 3.583 -1.265 c 0 0 0.55 -1.052 0.55 -1.052 c 0 0 0.419 0.446 0.419 0.446 c 0 0 0.538 -0.351 0.538 -0.351 c 0 0 1.15 -0.122 1.15 -0.122 c 0 0 0.438 0.876 0.438 0.876 c 0 0 0.199 -0.741 0.199 -0.741 c 0 0 1.104 -0.509 1.104 -0.509 c 0 0 0.176 1.188 0.176 1.188 c 0 0 2.713 0.503 2.713 0.503 c 0 0 0.872 -1.333 0.872 -1.333 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Guelma"},"25":{"path":"M 361.888 43.9039 c 0 0 -0.077 -0.57 -0.077 -0.57 c 0 0 0.855 -0.474 0.855 -0.474 c 0 0 0.104 -1.688 0.104 -1.688 c 0 0 -0.561 -1.442 -0.561 -1.442 c 0 0 -1.224 -0.221 -1.224 -0.221 c 0 0 0.599 -0.717 0.599 -0.717 c 0 0 -1.052 -0.557 -1.052 -0.557 c 0 0 0.532 -0.551 0.532 -0.551 c 0 0 -0.572 -0.892 -0.572 -0.892 c 0 0 -1.253 -0.13 -1.253 -0.13 c 0 0 -0.398 -0.7 -0.398 -0.7 c 0 0 -1.124 0.208 -1.124 0.208 c 0 0 0.207 -2.014 0.207 -2.014 c 0 0 0.969 -1.018 0.969 -1.018 c 0 0 -1.799 0.36 -1.799 0.36 c 0 0 -2.274 -0.424 -2.274 -0.424 c 0 0 -0.368 -1.324 -0.368 -1.324 c 0 0 -1.067 1.389 -1.067 1.389 c 0 0 -2.188 -0.147 -2.188 -0.147 c 0 0 -0.02 1.6 -0.02 1.6 c 0 0 -3.298 0.766 -3.298 0.766 c 0 0 0.284 2.021 0.284 2.021 c 0 0 -0.922 1.877 -0.922 1.877 c 0 0 1.319 -0.403 1.319 -0.403 c 0 0 1.126 0.879 1.126 0.879 c 0 0 -0.265 1.487 -0.265 1.487 c 0 0 0.788 0.495 0.788 0.495 c 0 0 1.019 -0.295 1.019 -0.295 c 0 0 0.938 0.805 0.938 0.805 c 0 0 -0.108 1.354 -0.108 1.354 c 0 0 -0.381 0.438 -0.381 0.438 c 0 0 0.595 1.159 0.595 1.159 c 0 0 1.01 0.369 1.01 0.369 c 0 0 -0.464 -0.804 -0.464 -0.804 c 0 0 1.122 0.604 1.122 0.604 c 0 0 0.375 -1.069 0.375 -1.069 c 0 0 2.243 -0.159 2.243 -0.159 c 0 0 0.263 -1.444 0.263 -1.444 c 0 0 1.446 1.166 1.446 1.166 c 0 0 3.621 0.066 3.621 0.066 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Constantine"},"26":{"path":"M 291.189 51.9288 c 0 0 0.272 0.795 0.272 0.795 c 0 0 -1.143 0.688 -1.143 0.688 c 0 0 0.551 0.367 0.551 0.367 c 0 0 -2.021 0.685 -2.021 0.685 c 0 0 0.86 1.28 0.86 1.28 c 0 0 0.034 2.966 0.034 2.966 c 0 0 -2.708 -4.154 -2.708 -4.154 c 0 0 -0.896 0.141 -0.896 0.141 c 0 0 0.406 0.771 0.406 0.771 c 0 0 -0.488 0.495 -0.488 0.495 c 0 0 -1.09 0.049 -1.09 0.049 c 0 0 -0.854 -1.716 -0.854 -1.716 c 0 0 -1.031 1.021 -1.031 1.021 c 0 0 0.104 1.206 0.104 1.206 c 0 0 -0.753 1.37 -0.753 1.37 c 0 0 -2.786 0.7 -2.786 0.7 c 0 0 -0.185 -2.199 -0.185 -2.199 c 0 0 -0.699 0.144 -0.699 0.144 c 0 0 -0.693 -2.337 -0.693 -2.337 c 0 0 -2.585 0.707 -2.585 0.707 c 0 0 0.677 5.005 0.677 5.005 c 0 0 -0.578 -0.259 -0.578 -0.259 c 0 0 -1.83 1.359 -1.83 1.359 c 0 0 -1.605 2.564 -1.605 2.564 c 0 0 -1.292 0.661 -1.292 0.661 c 0 0 -2.698 -1.908 -2.698 -1.908 c 0 0 -0.229 0.56 -0.229 0.56 c 0 0 -2.476 0.813 -2.476 0.813 c 0 0 -2.139 0.167 -2.139 0.167 c 0 0 -0.658 -2.362 -0.658 -2.362 c 0 0 0.71 -1.968 0.71 -1.968 c 0 0 -2.811 -0.738 -2.811 -0.738 c 0 0 -0.347 -1.359 -0.347 -1.359 c 0 0 0.503 -0.62 0.503 -0.62 c 0 0 2.227 0.229 2.227 0.229 c 0 0 0.902 -3.906 0.902 -3.906 c 0 0 1.051 -1.104 1.051 -1.104 c 0 0 -0.339 -0.876 -0.339 -0.876 c 0 0 1.986 0.073 1.986 0.073 c 0 0 0.315 -2.775 0.315 -2.775 c 0 0 0.86 0.234 0.86 0.234 c 0 0 1.842 -1.11 1.842 -1.11 c 0 0 0.062 -1.843 0.062 -1.843 c 0 0 -1.344 -0.306 -1.344 -0.306 c 0 0 -0.085 -1.369 -0.085 -1.369 c 0 0 -0.709 -0.199 -0.709 -0.199 c 0 0 0.625 -1.909 0.625 -1.909 c 0 0 1.348 0.043 1.348 0.043 c 0 0 0.756 -0.614 0.756 -0.614 c 0 0 1.51 -1.087 1.51 -1.087 c 0 0 2.893 0.205 2.893 0.205 c 0 0 1.568 -1.178 1.568 -1.178 c 0 0 0.67 1.507 0.67 1.507 c 0 0 1.481 0.008 1.481 0.008 c 0 0 0.867 -0.967 0.867 -0.967 c 0 0 -0.189 -1.356 -0.189 -1.356 c 0 0 0.474 0.956 0.474 0.956 c 0 0 0.732 -0.598 0.732 -0.598 c 0 0 0.692 0.698 0.692 0.698 c 0 0 1.158 -1.154 1.158 -1.154 c 0 0 0.084 -1.381 0.084 -1.381 c 0 0 1.63 0.271 1.63 0.271 c 0 0 0.479 -0.537 0.479 -0.537 c 0 0 2.722 2.629 2.722 2.629 c 0 0 1.562 -1.479 1.562 -1.479 c 0 0 1.356 0.703 1.356 0.703 c 0 0 -0.439 0.687 -0.439 0.687 c 0 0 0.998 1.392 0.998 1.392 c 0 0 -1.071 0.599 -1.071 0.599 c 0 0 -0.441 1.267 -0.441 1.267 c 0 0 1.069 0.979 1.069 0.979 c 0 0 -0.181 0.809 -0.181 0.809 c 0 0 -1.426 0.414 -1.426 0.414 c 0 0 -0.229 0.854 -0.229 0.854 c 0 0 0.656 1.042 0.656 1.042 c 0 0 -0.409 0.485 -0.409 0.485 c 0 0 -0.898 0.936 -0.898 0.936 c 0 0 -1.014 -0.016 -1.014 -0.016 c 0 0 0.479 0.781 0.479 0.781 c 0 0 2.788 0.434 2.788 0.434 c 0 0 1.41 2.635 1.41 2.635 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Médéa"},"27":{"path":"M 212.85 55.2648 c 0 0 2.964 -1.85 2.964 -1.85 c 0 0 2.338 -4.67 2.338 -4.67 c 0 0 1.846 -1.942 1.846 -1.942 c 0 0 9.188 -5.395 9.188 -5.395 c 0 0 1.74 -0.06 1.74 -0.06 c 0 0 -1.001 3.283 -1.001 3.283 c 0 0 -1.979 2.472 -1.979 2.472 c 0 0 1.289 1.351 1.289 1.351 c 0 0 -0.634 0.698 -0.634 0.698 c 0 0 0.359 0.87 0.359 0.87 c 0 0 -2.126 0.093 -2.126 0.093 c 0 0 -0.555 0.604 -0.555 0.604 c 0 0 -1.226 -0.57 -1.226 -0.57 c 0 0 -0.846 1.017 -0.846 1.017 c 0 0 0.313 0.769 0.313 0.769 c 0 0 0.674 -0.036 0.674 -0.036 c 0 0 -0.59 0.992 -0.59 0.992 c 0 0 0.229 0.908 0.229 0.908 c 0 0 -1.332 1.438 -1.332 1.438 c 0 0 -0.877 -0.373 -0.877 -0.373 c 0 0 -0.867 0.539 -0.867 0.539 c 0 0 -1.744 2.073 -1.744 2.073 c 0 0 -0.903 -0.138 -0.903 -0.138 c 0 0 -0.604 0.964 -0.604 0.964 c 0 0 -0.03 -0.763 -0.03 -0.763 c 0 0 -1.07 0.18 -1.07 0.18 c 0 0 -1.028 -1.427 -1.028 -1.427 c 0 0 -2.252 0.6 -2.252 0.6 c 0 0 -1.276 -1.627 -1.276 -1.627 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Mostaganem"},"28":{"path":"M 320.989 54.6068 c 0 0 -0.17 0.627 -0.17 0.627 c 0 0 1.475 1.042 1.475 1.042 c 0 0 1.106 -0.24 1.106 -0.24 c 0 0 0.486 0.518 0.486 0.518 c 0 0 -0.417 0.537 -0.417 0.537 c 0 0 0.547 0.807 0.547 0.807 c 0 0 3.493 0.469 3.493 0.469 c 0 0 -2.661 2.962 -2.661 2.962 c 0 0 -1.817 0.906 -1.817 0.906 c 0 0 -0.722 -1.068 -0.722 -1.068 c 0 0 -1.062 -0.011 -1.062 -0.011 c 0 0 -0.828 0.921 -0.828 0.921 c 0 0 -0.074 -0.787 -0.074 -0.787 c 0 0 -0.96 1.506 -0.96 1.506 c 0 0 -1.945 -1.698 -1.945 -1.698 c 0 0 0.823 4.4 0.823 4.4 c 0 0 -0.379 2.546 -0.379 2.546 c 0 0 -0.916 1.548 -0.916 1.548 c 0 0 -0.524 -0.186 -0.524 -0.186 c 0 0 -1.187 1.172 -1.187 1.172 c 0 0 0.194 0.606 0.194 0.606 c 0 0 2.929 0.06 2.929 0.06 c 0 0 2.125 1.396 2.125 1.396 c 0 0 0.447 3.492 0.447 3.492 c 0 0 0.547 0.305 0.547 0.305 c 0 0 -0.538 0.065 -0.538 0.065 c 0 0 -0.683 1.586 -0.683 1.586 c 0 0 -5.438 1.63 -5.438 1.63 c 0 0 -0.942 1.502 -0.942 1.502 c 0 0 -1.001 0.173 -1.001 0.173 c 0 0 1.298 1.086 1.298 1.086 c 0 0 -1.021 0.547 -1.021 0.547 c 0 0 -0.657 -0.445 -0.657 -0.445 c 0 0 -1.832 1.14 -1.832 1.14 c 0 0 -4.806 0.046 -4.806 0.046 c 0 0 -0.876 1.823 -0.876 1.823 c 0 0 -2.191 1.835 -2.191 1.835 c 0 0 0.521 0.302 0.521 0.302 c 0 0 0.417 3.083 0.417 3.083 c 0 0 1.218 1.271 1.218 1.271 c 0 0 -0.307 0.725 -0.307 0.725 c 0 0 1.813 0.933 1.813 0.933 c 0 0 -0.773 1.007 -0.773 1.007 c 0 0 -1.99 0.525 -1.99 0.525 c 0 0 -4.303 -3.585 -4.303 -3.585 c 0 0 0.313 -2.084 0.313 -2.084 c 0 0 -1.836 -1.982 -1.836 -1.982 c 0 0 0.299 -2.042 0.299 -2.042 c 0 0 -0.719 -4.248 -0.719 -4.248 c 0 0 -3.906 -0.975 -3.906 -0.975 c 0 0 -1.411 0.479 -1.411 0.479 c 0 0 -0.14 -1.65 -0.14 -1.65 c 0 0 -1.402 -0.322 -1.402 -0.322 c 0 0 0.209 -2.972 0.209 -2.972 c 0 0 -0.698 -0.953 -0.698 -0.953 c 0 0 0.551 -0.068 0.551 -0.068 c 0 0 0.504 -1.539 0.504 -1.539 c 0 0 -1.839 0.736 -1.839 0.736 c 0 0 -1.138 -3.13 -1.138 -3.13 c 0 0 4.282 -3.606 4.282 -3.606 c 0 0 -0.425 -1.94 -0.425 -1.94 c 0 0 0.865 -0.633 0.865 -0.633 c 0 0 0.075 -1.772 0.075 -1.772 c 0 0 -4.719 -3.806 -4.719 -3.806 c 0 0 -1.903 -1.953 -1.903 -1.953 c 0 0 -0.313 -1.258 -0.313 -1.258 c 0 0 0.489 -0.494 0.489 -0.494 c 0 0 -0.405 -0.771 -0.405 -0.771 c 0 0 0.895 -0.14 0.895 -0.14 c 0 0 2.709 4.154 2.709 4.154 c 0 0 -0.037 -2.966 -0.037 -2.966 c 0 0 -0.859 -1.281 -0.859 -1.281 c 0 0 2.022 -0.685 2.022 -0.685 c 0 0 -0.551 -0.367 -0.551 -0.367 c 0 0 1.144 -0.686 1.144 -0.686 c 0 0 -0.274 -0.796 -0.274 -0.796 c 0 0 0.533 -0.809 0.533 -0.809 c 0 0 1.537 0.153 1.537 0.153 c 0 0 0.654 0.924 0.654 0.924 c 0 0 1.07 0.224 1.07 0.224 c 0 0 0.352 1.004 0.352 1.004 c 0 0 0.802 0.048 0.802 0.048 c 0 0 1.271 -1.214 1.271 -1.214 c 0 0 2.542 0.89 2.542 0.89 c 0 0 -0.444 -1.385 -0.444 -1.385 c 0 0 1.058 -3.265 1.058 -3.265 c 0 0 0.57 1.104 0.57 1.104 c 0 0 2.211 -0.769 2.211 -0.769 c 0 0 2.755 0.986 2.755 0.986 c 0 0 3.391 -1.461 3.391 -1.461 c 0 0 0.865 2.774 0.865 2.774 c 0 0 -1.615 0.625 -1.615 0.625 c 0 0 -0.69 2.095 -0.69 2.095 c 0 0 2.823 0.292 2.823 0.292 c 0 0 -0.36 -0.99 -0.36 -0.99 c 0 0 1.328 -0.64 1.328 -0.64 c 0 0 -0.386 1.092 -0.386 1.092 c 0 0 0.663 0.766 0.663 0.766 c 0 0 2.07 -1.562 2.07 -1.562 c 0 0 2.721 -0.533 2.721 -0.533 c 0 0 1.33 1.67 1.33 1.67 c 0 0 1.165 -0.05 1.165 -0.05 c 0 0 0.184 1.218 0.184 1.218 c 0 0 1.399 -0.516 1.399 -0.516 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"M'Sila"},"29":{"path":"M 220.012 57.4758 c 0 0 0.578 0.193 0.578 0.193 c 0 0 1.217 3.61 1.217 3.61 c 0 0 1.717 -0.492 1.717 -0.492 c 0 0 0.125 0.523 0.125 0.523 c 0 0 0.858 -0.611 0.858 -0.611 c 0 0 1.282 1.803 1.282 1.803 c 0 0 1.891 -0.041 1.891 -0.041 c 0 0 0.918 0.917 0.918 0.917 c 0 0 1.721 -0.085 1.721 -0.085 c 0 0 0.296 0.662 0.296 0.662 c 0 0 2.047 0.317 2.047 0.317 c 0 0 1.49 1.555 1.49 1.555 c 0 0 -0.688 0.28 -0.688 0.28 c 0 0 -0.874 2.105 -0.874 2.105 c 0 0 -1.111 0.353 -1.111 0.353 c 0 0 -1.521 -0.788 -1.521 -0.788 c 0 0 -1.084 0.159 -1.084 0.159 c 0 0 -1.175 1.41 -1.175 1.41 c 0 0 0.246 0.949 0.246 0.949 c 0 0 -1.553 1.1 -1.553 1.1 c 0 0 -1.071 1.771 -1.071 1.771 c 0 0 -1.54 1.518 -1.54 1.518 c 0 0 -0.999 -0.12 -0.999 -0.12 c 0 0 -0.773 -0.89 -0.773 -0.89 c 0 0 -2.493 1.648 -2.493 1.648 c 0 0 -1.011 -0.662 -1.011 -0.662 c 0 0 -0.205 -0.907 -0.205 -0.907 c 0 0 -1.081 0.098 -1.081 0.098 c 0 0 -1.301 -0.867 -1.301 -0.867 c 0 0 -2.583 0.188 -2.583 0.188 c 0 0 -0.345 -1.976 -0.345 -1.976 c 0 0 -0.665 1.238 -0.665 1.238 c 0 0 -0.982 -0.007 -0.982 -0.007 c 0 0 -0.804 -2.203 -0.804 -2.203 c 0 0 0.376 -0.965 0.376 -0.965 c 0 0 1.477 -0.712 1.477 -0.712 c 0 0 -0.955 -0.354 -0.955 -0.354 c 0 0 -1.222 1.019 -1.222 1.019 c 0 0 -0.217 -0.549 -0.217 -0.549 c 0 0 1.312 -0.856 1.312 -0.856 c 0 0 0.38 -0.987 0.38 -0.987 c 0 0 -2.728 -0.854 -2.728 -0.854 c 0 0 -0.352 -0.632 -0.352 -0.632 c 0 0 -0.753 0.882 -0.753 0.882 c 0 0 -1.563 -0.12 -1.563 -0.12 c 0 0 0.231 -2.254 0.231 -2.254 c 0 0 -1.59 0.602 -1.59 0.602 c 0 0 -0.786 -0.382 -0.786 -0.382 c 0 0 0.318 -0.749 0.318 -0.749 c 0 0 1.029 -0.085 1.029 -0.085 c 0 0 -0.37 -0.949 -0.37 -0.949 c 0 0 1.582 -0.382 1.582 -0.382 c 0 0 0.264 -1.739 0.264 -1.739 c 0 0 2.625 -2.104 2.625 -2.104 c 0 0 -0.667 -0.006 -0.667 -0.006 c 0 0 0.89 -1.532 0.89 -1.532 c 0 0 1.433 1.089 1.433 1.089 c 0 0 1.581 -2.289 1.581 -2.289 c 0 0 1.287 1.577 1.287 1.577 c 0 0 2.252 -0.6 2.252 -0.6 c 0 0 1.029 1.428 1.029 1.428 c 0 0 1.069 -0.181 1.069 -0.181 c 0 0 0.03 0.763 0.03 0.763 c 0 0 0.605 -0.963 0.605 -0.963 c 0 0 0.906 0.136 0.906 0.136 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Mascara"},"30":{"path":"M 327.951 114.981 c 0 0 -0.91 1.857 -0.91 1.857 c 0 0 -3.919 -3.5 -3.919 -3.5 c 0 0 -2.42 5.13 -2.42 5.13 c 0 0 2.209 11.443 2.209 11.443 c 0 0 -5.039 9.304 -5.039 9.304 c 0 0 -6.763 7.312 -6.763 7.312 c 0 0 -0.766 17.01 -0.766 17.01 c 0 0 -3.171 8.157 -3.171 8.157 c 0 0 -10.495 36.704 -10.495 36.704 c 0 0 -1.579 1.093 -1.579 1.093 c 0 0 -6.763 14.091 -6.763 14.091 c 0 0 -8.226 3.631 -8.226 3.631 c 0 0 17.526 14.179 17.526 14.179 c 0 0 -0.146 0.413 -0.146 0.413 c 0 0 43.124 -33.261 43.124 -33.261 c 0 0 15.876 -8.912 15.876 -8.912 c 0 0 2.795 0.889 2.795 0.889 c 0 0 63.493 -16.461 63.493 -16.461 c 0 0 -11.392 -38.443 -11.392 -38.443 c 0 0 -39.729 4.259 -39.729 4.259 c 0 0 -5.501 -6.366 -5.501 -6.366 c 0 0 -7.777 -11.58 -7.777 -11.58 c 0 0 -8.097 -22.969 -8.097 -22.969 c 0 0 -1.219 -7.663 -1.219 -7.663 c 0 0 -0.319 0.807 -0.319 0.807 c 0 0 -0.521 -1.04 -0.521 -1.04 c 0 0 -0.762 0.111 -0.762 0.111 c 0 0 -2.721 2.136 -2.721 2.136 c 0 0 -0.552 -1.05 -0.552 -1.05 c 0 0 -0.665 0.606 -0.665 0.606 c 0 0 -0.047 1.4 -0.047 1.4 c 0 0 1.138 2.602 1.138 2.602 c 0 0 0.039 2.557 0.039 2.557 c 0 0 -0.953 1.07 -0.953 1.07 c 0 0 1.171 1.467 1.171 1.467 c 0 0 0.374 2.7 0.374 2.7 c 0 0 -17.293 0.317 -17.293 0.317 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Ouargla"},"31":{"path":"M 204.15 64.0609 c 0 0 0.319 -0.749 0.319 -0.749 c 0 0 1.029 -0.085 1.029 -0.085 c 0 0 -0.37 -0.95 -0.37 -0.95 c 0 0 1.582 -0.381 1.582 -0.381 c 0 0 0.264 -1.74 0.264 -1.74 c 0 0 2.625 -2.104 2.625 -2.104 c 0 0 -0.667 -0.006 -0.667 -0.006 c 0 0 0.89 -1.532 0.89 -1.532 c 0 0 1.433 1.09 1.433 1.09 c 0 0 1.597 -2.34 1.597 -2.34 c 0 0 -3.432 -0.925 -3.432 -0.925 c 0 0 -0.636 -0.732 -0.636 -0.732 c 0 0 0.279 -0.764 0.279 -0.764 c 0 0 -0.896 -0.845 -0.896 -0.845 c 0 0 -0.981 0.025 -0.981 0.025 c 0 0 -0.675 0.67 -0.675 0.67 c 0 0 -1.5 0.109 -1.5 0.109 c 0 0 -0.331 2.201 -0.331 2.201 c 0 0 -2.492 1.917 -2.492 1.917 c 0 0 -1.325 0.012 -1.325 0.012 c 0 0 -0.406 -0.761 -0.406 -0.761 c 0 0 -2.549 -0.737 -2.549 -0.737 c 0 0 -0.751 1.339 -0.751 1.339 c 0 0 -0.854 0.255 -0.854 0.255 c 0 0 -0.794 -0.59 -0.794 -0.59 c 0 0 -2.608 2.264 -2.608 2.264 c 0 0 1.342 1.429 1.342 1.429 c 0 0 -0.223 0.719 -0.223 0.719 c 0 0 1.009 0.007 1.009 0.007 c 0 0 -0.384 1.019 -0.384 1.019 c 0 0 -0.893 0.252 -0.893 0.252 c 0 0 0.174 1.591 0.174 1.591 c 0 0 0.012 -0.62 0.012 -0.62 c 0 0 0.895 -0.047 0.895 -0.047 c 0 0 -0.201 -0.596 -0.201 -0.596 c 0 0 0.82 0.656 0.82 0.656 c 0 0 1.569 0.021 1.569 0.021 c 0 0 5.066 -1.624 5.066 -1.624 c 0 0 0.775 2.922 0.775 2.922 c 0 0 -0.772 0.564 -0.772 0.564 c 0 0 -0.026 1.101 -0.026 1.101 c 0 0 0.184 0.673 0.184 0.673 c 0 0 1.502 -0.747 1.502 -0.747 c 0 0 -0.24 -0.964 -0.24 -0.964 c 0 0 0.64 -0.997 0.64 -0.997 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Oran"},"32":{"path":"M 233.026 90.7739 c 0 0 -2.853 -0.734 -2.853 -0.734 c 0 0 -4.583 3.134 -4.583 3.134 c 0 0 -1.732 -2.296 -1.732 -2.296 c 0 0 -2.898 2.009 -2.898 2.009 c 0 0 -2.172 -0.253 -2.172 -0.253 c 0 0 -2.096 -2.128 -2.096 -2.128 c 0 0 -2.331 -0.763 -2.331 -0.763 c 0 0 1.232 5.509 1.232 5.509 c 0 0 -0.942 0.691 -0.942 0.691 c 0 0 -1.501 3.065 -1.501 3.065 c 0 0 0.176 2.472 0.176 2.472 c 0 0 1.795 -0.807 1.795 -0.807 c 0 0 1.055 0.748 1.055 0.748 c 0 0 -0.204 2.644 -0.204 2.644 c 0 0 0.751 0.279 0.751 0.279 c 0 0 0.729 1.792 0.729 1.792 c 0 0 0.76 0.113 0.76 0.113 c 0 0 -2.122 1.127 -2.122 1.127 c 0 0 0.828 2.979 0.828 2.979 c 0 0 -2.93 13.106 -2.93 13.106 c 0 0 0.842 2.448 0.842 2.448 c 0 0 -0.887 0.991 -0.887 0.991 c 0 0 0.673 0.434 0.673 0.434 c 0 0 -0.593 1.588 -0.593 1.588 c 0 0 -1.563 0.854 -1.563 0.854 c 0 0 -0.278 1.842 -0.278 1.842 c 0 0 0.827 0.472 0.827 0.472 c 0 0 -0.269 1.131 -0.269 1.131 c 0 0 0.979 1.097 0.979 1.097 c 0 0 -0.397 1.534 -0.397 1.534 c 0 0 0.431 2.391 0.431 2.391 c 0 0 -2.988 5.758 -2.988 5.758 c 0 0 -0.953 4.385 -0.953 4.385 c 0 0 -2.081 -0.471 -2.081 -0.471 c 0 0 -1.103 0.817 -1.103 0.817 c 0 0 -1.05 2.219 -1.05 2.219 c 0 0 -0.139 4.177 -0.139 4.177 c 0 0 0.68 2.281 0.68 2.281 c 0 0 -0.686 0.065 -0.686 0.065 c 0 0 0.179 0.967 0.179 0.967 c 0 0 -0.602 0.846 -0.602 0.846 c 0 0 0.955 1.181 0.955 1.181 c 0 0 -1.242 1.21 -1.242 1.21 c 0 0 1.247 2.015 1.247 2.015 c 0 0 -1.014 1.203 -1.014 1.203 c 0 0 0.036 1.864 0.036 1.864 c 0 0 0.852 1.823 0.852 1.823 c 0 0 2.918 2.352 2.918 2.352 c 0 0 -0.818 2.98 -0.818 2.98 c 0 0 14.029 11.903 14.029 11.903 c 0 0 15.816 -11.179 15.816 -11.179 c 0 0 21.085 -13.183 21.085 -13.183 c 0 0 4.648 -5.149 4.648 -5.149 c 0 0 -0.721 -8.611 -0.721 -8.611 c 0 0 2.573 -1.672 2.573 -1.672 c 0 0 -1.918 -7.688 -1.918 -7.688 c 0 0 -0.564 -6.182 -0.564 -6.182 c 0 0 -3.111 -6.564 -3.111 -6.564 c 0 0 0.146 -1.528 0.146 -1.528 c 0 0 -0.641 -0.886 -0.641 -0.886 c 0 0 3.997 -0.134 3.997 -0.134 c 0 0 0.203 -3.901 0.203 -3.901 c 0 0 -2.073 0.452 -2.073 0.452 c 0 0 -3.52 -1.138 -3.52 -1.138 c 0 0 0.205 -1.673 0.205 -1.673 c 0 0 -3.122 -0.287 -3.122 -0.287 c 0 0 0.285 -2.856 0.285 -2.856 c 0 0 0.82 -1.435 0.82 -1.435 c 0 0 -1.142 -1.009 -1.142 -1.009 c 0 0 -0.124 -0.991 -0.124 -0.991 c 0 0 -1.457 -0.411 -1.457 -0.411 c 0 0 0.247 -2.655 0.247 -2.655 c 0 0 -0.565 -1.551 -0.565 -1.551 c 0 0 -1.828 -1.584 -1.828 -1.584 c 0 0 -3.495 0.817 -3.495 0.817 c 0 0 -1.613 -1.795 -1.613 -1.795 c 0 0 -2.206 -0.969 -2.206 -0.969 c 0 0 0.165 -0.989 0.165 -0.989 c 0 0 -0.863 -1.461 -0.863 -1.461 c 0 0 -1.119 -1.576 -1.119 -1.576 c 0 0 -0.215 -1.844 -0.215 -1.844 c 0 0 -5.541 0.295 -5.541 0.295 c 0 0 0.672 -4.884 0.672 -4.884 c 0 0 -3.971 -0.823 -3.971 -0.823 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"El-Bayadh"},"33":{"path":"M 454.129 387.74 c 0 0 -0.719 -20.563 -0.719 -20.563 c 0 0 -7.48 -4.23 -7.48 -4.23 c 0 0 -2.209 0.049 -2.209 0.049 c 0 0 -1.657 -1.011 -1.657 -1.011 c 0 0 -13.903 0.818 -13.903 0.818 c 0 0 -12.891 9.613 -12.891 9.613 c 0 0 -17.177 4.161 -17.177 4.161 c 0 0 -6.243 -4.393 -6.243 -4.393 c 0 0 1.974 -2.232 1.974 -2.232 c 0 0 -5.578 -12.361 -5.578 -12.361 c 0 0 -1.04 -10.938 -1.04 -10.938 c 0 0 0.237 -3.784 0.237 -3.784 c 0 0 -5.594 -8.033 -5.594 -8.033 c 0 0 -4.477 -0.14 -4.477 -0.14 c 0 0 -2.836 -2.179 -2.836 -2.179 c 0 0 -3.687 -6.237 -3.687 -6.237 c 0 0 -1.628 -4.169 -1.628 -4.169 c 0 0 -5.061 -6.142 -5.061 -6.142 c 0 0 -5.932 -16.141 -5.932 -16.141 c 0 0 -1.532 -1.133 -1.532 -1.133 c 0 0 -0.138 -1.004 -0.138 -1.004 c 0 0 -2.248 -0.6 -2.248 -0.6 c 0 0 -1.181 -1.556 -1.181 -1.556 c 0 0 1.06 -3.063 1.06 -3.063 c 0 0 2.819 -2.35 2.819 -2.35 c 0 0 -0.418 -1.914 -0.418 -1.914 c 0 0 -12.688 -11.211 -12.688 -11.211 c 0 0 -0.038 -8.717 -0.038 -8.717 c 0 0 -3.731 -17.58 -3.731 -17.58 c 0 0 1.773 -8.354 1.773 -8.354 c 0 0 -1.295 -33.809 -1.295 -33.809 c 0 0 15.876 -8.912 15.876 -8.912 c 0 0 2.796 0.888 2.796 0.888 c 0 0 63.493 -16.461 63.493 -16.461 c 0 0 2.411 8.262 2.411 8.262 c 0 0 -3.099 1.292 -3.099 1.292 c 0 0 -0.465 1.084 -0.465 1.084 c 0 0 0.689 2.608 0.689 2.608 c 0 0 2.979 3.429 2.979 3.429 c 0 0 6.166 11.784 6.166 11.784 c 0 0 2.729 9.976 2.729 9.976 c 0 0 1.149 6.791 1.149 6.791 c 0 0 -0.747 12.151 -0.747 12.151 c 0 0 3.65 10.479 3.65 10.479 c 0 0 -0.548 4.821 -0.548 4.821 c 0 0 -1.157 2.46 -1.157 2.46 c 0 0 -1.083 0.37 -1.083 0.37 c 0 0 1.397 0.222 1.397 0.222 c 0 0 -0.245 1.499 -0.245 1.499 c 0 0 -1.049 1.133 -1.049 1.133 c 0 0 -0.483 2.826 -0.483 2.826 c 0 0 0.133 2.473 0.133 2.473 c 0 0 2.239 7.597 2.239 7.597 c 0 0 1.692 2.23 1.692 2.23 c 0 0 0.099 5.493 0.099 5.493 c 0 0 -0.928 3.311 -0.928 3.311 c 0 0 -7.815 3.964 -7.815 3.964 c 0 0 -1.079 3.438 -1.079 3.438 c 0 0 -1.214 1.554 -1.214 1.554 c 0 0 16.01 20.327 16.01 20.327 c 0 0 0.78 10.061 0.78 10.061 c 0 0 4.756 7.704 4.756 7.704 c 0 0 3.475 2.664 3.475 2.664 c 0 0 4.406 -0.238 4.406 -0.238 c 0 0 1.539 -1.13 1.539 -1.13 c 0 0 2.129 -0.146 2.129 -0.146 c 0 0 1.531 1.491 1.531 1.491 c 0 0 1.29 -1.619 1.29 -1.619 c 0 0 1.709 0.246 1.709 0.246 c 0 0 1.289 0.52 1.289 0.52 c 0 0 2.539 2.53 2.539 2.53 c 0 0 2.012 0.66 2.012 0.66 c 0 0 7.08 4.37 7.08 4.37 c 0 0 4.112 -1.98 4.112 -1.98 c 0 0 10.551 17.862 10.551 17.862 c 0 0 -39.276 29.119 -39.276 29.119 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Illizi"},"34":{"path":"M 320.989 54.6068 c 0 0 -0.019 -1.603 -0.019 -1.603 c 0 0 2.087 -0.288 2.087 -0.288 c 0 0 -0.482 -2.927 -0.482 -2.927 c 0 0 1.669 -2.858 1.669 -2.858 c 0 0 -0.971 -0.972 -0.971 -0.972 c 0 0 0.127 -2.078 0.127 -2.078 c 0 0 -0.963 -0.272 -0.963 -0.272 c 0 0 -1.479 -2.545 -1.479 -2.545 c 0 0 -1.203 -0.363 -1.203 -0.363 c 0 0 -0.962 0.653 -0.962 0.653 c 0 0 -2.853 0.298 -2.853 0.298 c 0 0 -0.779 -0.983 -0.779 -0.983 c 0 0 0.3 -1.875 0.3 -1.875 c 0 0 -1.258 -0.672 -1.258 -0.672 c 0 0 -0.336 1.124 -0.336 1.124 c 0 0 -2.018 0.919 -2.018 0.919 c 0 0 -0.034 2.49 -0.034 2.49 c 0 0 -4.18 1.099 -4.18 1.099 c 0 0 -0.774 -1.701 -0.774 -1.701 c 0 0 -0.783 0.919 -0.783 0.919 c 0 0 -1.362 -0.093 -1.362 -0.093 c 0 0 -0.794 1.241 -0.794 1.241 c 0 0 -1.708 0.861 -1.708 0.861 c 0 0 -0.186 2.385 -0.186 2.385 c 0 0 -1.469 1.134 -1.469 1.134 c 0 0 0.569 1.104 0.569 1.104 c 0 0 2.211 -0.77 2.211 -0.77 c 0 0 2.755 0.987 2.755 0.987 c 0 0 3.392 -1.461 3.392 -1.461 c 0 0 0.863 2.774 0.863 2.774 c 0 0 -1.616 0.625 -1.616 0.625 c 0 0 -0.689 2.095 -0.689 2.095 c 0 0 2.823 0.292 2.823 0.292 c 0 0 -0.36 -0.99 -0.36 -0.99 c 0 0 1.328 -0.64 1.328 -0.64 c 0 0 -0.387 1.092 -0.387 1.092 c 0 0 0.664 0.766 0.664 0.766 c 0 0 2.07 -1.562 2.07 -1.562 c 0 0 2.722 -0.532 2.722 -0.532 c 0 0 1.327 1.669 1.327 1.669 c 0 0 1.167 -0.05 1.167 -0.05 c 0 0 0.184 1.218 0.184 1.218 c 0 0 1.407 -0.51 1.407 -0.51 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Bord-Bou-Arréridj"},"35":{"path":"M 284.507 35.4899 c 0 0 2.089 0.118 2.089 0.118 c 0 0 1.365 -0.714 1.365 -0.714 c 0 0 0.479 -0.984 0.479 -0.984 c 0 0 4.716 0.709 4.716 0.709 c 0 0 -0.218 -1.694 -0.218 -1.694 c 0 0 1.416 -0.319 1.416 -0.319 c 0 0 0.847 0.593 0.847 0.593 c 0 0 -0.165 -1.289 -0.165 -1.289 c 0 0 1.354 0.313 1.354 0.313 c 0 0 -0.771 -0.862 -0.771 -0.862 c 0 0 0.386 -1.441 0.386 -1.441 c 0 0 1.042 0.231 1.042 0.231 c 0 0 0.18 -0.604 0.18 -0.604 c 0 0 0.944 -0.077 0.944 -0.077 c 0 0 0.045 -0.779 0.045 -0.779 c 0 0 1.354 -1.163 1.354 -1.163 c 0 0 -0.135 -1.239 -0.135 -1.239 c 0 0 -3.063 -0.523 -3.063 -0.523 c 0 0 -3.242 1.034 -3.242 1.034 c 0 0 -0.906 1.079 -0.906 1.079 c 0 0 -3.85 1.986 -3.85 1.986 c 0 0 -2.822 -0.274 -2.822 -0.274 c 0 0 -0.271 0.609 -0.271 0.609 c 0 0 0.658 -0.216 0.658 -0.216 c 0 0 0.03 1.021 0.03 1.021 c 0 0 -2.279 0.745 -2.279 0.745 c 0 0 -0.66 -0.482 -0.66 -0.482 c 0 0 0.392 0.701 0.392 0.701 c 0 0 -0.689 0.547 -0.689 0.547 c 0 0 0.756 1.311 0.756 1.311 c 0 0 0.888 -0.351 0.888 -0.351 c 0 0 -0.536 0.479 -0.536 0.479 c 0 0 0.471 0.856 0.471 0.856 c 0 0 -0.385 0.413 -0.385 0.413 c 0 0 0.58 0.266 0.58 0.266 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Boumerdès"},"36":{"path":"M 378.015 24.8629 c 0 0 0.366 0.686 0.366 0.686 c 0 0 -1.139 0.009 -1.139 0.009 c 0 0 -0.031 1.328 -0.031 1.328 c 0 0 -0.939 -0.144 -0.939 -0.144 c 0 0 -0.969 1.141 -0.969 1.141 c 0 0 0.427 0.747 0.427 0.747 c 0 0 -0.57 1.447 -0.57 1.447 c 0 0 0.937 -0.31 0.937 -0.31 c 0 0 0.687 0.501 0.687 0.501 c 0 0 1.188 2.609 1.188 2.609 c 0 0 1.168 -0.382 1.168 -0.382 c 0 0 0.201 0.542 0.201 0.542 c 0 0 -0.047 -0.771 -0.047 -0.771 c 0 0 1.299 0.586 1.299 0.586 c 0 0 0.92 1.85 0.92 1.85 c 0 0 1.383 -0.02 1.383 -0.02 c 0 0 0.272 1.761 0.272 1.761 c 0 0 0.823 -1.258 0.823 -1.258 c 0 0 1.821 -0.823 1.821 -0.823 c 0 0 -0.327 -0.753 -0.327 -0.753 c 0 0 0.471 -0.48 0.471 -0.48 c 0 0 2.326 -0.796 2.326 -0.796 c 0 0 2.308 -2.13 2.308 -2.13 c 0 0 0.916 -0.119 0.916 -0.119 c 0 0 0.696 -2.05 0.696 -2.05 c 0 0 -0.425 -1.147 -0.425 -1.147 c 0 0 -0.861 -0.401 -0.861 -0.401 c 0 0 2.97 -0.532 2.97 -0.532 c 0 0 1.982 -1.323 1.982 -1.323 c 0 0 0.178 -0.521 0.178 -0.521 c 0 0 -1.188 -0.337 -1.188 -0.337 c 0 0 0.199 -2.228 0.199 -2.228 c 0 0 -4.452 1.441 -4.452 1.441 c 0 0 -1.429 -0.654 -1.429 -0.654 c 0 0 -1.822 0.272 -1.822 0.272 c 0 0 -0.981 -0.861 -0.981 -0.861 c 0 0 -4.735 2.676 -4.735 2.676 c 0 0 -3.623 0.444 -3.623 0.444 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"El-Taref"},"37":{"path":"M 144.372 270.771 c 0 0 -13.244 -1.683 -13.244 -1.683 c 0 0 -3.001 -2.419 -3.001 -2.419 c 0 0 -5.835 -7.099 -5.835 -7.099 c 0 0 -0.084 -7.644 -0.084 -7.644 c 0 0 -6.775 -12.676 -6.775 -12.676 c 0 0 -5.777 -21.184 -5.777 -21.184 c 0 0 -5.817 -3.172 -5.817 -3.172 c 0 0 -8.409 -0.353 -8.409 -0.353 c 0 0 -4.977 -4.181 -4.977 -4.181 c 0 0 -1.59 2.116 -1.59 2.116 c 0 0 -2.652 -1.77 -2.652 -1.77 c 0 0 -1.38 0.46 -1.38 0.46 c 0 0 0.685 -1.695 0.685 -1.695 c 0 0 -1.662 -0.829 -1.662 -0.829 c 0 0 -5.937 0.964 -5.937 0.964 c 0 0 -2.253 -0.648 -2.253 -0.648 c 0 0 -5.062 0.498 -5.062 0.498 c 0 0 -1.257 -0.472 -1.257 -0.472 c 0 0 -1.854 1.008 -1.854 1.008 c 0 0 -3.731 -0.108 -3.731 -0.108 c 0 0 -1.934 1.228 -1.934 1.228 c 0 0 -8.19 -2.131 -8.19 -2.131 c 0 0 -5.64 3.248 -5.64 3.248 c 0 0 -4.957 -0.147 -4.957 -0.147 c 0 0 -1.001 1.766 -1.001 1.766 c 0 0 -3.104 0.861 -3.104 0.861 c 0 0 -4.236 3.001 -4.236 3.001 c 0 0 -5.013 2.403 -5.013 2.403 c 0 0 -6.767 5.049 -6.767 5.049 c 0 0 -4.839 1.729 -4.839 1.729 c 0 0 -3.193 35.971 -3.193 35.971 c 0 0 65.958 50.321 65.958 50.321 c 0 0 12.962 -4.238 12.962 -4.238 c -0.001 0 7.204 -6.951 7.204 -6.951 c 0 0 14.179 0.237 14.179 0.237 c 0 0 3.038 -6.721 3.038 -6.721 c 0 0 7.18 -9.721 7.18 -9.721 c 0 0 2.317 -1.98 2.317 -1.98 c 0 0 3.858 -1.585 3.858 -1.585 c 0 0 7.686 0.562 7.686 0.562 c 0 0 1.78 -1.06 1.78 -1.06 c 0 0 3.324 -10.955 3.324 -10.955 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tindouf"},"38":{"path":"M 244.49 53.8549 c 0 0 0.771 0.672 0.771 0.672 c 0 0 -1.122 1.335 -1.122 1.335 c 0 0 -0.706 -0.143 -0.706 -0.143 c 0 0 -0.332 -0.894 -0.332 -0.894 c 0 0 -0.993 0.542 -0.993 0.542 c 0 0 0.206 1.651 0.206 1.651 c 0 0 -0.649 1.073 -0.649 1.073 c 0 0 1.344 1.67 1.344 1.67 c 0 0 0.59 -2.298 0.59 -2.298 c 0 0 1.271 0.932 1.271 0.932 c 0 0 0.538 -0.305 0.538 -0.305 c 0 0 1.353 0.765 1.353 0.765 c 0 0 0.062 1.415 0.062 1.415 c 0 0 1.953 -0.175 1.953 -0.175 c 0 0 1.045 1.72 1.045 1.72 c 0 0 0.813 0.154 0.813 0.154 c 0 0 0.172 -1.047 0.172 -1.047 c 0 0 0.958 0.974 0.958 0.974 c 0 0 3.797 -0.434 3.797 -0.434 c 0 0 2.436 -1.337 2.436 -1.337 c 0 0 -0.56 0.671 -0.56 0.671 c 0 0 1.55 0.067 1.55 0.067 c 0 0 -0.029 0.951 -0.029 0.951 c 0 0 3.701 -0.316 3.701 -0.316 c 0 0 0.708 -1.967 0.708 -1.967 c 0 0 -2.81 -0.739 -2.81 -0.739 c 0 0 -0.347 -1.359 -0.347 -1.359 c 0 0 0.504 -0.619 0.504 -0.619 c 0 0 2.226 0.229 2.226 0.229 c 0 0 0.901 -3.905 0.901 -3.905 c 0 0 -1.561 -0.133 -1.561 -0.133 c 0 0 -0.842 -1.107 -0.842 -1.107 c 0 0 -1.228 -0.057 -1.228 -0.057 c 0 0 -0.44 -0.937 -0.44 -0.937 c 0 0 -2.687 0.709 -2.687 0.709 c 0 0 0.006 -1.004 0.006 -1.004 c 0 0 -2.634 2.928 -2.634 2.928 c 0 0 -0.774 0.021 -0.774 0.021 c 0 0 -0.399 -1.149 -0.399 -1.149 c 0 0 -2.134 -0.251 -2.134 -0.251 c 0 0 -1.909 -1.17 -1.909 -1.17 c 0 0 -1.035 -1.876 -1.035 -1.876 c 0 0 -1.22 1.163 -1.22 1.163 c 0 0 -0.035 0.865 -0.035 0.865 c 0 0 -2.264 0.618 -2.264 0.618 c 0 0 0.384 0.35 0.384 0.35 c 0 0 -0.518 0.333 -0.518 0.333 c 0 0 -0.061 1.414 -0.061 1.414 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tissemsilt"},"39":{"path":"M 381.341 91.9338 c 0 0 -8.26 -0.416 -8.26 -0.416 c 0 0 -4.264 -1.485 -4.264 -1.485 c 0 0 -4.422 0.397 -4.422 0.397 c 0 0 -0.09 4.578 -0.09 4.578 c 0 0 -1.543 -0.353 -1.543 -0.353 c 0 0 -5.193 -3.142 -5.193 -3.142 c 0 0 -0.05 -2.156 -0.05 -2.156 c 0 0 -1.726 2.196 -1.726 2.196 c 0 0 -1.654 0.581 -1.654 0.581 c 0 0 -1.451 -1.393 -1.451 -1.393 c 0 0 -5.732 -2.047 -5.732 -2.047 c 0 0 -5.311 1.305 -5.311 1.305 c 0 0 -11.927 -1.27 -11.927 -1.27 c 0 0 -2.287 -1.521 -2.287 -1.521 c 0 0 -1.104 0.629 -1.104 0.629 c 0 0 0.72 0.627 0.72 0.627 c 0 0 -1.889 1.328 -1.889 1.328 c 0 0 1.198 1.354 1.198 1.354 c 0 0 -0.702 1.853 -0.702 1.853 c 0 0 3.667 3.255 3.667 3.255 c 0 0 -1.968 4.695 -1.968 4.695 c 0 0 -0.858 4.001 -0.858 4.001 c 0 0 1.083 2.091 1.083 2.091 c 0 0 0.35 4.628 0.35 4.628 c 0 0 0.688 1.585 0.688 1.585 c 0 0 -0.662 1.726 -0.662 1.726 c 0 0 17.299 -0.319 17.299 -0.319 c 0 0 -0.374 -2.7 -0.374 -2.7 c 0 0 -1.172 -1.467 -1.172 -1.467 c 0 0 0.955 -1.07 0.955 -1.07 c 0 0 -0.04 -2.557 -0.04 -2.557 c 0 0 -1.138 -2.602 -1.138 -2.602 c 0 0 0.047 -1.4 0.047 -1.4 c 0 0 0.665 -0.606 0.665 -0.606 c 0 0 0.552 1.049 0.552 1.049 c 0 0 2.721 -2.135 2.721 -2.135 c 0 0 0.762 -0.112 0.762 -0.112 c 0 0 0.521 1.041 0.521 1.041 c 0 0 0.319 -0.807 0.319 -0.807 c 0 0 1.219 7.663 1.219 7.663 c 0 0 8.097 22.969 8.097 22.969 c 0 0 7.777 11.58 7.777 11.58 c 0 0 5.501 6.366 5.501 6.366 c 0 0 39.729 -4.259 39.729 -4.259 c 0 0 -15.994 -9.721 -15.994 -9.721 c 0 0 -1.19 -8.167 -1.19 -8.167 c 0 0 -4.769 -5.554 -4.769 -5.554 c 0 0 -0.044 -1.279 -0.044 -1.279 c 0 0 -4.671 -1.931 -4.671 -1.931 c 0 0 -1.588 -0.012 -1.588 -0.012 c 0 0 -1.992 -6.096 -1.992 -6.096 c 0 0 -3.565 -5.578 -3.565 -5.578 c 0 0 -0.276 -2.739 -0.276 -2.739 c 0 0 -1.411 -1.059 -1.411 -1.059 c 0 0 0.465 -1.005 0.465 -1.005 c 0 0 -0.633 -1.784 -0.633 -1.784 c 0 0 0.574 -2.841 0.574 -2.841 c 0 0 -0.731 -1.183 -0.731 -1.183 c 0 0 1.695 -1.198 1.695 -1.198 c 0 0 0.905 -2.192 0.905 -2.192 c 0 0 1.676 0.677 1.676 0.677 c 0 0 1.6 -1.261 1.6 -1.261 c 0 0 -0.104 -0.757 -0.104 -0.757 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"El Oued"},"40":{"path":"M 368.82 90.0319 c 0 0 0.773 -5.083 0.773 -5.083 c 0 0 2.108 -3.938 2.108 -3.938 c 0 0 0.024 -1.697 0.024 -1.697 c 0 0 -0.637 -0.956 -0.637 -0.956 c 0 0 0.749 -2.004 0.749 -2.004 c 0 0 -0.868 -2.387 -0.868 -2.387 c 0 0 -1.271 -0.098 -1.271 -0.098 c 0 0 -0.661 0.97 -0.661 0.97 c 0 0 -0.441 1.352 -0.441 1.352 c 0 0 0.5 -0.146 0.5 -0.146 c 0 0 -0.088 1.582 -0.088 1.582 c 0 0 -0.908 -2.111 -0.908 -2.111 c 0 0 1.39 -3.602 1.39 -3.602 c 0 0 1.306 -0.817 1.306 -0.817 c 0 0 1.429 -2.436 1.429 -2.436 c 0 0 -1.051 -1.557 -1.051 -1.557 c 0 0 0.787 -1.188 0.787 -1.188 c 0 0 -0.763 -0.573 -0.763 -0.573 c 0 0 -0.117 -2.443 -0.117 -2.443 c 0 0 3.133 -1.131 3.133 -1.131 c 0 0 -0.659 -1.052 -0.659 -1.052 c 0 0 -0.692 -0.061 -0.692 -0.061 c 0 0 -0.333 -1.191 -0.333 -1.191 c 0 0 -0.393 -0.313 -0.393 -0.313 c 0 0 -0.6 0.601 -0.6 0.601 c 0 0 0.179 -0.579 0.179 -0.579 c 0 0 -1.313 -0.926 -1.313 -0.926 c 0 0 -0.409 1.4 -0.409 1.4 c 0 0 -1.048 0.308 -1.048 0.308 c 0 0 0.063 -2.164 0.063 -2.164 c 0 0 -1.77 -0.877 -1.77 -0.877 c 0 0 -0.119 0.549 -0.119 0.549 c 0 0 -1.815 -0.27 -1.815 -0.27 c 0 0 -0.957 2.009 -0.957 2.009 c 0 0 -1.648 -0.483 -1.648 -0.483 c 0 0 0.408 -1.016 0.408 -1.016 c 0 0 -0.614 -0.53 -0.614 -0.53 c 0 0 -4.031 0.609 -4.031 0.609 c 0 0 -0.774 -1.595 -0.774 -1.595 c 0 0 -0.214 1.337 -0.214 1.337 c 0 0 0.74 1.491 0.74 1.491 c 0 0 -0.612 1.515 -0.612 1.515 c 0 0 -2.418 0.598 -2.418 0.598 c 0 0 -1.491 1.387 -1.491 1.387 c 0 0 0.634 1.334 0.634 1.334 c 0 0 -0.178 1.438 -0.178 1.438 c 0 0 1.052 0.219 1.052 0.219 c 0 0 -1.644 1.396 -1.644 1.396 c 0 0 0.23 2.636 0.23 2.636 c 0 0 -1.308 1.429 -1.308 1.429 c 0 0 0.438 1.353 0.438 1.353 c 0 0 -0.401 0.844 -0.401 0.844 c 0 0 0.802 0.146 0.802 0.146 c 0 0 1.347 2.256 1.347 2.256 c 0 0 -0.499 0.58 -0.499 0.58 c 0 0 0.611 0.482 0.611 0.482 c 0 0 -0.812 0.796 -0.812 0.796 c 0 0 0.634 2.146 0.634 2.146 c 0 0 1.087 -0.603 1.087 -0.603 c 0 0 0.737 -1.717 0.737 -1.717 c 0 0 1.138 -0.063 1.138 -0.063 c 0 0 -0.399 0.473 -0.399 0.473 c 0 0 1.047 1.056 1.047 1.056 c 0 0 -0.415 0.997 -0.415 0.997 c 0 0 0.821 -0.196 0.821 -0.196 c 0 0 -0.726 2.389 -0.726 2.389 c 0 0 0.163 3.493 0.163 3.493 c 0 0 -1.047 2.038 -1.047 2.038 c 0 0 0.517 1.927 0.517 1.927 c 0 0 0.05 2.157 0.05 2.157 c 0 0 5.193 3.14 5.193 3.14 c 0 0 1.543 0.354 1.543 0.354 c 0 0 0.09 -4.578 0.09 -4.578 c 0 0 4.421 -0.406 4.421 -0.406 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Khenchela"},"41":{"path":"M 389.163 47.3318 c 0 0 -2.177 -1.081 -2.177 -1.081 c 0 0 -2.499 1.112 -2.499 1.112 c 0 0 -1.255 -0.156 -1.255 -0.156 c 0 0 -2.103 2.353 -2.103 2.353 c 0 0 -1.622 0.03 -1.622 0.03 c 0 0 -1.877 -1.4 -1.877 -1.4 c 0 0 -0.397 1.363 -0.397 1.363 c 0 0 -0.817 0.485 -0.817 0.485 c 0 0 0.354 1.537 0.354 1.537 c 0 0 -2.814 0.214 -2.814 0.214 c 0 0 0.03 -1.478 0.03 -1.478 c 0 0 -2.674 -0.94 -2.674 -0.94 c 0 0 -1.024 -1.331 -1.024 -1.331 c 0 0 -0.649 -2.12 -0.649 -2.12 c 0 0 -0.736 -0.046 -0.736 -0.046 c 0 0 -0.424 -2.263 -0.424 -2.263 c 0 0 -0.75 -0.918 -0.75 -0.918 c 0 0 0.494 -1.348 0.494 -1.348 c 0 0 2.854 0.539 2.854 0.539 c 0 0 2.52 -0.934 2.52 -0.934 c 0 0 1.194 0.271 1.194 0.271 c 0 0 2.159 -2.081 2.159 -2.081 c 0 0 2.218 -0.172 2.218 -0.172 c 0 0 0.375 -0.438 0.375 -0.438 c 0 0 -1.08 -1.382 -1.08 -1.382 c 0 0 0.194 -1.316 0.194 -1.316 c 0 0 1.022 0.411 1.022 0.411 c 0 0 1.832 -1.544 1.832 -1.544 c 0 0 1.383 -0.021 1.383 -0.021 c 0 0 0.272 1.761 0.272 1.761 c 0 0 0.821 -1.258 0.821 -1.258 c 0 0 1.822 -0.823 1.822 -0.823 c 0 0 3.195 0.846 3.195 0.846 c 0 0 0.745 -0.53 0.745 -0.53 c 0 0 1.177 0.636 1.177 0.636 c 0 0 -0.594 1.719 -0.594 1.719 c 0 0 0.381 1.252 0.381 1.252 c 0 0 -1.052 1.066 -1.052 1.066 c 0 0 0.396 0.812 0.396 0.812 c 0 0 -0.868 1.572 -0.868 1.572 c 0 0 0.833 1.825 0.833 1.825 c 0 0 -0.868 1.552 -0.868 1.552 c 0 0 0.009 2.224 0.009 2.224 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Souk Ahras"},"42":{"path":"M 250.882 35.7498 c 0 0 -1.098 2.467 -1.098 2.467 c 0 0 1.42 2.608 1.42 2.608 c 0 0 1.47 -1.099 1.47 -1.099 c 0 0 0.288 -1.11 0.288 -1.11 c 0 0 3.892 0.806 3.892 0.806 c 0 0 2.96 -0.969 2.96 -0.969 c 0 0 2.729 0.814 2.729 0.814 c 0 0 4.677 0.011 4.677 0.011 c 0 0 1.037 -1.463 1.037 -1.463 c 0 0 1.568 0.302 1.568 0.302 c 0 0 0.447 -0.642 0.447 -0.642 c 0 0 -0.442 -0.802 -0.442 -0.802 c 0 0 1.06 -0.14 1.06 -0.14 c 0 0 1.479 -1.647 1.479 -1.647 c 0 0 2.109 -0.599 2.109 -0.599 c 0 0 -0.34 -1.022 -0.34 -1.022 c 0 0 -0.134 -1.446 -0.134 -1.446 c 0 0 -5.189 2.836 -5.189 2.836 c 0 0 -2.726 -0.038 -2.726 -0.038 c 0 0 -0.48 -1.023 -0.48 -1.023 c 0 0 -1.177 -0.279 -1.177 -0.279 c 0 0 -6.739 2.031 -6.739 2.031 c 0 0 -2.311 -0.272 -2.311 -0.272 c 0 0 -4.5 0.676 -4.5 0.676 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Tipaza"},"43":{"path":"M 344.575 51.2509 c 0 0 -3.583 -0.418 -3.583 -0.418 c 0 0 -0.49 0.384 -0.49 0.384 c 0 0 1.2 -1.293 1.2 -1.293 c 0 0 -1.162 -1.213 -1.162 -1.213 c 0 0 0.688 -0.604 0.688 -0.604 c 0 0 -0.284 -2.085 -0.284 -2.085 c 0 0 -1.715 -0.398 -1.715 -0.398 c 0 0 -0.049 -1.869 -0.049 -1.869 c 0 0 0.978 -0.521 0.978 -0.521 c 0 0 -2.188 -2.367 -2.188 -2.367 c 0 0 0.097 -1.172 0.097 -1.172 c 0 0 -1.395 -0.427 -1.395 -0.427 c 0 0 0.114 -1.347 0.114 -1.347 c 0 0 -1.244 -0.953 -1.244 -0.953 c 0 0 0.125 -2.048 0.125 -2.048 c 0 0 -0.558 -0.717 -0.558 -0.717 c 0 0 1.112 -0.339 1.112 -0.339 c 0 0 1.367 0.723 1.367 0.723 c 0 0 1.504 -0.447 1.504 -0.447 c 0 0 1.242 -1.67 1.242 -1.67 c 0 0 4.855 0.813 4.855 0.813 c 0 0 1.86 -1.232 1.86 -1.232 c 0 0 0.435 0.64 0.435 0.64 c 0 0 2.741 0.48 2.741 0.48 c 0 0 0.968 -0.175 0.968 -0.175 c 0 0 -0.021 1.6 -0.021 1.6 c 0 0 -3.296 0.765 -3.296 0.765 c 0 0 0.284 2.021 0.284 2.021 c 0 0 -0.921 1.877 -0.921 1.877 c 0 0 1.318 -0.403 1.318 -0.403 c 0 0 1.126 0.879 1.126 0.879 c 0 0 -0.265 1.486 -0.265 1.486 c 0 0 0.788 0.496 0.788 0.496 c 0 0 1.019 -0.295 1.019 -0.295 c 0 0 0.938 0.805 0.938 0.805 c 0 0 -0.108 1.354 -0.108 1.354 c 0 0 -2.365 0.863 -2.365 0.863 c 0 0 -0.161 2.791 -0.161 2.791 c 0 0 -1.221 1.531 -1.221 1.531 c 0 0 -0.78 -0.115 -0.78 -0.115 c 0 0 0.213 0.771 0.213 0.771 c 0 0 -0.716 -0.51 -0.716 -0.51 c 0 0 -1.649 0.227 -1.649 0.227 c 0 0 -0.801 2.112 -0.801 2.112 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Mila"},"44":{"path":"M 270.211 41.3839 c 0 0 -2.993 -2.104 -2.993 -2.104 c 0 0 -4.677 -0.01 -4.677 -0.01 c 0 0 -2.729 -0.815 -2.729 -0.815 c 0 0 -2.959 0.969 -2.959 0.969 c 0 0 -3.893 -0.807 -3.893 -0.807 c 0 0 -0.288 1.111 -0.288 1.111 c 0 0 -1.47 1.098 -1.47 1.098 c 0 0 -1.42 -2.607 -1.42 -2.607 c 0 0 -2.229 1.641 -2.229 1.641 c 0 0 -0.129 1.172 -0.129 1.172 c 0 0 1.495 1.622 1.495 1.622 c 0 0 -1.196 1.17 -1.196 1.17 c 0 0 1.829 0.536 1.829 0.536 c 0 0 -1.33 0.886 -1.33 0.886 c 0 0 0.004 1.019 0.004 1.019 c 0 0 0.681 0.703 0.681 0.703 c 0 0 0.8 -0.179 0.8 -0.179 c 0 0 -0.257 1.099 -0.257 1.099 c 0 0 0.683 1.606 0.683 1.606 c 0 0 1.268 0.909 1.268 0.909 c 0 0 -0.254 1.759 -0.254 1.759 c 0 0 2.133 0.25 2.133 0.25 c 0 0 0.4 1.149 0.4 1.149 c 0 0 0.774 -0.02 0.774 -0.02 c 0 0 2.635 -2.928 2.635 -2.928 c 0 0 -0.007 1.003 -0.007 1.003 c 0 0 2.686 -0.708 2.686 -0.708 c 0 0 0.44 0.937 0.44 0.937 c 0 0 1.229 0.056 1.229 0.056 c 0 0 0.841 1.108 0.841 1.108 c 0 0 1.563 0.131 1.563 0.131 c 0 0 1.051 -1.104 1.051 -1.104 c 0 0 -0.338 -0.876 -0.338 -0.876 c 0 0 1.985 0.074 1.985 0.074 c 0 0 0.315 -2.776 0.315 -2.776 c 0 0 0.861 0.234 0.861 0.234 c 0 0 1.841 -1.11 1.841 -1.11 c 0 0 0.063 -1.843 0.063 -1.843 c 0 0 -1.346 -0.305 -1.346 -0.305 c 0 0 -0.084 -1.369 -0.084 -1.369 c 0 0 -0.708 -0.199 -0.708 -0.199 c 0 0 0.625 -1.91 0.625 -1.91 c 0 0 1.347 0.043 1.347 0.043 c 0 0 0.758 -0.615 0.758 -0.615 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Aïn Defla"},"45":{"path":"M 190.745 93.6368 c 0 0 1.08 1.632 1.08 1.632 c 0 0 2.133 -1.567 2.133 -1.567 c 0 0 0.589 1.018 0.589 1.018 c 0 0 0.342 -0.416 0.342 -0.416 c 0 0 2.966 0.896 2.966 0.896 c 0 0 4.055 -2.511 4.055 -2.511 c 0 0 1.843 1.041 1.843 1.041 c 0 0 3.133 9.769 3.133 9.769 c 0 0 0.314 -1.128 0.314 -1.128 c 0 0 0.854 0.04 0.854 0.04 c 0 0 2.091 -2.885 2.091 -2.885 c 0 0 1.632 -0.712 1.632 -0.712 c 0 0 1.374 0.198 1.374 0.198 c 0 0 0.176 2.472 0.176 2.472 c 0 0 1.795 -0.807 1.795 -0.807 c 0 0 1.055 0.748 1.055 0.748 c 0 0 -0.204 2.644 -0.204 2.644 c 0 0 0.751 0.279 0.751 0.279 c 0 0 0.729 1.792 0.729 1.792 c 0 0 0.76 0.113 0.76 0.113 c 0 0 -2.123 1.127 -2.123 1.127 c 0 0 0.829 2.979 0.829 2.979 c 0 0 -2.931 13.106 -2.931 13.106 c 0 0 0.843 2.448 0.843 2.448 c 0 0 -0.887 0.991 -0.887 0.991 c 0 0 0.673 0.434 0.673 0.434 c 0 0 -0.593 1.588 -0.593 1.588 c 0 0 -1.563 0.854 -1.563 0.854 c 0 0 -0.278 1.842 -0.278 1.842 c 0 0 0.827 0.472 0.827 0.472 c 0 0 -0.27 1.131 -0.27 1.131 c 0 0 0.979 1.097 0.979 1.097 c 0 0 -0.398 1.535 -0.398 1.535 c 0 0 0.432 2.39 0.432 2.39 c 0 0 -2.988 5.758 -2.988 5.758 c 0 0 -1.629 2.4 -1.629 2.4 c 0 0 -2.417 -0.518 -2.417 -0.518 c 0 0 -1.803 1.33 -1.803 1.33 c 0 0 -6.79 -1.902 -6.79 -1.902 c 0 0 -5.834 3.103 -5.834 3.103 c 0 0 -0.298 -1.563 -0.298 -1.563 c 0 0 -1.384 -0.042 -1.384 -0.042 c 0 0 0.542 -2.863 0.542 -2.863 c 0 0 -1.428 -0.123 -1.428 -0.123 c 0 0 -0.163 -2.392 -0.163 -2.392 c 0 0 2.868 -2.595 2.868 -2.595 c 0 0 -5.768 -4.648 -5.768 -4.648 c 0 0 -2.38 -1.182 -2.38 -1.182 c 0 0 -3.35 -5.675 -3.35 -5.675 c 0 0 1.262 -0.418 1.262 -0.418 c 0 0 0.377 -2.404 0.377 -2.404 c 0 0 -2.205 -2.094 -2.205 -2.094 c 0 0 -1.938 -3.413 -1.938 -3.413 c 0 0 0.196 -2.568 0.196 -2.568 c 0 0 1.717 -3.813 1.717 -3.813 c 0 0 -0.095 -1.926 -0.095 -1.926 c 0 0 -1.187 -2.013 -1.187 -2.013 c 0 0 -1.795 -0.51 -1.795 -0.51 c 0 0 0.209 -0.893 0.209 -0.893 c 0 0 1.274 -0.928 1.274 -0.928 c 0 0 -0.546 -2.521 -0.546 -2.521 c 0 0 1.185 -5.71 1.185 -5.71 c 0 0 3.61 -2.62 3.61 -2.62 c 0 0 4.992 0.022 4.992 0.022 c 0 0 1.227 -1.408 1.227 -1.408 c 0 0 1.531 -0.481 1.531 -0.481 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Naâma"},"46":{"path":"M 193.764 72.7758 c 0 0 -0.686 0.069 -0.686 0.069 c 0 0 -0.264 -0.909 -0.264 -0.909 c 0 0 -3.488 -1.748 -3.488 -1.748 c 0 0 -0.331 0.33 -0.331 0.33 c 0 0 -0.372 -0.771 -0.372 -0.771 c 0 0 -1.081 0.455 -1.081 0.455 c 0 0 -2.338 -0.793 -2.338 -0.793 c 0 0 -0.918 1.336 -0.918 1.336 c 0 0 -1.082 0.265 -1.082 0.265 c 0 0 -1.053 -0.668 -1.053 -0.668 c 0 0 0.202 -0.954 0.202 -0.954 c 0 0 -0.848 -0.622 -0.848 -0.622 c 0 0 2.669 -1.768 2.669 -1.768 c 0 0 1.627 0.143 1.627 0.143 c 0 0 2.119 -1.243 2.119 -1.243 c 0 0 2.023 -5.607 2.023 -5.607 c 0 0 0.896 0.035 0.896 0.035 c 0 0 2.06 -1.622 2.06 -1.622 c 0 0 1.342 1.43 1.342 1.43 c 0 0 -0.223 0.718 -0.223 0.718 c 0 0 1.008 0.007 1.008 0.007 c 0 0 -0.383 1.02 -0.383 1.02 c 0 0 -0.893 0.251 -0.893 0.251 c 0 0 0.174 1.591 0.174 1.591 c 0 0 0.012 -0.62 0.012 -0.62 c 0 0 0.895 -0.046 0.895 -0.046 c 0 0 -0.201 -0.597 -0.201 -0.597 c 0 0 0.82 0.657 0.82 0.657 c 0 0 1.569 0.021 1.569 0.021 c 0 0 5.065 -1.624 5.065 -1.624 c 0 0 0.775 2.923 0.775 2.923 c 0 0 -0.771 0.563 -0.771 0.563 c 0 0 -0.027 1.102 -0.027 1.102 c 0 0 -2.838 0.497 -2.838 0.497 c 0 0 -0.066 0.729 -0.066 0.729 c 0 0 -0.97 0.456 -0.97 0.456 c 0 0 -0.813 -0.548 -0.813 -0.548 c 0 0 -0.781 1.395 -0.781 1.395 c 0 0 -0.672 -0.18 -0.672 -0.18 c 0 0 0.286 1.946 0.286 1.946 c 0 0 -1.38 0.461 -1.38 0.461 c 0 0 -0.248 1.451 -0.248 1.451 c 0 0 -0.815 0.469 -0.815 0.469 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Aïn Témouchent"},"47":{"path":"M 280.112 227.213 c 0 0 8.227 -3.631 8.227 -3.631 c 0 0 6.762 -14.091 6.762 -14.091 c 0 0 1.58 -1.093 1.58 -1.093 c 0 0 10.495 -36.704 10.495 -36.704 c 0 0 3.17 -8.157 3.17 -8.157 c 0 0 0.768 -17.01 0.768 -17.01 c 0 0 6.761 -7.312 6.761 -7.312 c 0 0 5.039 -9.304 5.039 -9.304 c 0 0 -11.871 -3.224 -11.871 -3.224 c 0 0 -13.08 -0.901 -13.08 -0.901 c 0 0 -0.77 0.422 -0.77 0.422 c 0 0 -2.684 -1.107 -2.684 -1.107 c 0 0 -0.903 0.387 -0.903 0.387 c 0 0 -0.305 -0.512 -0.305 -0.512 c 0 0 -0.417 0.754 -0.417 0.754 c 0 0 -0.439 -0.318 -0.439 -0.318 c 0 0 -0.945 0.734 -0.945 0.734 c 0 0 -7.853 0.362 -7.853 0.362 c 0 0 3.66 2.229 3.66 2.229 c 0 0 0.331 2.904 0.331 2.904 c 0 0 -8.55 -2.039 -8.55 -2.039 c 0 0 -5.37 1.604 -5.37 1.604 c 0 0 -10.825 0.946 -10.825 0.946 c 0 0 0.565 6.182 0.565 6.182 c 0 0 1.917 7.688 1.917 7.688 c 0 0 -2.573 1.672 -2.573 1.672 c 0 0 0.721 8.612 0.721 8.612 c 0 0 -4.648 5.148 -4.648 5.148 c 0 0 -0.682 28.618 -0.682 28.618 c 0 0 -2.644 13.284 -2.644 13.284 c 0 0 4.271 23.744 4.271 23.744 c 0 0 -1.117 4.883 -1.117 4.883 c 0 0 10.266 -3.805 10.266 -3.805 c 0 0 11.143 -0.965 11.143 -0.965 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Ghardaïa"},"48":{"path":"M 232.66 64.2719 c 0 0 -2.048 -0.317 -2.048 -0.317 c 0 0 -0.295 -0.662 -0.295 -0.662 c 0 0 -1.721 0.085 -1.721 0.085 c 0 0 -0.918 -0.917 -0.918 -0.917 c 0 0 -1.891 0.041 -1.891 0.041 c 0 0 -1.282 -1.803 -1.282 -1.803 c 0 0 -0.858 0.611 -0.858 0.611 c 0 0 -0.125 -0.523 -0.125 -0.523 c 0 0 -1.717 0.492 -1.717 0.492 c 0 0 -1.217 -3.61 -1.217 -3.61 c 0 0 -0.578 -0.193 -0.578 -0.193 c 0 0 1.744 -2.074 1.744 -2.074 c 0 0 0.867 -0.538 0.867 -0.538 c 0 0 0.877 0.373 0.877 0.373 c 0 0 1.332 -1.438 1.332 -1.438 c 0 0 -0.229 -0.909 -0.229 -0.909 c 0 0 0.59 -0.991 0.59 -0.991 c 0 0 -0.674 0.036 -0.674 0.036 c 0 0 -0.313 -0.769 -0.313 -0.769 c 0 0 0.846 -1.018 0.846 -1.018 c 0 0 1.226 0.572 1.226 0.572 c 0 0 0.555 -0.605 0.555 -0.605 c 0 0 2.126 -0.093 2.126 -0.093 c 0 0 -0.359 -0.87 -0.359 -0.87 c 0 0 0.634 -0.699 0.634 -0.699 c 0 0 -1.289 -1.35 -1.289 -1.35 c 0 0 1.979 -2.472 1.979 -2.472 c 0 0 2.056 0.32 2.056 0.32 c 0 0 2.173 -0.8 2.173 -0.8 c 0 0 0.468 1.894 0.468 1.894 c 0 0 0.536 0.021 0.536 0.021 c 0 0 -0.826 1.687 -0.826 1.687 c 0 0 0.509 -0.155 0.509 -0.155 c 0 0 0.519 1.997 0.519 1.997 c 0 0 1.775 -0.663 1.775 -0.663 c 0 0 -0.347 0.244 -0.347 0.244 c 0 0 0.593 0.041 0.593 0.041 c 0 0 0.541 1.179 0.541 1.179 c 0 0 1.563 0.984 1.563 0.984 c 0 0 2.838 -0.813 2.838 -0.813 c 0 0 2.173 3.286 2.173 3.286 c 0 0 0.771 0.672 0.771 0.672 c 0 0 -1.122 1.335 -1.122 1.335 c 0 0 -0.706 -0.142 -0.706 -0.142 c 0 0 -0.332 -0.895 -0.332 -0.895 c 0 0 -0.993 0.542 -0.993 0.542 c 0 0 0.206 1.651 0.206 1.651 c 0 0 -0.649 1.074 -0.649 1.074 c 0 0 -1.449 0.571 -1.449 0.571 c 0 0 -0.567 0.986 -0.567 0.986 c 0 0 -2.058 -0.207 -2.058 -0.207 c 0 0 -0.165 0.913 -0.165 0.913 c 0 0 -0.811 -0.11 -0.811 -0.11 c 0 0 -0.112 0.868 -0.112 0.868 c 0 0 -1.215 0.097 -1.215 0.097 c 0 0 -1.728 2.879 -1.728 2.879 c 0 0 -0.903 0.185 -0.903 0.185 c 0 0 0 0 0 0 c 0 0 0 0 0 0","name":"Relizane"}}, "height": 500, "width": 508});

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