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
            /** Add Germany Map Data Points */
jQuery.fn.vectorMap('addMap', 'germany_en', {"width":592,"height":801,"paths":{"th":{"path":"m312.19,352.19c-2.73,0.22 -2.22,4.11 -3.64,5.97 -1.01,2.7 -4.71,2.26 -7.13,2.91 -2.52,0.84 -2.65,-2.93 -5,-3.11 -2.02,-1.67 -5.36,0.2 -4.98,2.55 -0.62,4.82 -6.22,6.91 -9.72,9.65 -2.98,3.28 -7.8,2.07 -11.1,4.73 -2.55,1.59 -5.81,3.14 -7.87,5.03 0.64,3.74 1.96,8.43 6.44,8.84 3.41,0.33 2.07,4.91 5.71,5.17 2.12,1.11 4.61,1.57 6.04,3.67 2.61,-0.18 1.95,2.83 0.13,3.41 -0.75,1.55 1.21,2.98 -0.06,4.88 -2.65,1.33 -1.59,-4.91 -4.58,-2.96 -2.15,1.14 2.24,4.28 1.18,6.62 -0.73,2.87 3.35,2.38 3.93,4.97 0.22,2.4 -1.82,4.2 -4.4,4.04 -1.89,0.05 -3.04,-2.14 -5.19,-1.69 -2.29,-1.13 -3.6,1.4 -2.29,3.19 0.92,3.27 2.06,6.86 1.64,10.24 -1.04,2.07 -1.35,6.09 -4.56,5.07 -2.5,-0.54 -3.05,2.78 -2.17,4.43 0.33,2.11 -1.94,1.58 -0.64,3.71 0.2,3.37 -2.96,5.74 -4.05,8.57 -1.46,3 3.1,3.73 4.61,2.61 -1.8,-1.67 -0.95,-4.04 1.83,-4.18 2.21,-0.46 5.52,-0.43 5.9,2.47 2.29,2.61 -2.68,2.96 -1.96,5.59 0.5,1.86 -0.79,8.31 0.95,7 1.72,-3.38 5.8,-2.18 8.88,-2.88 2.69,0.85 3.11,5.24 6.43,5.5 3.89,0.66 4.77,4.88 6.09,7.93 -0.55,3.14 2.45,3.82 4.54,1.98 0.31,5.02 5.89,6.45 10.06,7.19 -0.2,3.63 -1.27,7.43 0.53,10.84 2.35,0.1 5.18,2.71 7.07,1.85 0.03,-1.3 -1.32,-4.82 1.27,-4.26 2.07,-0.06 5.3,2.5 6.66,0.25 0.29,-2.71 -3.43,-1.58 -4.54,-3.52 -1.94,-1.64 -5.47,-2.54 -4.67,-5.79 -0.91,-3.55 3.89,-3.37 6.02,-4.77 2.87,-1.54 6.27,-0.65 9.38,-0.79 1.61,1.84 2.4,4.9 5.49,4.49 2.33,1.02 3.21,-1.38 4.71,-2.1 2.52,-0.39 4.79,2.85 4.64,5.17 -2.32,0.34 -2,2.87 -0.04,3.79 1.25,1.09 4.62,-1.62 5.78,-2.97 1.07,-2.95 1.98,-5.92 0.84,-9.01 0.33,-2.69 -1.49,-4.1 -2.06,-6.05 -0.35,-1.26 0.15,-3.52 1.89,-2.72 2.51,-0.54 3.16,-3.11 5.03,-4.31 2.41,-0.31 6.41,-0.25 6.75,2.81 -1.09,1.47 -1.71,2.75 -1.31,4.94 2.04,1.91 4.67,0.65 4.88,4.5 0.54,1.96 3.79,3.19 4.05,0.56 1.06,-1.74 3.34,-0.66 4.25,0.63 6.13,-1.07 12.67,-0.94 18.25,-3.97 -1.68,-0.65 -2.19,-2.46 -0.38,-3.31 1.4,-0.73 5.24,-2.7 2.32,-4.13 -1.1,-2.24 -4.24,-0.26 -4.55,-3.08 -1.3,-2.44 2.29,-4.28 3.11,-6.33 2.98,-0.71 2.97,-4.68 5.91,-5.31 1.95,1.54 1.58,4.54 1.16,6.72 1.66,-0.64 6.6,0.71 6.33,-0.74 -3.05,-0.17 -0.61,-3 1.2,-3.1 2.57,-1.22 5.33,-2.23 7.87,-3.14 1.72,-1.51 4.46,-4.54 0.25,-4.48 -1.74,-1.64 -3.31,-4.12 -3.69,-6.5 0.38,-2.82 0.28,-5.87 1.72,-8.41 0.89,2.58 5.82,0.77 5.81,-1.09 0.71,-1.83 4.18,-2.99 5.41,-0.97 2.56,-0.68 0.59,-4.69 3.44,-5.44 3.25,-1.87 7.85,-0.32 10.53,-2.97 -2.57,-1.55 -0.79,-6.34 -4.47,-6.16 -2.74,-0.84 -6.28,-2.6 -5.42,-6.03 0.8,-2.88 -3.5,-2.46 -5.15,-3.47 -2.87,-0.81 -6.3,-2.89 -8.61,0.02 -2.54,2.1 0.01,3.58 1.21,5.21 -0.17,3.21 -2.39,6.03 -3.68,8.9 -1.08,1.71 -2.42,1.35 -2.66,-0.64 -2.24,-4.02 -1.09,1.94 -3.66,-0.66 -2.71,-1.39 -5.95,-1.32 -8.59,0.19 -0.02,-4.6 -5.04,-6.77 -8.31,-9 -2.72,-0.06 -5.6,1.79 -8.33,0.1 -2.65,-0.52 -5.05,-1.27 -4.7,-4.45 -2.02,-1.11 -5.86,-2.21 -7.53,-1.16 -1.29,1.98 -3.84,1.06 -5.84,1.31 -1.81,-1.01 -2.04,-3.39 -2.5,-5.41 3.14,0.3 2.23,-3.59 0.51,-4.83 -1.37,-2.03 -4.15,0.89 -5.53,-1.6 -1.69,-0.96 1.02,-5.32 2.36,-2.94 1.62,-1.63 2.76,-3.73 4,-5.66 -0.78,-1.58 -4.12,-2.02 -3.47,-4.09 -2.15,-0.17 -2.01,-2.77 -1.75,-4.31 -4.91,-2.77 -10.54,-0.91 -15.84,-1.69 -2.69,-0.42 -5.41,-2.8 -8.03,-1.28 -1.99,0.45 -4.28,-1.52 -3.68,-3.5 0.86,-2.86 -0.76,-4.88 -2.35,-7.1 -1.55,-2.64 -4.98,-6.28 -2.16,-9.19 -2.47,-3.43 -7.17,-3.03 -10.89,-3.21 -0.41,0.09 -0.82,0.18 -1.23,0.27z m95.09,106.63c0.36,0.47 0.77,-0.65 0,0z","name":"Thüringen"},"sh":{"path":"m173.41,0.78c-1.96,2.02 -2.32,5.26 -3.72,7.72 0.61,-2.46 2.87,-3.44 4.94,-4.31 1.37,-2.31 1.87,-2.9 -1.22,-3.41z m-4.63,9.69c-1.37,3.14 -2.78,7.11 -2.63,10.16 1.42,-1.81 3.12,-2.33 4.66,-0.67 1.41,1.35 2.9,1.87 4.52,0.27 2.61,-1.53 -0.74,-0.41 -1.92,-1.16 -2.06,-1.81 -4.59,-3.55 -3.89,-6.71 -0.29,-0.68 0.25,-4.89 -0.73,-1.88z m16.78,8.5c-1.27,2.96 0.71,4.89 2.59,6.89 3.39,3 2.55,7.98 4.79,11.67 0.62,3.55 5.38,3.23 6.46,6.57 3.09,5.18 8.01,9.55 9.53,15.49 -0.32,3.65 -4.55,4.93 -6.72,7.41 -1.75,1.07 -3.73,2 -5.62,0.78 -2.44,0.59 -7.26,-0.45 -7.37,2.95 0.9,2.44 -1.97,3.88 -3.95,4.18 -1.94,-2.13 -2.52,-1.01 -2.77,1.45 -0.87,2.9 3.21,3.7 4.93,4.64 1.92,-3.3 6.38,-1.94 9.56,-2.06 2.21,2.21 1.18,5.9 0.57,8.61 -1.14,2.05 -2.44,4.23 -0.74,6.43 0.5,2.36 2.45,2.12 4.01,1.08 3.24,-0.45 3.19,4.26 4.78,6.16 2.07,2.16 -0.11,6.53 -3.11,5.16 -1.14,-1.75 -5.79,-1.46 -5.26,0.73 2.63,2.93 2.85,7.1 5.04,10.2 1.56,1.12 3.1,3.53 5.09,1.5 1.43,0.34 0.36,3.67 3.4,2.47 5.03,0.4 10.67,-0.76 14.8,2.92 4.21,3.5 4.64,9.55 8.23,13.45 3.79,1.81 5.25,6.01 5.59,9.84 1.82,3.22 5.7,4.78 8.7,6.74 2.98,1.76 2.45,-2.04 3.3,-3.87 0.32,-3.07 2.7,-3.68 2.95,-0.51 1.97,4.21 4.12,0.09 5.74,-1.98 1.13,-1.81 1.09,-3.61 3.84,-2.85 2.75,1.63 4.73,-1.94 6.94,-3.16 -0.04,-2.48 1.02,-3.47 3.73,-4.47 1.51,-1.18 4,-1.93 4.95,0.16 -0.92,3.02 -1.41,6.74 1.26,9.04 1.1,1.47 -0.59,3.76 -1.58,5.02 -3.72,1.55 -2.94,7.3 0.6,8.57 3.05,0.71 1.81,2.28 4.18,4.34 1.9,2.3 3.7,4.33 6.71,5.17 4.24,1.47 7.8,5.01 12.4,5.13 1.57,-2.96 0.71,-7.47 3.24,-9.94 1.76,-0.99 3.85,1.15 5.23,-1.34 4.78,-3.66 7.65,-9.11 11.5,-13.72 0.07,-2.89 2.79,-4.69 1.09,-7.69 -1.21,-2.36 -3.12,-1.39 -5.13,-1.38 -2.37,-1.11 -4.33,-3.37 -5.88,-5.25 0.57,-2.78 0.94,-5.55 -0.72,-8.01 -1.68,-4.33 3.4,-6.71 6.26,-8.75 2.76,0.39 4.62,-1.55 2.8,-4.28 -2.57,0.04 -0.18,-3.45 -2.47,-3.84 -2.6,1.03 -5.44,-0.16 -6.16,-2.94 -1.95,-2.52 -0.1,-5.31 2.05,-6.91 1.09,-2.74 3.32,0.44 5.2,-0.9 2.94,-4.13 6.93,-7.19 11.06,-10.05 2.63,-1.56 0.21,-5.06 0.5,-7.57 -0.21,-3.63 -1.2,-7.39 -0.01,-10.84 0.18,-2.96 -5.24,-0.47 -7.49,-1.07 -5.13,1.62 -7.3,9.04 -13.4,8.34 -3.13,0.69 -4.64,-2.86 -6.1,-4.84 -4.97,-2.87 -10.19,-5.54 -15.47,-7.76 -2.99,-1.52 -6.08,0.55 -8.5,2.13 -0.97,2.39 -2.38,4.59 -2.88,7.13 -1.56,-1.44 -3.01,-3.67 -0.84,-5.3 1.62,-1.77 -1.68,-4.84 0.9,-6.58 0.02,-1.27 -2.39,-3.21 -3.97,-2.94 -4.31,0.8 -8.65,1.68 -12.59,3.47 -2.43,1.23 -4.15,-0.86 -4.81,-2.94 1.24,-1.68 2.97,0.32 4.34,-1.22 3.92,-1.6 8.22,-4.79 7.48,-9.56 -0.08,-4.17 0.91,-8.43 -1.14,-12.32 -1.21,-3.12 -1.73,-8.59 -5.28,-9.18 -0.59,1.71 -1.3,5.52 -3.94,3.91 -3.94,-2.44 -5.62,-7.87 -10.62,-8.75 -2.4,-0.95 -5.92,-1.49 -2.94,-4.34 -2.83,-1.32 -4.46,2.91 -6.75,4.06 -1.81,0.77 -3.7,1.77 -5.55,1.1 -2.17,-0.1 -2.78,3.34 -5.32,2.53 -2.44,-0.17 -5.39,0.15 -5.47,-3.04 1.26,-2.25 -1.79,-2.35 -3.37,-3.29 -2.69,-1.82 -6.3,0.87 -8.88,-1.52 -3,-2.97 -8.01,-2.63 -12.09,-2.77 -2.73,-0.05 -5.94,1.35 -8.19,-0.63 -2.53,-0.79 -2.34,1.14 -3.28,2.91z M165.38,30.69c0.26,2.81 0.4,-8.09 0.17,-2.47 -0.06,0.82 -0.12,1.65 -0.17,2.47z m13.5,1.44c-2.38,0.11 -5.93,-0.19 -6.48,2.95 -0.84,2.31 2.84,2.19 4.01,3.33 2.08,0.12 5.59,1.6 6.02,-1.46 1.83,-2.49 -0.07,-5.86 -3.55,-4.82z m-11.97,6.41c-1.92,2.44 0.88,5.14 2.25,6.97 3.61,0.13 0.82,-1.45 -0.03,-3.16 -0.91,-0.75 -0.95,-5.89 -2.22,-3.81z M181.53,44c-3.16,2.07 3.2,-1.05 4.68,-0.94 3.57,-2.86 -4.04,0.86 -4.68,0.94z m-1.31,6.22c-3.19,-0.54 3.33,2.8 0.63,-0.13 -0.17,-0.12 -0.42,0.08 -0.63,0.13z m8.44,2.63c-1.5,0.95 -5.02,0.69 -5.3,2.69 0.04,2.05 2.12,3.65 4.01,2.44 0.45,-0.74 3.48,-5.42 1.28,-5.13z m142.28,2.25c-2.22,2.09 -3.42,5.93 -2.84,8.5 1.81,-1.93 6.45,-1.17 5.53,2.13 0.75,2.01 5.23,1.5 7.53,1.68 3.9,0.79 4.95,-0.34 2.64,-3.56 -1.78,-3.59 -4.09,-7.7 -8.61,-7.85 -1.38,-0.32 -3.03,-0.37 -4.25,-0.9z m-134.34,2.94c-1.42,2.56 1.08,4.09 3.5,3.69 1.95,-0.37 3.87,-2.9 3.63,-4.91 -2.37,-0.51 -4.91,-1.04 -6.76,0.98l-0.36,0.24z M140.06,88.88c-0.28,2.81 2.92,0.39 0,0z m48.13,13.38c-1.61,1.32 0.69,2.85 0.06,-0.03l-0.06,0.03z","name":"Schleswig-Holstein"},"st":{"path":"m367.5,207.72c-2.53,0.49 -2.68,6.11 -5.69,3.88 -1.54,-0.27 -2,4.74 -0.62,6.28 -1.83,0.03 -4.69,1.23 -5.84,3.45 -2.16,1.75 -5.06,2.95 -7.73,3.81 -1.55,-0.32 -3.98,0.25 -4.38,-1.66 -3.96,-2.32 -9.18,-1.22 -13.69,-1.78 -0.82,1.11 0.07,3.08 -1.73,3.89 -1.82,3.69 -6.1,1.61 -9.28,2.54 -2.64,-0.11 -4.45,1.7 -3.62,4.38 -0.45,3.07 1.59,5.83 2.38,8.76 4.58,2.95 6.91,8.32 9.22,13.03 -1.02,4.14 2.73,7.03 5,9.88 -2.35,-0.75 -6.67,0.93 -4.41,3.78 2.13,2.7 4,5.66 7.03,7.25 2.19,1.61 0.12,4.97 -2.22,4.59 -1.88,2.15 -0.66,5.73 1.52,7.3 1.12,1.37 4.12,3.9 1.64,5.39 -1.82,-0.07 -4.08,1.44 -3.31,3.44 0.85,1.22 3.42,-0.32 2.88,2 0.05,3.3 -3.89,4.53 -5.42,6.71 -0.9,2.3 0.67,6.76 -2.83,4.48 -2.5,-0.5 -4.36,0.86 -6.64,1.31 -3.5,0.14 -7.17,-0.75 -10.56,0.56 0.56,2.46 -2.44,4.29 -4.71,3.94 -2.29,1.2 4.79,4.03 4.2,5.21 -3.3,0.45 -2.03,3.05 0.01,3.98 1.13,2.32 -0.87,4.55 -2.86,5.36 -2.94,1.53 -1.17,5.3 -1.3,7.86 2.06,2.6 4.65,5.37 5.72,8.78 -0.64,2.04 0.85,6.26 3.56,4.75 3.65,0.5 8.21,-0.2 10.69,3.16 4.64,-2.48 0.38,1.08 -0.35,3.49 0.67,3.87 3.9,7.06 5.79,10.42 0.02,2.22 -1.14,5.56 1.78,6.09 2.2,-1.04 4.22,-0.48 6.44,0.45 5.84,2.46 12.54,-0.89 18.17,2.38 2.32,0.62 -0.45,4.34 2.28,4.54 1.79,0.31 -0.33,2.19 2.35,3 1.69,0.92 2.02,2.61 0.5,3.94 -1.45,1.35 -2.21,4.99 -4.56,4.59 -2.63,-0.91 0.09,3.99 2.28,1.66 2.83,0.66 5.62,4.8 3.25,7.41 -2.57,1.08 1.05,5.18 3.56,3.71 1.96,-0.79 2.91,-2.94 5.65,-1.43 2.6,0.08 6.05,0.91 5.78,4.15 1.33,1.52 4.58,2.03 6.72,2.37 2.49,-0.44 5.14,-1.91 7.2,0.43 2.77,1.74 6.17,3.82 6.94,7.21 2.79,-1.13 5.73,-0.73 8.41,0.53 1.23,-2 2.73,-1.49 3.69,0.66 0.59,3.07 2,-0.72 2.48,-1.83 0.83,-2.27 3.92,-5.75 0.2,-7.01 -1.99,-2.12 2.54,-4.35 -0.47,-5.52 -3.54,-1.32 0.06,-3.71 -3.77,-3.68 -1.13,-1.82 -0.14,-5.31 -0.45,-7.77 0.09,-3.62 -2.36,-6.17 -3.27,-9.5 -2.24,-2.8 3.78,-1.95 2.18,-4.77 -0.27,-3.83 -1.97,-7.24 -2.66,-10.91 1.12,-2.57 2.7,-5.07 2.75,-7.88 2.68,-2.78 6.09,-4.94 9.75,-6.06 4.81,0.08 9.58,-1.34 13.94,-3.25 0.29,-3.17 3.92,1.99 5.64,-1.8 0.58,-1.59 1.27,-4.54 3.8,-3.39 2.22,1.16 4.46,1.71 7.03,1.3 4.79,-0.31 9.85,0.27 14.45,-1.01 2.63,-2.16 7.03,-3.34 7.55,-7.13 -2.51,-3.21 -2.57,-7.84 -4.05,-11.66 -1.56,-2.32 0.46,-2.56 1.11,-3.49 -1.21,-1.69 -2.84,1.88 -4.93,0.87 -3.35,0.33 -4.21,-4.14 -7.34,-4.73 -1.95,-1.81 -4.21,-0.39 -6.46,-1.61 -1.95,-1.37 -5.09,-1.98 -5.86,-4.32 -2.25,-0.71 -4.5,-3.34 -6.75,-2.88 0.04,3.1 -4.02,3.62 -6.31,2.65 -6.29,-1.76 -13.04,-4.4 -16.59,-10.25 -1.82,-2.88 -4.27,-5.73 -5.88,-8.53 1.69,-2.65 1.92,-5.52 1.61,-8.56 0.08,-3.49 1.94,-6.54 3.57,-9.44 -0.44,-3.76 -2.35,-8 0.31,-11.34 1.69,-3.42 -2.77,-5.17 -4.84,-4.84 -0.77,1.84 -4.03,2.12 -4.73,-0.07 -3.16,-2.02 -0.66,-5.45 -0.28,-8.33 0.25,-2.72 1.68,-3.75 3.82,-4.6 0.52,-2.45 0.69,-5 -1.29,-6.86 -2,-2.13 -0.72,-5.29 -0.24,-7.76 2.19,-2.1 2.75,-4.3 1.28,-7.4 -0.37,-2.87 -3.52,-1.27 -5.2,-0.49 -2.2,0.23 -1.98,-4.35 -5.66,-2.08 -3.04,0.71 -6,0.64 -8.83,-0.79 -2.04,-1.1 -6.47,-1.05 -6.16,-4.18 0.48,-0.96 2.72,-2.17 0.45,-2.84 -2.36,-0.92 -4.97,-4.41 -7.35,-1.78 -2.26,0.12 -3.78,-2.34 -5.44,-3.56 -1.33,-1.14 2.25,-2.99 -0.03,-2.78z m-35.72,88.19c-0.1,0.03 0.04,0.06 0,0z","name":"Sachsen-Anhalt"},"sn":{"path":"m438.91,347.22c-0.71,1.7 -1.23,3.74 -3.22,4.5 -2.58,1.63 -3.52,-1.1 -5.94,1.53 -4.3,1.22 -8.55,2.77 -13.09,2.53 -3.01,1.74 -7.34,3.17 -8.45,6.62 0.03,3.26 -3.77,5.91 -1.75,9.19 1.33,3.2 1.78,6.8 2.19,10.31 -4.06,0.29 -2.18,3.87 -0.74,6.17 2.24,3.72 1.36,8.42 1.53,12.58 2.6,-0.28 2.73,2.06 3.18,3.2 1.51,2.44 3.44,1.13 5.41,0.39 3.7,1.5 8.18,1.88 11.41,4.16 0.74,1.94 -0.81,4.85 2,5.77 1.72,1.99 6.37,0.62 6.03,4.01 -0.35,2.66 3.75,3.98 1.22,5.97 -3.58,1.98 -8.34,0.37 -11.41,3.34 -0.07,2.05 -0.66,4.73 -3.19,4.69 -0.84,-2.38 -4.84,-0.74 -3.91,1.56 -2.16,0.55 -4.73,2.38 -6.75,1.41 -0.26,3.26 -1.99,6.93 0.66,9.67 0.13,3.51 6.2,1.64 4.46,5.11 -1.54,2.13 -3.26,4.42 -6.11,4.51 -2.19,1.15 -4.93,1.82 -6.85,3.17 1.14,0.4 3.92,-0.58 2.97,1.81 -1.3,0.56 -2.71,1.18 -4.15,1.04 -1.87,-0.95 -6.83,1.68 -5.71,-1.56 0.5,-1.28 0.39,-7.08 -1.74,-3.97 -0.56,2.99 -4.53,3.58 -5.56,6.44 -1.97,1.1 -1.24,4.78 1.19,3.64 1.33,1.03 5.21,3.22 2.79,5.13 -0.59,1.68 -5.69,2.39 -2.69,4 2.14,0.67 3.79,2.61 5.05,4.37 -0.72,2.68 -0.54,4.28 2.54,4.44 2.89,0.5 5.02,2.48 7.96,1.72 3.8,-1.14 4.85,3.42 6.85,5.61 1.23,2.16 4.76,5.08 2.59,7.58 -0.49,1.72 3.93,3.14 3.09,0.38 -2.48,-2.46 -0.08,-6.44 1.28,-8.97 2.86,-4.57 6.53,-8.74 9.94,-12.84 4.56,-2.02 9.99,-0.84 14.06,-4.03 2.14,-0.66 4.2,-3.73 6.38,-3.05 2.63,1.52 5.07,3.45 7.78,4.83 2.07,-1.12 5.11,-3.24 4.13,-5.91 0.2,-2.04 -0.2,-5.69 2.84,-5.24 2.59,-0.29 5.2,-0.72 7.63,0.55 2.91,-0.54 1.72,-4.96 3.88,-6.45 2.35,-2.97 5.63,-5.26 8.68,-7.26 2.67,-0.81 5.51,3.8 7.01,0.39 1.65,-1.64 3.72,-4.3 2.58,-6.74 3.93,-2.17 7.47,-5.47 12.25,-5.22 2.33,-0.49 4.94,-0.78 7,0.62 2.41,-0.15 5.15,-2.09 4.01,-4.81 -1.95,-3.53 3.27,-1.43 5.18,-3.05 2.77,-1.08 6.09,-1.25 7.96,-3.69 5.86,-2.9 11.49,-6.39 17.78,-8.32 1.88,-3.11 -0.76,-3.48 -3.2,-3.83 -2.51,-0.45 -4.28,-2.72 -5.9,-4.48 1.17,-2.33 1.01,-5.72 3,-7.44 2.01,-0.54 2.32,2.64 4.53,2.3 2.11,1.26 6.52,1.34 7.5,-0.58 -0.17,-3.74 3.64,0.67 5,1.7 3.7,2.16 4.3,6.67 5.45,10.42 1.49,2.62 -2.09,6.06 2.42,6.33 2.67,0.89 5.37,2.57 8.28,1.87 0.47,-3.78 1.26,-7.7 4.06,-10.39 2.84,-3.18 3.04,-7.91 3.71,-11.62 2.05,-4.17 1.85,-9.14 2.71,-13.74 0.26,-3.07 0.84,-6.1 1.99,-8.91 0.22,-5.15 -3.62,-9.39 -5.25,-14.09 -0.63,-2.47 0.48,-5.37 -1.69,-7.4 -2.96,-2 -6.81,-2.81 -10.16,-4.16 -2.63,0.45 -5.28,-0.92 -5.64,-3.77 -0.41,-2.32 0.72,-4.39 -0.77,-0.54 -0.78,2.23 -4.07,1.99 -5.91,1.44 -0.89,-2.72 -3.76,-2.22 -5.89,-1.05 -2.43,0.03 -4.2,1.93 -3.78,3.04 -2.98,-1.35 -5.85,1.55 -8.48,2.42 -3.55,-1.67 -7.51,-1.35 -11.28,-1.56 -3.58,3.73 -3.22,9.41 -5.54,13.67 -1.24,3.16 -4.34,3.42 -7.26,3.89 -3.26,1.02 -6.88,-0.1 -9.67,2.35 -1.59,0.79 -4,-0.13 -5.49,-0.56 -4.01,0.9 -8.8,0.36 -12.18,-2.44 -2.57,-1.34 -4.55,-3.47 -6.76,-5.28 -2.23,1.37 -5.63,2.37 -6.56,4.87 -0.02,1.86 -4.09,1.87 -5.44,1.29 -1.42,-2.13 -2.64,-3.94 -1.26,-6.61 0.56,-3.54 0.3,-7.09 -1.63,-10.2 -0.72,-1.89 -2.32,-5.98 -4.72,-4.31 -2.79,1.33 -2.48,-5.48 -5.68,-3.53 -5.59,0.15 -11.31,0.77 -16.84,0.31 -1.25,-0.57 -2.44,-1.63 -3.94,-1.22z","name":"Sachsen"},"sl":{"path":"m63.72,553.88c-2.9,2.18 -6.1,2.82 -9.5,4.44 -3.47,4.51 -10,4.1 -15.06,5.38 -4.6,0.18 -8.97,-1.26 -13.22,-2.78 -2.47,1.73 -0.51,5.04 -0.84,7.5 1.8,0.96 4.08,-1.32 5.97,0.4 2.44,1.62 5.28,3.2 6.78,5.81 -3.49,0.44 0.05,4.79 -0.09,6.94 1.05,3.41 4.13,4.95 6.56,7.16 1.79,1.94 0.3,5.34 3.04,6.13 2.43,1.92 -2.53,4.66 1.39,5.86 2.37,0.12 6.25,2.27 7.13,-1.09 -0.35,-2.25 -3.03,-3.71 0.38,-4.78 4.42,0.26 10.1,1.27 11.81,5.94 0.51,1.58 -0.22,5.5 1.56,5.84 2.33,-0.7 1.95,-7.32 3.65,-3.1 1.02,1.94 2.67,2.87 4.44,1.6 2.61,-0.08 5.35,0.47 7.44,1.84 0.63,-1.3 5.37,-2.76 3.56,-3.91 -1.62,-2.52 -4.36,-5.17 -3.81,-8.41 1.42,-2.72 5.03,-3.05 6.69,-5.31 0.32,-2.19 -0.19,-4.41 0.63,-6.91 -2.49,1.08 -4.55,-2.01 -6.84,-2.72 1.25,-2.57 -1.08,-3.33 -2.41,-4.88 -1.38,-2.57 3.05,-1.81 2.04,-4.46 0.15,-3.03 0.9,-7.08 -0.66,-9.48C81.13,563.37 78.01,559.23 75,558.25c-1.82,-1.1 -4.05,-5.12 -6.16,-3.76 -1.8,1.27 -2.93,1.15 -3.06,-0.42 -0.68,-0.01 -1.4,-0.33 -2.06,-0.19z","name":"Saarland"},"rp":{"path":"m124.22,422c-3.08,1.37 -2.76,4.11 -2.15,6.91 -0.74,2.27 -2.92,4.57 -5.35,5.28 1.82,2.98 -1.68,6.02 -4.55,6.28 -3.87,1.42 -8.15,2.76 -11.74,4.31 -2.53,-1.67 -5.28,-0.25 -4.24,2.84 0.38,2.78 -1.77,4.53 -4.33,4.8 -2.21,0.9 -4.57,1.03 -6.93,0.89 0.24,-3.01 0.16,-2.77 -0.66,-0.16 -2.61,2.5 -6.78,2.21 -10.16,3.14 -1.7,1.36 -3.59,4.13 -6.33,3.09 -1.84,0.93 -1.47,5.36 -2.5,7.61 -0.31,2 -3.88,3.46 -5.32,1.71 -2.49,-2.13 -5.07,1.92 -3.92,4.39 -1.32,2.14 3.87,6.32 1.33,6.03 -2.57,-0.38 -4.98,1.47 -7.53,-0.25 -1.87,-0.86 -4.14,-1.17 -5.28,-3.06 -3.07,1.11 -6.64,2.41 -9.75,2.06 -1.18,-2.88 -5.27,-3.74 -3.13,0.21 0.06,1.85 3.77,4.69 0.04,3.72 -2.34,1.34 -4.33,-0.2 -6.47,-0.11 -0.71,2.72 -2.48,4.43 -4.99,5.59 -1.73,1.37 -5.12,2.04 -4.14,4.93 1.73,3.46 -1.97,4.26 -2.68,6.98 -1.38,4.14 -2.64,8.53 -0.77,12.73 1.47,5.09 3.95,10.18 7.71,13.93 3.19,1.73 6.27,3.8 8.6,6.49 1.94,2.68 4.29,-1.39 6.06,0.93 1.74,1.25 1.47,4.34 1.36,6.37 -1,5.55 -4.71,9.97 -7.61,14.63 -1.1,1.62 -3.21,1.58 -3.81,3.7 1.32,3.4 5.62,2.86 8.44,4.25 6.02,0.99 12.25,-0.27 17.78,-2.55 1.84,-1.13 2.94,-3.18 5.35,-3.48 2.7,-0.62 4.85,-2.4 7.33,-3.4 2.47,-0.56 3.3,1.96 4.66,0.63 1.69,-1.87 4.4,2.01 6.06,3.12 2.19,1.85 4.96,3.22 7.6,4.23 2.08,-1.3 3.07,-1.77 3.74,1 0.63,3.7 0.2,7.6 -0.21,11.34 -3.62,0.15 -1.02,2.73 0.84,3.34 -0.88,3.1 1.79,3.86 4.18,5.17 2.7,-0.99 3.7,-0.04 2.19,2.5 -0.63,2.28 0.81,4.56 -1.1,6.61 -1.8,1.77 -5.4,2.25 -6.16,5.03 0.5,2.47 2.45,5.22 3.88,6.72 0.53,-2.07 4.25,-1.3 6.09,-2.06 2.18,0.88 4.73,2.02 3.59,4.81 0.57,4.16 4.15,6.47 7.58,8.3 4.06,2.82 9.28,1.81 13.75,1.03 5.57,0.87 11.49,1.89 16.04,5.46 1.5,1.92 4.34,2.91 6.75,3.03 1.44,0.1 3.88,-0.46 4.75,1.03 2.73,-1.42 4.25,-4.04 4.38,-7.03 0.97,-3.35 4.62,-5.13 4.47,-8.92 0.59,-3.28 2.22,-6.72 1.35,-9.86 0.74,-2.94 4.48,-3.42 5.84,-6.03 2.45,-0.61 0.47,-2.16 -0.81,-2.44 -2.02,-2.71 2.93,-3.58 2.9,-6.17 0.3,-2.2 -0.42,-4.5 0.69,-6.55 -1.31,-0.77 -4.55,0.38 -4.34,-2.22 1.3,-2.38 -0.67,-5.57 -0.94,-8.16 -1.05,-1.55 -0.56,-3.22 -0.06,-4.81 -2.06,-3.14 -3.58,-6.56 -4.31,-10.28 -0,-3.21 3.88,-3.16 5.84,-4.38 1.83,-1.95 0.9,-4.67 -1.26,-6.04 -2.48,-3.08 -4.3,-6.94 -4.99,-10.83 0.78,-1.71 1.4,-3.41 0.25,-5.25 -0.12,-3.38 -3.6,-5.04 -5.13,-7.75 -2.86,-3.27 -7.52,-1.08 -10.66,0.56 -4.69,1.79 -9.52,4.51 -14.68,3.47 -2.44,-2.49 -4.42,-5.7 -6.29,-8.66 -2.19,-2.94 2.65,-2.19 3.79,-4.33 1.44,-3.52 5.56,-1 5.95,-3.31 1.05,-2.62 -4.12,-2.88 -2.51,-5.79 1.38,-2.83 4.79,-3.85 7.44,-4.63 1.92,2.63 5.73,-0.22 2.09,-1.81 -1.3,-2.26 2.57,-3.89 4.23,-2.24 3.08,0.46 1.96,-3.71 0.96,-5.33 -1.37,-3.08 -3.17,-5.78 -6.33,-7.23 -3.79,-0.63 -1.12,-3.37 -0.49,-6.08 0.24,-1.88 -1.87,-3.91 -0.43,-6.13 1.19,-2.18 3.39,-6.07 6.28,-3.97 1.67,3.39 3.78,0.05 4.16,-2.21 1.81,-2.05 -0.69,-2.3 -1.07,-3.97 -0.17,-2.37 -1.93,-5.43 0.13,-7.42 -0.88,-3.78 -6.22,1.19 -5.36,-1.83 1.28,-4.22 -5.99,-5.38 -4.53,-9.85 1.32,-2 0.84,-5.3 -1.94,-5.86 -1.78,-2.03 -5.71,-1.54 -6.82,-3.48 -0.21,-1.96 2.71,-4.06 -0.25,-4.94C125.29,422.08 124.64,421.87 124.22,422z","name":"Rheinland-Pfalz"},"nw":{"path":"m177.25,263.34c-2.1,-1.63 -5.7,-1.31 -6.06,1.91 0.19,3.63 -4.48,4.11 -7,3.66 -1.11,-1.64 -4.06,-2.21 -2.35,0.66 0.52,3.14 4.56,4.05 6.57,6.26 1.92,1.46 2.52,4.49 2.62,6.8 0.18,2.64 0.19,5.1 -0.9,7.58 -1.32,1.99 0.48,3.83 2.46,3.92 3.25,0.58 0.3,2.71 -0.78,3.97 -1.55,0.88 -3.89,0.86 -4.75,2.84 1.66,2.95 -2.56,1.58 -4.29,1.1 -2.41,-0.95 -5.38,-1.98 -7.02,0.74 -2.16,1.92 -4.56,3.57 -7.26,4.5 -1.87,2.2 -2.96,-0.94 -5.46,-0.31 -2.18,0.39 -2.63,4.37 -4.84,2.75 -2.6,-0.41 -3.41,-2.28 -4.46,-4.35 -2.31,-1 2.21,-2.81 3.55,-2.98 3.51,0.2 5.07,-3.48 2.41,-5.69 -1.71,-1 -4.92,-1.05 -5.1,-3.81 -0.4,-2.56 2.07,-4.87 2.81,-7.19 0.91,-0.72 -1.83,-2.26 -0.5,-3.69 3.14,-1.64 1.45,-5.72 -1.26,-6.8 -2.05,-1.15 -4.05,1.71 -6.33,0.21 -2.51,-1.72 -6.07,-2.59 -6.27,-6.18 -0.22,-2.85 -2.57,-3.65 -4.96,-4.34 -1.35,-0.64 -3.78,3.65 -1.27,3.96 1.72,1.12 -0.74,4.19 -1.92,5.19 -4.58,2.06 -9.39,4.71 -12.83,8.28 -0.91,2.09 -3.91,0.71 -4.63,3.16 -3.68,0.16 -7.44,-1.07 -11.03,-0.19 -1.13,2.36 -3.53,1.5 -5.41,2.92 -3.3,2.56 -8.23,3.82 -10.15,7.67 -0.16,4.41 -5.85,3.29 -8.27,5.42 -1.07,1.95 -3.97,5.3 -0.36,6.02 2.12,2 6.43,3.97 4.59,7.5 -2.07,2.76 -4.18,5.76 -7.59,6.94 -1.43,-2.65 -3.58,-2.35 -5.97,-1.09 -2.93,0.68 -5.59,2.43 -8.37,3.24 -1.83,0.92 -6.4,-1.52 -6.2,0.14 1.25,2.44 1.32,5.11 -1.64,2.71 -2.84,-2.65 -6.23,-5.14 -10.34,-4.5 -2.26,1.13 -4.86,1.79 -7.57,1.91 -2.94,-0.3 -6.47,1.11 -7.66,3.97 0.91,4.49 1.78,9.09 3.5,13.31 3.65,0.48 3.87,3.28 3.59,6.38 -0.03,2.95 4.03,4.36 4.95,7.23 3.16,3.93 2.85,9.32 1.32,13.83 -1.07,2.64 2.37,5.59 -1.15,7.3 -2.71,3.53 -6.04,6.82 -8.16,10.71 -0.6,1.66 -1.81,5.57 0.42,6.15 1.79,-1.07 4.45,-3.48 6.03,-0.89 -1.83,0.74 -3.77,2.52 -4.63,4.79 -4.06,2.72 -7.88,5.86 -12.82,6.75 -2.54,0.57 -4.87,1.7 -3.17,4.63 0.65,3.73 2.86,3.68 5.9,3.34 1.73,-0.12 4.7,0.11 2.92,2.43 -1.62,2.73 0.97,3.7 3.18,4.3 2.89,0.68 -1.54,3.27 0.66,4.81 0.17,1.78 -1.03,5.56 -2.97,3.06 -2.7,0.41 -2.86,4.47 -3.11,6.49 1.25,3.17 3.86,4.98 6.86,6.32 1.73,2.64 2.03,6.34 4.88,8.31 -3.91,1.75 5.55,0.78 2.22,4.39 0.29,3.25 -5.37,3.94 -3.38,7.37 0.76,1.42 1.86,4.52 3.66,2.67 3.25,-0.44 6.22,1.26 7.36,4.35 2.36,2.77 -0.08,6.31 -0.45,9.15 2.56,4.82 -0.8,-1.03 2.06,-1.07 2.71,-1.06 3.44,4.11 6.19,2.53 2.75,0.37 5.82,-2.69 8.02,-1.5 1.92,2.23 5.39,3.01 8.14,3.37 3.72,-0.21 2.3,-1.41 1.51,-3.82 0.04,-2.95 -1.16,-6.55 2.63,-7.5 2,-1.69 3.89,3.12 6.16,0.31 1.15,-2.86 1.77,-6.3 2.41,-9.46 2.7,1.12 5.4,-0.08 6.75,-2.56 3.27,-1.13 7.52,-0.86 10.35,-2.91 0.37,-1.12 0.98,-4.32 2.62,-2.66 -0.82,3.1 2.33,2.44 4.39,1.84 2.3,-0.53 5.31,-1.22 4.81,-4.28 -0.51,-2.22 0.4,-5.33 3.3,-4.47 2.78,1.45 5.46,-1.31 8.27,-1.76 3.1,-1.68 7.91,-1.4 9.45,-5.05 -0.47,-2.98 -4.28,-3.7 0.44,-3.18 2.74,-1.08 5.31,-3.89 4.08,-6.99 -1.04,-2.52 1.87,-4.26 3.71,-5.24 2.21,0.36 5.37,2.16 3.03,4.28 -1.84,2.46 1.06,2.47 2.69,2.94 2.57,1.6 7.18,2.77 6.12,6.74 -0.22,1.83 -1.49,3.93 0.54,5.35 1.58,1.78 4.44,3.29 3.47,6.09 1.92,-1.91 4.28,0.75 5.25,0.78 1.15,-1.97 2.94,-4.17 0.84,-6.13 -1.97,-2.33 -1.27,-4.35 1.26,-5.9 2.67,-2.21 4.81,-5.42 7.75,-7.15 2.53,-0.53 5,4.12 6.81,1 1.81,-2.99 4.43,-5.63 4.94,-9.19 1.73,-1.11 2.77,-3.4 4.66,-4.63 0.39,-1.91 -1.57,-4.12 -1.75,-6.25 0.73,-3.23 4.88,-3.7 7.64,-2.9 1.98,0.85 4.51,0.77 5.94,-0.93 1.31,-3.2 3.81,-6.24 2.52,-9.88 -0.64,-1.84 0.53,-6.24 -2.48,-5.85 -2.48,0.46 -4.55,3.29 -7.13,2.53 -1.37,-1.68 -3.72,-3.65 -1.3,-5.48 2.34,-4.53 6.76,-7.46 11.73,-8.41 3.83,-1.47 7.94,-1.54 11.98,-1.11 1.92,-2.78 -0.9,-3.85 -1.9,-6.19 -1.82,-1.61 -1.41,-4.36 1.19,-4.68 3.14,-1.44 7.01,-2.83 10,-0.32 2.4,1.63 -0.27,3.86 1.25,5.59 1.92,0.62 4.04,0.65 4.63,-1.66 3.98,-3.61 9.19,-6.08 11.4,-11.26 1.23,-2.28 4.7,-5.14 4.82,-6.65 -1.68,0.55 -4.34,-0.05 -3.2,-2.36 0.05,-5.23 2.13,-10.09 3.74,-14.92 1,-2.69 -2.16,-5.66 -4.66,-4.72 -3.16,2.83 -0.64,-2.27 -0.81,-4.06 -0.05,-2.72 -2.54,-1.8 -3.99,-2.62 -2.61,-2.3 -7.4,-3.71 -6.62,-8.03 0.39,-2.34 -1.28,-5.79 0.83,-7.47 -2.23,-1.73 -1.62,-3.85 -2.5,-6.03 -2.65,-0.77 -5.5,-0.87 -7.39,-3.23 -1.18,-0.94 -5.31,-5.84 -2.07,-3.89 2.92,3.3 5.04,-1.41 4.58,-3.56 -1.6,-1.73 -4.39,-1.61 -6.02,-2.94 -1.48,-2.41 1.21,-4.72 1.94,-6.91 1.84,-2.01 5.4,-1.29 6.16,-4.38 1.42,-2.09 2.16,-4.3 0.81,-6.53 1.2,-2.26 2.95,-5.17 -0.91,-5.56 -3.17,-1.51 -3.6,3.21 -5.58,4.74 -1.93,2.12 -2.98,5.59 -6.39,5.38 -3.28,0.88 -6.88,0.85 -10.18,0.44 -3.79,-0.66 -2.03,-5.2 -2.58,-7.89 -0.63,-2.02 1.28,-4.76 -1.4,-5.81 -1.68,-1.96 -4.73,1.64 -6.71,2.05z m32.09,14.69c-0.04,0.06 0.1,0.03 0,0z","name":"Nordrhein-Westfalen"},"ni":{"path":"m186.44,120.91c-5.6,0.51 -6.88,7.11 -8.44,11.54 -1.55,4.84 -4.41,10.19 -1.33,15.08 0.62,2.76 4.51,0.93 6.62,1.66 3.74,-0.55 1.44,3.37 1.28,5.34 -0.09,2.27 2.07,5.17 -0.81,6.68 -0.57,2.01 -4.6,1.89 -4.47,0.01 0.2,-1.62 -2.19,-2.79 -1,-4.38 -2.39,-2.05 -5.8,-0.88 -8.29,-2.92 -3.19,-0.55 -3.1,-6.58 -7,-4.9 -3.25,1.5 -2.87,5.42 -3.31,8.39 1.73,1.09 4.31,-1.81 5,0.84 0.65,4.51 -0.3,10.35 -4.66,12.69 -2.05,0.33 -4.01,-0.7 -4.44,-2.75 -1.01,-1.99 -2.84,-4.1 -4.91,-2.06 -2.51,-1.99 -2.84,-5.26 -2.69,-8.25 1.7,2.41 4.86,0.82 6.63,-0.53 1,-2.85 -1.94,-5.58 -2.55,-8.38 -0.35,-2.68 -2.75,-3.1 -4.67,-3.53 -0.88,-2.07 -1.59,-4.78 -0.56,-6.72 -5.56,-1.98 -11.61,-0.89 -17.16,0.47 -4.67,-1.16 -9.01,2.41 -13.75,2.56 -2.64,-2.27 -6.36,-1.45 -9.63,-2 -6.44,-0.16 -11.29,4.48 -15.23,9 -2.96,1.82 0.86,2.65 1.75,4.06 2.29,2.26 -1.66,3.67 -2.74,5.44 -1.44,-2.96 -5.14,-3.8 -4.27,0.54 -0.65,3.9 -0.71,8.05 -1.52,11.83 -1.87,1.87 0.95,4.14 2.97,3.58 5.28,0.29 10.96,-0.24 15.72,2.42 -2.08,0.69 -5.45,-0.97 -5.28,2.53 -1.3,3.55 -0.88,7.6 -1.89,11.2 -1.02,2.31 -3.53,5.58 -0.77,7.39 -1.04,4.96 1.43,10.17 -1.09,14.86 -1.44,6.42 -8.35,10.37 -8.34,17.29 -0.73,5.37 -0.65,11.06 -2.02,16.22 -1.54,2.43 -4.12,-1.19 -6.18,-0.78 -4.31,-0.59 -8.85,-1.62 -13.15,-0.5 -3.28,1.5 -0.59,5.19 -1.65,7.89 0.05,2.71 -1.96,5.6 -1.13,7.99 3.96,3.35 9.48,3.72 14.25,5.18 1.32,-0.55 1.98,-4.64 3.66,-2.59 1.6,4.04 5.43,7.78 4.44,12.38 -1.84,2.71 -4.41,6.49 -1.89,9.57 1.86,2.89 3.08,-1.11 5.12,-1.16 3.32,-0.74 7.21,1.07 10.28,0.08 0.77,-2.08 3.82,-0.65 4.33,-3.02 3.95,-3.24 8.34,-6.11 13.06,-8 3.49,-2.99 -0.93,-3.55 0.23,-6.31 0.69,-1.71 1.95,-4.41 4.07,-2.55 2.19,0.59 4.44,1.49 4.69,4.05 0.24,3.46 3.25,4.66 5.87,6.2 2.49,1.33 5.1,-2.32 7.3,0.36 2.1,0.86 2.8,3.79 2.88,5.66 -2.14,1.36 -2.99,3.7 -0.25,5 -2.47,1.24 -2.71,4.41 -4.06,6.59 -0.13,3.3 3.86,2.19 5.28,4.24 1.61,1.34 2.29,6.23 -0.56,6.24 -2.12,1.03 -7.72,1.03 -4.44,4.18 0.32,1.52 3.77,3.35 4.41,1.19 1.64,-2.26 4.29,-2.15 6.63,-1.31 1.36,-0.07 3.99,-1.2 5.52,-2.37 2.72,-1.18 4.39,-5.59 7.79,-3.97 1.75,0 5.6,2.6 5.94,0.72 0.62,-2.2 3.26,-3.09 5.19,-3.63 2.15,-1.43 1.31,-2.65 -0.91,-2.81 -3.46,-2.11 -0.12,-6.05 -0.14,-8.9 -0.15,-3.52 0.05,-8 -3.58,-9.88 -2.14,-2.11 -6.14,-3.08 -5.9,-6.7 -1.51,-2.43 0.6,-3.29 2.77,-2.04 1.45,1.42 4.2,1.38 5.98,0.03 1.26,-1.81 0.54,-4.61 3.46,-5.43 2.32,-1.11 5.18,2.05 7.68,-1.07 2.13,-2.24 4.04,-0.2 5.66,1.43 0.57,2.57 -0.21,5.4 0.22,8.09 -0.93,3.21 1.85,4.85 4.75,4.17 3.21,-0.08 7.22,0.09 9.7,-1.99 2.54,-2.97 4.51,-6.31 6.89,-9.36 2.02,0.69 5.86,0.77 5.97,3.44 -1.73,2.35 -1.52,4.54 -0.97,7.06 -1.39,2.86 -2.39,6.91 -6.2,7.13 -2.4,1.05 -3.91,4.28 -3.71,6.63 1.97,1.04 4.71,1.6 6.53,3.33 0.07,1.63 -1.12,5.59 -2.84,6.05 -3.41,-0.73 1.6,2.55 2.84,3.1 2.26,0.15 6.09,0.95 5.15,4.09 -0.68,1.53 3.99,3.73 1.27,4.76 -0.76,2.74 -0.13,6 0.12,8.84 1.43,2.32 4.36,3.6 6.57,5.25 3.31,-0.99 4.48,3.42 3.35,5.85 0.3,0.17 2.48,-0.22 3.34,0.68 2.41,1.16 3.09,3.45 2.56,5.97 -2.13,4.96 -3.82,10.38 -3.75,15.72 2.51,0.18 4.77,-1.21 7.34,-1.06 0.61,1.51 -0.65,3.85 2.25,3.24 3.59,-0.55 6.83,1.47 9.03,4.14 1.86,0.23 1.58,3.6 -0.22,2.84 -1.35,2.17 -4.02,2.06 -5.22,4.59 1.78,2.73 3.46,5.34 3.51,8.74 1.02,2.35 -1.28,3.79 -3.38,3.42 -2.32,0.54 -3.56,5.32 -0.53,5.96 3.22,1.18 6.33,2.54 9.36,4.13 4.29,-2.82 0.47,-2.05 -1.06,-3.89 -2.77,-2.53 1.66,-4.59 3.28,-6.24 2.15,-2.54 5.98,-1.9 8.84,-2.34 2.08,1.35 1.61,5.72 4.21,2.64 3.91,-2.4 7.72,-5.21 12.48,-5.45 3.97,-2.72 8.84,-4.93 11.78,-8.85 1.12,-1.78 0.33,-3.88 2.39,-5.63 3.16,-1.67 6.79,0.6 8.47,3.25 2.88,-0.58 7.14,-0.26 7.76,-3.87 -0.05,-2.88 3.65,-4.47 1.75,-6.24 -1.57,-2.46 -0.32,-5.67 -2.8,-7.78 -1.09,-2.4 -4.13,-3.43 -3.79,-6.44 -0.16,-2.66 -0.99,-6.17 2.11,-7.49 1.53,-0.76 3.52,-2.56 1.95,-4.3 -2.69,0.07 -2.43,-3.84 -0.41,-4.53 -1.85,-1.14 -5.14,-4 -4.75,-5.49 2.09,-0.39 4.95,0.22 5.97,-2.13 -0.9,-2.87 3.5,-2.65 5.41,-2.71 2.87,-0.48 6.16,1.13 8.63,-0.98 1.86,-0.84 5.77,1.14 5.58,-1.56 -0.39,-2.88 1.81,-4.27 3.9,-5.7 0.91,-0.47 3.07,-3.7 1.17,-3.53 -3.44,0 -2.76,-5.19 0.13,-5.66 3.82,-0.08 0.19,-3.6 -1.09,-4.81 -2.24,-1.37 -1.88,-4.21 -1.94,-6.38 0.35,-2.73 4.31,-1.12 3.91,-4.03 -1.37,-1.84 -4.07,-2.33 -5.04,-4.76 -1.41,-2.15 -5.08,-4.85 -2.74,-7.55 3.42,-1.12 3.06,-1.7 0.77,-4.08 -1.69,-1.79 -1.55,-4.29 -1.69,-6.46 -2.28,-4.45 -4.68,-9.22 -8.86,-12.09 -1.05,-3.33 -3.02,-6.48 -2.57,-9.99 -0.32,-2.09 0.44,-4.42 2.92,-4.26 2.85,-1.12 6.27,-0.08 8.93,-1.09 1.55,-1.38 2.76,-2.68 2.6,-4.79 1.69,-2.11 5.13,-0.16 7.46,-0.64 2.96,0.35 7.54,-0.38 8.88,2.86 3.56,1.21 6.67,-1.39 9.63,-2.75 1.37,-1.79 3.07,-3.85 5.5,-3.97 -1.07,-2.07 -0.03,-4.66 0.75,-6.72 2.37,0.04 3.51,1.16 4.74,-2.15 -3.03,-0.57 -6.18,-1.13 -7.93,-4.01 -2.99,-1.28 -5.04,3.32 -7.81,2.09 -1.68,-2.2 -4.97,-3.78 -4.59,-6.94 -1.58,-2.26 -4.54,-2.52 -6.84,-3.72 3.01,-0.21 2.65,-3.1 -0.2,-2.77 -6.07,-2.31 -7.72,-9.29 -10.33,-14.6 -2.42,-1.1 -4.9,-1.16 -5.92,1.34 -1.84,1.96 -4.18,1.97 -6.29,0.43 -2.67,-1.78 -3.79,-6.4 -7.79,-5.36 -2.51,-0.77 -4.24,2.4 -6.66,0.76 -4.42,-0.95 -7.78,-4.07 -12.05,-5.47 -1.87,-1.32 -3.8,-1.77 -5.52,0.17 -0.27,2.44 -2.51,2.71 -4.5,2.22 -3.65,-0.29 -5.04,-4.84 -7.84,-6.5 -1.55,0.25 -1.89,4.05 -4.47,4.49 -2.08,0.15 -3.58,-2.52 -5.1,-3.8 -1.02,-1.09 -2.8,3.74 -4.07,0.89 -2.45,-1.59 -2.98,-4.24 -4.53,-6.41 -0.49,-1.9 1.56,-6.03 -2.15,-5.31 -4.45,-0.29 -7.84,-3.81 -11.28,-6.28 -1.97,-2.7 -0.94,-6.7 -3.64,-9.09 -3.37,-1.87 -5.18,-5.18 -6.46,-8.69 -1.64,-4.08 -4.33,-8.01 -8.9,-9 -3.99,-0.41 -8.13,-0.36 -12.15,-0.37 -3.37,0.14 1.11,4.61 0.44,4.78 -2.24,-0.97 -4.59,-0.85 -6.63,0.19 -3.12,0.32 -6.61,0.16 -9.54,-0.98 -2.08,-1.54 -4.86,-2.91 -5.69,-5.53l-0.44,0.03z m-49.34,8.94c-0.03,1.09 0.83,-0.73 0,0z m-9.69,0.88c-1.79,0.64 -2,2.84 -0.28,0.69 1.15,0.39 7.48,0.12 5.09,-0.5 -1.6,-0.1 -3.21,-0.36 -4.81,-0.19z m18.53,1.06c0.45,3.21 0.81,1.46 0,0z m-31.41,1c-2.03,0.59 -1.28,4.28 0.3,1.19 1.64,-1.6 4.48,-0.97 6.64,-1.09 -2.3,-0.17 -4.65,-0.31 -6.94,-0.09z M108.19,134.75c-2.3,1.14 5.75,0.85 0.38,-0.03 -0.12,0.04 -0.27,-0.05 -0.38,0.03z m-12.13,0.84c-3.52,0.44 -2.54,2.25 0.41,1.38 2.85,-0.48 5.82,-0.48 8.59,-1.28 -2.97,-0.23 -6.02,-0.18 -9,-0.09z m-32.28,11.06c-1.1,1.27 2.99,3.13 2.5,3.16 1.33,-1.35 0.17,-2.16 3.86,-2.62 3.23,0.07 0.14,-2.1 -1.3,-2.1 -1.69,0.52 -3.38,1.04 -5.06,1.56z M174.25,186.75c0.36,2.67 4.51,2.84 6.35,4.51 3.41,1.6 7.66,0.4 10.79,2.95 3.11,1.84 7.08,3.66 10.49,1.79 1.4,0.19 3.63,2.7 2.89,3.67 -2.99,0.4 -0.11,3.94 -0.78,6.22 0.86,2.85 -2.01,3.95 -3.7,5.61 -3.46,-0.92 -6.93,-3.62 -10.57,-2.86 -2.23,0.9 -3.13,-2.21 -2.65,-3.92 -0.64,-2.4 -4,-3.06 -3.74,-5.78 -0.67,-2.42 -1.42,-4.7 -4.2,-4.81 -3.28,-1.01 -7.24,-4.77 -5.34,-8.44 0.16,0.35 0.31,0.71 0.47,1.06z","name":"Niedersachsen"},"mv":{"path":"m468.38,35.5c-3.45,0.91 -7.31,1.41 -8.93,5.06 -0.26,1.49 -3.68,7.61 -2.06,6.34 1.83,-1.19 3.02,-3.21 2.21,-5.18 0.53,-1.31 3.04,-4.63 4,-2.16 0.98,2.93 -2.17,4.94 -1.91,7.78 2.5,-1.15 4.75,-3.34 7.37,-1.07 2.42,1.29 5.16,2.48 7.7,0.7 1.54,0.46 0.47,5.05 0.71,7.19 0.58,3.31 -4.03,1.68 -5.65,1 -1.59,-1.22 -4.83,-1.69 -5.19,-3.75 1.7,-4.11 -3.26,-1.94 -5.53,-2.31 -2.04,0.6 -6.23,0.55 -4.31,3.72 1.26,1.16 4.35,-0.42 5.38,2.04 2.76,1.44 -0.43,4.39 -2.54,4.37 -2.75,-0.56 -4.74,4.2 -0.71,3.48 2.64,0.57 6.65,0.82 2.18,2.56 -1.86,1.21 -4.55,1.66 -6,3.25 -1.1,2.82 0.47,5.48 1.28,8.13 5.01,1.69 10.02,3.38 15.03,5.06 2.12,-0.23 1.09,-3.14 0.16,-2.97 -0.76,1.88 -3.98,1.99 -3.25,-0.63 2.8,-3.12 5.65,-6.81 9.31,-9 3.6,-0.24 7.24,-1.3 10.81,-1.09 1.21,1.32 2.75,4.02 0.25,4.94 -1.68,2.68 3.83,-2.34 2.14,-4.14 -1.15,-2.6 -3.19,-5.78 -6.42,-4.67 -2.75,-1.52 -4.42,-5.28 -3.91,-8.38 1.26,-2.37 3.94,-3.83 5.78,-5.54 1.61,-2.97 -1.68,-6.36 -4.75,-5.02 -3.75,0.66 -8.71,3.63 -11.63,-0.19 -1.83,-1.92 -3.2,-6.71 0.31,-7.56 2.78,-1.63 0.58,-2.73 -1.84,-1.94z m-11.72,12.09c-0.08,-0.04 -0.09,0.18 0,0z m-4.56,2.28c1.4,-3.26 1.29,-4.92 0.11,-0.61l-0.09,0.49 -0.02,0.12z M457,55.72c-1,0.46 -3.54,5.14 -1.38,3.6 1.48,-0.87 6.21,-2.64 2.44,-3.69 -0.36,-0.17 -0.71,0.02 -1.06,0.09z m-41.09,7c-0.25,1.57 -4.9,6.97 -0.87,4.76 3.72,-1.22 7.4,-2.58 10.67,-4.69 2.93,-0.95 5.29,-0.58 1.12,-0.91 -3,-0.7 -6.71,0.09 -8.98,-2.44 -0.65,1.09 -1.29,2.19 -1.94,3.28z m31.25,-1.97c0.11,0.78 4.7,-2.13 0,0z m-5.81,0.66c-3.54,0.47 -7.66,0.41 -10.88,0.66 0.67,2.11 2.68,1.92 4.62,1.67 3.01,-0.17 6.3,-0.07 8.66,-2.29 -0.79,-0.19 -1.6,-0.03 -2.41,-0.03z m1.56,3.03c-2.88,1.13 -1.21,5.18 -4.19,6.34 -3.6,2.14 -6.72,-2.29 -10.47,-2.06 -3.01,-0.89 -5.76,1.74 -8.35,3.01 -2.71,2.18 -6.52,4.43 -7.27,7.96 0.18,1.51 4.13,0.67 2.84,2.66 -2.29,1.22 -5.24,-0.3 -6.59,-2.13 -0.64,-1.13 1.18,-6.54 -0.53,-3.19 -3.22,4.08 -9.79,4.87 -11.29,10.52 -1.07,2.64 -1.85,5.58 -5.3,3.89 -4.59,-1.7 -8.52,1.77 -12.84,2.72 -3.31,0.47 -6.17,-1.62 -9.5,-0.72 -2.97,1.63 -5.73,4.31 -8.33,6.62 -1.96,2.01 -2.68,5.33 -0.14,1.47 1.06,-1.2 2.41,-4.78 4.19,-3.41 2.37,2.62 -1.24,5.31 -2.34,7.63 -1.89,1.4 -5.07,1.98 -4.85,5.06 -0.11,3.13 -0.5,6.25 -2.62,8.72 -1.16,-0.88 -3.68,-1.23 -3.47,-3.09 -1.92,-1.17 -4.21,-1.95 -5.89,0 -2.35,1.65 -4.97,-1.81 -3.77,-4.13 -1.91,-1.96 -3.3,-5.2 -6.59,-3.87 -5.1,-0.35 -9.02,3.11 -13.04,5.78 1.53,2.15 0.81,6.74 -2.56,5.38 -2.64,1.41 -7.07,3.37 -6.72,7.09 1.31,2.5 2.06,5.12 1.15,7.92 0.24,2.24 3.08,3.96 4.95,5.27 1.49,-0.13 2.88,-0.94 4.38,0.28 1.77,1.48 2.91,4.8 1.54,6.72 -1.07,2.51 -1.74,5.18 -3.94,7.19 -3.45,4.41 -6.57,9.53 -11.63,12.13 -2.85,-1.67 -4.12,1.25 -4.21,3.8 -1.04,3.05 -1.35,4.72 2.28,3.81 4.38,-1.22 5.62,3.97 8.63,5.73 2.06,1.71 4.79,0.13 5.56,-2.03 1.66,-2.26 4.66,-0.28 6.53,0.28 2.66,5.4 4.35,13.11 11.13,14.56 1.97,-0.26 2.54,2.31 1.09,3.34 1.98,0.75 4.2,1.46 5.28,3.41 2.92,0.33 5.86,0.78 7.88,-1.84 2.53,-1.04 4.17,0.11 6.2,0.92 3.41,1.17 3.57,-3.72 2.91,-5.91 -1.19,-2.85 2.75,-4.04 4.19,-5.91 2.26,-0.57 6.06,-0.68 6.92,2.18 2.22,-0.82 7.58,-0.29 4.18,-3.52 1.89,-0.52 5.64,-0.7 8.01,-2.08 1.84,-1.16 5.37,-2.23 4.75,-4.82 0.89,-1.93 2.17,-4.64 4.7,-3.27 2.88,0.17 5.85,-1.68 8.79,-1.42 2.69,2.85 6.38,3.54 9.59,5.47 2.1,1.42 2.54,5.89 5.86,4.62 1.42,-1.54 4.52,-1.23 6.97,-0.84 2.64,0.11 5.42,0.12 6.99,2.65 1.76,1.23 2.9,3.74 4.81,4.36 3.51,-2.08 7.9,-1.79 11.85,-1.57 1.87,0.92 -0.02,2.26 -1.2,2.88 2.73,2.02 3.96,-3.02 6.01,-4.14 1.85,-2.5 5.05,-5.4 8.21,-4.51 0.4,1.63 2.6,4.73 2.69,1.53 -0.18,-4.03 4.85,-6.14 8.16,-4.72 0.92,1.02 1.13,4.66 2.78,2.25 1.94,-2.52 5.64,-4.66 5.83,-7.92 -0.98,-3.87 1.53,-7.87 4.55,-10.15 2.94,-2.19 5.03,-6.55 9.2,-6.14 3.13,-1.46 0.88,-2.47 0.94,-4.94 -0.47,-2.01 1.66,-5.18 3.04,-2.12 2.09,2.5 4.8,4.66 5.08,8.15 0.55,3.39 3.31,3.78 6.08,2.65 2.41,-0.3 6.44,1.78 7.55,-1.21 2.62,0.79 6.91,-0.99 8.25,2.06 1.49,6.11 -3.45,10.78 -7.19,14.78 -1.98,3.1 3.33,1.46 5.03,1.98 3.6,0.68 6.06,-2.53 6.41,-5.79 1,-1.79 6.72,-1.16 5.01,-3.95 -1.75,-4.35 -2.83,-9 -3.99,-13.46 -2.18,-2.83 -4,-6.6 -2.87,-10.22 -0.22,-5.43 -3.03,-10.29 -3.44,-15.72 -0.42,-2.28 -2.57,-2.04 -3.28,-0.22 -1.81,2.36 -5.39,1.17 -7.84,0.59 -3.37,-1.38 -7.23,-1.87 -9.74,-4.72 -2.44,-2.52 -7.36,-2.95 -8.1,-6.78 1.68,-2.2 3.24,-5.36 5.94,-6.13 0.44,-2.04 -2.63,-3.55 -3.67,-5.18 -2.27,-2.24 -3.02,-5.61 -4.55,-8.32 0.21,-2.8 0.27,-5.88 -2.37,-7.5 -1.78,-3.54 -4.86,-2.15 -7.78,-0.99 -2.53,1.08 -5.51,1.39 -7.79,2.9 0.14,1.21 2.98,3.43 0.56,3.84 -3.2,0.18 -3.78,-3.49 -4.59,-5.69 -0.99,-1.26 -3.18,1.08 -3.03,-1.66 3.36,-2.44 -2.45,-0.94 -3.09,-2.5 -1.56,-2.33 -1.97,-5.95 -5.39,-6.49 -2.15,-2.65 -4.68,-0.2 -6.44,-0.76 -2.83,-2.27 -3.42,-6.13 -4.17,-9.38 1.49,-2.52 -2.16,-5.5 -3.62,-7.17 -1.75,-0.48 -3.25,0.75 -4.88,1.21z m52.69,22.19c-3.16,0.36 -1.48,4.22 0.37,5.25 1.73,2.04 0.07,5.76 2.48,7.75 1.23,2.84 2.71,4.73 5.49,2.07 1.56,-1.43 -2.24,-3.39 -0.78,-5.26 2.84,0.22 4.58,0.55 1.09,-0.38 -3.78,-1.63 -6.46,-4.91 -7.63,-8.84 -0.21,-0.29 -0.58,-0.78 -1.03,-0.59z M508.81,98.25c2.29,2.13 4.59,4.76 3.68,8.19 1.29,3.82 -2.55,2.56 -4.59,1.72 -1.01,-1.74 -1.1,-5.02 -3.97,-3.22 -1.8,2.49 2.15,3.83 2.07,6.36 1.37,2.89 -1.67,5.12 -4.12,5.88 -2.51,0.31 -1.55,2.32 0.67,2.35 4.16,0.13 7.86,-2 11.53,-3.58 2.18,-0.69 5.82,0.22 7.3,-1.22 1.43,-3.32 1.05,-6.01 -2.4,-7.65 -4.01,-3.08 -7.07,-7.49 -11.49,-9.99 0.44,0.39 0.88,0.77 1.31,1.16z m-153.22,8.91c-2.07,0.65 -6.19,2.56 -3.84,5.09 3.14,1.72 4.9,-0.57 5.38,-3.56 0.63,-1.6 0.03,-1.86 -1.53,-1.53z","name":"Mecklenburg-Vorpommern"},"he":{"path":"m231.91,351.28c-2.52,4.22 -6.22,7.61 -8.38,12.09 -3.47,2.99 -7.81,5.31 -10.28,9.09 -2.28,0.4 -5.74,0.13 -5.5,-3 2,-3.26 -3.47,-5.21 -5.91,-3.76 -1.41,0.82 -5.95,0.93 -4.65,3.28 0.64,2.39 3.13,3.23 3.37,5.4 0.17,2.42 -1.34,4.44 -3.94,3.29 -5.15,-0.39 -10.41,1.05 -14.95,3.35 -3.17,1.4 -4.72,4.59 -6.61,7.28 0.84,1.05 2.01,4.06 3.59,2.09 2.37,-0.9 6.57,-4.19 7.88,-0.28 0.22,4.19 2.13,8.77 -0.72,12.51 -0.71,2.75 -2.31,4.62 -5.22,4.99 -3.14,-0.43 -7.52,-2.41 -9.63,1.09 0.39,2.15 1.85,4.24 2.13,6.19 -1,1.73 -3.4,2.91 -4,4.63 3.11,2.85 -2.97,-1.27 -1.76,3.31 -1.97,2.72 -3.4,6.11 -5.96,8.25 -2.51,0.68 -5.22,-4.25 -7.23,-1.05 -2.7,2.64 -5.41,5.28 -8.11,7.92 0.49,2.48 3.93,4.74 1.63,7.26 -0.76,2.71 -4.3,4.36 -2.78,7.49 -0.8,2.92 2.77,3.49 2.12,5.75 -1.13,1.85 -1.06,5.6 -3.44,5.9 -1.97,0.22 -2.63,-1.53 -4.06,-2.13 -2.8,1.41 -5.48,6.02 -2.56,8.66 -0.49,2.46 -3.67,5.82 0.27,6.82 3.67,1.53 5.25,5.3 6.61,8.75 0.92,2.04 1.08,4.85 -1.7,5.37 -1.07,-0.93 -5.7,-1.33 -3.5,1.11 2.47,0.99 0.89,3.49 -1,3.99 -2.32,-1.08 -4.25,-1.29 -6.55,0.33 -2.11,0.73 -3.8,3.88 -1.08,4.86 2.02,1.08 1.39,4.09 0.28,5.59 -2.84,-2.01 -4.64,0.94 -6.72,2.5 -3.14,0.7 -2.62,2.78 -0.67,4.69 1.7,1.7 2.49,4.75 4.7,5.72 7.32,0.54 13.26,-4.85 20.19,-5.97 3.41,-0.25 5.55,2.38 7.21,4.9 2.7,2.09 3.72,5.69 3.75,8.95 -2.21,2.91 0.93,6.19 1.75,9.06 1.22,3.02 5.3,4.54 4.69,8.16 -0.83,2.19 -2.69,3.5 -5.03,3.69 -3.67,1.29 -0.58,5.33 -0.19,7.78 1.19,1.23 1.73,4.58 3.56,3.47 2.87,-0.09 4.72,3.15 6.02,5.29 0.45,2.46 3.64,2.83 4.61,0.44 0.84,-1.91 -0.18,-4.52 -1.35,-5.64 -0.49,-3.07 3.89,-2.29 5.74,-3.3 2.12,-0.86 2.95,1.54 1.33,2.77 -0.13,1.19 0.36,6.2 2.44,7.44 3.73,1.71 7.96,2.48 12.06,2.41 0.3,2.37 -0.95,4.21 -3.22,5.14 -2.12,0.41 -4.13,4.05 -2.97,5.83 3.16,0.98 4.62,-3.02 6.97,-4.37 2.62,-1.23 -1.27,-2.95 1.23,-4.7 1.83,-3.04 5.68,-3.23 8.67,-4.31 2.07,1.28 4.67,2.3 1.65,-0.28 -2.77,-0.69 1.28,-2 0.17,-4.09 -1.83,-2.61 0.09,-5.95 0,-8.84 0.67,-3.72 4.45,-6.62 2.87,-10.6 0.27,-3.23 -3.17,-2.82 -4.5,-5.35 -1.88,-1.31 -2.94,-3.09 -2.59,-5.43 1.25,-0.49 -0.57,-3.68 -0.1,-5.19 -0.37,-2.39 0.26,-5.26 -1.15,-7.31 2.19,-0.29 2.3,-4.03 0.75,-4.91 -3.55,0.11 -2.06,-3.18 -1.51,-5.43 1.26,-3.72 6.02,-2.87 8.99,-4.29 3.44,-0.94 6.85,-2.48 10.38,-0.98 2.53,1.03 6.93,-0.17 7.36,3.51 0.22,3.77 3.72,2.22 6.1,1.81 3.18,-0.12 0.4,-3.63 0.68,-5.44 -0.84,-3.13 -0.37,-6.51 1.38,-9.24 2.02,0.57 4.63,1.89 6.47,0.94 0.86,-2.28 1.78,-5.61 4.88,-5.28 3,-1.1 4.77,-5.15 2.22,-7.63 2.46,-1.43 0.46,-5.9 4.2,-5.65 2.35,-1.65 4.24,2.19 6.72,0.64 3.67,-2.12 7.61,-4.88 9.17,-8.99 0.87,-4.15 -0.43,-8.59 0.34,-12.69 1.59,-1.67 2.87,-3.11 0.88,-5.25 -1.95,-0.3 -4.67,-0.51 -5.91,1.03 2.68,1.72 0.06,4.83 -2.4,3.41 -3.4,0.47 -3.73,-2.19 -3.1,-4.85 1.64,-2.54 4.97,-5.54 3.53,-8.77 -2.61,-1.88 3.02,-1.21 0.62,-3.76 -0.39,-2.4 1.7,-5.24 4.25,-4.19 2.32,-0.16 2.52,-3.78 3.13,-5.59 -0.42,-3.72 -1.44,-7.39 -2.41,-10.94 0.58,-3.37 4.7,-2.07 6.91,-1.42 1.33,1.43 3.54,1.27 4.93,0.14 1.65,-2.01 -0.8,-4 -2.88,-4.28 -0.73,-2.4 -0.28,-5.7 -2.15,-8.05 -1.81,-2.17 3.2,-3.84 4.13,-1.92 0.85,2.09 2.04,3.15 0.8,0.19 -0.79,-1.77 1.55,-2.57 1.81,-3.75 -2.16,-0.34 -3.1,-3.03 -5.47,-3.13 -2.41,-1.32 -5.66,-1.92 -5.69,-5.28 -2.73,-1.26 -6.43,-1.62 -7.14,-5.14 -0.93,-2.28 -2.35,-5.29 -0.96,-7.39 -0.41,-3.77 -4.2,-2.41 -6.91,-2.04 -2.44,0.91 -4.65,3.07 -6.27,5.16 0.26,3.75 3.81,-0.17 4,2.53 0.6,2.43 -1.31,3.7 -3.35,4.44 -2.57,-2.31 -6.46,-3.25 -9.7,-4.62 -2.11,-0.64 -2.73,-3.33 -1.64,-5.16 0.52,-2.33 2.7,-3.11 4.88,-2.75 1.13,-2.01 -0.13,-5.09 -0.97,-7.03 -0.84,-1.85 -3.71,-4.21 -0.9,-5.87 1.12,-2.04 3.33,-1.71 4.5,-3.66 2.57,-0.35 -1.93,-2.01 -2.09,-3.38 -2.42,-2.04 -5.4,-1.51 -8.28,-1.84 -2.56,-0.15 0.13,-3.78 -1.82,-2.9 -0.65,0.13 -1.3,0.26 -1.96,0.4z m48.47,53.75c-0.2,0.03 0.16,0.35 0,0z","name":"Hessen"},"hh":{"path":"m273.31,139.16c-1.5,1.09 -0.93,4.3 -3.67,5.06 -1.61,1.47 -3.71,3.26 -5.89,1.85 -2.33,-0.78 -1.81,2.21 -3.43,3.24 -1.3,1.52 -3.26,5.5 -5.37,2.78 -1.64,-2.73 -2.78,-2.89 -3.11,0.48 -1.95,3.52 3.88,1.56 2.16,5.63 -0.89,2.25 0.93,3.48 1.47,5.56 1.11,1.96 3.5,5.01 5.03,1.63 1.82,-0.66 3.1,2.78 4.87,3.63 1.74,1.19 3.59,-1.92 4.1,-3.57 1.25,-2.32 3.61,0.86 4.66,2.15 1.9,2.2 3.93,4.76 7.21,3.97 1.13,-0.62 1.01,-2.97 2.91,-3.07 2.93,-1.45 -2.65,-3.59 -2.97,-5.78 -1.42,-2.02 -5.31,-2.65 -5.35,-5.94 -0.83,-2.64 0.75,-4.88 3,-6.12 2.02,-2.17 0.93,-4.31 -0.94,-5.97 0.01,-2.33 -0.49,-4.73 0.53,-6.88 -1.59,-1.66 -3.52,1.07 -5.22,1.34z","name":"Hamburg"},"hb":{"path":"m177.13,149.91c-1.02,1.81 2,3.93 2.44,6 0.78,1.49 -1.36,2.66 0.47,3.7 0.36,2.05 1.77,2.73 3.27,0.5 2.31,-1.97 -1.15,-5.18 0.62,-7.7 1.79,-3.68 -3.69,-1.91 -5.73,-2.54 -0.36,-0.05 -0.71,0.02 -1.07,0.05z m-2.34,39.47c1.3,3.24 5.12,3.63 7.78,4.94 1.52,2.61 1.31,5.93 3.86,7.69 2.1,1.22 1.38,3.71 2.04,5.46 1.64,0.31 3.99,-0.68 5.77,0.73 2.5,0.16 5.45,3.63 7.38,0.87 2.63,-1.56 0.74,-5.04 0.98,-7.51 -2.78,-1.97 1.76,-2.01 0.87,-3.11 -1.26,-2.73 -3.93,0.26 -6.25,-0.86 -4.35,-0.36 -7.69,-4.63 -12.29,-4.36 -3.91,0.3 -6.92,-2.67 -10.15,-3.86z","name":"Bremen"},"bb":{"path":"m499.25,149.81c-0.84,1.88 -0.81,4.34 1.28,5.34 -1.74,2.06 -3.79,3.29 -6.37,3.46 -3.18,2.74 -6.61,5.55 -9.05,8.91 -1.36,2.25 -1.54,4.68 -0.87,7.16 -2.28,3.16 -4.83,6.45 -8.06,8.63 -2.41,-0.12 -1.19,-4.5 -3.97,-3.53 -3,-0.61 -5.44,2.28 -5,5.15 -0.4,2.7 -4.01,1.19 -3.97,-1.02 -0.57,-1.97 -3.52,0.03 -4.56,0.75 -2.74,2.49 -4.73,6.13 -7.88,8 -1.99,-0.23 -3.86,-2.04 -1.25,-3.16 1.45,-1.47 -4.76,-0.14 -6.18,-0.46 -2.13,-0.19 -5.04,3.22 -6.6,0.49 -2.73,-2.51 -5.01,-6.52 -9.27,-5.91 -2.13,0.04 -5.13,-1.3 -6.45,0.69 -2.87,1.21 -4.79,-0.3 -6.25,-2.72 -1.52,-3.98 -6.92,-3.25 -9.48,-6.32 -1.8,-2.15 -4.65,0.11 -6.93,0.1 -2.38,1.26 -5.39,-1.14 -6.32,2.55 0.99,3.09 -2.96,4.01 -4.77,5.61 -2.15,1.15 -6.11,1.77 -7.27,2.46 2,2.09 -1.36,2.73 -2.94,2.85 -3.43,2.16 -3.88,-1.29 -6.73,-1.81 -3.03,-0.86 -4.57,2.1 -6.63,3.69 0.64,2.72 1.23,7.08 -1.72,8.53 -1.68,-0.03 -3.77,-0.05 -4.75,-1.47 -3.21,-0.91 -4.58,3.15 -7.53,2.47 -2.88,-1 -5.03,0.48 -2.09,2.67 1.36,1.69 3.08,4 5.08,1.55 1.94,-1.5 5.34,-2.28 6.7,0.42 1.5,2.04 4.32,1.65 6.53,2.39 1.23,-1.43 4.73,-0.25 2.95,1.62 -1.67,1.72 2.21,2.59 2.91,3.81 1.43,1.12 2.93,-2.01 4.58,-0.33 1.76,1.64 5.48,1.89 6.03,4.47 0.12,1.23 -2.72,2.23 -0.94,3.16 4.27,1.68 8.68,4.08 13.38,2.66 2.5,1.2 6.82,-4.08 4.61,0.18 -0.35,3.68 2.96,0.6 4.61,0.47 3.29,0.55 2.92,4.31 3.72,6.78 0.37,2.84 -3.59,3.22 -2.84,6.46 -1.66,3.81 3.69,5.99 2.3,9.81 0.77,2.86 -2.32,3.27 -3.45,4.66 -0.54,2.65 -2.13,5.71 -1.65,8.26 0.83,2.24 4.39,3.7 4.36,0.28 2.12,1.42 6.84,0.74 6.61,4.02 1.02,3.09 -2.67,5.39 -1.23,8.53 0.24,2.83 1.88,6.06 -0.69,8.26 -2.05,3.4 -2.35,7.41 -1.88,11.28 -2.17,2.79 -1.48,5.22 1.03,7.44 3.11,5.22 7.1,10.36 13.17,12.16 3.29,1.01 7.58,3.94 10.7,1.22 -0.29,-3.23 3.4,-2.12 4.94,-0.75 2.81,1.03 3.99,2.78 6.11,4.39 2.08,1.33 4.66,2.82 7.04,1.98 3.14,1.39 6,3.2 8.16,5.88 3.11,1.39 3.63,-2.03 5.78,-1.38 1.85,0.64 2.36,3.88 -0.16,3.41 1.53,4.44 1.98,9.42 4.53,13.28 -0.28,4.36 -5.19,5.81 -8.13,8.16 1.38,4.17 2.89,2.17 5.54,3.45 2.71,1.73 3.05,5.69 4.55,8.42 0.92,3.28 0.16,6.97 -0.56,10.28 1.12,1.84 2.33,3.34 4.61,2.31 0.97,-1.14 2.38,-3.45 4.49,-4.31 2.22,-1.43 4.58,-3.03 6.29,-0.12 4.07,3.53 9.06,7.27 14.8,6.16 2.09,-1.58 2.79,0.71 5.58,0.52 2.7,-0.23 5.1,-3 8.17,-1.96 3.29,-1.1 7.81,-0.26 9.47,-3.95 2.24,-4.34 2.1,-9.97 5.65,-13.77 1.52,-0.92 3.97,-0 5.84,-0.31 2.67,-0.5 5.34,2.24 7.62,0.72 1.65,-1.85 4.86,-1.52 6.32,-2.54 1.7,-2.16 5.35,-2.05 7.75,-3.38 2.31,-0.33 2.58,2.04 4.09,2.56 2.19,0.22 4.28,-0.47 4.14,-3.06 1.18,-2.26 3.58,-0.39 3.55,-4.22 -0.1,-2.81 -0.47,-5.99 -3.36,-7.26 -3.75,-2.16 -4.56,-6.65 -6.42,-10.21 -2.9,-0.63 -3.35,-5.09 -0.55,-6.35 3.76,-2.93 5.89,-7.61 5.36,-12.4 -0.5,-2.47 -0,-3.76 1.5,-6 1.18,-2.51 -0.13,-5.99 -3.13,-5.94 -2.3,-1.74 -2.72,-5.61 -0.53,-7.63 -0.28,-2.81 1.52,-6.55 -1.09,-8.56 -2.6,-1.24 -6.3,-0.29 -7.81,-3.19 -1.11,-3.05 -1.39,-6.47 -2.42,-9.42 -1.68,-2.31 -0.63,-6.4 2.17,-7.48 1.98,-2.33 3.3,-5.1 2.57,-8.22 0.38,-2.83 -0.31,-5.28 -2.51,-7.19 -3.54,-2.79 -8.55,-3.73 -11.34,-7.59 -2.56,-5.3 -8.11,-8.18 -12.88,-11.28 -2.02,-1.42 -4.87,-0.97 -6.69,-2.38 -2.03,-2.63 3.01,-4.81 1.15,-7.48 -0.64,-2.66 -2.69,-6.39 0.67,-8.11 3.25,-1.9 6.37,-3.89 8.77,-6.91 3.06,-2.56 2.89,-6.96 3.39,-10.59 -1.83,-1.72 -1.71,-4.98 -0.47,-6.84 1.2,-1.67 4.41,-4.79 3.03,-6.69 -2.15,0.19 -2.35,-3.69 -2.22,-5.41 -2.44,1.01 -5.3,1.53 -5.5,4.63 -1.15,2.4 -3.02,3.91 -5.78,3.72 -2.22,-0.47 -6.15,0.62 -7.41,-0.9 0.47,-4.6 5.82,-6.58 7.23,-10.78 0.81,-2.01 1.54,-5.13 -0.2,-6.73 -3.16,-0.57 -5.69,-0.28 -7.87,1.03 -3.28,0.28 -6.64,-0.73 -9.75,0.5 -4.23,-1.06 -2.75,-6.98 -5.95,-9.24 -1.05,-1.15 -2.07,-2.54 -3.15,-3.54z M484.13,240.25c2.62,1.78 3.22,5.59 5.07,8.15 1.73,3.05 5.13,4.94 5.9,8.6 -0.13,3.15 2.96,3.88 5.31,4.97 3.02,1.16 1.5,3.96 0.62,6.15 -2.11,1.18 -0.3,2.41 -1.81,3.94 -3.37,1.44 -6.8,-1.31 -10.22,-1.72 -2.61,0.29 -4.02,-2.66 -5.44,-2.59 -3.39,0.13 0.93,5.86 -3.25,4.2 -2.15,-1.56 -3.93,-2.85 -6.03,-2.56 -2.2,-2.21 -6.14,-1.55 -8.26,0.46 3.07,1.05 -3.31,1.77 -4.27,0.08 -2.48,-1.03 -0.87,-2.57 0.43,-3.73 -0.55,-1.26 -1.2,-3.36 0.31,-4.63 3.03,-2.14 1.73,-3.7 -0.71,-3.56 0.04,-2.5 -0.02,-5.34 0.62,-7.66 1.31,-1.47 2.88,-1.58 4.41,-0.5 1.08,0.35 -1.33,-2.46 0.8,-3.32 1.36,-1.61 4.71,-0.61 6.85,-0.8 2.24,1.02 3.85,-0.76 4.63,-2.66 1.77,2.37 2.44,0.08 3.29,-1.66 0.36,-0.52 1.13,-1.47 1.74,-1.16z","name":"Brandenburg"},"be":{"path":"m483.38,241.69c-1,1.58 -1.61,5.27 -4.03,2.88 -0.91,2.64 -3.81,2.59 -6.06,2.05 -1.91,-0.31 -7.28,0.09 -4.84,2.79 1.38,2.14 -2.25,1.68 -3.34,0.78 -3.18,-0.15 -1.8,4.36 -2.36,6.45 -0.09,0.87 5.17,1.04 2.51,3.18 -1.16,1.75 -4.04,3.69 -1.89,5.83 0.53,1.82 -3.82,2.76 -0.54,3.7 2.29,1.61 3.52,-2 6.07,-2.2 2.07,-0.34 5.08,-0.28 6.25,1.69 2.29,-3.28 5.18,4.71 6.09,1.16 -1.15,-2.62 1.9,-3.14 3.66,-3.85 0.63,3.56 5.17,2.88 7.8,4.18 1.96,0.26 4.94,2.32 6.26,0.28 -2.5,-1.19 2.5,-2.95 2,-5.26 1.05,-2.66 -3.24,-2.9 -4.77,-4.37 -2.69,-0.38 -1.4,-4.38 -3.15,-6.05 -1.61,-3.03 -4.93,-4.88 -5.94,-8.38 -1.14,-0.99 -1.96,-6.07 -3.71,-4.88z","name":"Berlin"},"by":{"path":"m273.66,464.44c-1.31,1.91 -3.76,2.78 -3.5,5.34 -1.83,4.59 -6.12,7.95 -10.5,9.94 -2.67,1.02 -4.62,-2.49 -7.15,-0.61 -1.54,0.74 -0.64,3.49 -2.13,4.58 2.4,3.04 -0.04,7.53 -3.44,8.47 -3.38,-0.45 -3.01,4.07 -4.66,5.5 -2.16,0.47 -4.23,-0.33 -6.28,-0.91 -2.54,3.91 -0.46,8.53 0,12.63 -0.53,2.87 -4.66,1.74 -6.9,2.55 -3.16,0.27 -1.64,-5.68 -4.98,-5.22 -4.19,-0.72 -8.41,-2.46 -12.49,-0.42 -2.97,1.16 -6.84,1.23 -9.32,2.99 -0.59,1.48 -2.41,4.44 -0.69,5.28 3.02,-0.37 2.55,4.03 2.28,5.63 -2.37,0.86 0.17,4.18 -0.45,6.12 0.28,2.66 -0.27,5.78 1.89,7.78 -3.88,-0.85 0.14,3.73 1.52,4.58 0.84,1.94 3.96,0.92 3.59,3.64 1.27,2.88 0.6,5.62 -0.78,8.31 -2.26,2.93 -2.47,7.6 -2.42,11.23 1.24,2.27 4.6,0.89 6.75,1.12 2.16,0.04 4.75,-2.13 4.73,-4.03 -0.34,-2.04 2.18,-5.23 4.72,-3.63 1.87,0.74 5.34,1.32 4.23,-1.45 1.6,-1.24 -0.63,-7.5 -0.96,-4.79 0.79,2.49 -3.31,2.3 -3.52,0.13 -0.83,-1.56 -3.4,-4.82 -1.19,-6.09 3.07,-0.15 6.37,-1.05 9.34,-0.19 0.41,-2.46 4.94,-2.22 3.88,0.41 0.59,1.49 3.45,3.68 4.43,1.04 1.16,-1.1 4.96,-5.66 4.94,-1.88 -0.59,2.44 0.18,5.72 -1.59,7.45 0.33,2.92 3.79,0.57 5.16,-0.39 2.48,-0.32 5.61,-3.48 7.29,-0.3 2.99,3.39 2.07,8.94 5.01,12.52 2.18,0.31 2.43,3.58 2.41,5.6 0.45,1.81 -0.72,3.89 -0.34,5.16 2.77,0.82 6.24,0.65 7.69,-2.25 -0.15,-1.12 -1.91,-2.61 0.74,-3.68 2.83,-1.31 3.76,2.79 4.2,4.84 -1.95,1.56 1.87,3.4 1.31,5.57 0.26,2.1 4.02,5.65 0.6,6.68 -2.91,-0.9 -2.81,3.3 -1.87,5.04 0.96,2.51 3.11,4.68 1.16,7.27 0.44,2.52 -1.72,6.37 1.65,7.44 1.89,1.55 4.82,1.6 5.41,4.43 1.71,2.58 1.5,5.88 2.31,8.79 -2.03,1.94 3.23,2.14 4.31,3.59 2.13,2.06 5.86,2.95 6.29,6.28 3.84,2.87 1.91,8.3 2.08,12.46 0.25,2.64 -0.94,5.5 -2.07,7.44 -0.04,3.1 4.34,2.42 3.61,6.41 2.49,1.05 0.06,3.97 -1.86,4.33 -1.61,1.16 -4.23,0.12 -2.18,-1.56 2.29,-3.25 -3.46,-0.68 -4.81,-0.69 -2.23,0.84 -5.79,-3.18 -5.97,0.9 -0.14,3 3.91,4.63 3.42,7.93 0.53,2.67 0.99,5.81 0.27,8.32 -1.49,1.89 -3.93,-0.58 -5.06,1.19 0.32,2.29 -3.52,3.66 -4.94,5.41 -3.13,1.93 -4.28,-3.47 -7.13,-0.01 -2.35,0.12 -0.74,3.36 -2.58,4.82 -1.74,2.44 -2.43,5.75 -0.16,8.06 1.31,2.7 4.08,4.51 3.75,7.78 0.56,4.38 1.13,8.84 2.71,12.9 2.91,1.82 1.6,5.52 2,8.41 0.45,2.66 -1.86,4.17 -1.66,6.72 0.19,1.55 -3.47,0.81 -1.84,3.13 2.61,1.07 0.38,3.66 0.87,5.81 0.2,2.47 -0.14,5.78 2.07,7.38 0.5,2.56 -3.74,2.92 -1.81,6.18 1.02,3.01 3.86,6.55 1.16,9.46 -1.18,1.16 -3.19,0.63 -3.38,2.95 -1.52,3.81 -0.35,-4.27 -2.92,-3.81 -1.88,-0.93 -3.51,0.34 -4.08,2.09 -3.48,0.28 -7.46,-0.44 -10.66,0.7 -2.62,1.93 -4.17,6.22 -7.96,5.49 -1.72,0.26 -2.84,-2.34 -4.53,-0.51 -3.88,1.61 -1.7,3.37 1.37,4.04 3.22,2.32 4.79,-0.35 6.38,-2.97 2.19,-2.61 6.67,0.35 5.03,3.47 -1.46,1.59 3.12,2.56 4.5,2.46 2.2,0.75 5.22,-2.54 5.71,-2.37 -1.26,2.65 0.2,5.16 1.79,7.23 3.74,-0.93 5.96,3.27 7.63,5.97 -1.64,1.92 -2.48,3.42 -1,5.94 0.03,1.72 5.17,0.51 4.35,-1.56 0.81,-1.86 3.6,-1.1 5.09,-0.53 2.05,2.24 -1.68,3.98 -1.81,6.26 -0.21,1.48 -3.48,5.59 -1.04,5.45 5.9,-0.28 10.64,-4.27 13.65,-9.1 1.68,-2.49 4.2,-4.8 5.23,-7.51 -0.27,-1.73 0.37,-4.61 -1.96,-4.47 -1.78,-2.98 -0.76,-6.77 -1.03,-10.06 0.59,-1.59 4.6,-2.06 3.97,0.09 -1.67,2.23 -0.39,3.45 2.34,3.77 2.31,0.63 4.34,0.47 4.81,-2.09 1.65,-2.51 5.13,-0.08 7.59,-0.22 0.5,2.03 3.14,2.52 5.19,3.38 2.99,1.48 5.86,-2.19 8.72,-1.09 3.48,2.5 -1.05,3.09 -0.97,5.59 2.55,0.29 4.83,1.11 6.25,3.38 2.96,1.58 0.77,3.77 1.16,5.09 4.01,0.78 8.16,-0.05 11.5,-2.41 2.24,-1.08 5.28,-2.46 7.66,-1.16 -0.63,2.06 -2.84,4.65 1.39,2.92 0.99,-2.2 2.51,-4.2 4.63,-5.64 2.78,-1.69 3.97,-4.98 6.66,-6.66 2.2,2.25 6,0.82 8.75,0.25 1.72,-1.5 -0.11,-4.24 1.75,-6 1.27,-3.31 5.21,-1.69 7.87,-2.01 3.14,-0.06 6.26,-0.02 9.34,0.6 1.3,-3.59 5.97,-3.64 9.18,-3.87 2.61,1.43 5.36,-1.54 7.57,0.5 2.56,0.03 5.94,1.12 8.03,-0.19 -0.56,-3.08 -2.75,-5.66 -1.81,-8.97 1.68,-1.6 3.23,-4.06 5.5,-4.97 2.05,1.73 -0.97,3.82 0.9,5.81 0.74,1.55 6.18,-3.23 5.07,-0.41 2.78,1.55 7.13,-0.47 8.4,3.24 1.5,2.9 4.05,3.71 6.55,1.34 2.39,-0.55 1.97,-4.34 4.92,-3.93 3.45,-1.43 7.22,-0.35 10.38,1.04 0.63,2.57 4.26,5.4 1.53,7.59 -1.91,3.64 3.48,5.29 5.61,7.15 2.86,2.07 5.93,3.86 9.26,5.04 1.6,-1.29 3.65,-3.83 2,-5.66 -1.98,-1.39 0.16,-4.42 -0.13,-6.41 0.81,-2.05 3.05,-3.55 3.5,-5.53 -1.37,-2.88 -2.02,-7.29 -5.72,-7.94 -0.69,2.59 -4.42,1.51 -6.31,1.34 -1.86,-0.73 -2.16,-2.62 -0.73,-4.04 1.53,-3.69 4.03,-7.15 5.39,-10.77 -2.14,-3.41 -3.7,-7.7 -6.59,-10.34 -2.88,0.4 -3.64,-2.11 -3.9,-4.41 -1.24,-4.49 -8.32,-5.42 -8.04,-10.73 0.04,-2.8 4.04,-3.87 5.63,-5.89 1.81,-1.22 1.17,-3.89 2.78,-4.97 2.57,-0.91 6.07,0.24 7.47,-2.89 1.29,-1.84 2.29,-3.74 4.7,-4.4 2.08,-2 5.15,-0.22 7.17,-2.39 2.7,-1.73 6.58,0.63 8.88,-2.3 3.06,-1.95 5.85,-4.79 7.85,-7.65 0.43,-2.52 2.26,-5.13 0.38,-7.38 0.45,-3.1 3.3,-6.59 0.44,-9.38 -0.61,-1.41 4.07,-1.2 4.41,-3.5 -0.1,-4.04 4.08,-0.04 6.17,0.11 3.24,1.6 5.97,4.3 9.52,5.26 3.15,-4.15 7.21,-9.07 5.25,-14.64 0.5,-2.8 -3.41,-5.03 -1.06,-7.39 1.18,-2.53 1.51,-5.28 -0.56,-7.48 -1.75,-2.45 -3.35,-5.1 -5.19,-7.42 -2,1.56 -5.42,0.69 -5.99,-1.97 -0.86,-2.58 -2.84,-4.62 -4.76,-6.5 -2.32,-0.51 -5.25,-0.27 -4.06,2.66 -1.49,2 -4.02,-1.61 -5.78,-2.26 -3.51,-1.84 -1.34,-7.26 -4.67,-9.54 -1.77,-2.1 -3.92,-4.14 -6.4,-5.23 -2.11,1.09 -4.33,0.73 -6.1,-0.79 -2.35,-0.65 -1.29,-3.34 -2.28,-4.52 -5.62,-4.34 -8.22,-11.7 -13.85,-16.05 -0.96,-0.66 -5.12,-1.7 -4.56,-0.67 1,2.66 -3.26,0.86 -4.59,0.92 -2.67,0.16 -4.59,-1.69 -5.1,-4.2 0.33,-2.99 -3.95,-3.91 -5.58,-5.98 -1.3,-1.16 -4.06,-3.42 -2.45,-4.96 0.01,-2.41 0.31,-4 -2.29,-4.05 -2.07,-0.53 -1.46,-1.98 -2.8,-3.5 -2.08,-3.55 -3.13,-7.39 -3.48,-11.47 -1,-2.47 -5.61,-0.9 -6.56,-3.96 -1.46,-1.68 -3.4,-4.99 -0.08,-5.91 3.24,-0.92 2.39,-4.05 3.21,-6.53 0.88,-3.28 4.17,-5.56 3.4,-9.15 -1.69,-2.78 -3.02,-7.24 -7.16,-6.34 -2.89,-1.46 -5.43,-3.31 -7.5,-5.81 -4.37,0.47 -3.42,-1.95 -5.22,-4.41 -1.08,-0.95 -3.08,-0.2 -3.19,-2.3 -0.69,-1.94 -0.29,-3.97 0.91,-5.48 -1.13,-3.44 -4.24,-5.4 -7.25,-6.96 -2.59,-1.3 0.21,-3.74 1.9,-4.17 -1.15,-4.86 -6.38,-5.68 -10.5,-6.63 -1.66,-1.44 1.51,-4.7 -1.45,-5.85 -1.47,-2.96 -3.98,-0.6 -6.15,-0.03 -4.99,1.83 -10.54,1.94 -15.74,2.63 -0.77,-0.67 -2.77,-2.61 -3.03,-0.5 -0.96,2.08 -4.29,1.95 -5.15,-0.33 -1.46,-1.7 -1.05,-3.98 -3.62,-3.71 -2.87,-0.72 -2.28,-4.47 -1.51,-6.47 2.3,-1.83 -2.65,-2.89 -4.3,-2.43 -1.7,1.3 -2.92,3.72 -5.37,4.41 -1.61,-1.19 -1.85,2.9 -0.04,2.88 0.66,3.05 1.58,6.38 1.39,9.48 -1.36,2.21 -0.38,7.05 -3.72,7.01 -1.95,0.12 -2.86,4.45 -5,1.12 -2.19,-1.15 -2.98,-4.4 -0.24,-5.3 -0.32,-1.92 -3.58,-5.33 -4.44,-2.09 -2.92,1.68 -7.59,1.16 -8.96,-2.28 -0.97,-2.98 -4.83,-0.87 -7.1,-1.48 -2.57,0.83 -5.91,1.76 -7.83,3.43 -0.82,2.98 1.43,4.47 3.69,5.77 1.52,2.24 6.27,1.22 5.55,4.87 -1.22,3.47 -5.4,0.77 -7.88,0.59 -0.91,0.73 1.13,4.84 -1.63,4.69 -2.37,-0.99 -5.13,-1.74 -7.34,-2.66 -1.81,-3.33 -1.13,-7.07 -0.75,-10.66 -3.86,-0.79 -8.92,-2.08 -9.69,-6.56 -1.65,1.27 -4.99,0.71 -4.64,-1.87 -0.45,-2.76 -1.64,-5.72 -3.61,-7.69 -2.74,-0.99 -5.53,-1.93 -6.83,-4.79 -1.25,-3.09 -5.32,-0.4 -7.74,-0.8z m46.75,26.38c-0.1,0.03 0.04,0.06 0,0z","name":"Bayern"},"bw":{"path":"m233,542.31c-1,3.03 -3.8,0.55 -6.25,1.41 -1.85,0.3 -6.11,-0.67 -4.1,2.56 0.5,1.4 3.45,5.79 2.97,1.91 0.74,-2.88 3.54,0.29 3.5,2.12 -0.05,2.12 0.13,4.28 -0.67,5.91 -2.21,2.88 -6.93,-2.7 -8.36,1.34 0.26,1.89 -0.96,3.78 -2.66,5.38 -2.87,1.47 -6.48,1.36 -9.56,0.91 -0.14,1.71 -1.09,2.75 0.88,3.56 2.16,2.43 -1.84,4.61 -2.82,1.5 -2.24,-0.41 -4.9,0.87 -7.01,1.83 -1.86,1.31 -3.21,3.14 -1.07,4.79 -2.58,2.03 -4.76,4.93 -7.53,6.53 -2.28,0.77 -4.85,-1.67 -3.07,-3.7 0.44,-3.45 3.31,-3.76 5.49,-5.64 2.15,-2.77 -2.95,-1.33 -4.33,-2.33 -3.36,-0.68 -8.66,-1.27 -8.78,-5.66 -0.37,-2.27 -2.39,-6.18 0.16,-6.35 -1.56,0.22 -6.19,0.51 -5.66,2.03 1.02,1.01 1.63,3.91 1.34,5.81 -0.91,2.56 -4.61,4.01 -6.17,1.22 -1.23,-2.27 -2.8,-5.47 -5.58,-5.87 -1.35,0.5 -2.27,2.96 -1.13,4.34 0.64,2.82 1.72,5.99 1.41,8.75 -1.19,1.47 2.13,0.8 2.94,1.09 2.56,1.28 -0.68,4.01 0.44,6.03 0.58,2.78 -1.68,4.86 -3.44,6.5 -0.2,1.61 2.95,0.95 2.5,3.03 -0.5,1.7 -2.89,2.29 -3.8,3.97 -1.51,1 -4.09,2.21 -3,4.19 -0,4.19 -1.63,8.4 -2.57,12.44 -1.88,2.38 -4.07,4.74 -4.06,8 -0.94,3.32 -4.33,5.15 -7.25,6.25 -3.09,4.3 -5.58,9.02 -6.75,14.19 -2.02,2.94 -5.4,5.15 -8.91,5.69 -0.21,2.82 -1.4,5.14 -3.56,6.99 -1.36,2.17 -3.49,3.53 -5.66,4.61 -1.15,2.67 -3.64,5.13 -2.5,8.22 0.36,2.98 -0.28,5.69 -1.97,8.15 -1.95,4.34 -4.99,8.87 -3.01,13.76 0.98,2.33 -1.6,3.46 -3.29,4.06 -1.58,3.35 -1.03,7.85 -3.97,10.71 -3.45,3.81 -5.74,8.63 -5.57,13.85 -1.32,3.83 3.9,5.48 3.32,9.25 -1.3,3.08 -3.94,5.46 -4.57,8.93 -0.87,1.91 1.04,3.96 -0.54,5.81 -1.06,2.51 -2.87,5.19 -1.04,7.86 1.18,2.15 -0.92,4.15 -2.35,5.35 -0.31,3.89 3.1,6.22 5,9.16 2.34,1.03 6.63,0.35 6.5,3.84 -1.16,1.4 -4.38,2.08 -0.94,3.62 2.67,0.19 5.38,-1.24 7.85,-2.15 1.44,-1.71 2.81,-3.83 5.44,-3.09 2.67,-0.79 2.95,2.96 5.54,2.9 3.15,1.3 6.81,1.64 9.99,0.41 0.13,-3.3 4.53,-3.63 6.59,-5.48 2.38,-1.41 5.39,0.37 7.78,0.98 0.79,1.29 -0,3.08 2.19,3.78 3.61,0.25 7.37,1.32 10.72,-0.47 -3.18,-2.2 -0.41,-3.55 1.74,-5.09 1.44,-1.37 5.34,0.59 4.6,2.72 0.03,1.73 2.81,-2.43 2.91,-3.66 0.99,-2.17 -2.08,-3.31 -3.78,-2.38 -2.21,0.79 -3.16,2.58 -5.97,3.13 -1.88,-0.81 -4.32,-2.21 -5.31,-4.16 0.59,-3.61 2.99,-6.72 5.06,-9.63 1.63,-2.24 5.73,-0.38 6.44,-3.38 2.06,-2.35 5.55,0.44 4.49,3.47 2.07,0.67 0.21,-4.19 4.06,-1.25 1.57,1.2 4.32,3.45 2.25,5.23 0.1,2.76 1.41,4.58 4.22,5.01 1.74,-2.24 3.46,-0.92 5.76,1.59 2.1,2.97 5.8,0.78 7.96,-0.93 3.82,-2.7 8.65,-0.24 12.27,1.62 3.55,2.04 4.43,-1.99 2.13,-4.27 -0.59,-2.2 -2.12,-3.67 -4.12,-4.07 -2.4,-1.85 -6.01,-3.5 -6.96,-6.5 0.3,-2.1 3.03,-1.62 3.78,-0.16 3.5,2.46 7.48,4.47 10.66,7.31 -0.21,3.96 4.69,5.62 7.5,7.39 1.67,0.53 3.72,-1.14 5.59,-0.11 2.75,0.87 6.81,1.33 7.03,4.97 0.46,3.2 4.49,4.9 6.69,2.27 1.24,-1.5 4.61,-2.56 5.4,-0.7 4.17,1.33 6.15,-3.91 8.97,-5.72 3.32,-0.45 7.13,0.12 10.19,-0.66 1,-2.57 4.28,-2.37 6.22,-1.28 0.84,2.31 0.58,2.71 2.56,1.13 2.97,-0.39 2.03,-4.58 0.76,-6.39 -1.17,-2.02 -2,-5.8 -0.79,-7.3 3.32,-0.17 0.06,-2.21 -0,-3.93 -0.63,-3.04 -0.86,-6.31 0,-9.32 -2.23,-0.74 -2.32,-4.76 0.44,-4.66 -0.41,-2.68 2.08,-4.21 1.66,-6.88 -0.15,-2.82 0.59,-6.09 -1.94,-7.94 -2.26,-5.15 -1.96,-11.11 -3.49,-16.32 -1.93,-2.69 -4.53,-5.55 -4.67,-9 0.46,-2.92 3.93,-5.48 2.72,-8.47 0.1,-0.35 4.87,-3.47 6.42,-2.05 2,3.2 4.93,-0.95 6.82,-2.36 0.33,-1.38 1,-2.91 3.14,-2.96 3.03,1.76 2.98,-2.24 2.69,-4.25 -0.32,-3.5 -1.14,-6.78 -3.64,-9.37 -0.98,-1.42 0.15,-4.75 1.23,-5.16 3.02,1.48 6.11,1.47 9.25,0.41 2.37,-0.94 3.55,1.55 1.82,3.19 0.08,1.06 5.19,-1.87 2.3,-2.88 -0.25,-2.1 -0.85,-4.44 -3.47,-3.91 -1,-3.13 0.42,-4.65 1.54,-7.33 0.09,-4.38 1.32,-9.19 -0.13,-13.38 -2.03,-1.38 -1.82,-4.46 -4.4,-5.39 -2.47,-2.1 -5.26,-3.59 -8.29,-4.72 -0.45,-2.63 0.5,-4.11 -0.61,-6.97 -0.35,-3.23 -2.39,-5.85 -5.43,-6.81 -1.8,-1.05 -4.02,-2.25 -3.05,-4.75 -0.53,-2.57 0.99,-5.27 0.62,-7.5 -1.67,-2.84 -3.08,-6.33 -1.5,-9.56 2.72,0.17 4.05,-1.19 2,-3.69 -1.12,-2.08 -1.1,-4.65 -2.84,-6.37 -0.05,-1.52 1.05,-2.79 -0.28,-4.24 -1.33,-3.13 -3.46,0.38 -1.36,0.89 -1.36,2.26 -3.18,4.9 -6.23,4.2 -1.84,0.68 -5.99,-0.78 -4,-3.06 0.32,-2.43 0.8,-5.95 -0.91,-7.66 -1.91,-0.49 -2.69,-3.58 -3.13,-5.51 -1.12,-3.07 -1.07,-6.84 -4.03,-8.84 -3.37,0.71 -6.2,2.77 -9.34,3.81 -2.15,-0.26 -3.2,-3.12 -1.25,-4.19 -0.15,-1.71 1.98,-8.34 -1.11,-4.8 -1.56,1.02 -3.09,4.67 -5.17,2.44 -1.38,-0.64 -3.13,-1.84 -2.32,-3.58 -0.34,-0.5 -0.91,-0.09 -1.41,-0.13z m-57.69,212.03c0.26,4.67 5.28,-0.76 0,0z","name":"Baden-Württemberg"}}});

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