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
            jQuery.fn.vectorMap('addMap','greece',{"paths":{"30":{"path":"M420.84,610.62l0.6,-2.95l2.52,-1.21l1.51,0.78l1.03,-1.03l0.13,-5.12l0.49,-2.19l0.69,-0.69l2.13,3.43l4.4,-0.52l1.93,-6.25l0.03,-3.74l-2.04,-2.19l1.58,-2.32l-1.7,-2.35l0.23,-0.51l1.97,1.18l0.59,-0.23l0.34,-1.21l3.46,0.17l0.95,-1.95l1.37,1.01l1.07,-0.67l0.98,0.21l-0.15,0.88l1.02,0.9l1.19,0.12l-0.76,1.22l0.24,1.97l0.55,1.17l1.5,0.9l2.54,0.2l6.51,-0.8l1.36,1.17l2.4,-0.2l0.93,0.45l11.41,-0.75l0.68,1.54l1.45,1.2l0.91,0.09l0.73,1.11l4.33,-0.05l-0.1,1.51l-2.21,1.89l-2.68,0.03l-1.29,0.98l0.02,1.76l-1.56,3.51l0.34,1.46l1.06,1.18l6.05,2.92l0.88,0.98l-0.27,2.21l2.54,1.09l1.24,2.29l0.05,4.61l-3.61,0.77l-2.45,-0.82l-3.17,0.44l-3.4,-1.09l-3.46,1.49l-3.85,-0.2l-1.15,1.54l-1.66,0.85l-4.03,1.04l-0.59,-0.72l-4.34,0.12l-2.71,1.72l-0.64,-0.51l-3.66,-0.32l-2.35,1.19l-2.49,-0.5l-1.86,0.83l-0.55,-0.7l-2.58,0.65l-6.38,-1.29l-2.17,0.32l-1.42,1.22l-1.83,-0.47l-2.65,0.59l1.84,-2.13l-0.76,-1.24l0.45,-0.4l-0.38,-1.96l0.08,-0.94l1.05,-0.6l-0.02,-1.74l-1.25,-4.67l-1.74,-1.49l-1.46,-0.17ZM459.6,579.71l-0.31,-0.33l1.25,-0.46l0.42,-0.92l1.68,1.17l-0.16,1.03l-0.79,0.27l-0.35,-0.81l-1.75,0.05Z","name":"Heraklio"},"28":{"path":"M275.61,38.56l4.99,0.09l0.68,0.66l3.98,0.4l1.89,-0.26l5.64,1.51l6.68,-0.2l3.51,-1.66l1.13,-3.67l4.09,-2.23l2.08,0.08l1.54,3.26l3.52,-1.75l1.79,-1.66l1.4,0.24l1.45,-0.73l3.6,0.73l3.36,-0.66l1.72,1.77l2.12,-0.35l1.54,1.17l2.45,0.01l-0.2,1.86l1.18,4.08l6.66,3.06l-1.35,4.61l0.6,1.63l3.83,3.09l4.69,5.15l4.14,2.81l4.19,0.99l2.35,2.15l1.9,-1.23l2.58,-0.02l1.37,0.93l1.75,2.91l5.29,3.67l-0.4,1.12l0.82,2.63l-1.09,3.5l-5.39,4.06l-1.72,2.35l-4.08,3.11l-12.05,3.17l-2.08,0.73l-1.58,1.27l-12.88,0.02l-3.68,-2.34l-2.51,-2.52l-1.88,-0.52l-2.98,1.0l-1.01,-0.36l-0.97,-2.77l-4.22,0.31l-0.97,-1.0l-0.6,-3.84l-1.36,-0.94l-0.48,-1.48l-2.98,-0.46l-2.04,-4.12l-2.87,-3.05l-3.59,-2.52l1.03,-2.29l-0.51,-1.9l-12.37,-4.52l-4.06,-4.34l0.16,-1.31l-0.87,-1.43l-0.55,-0.13l-4.51,2.8l-2.52,-0.63l-1.11,-0.86l-0.5,-1.16l1.05,-4.05l-1.2,-3.99l0.4,-5.98Z","name":"Serres"},"29":{"path":"M261.09,114.12l-4.19,-1.83l-2.31,-5.35l-4.42,-4.66l-5.66,-0.79l2.39,-2.42l2.8,-1.76l1.25,0.19l0.43,-0.55l-1.82,-2.64l-0.88,-2.62l-1.62,-1.01l3.07,-0.25l0.34,-1.26l3.87,0.84l1.55,-0.54l-0.31,-1.25l1.26,-1.51l1.37,-0.67l0.9,0.31l-0.17,2.39l0.9,2.71l2.64,2.12l4.45,-2.1l4.6,0.43l5.98,-1.36l1.63,0.13l1.96,-2.29l4.89,-2.55l-0.05,-3.85l0.66,-0.94l4.95,-2.22l5.91,-0.85l2.36,-2.28l4.58,-1.55l1.0,-0.95l1.64,1.32l1.99,4.11l2.92,0.41l0.44,1.38l1.31,0.86l0.59,3.77l1.3,1.44l4.38,-0.17l0.52,2.34l1.6,0.77l3.25,-1.0l1.41,0.45l2.38,2.44l4.04,2.49l10.33,0.14l-2.67,4.56l-0.44,2.83l0.74,0.82l3.21,0.88l1.91,2.27l-6.67,-0.18l-3.58,3.38l-1.44,0.69l-4.12,-0.43l-2.67,2.17l-7.05,-1.43l-3.01,4.83l-1.1,0.85l-1.23,-0.64l-2.84,-0.2l-2.18,3.74l-4.04,-0.84l-4.81,1.68l-2.33,2.65l-0.25,1.41l0.57,2.49l-2.37,2.06l-1.23,2.15l-1.07,0.02l-0.99,-0.77l-0.34,-3.73l-2.04,-0.5l-1.49,1.22l-1.06,2.4l-0.76,5.1l-0.73,-1.84l-2.64,-2.37l-1.79,-0.28l-1.36,-0.99l-2.85,0.18l0.64,-0.61l-2.23,-3.32l-1.36,-0.83l-0.83,-2.98l-1.17,-0.84l-1.99,-0.38l0.24,-2.01l3.24,0.44l3.59,-0.39l3.02,-1.19l2.7,-2.11l0.31,-1.53l-3.55,-2.77l0.9,-1.0l0.37,-2.36l-1.15,-1.6l-1.81,-0.6l-0.81,0.32l-1.58,-1.03l-2.77,1.87l-1.81,-0.6l-0.44,1.13l0.88,1.05l1.26,0.16l-0.15,1.67l-3.95,2.47l-2.1,-0.7l-2.56,1.06l-0.45,0.56l0.56,1.15l-0.98,0.74l0.39,2.02l-1.09,-0.6l-0.49,0.48l0.19,1.0l-1.11,-1.76l-0.5,0.16l-0.42,-0.86l-0.77,-0.17ZM278.81,128.1l-0.0,0.0l-0.05,-0.0l0.01,-0.01l0.05,0.01Z","name":"Thessaloniki"},"34":{"path":"M502.84,458.49l0.72,0.26l1.34,-1.64l0.88,0.18l0.59,-0.6l2.96,0.43l1.56,-0.58l0.62,-0.58l-0.31,-0.68l1.34,-0.35l-2.04,-1.11l0.41,-0.71l4.64,-1.26l4.73,-2.72l1.13,-0.93l-0.51,-0.8l-1.29,-0.08l1.12,-1.04l2.19,0.13l0.42,-0.94l2.71,2.05l2.69,1.14l-0.98,0.1l-0.97,-0.78l-2.04,0.3l-4.1,1.71l-2.02,2.22l-1.13,0.23l-2.09,2.09l-0.42,1.29l-2.97,2.51l-3.02,0.1l-1.95,1.66l-2.14,-0.13l-2.06,-1.47ZM515.0,449.74l0.37,-0.11l0.75,0.15l-0.19,0.14l-0.92,-0.18ZM501.66,496.87l2.8,-3.07l4.2,2.63l0.67,1.13l1.66,0.48l-0.67,0.25l-1.68,-0.93l-4.01,1.0l-2.45,-0.78l-0.52,-0.72ZM506.66,429.4l1.43,-1.27l1.41,1.52l-0.07,0.81l-1.4,0.35l-1.59,-0.92l-0.31,-0.87l0.53,0.36ZM509.09,505.08l0.62,-0.01l0.04,0.15l-0.39,0.22l-0.28,-0.37ZM497.64,473.35l0.11,0.0l-0.04,0.04l-0.07,-0.04ZM496.21,453.59l0.05,-0.03l0.08,0.11l-0.07,-0.03l-0.06,-0.05ZM492.19,449.99l0.1,-0.84l1.17,0.1l1.54,-1.28l1.72,0.73l-0.13,0.73l0.79,0.93l-0.85,-0.37l-1.4,0.4l-1.27,-0.91l-1.67,0.5ZM490.75,445.09l0.44,-1.01l1.07,-0.1l0.47,0.8l-0.9,0.61l-1.07,-0.29ZM472.0,432.79l-0.92,-1.49l1.94,0.6l0.86,-1.33l-0.11,-0.73l2.88,-2.45l2.71,-0.38l1.96,-1.84l1.07,-2.07l3.57,-1.82l0.6,0.35l0.15,1.14l2.39,2.11l1.61,4.04l-0.65,1.4l0.48,1.44l-0.94,0.85l-0.48,4.64l-0.81,0.73l-1.25,4.94l-3.04,0.15l-1.4,0.68l-0.91,1.39l-0.75,-0.46l-1.72,1.76l-1.67,-1.3l0.13,-2.87l-3.04,-1.35l0.61,-1.0l-1.76,-2.95l0.64,-1.16l-2.15,-3.02ZM488.07,448.11l-0.07,-0.03l0.36,0.02l-0.14,0.03l-0.15,-0.03ZM488.65,447.99l0.33,-0.48l0.27,0.03l-0.48,0.56l-0.12,-0.12ZM490.18,447.02l0.13,-0.23l0.38,-0.18l-0.26,0.31l-0.26,0.1ZM484.44,451.14l-0.69,-0.59l1.29,-1.01l0.79,2.34l-1.39,-0.74ZM481.95,398.56l-0.04,-0.05l0.09,-0.09l0.03,0.06l-0.08,0.08ZM472.63,497.63l0.21,-0.54l0.29,0.16l-0.09,0.0l-0.41,0.38ZM473.26,497.25l0.61,-0.28l2.52,0.53l2.09,-3.08l-0.67,-1.24l-0.12,-1.97l-0.76,-0.56l0.69,-1.19l-0.79,-1.1l-0.42,-0.43l-3.06,0.13l0.0,-0.91l1.18,-0.58l2.27,0.63l5.06,5.69l0.09,2.74l-0.61,0.75l0.46,0.67l-2.95,2.39l-1.62,-1.25l-2.86,-0.11l-1.11,-0.81ZM477.9,455.08l-0.61,-0.55l0.62,0.12l0.55,-0.63l-0.24,-0.58l1.44,-0.56l0.4,-0.4l-0.02,-0.14l0.42,-0.42l-0.07,-0.09l0.2,-0.2l0.19,1.15l0.74,0.67l-0.15,1.23l-1.05,-0.01l-0.73,0.76l-1.69,-0.35ZM468.85,401.16l0.0,-0.0l0.0,0.0l-0.0,-0.0ZM468.87,401.08l-0.79,-0.62l0.07,-0.55l0.5,0.22l0.22,0.95ZM470.07,401.46l-0.46,-0.71l0.57,-3.52l-1.16,-0.91l-0.5,-0.9l0.32,-0.52l3.01,-0.49l0.12,1.85l1.47,1.56l1.08,-1.01l-0.15,-2.2l1.12,-0.03l-0.06,0.89l0.88,0.63l1.09,-0.1l0.27,0.9l2.21,-0.1l-0.34,1.61l-2.31,0.32l-0.65,1.12l-0.73,-0.37l-0.68,1.56l-0.83,-0.55l-0.92,0.99l-0.48,-0.28l-0.39,0.81l-2.04,-0.91l-0.43,0.33ZM474.69,493.39l0.11,-0.58l1.08,0.14l-0.81,0.84l-0.38,-0.4ZM464.56,464.18l-0.3,-0.35l0.74,-1.52l-0.27,-1.94l0.88,-1.27l2.4,-0.59l1.51,1.41l0.27,0.62l-0.51,0.99l0.42,0.43l4.42,2.03l1.01,1.22l-1.67,1.68l0.43,0.67l-0.39,0.41l0.68,0.73l-0.55,0.63l0.61,0.93l-1.33,-0.53l-0.98,1.42l-1.86,-2.68l-2.93,-2.47l0.41,-0.54l-0.6,-0.68l-1.67,0.15l0.52,-0.67l-0.55,-0.58l-0.7,0.5ZM469.77,490.79l0.89,-1.87l0.87,0.45l-0.7,1.3l0.26,1.38l-1.28,-0.53l-0.04,-0.74ZM452.02,436.9l0.77,-1.41l-0.09,-1.83l3.88,-2.43l-0.55,-0.8l-1.02,-0.23l1.95,-1.97l4.07,-1.67l0.04,0.69l-0.83,0.75l1.3,0.91l1.45,-0.71l1.75,0.33l0.74,-0.93l0.31,0.66l-1.36,1.88l0.28,0.89l-1.07,1.08l1.76,1.61l-0.99,0.53l0.43,0.75l-1.46,1.82l-0.22,1.31l-5.07,3.1l-2.73,-0.98l-1.09,-1.16l-0.76,0.38l-1.48,-1.73l0.01,-0.84ZM465.42,427.26l-0.28,-0.9l0.82,-0.38l0.4,0.51l-0.94,0.78ZM464.63,426.32l0.0,0.0l-0.0,0.0l0.0,-0.0ZM465.35,404.05l-0.25,-0.32l0.14,-0.52l0.28,0.58l-0.17,0.25ZM443.43,380.46l-1.14,-1.21l-0.18,-0.89l1.64,0.95l0.6,-1.16l0.87,0.56l0.76,-0.65l0.62,0.81l1.04,-0.66l0.42,1.03l-0.72,0.72l1.15,0.96l1.21,-0.19l0.43,0.82l2.8,-1.22l1.71,1.16l0.33,1.0l0.88,-0.18l0.36,-0.71l1.18,0.39l0.86,-0.49l0.41,0.54l1.22,0.05l2.67,2.2l0.92,-0.08l-0.04,2.07l-1.88,2.64l0.32,1.49l-3.09,0.9l-3.51,-2.45l-1.18,-0.25l-0.53,0.55l-0.77,-0.39l0.39,-1.2l-1.23,-1.29l-2.65,-1.47l-0.43,0.3l-1.57,-2.05l-1.68,-0.67l-2.17,-1.91ZM459.99,400.83l1.13,0.29l0.48,-0.48l0.76,0.62l-0.13,0.65l-1.06,0.5l-0.1,-0.76l-1.07,-0.83ZM463.25,404.57l-0.13,-0.51l0.53,-0.46l-0.04,0.99l-0.36,-0.01ZM461.95,402.29l0.02,0.02l0.0,0.0l-0.02,-0.02ZM461.84,405.15l-0.15,-0.1l0.47,-0.56l-0.04,0.58l-0.27,0.08ZM459.81,507.32l-0.06,-0.0l0.15,-0.25l0.13,0.13l-0.22,0.13ZM449.9,472.1l-0.87,-0.13l1.86,-2.41l0.66,-2.14l3.33,-1.94l2.96,-0.13l-0.16,0.96l-2.04,2.14l-5.74,3.64ZM445.84,441.07l0.5,-1.96l-0.4,-0.45l1.56,-0.81l0.9,-1.61l1.79,-0.6l-0.9,3.14l0.04,2.04l-1.11,1.03l0.85,1.88l-2.01,-2.26l-1.22,-0.41ZM450.22,435.48l-0.09,-0.22l0.15,-0.02l0.07,0.06l-0.13,0.18ZM443.16,443.4l-0.67,-0.59l0.57,-0.82l0.8,0.62l1.27,-0.48l0.6,0.56l-1.47,0.57l-0.46,-0.45l-0.63,0.58ZM420.49,356.11l-0.55,-0.92l0.13,-1.6l-0.7,-0.77l0.43,-1.14l2.83,-1.07l1.45,-1.35l2.99,-0.46l-0.55,1.07l0.66,1.19l3.07,0.96l-0.42,2.09l1.41,2.84l1.95,0.03l0.95,0.71l5.12,-0.31l0.42,0.41l0.43,2.15l-1.38,1.49l-0.37,1.37l1.04,1.03l0.88,0.02l0.42,1.09l0.64,-0.48l0.63,0.9l-2.27,3.87l0.71,0.73l3.15,-0.69l-1.53,3.69l-2.28,2.3l0.61,0.96l-0.37,0.4l-2.82,-2.63l0.26,-0.67l-2.06,-3.62l-0.88,-0.58l-0.94,0.27l-0.55,-1.16l-0.65,0.12l-0.64,-1.62l-1.13,-0.25l-0.04,-1.26l-1.06,-0.98l-1.11,-0.16l-1.01,-2.81l-1.87,-2.03l-2.16,-0.38l-0.55,-0.79l-1.37,1.46l0.15,-1.8l-1.29,-0.74l0.24,-0.93ZM432.87,403.09l0.13,-1.03l1.2,-0.54l0.42,-0.42l-0.34,-0.52l2.09,-1.73l-0.46,-1.72l0.57,-0.81l-0.57,-0.64l0.57,-0.86l-1.75,-1.8l3.26,1.01l1.57,2.18l-0.04,2.25l-0.88,1.77l1.14,0.27l1.47,2.34l-1.36,1.02l-0.48,-0.39l-4.8,2.35l0.36,-2.51l-0.53,-0.5l-1.57,0.27ZM440.58,444.18l0.07,-0.33l0.45,-0.35l-0.31,0.65l-0.21,0.04ZM431.75,470.64l1.26,-0.66l3.6,3.02l1.01,0.18l0.55,-0.48l1.35,0.97l-0.18,0.67l0.82,1.04l-0.6,0.42l-2.63,-0.48l-1.45,-2.94l-2.4,0.0l-1.34,-1.73ZM416.32,436.84l0.02,-0.43l0.55,-0.05l1.45,1.16l1.53,-0.16l4.95,6.08l-1.72,1.98l-0.44,-0.34l-0.71,0.58l-1.03,1.92l-0.76,-0.15l-0.64,-1.06l0.5,-0.81l-0.9,-0.31l-0.46,-1.4l0.37,-0.48l-1.21,-0.85l0.33,-0.66l-0.95,-0.75l1.8,-0.96l-1.77,-0.95l0.28,-0.46l-0.76,-0.7l0.3,-0.81l-0.75,-0.38ZM422.13,448.17l0.0,-0.02l0.02,0.0l-0.02,0.02ZM418.49,384.43l-0.19,-0.05l0.42,0.05l-0.23,0.0ZM419.3,384.48l1.78,-2.01l2.05,-0.35l-0.55,1.98l0.33,0.94l-3.61,-0.56ZM413.17,459.53l0.39,-0.78l2.86,0.88l0.61,1.77l-1.01,0.75l-2.0,-0.53l-0.86,-2.09ZM406.38,456.31l-0.02,-0.64l0.43,0.18l2.27,-2.13l1.25,1.45l1.56,-0.44l0.32,0.19l-0.86,1.13l-0.11,1.61l-1.27,1.58l-0.92,-0.3l-1.29,0.7l-0.66,-0.65l0.18,-0.99l-0.88,-0.63l-0.02,-1.08ZM390.6,470.47l-0.11,-0.96l1.03,-1.0l-0.46,-1.49l0.85,-1.1l-0.51,-0.65l1.32,-2.83l1.55,1.67l1.35,-0.3l0.34,0.44l-0.56,1.29l0.8,0.98l1.75,0.15l1.08,1.16l1.18,0.08l1.77,-0.96l0.47,-1.1l-1.78,-2.03l-1.64,0.35l-1.41,-2.23l0.11,-1.3l0.74,-0.27l-0.31,0.68l0.49,0.53l3.35,1.58l2.83,-1.18l0.53,-1.16l1.86,0.73l-0.77,1.31l1.4,3.45l-1.39,2.25l-0.87,-0.16l-3.31,1.43l-0.68,-0.68l-1.55,-0.28l-2.56,1.18l-5.76,0.43l-0.9,0.65l-0.23,-0.65ZM398.01,427.74l0.38,-0.39l1.04,-0.67l-0.83,-1.59l1.18,-0.4l-0.55,-0.81l1.01,-0.62l0.36,-1.13l0.55,0.39l0.45,-0.79l0.78,0.24l0.56,-0.97l2.24,0.08l1.43,0.76l-0.33,0.86l0.38,0.42l-0.8,1.65l0.78,0.44l0.34,1.13l-0.92,-0.76l-0.75,0.53l0.0,2.32l-1.2,0.56l0.2,-0.67l-0.99,-0.78l-1.7,0.4l0.35,-0.94l-0.62,-0.55l-1.07,0.78l-0.53,-0.58l-1.75,1.08ZM394.19,411.77l0.64,-0.69l-0.41,-1.03l0.85,-1.07l-0.03,-1.1l1.65,-1.78l-0.93,-1.64l0.69,-0.71l0.15,-0.78l-0.68,-0.59l0.6,-0.5l-2.63,-0.85l2.54,-3.33l2.51,-1.78l-0.64,3.46l1.0,0.29l0.21,1.12l2.02,0.03l1.23,2.16l-0.38,0.38l-0.8,-0.59l-1.01,0.55l-0.37,0.86l0.4,0.76l-1.19,2.66l-0.56,-0.13l-0.68,1.38l-0.55,-0.14l-1.96,2.55l-1.66,0.51ZM387.38,387.25l-0.33,-0.97l-0.85,0.04l0.99,-1.44l-0.46,-1.51l0.81,-0.66l-0.27,-0.36l1.3,-2.57l1.79,-0.21l0.63,-1.72l1.2,-0.33l0.47,0.84l0.89,-0.94l3.2,1.85l0.36,0.77l-0.91,0.57l0.26,0.51l-0.86,2.17l-2.58,3.62l-3.02,2.11l-1.93,2.45l-0.99,0.06l-0.26,-1.64l0.56,-2.63ZM382.76,458.05l0.87,-0.71l1.0,0.28l-0.35,2.34l-1.37,-1.11l-0.15,-0.8ZM373.3,379.84l1.99,-7.53l0.84,-1.21l0.61,1.1l-0.43,0.43l0.24,0.89l-1.18,1.08l-0.92,2.18l0.3,0.4l-1.45,2.66Z","name":"Cyclades"},"24":{"path":"M288.95,133.67l0.57,-1.39l0.2,-3.74l0.99,-2.24l1.15,-0.9l0.91,0.14l0.48,3.87l1.24,0.96l1.69,0.06l1.63,-2.46l2.49,-2.23l-0.31,-3.95l2.09,-2.31l4.43,-1.5l4.02,0.89l2.26,-3.77l4.14,0.82l1.48,-1.18l2.59,-4.5l6.97,1.43l2.6,-2.15l4.06,0.42l1.82,-0.8l3.28,-3.26l4.05,0.42l2.99,-0.3l0.57,0.58l0.24,2.03l1.82,1.52l1.14,0.0l1.31,2.16l1.75,-0.29l2.02,0.75l0.51,-0.51l0.16,0.81l1.73,1.19l-1.36,0.79l-4.51,0.0l-0.99,0.71l-0.79,2.88l1.31,4.02l1.32,0.75l-0.15,0.6l0.99,1.3l2.61,2.24l3.02,1.22l2.38,-0.07l0.53,0.43l2.63,-0.54l-0.04,4.51l-0.24,0.81l-2.64,-2.77l-3.39,-1.66l-2.35,0.41l-3.13,-0.93l-3.33,1.35l-2.06,1.77l-1.12,-0.84l-2.69,-0.7l-0.99,1.23l0.19,0.69l-1.28,-0.13l-0.47,0.45l-1.05,4.35l1.18,2.67l2.64,3.04l1.53,0.47l0.15,1.61l1.39,1.51l1.25,0.34l1.24,-0.57l1.3,1.21l6.81,2.1l1.93,1.86l2.95,1.04l1.09,1.14l-0.72,0.84l-0.2,1.65l2.11,2.19l-1.63,1.71l0.64,0.94l1.93,-0.03l0.33,1.35l-0.27,0.98l-0.96,0.18l-1.56,1.79l0.85,1.19l-2.38,0.8l1.17,0.99l1.07,-0.04l-0.9,0.45l-1.44,-0.26l-1.49,0.96l-1.47,-0.9l0.5,-1.3l-1.04,-0.86l-0.21,0.9l-0.57,-0.0l0.02,-1.9l-1.34,-1.28l-1.34,-0.1l-0.85,-1.68l-2.06,-0.93l-1.22,0.43l-0.24,-1.76l-2.02,-2.22l0.38,-2.09l-1.42,-0.83l-0.11,-1.83l-3.1,-2.57l-1.85,-3.43l-1.41,-1.36l-0.98,-0.19l-0.24,-0.8l-2.28,-1.98l-2.91,-0.41l-2.47,0.34l-2.59,-1.14l-1.7,0.08l-2.61,-2.1l-2.8,-0.26l-2.61,-1.4l-2.1,-0.23l-1.38,0.72l-2.92,3.12l-1.75,3.48l-0.51,-1.62l-2.0,-1.72l-5.56,-1.81l-2.01,-0.09l-1.69,-1.28l-2.39,-0.21l-2.36,-1.99l-6.25,-2.37ZM315.18,150.84l2.0,0.36l1.61,1.12l1.69,2.3l1.01,2.63l3.62,3.89l7.71,3.46l3.66,1.19l1.97,0.08l0.92,0.87l-0.3,0.69l1.63,2.98l1.16,0.49l2.78,-0.31l0.19,0.74l-2.37,0.7l-2.39,-0.85l-3.24,0.26l-3.9,-0.62l-1.21,-1.03l-1.8,-0.21l-7.19,-3.31l-1.95,0.0l-1.76,0.93l-2.91,-0.31l-1.13,0.47l1.27,-2.05l0.31,-2.01l-3.09,-4.6l-0.22,-1.19l-2.43,-1.83l-0.17,-1.23l1.38,-2.73l-0.5,-0.99l0.79,-3.51l-0.46,-1.85l1.35,1.68l0.53,2.3l1.47,1.51ZM311.83,145.21l0.0,0.05l-0.01,-0.06l0.01,0.01ZM311.77,145.09l0.0,-0.04l0.01,0.05l-0.01,-0.01ZM311.8,145.12l0.01,0.01l-0.0,0.04l-0.01,-0.01l0.0,-0.04ZM347.7,144.3l-0.23,-0.35l-0.04,-0.53l0.59,0.44l-0.32,0.44ZM356.51,133.08l1.6,-0.55l0.63,0.76l-1.11,0.41l-1.13,-0.62ZM359.96,134.69l0.01,-0.01l0.07,0.07l-0.02,0.0l-0.06,-0.06Z","name":"Chalkidiki"},"25":{"path":"M238.06,57.62l3.34,1.83l3.02,0.11l6.61,-1.25l3.21,1.2l1.77,-1.29l2.48,-4.13l1.12,-0.62l2.17,2.47l2.3,1.02l1.53,-1.3l1.16,-2.35l0.79,-11.67l0.59,-1.95l3.0,-1.17l3.7,0.45l-0.43,5.56l1.2,4.1l-1.06,3.85l0.73,1.81l1.41,1.04l2.76,0.69l4.62,-2.72l0.58,0.95l-0.1,1.48l4.33,4.57l12.31,4.52l0.19,1.2l-0.79,1.18l-0.1,1.66l3.73,2.62l0.66,1.09l-0.81,0.82l-4.58,1.55l-2.26,2.23l-5.83,0.84l-5.21,2.32l-1.05,1.57l0.12,3.55l-4.63,2.25l-1.84,2.21l-1.38,-0.19l-5.99,1.36l-4.58,-0.43l-1.5,0.28l-2.57,1.83l-2.21,-1.7l-0.84,-2.52l-0.06,-2.87l-1.66,-0.44l-1.73,0.89l-1.35,1.62l-9.75,-2.22l-6.01,0.56l-1.3,-2.76l-3.99,-1.96l-0.58,-1.63l-2.09,-2.63l-4.66,-1.23l-0.77,-2.62l0.58,-0.84l2.71,-0.08l0.35,-1.51l1.35,-1.37l-0.29,-1.21l1.08,-2.71l-0.11,-5.36l0.91,-3.05l1.46,0.97l4.23,-0.49Z","name":"Kilkis"},"26":{"path":"M211.87,55.91l0.97,-0.03l0.35,0.81l2.96,1.76l1.98,0.3l3.5,-3.04l3.69,-0.67l2.74,0.05l3.56,1.81l-0.95,3.24l0.11,5.34l-1.06,2.59l0.24,1.33l-1.17,0.93l-0.12,1.22l-2.51,0.07l-1.12,1.34l0.82,3.3l1.5,0.95l3.33,0.49l1.97,2.48l0.67,1.75l3.92,1.89l1.8,3.11l6.08,-0.6l9.74,2.23l0.26,0.33l-0.85,0.29l-1.31,-0.68l-2.85,-0.18l-0.4,1.32l-4.38,0.64l2.67,1.78l0.86,2.56l1.52,1.95l-0.96,-0.05l-2.88,1.81l-2.85,0.31l-1.82,2.39l-1.36,0.47l-2.69,0.07l-1.66,-0.85l-3.49,3.29l-2.89,1.63l-2.21,-2.73l-3.86,-2.37l-11.47,-3.0l-1.72,0.17l-1.08,1.13l-0.08,1.24l-4.29,1.33l-7.33,1.22l-9.96,-1.87l1.72,-3.68l-0.01,-1.47l-2.85,-1.22l-1.99,-5.47l-1.13,-1.18l0.3,-0.7l2.67,0.13l4.59,-1.16l1.47,-1.15l0.38,-1.49l-1.33,-1.56l-2.59,-1.15l-0.54,-3.37l2.17,-0.35l1.01,-1.14l0.56,-2.68l2.19,-1.61l1.49,-2.59l1.42,-0.56l0.68,-1.48l1.05,-0.26l0.95,-1.52l0.35,-3.17l4.14,-2.88l5.48,-0.88l1.1,-0.73l0.85,-1.56Z","name":"Pella"},"27":{"path":"M250.07,150.49l1.64,4.32l0.15,3.81l1.34,1.78l0.57,2.41l3.71,2.96l5.34,2.63l0.46,1.07l-4.87,0.76l-1.29,-0.93l-1.54,-0.21l-6.18,1.56l-2.75,-0.9l-2.32,-2.06l-1.83,-2.89l-5.3,-3.33l-2.29,-2.3l-0.85,-2.53l0.21,-3.97l-0.8,-1.74l-2.89,-1.44l-3.34,1.03l-4.56,4.61l-0.97,-0.33l-0.47,-1.09l-0.02,-2.69l0.99,-2.4l-0.31,-0.47l-4.12,-0.86l-2.37,1.52l-0.28,-0.65l-0.21,-1.66l0.46,-1.2l2.95,-1.26l1.2,-1.21l0.35,-2.92l3.0,-5.52l1.79,-1.14l2.84,-0.32l1.8,-1.1l3.35,-3.66l6.04,-4.69l2.9,-7.46l2.63,-0.51l2.63,1.89l4.04,-0.33l0.43,1.25l2.37,1.35l-0.6,1.36l1.62,1.69l-0.07,1.42l1.42,4.56l2.84,1.31l-4.47,7.52l-1.67,5.31l0.7,1.38l-2.74,3.26l-0.68,3.02Z","name":"Pieria"},"20":{"path":"M74.09,165.63l4.23,0.25l1.93,-0.81l0.4,-2.07l1.27,-2.06l-0.33,-1.04l2.88,-1.98l2.93,0.92l1.98,-1.52l2.73,1.55l1.47,-0.11l2.95,-0.61l1.75,-1.67l4.17,-0.51l0.15,-3.19l1.43,-2.34l-1.44,-1.51l0.29,-1.86l2.05,-0.83l1.5,-2.6l-0.3,-2.94l-1.01,-1.1l0.38,-1.32l1.28,-1.16l0.45,-1.26l3.27,0.53l2.81,-1.98l2.6,-0.55l0.98,1.19l1.6,4.35l3.31,3.72l2.09,4.02l0.99,3.83l-0.23,1.33l-1.96,3.23l1.25,1.38l1.06,3.97l2.11,2.57l3.34,-1.16l0.89,0.66l-0.18,2.46l-2.04,3.71l2.46,2.52l1.04,5.09l1.54,2.86l1.83,0.62l7.34,-2.0l2.67,0.12l4.9,2.6l0.02,0.51l-1.64,-0.42l-1.75,0.56l-2.54,2.14l-0.84,1.46l-0.51,1.44l1.38,7.58l-0.88,0.04l-1.35,-0.93l-3.08,-0.17l-2.91,2.05l1.0,5.99l3.27,3.08l-0.4,2.49l0.61,2.41l-1.13,1.93l-2.03,-0.59l-2.69,1.76l-4.4,-1.69l-1.46,1.41l-0.92,3.67l0.12,2.46l-1.18,2.37l-2.98,1.82l-1.37,-0.68l-1.46,0.97l-1.5,-0.1l-2.81,1.86l-7.21,2.45l-2.44,-1.78l-3.07,-0.76l-1.42,1.43l-2.41,4.57l-0.65,0.19l-2.48,-7.54l-1.51,-2.75l-0.18,-3.64l-1.25,-2.83l0.16,-2.8l-0.62,-1.35l-5.57,-1.41l-3.37,-4.07l0.01,-4.71l1.8,-2.57l-2.19,-3.85l-0.71,-4.09l-4.67,-0.88l-1.93,-2.06l-0.2,-1.8l1.34,0.57l1.07,-0.39l1.89,-2.43l0.31,-2.87l-2.25,-2.71l-0.29,-1.74l-3.64,-3.22l0.51,-2.16l-2.39,-3.57Z","name":"Ioannina"},"21":{"path":"M76.32,229.36l-3.08,-2.41l1.54,-1.5l2.83,-1.16l2.53,0.01l1.37,1.27l0.99,2.25l3.52,2.73l-0.18,0.61l-1.73,-1.12l-0.74,0.72l-0.77,-0.05l-1.84,-0.98l-2.0,0.47l-2.37,-0.29l-0.07,-0.55ZM87.58,231.43l1.78,0.52l3.46,-1.56l2.07,1.26l2.77,-0.72l2.45,0.42l1.42,-0.55l2.46,-4.67l1.13,-1.12l2.37,0.76l2.81,1.86l7.46,-2.54l2.82,-1.85l1.5,0.1l1.36,-0.9l0.53,0.39l-0.98,1.11l-0.43,5.67l-1.22,2.46l-1.18,0.98l-4.65,1.36l-0.74,1.43l1.81,5.73l-0.18,1.03l-2.67,3.22l-2.84,-0.25l-1.73,2.21l-1.46,0.76l-1.37,3.85l0.11,1.6l1.18,2.47l2.18,0.81l0.79,-0.21l2.74,2.2l1.07,0.1l0.21,0.66l-1.67,-0.31l-1.45,-1.13l-1.92,0.0l-0.33,-0.95l-0.82,1.14l0.42,2.04l-1.06,0.3l-0.75,-0.44l-1.92,-3.99l0.89,-0.58l0.35,-1.2l-0.26,-1.9l-0.96,-1.72l-3.4,-3.37l-1.01,-0.67l-0.71,0.2l-2.7,-2.05l-5.65,-6.69l-4.35,-2.72l0.42,-1.58l-0.74,-2.3l0.59,-0.73Z","name":"Preveza"},"48":{"path":"M390.39,225.38l-0.42,-0.15l0.75,-2.52l0.2,1.24l-0.52,1.43ZM376.93,222.06l0.9,-1.16l0.04,-1.94l0.88,-0.87l-0.02,1.04l0.66,0.75l-0.29,0.72l-1.57,1.68l-0.62,-0.21ZM379.18,210.53l-0.05,0.0l0.04,-0.13l0.06,0.06l-0.05,0.06ZM375.77,224.78l0.04,-0.03l0.17,0.24l-0.21,-0.21ZM373.95,250.66l0.31,-0.29l0.21,0.21l-0.21,-0.08l-0.3,0.16ZM373.59,249.38l-0.34,-1.34l0.28,-0.49l0.58,0.53l-0.53,1.31ZM368.63,226.67l0.66,-2.56l1.38,-1.36l0.18,0.45l-1.17,1.51l1.52,0.5l0.72,-1.07l0.46,0.73l-0.48,1.53l0.39,1.13l-1.85,1.5l-1.26,-0.8l1.08,-0.25l0.27,-0.79l-1.04,-1.04l-0.87,0.51ZM360.68,240.06l-0.18,-0.35l1.74,-0.61l1.42,0.35l-0.32,1.5l-0.84,-0.65l-0.96,0.62l-0.88,-0.86ZM363.59,238.14l0.0,-0.08l0.03,-0.06l0.05,0.1l-0.09,0.04ZM363.63,237.97l-1.06,-1.49l0.3,-1.2l0.24,1.81l0.7,0.3l-0.19,0.58ZM351.98,242.46l3.62,-1.95l0.24,-0.64l-0.62,-0.58l0.36,-1.01l-0.5,-0.5l3.18,-2.51l0.46,-1.88l1.55,-1.97l2.65,0.2l0.13,1.0l-3.83,4.81l-0.92,2.7l-1.15,0.26l-3.69,3.59l-0.71,-0.87l-0.91,-0.06l0.18,-0.6ZM360.48,231.05l-0.09,-0.14l0.77,-0.95l0.2,0.5l-0.88,0.6ZM363.28,246.21l0.08,-0.06l-0.03,0.19l-0.04,-0.04l-0.0,-0.09ZM333.53,238.83l-0.6,-1.18l1.21,-0.31l0.05,0.84l1.7,0.84l1.57,2.0l5.39,2.35l0.33,0.49l-0.42,0.66l1.12,1.32l1.04,-1.05l2.83,0.05l0.46,0.48l-1.81,2.72l-1.36,0.18l-1.63,1.38l-1.11,-0.21l0.2,-0.63l-1.3,-0.91l-2.49,0.38l-0.62,-1.01l0.66,-1.1l-0.75,-0.37l-0.74,-2.11l-1.4,-0.89l-2.34,-3.93ZM317.34,242.29l-0.3,-0.33l0.76,-0.65l3.3,-1.22l0.36,-1.62l1.07,-0.91l1.52,0.22l2.31,2.24l-0.0,0.78l-0.27,0.29l-0.44,-0.65l-2.42,1.25l-1.38,1.82l0.53,0.81l-0.58,-0.1l-0.55,-1.21l-1.44,0.51l-1.71,-1.21l-0.7,0.42l-0.04,-0.45ZM325.54,245.15l-0.08,-0.08l0.02,-0.1l0.02,0.09l0.04,0.09ZM325.49,244.9l0.01,-0.01l-0.01,0.03l0.0,-0.02ZM271.1,232.62l0.53,4.39l2.23,4.02l0.07,1.24l1.3,0.48l1.79,-1.76l1.18,0.35l0.66,0.67l0.29,3.29l0.86,1.12l0.94,0.31l1.38,-1.1l2.02,1.76l-0.45,1.05l1.42,1.98l-0.57,1.07l0.3,1.33l-2.29,0.61l-0.24,2.33l1.19,0.55l0.49,-0.69l1.81,-0.36l2.79,-1.84l2.18,-0.08l-0.6,1.12l-1.91,0.08l-0.66,0.55l-1.54,3.67l-0.77,0.47l-2.2,-0.76l-3.0,1.26l-4.31,0.28l-2.39,-2.11l-1.49,-0.48l-2.79,0.3l-5.59,-1.13l-6.59,-3.53l-6.14,0.57l-2.92,-0.21l-1.07,-0.59l-0.82,-5.14l0.37,-1.93l2.74,-1.58l0.65,-1.4l0.99,-3.64l-0.38,-5.28l0.88,-0.91l2.97,-0.41l3.46,-3.27l0.63,-1.4l0.22,-1.46l-0.58,-1.36l-2.42,-1.94l0.42,-2.01l1.15,-0.92l1.16,-0.03l1.75,0.97l1.69,-0.65l1.86,-2.25l-0.22,-2.72l2.81,-3.22l-0.16,-1.42l1.01,-0.8l4.44,-0.24l3.21,-3.31l2.12,-3.47l2.62,-1.72l1.53,2.49l2.86,1.23l0.99,0.98l1.16,-0.13l1.65,2.08l2.23,0.03l3.63,2.67l1.64,3.72l2.75,2.51l1.53,2.24l1.5,0.91l1.1,2.75l5.41,4.76l0.55,3.48l2.59,2.62l-0.0,0.98l1.22,1.24l1.54,3.71l-1.23,1.83l-2.35,1.84l-2.26,-0.17l-1.84,1.33l-1.59,-0.03l-0.62,-0.54l-1.47,1.4l0.4,0.76l0.91,0.23l-0.59,0.26l-2.82,0.07l-1.4,1.02l-1.8,-0.38l-1.09,1.02l-2.06,-0.31l3.72,-2.3l1.12,0.18l0.63,-0.8l0.85,0.18l0.62,-0.6l-0.31,-2.15l2.0,1.21l0.74,-0.46l1.02,-2.89l-0.24,-1.13l-2.3,-2.06l-1.01,-2.63l0.39,-1.01l-1.4,-2.21l-3.86,-3.43l-3.68,-0.9l-1.18,0.41l-2.96,-0.44l-0.35,-1.81l-1.82,-1.48l-1.68,0.36l-2.37,-1.31l-1.54,1.25l0.6,0.86l0.69,-0.01l-1.42,1.95l1.38,2.07l-2.63,0.03l-0.58,0.67l-1.59,-0.46l-2.09,0.98l-0.76,-0.23l-1.96,1.17l-0.55,1.67ZM276.76,240.42l-0.41,-0.55l0.77,-0.36l-0.08,1.09l-0.27,-0.18ZM292.32,248.22l-1.8,-1.0l1.32,-1.57l-0.02,-1.77l0.57,-0.57l1.13,0.38l0.86,-0.99l0.08,1.08l0.58,0.4l-1.78,2.4l0.27,1.37l-1.2,0.28ZM291.97,241.94l0.11,-0.25l0.73,-0.28l-0.44,0.53l-0.4,-0.0Z","name":"Magnesia"},"49":{"path":"M198.51,179.02l1.82,1.52l0.54,7.57l1.26,5.61l1.57,0.67l1.63,-1.07l4.06,-0.59l0.96,0.96l0.5,2.72l1.56,1.02l2.55,-0.11l0.99,1.24l0.57,2.79l2.79,1.15l0.72,1.17l-0.15,2.01l-3.17,0.03l-6.6,2.52l-4.08,-1.31l-4.82,1.81l-2.84,0.33l-1.44,1.09l-3.15,0.32l-3.3,1.92l-1.14,1.27l-0.67,2.23l-1.15,0.41l-1.0,-0.54l-0.85,-1.46l-1.37,-0.2l-3.42,2.33l-2.81,0.34l-2.15,1.35l-2.2,-1.92l-1.81,0.21l-2.29,3.66l-3.32,3.5l-1.19,0.18l-2.49,-1.58l-4.21,-0.84l-1.82,0.73l-1.3,2.42l0.01,1.1l-1.06,0.22l-3.95,-0.55l-2.57,-1.77l-1.22,-3.25l-3.63,-2.72l-0.49,-1.38l0.23,-1.58l-1.67,-3.0l1.22,-2.35l-0.65,-2.54l0.36,-2.67l-0.88,-1.39l-1.44,-0.56l-1.0,-1.23l-0.96,-5.21l2.24,-1.62l2.85,0.16l1.41,0.94l1.81,-0.48l-1.38,-8.0l1.18,-2.34l1.45,-0.75l0.85,-1.19l1.28,-0.46l1.95,0.5l1.19,0.93l1.53,-0.07l4.93,-1.89l1.92,-2.34l4.42,-2.04l11.55,1.38l7.93,1.89l2.91,0.14l5.83,-1.17l4.08,0.59l1.07,-0.74Z","name":"Trikala"},"46":{"path":"M219.74,206.48l-0.38,1.99l0.47,1.71l1.55,1.02l2.82,-0.06l0.91,1.15l-1.44,4.86l0.42,1.5l1.81,2.47l-2.43,1.5l-0.78,1.15l0.21,1.46l-1.53,2.39l0.14,1.52l3.87,5.07l-6.83,7.11l-2.42,5.22l-1.49,1.15l-4.48,1.38l-2.16,2.24l-3.26,1.47l-3.83,0.41l-0.19,-4.97l-1.32,-1.56l-2.59,-0.87l-2.93,-1.95l-1.62,0.11l-4.42,2.86l-2.53,0.32l-1.56,-1.93l0.68,-2.28l-0.61,-1.62l-2.55,-1.47l-0.43,-3.76l-0.72,-1.5l-1.23,-0.94l-7.21,1.55l-1.59,1.04l-1.61,2.1l-2.22,-1.68l-1.78,0.23l-3.06,1.97l-3.53,3.34l-2.61,-2.9l-0.24,-1.32l4.03,-7.13l-1.19,-3.05l-1.86,-2.03l-0.04,-1.04l1.12,-2.09l2.6,-0.53l5.02,2.43l1.75,-0.16l3.68,-3.76l2.01,-3.42l1.1,-0.22l2.76,2.02l2.16,-1.4l2.92,-0.38l3.19,-2.26l0.97,0.14l0.68,1.34l1.61,0.72l1.76,-0.8l0.7,-2.34l0.97,-1.03l2.98,-1.72l3.1,-0.3l1.45,-1.09l2.87,-0.35l4.71,-1.77l3.94,1.31l6.83,-2.56l2.84,-0.0Z","name":"Karditsa"},"47":{"path":"M214.61,148.99l0.35,0.79l0.7,0.06l2.09,-1.75l3.6,0.76l-0.95,2.18l0.06,2.88l0.59,1.36l1.58,0.67l2.04,-1.34l2.88,-3.35l3.11,-0.96l2.31,1.26l0.5,1.15l-0.19,4.11l1.0,2.84l2.46,2.45l5.25,3.31l1.76,2.82l2.43,2.16l3.31,1.05l6.21,-1.57l2.65,1.16l4.94,-0.76l-0.27,1.74l1.91,4.05l2.8,1.51l3.17,3.33l3.41,2.12l0.99,6.32l3.8,11.32l-2.8,1.89l-2.09,3.44l-3.08,3.17l-4.01,0.08l-1.65,1.14l0.12,1.52l-2.79,3.2l0.22,2.73l-1.68,2.03l-1.22,0.42l-1.33,-0.88l-1.65,-0.03l-1.7,1.3l-0.52,2.63l2.52,2.14l0.28,2.21l-0.46,1.07l-3.3,3.12l-2.75,0.3l-1.3,1.22l-0.35,1.57l0.59,4.06l-0.96,3.53l-0.46,1.07l-2.6,1.44l-4.94,0.46l-0.97,-0.75l-0.58,-3.98l-1.37,-1.2l-2.89,-1.75l-5.52,-1.84l-3.67,-2.01l-3.95,-5.28l-0.03,-1.0l1.49,-2.19l-0.21,-1.46l0.61,-0.89l2.6,-1.7l-2.19,-4.41l1.39,-5.11l-1.39,-1.59l-3.07,0.01l-0.98,-0.75l0.33,-6.27l-1.08,-1.57l-2.44,-0.83l-0.54,-2.65l-1.22,-1.61l-3.06,-0.09l-0.96,-0.73l-0.34,-2.43l-1.31,-1.42l-4.71,0.52l-1.36,1.02l-0.96,-0.32l-0.5,-1.15l-1.17,-11.78l-2.17,-1.97l-0.25,-5.12l-0.6,-1.36l-2.16,-1.26l4.79,-3.95l3.25,-1.7l1.62,-2.57l0.75,-2.43l3.78,-3.52l2.37,-3.48l0.77,-2.47l1.34,-1.5Z","name":"Larisa"},"44":{"path":"M195.79,313.36l0.64,-2.02l-0.19,-1.83l1.52,-2.59l3.11,-2.43l4.43,-1.37l0.92,-1.28l-0.23,-2.96l1.26,-2.46l-2.31,-2.71l-0.03,-0.94l1.03,-1.3l-0.3,-2.71l0.99,-2.48l-0.34,-2.44l1.25,-3.01l3.8,2.14l3.26,0.48l3.04,-0.58l4.94,-4.64l4.41,-2.23l2.63,0.62l0.44,1.03l-0.69,4.05l1.83,2.65l3.5,-1.66l2.54,0.39l1.14,0.39l1.72,2.76l3.64,2.82l4.27,-0.55l1.26,6.95l1.03,2.53l-5.49,-1.72l-1.69,1.12l-0.07,0.56l1.07,1.37l1.21,3.97l2.74,3.39l-1.21,1.09l-0.21,1.45l0.57,1.34l2.84,1.12l2.72,-0.26l0.39,0.91l-0.72,3.86l0.98,1.46l-0.33,0.85l1.34,0.91l-1.14,0.92l0.13,0.86l-0.86,0.93l-1.3,0.1l-1.21,-2.68l-1.56,-1.39l1.2,-0.14l0.36,-1.19l-2.04,-1.68l-0.66,-1.86l-4.26,-4.58l-1.7,0.14l-1.17,-1.72l-0.65,0.25l-0.46,-0.68l-0.84,0.48l0.02,1.56l0.92,1.64l-0.85,-0.18l-2.13,2.31l2.26,2.12l-1.38,0.32l-0.43,2.56l-0.93,-0.33l-0.22,-1.22l-2.71,0.48l-2.04,-1.12l-0.98,1.63l-2.94,-2.24l-0.82,0.65l-0.72,-0.4l-2.72,1.94l-0.79,1.51l-2.1,-2.48l-0.95,0.51l-1.48,-2.06l-1.86,-0.05l-4.12,-2.6l-3.66,0.51l-0.81,-0.89l-4.36,-0.71l-3.56,3.26l-1.21,0.33l-1.91,-0.84ZM212.48,314.35l0.0,-0.16l0.4,0.13l-0.17,0.26l-0.23,-0.23ZM212.85,314.9l0.0,-0.06l0.03,0.03l-0.03,0.03Z","name":"Fokida"},"45":{"path":"M239.43,245.04l1.66,1.29l4.62,-0.43l0.03,6.01l0.58,1.35l1.44,0.89l3.28,0.26l5.93,-0.58l6.43,3.49l5.77,1.18l2.93,-0.29l1.15,0.4l2.61,2.19l4.55,-0.29l3.04,-1.25l1.95,0.83l-0.16,1.11l-1.29,-0.78l-2.02,1.31l-0.78,-0.6l-0.75,0.91l0.58,0.79l-0.88,0.04l-0.45,0.68l-4.89,-0.73l-1.76,1.86l-0.17,1.61l-2.21,0.14l-1.42,1.03l-0.88,-0.39l-1.6,1.05l-2.29,-0.48l-1.23,-1.23l-1.27,0.85l-1.78,-0.27l-1.82,-2.04l-2.1,-0.74l-1.18,0.15l-2.24,1.82l-2.3,0.82l-0.6,0.76l0.44,0.6l-1.55,1.22l0.92,0.66l1.84,-0.88l-1.21,0.91l0.58,1.96l1.22,-0.37l0.75,1.26l1.33,-0.64l0.88,0.82l1.84,-1.45l0.77,0.63l1.75,-0.15l2.51,-1.35l6.19,6.36l1.49,-0.54l1.45,0.31l1.07,-0.73l3.39,3.13l2.66,-2.05l1.63,0.52l1.19,1.51l2.63,0.95l3.97,-0.41l0.97,-0.64l2.39,3.25l-0.53,1.67l0.35,1.66l1.47,1.89l0.22,1.59l1.8,1.91l2.14,-0.69l0.88,-1.24l1.41,-0.03l0.55,0.54l0.58,-0.74l1.22,0.0l0.62,-1.06l-2.05,-1.46l1.82,-0.36l4.73,3.4l2.25,-0.56l2.32,0.66l1.56,1.6l0.25,1.38l-2.33,1.12l-2.02,2.98l0.68,0.45l0.68,-0.83l1.0,0.15l1.87,3.24l0.85,-0.59l2.22,0.85l-3.9,0.27l-8.99,1.92l-3.18,-3.5l-2.77,-0.51l-0.52,-2.29l-1.56,-0.75l-3.11,0.53l-3.29,3.29l-1.27,0.24l-3.44,-0.3l-2.72,-1.16l-5.4,0.8l-1.01,-2.84l-4.68,-0.73l-5.11,1.02l-9.93,4.9l-2.32,-1.28l-1.03,-1.32l-1.28,-3.12l-1.4,-7.31l-1.66,-0.45l-2.87,0.8l-3.47,-2.69l-1.66,-2.71l-1.52,-0.62l-3.04,-0.38l-2.87,1.64l-1.42,-2.11l0.73,-3.72l-0.87,-1.85l-2.94,-0.69l-1.79,0.57l-3.21,1.85l-4.69,4.49l-2.72,0.54l-3.11,-0.46l-7.1,-3.98l-1.39,-3.49l-3.08,-2.97l-1.39,-0.51l-2.23,-1.96l-0.61,-4.34l-2.9,-4.86l2.77,-6.33l3.85,-2.52l0.76,0.11l-0.32,0.96l0.65,1.61l4.41,-0.38l3.46,-1.55l2.18,-2.25l4.47,-1.37l1.76,-1.42l2.36,-5.14l6.75,-7.03l3.62,1.97l5.51,1.83l2.71,1.65l1.08,0.83l0.58,3.98ZM294.65,289.32l0.05,0.0l0.17,0.13l-0.05,0.05l-0.17,-0.17ZM293.63,286.56l-0.02,-0.26l0.05,-0.06l0.12,0.17l-0.15,0.15ZM293.66,286.09l0.05,0.04l-0.03,0.03l0.0,-0.04l-0.02,-0.02Z","name":"Fthiotida"},"42":{"path":"M399.78,267.63l-0.5,-0.12l1.69,-1.3l-0.02,-1.03l1.31,-0.94l-0.15,-1.36l-0.85,-0.43l-0.47,-1.24l0.81,-1.39l1.82,-1.13l0.61,0.77l0.76,0.03l0.36,0.87l5.26,3.23l-0.8,1.29l0.58,2.36l-0.78,0.71l0.95,1.04l1.26,-0.15l1.43,1.66l0.78,-0.08l2.88,1.94l1.7,1.91l0.31,1.13l-0.72,0.89l0.53,0.6l-2.02,0.77l-1.39,-0.85l-1.08,1.05l-1.98,-2.33l-0.9,-0.1l-1.91,1.04l0.44,1.62l-0.81,-0.61l-0.22,-1.12l-1.44,-0.52l3.05,-1.74l-0.18,-2.84l-1.17,-0.78l-1.13,0.87l-0.56,-1.43l-1.92,0.45l0.37,-0.71l-0.42,-0.43l-1.63,0.56l-0.6,-1.69l-0.53,-0.4l-0.56,0.58l-0.8,-1.17l-1.35,0.54ZM403.11,274.0l1.09,-1.66l0.39,-0.39l-1.01,1.45l0.15,0.74l-0.62,-0.15ZM404.67,271.81l0.0,-0.02l0.01,-0.01l0.0,0.02l-0.01,0.01ZM404.7,271.75l-0.01,0.01l0.01,-0.05l0.01,0.0l0.0,0.04ZM413.17,279.19l-0.89,-0.04l0.51,-0.64l1.27,0.78l-0.89,-0.1ZM273.39,271.59l0.0,-1.02l1.16,-1.72l0.61,0.18l1.6,-0.92l1.71,0.1l1.59,-1.36l1.13,0.1l0.51,-0.67l3.9,-1.25l1.07,0.26l3.33,-3.2l2.49,0.28l0.93,-1.17l0.22,-2.9l2.9,-2.23l5.71,0.38l1.69,-1.51l2.3,-0.23l2.12,-1.44l2.77,-0.05l1.69,2.18l2.75,0.72l-0.57,1.96l1.23,2.04l3.44,0.89l-0.27,4.36l1.21,1.81l-0.18,1.26l1.25,1.84l1.54,1.65l3.36,1.33l0.45,1.25l0.56,-0.15l1.06,1.1l2.05,0.59l0.66,1.18l0.7,-0.78l-0.16,0.81l0.73,1.35l1.13,-0.41l2.09,1.28l1.3,-0.28l1.81,0.59l1.18,-0.15l1.53,-1.29l2.43,3.17l1.09,0.56l-0.32,0.54l1.1,1.32l1.16,0.66l2.87,0.28l4.03,2.17l2.51,-0.63l5.0,1.62l2.5,-1.63l1.9,0.51l0.36,-0.72l1.22,0.33l0.97,-0.82l7.74,2.58l0.53,0.35l-1.15,0.41l-1.41,1.7l0.13,2.96l3.36,3.16l5.06,3.42l-3.33,3.58l0.36,2.78l-0.71,0.66l0.37,0.64l-0.53,0.51l1.87,1.77l-1.24,0.65l-0.59,1.3l2.45,1.5l-0.11,0.82l0.57,0.53l-1.01,2.33l2.02,2.39l0.54,-0.24l-0.33,0.96l1.82,1.75l-0.42,2.7l0.5,0.66l-0.91,0.51l0.13,1.32l2.24,3.1l1.49,0.2l1.98,1.4l0.76,-0.59l-0.15,1.38l2.11,1.57l3.38,-1.02l0.66,0.99l2.5,1.04l3.7,0.23l0.55,-0.51l1.66,-0.02l3.29,0.58l2.87,-1.65l0.04,1.51l-1.34,2.87l0.56,1.5l-0.38,1.07l0.94,1.6l-0.31,2.24l-0.28,1.37l-1.18,1.14l-0.07,1.32l-0.77,0.66l0.33,0.51l-1.33,0.18l-2.2,2.49l-1.32,-0.04l-1.3,-0.66l0.36,-0.86l-1.58,-2.84l-2.67,-1.42l-1.1,-0.03l-2.09,1.01l-0.5,1.63l0.59,1.07l-0.5,1.06l-3.15,-2.38l-0.85,-2.34l-1.59,-0.62l-0.09,-0.78l1.27,-1.44l-1.41,-2.28l-1.33,-0.01l-0.64,-1.44l-1.71,-0.84l-4.09,0.25l0.62,-2.7l-0.86,-0.68l-1.84,0.17l2.15,-1.99l0.44,-1.27l-0.33,-1.32l-1.21,-1.06l-0.42,-2.17l-2.44,-1.62l-1.66,0.25l-0.92,1.19l-0.38,-0.37l3.28,-4.18l-0.35,-1.1l-1.61,-0.63l-1.79,2.71l-0.64,-1.26l0.29,-0.47l-0.83,-0.41l1.51,-0.73l-0.31,-0.45l0.75,-1.01l-0.92,-0.28l-0.31,-1.32l-2.98,-0.92l-1.58,0.51l-2.01,-0.44l1.64,-0.21l1.3,-0.91l-0.79,-2.01l0.68,-1.48l-1.21,-1.8l-1.22,0.6l-1.25,-0.19l-1.63,-1.33l-2.74,1.68l-5.32,0.26l-2.83,-1.45l-2.72,-0.51l-2.59,1.56l-3.22,-1.18l-0.95,0.18l-1.14,-0.97l-2.56,-0.28l-1.47,0.26l-0.77,1.04l-1.14,-0.08l-0.33,-1.2l-1.42,-1.55l0.02,-1.13l-1.19,-1.11l-0.66,0.33l-0.7,-0.59l0.87,-0.83l0.82,0.38l1.03,-0.88l0.96,-3.21l-0.97,-2.09l0.2,-0.77l-2.1,-2.7l-0.95,-0.63l-1.72,0.15l-1.06,-0.94l-2.4,0.47l-1.12,-0.78l-1.27,-4.07l-2.48,-1.65l-0.96,-0.03l-0.61,-1.92l-1.23,-1.32l-3.25,-1.23l-2.88,-2.63l-2.17,-3.3l-1.78,-0.87l-1.27,0.31l-7.06,-6.19l-4.86,-1.64l-4.11,1.28l-2.85,-1.28l-1.17,-2.79l-3.28,0.13l-2.13,-0.84l-1.54,1.71l0.62,0.66l2.29,0.05l0.66,0.77l-0.41,0.83l-3.64,1.25l-3.13,-0.59l-4.73,1.28l0.07,-0.52ZM332.67,307.98l0.56,1.26l-0.59,0.89l2.83,0.84l0.01,2.7l1.95,2.31l-1.91,0.59l-11.47,-4.11l-1.94,-1.7l0.42,-2.49l-1.35,-1.59l-8.44,-0.11l-5.76,3.84l-1.16,-2.61l3.29,-3.53l2.55,-1.82l1.55,0.59l2.17,-1.17l2.6,0.13l0.93,1.05l3.79,-0.1l1.22,1.25l2.67,0.51l2.06,-2.72l0.89,0.25l2.89,2.83l-1.69,1.23l-0.04,1.1l1.96,0.61ZM392.75,271.92l-0.42,-0.44l0.62,-0.8l0.88,0.72l-1.08,0.52ZM387.34,346.2l0.46,-0.55l-0.32,-0.34l0.41,-0.07l-0.1,1.78l-0.45,-0.82ZM383.59,349.84l0.92,-2.75l0.74,-0.4l1.46,0.83l0.35,1.29l-0.49,1.12l-1.63,-0.56l-0.53,0.85l-0.82,-0.4ZM377.77,333.04l-0.54,-0.85l1.26,-0.06l-0.8,0.5l0.08,0.41ZM373.24,328.16l0.04,-0.04l0.01,0.01l-0.0,0.01l-0.04,0.03ZM373.1,327.8l-0.18,-0.24l0.22,-0.29l0.08,0.67l-0.12,-0.14Z","name":"Evia"},"43":{"path":"M157.36,242.82l0.92,0.11l3.69,-3.49l2.77,-1.81l1.21,-0.25l2.82,1.75l3.31,-3.24l6.5,-1.51l1.53,1.95l0.41,3.79l2.64,1.62l0.48,1.09l-0.66,2.56l0.72,1.51l1.23,0.93l1.74,0.25l5.95,-3.41l1.17,-0.04l2.62,1.84l2.63,0.9l1.0,1.25l0.27,1.94l-2.53,0.43l-2.76,2.2l-2.97,7.2l2.92,4.84l0.71,4.55l6.73,5.46l0.98,2.23l-7.19,3.47l-4.02,-0.34l-0.9,1.43l0.05,2.48l-2.64,1.91l-1.07,0.16l0.07,-0.96l-1.26,-1.56l-6.9,0.49l-6.69,-3.66l-1.1,-1.09l-1.13,-2.54l0.43,-2.36l5.71,-3.07l0.18,-1.64l-2.83,-1.48l-4.3,-0.87l-2.6,-1.13l-1.04,-0.78l0.14,-3.66l-0.74,-1.81l-7.74,-4.3l-0.25,-0.98l1.94,-3.36l0.46,-2.82l-2.63,-3.88l-0.02,-2.31Z","name":"Evritania"},"40":{"path":"M173.44,425.1l0.37,-2.05l1.32,-2.41l4.88,-3.8l1.27,-0.43l2.48,-3.91l0.07,-3.41l-1.25,-3.91l0.88,-0.38l5.15,0.99l2.91,-0.56l2.81,0.58l1.63,-0.87l2.79,-3.31l-0.45,-1.59l0.39,-0.95l3.0,-2.95l1.2,0.88l-0.35,1.82l1.59,1.96l-1.27,5.03l4.57,4.06l0.57,5.15l2.32,1.79l1.6,2.81l2.69,0.87l1.59,2.6l2.47,1.68l1.84,2.94l2.86,-1.41l2.5,-0.05l1.52,2.49l1.32,0.55l0.41,0.96l-1.39,2.07l-0.34,1.59l3.72,3.8l3.2,9.65l-0.68,1.34l1.72,2.54l0.81,2.46l0.02,2.6l-1.41,4.75l-1.73,1.29l-2.04,-6.17l-2.94,-2.72l-0.26,-1.31l-2.77,-3.6l-1.0,-0.07l-0.91,-0.89l-2.43,1.36l-3.16,-1.94l1.61,-2.05l-0.42,-2.57l1.14,-2.64l-0.24,-1.89l-2.11,-1.06l-5.19,-0.48l-6.29,1.61l-4.69,3.0l-0.28,1.91l0.66,0.82l0.02,1.88l-0.79,2.31l-0.28,3.78l0.99,4.33l1.86,1.97l-1.8,1.35l-0.04,1.85l-1.86,0.85l-2.27,2.09l-0.64,-1.89l-1.58,-0.98l-1.16,-1.56l-0.39,-2.37l-0.56,-0.53l-2.36,-0.08l-2.55,1.15l-0.65,-0.68l-1.7,0.03l-1.06,-1.64l-0.98,-0.2l-1.6,-5.8l0.77,-2.06l1.45,-1.18l0.29,-1.74l-2.53,-1.71l-1.9,0.55l0.64,-0.88l-1.62,-3.52l-2.27,-1.69l-0.8,-1.57l-2.16,-1.9l0.45,-2.84l-1.21,-5.95ZM181.17,446.97l-0.13,-0.45l0.15,-0.15l0.08,0.8l-0.1,-0.2ZM187.77,464.51l0.68,-2.69l1.64,0.9l-0.77,2.3l-0.5,-0.44l-0.72,0.53l-0.33,-0.6ZM189.11,465.92l-0.26,0.05l0.1,-0.32l0.04,0.15l0.12,0.13ZM189.02,465.45l0.26,-0.26l0.03,-0.06l0.01,0.03l-0.3,0.29ZM183.39,462.12l-0.22,-0.25l0.1,-0.1l0.38,0.49l-0.33,0.33l0.07,-0.46ZM183.31,462.61l0.04,0.16l-0.07,0.07l-0.06,-0.06l0.09,-0.17ZM183.92,460.86l-0.6,-0.99l0.74,-1.33l0.76,0.45l-0.06,1.44l-0.84,0.42ZM171.45,434.55l-0.04,-0.21l0.76,-0.46l-0.25,0.6l-0.48,0.07Z","name":"Messinia"},"41":{"path":"M253.68,316.17l-0.42,-0.18l0.7,-3.81l-0.57,-1.34l-3.16,0.06l-2.35,-0.81l-0.27,-2.02l1.31,-1.45l-0.8,-1.63l-2.09,-2.07l-1.17,-3.9l-0.94,-1.25l0.84,-0.67l5.98,1.87l1.16,1.43l2.78,1.44l1.58,-0.33l8.63,-4.64l4.85,-0.97l4.24,0.65l1.2,2.96l5.63,-0.84l2.58,1.15l3.56,0.31l1.77,-0.39l3.08,-3.18l2.67,-0.5l0.99,0.35l0.54,2.39l3.12,0.73l3.18,3.51l3.2,-0.22l6.23,-1.53l-3.16,2.38l-3.45,3.71l0.14,1.73l1.23,1.97l1.99,-0.32l4.44,-3.42l8.0,0.09l0.86,1.12l-0.3,2.68l2.24,1.93l11.63,4.19l3.26,-0.77l0.99,0.99l2.96,0.41l0.85,-0.45l0.46,0.53l-4.24,1.21l-2.93,2.48l-1.7,2.68l-0.69,8.53l-1.98,2.02l-2.7,1.68l-6.1,-2.21l-3.01,-3.95l-1.36,-0.81l-2.82,0.01l-0.92,-0.73l0.96,-2.35l-0.78,-1.63l-1.41,-0.88l-3.31,0.76l-2.71,1.92l-0.67,4.27l-0.82,0.84l-6.99,-0.46l-0.12,0.78l3.26,1.01l-3.82,-0.72l-2.58,0.48l1.36,-1.48l-2.81,-2.59l-3.53,3.38l-0.7,-0.76l-1.46,0.01l0.75,-0.18l0.53,-0.99l-2.59,-2.1l-5.14,0.17l-0.53,-0.98l-0.46,0.51l-1.64,0.0l-0.88,1.62l0.61,0.85l-0.61,-0.43l-0.43,0.39l-0.61,-3.58l-0.73,-0.63l-1.03,1.25l-0.94,-0.87l-2.55,0.75l-4.3,-0.77l-0.69,-1.11l0.54,-0.49l0.7,0.28l0.3,-1.01l1.06,-0.58l-0.09,-0.61l-8.33,-4.02l-0.93,-1.31l0.74,-1.34l-0.33,-1.5l-2.46,-2.31l-2.81,1.34l0.53,0.91l0.99,0.13l-0.53,0.96l-0.62,-0.05l-0.75,-1.27l-2.35,1.61ZM278.88,330.45l0.0,0.16l-0.05,-0.06l0.05,-0.09ZM280.56,330.51l1.22,-0.87l1.05,0.96l-1.05,0.56l-1.22,-0.65Z","name":"Viotia"},"1":{"path":"M335.82,35.31l0.94,-1.66l1.88,-1.15l1.43,0.49l2.88,-0.32l3.11,0.98l3.01,-3.48l3.75,-0.28l0.81,-0.8l1.74,-0.42l0.82,0.25l1.39,-0.72l0.64,-1.63l0.74,0.34l0.61,1.67l2.33,1.3l3.85,-2.34l0.52,0.68l1.92,0.27l2.31,-1.39l-0.71,-5.08l1.1,-0.79l0.17,-0.81l1.43,-0.71l0.49,0.59l1.62,0.15l0.41,0.64l1.71,-0.4l1.03,1.51l1.05,0.15l0.84,-0.32l0.25,-1.15l1.38,-1.43l1.41,0.04l2.29,-1.99l0.55,1.16l1.79,1.01l-0.16,1.67l0.94,1.37l2.79,-1.24l2.35,0.71l1.41,-1.49l1.44,-0.24l0.48,0.82l3.16,0.68l1.16,-0.83l0.16,-1.07l1.31,-0.79l3.04,-0.45l1.26,-0.85l0.38,0.97l1.22,0.31l-0.55,0.8l1.07,2.17l-0.46,1.41l0.94,2.62l1.67,0.72l-0.51,1.62l0.85,1.64l0.8,0.43l3.26,-0.51l0.07,1.37l2.33,-0.29l0.91,0.64l2.82,0.28l0.76,3.03l4.04,3.03l-1.83,0.69l-2.94,-0.89l-2.02,2.23l-6.08,1.71l-0.84,4.02l-0.7,0.95l-6.04,1.48l-0.77,2.43l-2.79,0.34l-0.55,1.54l1.19,1.01l-0.54,2.03l1.33,1.5l-11.29,7.76l-2.92,0.5l-2.4,2.26l-1.56,0.73l-0.57,4.92l-4.97,-2.06l-5.63,-0.96l-1.77,-0.79l-3.62,-2.88l-1.66,-2.81l-1.64,-1.16l-3.21,-0.04l-1.38,1.16l-2.16,-1.97l-4.27,-1.03l-3.96,-2.68l-4.68,-5.14l-3.71,-2.93l-0.49,-1.18l1.34,-4.92l-6.74,-3.2l-1.09,-3.79l0.45,-1.77Z","name":"Drama"},"3":{"path":"M354.47,90.69l-0.13,-0.13l6.24,-1.28l1.7,-0.79l4.24,-3.21l1.7,-2.33l4.45,-3.12l1.11,-1.1l1.21,-3.89l-0.82,-2.79l0.35,-0.76l5.3,0.89l5.25,2.17l0.52,-0.2l0.59,-1.41l-0.06,-3.56l1.55,-0.75l2.15,-2.11l3.09,-0.58l11.68,-8.05l0.07,-0.59l-1.47,-1.66l0.5,-1.33l0.96,0.3l3.08,-0.99l4.85,0.08l7.08,1.24l0.52,0.9l-2.86,1.32l-0.06,0.69l2.49,1.72l1.81,2.69l3.77,1.91l0.41,1.36l-1.1,3.57l-0.02,2.79l0.84,4.08l2.47,6.84l-0.56,0.45l0.46,1.26l-2.64,-1.14l-4.48,0.75l1.23,-0.67l-0.64,-0.89l-1.18,0.41l-2.12,-0.9l-1.36,0.16l-1.77,1.16l-1.51,-2.48l-2.48,-2.33l-2.2,-3.9l-3.42,-0.63l-3.04,0.7l-0.55,0.83l-1.89,-0.34l-2.15,1.29l-1.49,-0.12l-1.63,2.5l-2.49,0.73l-1.19,1.67l-1.07,0.45l-0.28,1.28l1.6,0.92l-0.34,0.94l-0.84,-0.67l-1.06,0.97l-0.13,1.43l0.54,0.67l-8.4,4.22l-4.42,3.13l-4.4,1.66l-3.42,0.31l-10.32,-3.46l-3.82,-2.26ZM405.76,102.69l1.03,-3.81l2.69,-4.13l0.18,-1.63l1.37,0.29l1.32,-1.77l3.94,-2.16l2.12,1.92l1.67,0.31l1.55,-0.7l1.54,2.6l1.12,0.94l1.47,0.01l0.45,0.39l-1.18,0.28l-0.79,1.44l0.73,1.41l0.98,0.21l0.37,1.38l-1.58,1.23l0.77,4.26l0.66,0.56l-0.29,0.91l-0.85,-0.88l-1.57,1.35l-1.6,-0.15l-0.58,0.96l-1.64,-0.23l-2.26,2.26l-1.28,0.12l-0.7,-1.03l-0.83,0.1l-3.14,-3.71l-1.03,-0.34l-3.35,0.42l-0.23,-0.9l-0.96,-0.58l-0.09,-1.34Z","name":"Kavala"},"2":{"path":"M494.01,82.96l0.7,-2.64l-0.19,-4.91l1.13,-0.35l2.47,1.2l1.46,-2.31l2.85,0.45l4.65,-2.47l3.12,-0.95l1.35,-2.47l2.57,-2.15l0.95,-3.73l2.93,-1.28l-0.44,-6.58l-1.95,-2.8l0.3,-2.3l2.34,-4.8l-0.86,-1.75l-1.47,-1.28l0.78,-0.59l3.15,0.19l1.96,-0.85l0.92,-1.63l1.76,-0.53l3.53,0.4l1.16,-0.14l0.93,-0.87l2.08,0.17l0.72,-2.02l1.74,-1.76l0.4,-3.08l1.1,-1.23l2.02,-0.4l-0.26,-1.32l-2.19,-3.19l1.34,-0.77l1.01,-2.45l-0.77,-3.37l-0.6,-0.46l-1.81,0.15l0.41,-4.43l-1.27,-1.1l-0.24,-1.78l-1.7,0.63l-1.54,-0.12l-0.33,-1.35l-1.52,-0.72l-0.67,-3.51l0.68,-1.66l0.95,-0.6l2.22,0.3l0.86,-1.64l3.64,-1.68l2.42,1.41l1.36,0.09l0.85,-0.74l1.16,1.49l2.95,1.11l2.52,0.17l1.46,-0.67l2.8,0.52l3.21,1.82l2.54,-0.21l3.93,2.31l1.75,2.83l1.46,1.19l4.65,1.08l0.39,1.36l-0.63,1.46l0.84,2.79l-0.56,1.42l0.88,2.27l-0.23,2.41l1.08,1.58l-0.07,3.1l1.2,1.13l0.59,3.37l-0.37,3.15l-3.23,2.3l-1.99,-1.58l-2.84,-0.13l-2.05,1.2l-0.95,1.69l-1.75,1.13l-1.15,1.76l-3.71,2.52l-2.41,0.34l-2.76,-0.79l-1.17,0.99l-0.72,1.96l0.17,1.9l-1.5,3.69l1.83,2.86l-1.52,2.48l1.17,1.0l-0.88,2.06l0.38,2.29l0.98,2.14l2.18,1.36l-0.49,2.01l-1.61,0.44l-0.7,1.36l2.27,2.89l-2.25,0.56l-0.82,0.8l-1.55,0.05l-0.38,0.71l0.95,1.92l-0.71,0.72l-1.39,-1.86l-0.72,-0.06l-0.99,2.65l-1.88,-0.44l-0.42,0.71l0.29,1.08l-1.97,2.47l1.15,1.47l-4.65,2.13l-2.46,5.48l-3.05,1.31l-2.84,-0.24l0.42,-0.73l-0.57,-0.31l-0.37,-2.01l-0.9,-1.48l-1.03,-0.47l0.18,-1.74l-0.99,-0.45l-0.48,0.6l-3.9,-2.79l-3.18,-0.52l-3.22,0.65l-4.15,-0.91l-6.75,0.57l-7.51,-1.63ZM523.68,89.25l-0.03,0.01l-0.03,-0.03l0.03,0.0l0.03,0.03ZM480.17,120.5l-0.17,-0.33l0.87,0.03l2.06,-2.1l2.17,-0.88l3.39,-0.57l4.03,0.67l1.6,0.86l1.42,0.03l3.17,2.47l-0.3,3.53l-7.2,2.67l-2.02,0.0l-1.0,-0.29l-1.53,-1.73l-2.65,-1.01l-3.83,-3.33Z","name":"Evros"},"5":{"path":"M427.13,38.79l1.4,-0.87l0.94,-3.22l-0.21,-1.08l2.19,0.16l1.37,0.76l3.59,-1.63l1.89,1.93l9.09,2.05l2.21,2.45l1.38,0.39l1.65,-0.81l0.73,1.7l3.68,1.26l0.4,1.14l1.96,0.63l0.97,0.92l0.72,2.89l1.46,0.42l-5.09,3.34l-1.8,-2.43l-0.64,-0.0l-0.85,1.14l0.15,1.43l-2.45,2.08l-2.84,4.68l0.25,3.05l4.31,5.19l0.71,2.96l-1.21,0.39l-2.8,-0.29l-2.02,0.73l-4.93,3.97l-0.81,2.54l-2.16,-0.36l-5.59,1.98l-6.06,5.58l-0.02,-1.47l-2.48,-6.88l-0.81,-3.96l0.01,-2.49l1.12,-3.86l-0.7,-1.88l-3.78,-1.92l-0.58,-1.38l-3.18,-2.64l2.62,-1.21l-0.66,-2.01l-7.64,-1.48l-4.94,-0.08l-3.13,0.98l-1.92,-0.96l0.17,-0.74l3.03,-0.48l0.51,-2.25l6.17,-1.61l0.92,-1.33l0.53,-3.54l6.0,-1.69l1.93,-2.18l2.5,0.92l2.76,-0.94Z","name":"Xanthi"},"4":{"path":"M454.4,74.2l0.04,-1.03l1.81,-0.76l1.06,-1.89l-2.25,-1.45l-0.82,-3.18l-4.23,-5.04l-0.24,-2.42l2.74,-4.51l2.5,-2.09l0.33,-2.13l2.19,2.39l3.41,-1.78l2.75,-2.4l2.18,0.88l0.78,-0.86l3.19,0.33l2.54,-1.78l1.43,0.27l3.27,-0.73l0.56,-1.05l3.22,-1.1l4.38,0.84l1.44,-2.92l0.99,-0.57l3.96,1.29l3.33,-0.8l4.13,1.76l0.67,-0.27l0.42,-1.72l4.71,-0.24l0.74,-0.89l1.9,-0.26l0.62,-0.77l1.8,1.48l1.32,-0.09l-0.36,1.12l1.38,0.86l2.79,-0.52l2.38,2.69l-2.26,4.5l-0.38,2.69l1.97,2.91l0.4,6.04l-1.27,0.06l-1.42,1.03l-1.05,3.87l-2.55,2.11l-1.09,2.22l-3.06,0.94l-4.57,2.42l-3.0,-0.4l-1.14,1.08l-0.13,0.95l-2.05,-0.99l-1.87,0.46l-0.09,5.55l-0.71,2.48l-2.9,-0.43l-2.12,1.12l-0.85,-0.18l-7.42,-3.59l-6.08,-1.15l-1.1,-2.02l-2.39,-1.57l-0.49,0.5l-2.84,-0.13l-2.33,1.88l-1.22,-1.2l-5.83,-0.34l-0.91,-0.96l-2.32,-0.48ZM454.97,70.78l-0.51,-0.54l0.08,-0.08l0.79,0.37l-0.35,0.26Z","name":"Rodopi"},"7":{"path":"M365.19,123.75l0.31,-1.46l1.57,4.27l3.14,3.43l1.84,0.08l1.03,0.65l1.81,-0.17l1.56,0.84l1.02,-0.49l2.39,1.25l-0.46,1.17l0.95,1.15l2.65,0.08l1.24,0.62l0.44,1.15l1.12,0.72l-0.22,0.67l1.75,3.34l3.49,2.42l1.12,1.6l2.12,0.88l0.99,1.03l1.0,3.59l-7.02,2.21l-0.87,-0.97l0.15,-1.4l-0.83,-1.76l-2.83,-2.44l-1.77,-0.65l0.02,-2.14l-2.48,-2.32l-2.68,-3.85l-3.16,-0.75l-2.51,0.26l-2.37,-0.75l-1.01,0.26l-2.27,-1.09l-0.95,-0.92l0.81,-6.99l-1.1,-3.53Z","name":"Ayion Oros"},"6":{"path":"M293.08,343.35l6.44,-1.45l1.2,-1.48l2.32,-0.79l0.62,-1.98l-1.34,-1.29l-0.45,0.32l-1.34,-0.55l0.68,-0.65l1.92,0.05l0.99,-0.55l-0.61,-2.24l-0.99,-0.49l4.57,0.33l1.16,-1.31l0.56,-4.04l2.36,-1.64l2.74,-0.72l0.99,0.56l0.62,1.31l-0.72,1.08l-0.11,1.61l1.38,1.03l2.78,-0.02l1.04,0.59l3.13,4.06l6.58,2.37l3.14,-1.84l2.19,-2.22l0.8,-8.82l1.55,-2.36l2.6,-2.22l6.93,-2.14l1.33,1.35l1.66,-0.61l1.94,1.45l2.86,0.38l2.0,1.25l1.13,-0.33l3.58,1.17l7.6,7.15l1.57,0.68l-1.34,1.18l1.21,1.54l-0.95,0.62l-0.28,1.2l-2.84,0.61l-3.25,3.04l0.31,1.88l1.26,1.73l-0.01,3.05l2.42,3.56l-1.65,1.26l-0.22,1.42l0.85,2.06l-1.18,1.52l2.35,0.66l1.09,1.44l-0.86,0.74l-1.48,-0.27l-0.64,0.83l1.5,2.0l2.34,1.05l-0.7,1.65l0.43,0.58l-0.61,0.76l1.42,0.99l0.36,1.01l1.33,0.46l0.04,1.3l-0.99,2.23l0.55,0.74l-0.81,0.0l-1.3,1.29l-0.07,0.74l0.81,0.83l-0.5,0.44l0.7,1.21l-0.38,0.59l0.61,0.67l-0.44,0.5l-0.43,-0.28l-1.95,2.49l-0.53,-0.59l-0.85,0.28l-1.58,-0.74l-0.83,0.4l-0.64,-0.76l-2.18,-0.18l-0.27,-3.1l0.81,-1.27l-1.25,-0.86l-1.75,0.61l-0.59,-4.64l-5.48,-4.38l-0.6,0.8l-1.05,-0.98l-0.75,0.03l-1.12,1.9l-0.94,-1.29l-0.48,0.26l0.07,-1.84l-3.21,-3.77l-1.0,-2.83l-2.59,-2.1l0.4,-0.67l-0.45,-0.5l-1.64,-0.23l-2.6,1.37l-0.26,-0.43l1.16,-0.66l-0.64,-0.56l-1.28,0.23l-0.93,-1.6l-1.29,0.65l-1.56,-0.88l-0.94,0.23l-0.33,-1.36l1.34,-0.91l-0.11,-0.64l0.94,0.25l0.82,-0.73l1.03,-2.03l-2.64,-2.48l-2.61,1.11l-1.71,-0.95l-2.6,1.79l-2.86,0.06l-2.88,2.64l-0.13,0.69l-1.66,0.25l-0.85,1.27l-2.39,-0.69l-2.04,0.05l-1.52,0.74l-2.1,-0.8l-2.89,0.18l-3.49,2.01l-2.89,0.83l-3.63,-6.94l-2.12,-2.62ZM368.17,360.03l0.02,-0.02l0.01,0.0l-0.02,0.04l-0.01,-0.02ZM360.37,380.33l0.19,-0.28l0.81,-0.03l0.36,0.42l-1.35,-0.1ZM358.86,395.97l-0.21,-0.32l0.84,0.38l0.44,1.08l-1.06,-1.14ZM316.48,411.74l0.05,-0.67l9.66,-4.62l1.08,-0.23l1.15,0.66l0.86,-0.86l0.96,0.17l0.36,0.31l-4.83,1.37l-0.72,2.24l-3.64,0.06l-1.32,1.19l-2.36,0.93l-0.46,-0.71l-0.79,0.15ZM330.81,406.67l-0.14,-0.14l0.17,0.12l-0.03,0.02ZM318.76,357.42l-0.4,-1.04l0.61,-0.99l4.17,0.17l2.39,-3.27l0.2,-0.51l-0.62,-0.5l-1.47,0.13l-1.03,0.89l-1.85,-0.25l1.33,-0.89l-0.06,-0.49l2.1,-0.81l-0.33,-0.91l0.42,-0.39l2.3,0.27l1.78,1.13l-0.79,0.64l-0.26,1.22l1.2,0.7l-0.44,1.76l0.41,0.66l-0.6,1.03l-1.25,-0.2l-0.47,0.45l0.38,1.22l-0.66,-0.61l-1.07,0.13l-3.21,2.47l-2.79,-2.0ZM319.76,352.28l-0.06,-0.09l0.28,-0.13l-0.18,0.22l-0.05,-0.0ZM321.54,350.3l-0.96,-0.0l-0.65,-0.23l1.07,-0.01l0.54,0.24ZM321.58,350.33l-0.01,-0.01l0.02,0.01l-0.01,0.0ZM321.65,350.35l-0.01,-0.01l0.02,0.01l-0.01,0.0ZM319.9,370.67l-0.16,-0.73l1.09,0.22l2.24,-0.82l7.24,0.44l-0.77,1.43l-0.85,-0.05l-0.71,0.68l0.47,1.11l-1.61,1.83l0.33,1.4l-3.03,1.5l-1.57,-1.11l0.91,-0.83l-0.42,-1.39l-2.34,-1.53l-0.83,-2.14ZM322.31,376.53l0.06,-0.03l0.05,0.03l-0.09,0.03l-0.02,-0.03ZM301.09,384.93l5.38,2.51l1.0,1.77l2.35,0.73l1.51,1.47l1.8,-0.3l2.19,-1.75l3.17,1.75l0.25,0.48l-2.24,0.64l0.11,0.83l0.55,0.5l3.43,0.34l2.49,1.45l0.8,1.24l1.31,0.16l1.58,1.43l-0.18,1.7l-5.22,1.57l-0.03,-2.1l-1.26,-1.52l-3.02,-0.0l-1.57,0.73l-3.79,-0.86l-1.39,0.22l-2.17,-1.99l-1.45,-0.3l-2.45,-1.64l-3.79,-1.1l-1.49,-2.2l2.12,-5.77ZM320.84,392.25l2.46,-1.18l1.08,0.39l0.48,-0.49l0.9,1.3l0.78,-0.41l0.35,0.35l-2.01,1.26l-1.77,-0.71l-1.49,0.1l-0.79,-0.61ZM323.91,390.44l0.09,-0.09l-0.07,-0.28l0.07,-0.07l0.06,0.38l-0.14,0.21l0.0,-0.15ZM315.17,388.13l-0.28,-1.12l-3.66,-3.64l0.72,-1.02l1.36,-0.51l4.15,-0.1l0.94,1.45l-0.13,1.04l-1.93,2.71l-0.08,1.17l-1.09,0.03ZM322.58,447.3l-0.13,-0.33l-0.04,-0.23l0.22,0.22l-0.04,0.34ZM312.23,377.62l-0.04,-1.35l1.07,-1.35l1.94,0.53l-0.04,0.57l-1.31,0.51l-0.98,1.24l-0.64,-0.15ZM308.8,408.87l2.91,-0.67l0.62,1.16l1.45,-1.19l0.54,0.36l-2.78,1.3l-1.48,0.05l-1.26,-1.0ZM309.59,540.0l1.25,0.63l0.79,3.94l-2.35,-1.77l-0.88,-1.98l-0.55,-1.83l1.16,1.72l0.59,-0.71ZM311.64,544.64l0.02,0.15l-0.03,0.03l-0.04,-0.09l0.06,-0.09ZM306.82,375.39l-0.01,0.0l0.18,-0.16l-0.16,0.16ZM306.62,364.72l-0.15,-0.03l0.29,-0.09l-0.09,0.09l-0.05,0.03ZM298.96,418.68l0.21,-0.03l0.66,0.76l-0.16,0.03l-0.71,-0.76ZM294.79,415.28l-0.78,-0.98l3.44,0.46l1.6,1.21l-0.27,0.98l-0.46,0.6l-1.36,0.08l-2.16,-2.34ZM278.05,500.88l1.1,-2.81l1.21,-1.22l-0.12,-0.82l1.97,-0.44l1.93,3.21l0.48,1.93l1.71,1.53l3.46,1.73l4.0,3.53l0.18,0.85l-0.73,1.2l-1.38,-0.67l-1.91,1.3l-0.64,2.4l0.13,2.95l0.59,0.72l-0.42,1.31l-1.77,-1.08l-1.05,0.6l-0.82,-0.9l-0.68,0.62l-1.16,-1.14l-1.15,0.08l-0.67,-1.0l-0.78,0.29l-0.13,-1.19l-0.66,-0.21l-1.36,-2.13l0.47,-0.94l-1.23,-1.65l1.82,-1.31l-0.79,-1.95l0.66,-2.13l-0.37,-1.08l-1.91,-1.58Z","name":"Attica"},"9":{"path":"M108.16,271.01l0.99,-1.33l3.33,-0.41l0.58,-0.66l-3.7,-3.59l-0.46,-1.52l1.27,-0.45l-0.33,-0.48l0.28,-1.39l1.56,2.69l1.75,0.51l2.28,-0.23l1.44,-1.76l2.09,1.66l1.07,0.08l0.79,-0.15l1.52,-1.77l1.33,0.84l2.73,-1.14l0.75,0.96l-0.2,1.24l0.47,0.48l0.94,0.1l0.22,-0.97l1.19,-0.13l0.33,1.07l-0.9,1.22l3.88,2.14l1.25,1.41l0.71,-0.37l-0.29,-0.91l0.93,-0.4l-0.3,-2.14l0.69,-0.62l2.84,1.72l0.76,-0.2l0.72,1.93l0.86,0.91l0.59,-0.23l0.53,-1.35l-0.79,-2.61l-2.12,-1.62l0.19,-3.36l0.99,-1.67l-0.13,-1.59l-2.89,-4.3l-1.5,-1.35l-1.51,-0.2l-1.04,0.81l0.11,0.86l-0.25,-0.25l-0.27,-0.74l0.73,-2.13l2.54,-1.47l11.3,-0.47l3.12,-1.37l4.23,-3.2l1.2,-0.34l0.11,2.75l2.54,3.66l-0.41,2.35l-1.97,3.4l0.29,1.6l7.95,4.56l0.47,1.35l-0.42,2.35l0.33,1.47l1.38,1.15l9.35,3.06l0.03,0.75l-5.72,3.13l-0.66,1.6l0.06,1.57l1.19,2.68l1.34,1.35l6.9,3.77l7.02,-0.42l0.9,2.57l1.89,-0.33l2.89,-2.09l0.43,-3.61l4.02,0.29l7.19,-3.48l3.11,2.13l-1.26,3.45l0.34,2.46l-0.98,2.46l0.29,2.63l-1.02,1.26l0.16,1.53l2.14,2.15l-1.22,2.54l0.29,2.66l-2.02,1.64l-3.0,0.65l-3.25,2.53l-1.72,2.88l0.16,1.95l-0.51,1.45l-1.22,-0.71l-2.04,1.52l-1.44,0.16l-1.19,1.83l-0.57,2.45l-2.51,-0.66l-1.45,-1.15l-2.92,0.17l-3.02,-1.11l-2.05,1.49l-1.87,-0.27l-1.13,1.45l-3.71,1.38l-1.38,1.57l-1.53,-0.38l-0.04,-1.86l-0.9,-1.37l0.77,-1.18l-0.68,-0.6l-0.83,0.2l-0.25,-1.29l-1.2,0.34l-0.75,-0.52l-1.17,0.77l-0.02,-1.52l-1.17,-1.44l-2.98,-2.14l-0.87,0.66l0.61,-1.38l-0.61,-2.91l-3.69,-3.95l-1.63,1.96l1.15,1.7l1.59,0.91l0.79,1.57l-0.57,0.56l0.45,1.11l-0.61,2.54l-1.53,1.02l-1.66,0.15l-0.23,1.22l-1.48,-0.15l-0.62,2.32l-1.66,0.51l-1.04,1.4l-0.85,-0.38l-0.73,0.93l0.31,0.39l-4.2,0.56l-1.6,-1.78l0.2,-0.95l-0.95,-0.83l-1.16,0.0l-0.48,-2.28l1.87,-1.7l0.39,-1.23l-0.68,-1.05l1.77,0.76l0.84,-1.01l-2.85,-0.96l-0.64,-2.66l-1.03,-0.94l0.5,-1.36l-1.03,-0.5l0.55,-0.65l-0.94,-0.43l-0.09,-0.69l0.9,-2.68l-1.56,-0.61l-3.05,2.86l-1.02,-0.16l-0.31,-1.53l-0.83,-0.75l0.83,-6.83l-2.54,-3.42l-0.07,-2.25l-1.41,-0.73l-2.25,0.56l-1.01,-0.95l-1.12,0.61l-1.7,-3.15l0.04,-2.25l-1.18,-2.75l0.0,-1.9l-1.17,-1.47l-2.61,0.56l-2.05,2.43l-0.69,-0.33l-2.38,1.15l-1.01,-2.51l-0.71,-0.76l-1.18,-0.18l-0.11,-1.57l1.1,-2.01l-0.25,-0.6ZM135.68,304.09l-0.08,0.18l-0.21,-0.27l0.12,-0.01l0.18,0.1ZM134.05,252.92l-0.03,0.03l0.0,-0.06l0.01,0.01l0.02,0.02ZM117.68,261.03l-0.05,0.04l0.0,-0.06l0.05,0.02ZM136.19,321.02l-0.07,-0.07l0.11,-0.03l0.03,0.03l-0.07,0.07ZM137.18,320.56l-0.29,-0.57l0.13,-0.62l0.46,0.84l-0.3,0.36ZM135.25,310.04l-0.24,-1.2l1.19,1.3l0.2,1.4l-1.15,-1.5ZM132.13,305.92l-0.06,0.03l-0.06,0.06l0.16,-0.19l-0.04,0.1ZM129.74,304.37l0.22,-0.5l0.46,0.7l-0.56,-0.23l-0.11,0.03Z","name":"Aitoloakarnania"},"8":{"path":"M155.27,340.92l0.45,-1.66l1.4,-0.86l0.7,-1.75l-0.4,-3.69l0.92,-2.88l-0.32,-1.15l0.85,-0.04l1.83,2.3l3.26,-0.71l6.44,4.04l1.04,-0.38l4.76,1.47l5.68,-2.87l0.3,-1.12l2.98,-2.74l1.91,-5.43l3.02,-3.27l2.57,-0.8l0.83,0.28l2.11,-2.06l1.09,0.18l0.93,1.1l5.52,-0.28l3.07,1.53l1.86,-0.15l1.39,2.65l1.27,0.89l1.5,0.15l1.28,1.81l2.31,-1.16l1.47,1.22l2.15,3.57l1.67,1.2l1.68,-0.05l1.54,1.96l1.81,-0.19l2.27,0.98l5.23,-0.53l1.07,2.05l-0.34,2.71l1.79,2.85l-3.33,7.9l-7.62,3.49l-1.5,7.9l1.7,2.54l-0.42,1.09l-4.25,1.52l-2.15,2.22l-1.25,0.45l-0.95,-0.33l-0.62,-1.38l-2.72,-0.16l-1.79,0.65l-1.94,2.07l-1.13,0.04l-10.4,-4.72l-0.7,-2.57l-2.37,-2.09l-2.64,-0.92l-0.95,-0.95l0.03,-1.4l-1.21,-0.92l-1.53,-0.27l-1.69,1.23l-2.25,3.37l-3.57,3.18l-1.2,2.17l-0.76,-0.11l-0.38,-3.49l-1.46,-0.99l-4.24,-0.88l-1.34,-1.2l-5.27,-0.27l-3.58,-4.76l0.16,-2.32l-0.86,-1.82l-2.81,-0.54l-2.18,-2.72l-1.28,-0.49l-0.45,-3.66Z","name":"Achaea"},"13":{"path":"M108.83,135.41l0.74,-0.8l-0.18,-1.52l2.26,-2.21l-0.24,-3.58l0.4,-1.19l-0.53,-1.12l2.84,-1.25l1.32,-3.33l2.14,0.69l2.76,-0.43l1.76,1.22l2.28,-0.65l1.26,-2.03l-0.08,-2.62l2.57,-1.58l0.4,-1.4l2.7,-0.62l1.02,-2.41l7.1,-2.79l3.02,-1.95l3.36,-7.22l1.15,-0.24l1.09,0.58l1.62,4.11l2.78,-0.34l1.07,0.8l1.43,2.62l0.49,5.11l0.65,1.49l3.24,-0.87l5.23,6.73l1.25,-0.17l-1.63,1.7l-2.11,3.61l0.13,3.96l-0.84,2.09l-2.74,0.34l-1.16,1.1l-1.07,-0.15l-2.39,-2.05l-1.79,-0.26l-1.73,0.71l-1.47,2.2l-1.12,0.23l-1.29,-1.15l-1.82,0.06l-0.55,1.46l0.71,2.4l-3.77,-1.08l-2.88,0.12l-1.69,0.37l-2.9,1.9l-3.32,5.2l-0.19,1.48l1.25,3.72l-1.51,3.87l-0.08,1.89l-1.31,0.67l-1.29,0.27l-1.7,-0.85l0.2,-1.37l-1.05,-4.04l-2.19,-4.19l-3.29,-3.7l-1.52,-4.21l-1.25,-1.55l-3.35,0.49l-2.64,1.94l-1.56,-0.19Z","name":"Kastoria"},"12":{"path":"M130.61,151.11l4.25,1.8l4.49,-2.35l2.6,2.03l1.62,-0.36l2.82,-1.84l2.82,-0.35l2.48,-3.74l3.04,0.16l6.79,-1.59l5.79,0.31l2.2,1.91l0.69,3.82l1.41,1.19l4.77,-1.3l1.42,0.43l2.33,2.02l2.09,4.23l1.6,0.17l2.96,-1.28l0.99,0.33l-0.25,3.74l0.93,2.65l-1.44,4.75l0.25,1.79l1.89,1.56l1.57,-0.08l3.0,-1.3l1.78,0.11l-0.56,1.07l2.46,1.33l0.49,1.12l0.23,4.86l-0.77,0.66l-4.1,-0.57l-5.85,1.18l-2.72,-0.14l-7.89,-1.89l-11.67,-1.39l-3.3,1.16l-1.7,1.13l-1.78,2.22l-1.46,0.74l-4.43,1.08l-0.73,-0.67l-0.26,-1.45l-5.35,-2.79l-2.91,-0.12l-7.37,2.0l-1.06,-0.35l-1.4,-2.55l-1.06,-5.17l-2.35,-2.13l1.92,-3.5l0.09,-3.28l-1.66,-0.98l-2.8,1.24l-1.86,-2.27l-1.0,-3.87l-1.12,-0.94l1.61,-2.67l1.77,0.88l1.74,-0.28l1.66,-0.84l0.26,-1.63Z","name":"Grevena"},"14":{"path":"M197.12,103.47l-1.68,3.69l0.18,2.81l1.95,2.42l-0.93,2.19l0.17,1.76l1.19,0.9l2.95,4.28l5.38,2.78l0.25,1.42l1.55,0.75l4.12,-0.59l0.54,3.59l2.65,2.78l0.34,2.48l0.93,1.56l3.47,1.55l-1.08,1.89l-0.23,2.63l-0.92,0.96l-3.25,1.52l-0.59,1.64l0.2,1.64l-1.69,1.89l-0.81,2.53l-2.31,3.39l-3.77,3.49l-2.37,4.99l-3.13,1.59l-3.61,3.17l-2.93,-0.18l-4.41,1.38l-1.25,-1.04l-0.23,-1.31l1.46,-4.94l-0.11,-1.48l-0.82,-1.3l0.49,-2.71l-0.32,-1.32l-1.89,-0.72l-2.99,1.3l-1.06,-0.15l-1.83,-4.02l-2.46,-2.13l-1.77,-0.57l-4.57,1.34l-0.96,-0.72l-0.77,-3.95l-2.59,-2.23l-6.1,-0.37l-6.9,1.6l-3.05,-0.17l-1.68,1.45l-1.0,2.33l-2.68,0.34l-4.22,2.17l-2.32,-1.99l-4.73,2.32l-2.75,-0.84l-1.49,-1.06l1.47,-3.72l-1.28,-4.03l0.18,-1.04l3.06,-4.79l2.77,-1.81l1.38,-0.28l2.75,-0.11l2.57,1.09l1.61,-0.03l0.6,-1.57l-0.84,-1.52l0.36,-0.97l2.43,1.33l1.48,-0.31l1.74,-2.4l1.31,-0.48l1.18,0.16l2.39,2.05l1.6,0.29l1.31,-1.15l2.78,-0.34l1.13,-1.49l0.53,-6.19l5.12,-6.35l4.21,-3.15l15.16,-3.86l1.86,-2.3l-0.01,-2.78l0.71,-2.5l6.84,1.53Z","name":"Kozani"},"11":{"path":"M125.21,92.59l1.58,-1.74l-0.0,-5.63l0.91,0.02l0.43,-0.9l9.87,-0.21l3.47,-0.62l4.4,-1.87l2.87,1.89l3.04,0.04l4.07,-1.24l6.98,-4.14l2.34,0.89l5.18,0.04l2.72,3.3l1.13,0.59l1.33,-0.24l2.99,-2.16l2.18,-0.22l0.87,-0.97l0.15,-1.61l2.86,-1.49l3.06,0.98l0.6,3.7l3.85,2.43l-0.17,0.9l-1.19,0.95l-4.37,1.1l-2.8,-0.15l-0.9,1.45l1.23,1.57l2.13,5.69l2.66,0.98l-1.83,4.91l0.24,0.55l2.39,0.44l-0.69,2.43l0.08,2.55l-1.68,2.07l-14.96,3.74l-4.42,3.29l-0.81,1.16l-2.07,0.78l-5.17,-6.65l-2.04,-0.14l-1.19,0.85l-0.87,-5.95l-1.56,-2.92l-1.67,-1.15l-2.55,0.32l-0.4,-2.39l-0.9,-1.4l-1.46,-0.83l-2.04,0.49l-3.25,7.13l-2.78,1.81l-4.5,1.41l-2.96,1.61l0.2,-2.45l0.85,-0.56l-0.37,-1.66l0.38,-3.11l-2.68,-4.04l-3.19,-2.65l-0.16,-2.29l-1.41,-0.71Z","name":"Florina"},"10":{"path":"M137.35,362.35l0.25,-4.66l1.2,-3.38l0.51,-0.41l1.68,1.41l1.66,-0.05l1.8,-0.86l2.59,-2.39l1.44,-0.41l4.23,-5.53l1.76,-3.19l0.53,2.11l1.45,0.68l2.18,2.72l2.76,0.54l0.65,1.29l-0.08,2.63l3.78,5.02l5.6,0.43l1.26,1.17l5.2,1.4l0.73,3.94l1.75,-0.01l1.21,-2.25l3.56,-3.17l2.31,-3.44l1.11,-0.91l1.06,0.16l0.93,0.71l-0.07,1.33l1.16,1.17l2.67,0.95l1.7,1.51l-2.32,0.59l-4.61,6.99l-0.4,3.68l1.65,4.59l0.1,9.89l5.55,1.14l7.16,5.23l2.03,2.31l-1.65,1.18l-1.51,-1.12l-1.78,1.06l-2.16,2.34l-0.49,1.17l0.48,1.41l-2.58,3.06l-1.3,0.67l-2.65,-0.6l-2.76,0.56l-5.2,-1.0l-1.19,0.44l-2.08,-5.15l-2.5,-3.97l-4.18,-5.16l-3.88,-3.49l-11.98,-7.75l-3.59,-0.1l-0.99,0.98l-0.14,1.5l-0.26,-0.51l0.55,-1.9l-0.57,-0.53l1.39,-3.07l-1.07,-2.11l-0.18,-2.73l-1.5,-1.82l-5.06,-3.47l-8.87,-2.79Z","name":"Ilia"},"39":{"path":"M233.82,463.25l2.17,-2.97l0.99,-3.8l-0.03,-2.95l-0.86,-2.6l-1.63,-2.32l0.68,-1.29l-3.29,-9.9l-3.63,-3.57l1.72,-3.68l-0.57,-1.32l-1.38,-0.62l-0.54,-0.88l1.4,-1.18l4.87,-1.47l4.12,-2.25l2.15,-3.19l0.73,-7.04l15.38,3.7l-0.25,8.99l3.98,4.45l1.75,2.88l0.65,5.07l3.59,0.0l2.96,0.85l1.64,1.82l4.69,1.8l1.87,-1.47l9.16,-0.2l0.15,0.43l-0.43,-0.12l-0.82,1.28l2.05,2.64l-0.43,0.61l3.02,6.58l-0.92,0.7l1.54,2.21l2.39,1.56l-0.11,2.95l1.89,1.03l-2.08,1.15l0.34,2.39l-2.13,-1.45l-1.14,0.58l0.14,0.78l-0.81,-0.33l-1.04,1.0l-0.07,1.53l0.91,0.64l-0.32,0.87l0.56,0.96l-1.02,1.95l0.44,3.17l3.73,4.52l2.76,1.88l1.31,-0.03l0.11,1.21l1.34,0.7l-0.77,0.68l0.24,1.41l-1.03,1.15l1.67,1.58l1.03,-0.13l0.7,1.86l1.97,0.48l0.31,1.48l-4.07,-0.48l-1.18,1.23l-1.91,-1.25l-0.78,0.24l-2.21,-2.82l0.43,-2.25l-1.34,-1.53l-2.67,-1.51l-3.94,0.7l-1.01,-2.26l-1.26,-1.15l0.52,-0.86l-0.64,-1.01l-4.86,-3.57l0.68,-1.51l-1.07,-2.24l-2.31,-2.28l-1.12,-0.35l-0.68,0.6l-0.09,1.64l-0.95,-0.48l1.16,-3.82l-0.66,-1.99l-1.01,-1.1l-0.46,-2.9l-1.19,-1.88l-3.46,-0.63l-6.97,-0.08l-2.15,0.08l-4.51,2.64l-0.66,1.23l0.93,2.71l-2.77,1.07l-1.39,1.56l0.55,1.15l-0.7,0.48l0.11,0.8l0.66,0.83l0.81,-0.23l0.73,0.5l-0.18,1.03l0.53,0.43l-0.56,0.13l-0.9,-1.53l-1.82,-0.25l-0.97,1.48l2.34,3.31l-1.11,1.09l-1.18,-1.61l-1.85,0.85l-0.35,2.19l0.79,3.29l-0.75,2.46l2.37,2.99l0.09,2.19l-0.66,0.95l0.42,1.61l-2.27,0.55l-0.7,-1.91l-2.95,-1.0l-1.67,-1.66l-0.77,1.05l-1.55,-0.57l-1.38,-2.61l-0.24,-1.14l0.45,0.21l1.25,-1.2l1.93,-0.71l-0.74,-1.2l0.37,-1.81l-1.12,-0.78l1.12,-0.91l-1.86,-1.18l1.03,-0.81l-0.99,-1.76l1.0,0.03l0.53,-1.0l-1.45,-0.78l-0.31,-1.05l0.22,-0.91l0.72,0.0l1.36,-1.56l-0.95,-0.83l-2.36,0.25l-1.25,-3.37ZM245.08,491.08l0.93,0.75l-0.37,0.98l0.35,0.61l-0.77,0.22l-0.71,-0.98l0.57,-1.58ZM280.65,487.53l0.08,-1.06l1.57,-1.59l2.07,-0.76l-0.04,2.6l0.66,0.82l-0.91,-0.99l-1.21,-0.25l-2.22,1.24Z","name":"Laconia"},"38":{"path":"M235.43,335.0l4.58,1.72l1.06,-0.56l1.64,0.61l3.28,-0.56l4.28,2.87l2.03,0.28l3.01,1.65l2.21,0.46l1.89,1.6l4.9,2.24l3.81,3.43l2.0,2.97l5.96,3.07l2.02,0.1l2.24,-1.09l1.9,0.08l2.44,-3.55l-5.44,-3.93l-3.93,-1.0l2.13,-1.51l1.56,-0.19l1.02,-1.14l1.28,0.08l0.4,-0.91l0.81,-0.31l2.51,0.46l1.23,1.25l1.77,0.58l0.53,-0.73l1.86,0.93l1.61,-0.57l2.51,3.09l3.68,7.05l-1.2,1.62l-2.3,0.48l-1.6,-0.28l-2.21,0.63l-0.73,-0.91l-1.75,0.41l-1.16,-0.53l-0.88,1.21l0.63,1.36l-1.92,1.76l0.53,1.93l1.69,1.85l2.45,-0.38l1.49,0.76l3.39,-0.81l0.66,0.76l0.53,-0.2l3.4,3.3l0.64,-0.04l0.01,2.02l-2.17,1.55l-1.72,-0.51l-0.99,1.11l0.77,1.83l-1.62,1.06l-4.06,-0.15l-2.63,1.79l-5.01,-1.04l-1.06,-0.6l-0.79,-1.45l-3.96,-0.88l-4.79,1.25l-2.87,0.02l-2.79,-0.93l-4.94,-3.01l-4.27,0.3l-2.73,-1.4l-3.96,-0.86l-1.6,0.7l-0.68,-0.38l2.18,-3.5l-0.24,-1.59l-1.24,-0.69l-1.78,0.7l-1.08,-0.17l-1.48,-1.18l-1.48,0.52l-1.51,1.21l-2.3,3.56l-1.22,0.78l-2.68,-0.78l-4.11,0.35l-1.12,-0.38l-5.44,-6.39l0.17,-2.18l0.77,-1.19l0.42,-3.93l5.88,-2.32l2.49,-2.32l0.5,-2.5l2.23,-4.57l-1.85,-3.3l0.31,-1.93Z","name":"Corinthia"},"15":{"path":"M66.98,242.34l0.11,-0.42l1.08,1.04l-1.15,-0.43l-0.04,-0.2ZM60.45,236.48l-0.59,-1.22l0.59,-0.44l2.03,1.19l2.61,3.64l-2.3,-0.36l-2.34,-2.81ZM22.0,187.48l-0.54,-0.66l2.42,-3.64l1.77,-0.13l1.54,0.78l2.49,-0.93l0.84,0.49l1.41,-0.44l1.4,0.8l2.57,-1.32l1.67,-1.67l1.88,0.59l1.04,1.69l2.11,0.92l0.77,-0.4l1.26,1.23l0.94,-0.08l-1.98,3.63l-3.64,0.91l-3.24,1.92l-0.19,2.65l0.95,0.99l-0.82,0.73l1.0,1.51l0.51,-0.22l0.89,0.98l3.21,1.15l1.18,-0.15l-0.6,0.8l0.52,0.71l-0.03,0.99l-1.17,-1.36l-0.86,1.15l1.1,1.25l-0.2,3.41l1.94,7.13l3.21,1.51l1.93,0.08l0.73,1.81l0.98,0.53l2.37,-0.63l1.62,-1.22l1.67,2.64l0.52,2.03l1.61,1.82l-0.5,1.33l-1.06,-0.62l-1.07,0.16l-4.26,-2.46l-2.08,-0.5l-2.72,-2.16l-3.09,-1.03l-1.41,0.13l-2.87,-1.98l-1.49,-3.12l-0.18,-2.64l-0.6,-1.07l0.67,-1.4l-1.58,-2.65l-2.09,-2.08l-2.45,-0.74l0.35,-0.65l-0.42,-0.43l-2.52,-1.04l-0.29,-1.62l-0.92,-1.1l0.31,-1.6l-0.4,-0.39l-1.5,-0.13l-0.58,0.48l-1.93,-0.82l0.75,-2.88l-1.26,-1.1l-0.81,0.19l-0.79,-2.02ZM54.97,214.9l0.01,-0.01l0.01,0.01l-0.02,-0.0ZM43.75,211.98l0.0,0.0l-0.01,0.0l0.0,-0.01ZM37.7,194.99l-0.0,0.0l-0.0,-0.0l0.0,0.0ZM37.67,194.96l-0.01,-0.01l0.01,0.01l-0.0,-0.0ZM43.66,188.25l0.0,0.0l-0.0,0.0l-0.0,-0.0ZM31.96,200.19l0.01,-0.0l-0.0,0.0l-0.0,-0.0ZM16.24,174.41l-0.12,-0.76l1.18,0.67l-0.24,0.51l-0.82,-0.42ZM17.08,174.85l0.01,0.0l-0.0,0.0l-0.0,-0.0ZM12.14,186.04l-0.21,-0.19l-0.03,-0.34l-0.45,-0.55l0.03,-0.08l0.86,0.9l-0.2,0.26ZM0.47,177.23l0.25,-0.79l1.52,0.8l1.87,-0.72l-1.17,1.84l-0.8,-0.11l-0.19,0.46l-1.32,-0.52l-0.14,-0.96ZM3.46,177.15l-0.03,-0.01l0.03,0.01l-0.0,0.0Z","name":"Corfu"},"22":{"path":"M51.81,193.2l-0.47,0.0l-0.06,-0.78l1.19,0.05l1.36,0.48l-2.03,0.25ZM54.71,193.37l1.69,0.66l0.97,0.72l-2.43,-0.95l-0.23,-0.42ZM57.39,194.76l0.37,0.31l0.06,0.05l-0.04,0.04l-0.39,-0.4ZM59.7,196.12l4.2,0.56l0.89,-0.56l0.35,-1.31l1.5,0.51l0.87,-1.26l2.62,1.07l0.2,-2.11l1.34,-1.53l1.22,-0.24l1.9,-1.72l-2.36,-3.25l1.14,-1.55l-1.33,-2.1l0.9,-0.67l3.5,1.25l0.32,2.93l1.06,1.66l1.45,0.99l4.13,0.53l0.7,3.95l1.84,2.56l0.27,1.01l-1.67,2.14l-0.29,1.42l0.3,4.14l3.52,4.25l5.46,1.3l0.46,1.01l-0.44,1.27l0.3,1.56l1.22,2.69l0.22,3.84l1.53,2.78l2.38,7.23l-1.88,-0.31l-2.37,0.73l-2.47,-1.3l-3.5,1.58l-1.98,-0.72l-4.11,-3.19l-0.96,-2.21l-1.82,-1.55l-2.92,0.02l-4.93,2.59l0.23,-0.78l-0.61,-1.17l0.53,-0.65l-1.02,-0.85l0.54,-1.21l-1.45,-1.66l-2.14,-0.72l-1.42,-3.16l3.8,-0.1l0.62,-0.53l0.15,-0.62l-0.64,-0.66l-4.04,-2.7l1.09,-0.2l1.71,1.03l0.84,-1.79l-0.15,-0.93l-2.48,-1.33l-1.17,0.77l-4.17,-2.37l-1.87,0.77l0.57,-1.16l1.42,-0.99l0.75,-2.39l-0.74,-0.55l2.1,-2.66l-1.87,-2.07l-2.1,-0.4l-1.21,-0.91ZM61.93,202.47l-0.23,-0.28l0.69,0.05l-0.23,0.15l-0.23,0.07Z","name":"Thesprotia"},"17":{"path":"M118.71,293.28l2.02,-3.91l4.1,-0.56l-0.33,1.01l-2.06,1.7l-1.92,0.32l-1.23,0.92l-0.4,0.48l0.51,0.51l-0.94,1.13l0.25,-1.59ZM120.68,297.09l-0.17,0.04l0.02,-0.18l0.16,0.03l-0.01,0.11ZM121.78,295.3l0.2,-0.2l0.49,-0.83l-0.22,0.64l-0.47,0.39ZM112.77,304.14l-0.13,-0.04l1.43,-1.5l-0.11,1.62l-1.2,-0.08ZM108.26,290.3l-0.44,-0.77l0.38,-2.08l1.41,0.74l0.83,-0.94l1.84,0.68l-1.28,1.15l-1.21,-0.38l-1.09,1.97l-0.44,-0.36ZM92.66,294.72l1.27,-4.24l-0.24,-4.65l1.42,-2.3l2.15,-6.75l1.93,-1.41l1.58,-3.21l1.96,0.13l1.23,-1.84l1.73,0.46l-0.52,1.08l0.82,2.01l-0.19,4.38l1.12,2.93l-1.31,1.36l-1.42,3.19l1.08,0.73l0.96,2.3l-0.02,1.67l-0.78,-0.01l-1.01,-1.26l-0.51,1.58l-1.01,0.17l0.35,1.3l-1.38,0.29l-0.72,-0.69l-1.33,1.44l-0.44,-0.67l-1.09,0.27l-0.7,-1.32l0.11,-1.05l-1.25,-0.68l-2.28,4.32l-1.02,0.82l-0.48,-0.38ZM99.73,293.95l-0.02,0.15l0.46,0.75l-0.44,-0.45l-0.09,-0.7l0.1,-0.1l0.0,0.35ZM106.03,285.14l-0.2,-0.4l0.05,-0.55l0.38,0.48l-0.14,1.62l-0.1,-1.15ZM105.12,298.27l0.09,-1.29l0.38,-0.36l0.44,0.38l-0.3,1.54l-0.61,-0.27Z","name":"Levkada"},"16":{"path":"M76.75,330.07l1.36,-2.41l-0.18,-2.77l1.11,0.01l1.39,-1.65l-0.1,-2.28l0.63,-0.96l0.38,-2.82l0.51,0.65l0.95,-1.43l1.09,-0.48l0.39,2.3l1.25,0.96l0.72,-0.2l1.01,1.4l5.07,-3.74l0.77,-1.43l-0.54,-1.43l0.63,-0.76l-0.66,-1.75l0.38,-1.89l-0.85,-0.81l0.61,-0.92l-0.48,-2.32l1.47,-0.18l1.03,0.68l-0.01,1.04l0.72,0.53l-0.31,0.62l0.59,0.55l-0.28,0.52l0.91,1.16l-0.21,0.98l1.26,0.66l0.47,1.81l-0.35,0.46l1.23,4.61l-2.39,1.91l1.05,1.04l1.14,2.86l0.95,0.99l1.01,0.0l2.36,-2.62l-0.62,1.38l0.47,0.48l1.06,-0.52l0.52,0.36l-0.23,0.5l1.15,1.37l0.17,1.28l3.47,3.94l2.92,4.66l1.71,1.39l-0.02,0.62l-1.79,4.16l-1.62,-0.98l-1.78,0.76l-3.35,-0.74l-4.85,-3.81l-1.95,-0.66l-3.13,1.25l-1.01,1.3l-2.38,-1.27l-1.13,0.28l-2.0,-1.57l0.54,-1.16l-1.51,-2.17l0.35,-1.24l-0.88,-1.59l2.14,2.63l0.99,-0.81l-2.39,-3.46l-2.19,-5.32l-0.02,-1.17l-1.01,-0.68l-1.14,0.2l-0.99,1.32l1.42,3.79l0.07,5.63l-3.49,0.59l-0.63,0.57l-0.53,-1.38l-2.6,-1.05l0.18,-1.75ZM81.4,316.84l0.03,0.02l-0.03,0.05l0.0,-0.07ZM81.28,316.41l0.0,0.08l-0.05,-0.13l0.02,-0.09l0.03,0.14ZM91.51,313.21l0.0,0.05l-0.05,0.0l0.05,-0.05ZM98.47,305.92l0.24,-1.18l1.51,1.15l0.86,-0.71l0.35,-1.2l-0.5,-1.26l1.64,0.81l-1.11,2.67l2.22,0.81l1.31,1.38l-2.62,5.19l-1.91,-3.88l0.07,-1.64l-1.12,-0.42l-0.94,-1.72ZM103.04,315.34l1.44,-0.82l1.78,0.67l0.2,-0.91l-1.21,-1.0l0.72,0.48l0.82,-0.65l0.63,0.27l0.49,1.07l-0.63,0.46l0.86,0.97l-0.7,1.3l0.39,1.07l1.3,0.71l-3.36,1.24l-1.35,-1.31l-0.55,-2.65l-0.96,-0.51l-0.46,-0.78l0.58,0.38ZM104.12,306.74l-0.07,-0.01l-0.03,0.01l0.08,-0.08l0.03,0.07Z","name":"Kefallonia"},"19":{"path":"M108.62,255.0l0.13,1.05l-0.69,-0.26l-0.89,-2.12l1.04,-4.49l1.52,-0.83l1.58,-2.02l1.26,0.56l1.68,-0.45l2.82,-3.4l0.28,-1.61l-1.81,-5.4l0.36,-0.88l4.54,-1.33l1.56,-1.29l1.33,-2.75l0.42,-5.6l4.31,-3.02l0.89,-1.28l1.41,-7.7l0.97,-0.8l3.96,1.74l3.08,-1.8l1.82,0.69l1.55,2.72l-0.23,1.58l0.57,1.6l3.77,2.9l1.23,3.27l2.93,1.97l5.49,0.31l1.69,1.82l1.09,2.45l-4.05,7.35l0.35,1.72l1.69,2.35l-1.36,0.42l-4.18,3.17l-4.33,1.59l-9.8,0.16l-1.63,0.57l-1.42,1.15l-0.93,2.53l-0.7,0.29l-0.24,1.13l0.48,0.53l-2.31,1.23l-0.71,-0.64l-1.88,0.57l-1.3,-1.83l-0.79,-0.2l-3.16,2.37l-2.14,-2.06l-4.66,-0.03l-1.3,-2.31l-1.58,-0.26l-3.03,2.55l-0.72,2.05Z","name":"Arta"},"18":{"path":"M99.32,361.39l0.11,-1.91l1.42,-1.79l3.85,-2.93l0.54,1.03l-0.45,1.0l0.77,1.52l3.2,3.88l1.82,1.07l1.26,-0.66l2.55,0.79l5.01,2.18l1.06,0.76l-0.49,2.21l3.51,1.92l1.03,1.55l2.62,1.24l0.26,1.37l-3.2,-1.18l-2.27,-1.55l-2.69,0.43l-1.93,1.29l-2.23,3.35l1.82,1.97l-0.13,0.49l-1.47,0.9l-1.32,-0.4l-0.64,-0.3l-0.6,-1.51l-2.97,-2.32l-0.44,-1.2l-3.3,-1.34l-1.47,-1.58l0.33,-1.44l-1.82,-0.83l0.4,-1.88l-0.82,-0.63l-1.51,-0.05l-1.48,-1.59l0.08,-1.76l-0.7,-1.38l0.3,-0.7Z","name":"Zakynthos"},"31":{"path":"M327.75,593.03l-0.42,-0.51l0.29,-0.77l2.19,-1.31l-1.44,-1.44l0.55,-0.9l-0.68,-1.05l0.42,-1.69l1.29,-1.41l-0.57,-1.1l1.09,-0.34l0.84,-1.2l0.13,-1.74l-1.07,-0.59l-0.22,-1.15l2.15,-2.24l-0.26,-1.29l-0.77,-0.65l0.4,-0.47l-0.44,-0.89l0.55,-2.03l1.01,-1.32l-0.44,-0.85l0.93,-0.92l-0.09,-0.75l0.18,-0.78l0.27,-0.5l0.31,0.33l-0.68,0.95l0.22,1.97l0.66,0.67l-0.11,3.64l0.51,0.55l3.5,1.92l4.73,-0.8l0.66,-0.77l0.59,-3.11l-0.37,-2.22l-1.25,-2.32l0.53,-1.69l-0.77,-2.6l0.22,-1.3l1.99,-2.75l2.38,1.89l-0.86,1.85l1.25,4.41l0.04,4.64l1.19,1.0l3.33,0.4l0.86,0.82l4.89,0.75l2.08,-0.35l1.18,0.77l2.13,0.22l0.69,-0.41l1.63,0.31l1.51,-0.69l0.61,0.37l1.91,-1.12l0.33,-1.99l0.83,0.27l1.87,-0.95l-1.04,-1.98l0.44,-1.1l0.99,0.19l0.51,-0.67l1.79,-0.37l3.74,1.3l1.93,3.97l-1.43,2.79l-1.68,0.83l-4.03,-1.22l-1.21,0.35l-0.9,-0.43l-1.4,0.77l-0.51,1.05l4.98,2.39l2.49,-0.07l2.85,1.99l1.12,-0.1l0.9,-1.12l0.74,0.25l1.46,-1.21l1.05,1.51l-0.39,1.97l1.05,1.02l-0.15,1.88l-0.64,1.0l0.42,2.12l1.58,1.05l2.23,0.25l1.11,2.82l-0.18,0.85l-4.4,2.05l0.26,1.27l1.17,0.64l-1.6,7.17l-2.09,-0.12l-2.53,-1.79l-3.7,0.82l-2.06,-0.99l-2.25,0.37l-0.97,-0.42l-0.94,0.61l-1.01,-0.34l-2.1,0.52l-1.26,-0.5l-2.27,-2.63l-2.74,-0.07l-2.47,0.82l-3.38,-1.64l-1.13,0.35l-3.18,-1.24l-1.51,0.17l-0.93,0.84l-0.63,-0.19l-0.38,0.82l-1.3,0.19l-0.73,-0.84l-2.1,-0.22l-2.67,0.17l-1.21,0.8l-1.44,-0.78l-3.62,0.69l-1.73,-0.51l-0.65,0.45l-0.76,-0.84l0.46,-1.45l-1.63,-1.05l-1.4,0.0l-1.4,-1.93ZM333.77,564.73l0.01,0.01l-0.01,0.02l0.0,-0.03ZM368.85,632.83l1.97,-1.56l3.5,0.92l-0.9,2.3l1.57,2.01l-4.18,-1.82l-1.95,-1.85Z","name":"Chania"},"23":{"path":"M245.57,99.28l-2.08,2.1l0.15,0.66l6.13,0.94l1.08,0.83l0.65,1.42l2.38,2.11l2.33,5.41l3.55,1.67l-1.47,0.84l0.78,2.84l-1.07,1.36l-1.3,-0.14l-0.62,-0.78l-0.82,0.86l-0.86,-0.1l-2.56,-1.59l-0.7,-1.47l-4.23,0.35l-2.7,-1.9l-2.99,0.57l-1.15,1.67l-2.01,5.98l-5.98,4.65l-3.26,3.59l-1.53,0.98l-3.01,0.38l-1.96,1.24l-1.8,3.39l-3.25,-1.38l-0.76,-1.23l-0.46,-2.75l-2.56,-2.61l-0.08,-2.53l-0.6,-1.37l-4.71,0.38l-0.98,-0.53l-0.22,-1.38l-5.48,-2.85l-2.8,-4.12l-1.21,-0.96l0.9,-3.74l-2.01,-2.51l-0.08,-2.34l1.78,-3.8l7.22,-1.2l4.59,-1.39l0.28,-1.53l0.85,-0.89l12.37,2.88l3.74,2.29l2.78,2.95l3.31,-1.88l3.28,-3.09l1.24,0.83l3.02,-0.1l1.74,-0.69l1.5,-2.17l1.64,-0.18Z","name":"Imathia"},"51":{"path":"M511.66,240.3l-0.73,-0.21l0.88,-1.29l-0.36,-3.39l0.91,-1.34l-0.45,-0.83l3.98,-3.39l0.78,1.18l1.23,-0.12l0.9,0.6l1.26,-0.95l0.89,0.64l1.62,-0.05l0.83,-1.0l1.98,0.18l0.77,-0.6l2.32,-0.17l2.45,-1.65l0.99,0.72l2.87,-1.62l1.25,-0.08l1.45,-1.4l-0.99,-1.18l0.46,-1.24l-0.41,-0.9l0.9,-0.45l1.0,0.49l2.56,-0.87l6.77,0.98l1.71,-1.29l1.42,0.91l-0.93,1.65l0.93,1.15l1.01,0.64l2.41,-0.31l1.47,0.6l-3.54,4.76l0.15,1.08l7.69,4.54l-0.31,0.65l1.01,0.6l1.2,2.63l1.12,0.94l1.52,0.32l-0.43,2.31l1.48,0.88l0.8,2.0l-0.15,1.14l3.07,2.68l1.14,1.92l0.26,2.77l-1.28,0.38l-2.29,-0.99l-1.71,0.29l-1.05,-1.22l0.5,-1.13l-1.49,-0.42l0.2,-0.77l1.31,-0.7l-0.17,-1.52l-2.46,-2.96l-1.51,-0.87l-2.3,0.59l-1.36,1.43l0.81,1.92l1.63,1.66l1.51,0.36l3.26,3.74l0.61,2.88l-1.32,1.08l-0.35,-0.84l-3.02,0.97l-6.01,0.67l-2.77,-1.24l-2.93,-0.03l-3.25,-2.31l-4.1,-1.36l-3.35,-0.26l-1.63,0.87l-1.98,-1.52l-2.11,-3.32l-1.27,-0.92l-1.17,0.08l1.52,-1.35l2.05,0.69l2.21,-0.95l2.09,-2.67l2.58,-0.41l2.66,-1.9l2.08,-0.38l1.5,-3.12l-1.39,-1.45l-2.19,-0.87l-2.84,0.28l-1.38,-0.41l-1.29,0.9l-1.3,-0.03l-1.45,1.79l0.02,2.09l-2.56,2.04l-0.61,2.41l-1.07,-0.45l-1.63,2.44l-6.52,-2.1l-2.78,0.37l-0.79,-1.06l0.22,-0.42l-1.32,-1.17l-2.45,-0.44l-1.34,-1.13l-0.75,0.03l-0.21,-1.19l-1.13,-0.73ZM510.53,239.98l0.04,-0.09l0.13,0.13l-0.08,0.05l-0.09,-0.09ZM566.85,246.35l0.09,0.0l0.09,-0.03l-0.1,0.1l-0.08,-0.08ZM551.06,221.97l0.02,-0.02l0.01,0.0l-0.02,0.02l-0.01,-0.0ZM551.15,221.94l-0.02,0.0l0.04,-0.02l-0.02,0.02ZM551.27,221.89l-0.01,0.0l0.01,-0.01l0.0,0.01ZM448.04,166.17l-0.08,-0.51l0.88,-0.55l3.11,-0.0l2.94,-1.58l1.0,1.76l3.63,-1.08l1.39,0.23l1.06,-0.72l1.42,1.52l1.11,0.25l-0.15,1.8l1.37,0.89l-0.61,0.58l0.95,1.02l0.79,0.08l2.08,-2.08l0.75,0.47l2.0,-1.25l-0.59,-1.15l2.54,-2.26l-0.37,-1.25l2.34,1.39l1.58,-1.83l1.56,-0.77l-1.18,1.04l0.86,3.47l-1.93,0.81l-2.44,2.62l-0.5,1.76l0.46,1.08l-0.63,-0.47l-1.29,0.44l-0.69,1.02l0.39,1.3l-1.44,0.99l0.22,1.26l0.4,0.4l0.29,-0.03l0.1,0.1l-0.91,0.74l0.18,1.19l2.25,2.54l-1.77,1.02l0.41,1.35l-3.71,-1.11l-0.76,-1.01l0.54,-1.17l-1.28,-1.2l-1.16,-0.08l-1.52,-1.93l1.88,-0.97l-0.55,-0.92l1.29,-1.58l-2.09,-2.15l-1.86,0.08l-3.4,2.53l-0.53,0.71l0.4,0.53l1.27,-0.7l-2.05,2.72l-1.47,-0.58l-2.05,1.89l0.31,-0.51l-1.56,-1.1l-2.08,1.27l-1.96,-0.34l-0.89,0.81l1.25,-1.44l-1.12,-1.04l0.69,-0.74l0.18,-1.21l-0.49,-0.51l0.91,-0.8l0.37,-1.78l-1.01,-1.33l-0.79,-0.21l-0.51,-2.15l0.31,-1.57ZM460.14,174.79l0.05,-0.05l0.04,0.02l-0.03,0.03l-0.06,0.0ZM463.27,177.14l0.03,0.03l0.06,0.02l-0.14,-0.03l0.05,-0.02ZM458.62,178.95l1.05,0.2l0.09,1.26l1.53,1.87l-4.42,0.0l-1.09,-1.01l-0.02,-0.9l0.77,-0.55l0.33,-1.24l0.87,-0.22l0.89,0.6ZM454.4,161.85l0.14,-0.09l0.11,0.04l-0.06,0.03l-0.19,0.03ZM441.92,209.44l0.53,-2.24l0.88,-0.54l0.81,-1.82l3.82,2.78l-5.21,5.52l-0.82,-3.7Z","name":"Lesvos"},"36":{"path":"M264.22,394.85l1.73,2.56l-0.07,1.92l1.74,1.8l-1.41,2.47l0.95,0.98l0.89,-0.03l1.83,2.45l0.82,2.48l1.1,0.8l-0.12,0.74l1.51,2.1l-0.13,0.98l1.75,1.02l-0.52,1.05l2.46,2.42l0.63,2.53l1.2,0.85l-1.36,4.24l0.37,2.27l1.78,1.41l0.92,-0.1l0.47,-0.67l1.76,0.01l-0.39,1.29l2.41,2.2l-0.91,-0.39l-0.73,0.73l3.21,4.32l-0.72,0.39l0.66,0.94l-0.29,0.64l-8.96,0.21l-1.65,1.43l-4.36,-1.67l-1.69,-1.84l-3.23,-0.91l-3.27,0.0l-0.3,-4.6l-1.87,-3.06l-3.79,-4.08l-0.03,-9.53l-16.15,-3.9l-0.49,0.35l-0.77,7.4l-1.97,2.84l-3.79,2.03l-4.91,1.49l-1.51,1.23l-1.05,-1.21l-2.6,0.08l-2.48,1.35l-1.61,-2.57l-2.47,-1.68l-1.62,-2.65l-2.89,-1.04l-1.33,-2.54l-2.36,-1.87l-0.55,-5.11l-4.5,-4.0l1.35,-4.51l-0.59,-1.6l-1.09,-0.9l0.42,-1.2l1.48,-0.62l0.72,-1.62l-2.32,-2.63l-7.24,-5.29l-2.69,-0.93l-2.49,0.13l-0.09,-9.62l-1.64,-4.52l0.38,-3.49l4.4,-6.59l2.32,-0.47l0.8,2.5l10.79,4.83l1.66,-0.17l1.99,-2.12l1.31,-0.47l2.34,0.13l0.5,1.29l1.55,0.44l1.63,-0.63l2.0,-2.11l4.34,-1.55l0.56,-1.06l3.63,3.73l1.45,0.46l4.12,-0.35l2.22,0.67l-1.72,4.47l-0.74,3.88l0.31,1.46l1.66,1.23l2.73,-1.27l0.93,0.32l2.12,5.36l2.52,1.29l0.09,1.2l1.97,2.3l-0.99,3.48l0.57,1.64l1.43,1.15l2.4,0.84l1.8,4.02l1.24,0.69l1.58,0.02l1.53,-0.73l2.64,0.38l1.69,-0.8l-0.12,-4.18l2.16,-1.97l1.33,-0.37l0.61,1.37l-0.92,1.94Z","name":"Arcadia"},"35":{"path":"M655.95,516.09l0.86,-0.68l2.79,-0.55l1.5,-1.58l0.96,-0.02l2.13,-3.15l0.11,-2.12l1.25,-2.36l1.26,-0.05l1.51,-0.98l2.77,-3.56l2.75,-1.8l3.62,-1.0l7.32,-4.0l5.1,-1.94l5.45,-0.15l2.57,-3.07l1.04,1.24l-0.85,3.06l1.37,1.42l-3.21,3.62l0.73,1.82l-2.88,3.72l-0.85,2.1l0.3,0.92l-1.73,2.13l-0.7,1.9l0.02,1.51l-2.89,0.87l-2.13,3.28l-0.77,3.28l0.71,0.75l1.17,-0.21l-0.39,0.58l0.37,0.89l-1.24,1.16l0.77,1.03l-1.45,-0.38l-1.17,-1.33l-1.93,-0.08l-5.37,2.85l-1.91,2.08l-3.22,5.7l-1.97,2.4l-3.06,1.6l-2.35,2.32l-1.0,0.18l-3.35,-2.28l-1.17,-2.32l2.81,-6.35l0.26,-7.4l-1.04,-1.3l-2.92,-0.86l0.56,-1.14l-1.1,-1.88l-0.92,0.45l-0.5,-0.32ZM662.87,475.92l2.06,-1.51l0.25,-1.32l0.58,0.06l0.21,0.8l1.23,-0.21l0.57,0.76l1.07,-0.9l1.13,-0.35l-1.27,0.98l0.58,0.6l1.37,-0.3l-0.72,1.16l0.66,0.63l-1.58,0.83l1.47,0.8l-1.25,0.63l0.73,1.36l-1.17,0.9l-0.93,0.03l-0.13,-0.48l0.63,0.25l0.71,-1.18l-0.64,-0.85l-1.73,-0.93l-1.23,0.4l0.82,-0.76l-0.53,-1.23l-2.21,0.48l-0.67,-0.65ZM666.06,472.87l0.0,0.03l-0.03,0.0l0.03,-0.03ZM667.51,470.92l1.33,-0.73l0.58,0.62l-1.66,0.3l-0.24,-0.2ZM669.44,482.72l0.01,-0.43l0.49,0.1l-0.33,0.15l-0.18,0.18ZM661.51,540.46l-0.28,-0.22l0.58,-0.04l-0.25,0.26l-0.04,-0.0ZM656.06,505.7l0.5,-0.91l1.67,-0.38l-0.27,1.05l-0.62,-0.45l-1.29,0.69ZM657.78,505.91l0.12,0.12l-0.19,0.23l-0.12,-0.12l0.19,-0.23ZM642.85,510.36l0.28,-1.77l1.91,-0.33l0.49,0.41l3.2,-0.95l1.57,0.5l-0.02,0.86l-0.65,0.51l-0.38,-0.29l-1.61,0.71l-2.25,-0.39l-2.55,0.73ZM625.13,491.24l0.26,-3.35l2.18,1.0l0.95,-0.7l0.28,-1.33l1.05,-0.06l2.46,3.88l-0.63,1.5l0.6,0.73l0.74,0.3l0.83,-0.77l1.45,1.48l0.93,-1.38l0.55,0.58l-0.86,1.0l-3.17,0.99l-2.43,-2.32l0.0,-1.53l-0.79,-0.95l-0.85,-0.02l-2.11,1.75l-0.46,-0.89l-0.97,0.11ZM595.85,461.29l2.67,-1.16l2.47,0.45l6.79,-7.27l7.24,-3.62l4.7,-0.23l3.72,-1.96l1.39,1.93l2.01,0.76l1.44,-0.58l0.81,1.51l0.09,0.78l-1.92,1.06l-12.49,3.52l-4.43,4.42l-6.51,-0.9l-3.92,1.63l-0.97,1.03l1.05,2.06l-1.36,1.29l0.28,2.56l-2.99,-2.61l-0.44,-1.17l0.35,-3.5ZM607.4,566.45l-0.29,-1.13l1.38,-0.5l0.42,-0.42l-0.28,-0.58l2.91,-2.09l0.24,-1.12l-0.59,-0.85l0.59,-1.62l3.37,-4.61l-0.53,-2.0l0.74,-4.14l1.15,0.43l1.73,-2.5l1.41,0.1l-0.18,2.46l-1.56,1.73l-0.18,1.8l0.8,2.52l-2.22,2.84l-0.61,2.37l-1.73,1.6l-0.33,2.32l0.37,0.43l-0.87,0.82l1.08,1.52l1.33,0.28l-0.15,0.79l1.14,1.2l0.87,0.15l-0.0,1.22l1.14,0.97l-1.58,1.44l0.09,1.42l1.04,0.95l1.55,-0.07l0.74,0.85l-0.84,1.65l-0.55,-0.76l-1.45,0.05l-1.33,1.57l-1.28,0.55l-1.38,1.77l-0.37,1.54l0.88,0.62l-0.74,0.59l-1.38,-1.86l-1.28,0.15l-1.96,-1.57l1.8,-1.69l0.92,-1.94l-1.14,-2.14l0.59,-3.04l-1.23,-1.7l-1.86,-0.77l0.42,-0.74l-0.81,-0.84ZM619.11,544.06l-1.33,-0.28l-0.98,-1.42l0.73,-0.03l1.52,-1.75l0.07,-1.68l0.98,-0.25l-0.64,2.32l0.75,2.53l-1.1,0.54ZM612.11,477.65l-0.07,-2.67l2.91,-0.82l1.39,0.03l1.8,2.89l-1.49,2.04l-4.13,-0.55l-0.41,-0.9ZM611.67,444.78l-1.14,-0.97l1.82,-0.29l0.44,0.82l0.89,-0.88l0.97,0.39l-1.51,1.3l0.72,0.67l-0.34,0.24l-1.09,-0.03l0.13,-0.57l-0.88,-0.68ZM610.24,470.04l0.38,0.04l-0.33,0.71l-0.14,-0.42l0.09,-0.32ZM611.76,469.09l0.45,-0.51l0.08,0.08l0.09,0.34l-0.62,0.08ZM608.14,433.66l0.37,0.08l0.08,0.07l-0.36,-0.03l-0.09,-0.11ZM608.78,433.87l0.03,0.0l0.05,0.03l-0.03,0.03l-0.06,-0.06ZM608.45,413.96l-0.12,-0.34l0.02,-0.5l0.76,0.82l-0.66,0.03ZM608.37,412.45l0.06,-0.06l0.02,-0.09l0.01,0.09l-0.09,0.06ZM608.64,412.03l0.08,-0.08l0.01,0.01l-0.09,0.09l0.0,-0.02ZM607.28,478.3l-0.07,0.0l0.07,-0.0l-0.0,0.0ZM592.61,432.78l0.31,-0.31l4.77,1.97l0.54,-0.3l2.27,1.38l-1.1,-0.32l-0.4,0.42l2.76,2.59l0.33,1.18l0.84,-0.86l1.39,-0.2l0.86,1.18l-0.58,1.5l-0.99,0.67l1.11,0.58l-1.02,0.76l0.35,0.48l-3.48,-0.15l-0.66,0.65l0.31,1.67l-0.84,0.05l-0.49,-0.58l-0.49,0.58l-1.13,-0.3l-0.9,-0.81l0.09,-0.48l-1.16,-0.59l1.51,-1.45l-0.75,-1.14l1.16,-1.89l-0.02,-1.2l1.82,0.57l0.42,-0.57l-2.04,-2.57l-1.84,-0.23l-0.33,-0.95l-2.62,-1.34ZM594.9,435.64l0.03,-0.08l0.07,0.03l-0.07,0.05l-0.02,0.0ZM595.2,435.61l-0.02,0.0l0.01,-0.01l0.01,0.01ZM605.01,443.52l0.08,0.02l0.11,0.28l-0.31,-0.17l0.13,-0.13ZM589.8,587.02l4.34,-5.04l2.23,0.45l5.29,-1.41l-1.08,2.38l-2.28,0.47l-2.41,2.49l-1.51,0.12l-2.14,2.06l-1.88,-0.59l-0.55,-0.93ZM597.45,396.88l-0.21,-0.44l3.54,0.62l-1.06,1.1l-0.78,-0.7l-1.16,1.11l-0.33,-1.7ZM601.39,397.57l0.01,-0.12l0.24,0.21l-0.07,0.05l-0.18,-0.14ZM599.03,484.53l0.17,-0.18l0.2,0.03l-0.1,0.1l-0.27,0.05ZM594.58,438.91l-1.1,-0.4l-0.36,-0.31l1.36,-0.08l0.81,1.07l-0.71,-0.28ZM584.27,423.73l-0.69,-0.36l0.83,-1.31l1.03,0.73l1.26,-0.57l0.64,0.47l0.71,-0.56l1.9,0.72l-1.69,1.81l0.97,0.85l1.19,-0.39l0.38,0.22l-0.63,0.9l1.97,1.67l0.62,1.15l-0.24,0.67l-1.07,-0.72l-0.58,0.48l0.33,0.56l-1.77,0.08l-0.46,-0.79l1.69,-0.35l0.31,-1.49l-1.01,-0.45l-2.63,1.39l-0.44,-0.81l1.82,-1.46l-0.07,-0.55l-1.43,-0.78l-1.33,0.36l-0.4,-1.07l-1.21,-0.4ZM586.0,421.56l-0.11,-0.11l0.32,-0.12l0.01,0.01l-0.22,0.22ZM590.76,579.99l0.3,0.17l0.14,0.32l-0.94,-0.37l0.5,-0.12ZM579.57,411.16l0.84,-1.12l0.71,1.26l1.26,0.59l-0.84,0.65l-1.96,-1.38ZM583.27,413.28l0.39,-0.73l-0.43,-0.41l1.35,-0.43l0.1,1.3l-1.41,0.28ZM583.11,412.12l-0.03,-0.03l0.04,0.03l-0.0,-0.0ZM579.7,403.28l-0.41,-0.42l2.7,2.23l-1.39,-0.57l-0.9,-1.24ZM579.22,402.85l0.04,-0.03l0.03,0.03l-0.06,0.0ZM578.28,406.43l-0.02,-0.02l0.24,-0.24l-0.01,0.08l-0.21,0.18ZM575.32,498.35l-0.22,-0.4l1.21,-0.37l0.94,1.36l-1.66,0.57l-0.26,-1.15ZM564.78,412.9l0.18,-2.08l0.59,-0.62l1.76,1.31l-0.74,0.37l0.03,0.65l-1.16,-0.24l-0.65,0.61ZM567.25,413.75l0.16,0.66l-1.37,-0.32l0.78,-0.63l0.43,0.29ZM565.0,409.6l0.21,-0.09l0.04,0.23l-0.04,0.04l-0.22,-0.19ZM565.94,409.14l-0.74,-1.62l0.57,-0.51l-0.59,-0.75l0.0,-0.74l1.09,0.93l1.48,-1.04l0.36,0.99l1.48,0.59l0.04,0.8l-2.32,-0.67l-1.38,2.03ZM558.18,439.04l-0.47,0.14l1.45,-0.58l-0.57,0.41l-0.41,0.04ZM557.07,438.84l-0.35,0.05l-0.04,-0.1l0.31,-0.05l0.09,0.11ZM560.55,439.22l-0.29,-0.05l-0.52,-0.43l1.7,0.4l-0.89,0.08ZM559.67,481.46l-0.04,-0.04l0.08,-0.08l0.01,0.06l-0.05,0.05ZM543.97,476.7l-0.11,-0.28l0.34,-0.33l0.57,1.13l1.36,-1.0l0.74,0.15l2.3,1.28l0.38,0.95l0.77,0.03l0.37,1.18l-1.48,1.28l2.0,2.17l-0.73,0.27l-1.06,-0.53l-1.11,0.6l-1.52,-1.15l-0.65,0.28l-0.97,-2.46l-0.86,-0.54l0.31,-1.52l-0.86,-1.02l0.2,-0.48ZM552.22,477.71l-0.38,-0.46l1.03,-0.58l1.11,0.63l-1.75,0.41ZM554.54,477.68l-0.27,-0.26l0.73,-0.63l-1.04,-2.14l1.83,-1.03l-0.71,-0.43l-1.7,0.47l-0.84,-1.15l0.41,-0.58l2.93,1.36l3.52,3.47l-0.38,0.28l-1.08,-0.95l-1.43,0.64l-0.41,-0.28l-0.63,1.26l-0.46,-0.38l-0.47,0.36ZM554.25,523.06l0.07,-0.07l-0.02,0.11l-0.04,-0.04ZM544.74,441.15l0.86,0.08l0.49,-0.5l0.64,0.02l-1.75,0.97l-0.6,-0.28l0.35,-0.28ZM540.76,479.76l-0.1,-0.07l0.1,-0.1l0.02,0.04l-0.02,0.13ZM533.92,479.75l-0.06,-0.06l-0.15,0.07l-0.02,-0.02l0.29,-0.11l-0.07,0.11Z","name":"Dodekanisa"},"52":{"path":"M568.13,373.41l-0.33,-0.57l2.98,-3.09l2.06,0.03l3.09,-2.53l1.34,0.09l3.98,-1.6l8.4,0.66l2.63,2.49l3.63,0.62l2.99,2.19l1.25,-0.93l-2.05,-2.62l5.86,1.19l1.77,-0.46l-1.75,0.64l-0.79,1.44l1.19,0.96l-0.33,1.05l0.47,0.53l1.95,-0.1l0.26,0.6l-4.19,1.04l-2.45,-0.35l-1.82,1.6l-1.97,-0.1l-1.88,0.68l-2.06,1.59l-0.46,2.36l-1.4,0.3l-4.93,-0.55l-2.93,-4.44l-3.03,-1.77l-6.24,0.68l-1.87,1.75l-1.87,0.53l-0.81,-1.03l0.5,-1.1l-1.16,-1.77ZM600.19,367.76l0.05,-0.05l0.06,0.15l-0.0,0.0l-0.11,-0.11ZM554.86,386.52l1.01,-0.48l0.42,0.34l-1.17,0.38l-0.26,-0.24ZM556.31,386.4l0.69,-1.08l1.08,-0.04l0.35,1.53l-0.36,0.85l-0.74,-1.23l-1.01,-0.04ZM561.61,389.72l0.11,-1.24l-1.16,-1.16l0.34,-1.35l0.78,0.77l0.09,1.71l1.02,1.01l-0.43,0.46l0.46,0.7l-1.22,-0.9ZM560.76,385.7l0.11,-0.11l-0.02,0.2l-0.09,-0.09ZM562.99,385.75l-0.05,-0.16l0.65,-0.15l-0.35,0.53l-0.25,-0.21ZM563.89,385.14l-0.46,-1.57l0.37,-0.81l-1.51,-0.9l0.81,-1.77l1.55,1.12l-0.74,0.87l0.22,0.91l0.99,0.46l-1.21,1.7ZM560.89,385.09l-0.11,-0.07l0.04,-0.04l0.07,0.07l0.0,0.05ZM521.1,391.86l2.76,-4.83l3.62,-4.03l1.76,-1.19l1.32,0.61l4.06,-0.73l0.63,0.61l1.37,-0.18l1.69,0.68l7.94,-4.91l4.62,-0.86l-0.05,0.64l-1.38,0.73l-1.64,3.2l-2.15,2.03l-5.41,3.49l-1.9,0.73l-6.33,0.51l-4.43,3.77l-2.67,-0.23l-3.21,0.76l-0.59,-0.79Z","name":"Samos"},"33":{"path":"M386.55,602.99l1.36,-7.37l-1.28,-0.84l-0.15,-0.72l4.28,-1.84l0.24,-1.41l-1.04,-2.64l3.11,0.22l1.55,-1.07l2.75,0.2l0.86,-0.73l1.83,-0.16l1.12,0.52l1.12,-0.74l1.18,0.51l5.06,-0.75l4.86,-1.59l3.0,-2.46l3.31,0.14l0.53,-0.69l6.17,0.62l0.62,1.15l6.76,-0.26l-0.45,1.46l1.65,2.29l-1.57,2.42l2.05,1.98l-0.01,3.49l-1.81,5.89l-3.47,0.2l-1.03,-2.52l-1.66,-0.91l-1.13,1.23l-0.52,2.35l-0.03,4.8l-0.65,0.66l-1.19,-0.78l-1.69,0.42l-1.43,1.06l-0.83,3.18l-10.37,-0.4l-3.62,-3.74l-3.24,-0.84l-1.73,0.37l-2.58,-1.27l-0.62,-1.02l-1.18,0.22l0.38,-0.72l-1.71,-1.29l-1.51,0.2l-1.1,0.87l-2.29,-0.65l-2.88,1.34l-1.0,-0.4ZM434.08,582.94l0.78,-0.96l1.74,0.97l-0.29,1.04l-2.22,-1.05Z","name":"Rethymno"},"37":{"path":"M245.37,362.21l1.56,0.32l1.58,-0.71l0.86,0.48l0.02,0.9l-2.29,3.53l1.38,1.26l1.77,-0.69l3.77,0.82l2.7,1.4l4.28,-0.31l4.78,2.95l3.07,1.02l3.13,-0.03l4.56,-1.23l3.66,0.81l0.65,1.34l1.35,0.74l5.29,1.1l1.36,-1.15l2.69,-0.94l2.71,0.42l1.54,-0.83l2.76,1.44l0.81,-0.15l-1.78,3.22l1.47,2.34l-0.79,0.88l-0.29,1.65l2.35,1.69l-2.18,6.19l0.66,1.69l1.31,1.29l3.83,1.11l2.36,1.6l1.37,0.26l2.23,2.04l1.69,-0.15l3.85,0.88l1.7,-0.74l2.73,0.0l0.67,0.88l0.02,1.9l-2.11,0.84l-0.48,-0.76l-5.19,-0.18l-3.29,1.87l-2.23,-1.16l-0.97,0.88l-0.08,0.81l-2.17,0.53l-0.62,0.93l0.99,1.69l0.63,-0.78l0.66,1.51l1.77,0.16l-1.27,0.1l-1.97,-0.43l-3.11,0.66l-1.23,1.94l1.73,1.71l-0.04,0.71l-1.09,-0.28l-0.77,0.86l-2.17,-1.77l1.32,-0.78l-0.64,-1.13l-0.92,0.07l-2.51,-2.37l-3.05,0.08l0.69,-0.84l-0.68,-2.19l2.36,0.14l1.21,-1.34l-0.16,-1.39l1.42,1.0l1.19,-0.85l-0.99,-0.83l0.13,-1.42l-1.25,-1.46l-2.48,-0.4l-2.59,0.46l-0.47,-0.37l0.6,-0.88l-1.25,-1.56l-2.81,1.58l-1.77,-4.22l-0.68,-0.6l-2.73,-0.25l-1.02,-1.42l-0.92,0.03l-0.33,0.63l-1.33,-0.43l-2.21,0.48l-1.19,1.37l-1.79,-1.49l-0.63,0.1l0.47,-0.97l-2.1,-2.07l0.43,-0.61l-0.35,-0.61l-2.5,-1.54l-2.65,1.01l-1.89,1.79l0.75,2.79l-1.52,0.47l-2.46,2.34l-0.28,1.62l0.52,2.27l-1.16,0.58l-2.74,-0.38l-2.61,0.75l-1.02,-0.57l-1.64,-3.87l-3.8,-1.92l-0.46,-1.08l0.98,-3.83l-2.03,-2.41l-0.27,-1.5l-2.36,-1.06l-2.2,-5.47l-1.51,-0.64l-2.76,1.28l-0.94,-0.73l-0.25,-1.07l0.72,-3.76l1.79,-4.65l1.46,-0.98l2.31,-3.58l1.2,-0.96l1.17,-0.41l0.97,0.99ZM296.07,410.1l0.02,-0.13l-0.65,-0.61l1.41,0.78l-0.79,-0.05ZM296.96,410.15l0.06,-0.01l0.13,-0.13l-0.11,0.16l-0.08,-0.02ZM284.1,399.72l0.02,-0.1l0.12,0.08l-0.07,0.06l-0.07,-0.03ZM279.5,394.13l0.26,0.06l0.19,0.31l-0.27,-0.08l-0.17,-0.29Z","name":"Argolida"},"32":{"path":"M549.55,595.0l0.17,0.07l-0.41,-0.23l0.19,0.16l0.04,0.0ZM549.78,595.1l0.05,-0.01l0.02,0.02l-0.03,0.03l-0.03,-0.04ZM482.85,592.96l2.65,-0.85l1.3,-1.07l2.3,0.17l1.39,-1.19l5.59,-1.41l2.88,1.13l5.21,-0.42l-0.34,1.21l-3.01,1.72l0.28,1.25l-0.7,1.96l0.91,1.17l0.47,2.02l-1.97,1.07l0.41,1.38l-0.5,0.58l0.58,0.63l-0.87,1.21l0.11,0.99l1.46,2.22l-0.28,0.91l0.56,0.57l2.4,-0.0l3.82,1.74l0.98,-0.4l2.29,-2.61l0.18,-1.19l0.41,-0.25l0.61,0.67l2.41,-1.71l0.47,-0.5l-0.27,-0.79l1.8,0.56l2.74,-0.35l0.94,-1.59l0.59,0.52l1.95,-0.32l2.43,-2.86l0.98,0.52l1.23,-0.49l0.89,0.89l1.16,0.17l2.3,-0.87l-0.77,1.36l0.66,0.8l1.86,0.75l2.23,-0.27l1.88,-1.12l0.42,-0.42l-0.33,-0.93l3.4,-2.6l-0.39,-0.95l1.25,-0.69l-0.35,-0.52l0.33,-0.14l0.98,0.81l0.54,-0.77l0.85,-0.02l-1.06,0.89l0.95,3.16l-0.69,1.86l0.74,1.22l2.37,1.29l0.84,-0.79l0.12,0.84l-3.0,1.31l-0.33,1.89l0.74,0.97l-0.33,1.81l-1.42,1.56l0.67,0.81l-1.33,1.23l-1.73,3.06l-0.94,0.01l-2.22,1.91l-2.42,-0.07l-3.2,1.88l-1.37,-0.24l0.13,-0.69l-1.08,-1.22l-1.8,-0.27l-0.94,0.99l-1.27,-0.81l-0.76,0.5l-3.99,-2.28l-1.21,0.68l-2.21,-0.21l-5.94,1.39l-3.64,1.69l-3.07,0.0l-1.82,-0.92l-1.09,0.51l-3.91,-0.91l-1.89,0.87l-5.41,-0.2l-3.88,1.69l-0.06,-5.02l-1.58,-2.83l-2.17,-0.63l0.15,-2.37l-1.18,-1.27l-5.93,-2.83l-1.13,-2.07l1.52,-3.25l-0.12,-1.49l0.97,-0.73l2.89,-0.17l2.4,-2.15l0.28,-2.28ZM544.88,594.27l0.45,0.01l-0.95,0.21l0.13,-0.12l0.37,-0.1ZM545.45,593.01l0.09,0.05l0.32,-0.05l-0.29,0.17l-0.12,-0.17ZM546.42,592.9l0.12,-0.12l0.04,0.04l-0.03,0.03l-0.13,0.05ZM545.59,591.89l0.15,-0.1l0.4,0.0l-0.15,0.12l-0.41,-0.02ZM546.29,591.73l0.37,-0.19l0.45,0.04l-0.54,0.42l-0.29,-0.27ZM502.47,595.99l0.28,-0.47l-0.35,-0.58l0.06,-0.12l0.14,-0.14l0.27,1.46l-0.41,-0.15ZM502.41,593.7l0.07,-0.31l0.82,0.43l-0.49,0.44l-0.39,-0.56ZM536.5,588.82l0.09,-0.62l0.67,-0.05l-0.35,0.47l-0.4,0.2ZM536.47,590.06l0.02,-0.01l0.1,0.02l-0.06,0.06l-0.07,-0.07ZM532.93,624.92l0.29,-0.78l1.51,0.65l-1.04,0.66l-0.77,-0.53ZM497.99,630.73l0.21,-0.25l0.32,0.01l1.44,0.42l-1.97,-0.17Z","name":"Lasithio"},"50":{"path":"M538.11,299.14l0.54,-0.22l0.93,0.82l0.65,-0.41l1.25,1.1l1.8,0.41l-1.73,0.7l-0.64,-0.77l-1.81,-0.38l-0.99,-1.25ZM545.24,302.33l0.09,-0.09l0.32,0.2l-0.22,0.22l-0.19,-0.33ZM510.29,299.18l-0.55,-0.95l1.71,-2.76l2.8,-0.82l3.72,0.1l5.31,-1.55l2.95,1.47l1.17,-0.36l1.59,2.95l0.73,0.58l0.92,-0.38l1.12,1.71l0.62,-0.8l0.61,0.54l0.49,-0.4l0.15,-1.44l1.47,1.1l0.08,0.94l-0.95,1.34l0.26,2.27l-1.73,0.29l-0.69,1.52l0.75,0.58l0.8,-0.3l-0.53,1.15l1.45,0.35l-1.6,3.44l-0.04,1.2l0.7,6.29l1.29,1.04l-0.48,0.71l0.5,0.93l-4.38,3.37l0.04,2.49l0.92,1.2l-1.18,1.85l-4.33,0.65l-1.78,2.36l-0.27,2.19l-1.16,-0.38l-0.55,-0.84l-1.62,-0.27l-1.47,-1.41l0.29,-0.67l-0.4,-0.4l-1.92,0.08l0.28,-0.82l-1.26,-0.49l-0.15,-1.23l-1.59,-0.08l-0.67,-1.95l-1.22,0.28l0.68,-2.09l3.11,-2.23l0.87,0.81l0.51,-0.4l-0.18,-0.58l0.5,0.45l0.5,-0.46l0.51,0.46l0.96,-0.2l1.06,-1.75l-0.4,-0.69l0.31,-0.84l1.84,-1.37l0.07,-0.76l-0.75,-2.73l0.4,-0.99l-0.47,-0.45l-0.48,0.32l-1.36,-1.36l0.0,-1.01l-0.69,-0.4l0.18,-1.84l-1.07,-1.56l-1.71,-1.29l-2.69,-0.41l-1.88,-1.53l-2.04,-3.78ZM532.37,298.24l-0.01,0.01l-0.02,-0.07l0.04,0.04l-0.01,0.01ZM487.0,294.52l-0.64,-0.91l1.18,0.38l1.75,-1.0l0.53,0.37l0.54,-0.39l2.07,1.41l-0.77,4.63l-1.54,-0.05l-1.28,-0.94l-0.54,0.43l0.61,-1.81l-1.91,-2.11ZM483.59,298.89l0.72,-0.92l0.74,0.18l-0.69,1.11l-0.81,0.03l0.04,-0.39Z","name":"Chios"}},"height": 637.163792480661,"width": 700.0});

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