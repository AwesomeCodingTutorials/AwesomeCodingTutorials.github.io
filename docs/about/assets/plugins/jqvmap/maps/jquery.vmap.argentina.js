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
            jQuery.fn.vectorMap('addMap', 'argentina_en', {"width": 900.0, "height": 1770.5044059903964, "paths":{"sc":{"path": "M26.21,1405.14l2.02,-1.84l8.5,-1.79l7.49,-6.75l1.82,-3.81l-0.1,-8.52l-1.36,-5.95l1.56,-3.04l6.37,-2.92l2.75,-3.07l2.97,0.11l0.73,-1.18l-1.33,-3.1l0.72,-4.2l-1.58,-8.36l-2.19,-0.94l-1.42,-2.77l-4.01,-2.05l-1.36,-2.85l1.89,-3.41l1.92,-5.9l5.13,-8.5l1.1,-6.19l-2.15,-1.51l0.27,-0.87l2.87,-1.74l3.48,0.31l2.11,-0.88l6.11,-7.06l0.46,-1.26l-0.47,-3.5l5.17,2.1l1.83,-0.89l0.94,-1.7l0.03,-1.96l-1.48,-2.86l-4.88,-3.2l4.02,-3.32l-2.49,-3.12l1.53,-5.15l-0.64,-2.1l4.94,-1.15l2.68,-2.89l4.13,-2.84l0.46,-2.12l-0.69,-4.13l0.67,-2.8l-3.25,-8.35l-0.56,-8.49l-6.72,-5.18l6.21,-1.47l5.36,-6.27l182.64,0.03l-1.52,4.87l-0.07,3.84l2.19,9.04l2.61,6.69l7.49,9.84l3.15,1.59l4.03,3.51l3.12,1.31l3.28,4.82l2.42,1.02l9.68,10.33l4.59,2.35l2.58,0.47l2.17,-0.69l3.69,-0.04l2.86,1.15l3.13,-0.03l1.63,1.08l11.47,0.18l4.48,-0.96l4.54,2.73l3.53,3.26l0.88,1.73l0.57,4.16l1.36,2.72l-1.31,11.34l-5.43,12.45l-6.15,0.11l-4.53,3.52l-3.79,0.4l-3.78,2.01l-3.49,-0.14l-1.24,0.7l2.68,1.3l2.01,-0.15l3.58,-1.73l3.51,-0.22l6.69,-2.85l3.05,0.54l1.11,1.8l1.0,3.86l3.27,1.54l-0.5,1.42l-3.77,-1.36l-3.81,0.92l-0.08,1.11l1.6,2.6l-0.31,2.19l2.02,1.99l-2.39,-0.53l-5.91,1.19l-2.42,4.07l-7.9,5.01l-1.26,2.52l0.35,1.72l-2.99,-0.32l-1.35,0.48l-1.54,3.01l-9.03,2.6l-3.82,4.23l-4.19,3.43l-1.8,0.12l-8.8,3.98l-1.72,1.37l-4.74,6.65l-0.83,2.25l-6.68,3.63l-9.85,10.46l-1.64,3.53l0.97,3.43l-5.16,5.78l1.09,2.04l-1.92,-0.39l-1.14,0.46l-2.57,4.42l0.36,0.69l2.0,0.42l3.87,-1.13l3.27,-7.22l0.64,0.53l-4.83,18.44l-2.16,15.41l-1.44,3.3l-8.65,7.34l-9.07,4.38l-6.09,0.41l-1.5,-1.94l-2.57,-1.44l-0.76,-2.18l-2.7,-2.72l-1.29,-3.39l-3.35,-4.58l-1.76,-4.74l-2.12,-1.5l-2.3,-0.51l-0.38,1.02l3.32,2.21l0.63,2.9l2.41,4.81l0.09,1.66l-4.19,1.9l-2.22,-0.61l-6.11,0.47l-4.32,1.21l-2.08,1.26l0.17,1.14l1.36,0.14l6.82,-2.0l11.1,-0.13l1.98,1.82l1.09,3.19l6.44,4.1l-2.65,2.8l-8.91,2.37l-10.15,4.63l-4.72,4.87l-1.39,3.13l-3.27,3.78l-1.11,2.41l-2.97,11.33l0.58,6.16l-0.56,2.29l-4.82,5.0l-5.85,4.45l-1.09,2.37l0.87,0.72l5.26,-4.93l4.09,-1.96l0.3,0.33l1.43,4.52l1.04,7.37l1.61,3.34l1.12,5.23l4.46,10.7l0.11,2.99l-0.52,0.41l-2.99,-0.44l-3.16,2.46l-2.07,-0.29l-5.12,-2.39l-4.46,-0.18l-5.69,1.45l-5.61,3.36l0.66,0.5l9.64,-1.89l3.2,0.21l6.51,2.35l-2.03,1.93l0.26,1.0l1.24,0.1l6.04,-3.58l2.72,-0.72l5.4,8.29l4.29,9.36l5.33,8.15l6.35,7.04l5.93,8.36l0.01,1.68l-1.59,1.82l0.03,-3.39l-0.68,-1.16l-7.63,-2.22l-8.97,-1.23l-8.38,-3.86l-9.3,-2.5l-12.38,-0.35l-21.15,-7.55l-88.67,-1.05l-1.66,-0.91l0.72,-4.25l-1.66,-3.41l-7.39,-6.46l-6.99,-2.77l-1.36,-5.5l-1.17,-1.13l-3.39,-0.44l-0.57,-0.84l4.27,-4.33l0.05,-2.34l1.27,-2.96l0.13,-4.62l2.79,-4.06l-0.09,-1.38l-4.24,-2.88l-2.19,-3.11l0.22,-1.56l2.02,-2.65l2.61,-1.07l1.34,-4.32l0.11,-7.66l-3.78,-5.52l1.89,-4.34l0.01,-1.48l-3.95,-1.93l-5.79,-1.15l-2.28,0.96l-2.99,2.94l-1.6,0.05l-4.47,-3.04l-6.84,3.05l-6.69,5.4l-3.48,0.67l-1.38,-0.98l-0.64,-6.28l-2.94,-4.05l-0.73,-12.23l-1.29,-4.03l-2.15,-3.46l-8.22,-5.99l-0.39,-1.26l2.81,-6.23l-1.13,-2.13l-3.04,-2.48l1.29,-1.85l0.31,-2.63l2.29,-2.06l1.0,-1.85l-0.16,-1.84l-3.58,-4.63l1.22,-2.65l-0.14,-1.5l-2.97,-3.93l2.01,-2.62l-0.36,-2.77l3.74,-3.15l0.1,-4.35l13.96,-0.24l0.86,-1.5l1.63,-0.5l-0.0,-1.22l-3.03,-0.61l-0.69,-1.9l3.4,-4.43l1.29,-4.42l2.68,-3.42Z", "name": "Santa Cruz"}, "co": {"path": "M384.61,644.72l-0.01,-52.16l-2.02,-38.11l1.69,-3.13l1.96,-0.55l0.78,-0.9l-0.45,-2.66l1.6,-3.27l-0.31,-2.34l1.84,-3.39l1.32,-6.75l1.28,-1.56l1.51,-4.8l0.41,-3.69l-2.18,-6.04l0.13,-6.06l-0.38,-0.83l-1.42,-0.56l-5.69,1.46l-5.09,0.42l-0.15,-2.92l-1.41,-2.71l-0.61,-4.15l-3.1,-3.39l-15.06,-8.47l-5.04,-0.44l-0.34,-38.56l10.84,-33.5l1.88,-3.36l3.63,-9.94l9.35,-2.54l2.43,-1.25l8.96,-9.24l0.66,-2.15l-1.36,-11.32l0.35,-1.13l29.26,-7.42l10.6,2.24l-0.19,2.23l1.16,1.29l3.35,1.74l1.04,1.33l3.61,0.86l2.12,1.31l3.78,0.21l5.31,-0.8l3.84,1.05l2.43,-0.28l0.11,2.75l2.77,0.74l0.13,1.58l0.82,0.73l49.42,0.27l1.76,1.21l6.89,16.95l-2.09,12.66l0.43,2.33l12.05,13.48l-11.88,43.13l-0.69,1.48l-4.5,4.13l0.83,2.73l0.09,6.9l1.41,2.61l-1.26,3.44l-0.29,5.44l3.79,4.01l2.65,1.53l2.85,7.07l4.5,3.76l0.84,4.61l1.28,1.4l-1.24,3.78l2.91,1.11l2.29,4.29l1.97,2.25l-1.07,3.93l-0.28,5.36l-2.74,3.05l-2.66,0.53l-1.5,1.76l-42.0,63.76l-21.67,-0.08l-1.97,1.92l-0.59,29.68l-75.68,-0.02Z", "name": "C\u00f3rdoba"}, "ju": {"path": "M286.9,91.86l10.63,-34.51l-7.97,-8.57l3.3,-4.78l4.02,-3.49l-0.15,-5.14l2.04,-0.12l2.07,-2.05l6.89,-2.62l-0.1,-2.21l2.31,-7.33l1.28,-0.93l2.9,0.47l0.65,-0.94l11.11,-3.05l2.08,-2.21l1.3,-0.31l1.06,-5.96l2.34,-7.48l5.41,2.03l1.21,1.26l1.01,2.76l5.07,1.21l5.75,6.61l1.56,1.05l1.63,0.45l7.36,-1.29l5.56,0.7l11.42,-0.13l-1.97,5.13l-0.19,4.55l-4.26,8.57l-0.54,4.23l0.46,0.92l1.56,0.08l1.55,1.36l-0.86,2.03l0.01,2.5l0.79,5.35l1.73,4.93l2.52,2.19l5.71,0.36l1.45,1.39l0.36,1.91l-1.52,8.82l0.94,1.27l3.18,1.41l2.78,5.62l0.94,3.34l3.97,0.46l2.28,-1.72l3.45,-0.57l1.18,1.08l3.45,1.27l4.06,4.54l1.59,0.98l1.51,-1.03l0.86,-2.77l1.22,-1.51l7.22,0.15l1.2,31.33l-2.3,5.2l-3.79,4.78l-0.98,0.64l-4.2,0.56l-1.51,1.82l-2.51,0.7l-3.25,3.05l-1.56,3.14l-9.52,-7.51l-1.81,2.14l-2.02,4.64l-0.89,0.02l-5.6,-2.35l-3.75,-2.97l-0.93,-1.49l-5.26,2.21l-6.53,-1.88l-2.39,-1.92l-2.39,0.56l-2.24,-1.27l-7.34,-10.7l-0.44,-4.82l-6.64,-4.73l-2.54,0.63l-1.58,-2.18l0.34,-1.76l-1.47,-2.47l0.21,-3.56l1.56,-2.49l-0.55,-1.57l0.52,-7.01l-2.09,-2.37l-6.56,-3.84l-1.95,-0.1l-1.97,-1.29l-4.0,-1.11l-1.19,0.17l-1.04,1.28l-1.35,6.31l3.11,9.81l-0.63,14.89l-1.52,4.49l-1.27,0.55l-2.38,3.13l-1.27,0.65l-4.15,-0.2l-3.05,-1.51l-4.17,-4.76l-4.73,-2.3l-3.28,-4.52l-1.81,-0.54l-0.54,-1.41l-3.68,-3.82l-3.06,-0.93l-4.43,-3.59Z", "name": "Jujuy"}, "tf": {"path": "M408.94,1757.54l-2.09,0.84l-1.51,2.07l-2.71,0.1l0.73,-2.08l-3.85,-2.08l2.91,-2.85l3.2,1.62l1.24,-0.1l3.03,-1.04l0.99,-0.97l-0.48,-0.88l1.85,0.46l2.22,-0.85l0.49,2.21l1.55,0.19l0.43,-4.59l1.42,0.85l4.37,0.04l1.91,1.52l1.02,-0.29l0.22,-1.64l1.44,0.86l1.27,-0.83l1.53,2.12l6.83,-2.17l2.03,1.08l1.51,-0.83l-1.89,2.73l-4.22,2.03l1.0,-2.01l-0.34,-1.26l-0.95,-0.36l-2.25,1.59l-2.7,-0.04l-1.31,1.53l-5.06,0.99l-0.81,0.9l-0.45,-0.71l0.74,-2.76l-2.73,-0.28l-6.68,4.19l-1.03,0.12l-0.4,-1.28l-1.46,0.2l-1.08,0.92l0.09,0.76ZM409.66,1751.56l-1.38,-1.15l-0.1,-0.22l0.33,-0.05l1.14,1.42ZM224.01,1753.21l0.63,-130.78l7.96,11.21l5.25,4.7l2.33,5.44l-1.67,-1.61l-3.03,0.66l-1.16,0.72l-2.14,3.24l-4.29,3.39l-1.56,2.53l0.03,2.58l1.02,2.45l1.53,1.82l4.69,2.33l2.69,0.36l8.41,-0.6l2.91,5.31l2.09,8.72l2.95,4.91l11.08,8.93l1.27,2.74l2.35,-0.03l2.49,1.8l1.57,5.66l12.37,9.02l12.25,6.68l2.96,2.62l9.83,3.96l1.83,1.26l6.67,7.51l5.42,3.25l2.77,0.72l4.04,3.03l15.5,6.27l2.46,0.42l2.19,1.32l6.71,0.95l10.87,-1.36l3.57,0.26l3.17,-1.13l6.73,0.88l-2.14,2.24l-1.41,3.46l0.46,1.26l-1.67,1.6l0.29,1.72l-2.66,1.96l-1.23,3.89l-0.87,0.57l-0.87,-0.03l-0.54,-1.97l-3.2,-0.66l-1.43,0.93l0.21,1.39l-0.59,0.69l-5.16,0.13l-1.16,1.91l-1.07,0.4l-1.26,-1.04l-0.47,-2.58l-1.64,-1.14l-10.03,-0.11l-0.5,0.58l0.38,1.12l-2.01,1.91l-5.63,1.97l-9.38,-0.28l-2.42,1.33l-1.55,3.01l-0.82,0.26l-8.04,-1.39l-7.58,-5.41l-6.56,-0.92l-3.9,-1.47l-40.71,-2.68l-6.43,-1.0l-2.14,-1.39l-4.31,-0.35l-3.91,-1.67l-1.17,0.95l-0.29,2.21l-8.37,0.6l-1.62,-0.67l-3.33,-3.47Z", "name": "Tierra del Fuego"}, "cr": {"path": "M650.75,342.39l1.84,-3.72l0.47,-5.16l2.52,-5.8l-0.16,-4.73l1.11,-6.37l-1.11,-3.87l0.38,-7.76l1.38,-1.37l4.24,-0.52l2.68,-2.14l0.94,-1.55l1.63,-6.3l-0.09,-3.63l1.16,-3.35l0.1,-2.89l-0.87,-3.68l-2.26,-4.45l-0.08,-2.9l10.16,-7.06l6.35,-2.48l12.15,-1.03l4.93,0.61l4.78,-0.47l14.03,3.37l8.89,4.09l7.92,-0.25l1.42,1.23l5.77,2.58l4.94,-0.19l4.54,-2.39l2.96,-0.74l6.02,4.25l1.96,-0.34l2.37,-1.74l2.93,-0.82l2.64,0.37l3.75,4.67l3.21,1.76l1.87,-0.48l3.29,-4.98l0.77,-4.3l3.13,-1.21l3.49,-2.97l1.99,0.26l3.43,1.21l-1.16,2.38l-0.12,3.09l6.53,12.9l1.84,9.86l2.33,2.68l2.08,4.63l4.71,3.48l-2.19,1.92l-2.82,0.93l-1.45,1.18l0.41,1.84l3.65,1.66l0.8,1.34l-1.16,3.07l-1.14,-1.78l-5.04,-1.0l-3.38,1.72l0.19,4.21l-4.93,1.52l-0.65,1.03l-0.02,3.57l-0.68,0.9l-2.82,1.93l-3.66,4.66l-4.68,1.88l-0.76,5.1l-0.84,1.45l-3.18,1.89l-1.55,5.6l-5.27,1.88l-3.26,2.59l-1.66,2.59l-0.09,2.27l-1.52,3.44l-3.66,2.42l-2.26,4.73l-6.59,6.15l-2.51,4.08l-3.97,3.9l-4.67,0.56l-3.49,1.93l-0.97,2.0l-0.66,6.24l-3.81,2.83l-4.27,5.14l-1.78,1.18l-3.77,0.64l-0.67,0.66l0.69,3.63l-1.15,3.06l-8.86,7.68l-1.96,3.48l0.2,2.35l3.1,6.2l-6.62,-6.14l-2.15,-3.88l-1.44,-5.06l-4.79,-4.06l-2.67,-4.39l-1.63,-1.21l-8.83,-2.31l-2.99,-0.04l-2.93,-1.47l-2.22,-0.04l-6.64,2.68l-4.41,0.98l-5.96,-1.09l-10.52,6.78l-6.56,-1.79l-3.11,0.68l-1.97,-0.52l-3.21,1.17l-3.55,0.18l-0.15,-2.23l1.27,-6.18l1.96,-5.14l-1.61,-6.06l-1.87,-3.87l2.01,-4.54l1.64,-6.73l0.11,-10.09l1.83,-7.27l2.59,-3.14l5.67,-2.23l6.68,-4.73l0.91,-1.66l0.15,-4.62Z", "name": "Corrientes"}, "tu": {"path": "M334.62,263.93l1.96,-3.49l3.32,-3.23l1.62,-3.24l5.73,-5.92l2.05,-4.19l0.79,-7.2l-0.44,-2.25l-7.98,-6.03l-4.12,-1.2l-1.28,-1.65l2.25,-6.73l0.29,-2.78l1.9,-2.74l15.0,2.04l1.26,-1.73l1.11,-8.99l3.62,1.27l6.24,0.92l5.54,-2.12l1.46,3.34l1.26,1.23l8.73,3.4l1.93,-0.07l3.4,1.63l2.29,-0.3l2.4,-1.76l3.44,-0.94l3.15,0.63l8.99,-0.21l0.04,4.05l-1.77,6.18l1.09,10.8l-3.46,-0.14l-1.96,5.69l-2.36,0.64l-2.5,8.96l-2.14,2.82l-1.35,5.25l-3.34,7.44l-2.59,1.58l-5.74,6.41l1.14,1.34l3.07,1.16l-1.38,1.66l-2.42,0.45l-0.68,1.64l0.06,1.46l2.97,6.69l-1.26,0.93l-1.72,4.64l-6.5,1.52l-4.6,-2.85l-1.2,-0.05l-6.91,4.9l-2.56,4.22l-4.04,-4.86l-1.83,-6.31l-2.78,-1.61l-2.91,0.77l-0.88,-0.84l-1.25,-4.07l-2.3,-2.03l-2.53,-10.59l0.05,-2.19l-9.41,-3.34Z", "name": "Tucum\u00e1n"}, "ch": {"path": "M74.56,1091.13l0.62,-0.9l-0.18,-1.84l1.24,-1.23l0.32,-2.23l3.98,-1.11l2.1,0.36l0.84,-0.87l-0.19,-4.14l0.65,-2.07l-1.49,-1.99l-4.27,-1.61l-6.75,-0.73l-1.85,-0.75l-3.15,-3.21l-0.78,-2.14l1.6,-7.27l-1.4,-16.53l2.01,-2.21l2.39,-1.14l0.32,-0.96l-1.65,-2.82l0.63,-3.54l-3.22,-4.21l3.27,-4.57l0.83,-2.78l1.05,-0.83l0.93,0.02l1.21,2.08l1.58,0.72l2.1,-1.87l3.59,-0.68l2.52,-1.51l0.83,-1.56l-0.15,-2.93l-0.63,-1.04l298.66,0.03l2.94,0.52l3.67,6.14l5.37,3.75l2.17,0.14l3.4,1.69l4.05,0.4l2.04,1.32l3.37,-0.75l1.82,0.41l0.31,0.36l-1.69,1.16l-3.85,5.17l-0.44,2.0l0.79,1.01l4.97,0.05l1.96,0.83l5.91,-1.28l9.81,0.17l2.64,-3.41l-0.25,-1.86l0.53,-1.06l-1.18,-3.19l-3.36,-0.81l-4.96,0.2l-3.07,-0.7l6.84,-0.97l7.8,-2.61l6.45,-3.68l3.54,-0.11l1.08,0.62l2.8,6.54l2.2,1.99l0.91,1.75l0.81,15.67l-2.42,6.55l0.5,1.99l-2.01,2.41l-2.75,1.15l-9.16,1.88l-3.8,0.14l-2.25,1.37l-1.16,-0.18l-4.62,-4.87l-1.47,-0.78l1.4,-5.82l1.08,-0.81l-0.41,-1.04l-4.27,-2.82l-1.33,-2.38l-5.44,-2.02l-4.84,-0.03l-4.54,0.87l-4.45,2.05l-3.1,3.43l-5.19,1.03l-1.38,0.9l-3.41,5.28l1.26,2.75l11.74,4.72l4.14,2.94l2.63,0.89l3.96,-0.17l3.25,2.15l4.92,-1.34l0.42,1.02l-6.19,4.21l-14.3,4.29l-8.23,5.13l-4.16,3.47l-0.57,1.49l0.28,3.72l-5.18,4.47l-2.44,3.71l-2.98,2.27l-2.6,4.32l-0.13,4.06l1.12,2.62l-0.47,3.04l1.07,1.1l0.87,2.58l0.18,3.66l2.12,0.32l-0.41,2.14l0.89,0.69l-0.95,2.1l0.22,2.12l-3.22,1.49l-0.78,3.81l2.43,2.56l-0.33,2.26l1.82,2.74l-0.73,1.39l-3.45,2.12l-0.58,1.53l0.45,1.71l1.6,1.14l-2.89,-0.29l-1.45,2.81l0.23,0.69l-2.67,-0.52l-1.14,1.96l-6.36,2.94l-3.32,4.2l-1.76,5.69l0.35,2.44l7.95,3.41l-1.81,1.03l-1.08,1.65l0.33,1.26l-1.01,0.91l0.52,1.21l-3.46,0.82l-2.67,-1.45l-2.72,0.17l-0.73,-1.03l-1.31,-0.29l-0.99,0.4l-0.59,1.46l-2.05,0.12l-3.63,-2.74l-4.59,-0.78l-4.03,0.35l-3.18,3.55l-1.34,0.36l-1.39,-0.53l-8.96,3.54l-0.66,1.56l0.67,1.17l-1.61,-0.09l-1.22,0.83l3.02,2.57l-0.31,0.49l-5.58,-0.39l-8.22,0.56l-4.08,2.19l-3.75,3.42l-8.77,13.44l-1.79,0.72l-2.95,2.53l-1.46,3.3l0.13,3.5l-0.9,2.03l0.54,1.16l-2.0,1.2l-5.44,5.45l-1.33,1.94l0.14,1.49l-1.96,2.04l-181.83,-0.03l0.78,-1.13l-1.39,-3.86l-1.33,-1.44l-3.95,-1.85l0.49,-3.24l-2.25,-2.71l0.84,-2.5l-0.12,-2.54l1.82,-2.77l-0.87,-1.42l1.82,-1.55l8.36,-0.77l1.94,-1.28l0.71,-1.46l-1.42,-3.6l5.93,-2.76l2.96,-3.51l-0.22,-2.27l-2.22,-3.49l-5.56,-4.72l-3.02,-6.48l-1.66,-1.72l-5.29,-0.35l-2.48,-2.25l-1.23,-0.35l-4.89,1.08l-5.33,-2.33l-2.61,-0.06l-0.51,-6.06l1.19,-0.99l8.78,1.98l4.11,-2.02l5.99,1.41l5.99,-2.04l5.2,2.68l2.05,0.56l1.95,-0.35l1.84,-1.18l1.27,-1.86l0.14,-6.03l1.47,-2.41l3.08,-1.19l0.55,-2.7l-1.54,-1.99l-0.76,-2.63l-2.06,-1.6l-10.42,-1.47l-13.6,-0.45l-3.59,0.54l-1.39,-1.15l2.19,-1.71l0.42,-1.42l-1.24,-2.52l1.17,-3.68l-2.3,-4.99l4.1,-2.26l4.25,-5.85l0.52,-2.17l-2.67,-4.09l-1.97,-1.54l0.21,-3.25l-0.83,-0.37l-1.51,0.62l-0.41,-0.58l0.54,-1.35l4.33,-2.43l-0.2,-5.07l-4.21,-3.49l-3.12,-0.27l0.87,-1.66l-0.69,-2.47l-1.99,-0.86l-1.48,0.36Z", "name": "Chubut"}, "rn": {"path": "M78.41,959.83l13.36,1.08l8.71,3.07l2.94,0.32l3.94,-0.78l3.16,-1.65l4.95,-5.79l0.87,-2.43l-1.06,-2.56l-3.26,-2.38l-0.4,-1.73l2.13,-2.59l2.91,-1.34l1.85,-3.17l4.59,-1.37l2.39,-1.51l4.18,0.66l1.87,-0.41l6.26,-4.11l4.07,2.89l5.58,-1.0l4.01,0.08l1.45,-0.87l1.37,-3.65l2.14,-0.21l1.8,-1.25l0.64,-1.45l0.33,-5.19l2.98,-6.56l0.89,-7.73l1.93,-5.29l11.75,-6.47l6.17,0.18l2.54,-1.0l5.8,-4.95l5.28,-6.87l5.45,-2.91l3.12,-0.27l4.26,-2.0l2.9,-4.32l2.94,-1.84l1.63,-4.18l2.24,-2.27l3.47,-1.96l3.01,-4.41l2.6,-1.79l3.07,-1.11l2.99,-3.33l3.91,-2.4l2.64,1.79l1.97,-0.7l4.47,0.74l5.2,-1.33l0.05,-0.77l-1.07,-0.61l-0.69,-3.17l-9.05,-12.55l0.12,-56.85l17.24,2.15l1.78,0.85l2.49,2.5l1.55,3.17l-0.48,3.89l-5.57,4.66l-1.09,2.01l-0.08,3.65l1.47,2.99l1.81,0.81l1.67,-0.38l2.65,1.71l2.44,4.71l2.84,3.08l2.04,0.88l4.74,-0.75l3.36,0.43l3.38,-1.54l3.63,-0.67l1.55,0.37l1.7,5.82l3.1,3.88l19.15,7.86l2.24,2.38l0.87,4.0l0.88,1.23l7.83,1.75l8.07,-0.91l11.4,1.33l6.51,1.76l1.76,1.09l2.5,0.14l1.52,0.99l5.72,-2.21l6.06,1.81l2.78,1.47l11.52,-1.83l6.27,-0.0l1.29,0.78l5.71,-0.4l15.59,2.25l14.54,4.98l4.08,2.35l2.08,0.33l4.49,4.78l5.72,1.92l3.15,3.74l8.86,5.63l5.49,1.08l0.08,73.1l9.72,1.49l3.35,1.23l10.81,9.78l2.43,4.72l-2.39,2.18l-10.38,3.68l-9.75,-0.36l-3.07,0.7l-17.77,-0.11l-3.68,-1.25l-4.57,-3.97l-4.09,-0.88l0.55,-1.5l-0.83,-0.91l-3.47,0.89l-1.61,-0.38l-10.97,-5.26l-6.1,-1.5l-4.2,-1.95l-5.73,-0.99l1.62,-1.15l-0.58,-1.47l-1.52,-0.59l0.89,-1.24l-1.47,-1.12l-4.49,-0.97l-4.41,0.99l-0.63,1.26l2.47,0.07l0.11,1.05l-4.02,0.3l-4.41,3.35l-2.6,7.64l1.31,11.46l1.9,8.08l2.01,6.47l2.52,2.53l0.57,1.41l-2.06,7.46l1.76,5.13l-0.07,1.71l-3.35,8.46l0.41,2.61l-301.92,-0.42l-0.86,-6.74l-2.81,-4.36l-0.6,-3.91l-2.51,-3.31l-0.0,-1.18l2.66,-1.89l0.62,-1.31l-1.58,-3.09l0.38,-4.01l-1.08,-3.74l1.38,-6.26l-0.72,-3.54l0.79,-0.76l0.8,-4.81l-0.51,-3.06ZM397.03,948.81l-1.68,0.15l0.35,-0.17l1.33,0.02ZM394.11,949.01l-0.9,-0.06l-0.69,-0.27l1.45,-0.57l0.14,0.9Z", "name": "R\u00edo Negro"}, "sf": {"path": "M528.89,526.62l1.18,-3.38l-1.37,-1.72l-0.89,-4.7l-4.61,-3.94l-2.85,-7.07l-2.8,-1.69l-3.39,-3.44l0.27,-4.89l1.28,-3.69l-1.43,-2.8l-0.07,-6.82l-0.9,-1.89l4.31,-4.03l0.88,-1.84l11.98,-43.63l-2.27,-3.41l-9.92,-10.53l-0.31,-1.66l19.06,-117.78l127.2,-0.05l-2.11,3.56l-2.47,1.1l-3.75,0.53l-1.52,2.57l-0.18,7.37l1.11,3.81l-1.1,6.32l0.18,4.62l-2.5,5.7l-0.46,5.09l-1.88,3.51l-0.14,4.89l-0.6,1.08l-6.39,4.51l-4.37,1.56l-2.64,1.68l-1.8,2.78l-1.61,5.85l-0.39,11.72l-1.6,6.56l-2.09,4.89l1.98,4.38l1.52,5.6l-1.92,4.82l-1.41,7.15l0.75,4.69l1.7,3.77l-0.45,6.21l-1.58,7.01l-15.3,23.47l-2.84,2.86l-1.36,4.04l-3.16,4.51l-4.03,3.06l-7.14,8.31l-2.48,1.09l-5.91,0.11l-2.23,0.97l-1.35,7.05l-2.08,3.49l0.12,2.86l2.47,4.64l-2.01,4.21l0.22,5.01l-1.32,4.95l0.09,5.02l-1.63,4.23l-0.06,2.21l2.75,5.01l0.33,4.53l1.07,3.93l2.47,4.86l1.6,1.83l1.57,4.21l2.69,3.2l4.7,2.68l5.01,4.89l-0.33,1.42l-2.55,1.53l-0.5,3.45l-2.66,2.26l-0.76,3.99l-1.76,3.63l-1.19,0.86l-2.66,0.3l-4.74,-3.2l-4.69,-0.19l-3.04,-1.16l-3.56,0.79l-1.43,2.31l0.34,1.58l-1.39,1.93l-33.55,35.18l-50.24,0.26l41.54,-63.06l1.04,-1.26l1.75,-0.14l1.77,-1.12l2.44,-2.96l1.43,-10.23l-4.54,-7.0l-2.52,-0.83Z", "name": "Santa Fe"}, "fo": {"path": "M509.95,33.31l0.23,1.24l0.98,0.31l1.04,1.46l-0.77,2.5l2.82,1.42l0.1,3.53l6.89,8.35l2.06,5.47l1.69,1.79l5.02,2.97l3.36,3.18l1.69,3.73l2.54,1.79l3.26,0.41l2.25,2.29l1.19,0.42l-0.08,1.09l1.33,1.81l9.16,3.49l1.19,2.03l2.71,1.64l1.54,0.02l2.87,2.12l-0.39,2.76l3.15,3.31l2.16,3.54l1.66,0.97l1.75,-0.44l4.4,2.7l4.93,0.03l1.73,1.0l3.0,0.07l1.96,2.29l1.98,0.21l2.35,1.41l4.72,0.52l1.96,1.35l8.89,0.42l4.69,-0.9l16.12,10.31l2.92,3.1l3.25,0.97l3.27,2.08l0.59,1.28l3.21,2.36l1.84,2.74l15.42,7.52l8.61,6.29l3.91,0.5l1.48,1.25l9.89,1.87l6.24,6.72l1.52,0.04l3.53,-2.44l4.44,3.37l3.79,1.53l1.69,-0.04l0.86,1.44l5.03,0.51l5.06,4.37l1.49,3.15l2.26,2.15l1.39,3.91l3.63,3.21l-0.72,5.31l-1.58,0.97l-0.29,1.19l-2.16,-0.02l-0.73,1.82l-2.56,0.55l-1.63,2.05l1.01,1.63l-3.11,2.08l0.68,2.77l-3.11,1.87l-0.06,1.31l0.99,0.54l-2.41,2.81l0.26,0.66l1.79,0.53l-0.39,0.51l-5.11,3.69l-4.51,1.91l-1.33,2.97l-1.75,-0.16l0.16,1.49l1.81,1.28l-2.79,1.48l0.04,3.27l-2.06,4.05l1.12,1.88l-1.32,3.56l0.29,1.11l1.84,1.89l-1.0,0.94l0.46,1.65l-2.35,-0.05l-0.62,5.21l-1.79,0.64l0.46,1.47l-2.76,0.35l-0.6,1.52l1.52,1.73l-1.43,-0.15l-0.62,-1.59l-2.04,0.12l-1.23,-0.61l-0.71,-1.63l-3.1,-2.67l-1.2,-2.38l-3.76,-2.29l-1.77,-2.18l-2.31,-0.49l-2.23,-2.62l-3.19,-1.64l-4.17,-4.8l-6.44,-2.72l-2.75,-2.62l-1.44,0.18l-1.45,1.32l-2.44,0.93l-3.35,-0.32l-1.27,-1.5l-1.85,-5.89l-2.31,-1.05l-8.59,-1.4l-0.47,-5.69l-1.35,-0.28l-3.05,-4.2l-3.79,-2.66l-0.63,-2.31l-3.37,-1.85l-1.26,-1.62l-2.17,-0.58l-0.98,-1.78l-4.94,-1.88l-1.26,0.4l-2.53,-5.42l0.52,-1.08l-0.65,-1.52l-2.46,-0.78l-0.57,-1.75l-1.71,-0.9l0.28,-0.89l-1.04,-2.02l-3.0,-2.19l-3.35,-5.25l-6.69,-2.26l-7.02,-4.29l-10.54,-8.45l-1.86,-0.1l-1.03,-1.22l0.39,-1.74l-2.24,-3.51l-0.08,-1.46l-1.29,-0.72l-1.75,-2.34l-2.59,-0.99l-8.15,-1.08l-4.65,-4.3l-1.08,-2.18l-3.77,-0.28l-2.1,-3.97l-3.36,-2.69l-5.66,-1.14l-3.64,-2.51l-2.1,-2.37l-4.42,-0.85l-9.3,-3.54l-0.1,-77.05l1.35,0.29Z", "name": "Formosa"}, "ne": {"path": "M78.32,958.6l0.7,-3.48l-2.72,-4.86l-1.92,-6.59l4.54,-5.37l0.29,-2.25l-0.63,-1.47l2.75,-6.78l3.04,0.3l2.68,-5.61l-0.78,-2.37l-1.35,-0.49l-1.32,0.81l-3.04,-3.43l0.67,-5.62l-0.49,-1.0l1.42,-0.44l1.99,0.87l2.3,0.1l0.74,-2.39l-0.48,-2.47l2.94,-5.52l-0.33,-1.24l-2.74,-3.01l-1.32,-5.53l0.91,-2.81l-1.01,-1.76l0.08,-1.91l0.82,-1.31l2.59,2.43l1.14,0.27l3.79,-0.26l1.15,-1.06l0.36,-2.38l-1.83,-1.63l3.37,-4.89l-0.64,-2.66l2.43,-2.02l0.49,-1.58l0.46,-4.43l-1.31,-11.08l1.28,-5.64l5.26,-3.04l2.07,-2.06l3.55,-0.59l4.63,-2.7l4.9,-0.07l1.63,-2.14l1.77,-0.99l-0.39,-2.61l2.25,-4.26l-0.8,-2.42l-4.58,-3.57l-0.95,-1.64l-2.04,-9.75l0.5,-3.47l-0.67,-3.11l0.71,-2.07l-3.63,-6.92l-0.34,-2.22l-1.75,-3.13l-2.3,-6.79l-0.02,-3.71l2.59,-2.33l-0.59,-2.24l1.07,-4.1l-3.52,-6.56l-0.45,-2.31l2.63,-3.94l0.29,-4.11l2.34,-1.87l-2.31,-2.39l-0.42,-2.47l-1.09,-1.16l1.21,-0.72l0.49,-1.23l-1.44,-1.72l0.33,-2.01l-1.6,-1.75l1.97,-4.11l0.25,-3.58l0.83,-0.24l1.89,0.96l1.25,-0.84l-0.47,-6.45l0.98,-3.76l2.88,0.14l1.9,-0.75l1.72,-3.61l3.7,1.68l4.33,-1.05l0.73,-1.04l-1.03,-3.61l0.87,-3.18l2.08,-0.98l2.64,-2.63l0.95,-2.54l3.39,1.14l1.49,-0.11l1.66,-1.31l2.1,1.65l0.48,1.14l-0.03,2.49l-1.06,2.05l1.29,4.22l1.41,0.96l1.97,-1.02l1.03,0.52l2.72,8.06l1.65,2.66l4.42,1.67l2.37,2.97l2.58,1.8l2.21,4.64l5.14,3.32l0.11,4.58l-1.26,2.29l5.32,6.28l3.7,2.15l4.32,1.14l2.58,0.15l7.89,-1.37l6.48,1.68l2.76,1.16l1.07,1.3l1.86,5.62l1.85,1.28l4.82,0.97l5.67,-0.48l3.47,2.8l7.57,1.03l1.89,3.2l1.78,1.53l7.69,0.99l-0.12,57.11l0.32,1.46l3.11,3.24l5.79,8.38l0.7,3.23l-3.31,0.78l-4.37,-0.75l-1.87,0.67l-2.05,-1.62l-1.12,-0.08l-4.19,2.61l-2.94,3.29l-2.86,1.0l-2.98,2.05l-3.04,4.44l-3.35,1.82l-2.37,2.42l-1.64,4.19l-2.89,1.8l-2.81,4.22l-3.79,1.77l-3.26,0.31l-5.68,3.03l-1.83,1.68l-3.66,5.36l-5.65,4.81l-1.89,0.76l-6.52,-0.1l-12.07,6.66l-1.2,1.66l-1.15,4.31l-0.89,7.71l-2.96,6.51l-0.77,6.23l-1.72,1.04l-2.01,0.17l-1.57,3.87l-0.81,0.45l-3.81,-0.1l-5.16,1.01l-3.01,-2.49l-1.41,-0.42l-2.01,0.68l-4.6,3.5l-1.52,0.34l-4.34,-0.64l-7.44,3.07l-1.42,1.38l-0.72,2.04l-2.74,1.16l-2.5,3.12l0.58,2.91l2.63,1.66l1.42,2.49l-0.63,1.76l-4.57,5.44l-2.95,1.55l-3.46,0.71l-2.67,-0.28l-8.78,-3.09l-13.72,-1.11Z", "name": "Neuqu\u00e9n"}, "mi": {"path": "M796.21,265.24l2.63,0.06l1.78,3.21l5.16,2.07l3.39,-3.18l4.16,-2.56l1.14,-4.34l-1.36,-3.32l1.82,-0.75l0.85,-2.45l3.35,-0.22l0.99,-4.17l1.12,-1.49l5.78,-2.06l3.34,1.01l3.27,-0.17l1.0,-1.0l-0.24,-3.53l2.74,-2.63l3.97,-0.93l1.21,-1.62l1.36,-3.92l1.41,-0.72l2.87,0.53l1.45,-1.25l0.63,-2.57l-0.37,-3.26l4.09,-4.7l1.58,-5.91l-0.05,-3.38l1.2,-1.99l-1.12,-2.41l0.94,-4.16l-0.88,-3.87l1.8,-0.48l0.66,-1.01l-0.33,-3.27l1.22,-3.51l-1.39,-2.08l-1.1,-4.83l1.55,-0.02l1.08,-0.76l-0.76,-3.06l1.46,-0.06l0.71,1.74l2.58,0.66l0.77,2.58l0.94,0.62l0.89,-0.54l0.04,-1.98l1.37,-1.07l0.32,-1.7l1.85,0.16l2.05,-1.39l1.84,2.17l1.16,-1.03l2.14,0.17l0.45,-0.61l-0.62,-1.69l1.41,0.04l1.53,-1.39l-0.48,2.77l1.38,1.61l1.2,-0.13l0.21,-1.65l0.8,0.59l1.25,-0.38l1.45,0.97l0.99,3.28l2.97,-0.81l0.85,2.46l-0.26,1.99l1.93,2.66l0.34,8.26l3.12,3.26l1.41,4.66l2.97,4.39l0.2,1.7l-2.81,5.5l0.5,5.86l-1.11,1.44l0.42,1.51l-0.64,2.11l0.13,3.57l-1.58,1.97l1.21,1.57l-0.18,1.58l0.9,0.42l0.86,5.52l-2.45,5.58l-1.51,0.82l-0.2,2.68l-1.08,1.05l0.11,1.71l-1.9,-1.91l-0.94,0.64l-0.54,1.66l-1.52,-0.94l-1.0,0.36l-0.22,1.86l-1.76,-0.12l-3.8,4.57l-2.05,-0.12l-0.12,-1.05l-1.73,-0.77l-2.69,5.5l0.04,1.22l-1.22,0.37l-0.99,1.77l-2.65,-1.64l-0.55,2.58l-0.89,-1.71l-2.92,-0.15l-0.99,0.3l-0.37,0.87l0.73,1.49l-3.56,1.11l-1.02,-1.42l-1.43,-0.21l-2.11,3.41l-0.69,-1.0l-1.22,0.53l-0.53,1.84l-3.51,0.53l-0.47,-1.77l-1.31,0.09l-1.24,1.16l-0.74,3.06l-2.46,0.76l-0.53,5.25l-3.1,2.27l-3.29,-0.72l-1.3,0.64l0.47,1.47l1.73,1.73l-1.01,-0.51l-1.73,0.25l-1.1,1.66l-2.35,-1.2l-3.87,3.23l-2.46,-0.18l-0.94,0.89l-0.32,1.5l-1.95,0.87l-0.16,1.83l-2.42,2.88l-2.89,0.01l-2.3,3.23l-0.41,-1.15l-1.3,-0.32l-1.2,0.95l-4.42,-3.25l-1.96,-4.48l-2.47,-3.01l-0.57,-5.83l-1.02,-3.48l-6.49,-12.8l0.72,-3.95l1.28,-1.07Z", "name": "Misiones"}, "lp": {"path": "M460.29,645.96l-0.2,222.92l-4.84,-0.9l-8.75,-5.56l-3.24,-3.79l-5.66,-1.9l-4.71,-4.91l-2.21,-0.37l-4.0,-2.32l-14.75,-5.05l-15.88,-2.29l-5.44,0.4l-1.35,-0.76l-6.56,0.0l-11.32,1.81l-6.36,-2.81l-2.53,-0.45l-1.45,0.13l-4.11,2.07l-1.3,-0.92l-2.66,-0.18l-1.57,-1.04l-6.79,-1.83l-11.58,-1.34l-7.92,0.92l-7.36,-1.62l-1.3,-4.74l-2.64,-2.81l-18.96,-7.7l-2.88,-3.59l-2.09,-6.27l-2.4,-0.56l-3.87,0.71l-3.07,1.48l-3.43,-0.44l-4.47,0.76l-1.49,-0.67l-2.49,-2.71l-2.47,-4.76l-1.38,-1.39l-2.08,-0.84l-2.05,0.31l-1.19,-0.8l-0.71,-1.96l0.07,-3.09l0.87,-1.57l4.5,-3.24l1.82,-3.62l-0.04,-2.68l-1.79,-3.68l-2.72,-2.73l-2.19,-1.05l-17.55,-2.19l-0.33,-65.71l-1.64,-7.65l0.96,-5.72l143.0,-0.19l0.81,-0.72l0.05,-50.4l75.68,0.02Z", "name": "La Pampa"}, "me": {"path": "M143.35,702.96l2.14,-4.18l-1.46,-4.09l1.3,-2.85l-0.64,-0.81l-1.02,0.02l0.02,-1.14l2.84,-2.99l-0.22,-1.83l-2.68,-6.27l0.59,-7.88l-1.72,-2.44l-1.08,-3.64l1.91,-1.5l-0.76,-1.66l-1.77,-1.01l-3.58,-0.72l-0.6,-1.43l1.34,-2.12l7.22,-2.44l1.51,-10.93l3.5,-8.02l-1.63,-2.52l1.6,-0.73l1.08,-1.77l1.07,-5.54l2.64,-2.31l2.43,-4.63l2.17,-1.78l0.46,-6.22l2.58,-0.84l3.62,0.76l3.98,-2.48l-0.19,-2.1l-1.59,-3.38l0.77,-7.94l-0.66,-1.71l-1.73,-0.17l0.53,-3.73l-0.77,-4.84l2.42,-2.29l-0.02,-1.21l-1.54,-2.33l1.0,-3.66l-0.25,-1.45l1.61,-1.05l0.51,-3.8l2.02,-3.15l-1.26,-5.76l-1.23,-1.47l-3.33,-1.51l-1.83,0.23l-2.7,2.74l-1.74,-3.37l-2.5,-2.59l0.79,-3.8l-0.83,-2.64l0.63,-0.97l2.35,-1.03l1.99,-6.2l-4.1,-3.04l-2.95,-4.03l-1.12,-6.33l0.21,-1.17l1.4,-0.24l0.33,-0.68l-0.91,-1.41l-0.71,-3.94l-2.57,-1.68l-0.65,-1.23l-0.08,-4.02l6.51,-0.97l4.98,0.82l8.83,-2.02l5.68,-0.37l1.77,-1.6l0.12,-4.18l0.71,-1.17l4.36,-1.55l2.68,-1.72l7.15,0.01l1.92,-2.81l3.11,-2.03l1.93,0.93l3.94,4.74l2.44,0.54l2.53,-0.46l0.89,12.22l1.2,1.04l9.23,-0.1l10.38,-6.36l2.94,-2.85l6.38,-0.53l3.92,-2.35l4.84,-1.19l2.73,0.87l1.47,1.63l0.53,1.8l2.98,1.83l2.13,2.36l4.47,0.72l11.21,-1.92l3.76,2.12l1.43,6.61l1.84,1.72l0.85,2.69l1.98,8.45l1.98,2.59l0.91,2.55l-1.12,3.33l0.55,3.03l-0.94,1.5l1.31,3.59l0.34,12.15l1.84,6.86l-0.09,3.29l6.01,9.55l4.09,11.21l3.92,3.03l0.96,3.13l1.97,1.77l1.34,3.41l-0.52,5.63l-1.68,0.19l-1.16,2.24l0.87,6.91l-0.48,1.2l1.52,2.22l0.29,4.34l1.6,5.28l2.2,2.3l5.29,9.79l1.13,3.55l-0.33,3.69l2.17,6.41l-0.92,3.78l0.92,1.49l-0.61,1.8l0.61,3.99l-0.72,7.71l-1.55,3.86l-2.37,13.27l-0.78,8.25l-72.61,-0.03l-2.06,1.3l-0.67,5.91l1.65,7.73l0.33,65.48l-7.23,-0.9l-3.47,-4.63l-7.84,-1.16l-3.57,-2.83l-5.94,0.46l-4.31,-0.85l-1.37,-0.88l-0.74,-1.45l-1.1,-4.14l-1.37,-1.61l-3.12,-1.34l-6.89,-1.75l-7.99,1.38l-2.25,-0.14l-4.0,-1.04l-3.51,-2.04l-4.79,-5.47l1.19,-1.7l0.33,-2.22l-0.54,-3.39l-5.34,-3.56l-2.15,-4.58l-2.7,-1.92l-2.42,-3.02l-4.25,-1.51l-1.44,-2.34l-2.95,-8.42l-1.66,-0.92l-1.94,1.06l-0.68,-0.42l-1.1,-3.52l1.03,-1.8l0.03,-3.07l-0.71,-1.61l-2.41,-1.92Z", "name": "Mendoza"}, "sj": {"path": "M163.26,356.46l2.73,-1.94l0.52,-1.18l3.83,-1.07l1.15,-1.38l0.07,-7.82l3.18,-7.18l-0.93,-5.88l1.32,-2.85l2.05,-1.96l0.93,-7.87l4.51,1.65l3.13,-0.53l2.26,2.42l3.73,0.32l6.52,5.27l2.4,4.0l1.43,4.83l3.77,3.43l2.06,4.78l2.86,3.15l-0.36,1.18l-2.01,1.03l-1.7,2.66l-0.05,5.88l2.61,3.67l-1.14,0.78l-0.51,1.29l-0.05,4.83l-1.8,3.39l-0.0,4.82l2.48,1.46l3.74,-0.84l3.75,0.64l5.02,-1.46l4.18,2.09l4.94,-0.02l7.09,2.02l2.03,2.49l4.91,3.24l1.07,2.16l3.59,1.65l2.03,2.02l0.88,2.01l2.27,1.5l2.14,2.71l4.17,2.23l2.17,2.81l6.27,4.68l2.23,3.49l0.8,2.95l3.65,2.47l1.91,3.07l4.53,3.72l3.95,5.75l2.88,1.54l4.8,8.64l-1.62,5.56l0.26,1.78l2.33,2.06l-1.94,13.31l2.38,5.28l0.14,3.28l4.94,4.9l3.85,0.77l0.83,5.57l2.53,1.45l1.94,4.13l-10.59,0.55l-5.49,-1.82l-5.82,0.74l-4.96,-0.99l-1.35,0.66l-1.24,2.16l0.63,4.77l-0.97,3.77l0.16,8.86l-3.96,-1.93l-11.13,1.95l-3.93,-0.64l-1.8,-2.16l-2.74,-1.61l-0.43,-1.62l-1.81,-2.03l-1.77,-1.06l-1.83,-0.06l-5.17,1.26l-3.83,2.32l-6.48,0.55l-3.19,3.0l-10.07,6.19l-8.6,0.07l-1.26,-12.75l-0.81,-0.52l-4.62,0.09l-3.74,-4.59l-2.78,-1.26l-3.92,2.36l-1.57,2.59l-6.93,-0.08l-2.94,1.81l-4.49,1.62l-1.2,1.73l-0.11,4.21l-1.31,0.98l-5.18,0.23l-8.75,2.0l-4.96,-0.81l-7.28,1.14l-2.64,-1.34l-0.98,-4.91l0.43,-1.89l-2.37,-4.44l4.47,0.4l2.12,-4.54l-0.12,-1.27l-2.63,-2.94l-5.96,-1.07l-1.87,-2.19l-0.51,-4.43l-1.9,-2.44l-2.73,-5.57l0.5,-6.57l1.1,-3.44l-0.63,-2.83l0.97,-1.97l0.45,-4.42l2.42,-3.59l1.7,2.84l1.29,-0.06l1.57,-1.68l1.74,-3.78l3.47,-0.55l-0.12,-1.16l-2.61,-2.61l-0.51,-1.32l0.87,-6.63l1.94,-3.67l0.02,-2.64l1.82,-4.0l0.81,-3.72l2.86,-2.57l0.47,-1.27l-1.32,-3.43l0.59,-0.26l5.25,2.07l3.31,-1.2l2.59,-2.47l0.98,-4.99l1.83,-1.37l0.69,-2.04l-0.7,-2.18l-1.55,-1.5l-4.22,-0.88l2.31,-4.55l0.57,-8.59l-0.64,-4.46l-1.96,-2.49l0.2,-4.07l-3.35,-10.83l0.4,-3.62l2.65,-2.02l-0.52,-1.36Z", "name": "San Juan"}, "ca": {"path": "M201.92,285.51l0.45,-1.52l2.01,-1.49l-0.73,-2.72l2.86,-4.3l0.5,-4.37l3.83,-3.08l2.24,-4.98l0.53,-4.59l2.4,-3.57l3.74,-0.53l3.08,2.12l3.24,0.58l1.65,-2.92l1.55,-1.28l8.36,-1.51l0.52,-0.8l-0.03,-1.83l1.22,-3.57l-0.18,-1.71l-11.98,-16.82l-1.08,-4.27l0.85,-7.08l6.88,-5.83l0.68,-2.09l-4.07,-18.94l-2.73,-4.43l-0.32,-3.29l0.5,-1.01l-2.39,-3.76l0.1,-2.44l4.59,-12.71l30.88,5.83l56.1,-0.57l1.51,6.03l2.25,3.4l-1.13,5.92l-3.06,2.43l-7.33,0.31l-3.16,2.24l-1.02,3.01l0.69,4.49l8.3,11.47l3.95,7.93l5.75,6.08l1.55,0.29l1.37,-0.94l2.78,-6.13l1.71,-1.08l1.55,-2.34l2.52,-0.04l2.59,2.94l1.58,0.82l-1.93,2.8l-0.28,2.77l-2.23,5.73l0.19,2.34l1.68,1.74l4.65,1.52l4.47,3.82l2.18,1.07l0.52,0.98l-1.37,9.76l-6.91,7.81l-1.63,3.24l-3.35,3.25l-2.16,4.6l0.88,0.83l8.84,2.98l-0.39,1.39l2.61,10.92l2.41,2.27l1.2,3.99l1.71,1.51l2.84,-0.82l2.16,1.21l1.69,6.1l4.45,5.32l1.26,0.16l2.79,-4.55l6.49,-4.64l4.42,2.73l3.06,-0.2l3.89,16.98l0.31,7.18l-0.75,3.71l-4.04,4.86l-0.08,2.3l0.4,0.87l3.41,2.22l0.74,14.27l1.99,14.38l6.5,12.53l-2.5,0.91l-0.68,1.96l1.3,12.21l-9.03,9.6l-11.23,3.58l-7.3,-14.17l-7.24,-16.69l-1.03,-4.71l-0.12,-4.39l-1.75,-3.37l-15.02,-13.84l-10.78,-5.6l-0.62,-1.02l1.85,-2.93l-0.04,-1.73l-2.83,-1.78l-2.94,-3.38l-1.39,-6.39l-4.25,-4.89l-17.99,-6.73l-3.34,0.92l-2.45,2.74l-3.78,0.67l-23.33,-0.83l-3.05,0.74l-2.04,1.31l-0.68,-1.93l-3.12,-4.13l-1.04,-6.38l-1.82,-0.35l-5.58,1.75l-2.59,-2.34l-5.69,-0.95l-3.16,-3.22l-4.01,-0.79l0.65,-4.35l-0.84,-2.53l0.93,-4.12l-0.97,-1.64l-3.44,-0.31l-2.93,1.68l-3.69,-1.0l-8.67,2.0l-12.07,-0.93Z", "name": "Catamarca"}, "cc": {"path": "M530.99,121.33l2.23,0.21l2.82,2.17l2.65,4.58l3.61,0.08l0.95,2.06l5.0,4.57l10.55,1.96l2.62,2.71l0.29,1.73l1.89,2.79l-0.15,2.27l1.28,1.44l1.03,0.51l0.91,-0.35l10.59,8.49l7.04,4.29l4.08,1.79l2.38,0.3l3.3,5.17l2.89,2.06l0.81,1.48l-0.05,1.46l1.87,1.08l0.74,1.91l2.09,0.46l0.49,0.87l-0.52,1.32l2.87,5.97l1.04,0.43l0.84,-0.48l4.56,1.72l0.96,1.76l2.24,0.63l1.1,1.5l3.31,1.8l0.59,2.27l2.05,1.03l4.76,5.81l1.24,0.47l0.66,5.58l10.98,2.5l1.51,5.48l1.91,2.09l4.08,0.35l4.75,-2.42l2.47,2.51l5.15,1.94l5.25,5.43l3.21,1.66l2.31,2.68l2.25,0.44l1.76,2.18l3.69,2.23l1.01,2.17l3.12,2.7l0.95,1.87l1.68,0.82l1.8,-0.19l0.1,1.14l-0.73,0.9l-3.77,1.5l-0.5,1.01l0.62,1.34l-1.61,2.64l-0.88,-0.47l-1.08,0.83l-0.55,3.08l-2.16,0.4l-1.92,1.81l0.02,2.55l2.26,2.25l-0.09,2.65l-2.07,0.79l-10.66,7.46l0.06,3.85l2.31,4.59l0.79,3.37l-2.08,13.06l-127.42,0.05l-0.03,-89.06l-0.54,-19.42l-1.51,-4.21l-73.53,-0.39l47.3,-59.16l-0.11,-12.89l8.98,3.41l4.25,0.79l1.82,2.2l3.75,2.59l3.48,0.97Z", "name": "Chaco"}, "lr": {"path": "M178.8,316.25l5.86,-5.77l0.96,-3.41l3.1,0.73l4.95,-8.64l0.33,-1.71l5.12,-2.38l2.51,-8.37l12.43,0.96l8.75,-2.01l4.01,0.96l3.07,-1.75l2.55,0.67l-0.91,4.22l0.84,2.67l-0.78,3.63l0.4,1.43l1.33,0.78l3.06,0.31l3.27,3.27l5.64,0.92l2.78,2.41l6.92,-1.64l0.71,5.88l4.43,6.85l5.69,-2.06l23.39,0.82l4.14,-0.76l2.39,-2.68l2.8,-0.87l17.42,6.56l3.8,4.34l1.49,6.58l3.15,3.62l2.59,1.53l-1.98,3.81l0.91,2.0l10.94,5.75l14.78,13.59l1.56,2.94l0.1,4.3l1.1,4.98l7.27,16.77l7.42,14.4l-3.64,9.96l-1.9,3.43l-10.89,33.7l0.33,38.84l-6.01,0.66l-2.7,-1.09l-4.07,-0.37l-7.41,2.7l-6.9,0.41l-2.63,-0.94l-2.91,0.28l-1.94,-0.89l-2.43,0.62l-5.79,-1.84l-2.29,-4.91l-2.4,-1.24l-0.9,-5.71l-4.24,-1.13l-4.41,-4.26l-0.11,-3.17l-2.33,-5.1l1.97,-13.42l-2.5,-2.48l-0.12,-1.08l1.63,-5.73l-5.1,-9.32l-2.95,-1.61l-3.88,-5.68l-4.56,-3.75l-2.02,-3.18l-3.3,-2.06l-0.83,-2.92l-2.51,-3.9l-6.28,-4.68l-2.31,-2.92l-4.04,-2.13l-2.13,-2.7l-2.2,-1.43l-0.73,-1.84l-2.26,-2.26l-3.55,-1.62l-1.04,-2.13l-5.05,-3.36l-2.16,-2.58l-7.5,-2.17l-4.88,0.03l-4.39,-2.13l-5.63,1.52l-2.92,-0.68l-3.93,0.83l-1.32,-0.57l-0.07,-4.28l1.81,-3.41l0.03,-4.75l1.68,-2.33l-1.24,-2.66l-1.42,-1.4l0.07,-5.18l1.36,-2.08l2.14,-1.16l0.61,-1.59l-0.29,-1.32l-2.79,-2.86l-2.11,-4.85l-3.68,-3.35l-2.63,-7.54l-1.45,-1.55l-7.1,-5.6l-3.44,-0.17l-2.45,-2.51l-3.21,0.52l-4.05,-1.53Z", "name": "La Rioja"}, "se": {"path": "M380.4,328.49l-0.01,-1.74l1.14,-0.73l3.4,-5.24l0.33,-3.08l-0.32,-7.34l-3.98,-17.39l4.05,-0.78l2.03,-5.0l1.46,-0.62l-3.11,-8.78l0.39,-1.03l2.81,-0.75l1.33,-2.19l-1.3,-1.51l-2.7,-0.92l5.12,-5.65l2.84,-1.9l3.39,-7.56l1.33,-5.19l2.16,-2.86l2.33,-8.6l2.4,-0.75l1.71,-5.35l3.06,0.4l0.76,-0.66l-1.01,-11.39l1.75,-5.97l0.26,-6.38l2.04,-4.22l0.38,-3.36l10.23,-21.07l11.8,3.44l97.61,0.44l1.25,3.48l0.53,19.24l0.03,89.6l-16.68,103.35l-6.23,-15.33l-2.46,-1.73l-49.39,-0.26l-0.4,-1.99l-2.73,-0.72l0.17,-2.04l-0.6,-0.93l-2.9,0.13l-4.0,-1.07l-5.39,0.8l-3.4,-0.18l-1.93,-1.25l-3.46,-0.78l-0.97,-1.29l-3.36,-1.73l-0.63,-0.57l0.14,-2.31l-0.51,-0.68l-9.51,-2.47l-28.2,6.44l-6.56,-12.45l-1.96,-14.18l0.19,-4.05l-0.98,-10.46l-1.43,-1.67l-2.32,-1.15Z", "name": "Santiago del Estero"}, "sl": {"path": "M280.93,492.01l-0.24,-3.55l1.44,-1.44l4.82,0.96l6.25,-0.69l5.01,1.77l11.5,-0.59l6.1,1.9l2.54,-0.6l1.7,0.87l3.1,-0.26l2.66,0.94l7.25,-0.43l7.29,-2.68l3.62,0.34l2.95,1.12l10.57,-0.75l3.49,1.4l12.5,7.22l2.43,2.46l0.93,4.57l1.36,2.51l0.08,3.07l0.73,0.74l5.81,-0.32l6.04,-1.26l-0.08,6.16l2.15,5.87l-0.35,3.43l-1.44,4.61l-1.32,1.68l-1.3,6.7l-1.88,3.5l0.31,2.36l-1.63,3.37l0.52,2.42l-2.51,1.09l-2.0,3.84l2.02,38.23l-0.04,103.28l-68.2,-0.07l-0.18,-1.92l3.29,-19.31l1.57,-4.01l0.73,-7.79l-0.6,-3.98l0.6,-1.96l-0.86,-1.56l0.85,-3.8l-2.05,-5.83l0.21,-4.28l-1.2,-3.79l-5.44,-10.07l-2.12,-2.17l-1.48,-4.96l-0.3,-4.38l-1.41,-2.07l0.47,-1.12l-0.98,-6.52l0.72,-1.34l1.11,0.15l0.95,-1.05l0.55,-6.54l-1.48,-3.68l-1.9,-1.66l-1.09,-3.3l-3.87,-2.98l-4.01,-11.06l-5.91,-9.3l0.11,-3.14l-1.84,-6.87l-0.35,-12.19l-1.28,-3.45l0.89,-1.03l-0.5,-3.37l1.15,-3.46l-1.08,-3.07l-1.93,-2.44l-2.83,-11.18l-1.89,-1.87l-1.2,-4.35l-0.27,-11.91l0.94,-3.47l-0.33,-1.72Z", "name": "San Luis"}, "er": {"path": "M584.87,481.91l0.53,-1.96l7.05,-0.42l2.98,-1.31l2.88,-2.69l4.37,-5.72l4.12,-3.15l3.23,-4.51l1.41,-4.21l2.77,-2.75l7.23,-11.66l5.47,-7.25l2.75,-4.86l1.75,-8.07l0.34,-5.74l-1.99,-5.51l3.6,-0.2l3.09,-1.15l1.9,0.52l3.05,-0.67l6.76,1.83l10.61,-6.85l5.81,1.11l12.3,-3.72l3.48,1.54l3.11,0.07l8.56,2.25l1.56,1.36l2.27,3.91l4.69,3.96l1.3,4.81l2.3,4.14l8.03,7.21l0.48,5.46l-0.39,1.56l-3.19,0.44l-1.26,0.9l-0.37,1.27l2.19,3.29l0.31,1.98l-2.51,5.47l0.28,3.44l-2.7,3.58l-1.03,4.1l-3.19,2.18l-0.74,1.82l4.01,4.34l0.29,1.95l-3.07,9.61l-5.21,2.21l-1.79,2.74l2.03,2.95l0.54,3.39l-0.56,3.93l-1.28,2.96l4.03,6.3l-0.18,1.23l-2.8,3.83l-2.54,5.29l0.38,8.48l1.47,8.66l1.85,3.53l-0.97,3.93l0.56,3.37l-1.76,1.56l-1.36,0.28l-7.03,-0.98l-1.85,0.73l-0.76,1.06l-0.03,0.91l0.76,0.46l-0.89,5.34l0.9,3.11l-1.99,1.67l-2.19,3.75l-1.17,4.58l0.13,4.32l-0.92,5.27l0.45,3.38l3.58,5.72l0.66,6.76l-6.07,2.03l-1.9,-0.02l-6.31,-4.79l-3.13,-0.81l-8.18,-5.41l-6.08,-0.11l-1.58,-1.67l-1.36,0.18l-1.76,-3.9l-2.16,0.87l-3.51,0.0l-5.75,-4.22l-3.91,1.09l-1.48,-0.3l-5.8,-2.98l-3.97,-4.36l-4.04,-1.51l-7.57,-5.03l-5.79,-5.8l-3.58,-1.89l-3.05,-3.36l-4.6,-2.61l-2.46,-2.94l-1.54,-4.17l-1.62,-1.85l-2.36,-4.65l-1.35,-8.32l-2.83,-5.76l1.79,-5.22l-0.08,-5.03l1.33,-5.05l-0.24,-4.81l2.05,-4.4l-2.54,-5.11l-0.09,-2.13l2.05,-3.4l0.99,-4.98Z", "name": "Entre R\u00edos"}, "ba": {"path": "M507.92,939.49l-0.39,0.81l1.34,1.39l4.21,-2.12l-0.94,1.26l-0.77,3.95l-3.59,6.5l-18.35,9.08l-1.72,-0.07l-2.74,-5.4l-11.04,-9.98l-3.78,-1.41l-8.78,-1.01l-0.06,-246.87l0.68,-79.95l1.2,-1.32l73.55,-0.24l33.96,-35.54l1.69,-2.36l-0.33,-1.78l0.93,-1.51l2.73,-0.55l2.97,1.15l4.38,0.12l4.88,3.23l3.51,-0.36l1.68,-1.27l1.7,-3.33l0.91,-4.42l2.82,-2.51l0.33,-3.19l2.38,-1.29l0.66,-2.1l6.14,5.97l7.74,5.14l3.94,1.45l3.89,4.32l6.1,3.14l1.99,0.38l3.55,-1.07l3.29,2.95l2.48,1.22l4.07,0.01l1.5,-0.83l0.49,2.9l1.0,0.8l1.52,-0.06l1.8,1.7l5.84,0.03l8.12,5.38l3.03,0.76l4.57,3.95l2.02,0.96l2.46,0.05l6.06,-2.03l2.17,0.91l0.03,5.86l0.57,1.51l-3.29,3.93l-3.64,-0.29l-1.69,1.55l3.9,2.97l-0.47,2.3l-1.24,1.65l0.34,1.93l1.78,1.51l0.07,1.76l1.1,1.81l1.72,1.32l2.23,0.37l0.96,2.67l4.75,3.87l19.89,8.24l6.79,4.28l1.18,1.44l5.64,2.92l8.27,6.54l6.94,9.54l1.25,3.27l-0.27,1.55l-8.43,11.57l-2.5,4.51l-0.75,4.4l0.4,4.41l3.47,8.01l1.82,1.44l1.02,2.33l6.4,5.84l4.76,2.72l2.88,0.79l-0.56,0.96l0.6,0.84l4.21,-2.04l4.1,-0.04l-0.08,-1.96l0.57,0.39l1.82,3.94l-0.08,6.27l1.23,4.08l0.16,14.97l-9.85,13.71l-7.56,13.0l-4.9,6.31l-6.45,5.69l-8.12,9.81l-1.97,4.47l-0.6,4.52l0.58,1.4l-0.18,2.45l-1.04,2.2l-1.48,1.55l-12.05,7.35l-6.97,3.8l-2.26,0.6l-3.97,2.68l-7.83,3.24l-4.02,0.61l-6.69,2.88l-7.3,1.54l-9.53,3.02l-5.54,2.5l-25.65,4.72l-7.47,2.87l-4.13,-0.0l-44.04,7.2l-6.82,-0.39l-5.7,1.72l-12.83,-0.97l-4.15,1.52l-6.76,-0.89l-2.36,-1.38l-5.2,0.68l-9.93,-2.97l-4.32,-5.96l-7.34,-0.55l-1.95,-0.72l-1.35,0.71l-0.71,1.33l0.78,4.72l1.74,-0.03l0.22,3.02l2.2,0.46l-0.21,1.36l-1.42,1.08l-1.85,4.45l0.83,1.48l0.04,3.65l1.79,1.7l-1.15,1.54l1.79,1.28l5.69,0.56l5.24,2.78l0.87,1.51l-0.97,1.24l-3.98,-2.92l-2.1,-2.52l-4.7,0.58l0.63,2.04l2.06,0.58l1.41,2.49l1.94,1.69l4.31,1.18l0.15,0.78l-0.96,1.5l-2.0,17.22l-1.82,1.03l-2.93,-0.46l-2.89,-1.96l-0.77,0.22l-0.25,1.04l0.71,1.26l-0.96,0.94l-0.05,2.95l-2.32,6.99l1.22,3.27l-0.9,3.93l-0.31,0.79l-3.72,2.06l-1.86,3.36l3.5,8.73l3.93,1.96l0.3,1.73l1.85,1.9l0.86,-0.14l0.06,2.68l-1.72,-0.29l-1.47,-1.46l-0.69,0.2l0.62,2.71ZM526.47,860.53l0.79,0.52l0.69,-0.49l1.04,3.85l-6.42,-2.9l-2.93,-3.99l6.05,1.6l0.79,1.41ZM519.12,853.16l-0.45,0.42l-0.44,-0.18l0.15,-0.28l0.74,0.04ZM520.02,853.2l3.01,0.5l1.2,1.06l-1.16,0.39l-3.05,-1.95Z", "name": "Buenos Aires"}, "sa": {"path": "M231.8,149.19l-0.64,-2.0l-3.17,-1.41l-1.12,-3.23l3.33,-8.36l1.55,1.09l0.7,-0.15l2.44,-6.11l3.1,-0.06l3.64,-5.33l39.89,-16.94l1.27,-1.75l3.69,-11.75l4.27,3.32l2.85,0.79l3.5,3.64l0.6,1.47l1.85,0.6l3.33,4.56l4.77,2.33l4.31,4.86l5.08,2.01l3.1,-0.14l1.73,-0.88l2.42,-3.16l1.47,-0.79l1.72,-5.01l0.64,-15.2l-3.1,-9.67l1.28,-5.89l0.63,-0.67l4.02,1.11l2.11,1.31l1.75,0.03l7.8,5.16l0.06,5.7l-0.49,1.17l0.56,1.48l-1.51,2.33l-0.25,3.86l1.47,2.69l-0.25,2.05l2.1,2.74l1.16,0.2l1.55,-0.75l2.91,2.61l3.13,1.71l0.4,4.67l7.47,10.91l2.4,1.5l2.8,-0.42l2.23,1.86l7.02,2.01l4.81,-2.23l0.56,1.15l3.96,3.13l6.7,2.62l1.46,-0.6l3.03,-6.17l9.28,7.46l1.13,-0.67l1.44,-3.01l2.92,-2.72l2.56,-0.74l1.34,-1.73l3.99,-0.48l1.46,-0.9l4.03,-5.07l2.48,-5.74l-1.16,-31.55l-0.52,-0.91l-1.68,-0.39l-6.85,0.16l-1.57,1.76l-1.47,3.29l-4.91,-5.14l-3.59,-1.35l-1.34,-1.18l-4.33,0.6l-2.1,1.66l-3.06,-0.32l-0.46,-2.75l-2.92,-5.89l-3.96,-2.4l1.6,-8.23l-0.31,-2.26l-2.29,-2.3l-5.71,-0.36l-1.75,-1.42l-1.75,-4.83l-0.77,-5.24l-0.01,-2.11l0.92,-2.38l-1.99,-2.18l-1.58,-0.15l0.42,-3.66l4.3,-8.68l0.21,-4.65l1.99,-5.39l7.02,-0.08l8.33,1.9l3.25,1.76l4.62,0.18l3.03,1.49l1.8,2.64l-1.27,3.31l2.12,2.05l-0.32,1.76l1.6,2.43l3.01,3.16l-0.91,1.75l-0.17,2.98l4.41,5.14l-0.21,2.28l0.74,2.97l1.34,0.83l0.66,-0.39l1.41,-5.25l0.04,-3.45l1.91,-6.94l4.05,-4.78l3.34,-8.47l1.61,-1.41l2.14,-6.19l1.57,-1.42l1.25,-2.8l5.1,0.07l3.4,2.25l3.05,-2.24l1.58,-0.27l37.19,0.22l0.88,5.74l4.85,3.2l0.87,1.69l1.32,0.53l-0.3,2.14l0.5,0.8l2.9,0.94l1.8,1.96l2.44,0.85l1.38,1.71l4.17,2.53l0.31,90.89l-47.74,59.69l-23.37,-0.33l-10.3,-3.23l-2.27,-0.1l-10.69,21.7l-0.43,3.49l-2.29,5.44l-8.99,0.21l-3.3,-0.64l-7.86,3.01l-3.12,-1.56l-2.16,-0.0l-8.4,-3.27l-2.89,-4.67l-5.88,2.09l-10.22,-2.17l-1.18,1.06l-0.78,8.66l-0.65,1.12l-14.67,-2.22l-1.74,-0.88l-2.83,-3.09l-2.7,-0.26l-1.52,0.74l-1.28,2.12l-1.8,1.23l-2.62,5.89l-1.13,0.71l-5.69,-5.86l-3.88,-7.83l-7.35,-9.74l-1.45,-3.72l0.21,-3.6l2.64,-2.26l7.78,-0.46l3.8,-3.13l1.21,-6.56l-2.32,-3.65l-0.64,-4.27l-1.15,-2.23l-2.45,-0.43l-54.4,0.67l-27.73,-5.23l2.22,-0.73l0.72,-2.13l-3.42,-4.03l0.25,-2.22l-1.43,-1.87Z", "name": "Salta"}}});

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