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
            /** JQVMap merc map for tunisia  */
jQuery.fn.vectorMap('addMap', 'tunisia',{"insets": [{"width": 900, "top": 0, "height": 1954.3544733545057, "bbox": [{"y": -4519725.417185229, "x": 838669.3845975221}, {"y": -3535818.4871775922, "x": 1291768.476435734}], "left": 0}], "paths": {"tn-za": {"path": "M544.74,259.86l2.72,1.39l7.19,-0.8l12.57,4.89l6.58,1.79l1.94,4.02l3.89,5.26l1.57,2.68l1.05,2.92l2.21,1.45l2.38,0.61l2.1,2.54l3.23,1.77l2.82,-0.07l1.77,0.4l1.82,-0.2l1.09,0.44l0.38,1.26l-2.85,10.19l0.32,2.67l0.5,0.33l4.18,-1.24l3.47,-2.95l1.84,-0.52l0.98,-1.62l1.84,-0.95l9.62,-3.95l0.71,3.78l-1.2,9.68l-0.23,8.98l2.32,4.63l0.5,1.8l2.33,1.82l-1.15,3.44l0.08,3.65l2.92,5.28l0.62,2.65l-0.45,2.65l0.69,2.7l0.0,2.42l-0.92,1.17l-1.87,0.04l-1.82,0.73l-1.15,1.42l0.62,1.7l3.05,0.6l1.01,0.73l0.85,1.72l0.09,1.82l-1.76,2.6l-2.33,1.81l-5.25,0.52l-2.5,0.81l-5.24,-1.44l-2.52,-0.35l-4.58,1.11l-1.65,2.57l0.35,2.41l0.91,2.29l0.05,2.24l-1.14,5.1l-2.41,7.18l-1.25,0.98l-4.44,0.92l-1.96,1.11l-0.85,0.84l-2.61,-0.32l-4.42,1.35l-3.22,-0.6l-3.46,0.36l-2.5,-0.52l-0.46,0.25l-1.15,3.09l1.7,2.38l-0.08,2.79l-1.54,3.16l-0.56,3.15l-2.52,2.28l-2.88,1.77l-3.17,0.53l-1.96,-0.71l-2.25,-2.38l-1.39,-2.04l-0.55,-0.11l-2.14,1.4l-0.45,2.56l2.11,4.25l-1.67,3.27l0.21,4.88l-0.93,3.06l-1.56,2.42l-2.45,0.93l-2.88,-0.85l-2.14,-1.51l-1.79,-2.1l-1.35,-3.0l-2.16,-0.47l-2.46,-1.63l-1.9,-0.72l-2.99,0.47l-2.21,-0.75l-7.12,1.17l-3.09,-1.56l-1.98,-2.19l-2.79,-5.16l-8.94,-2.95l-2.99,1.11l-3.85,2.31l-1.36,1.35l-1.59,2.31l-0.89,0.01l-10.27,-3.61l1.51,-4.78l1.43,-2.07l1.29,-2.72l1.08,-2.45l0.76,-2.85l1.16,-2.28l1.09,-4.14l-0.48,-3.05l-2.29,-1.99l-9.72,-2.97l-1.94,-3.36l-1.89,-4.26l-6.23,-3.31l-2.06,0.47l-2.04,1.41l-1.3,0.16l-0.78,-2.44l0.05,-4.75l-0.54,-1.89l-4.85,-1.61l-3.66,-5.44l1.71,-0.74l5.26,0.79l4.1,-0.73l2.57,-0.86l5.41,-5.28l4.59,-2.74l1.75,-1.7l1.41,-3.49l2.34,-3.85l0.54,-2.47l1.25,-2.91l1.87,-13.37l0.16,-3.05l-0.37,-3.78l-0.96,-2.98l-2.4,-4.03l-1.82,-1.99l0.78,-2.14l9.8,-4.82l2.01,-2.76l2.1,-6.42l1.03,-2.19l1.53,-1.95l4.75,-3.74l4.27,-4.42l2.6,-1.02l3.86,0.23l2.81,-1.34l3.64,-4.82l1.81,-5.19l0.83,-4.15l3.28,-6.96l1.83,-1.71l2.48,-0.51l4.59,2.4l2.42,2.68l1.76,3.79l1.18,4.24l1.56,2.47Z", "name": "Zaghouan"}, "tn-bz": {"path": "M346.87,111.96l2.64,-1.16l1.34,0.62l1.78,-0.39l0.58,-0.71l0.29,-1.37l0.84,-0.23l1.77,-1.7l1.3,-0.46l2.92,-2.33l2.09,-2.55l1.05,-1.91l0.58,0.0l0.4,-0.4l0.55,-1.85l-0.31,-0.56l1.54,-1.3l1.23,-1.91l5.52,-4.48l0.32,0.0l-0.18,0.99l0.61,0.94l-0.18,1.37l0.68,0.4l-0.06,0.53l0.47,0.42l-0.59,0.89l0.65,0.71l2.52,0.46l3.5,-0.14l1.29,0.45l1.26,-1.23l2.61,-0.23l1.6,-1.54l1.54,0.0l0.58,-0.93l0.83,0.0l0.57,-0.62l2.14,0.39l2.66,-0.54l2.44,0.23l1.97,-0.77l2.78,-1.78l0.72,-0.15l0.63,-0.7l0.6,0.0l3.07,-1.39l3.23,-2.72l0.68,-0.77l-0.12,-0.6l1.34,-0.54l1.52,-0.16l1.8,-1.24l4.76,0.23l2.21,0.46l2.11,1.16l1.72,-0.23l5.71,-1.93l2.05,-1.85l2.13,-0.77l1.9,-1.16l1.66,-1.31l0.4,-0.4l-0.17,-0.25l1.45,-1.28l1.66,-0.62l1.15,0.0l1.29,-0.93l2.66,-1.0l0.94,0.59l0.92,1.64l0.83,0.71l1.66,0.0l1.06,-0.69l1.64,-0.16l3.64,-2.39l3.24,-1.39l6.21,-4.64l0.89,-1.16l1.14,-0.16l1.51,-1.34l1.63,0.65l2.34,0.0l0.76,-0.86l0.7,-0.15l1.43,1.16l0.52,-0.33l0.59,0.56l0.86,0.0l0.69,-0.46l2.57,-0.15l2.27,-1.24l1.47,-1.29l1.01,-0.02l2.72,0.62l0.37,0.5l-0.12,0.96l2.55,2.18l1.15,0.0l2.84,0.93l5.13,-0.15l0.52,0.31l0.82,-1.78l2.03,-0.93l2.26,0.15l0.37,-0.37l1.72,0.83l1.18,-0.31l1.4,0.31l1.5,-0.22l0.25,0.41l-0.06,2.89l0.86,1.2l-0.25,4.05l1.29,2.3l0.06,2.18l1.32,1.84l-0.46,0.4l0.33,1.83l-2.49,2.04l-0.52,-0.33l-2.89,0.39l-0.46,0.48l0.06,0.77l0.4,0.4l1.38,0.28l-2.12,0.39l-0.65,0.56l-0.7,-0.25l-0.65,0.63l0.45,0.99l-0.54,-0.23l-0.68,0.36l-0.48,-0.52l-0.43,0.0l-1.2,1.54l-1.38,-0.08l-0.46,0.49l0.68,0.98l-0.32,0.23l-1.37,-1.23l-0.61,0.0l-1.11,0.46l-0.63,0.7l-1.52,-0.08l-0.75,0.62l-2.01,-0.15l-1.01,1.25l-0.06,3.16l0.89,0.68l-0.63,0.15l-0.66,-1.0l-1.21,-0.23l-0.6,-1.68l-0.89,-0.55l-0.58,0.55l0.86,1.41l-1.26,0.28l-0.46,0.55l1.63,1.4l0.55,-0.3l1.76,1.77l0.31,0.77l-0.98,1.84l0.4,0.48l1.35,-0.08l1.14,-1.42l0.18,1.04l-1.35,3.76l0.06,2.01l2.0,2.33l2.44,0.93l-0.08,0.45l1.23,0.79l0.74,1.42l-0.55,0.88l-0.37,2.54l2.24,2.33l0.56,-0.13l2.86,0.59l0.39,0.39l1.71,-0.31l3.21,1.16l2.4,-0.23l2.89,-1.85l1.83,-2.16l1.67,-0.08l0.94,-1.16l1.21,-0.08l2.09,-0.85l2.0,-2.87l1.41,-2.78l1.84,-5.63l0.55,-3.78l-0.31,-2.55l-1.57,-1.79l-1.72,-0.39l-1.98,0.23l-3.06,-0.15l-1.4,0.39l-3.87,-1.16l-0.87,-0.62l-2.46,-0.46l-2.41,0.69l-1.77,0.0l-1.94,1.77l-1.18,-0.08l-0.51,-0.54l-0.77,0.15l0.18,-0.62l1.38,0.03l2.03,-1.31l0.65,-1.02l-0.43,-0.68l1.81,-0.7l1.78,-1.39l1.41,-0.08l2.06,-2.56l0.18,-1.76l1.82,-1.52l0.48,0.52l0.74,0.15l0.52,-0.34l0.49,0.41l0.18,0.99l0.65,0.79l1.54,0.69l1.28,0.16l0.94,0.69l1.21,-0.16l10.46,2.16l2.95,0.23l0.69,-0.23l1.83,0.16l3.09,-1.16l2.75,-0.16l4.87,-2.63l3.61,-0.85l3.35,-1.64l0.0,0.53l-0.68,1.09l0.43,1.08l2.03,1.94l-0.06,0.99l2.37,2.79l1.29,0.54l3.92,-0.23l1.06,0.46l1.34,-0.08l6.81,2.93l0.58,0.93l0.92,0.09l1.41,1.6l0.29,-0.08l1.25,0.93l0.97,0.16l0.57,0.69l0.66,0.0l1.12,1.08l0.95,-0.08l-0.25,0.29l0.18,0.46l0.65,0.63l2.73,1.39l0.12,1.45l1.14,1.33l1.29,0.77l3.07,0.39l3.35,-0.46l1.37,0.23l0.94,0.85l3.86,-0.39l1.03,0.59l-1.69,0.16l-4.12,1.46l-0.75,1.22l-0.3,-0.3l-3.75,0.15l-0.46,0.79l0.56,0.48l-0.52,0.2l-0.85,1.13l-0.41,-0.29l-0.06,-1.6l-0.58,-0.86l-1.54,0.08l-0.62,-0.46l-2.27,-0.08l-1.8,0.85l-2.4,0.23l-5.15,-0.15l-1.41,0.39l-1.69,1.79l-0.43,1.48l-2.09,3.53l0.8,0.62l-0.18,0.7l0.86,0.83l0.06,0.58l-2.9,0.03l-2.01,-0.69l-2.71,-0.23l-5.35,2.57l-4.12,4.26l-1.95,-0.71l-0.49,0.19l-0.93,2.21l1.75,3.86l-0.26,2.64l0.16,6.08l-2.07,4.82l-3.88,7.05l-6.47,5.23l-0.31,3.74l-3.24,8.4l1.5,2.44l-2.35,2.37l-1.93,0.85l-3.68,0.74l-2.3,1.13l-1.8,-0.14l-1.07,-1.18l-0.82,-2.56l-2.19,-4.03l-1.82,-1.4l-4.53,-1.71l-3.37,-0.31l-2.89,-0.76l-10.52,0.15l-5.27,-3.59l-0.49,0.05l-1.94,1.96l-0.63,4.19l-3.57,3.8l-1.23,2.42l-1.45,4.57l-1.67,1.69l-1.95,1.16l-3.14,0.5l-2.89,-1.28l-2.49,0.1l-3.34,3.09l-2.7,0.82l-3.78,0.51l-5.66,6.42l-1.49,-2.59l-4.66,-0.26l-2.6,1.13l-2.84,3.11l-3.42,4.85l-2.47,1.86l-4.34,4.47l-5.25,6.86l-2.02,1.67l-1.88,2.1l-7.6,5.25l-7.73,7.22l-4.26,0.9l-2.52,-0.65l-1.58,-1.83l-2.36,0.12l-0.48,-0.47l-0.68,-4.29l-1.84,-4.36l-0.46,-2.3l3.43,-7.04l0.84,-3.12l2.42,-5.56l-0.86,-2.7l-2.87,-4.34l-2.97,-2.6l-3.39,-0.8l-3.81,0.17l-2.4,0.45l-4.57,-4.17l-1.57,-2.57l-4.7,-2.87l-1.62,-1.5l-0.26,-6.49l-0.69,-2.8l-7.1,-8.59l-0.52,-2.48l-0.11,-5.41l-0.72,-5.28l-5.48,-9.5l-5.71,-0.18l-2.76,0.76l-2.34,1.25l-1.79,1.58l-2.84,1.08l-3.32,0.4l-1.61,-0.39l-0.0,-2.43l-0.96,-4.86l-1.7,-4.95l0.06,-1.91l4.06,-7.1l0.34,-2.85l-1.28,-2.27l-0.44,-1.97l1.75,-0.08ZM596.93,112.81l0.9,-0.86l0.62,0.4l-1.06,0.73l-0.46,-0.26ZM498.79,95.3l-0.28,-0.46l0.59,-0.4l-0.25,-0.86l1.97,-1.6l0.42,-0.91l1.06,-0.88l0.71,0.73l0.83,0.0l-1.78,2.53l-0.37,1.3l-1.01,-0.15l-1.31,1.06l-0.57,-0.34ZM506.78,89.05l0.06,0.0l0.0,0.06l-0.06,-0.06ZM303.01,11.56l0.17,-0.7l2.29,-1.48l0.29,-0.92l0.78,0.15l2.08,-0.78l2.16,0.08l1.57,-1.72l0.0,-0.76l1.1,0.16l0.0,1.31l2.21,2.62l-0.68,0.79l-0.65,1.6l-0.5,-0.14l-1.77,-2.09l-1.53,0.46l-1.24,1.16l-1.35,-0.15l-2.17,1.32l-1.98,-0.08l-0.8,-0.82ZM315.36,0.56l0.01,-0.08l0.2,0.2l-0.02,0.03l-0.18,-0.14ZM296.55,17.42l0.57,-0.52l0.66,0.31l0.25,0.59l-1.47,-0.39ZM298.75,18.27l0.02,-0.06l0.12,0.13l-0.1,-0.08l-0.04,0.0Z", "name": "Bizerte"}, "tn-bj": {"path": "M304.73,149.07l2.7,-2.82l1.04,-0.63l0.38,-0.92l6.45,-5.94l1.23,-2.76l0.55,-0.55l0.06,-0.92l0.43,-0.68l2.52,-2.48l1.91,-3.16l0.12,-0.92l-0.46,-0.48l-0.43,0.0l0.19,-0.19l0.37,0.14l2.72,-2.39l1.46,-0.31l1.94,-2.17l0.29,-1.22l1.09,0.08l0.83,-0.63l0.06,-0.93l1.31,-1.84l0.57,0.15l0.39,-0.39l1.4,-0.08l1.57,-1.62l1.64,-1.0l2.32,-0.39l1.78,-0.93l0.63,-0.69l1.52,0.23l1.01,-0.62l0.53,2.31l1.24,2.2l-0.36,2.39l-4.0,6.94l-0.13,2.32l1.73,5.08l0.96,4.83l-0.01,2.58l0.31,0.39l1.99,0.48l3.58,-0.4l3.05,-1.14l1.86,-1.62l2.26,-1.2l2.57,-0.7l5.05,0.04l5.25,9.15l0.67,5.03l0.12,5.42l0.56,2.69l7.1,8.6l0.66,2.66l-0.04,3.94l0.44,2.9l1.85,1.69l4.58,2.79l1.52,2.52l4.76,4.34l6.58,-0.55l2.96,0.67l2.78,2.42l2.81,4.25l0.76,2.13l-2.37,5.42l-0.83,3.09l-3.51,7.4l0.52,2.55l1.81,4.26l0.7,4.38l0.83,0.92l2.32,-0.14l1.73,1.88l2.73,0.71l4.81,-1.02l7.81,-7.29l7.66,-5.3l1.89,-2.11l2.04,-1.7l5.23,-6.85l4.3,-4.44l2.31,-1.73l0.5,1.06l2.84,3.51l1.49,1.35l-0.58,2.65l0.24,1.44l1.59,0.83l2.26,-1.06l0.59,1.16l0.42,2.37l1.1,2.29l1.64,2.08l4.36,2.29l2.38,0.79l4.16,0.58l11.62,8.22l1.56,1.64l1.75,0.31l1.78,-0.13l2.42,-2.13l2.43,-0.66l0.28,0.64l-0.91,7.11l1.69,6.94l3.56,6.62l1.77,2.04l2.56,1.81l3.08,6.55l4.94,6.17l1.44,2.63l0.55,1.88l-2.17,0.89l-4.28,4.43l-4.84,3.83l-1.58,2.02l-1.11,2.33l-2.11,6.44l-1.86,2.52l-9.91,4.94l-0.84,2.94l1.91,2.07l2.26,3.81l-1.16,2.08l-3.72,0.64l-9.31,-1.12l-1.55,1.54l-0.98,2.05l0.02,1.83l-2.83,0.94l-2.37,-1.72l-3.49,-0.13l-4.09,0.63l-4.82,-0.92l-2.06,-2.21l-2.28,-3.43l-4.53,-4.0l-2.19,-1.24l-4.47,1.28l-1.85,1.03l-3.43,-0.81l-4.41,0.22l-2.81,-0.37l-4.12,0.27l-6.64,1.09l-8.24,3.03l-2.4,2.71l-0.8,3.33l-0.1,4.26l0.82,2.91l-0.4,2.46l-2.23,2.42l-4.78,2.61l-3.34,0.96l-2.16,-1.22l-2.48,-2.3l-1.16,-1.96l-1.27,-1.32l-2.5,-1.11l-2.78,-0.76l-3.61,-0.45l-4.75,-0.04l-5.96,-0.74l-1.28,0.59l-5.56,4.12l-7.53,2.57l-2.1,-0.82l-3.2,-3.13l-2.29,-0.16l-0.42,-1.28l0.68,-3.9l-1.24,-1.96l-3.66,-2.52l-1.64,-4.36l-2.17,-1.55l-2.11,-0.29l-2.99,0.26l-1.89,-0.3l-2.53,-2.89l2.7,-0.15l4.48,-1.05l3.48,-1.18l0.27,-0.38l-0.21,-5.31l0.52,-5.99l0.78,-2.5l4.61,-7.57l0.44,-2.77l0.28,-6.79l-0.18,-3.23l-1.48,-3.19l-7.91,-9.79l-2.61,-5.95l-0.23,-3.2l0.91,-3.56l1.92,-5.18l1.7,-3.14l-4.13,-9.63l-1.47,-2.4l-2.59,-1.74l-3.06,-1.12l-14.79,-1.07l-0.59,-1.22l0.14,-2.27l0.95,-2.62l0.24,-5.73l0.48,-1.63l4.43,-2.45l4.38,-3.72l1.31,-2.54l2.24,-3.28l1.14,-6.32l-2.0,-2.02l-4.69,-2.89l-2.17,-0.65l-2.77,-1.85l-1.28,-2.23l-0.82,-2.84l0.05,-2.3l0.63,-1.52l3.12,-4.66l0.35,-2.36l-0.04,-2.64l-3.39,-3.47l-6.51,-4.08Z", "name": "Beja"}, "tn-ba": {"path": "M555.79,232.61l2.34,0.88l2.91,0.49l4.38,-0.1l2.91,-0.65l2.08,-1.0l3.0,-3.29l0.67,-2.14l1.23,-1.68l2.37,0.23l2.18,1.08l3.24,0.01l4.53,-1.1l2.68,-0.31l1.69,-1.5l0.71,-1.53l0.4,-2.04l-0.28,-2.9l0.6,-0.27l0.4,0.4l0.68,-0.08l2.23,-1.76l0.6,-0.15l0.46,-0.48l-0.13,-0.37l1.17,0.24l0.06,0.9l1.11,1.02l-0.19,0.36l0.68,1.3l2.06,2.01l1.72,0.08l1.94,-1.47l0.37,-1.99l-0.43,-0.68l0.06,-4.01l-0.52,-0.63l-0.95,-0.44l-0.51,-1.59l1.28,-0.3l0.98,1.14l1.15,0.31l-0.63,0.75l1.2,0.71l1.51,-1.55l-0.12,-1.83l1.98,-0.15l1.09,0.61l-1.14,0.5l-1.32,1.87l-0.97,0.89l-0.41,-0.08l-0.46,0.63l0.49,1.29l-0.12,1.09l1.84,2.36l0.12,0.81l-0.37,0.43l0.18,1.61l0.71,0.63l0.4,-0.4l-0.18,-0.84l3.56,4.76l6.05,5.15l5.96,3.14l4.18,1.23l-1.41,6.39l-1.41,0.61l-1.46,1.32l-1.11,7.0l-1.95,5.62l-4.4,5.59l-0.83,1.48l0.44,1.79l0.35,0.28l4.7,0.46l1.52,1.23l0.21,2.04l-0.58,2.18l-3.53,7.21l-0.18,2.07l-2.48,5.12l-0.37,1.98l0.16,0.4l1.36,0.87l4.46,0.09l0.45,0.65l-1.14,1.14l-14.01,5.69l-1.96,1.02l-0.88,1.55l-1.89,0.57l-3.38,2.9l-3.61,1.08l-0.26,-1.98l2.86,-10.19l-0.47,-1.8l-1.79,-0.84l-1.85,0.2l-1.73,-0.4l-2.56,0.12l-3.07,-1.68l-2.02,-2.48l-2.54,-0.71l-2.03,-1.33l-0.89,-2.69l-1.62,-2.77l-3.88,-5.26l-1.97,-4.08l-6.94,-2.03l-12.67,-4.93l-7.32,0.78l-2.15,-1.11l-1.42,-2.22l-1.2,-4.27l-2.07,-4.2l1.48,-1.75l2.23,-1.7l2.43,-1.3l6.49,-7.08l0.84,-2.07l1.65,-2.13ZM596.34,213.83l0.02,0.02l-0.04,0.0l0.02,-0.02Z", "name": "Ben Arous"}, "tn-gf": {"path": "M133.61,830.47l0.8,-1.16l1.16,0.04l1.76,-0.46l0.33,-0.56l-0.32,-1.07l0.93,-1.91l1.16,-0.41l0.15,-0.9l0.96,0.06l0.76,-0.33l0.27,-0.74l-1.14,-2.07l0.32,-0.25l-0.34,-0.84l1.67,0.63l0.51,-0.38l-0.29,-2.36l1.23,0.07l2.14,0.86l2.62,-0.79l1.14,0.08l0.63,-0.79l1.08,0.33l1.97,-0.08l0.59,-0.35l0.23,-0.81l-0.36,-0.66l-1.25,-0.41l-2.03,-1.59l0.7,-0.18l0.29,-0.43l0.52,-3.27l1.76,-0.23l1.14,-1.1l0.8,0.08l0.23,-0.55l-0.3,-0.71l0.58,-0.3l1.22,0.58l2.89,-0.37l0.04,-0.71l-1.48,-1.94l-0.23,-2.14l1.2,-1.14l2.63,-1.19l1.11,-0.93l0.87,0.28l1.27,-0.8l0.12,-0.86l1.4,-1.69l0.05,-1.08l-0.43,-0.77l-0.49,-0.4l-1.24,-0.22l-0.58,0.5l-2.44,0.09l-3.5,-2.34l-1.01,-2.23l0.96,-2.59l4.66,-0.42l0.8,-0.69l1.96,-2.72l0.3,-1.17l3.34,-4.44l0.62,-2.25l0.79,-0.29l1.59,0.75l1.28,0.22l1.85,-1.04l-0.07,-1.16l-2.27,-0.37l-1.69,-1.35l-1.1,-1.46l17.14,7.42l7.58,4.37l5.03,0.14l3.6,2.33l8.72,6.88l3.87,3.69l4.13,2.58l6.13,1.85l4.98,-0.37l0.36,-0.29l0.82,-3.07l-1.64,-6.19l7.86,-3.15l13.91,-7.44l4.35,-2.86l3.52,-1.46l5.86,-1.25l5.77,-2.99l3.84,-3.9l5.5,-2.77l2.08,2.02l2.29,1.58l2.78,0.9l5.6,2.81l2.67,0.68l5.84,0.82l1.93,1.1l2.41,2.27l2.9,1.18l3.1,0.71l3.27,2.61l2.39,1.11l15.01,-4.09l5.13,-3.02l7.96,4.08l5.28,0.76l5.09,-1.1l2.81,1.81l3.79,0.41l3.1,2.24l5.13,-0.35l3.91,6.67l1.6,0.92l3.06,0.16l3.74,-3.22l1.51,-2.45l1.27,1.51l-0.0,3.15l-2.23,2.78l-2.14,1.59l-1.42,1.62l-1.25,2.25l0.86,3.09l1.65,2.49l0.53,2.05l-0.69,2.42l-0.23,7.43l0.41,2.4l1.27,1.99l2.4,1.71l2.18,0.02l1.92,-0.82l2.27,0.63l3.17,2.3l2.61,1.98l1.16,1.98l-0.11,3.11l1.55,1.81l5.44,-0.34l9.87,1.23l10.13,5.95l4.35,4.11l2.27,4.19l2.38,3.57l2.9,1.45l4.76,1.53l6.29,1.32l3.29,1.9l3.18,1.17l1.41,2.34l-1.0,3.28l-1.87,3.16l-1.01,4.68l-1.02,7.52l-2.34,6.23l0.79,2.41l1.78,1.45l-1.41,4.17l-2.32,4.94l-4.41,3.92l-4.88,2.33l-10.86,4.15l-6.85,0.63l-19.19,-3.68l-6.46,0.82l-4.36,2.19l-4.73,1.47l-4.53,3.42l-4.32,2.55l-4.08,1.08l-6.92,0.42l-4.36,0.74l-3.69,-0.1l-3.08,1.72l-2.7,1.07l-2.56,-0.72l-2.71,-1.62l-2.63,-0.99l-6.78,2.04l-5.01,2.02l-3.7,2.0l-2.35,2.58l-1.38,2.46l3.23,6.81l0.17,2.64l-1.33,2.87l-3.07,2.79l-5.95,0.5l-5.63,-0.64l-5.22,-1.24l-3.26,-1.72l-4.14,-3.38l-3.26,0.77l-2.94,2.6l-5.31,1.56l-7.89,-1.12l-6.49,-0.26l-9.93,0.77l-5.74,1.12l-4.49,1.07l-5.86,2.79l-0.52,1.4l-4.63,-1.82l-5.08,-1.25l-2.89,-1.14l-6.75,0.33l-5.52,-0.3l-8.27,1.2l-9.65,0.19l-10.23,-0.26l-8.04,2.23l-4.61,0.59l-2.42,-0.21l-0.3,-1.83l2.29,-5.07l0.2,-3.43l-2.87,-2.73l-2.4,-1.41l-0.81,-3.5l-1.66,-2.49l-3.63,-1.93l-10.87,-4.61l-5.77,-1.91l-9.43,-1.0l-3.25,-3.34l-2.1,-4.61l-2.5,-4.41l-6.93,-6.39l-11.74,-8.06l-5.12,-4.87l1.34,-3.97l2.96,-3.37l5.02,-7.72l1.26,-4.02l2.38,-0.83l3.95,-0.19l5.12,-1.42l3.85,-2.53l0.15,-0.48l-1.22,-2.94l-10.12,-5.98l-0.3,-2.38l1.11,-5.28l2.42,-3.16l2.07,-3.45l1.67,-4.43l-2.07,-3.64Z", "name": "Gafsa"}, "tn-ms": {"path": "M653.52,557.43l0.84,-1.3l2.94,-1.27l5.72,-3.87l1.88,-2.39l0.68,-3.27l-2.8,-4.92l0.21,-2.67l1.74,-1.99l3.09,-0.96l6.3,-0.37l2.84,-1.43l1.47,-2.52l0.32,-2.91l1.2,-2.85l5.43,-5.67l0.21,-2.71l-1.62,-3.15l-0.13,-4.72l0.65,-5.6l1.24,-2.72l-1.12,-3.02l4.39,-0.23l1.49,-2.59l0.61,-3.82l-0.6,-2.73l2.61,-2.87l5.13,4.71l2.46,0.99l6.33,4.24l1.41,0.38l1.9,0.23l2.77,-0.3l1.78,-0.76l1.63,-1.14l1.26,-0.08l1.72,-1.94l0.53,-0.1l0.95,0.6l0.6,-0.29l0.75,0.14l1.66,-0.76l0.81,-0.83l1.0,0.15l1.63,0.91l0.97,-0.15l1.8,0.3l0.58,-0.49l0.46,0.51l-0.52,0.94l1.97,1.46l0.04,0.7l-0.78,1.93l0.0,0.89l-0.55,0.38l-0.59,-0.23l-0.8,0.3l-0.46,0.55l0.06,0.58l-0.74,0.7l0.13,0.66l-1.12,2.89l-0.12,1.97l0.37,1.51l-1.23,1.67l1.3,1.73l-0.01,0.69l0.92,1.59l1.32,1.61l2.95,1.45l1.04,1.2l0.48,0.0l1.55,1.13l2.99,0.23l0.82,1.21l0.68,0.38l0.54,-0.15l0.93,1.13l1.09,-0.15l1.8,0.76l3.86,0.76l1.24,0.76l2.94,0.61l2.29,1.13l1.35,0.15l1.03,-0.68l0.23,0.89l0.71,0.63l4.58,0.53l1.14,2.12l1.96,0.85l0.93,1.19l0.98,0.68l1.89,-0.08l3.5,0.53l1.89,0.68l2.37,1.77l-0.77,0.93l-0.06,3.72l-0.31,1.06l-1.72,3.39l-0.8,2.83l-11.14,1.71l-0.36,0.43l1.35,2.62l-1.47,1.31l0.18,1.52l-0.3,0.34l-1.2,-0.3l-2.78,1.36l-2.14,-0.3l-1.5,1.15l-0.06,-1.36l-0.4,-0.4l-0.85,0.08l-0.97,-0.92l-0.06,-0.72l-0.4,-0.4l-0.8,-0.04l-3.87,2.28l-5.35,4.16l-7.33,4.54l-5.34,5.75l-2.95,2.72l-0.19,5.12l-1.31,1.09l-2.33,0.46l-3.3,0.2l-7.3,-1.67l-3.1,-3.05l-2.66,-4.49l-0.81,-3.13l-0.32,-0.29l-2.26,-0.41l-4.25,0.82l-2.84,0.15l-5.42,-0.84l-2.42,-0.7l-10.07,0.43l-3.07,-2.68l-2.8,-1.61l-4.92,1.07l-1.71,1.0l-0.99,1.97l-0.48,2.24l-0.82,1.67l-2.11,-0.34l-1.86,-1.34l-2.07,-0.45l-1.72,-1.64l-1.2,-2.2l-0.85,-2.82l-0.09,-2.03ZM729.78,500.25l-0.04,0.04l-0.04,-0.04l0.0,-0.0l0.07,0.0ZM730.77,489.62l0.07,-0.07l-0.06,0.3l0.0,-0.23l-0.01,-0.01ZM776.66,530.1l-0.03,-0.03l0.04,0.03l-0.01,0.0ZM773.24,488.32l-0.73,-0.9l1.11,-1.43l0.49,-1.19l1.13,-0.53l1.1,0.08l1.09,1.81l-1.21,1.25l-2.97,0.91ZM768.51,494.0l-0.06,-0.41l0.94,0.15l0.66,1.19l-0.58,-0.63l-0.95,-0.3ZM730.34,506.27l0.12,-0.14l0.12,0.37l-0.31,-0.0l0.06,-0.24Z", "name": "Monastir"}, "tn-to": {"path": "M0.85,1023.06l5.17,-9.76l-2.66,-11.0l-2.9,-7.94l5.01,-7.93l-1.24,-10.33l3.52,-10.85l-5.84,-6.8l-1.51,-3.59l0.33,-2.14l1.02,-0.89l3.04,-0.86l1.6,-0.14l1.25,-1.57l3.86,-0.8l1.76,-1.36l0.53,-1.3l-0.79,-0.93l-0.47,-0.01l-1.1,0.73l-0.15,-0.47l1.65,-1.45l0.51,0.1l1.36,-0.78l0.44,0.18l0.53,-0.27l0.45,-0.86l2.71,-1.08l1.16,-6.92l9.08,-14.97l16.68,7.74l0.4,-0.04l17.21,-12.26l0.14,-1.59l-0.56,-6.62l1.12,-2.56l0.11,-1.59l8.31,-26.46l-0.44,-1.69l0.33,-1.01l-0.18,-0.49l0.41,-1.84l0.65,-0.53l0.24,-1.17l-0.22,-0.62l-0.64,-0.13l-0.39,-1.81l0.39,-0.87l0.15,-2.69l1.44,0.17l1.85,-0.53l1.24,0.18l1.97,-1.45l0.74,-0.94l0.83,-0.23l2.42,0.56l0.9,-0.3l1.66,0.16l1.8,-1.11l1.26,-0.25l0.49,-0.59l0.03,-1.56l0.7,-1.08l1.42,-1.8l1.29,0.09l0.89,-0.42l0.33,-1.76l1.05,-0.38l3.08,0.33l5.57,-2.45l2.8,-0.28l2.19,-4.24l5.07,-5.25l6.41,-0.88l0.26,-1.86l0.83,-0.42l0.24,-0.61l0.69,-0.45l0.47,-1.72l0.7,0.34l1.62,0.03l1.26,0.62l1.39,-0.54l2.15,0.28l0.59,-1.95l0.69,-1.03l1.33,-1.05l2.32,3.55l-1.56,4.15l-2.04,3.4l-2.49,3.3l-1.16,5.51l0.33,2.74l10.35,6.28l0.9,2.32l-3.41,2.27l-5.02,1.39l-3.99,0.19l-2.63,0.92l-1.5,4.32l-4.97,7.64l-3.03,3.47l-0.92,2.26l-0.43,2.49l5.37,5.09l11.69,8.02l6.87,6.33l2.38,4.24l2.1,4.63l3.48,3.61l9.69,1.11l5.68,1.88l10.86,4.6l3.34,1.73l1.5,2.21l1.02,3.85l2.45,1.43l2.56,2.26l-0.14,3.01l-2.32,5.14l0.34,2.47l0.36,0.33l2.86,0.24l4.67,-0.6l7.96,-2.21l10.17,0.26l9.7,-0.19l8.31,-1.2l5.46,0.31l6.68,-0.32l2.72,1.11l5.05,1.24l4.67,1.85l-1.83,8.35l-3.97,9.37l-5.56,5.72l-4.83,6.93l-4.52,7.52l-3.46,4.15l-13.35,10.93l-8.65,5.88l-10.79,8.74l-17.4,15.85l-2.64,1.17l-15.49,13.61l-8.52,6.31l-6.84,4.46l-8.12,6.54l-8.62,6.24l-14.17,13.29l-26.47,21.42l-13.56,9.69l-12.44,4.71l-8.0,2.17l-2.42,-2.95l-0.59,-1.87l-23.34,-36.31l-7.09,-18.14l1.29,-11.15l-0.84,-3.92l-0.23,-3.41l-1.56,-9.49l-5.5,-7.27l-8.43,-4.57Z", "name": "Tozeur"}, "tn-kb": {"path": "M50.05,1122.84l7.76,-2.11l12.52,-4.75l13.69,-9.77l26.52,-21.47l14.14,-13.25l8.61,-6.23l8.13,-6.55l6.83,-4.44l8.55,-6.33l15.48,-13.6l2.66,-1.18l17.42,-15.87l10.77,-8.72l8.65,-5.87l13.4,-10.98l3.59,-4.3l4.53,-7.53l4.79,-6.87l5.63,-5.84l4.0,-9.45l2.33,-10.19l5.66,-2.69l10.03,-2.14l4.55,-0.53l5.28,-0.23l6.38,0.25l8.12,1.12l5.48,-1.61l3.08,-2.67l2.79,-0.61l3.67,3.19l3.52,1.85l5.34,1.26l5.69,0.65l6.21,-0.51l3.47,-3.04l1.54,-3.35l-0.21,-2.95l-3.19,-6.37l1.2,-2.15l2.16,-2.41l3.58,-1.94l4.94,-1.99l6.38,-2.0l2.4,0.9l2.82,1.67l3.0,0.76l2.91,-1.15l2.79,-1.63l3.7,0.1l4.34,-0.74l7.01,-0.44l4.17,-1.11l2.75,-1.61l2.75,3.67l2.96,2.41l7.72,8.22l2.86,2.32l1.83,2.28l0.75,1.91l-5.46,7.42l-2.91,1.68l-3.02,2.91l-3.92,2.66l-2.38,2.59l-1.56,2.59l-0.56,3.56l0.88,5.24l-1.05,13.95l-0.82,3.56l-0.25,5.65l0.11,4.83l1.41,8.15l1.84,3.69l3.82,5.65l2.78,5.62l3.38,2.99l4.09,8.25l2.57,5.58l0.44,6.26l2.18,6.97l1.29,1.76l4.46,1.35l2.67,2.44l0.46,0.02l1.83,-1.17l2.97,-0.02l3.35,0.63l5.65,6.03l0.35,4.65l0.66,3.62l3.36,2.06l3.71,-0.89l5.98,-0.25l1.91,1.55l1.7,3.93l2.34,3.58l3.08,1.2l4.65,2.55l-4.41,4.03l-3.93,4.93l-0.19,3.56l0.37,6.28l-0.78,1.51l-2.94,1.9l-1.47,2.18l0.01,0.47l6.0,7.05l1.5,3.48l8.22,5.62l3.12,1.73l3.11,2.72l3.91,12.02l5.28,7.08l3.5,6.97l8.58,7.95l10.56,10.91l5.22,3.99l2.86,0.5l3.33,3.85l3.75,1.03l3.13,1.53l7.6,-0.75l6.27,0.79l3.56,2.61l0.17,6.82l-0.4,22.87l-1.94,2.16l-2.28,1.23l-1.03,2.99l-0.65,3.43l1.24,1.48l1.85,1.27l2.48,5.81l6.24,2.05l2.91,2.04l5.99,3.36l2.19,3.11l-0.59,1.19l-9.22,0.14l-2.13,0.59l-1.72,2.07l0.25,3.44l-0.14,6.09l1.1,3.05l0.57,7.66l1.09,2.13l5.18,2.81l0.77,1.49l-1.88,4.06l-2.63,1.03l-2.44,1.57l-1.18,2.63l-1.85,2.01l-2.83,1.24l-1.58,2.06l0.58,3.8l1.26,2.76l-0.07,2.46l-2.85,5.73l-2.05,0.92l-1.65,1.66l-0.09,0.43l1.25,3.1l5.11,4.27l3.03,3.15l2.28,2.95l2.67,2.52l1.67,2.37l-0.66,2.22l-2.3,0.42l-2.21,-1.26l-2.45,-0.77l-7.54,-1.47l-2.91,-2.81l-1.62,-3.92l-1.91,-3.52l-5.71,-3.02l-3.13,-0.72l-3.58,-1.47l-4.96,-2.89l-2.93,-5.25l-2.38,-5.07l-0.42,-3.11l-1.9,-3.41l-3.03,-1.44l-6.01,1.37l-3.0,1.08l-6.64,-0.96l-2.66,1.91l-2.93,1.3l-3.65,1.23l-7.8,1.6l-16.56,10.73l-27.73,7.88l-21.32,5.34l-20.95,7.29l-55.16,0.91l-70.86,18.66l-53.18,14.74l-6.41,1.4l-6.97,-77.21l-16.71,-26.63l-17.3,-21.24l-1.46,-0.88l-10.21,-10.95l-0.34,-0.62l0.01,-2.12l0.61,-6.59l-0.13,-3.96l-7.22,-3.85l-5.88,-2.72l-1.49,-0.33l-0.86,-0.92l-1.27,-0.3l-12.52,-6.11l-5.08,-2.11l-2.48,-1.21l-1.1,-0.88l-1.08,-0.18l-7.91,-3.81l-3.74,-0.61l-11.52,-0.69l-0.87,0.23l-6.55,-16.33l-3.33,-9.46l-4.07,-21.09l-0.96,-3.6l-2.28,-13.0Z", "name": "Kebili"}, "tn-ta": {"path": "M341.01,1475.73l-1.11,-0.12l-58.51,-38.82l-64.13,-45.95l-33.83,-23.72l-0.57,-6.3l6.54,-1.43l53.18,-14.75l70.81,-18.64l55.2,-0.92l20.96,-7.3l21.31,-5.34l27.8,-7.9l16.64,-10.77l7.66,-1.54l3.71,-1.24l3.02,-1.34l2.36,-1.81l6.75,0.94l3.01,-1.09l5.88,-1.33l2.49,1.28l1.63,3.07l0.41,3.09l2.42,5.17l3.14,5.51l5.13,2.99l3.64,1.49l3.05,0.68l5.61,2.98l3.28,7.15l3.15,3.08l7.79,1.57l2.32,0.72l2.29,1.31l2.95,-0.45l0.31,-0.28l0.73,-2.99l-1.86,-2.62l-2.68,-2.53l-2.26,-2.93l-3.06,-3.18l-5.08,-4.25l-1.01,-2.6l1.41,-1.42l2.17,-1.04l2.98,-5.98l0.11,-2.79l-1.29,-2.89l-0.61,-3.27l1.26,-1.71l2.94,-1.32l1.96,-2.12l1.09,-2.52l2.23,-1.45l2.94,-1.26l2.05,-4.43l-1.07,-2.25l-5.21,-2.83l-0.82,-1.76l-0.53,-7.54l-1.09,-2.96l0.14,-6.02l-0.32,-3.08l1.33,-1.71l1.83,-0.52l9.4,-0.14l0.37,-0.22l0.79,-1.98l-2.58,-3.6l-5.98,-3.35l-3.01,-2.09l-5.93,-1.84l-2.41,-5.68l-2.97,-2.41l0.61,-3.19l0.95,-2.75l2.12,-1.06l1.97,-2.19l10.23,0.67l5.95,-1.54l8.2,-1.39l4.92,-1.17l5.21,-2.09l1.96,-2.48l0.46,-3.73l1.82,-3.39l2.38,-3.08l2.66,-1.3l3.87,-0.85l4.14,-0.05l3.88,1.81l9.08,2.03l5.21,-1.76l4.41,-3.99l4.52,-6.65l2.88,-1.84l6.93,-0.27l3.74,-1.56l3.28,-0.89l10.29,-1.84l14.92,-9.83l7.76,-3.9l4.84,0.0l7.74,2.76l2.93,2.22l2.93,0.82l7.11,-1.98l2.77,-1.88l2.57,-1.09l0.4,2.06l-2.39,1.92l-1.4,2.71l-0.73,2.93l-1.25,1.53l-4.25,2.33l-0.02,0.69l15.28,9.37l0.54,-0.12l1.16,-1.73l9.05,3.71l60.41,28.92l0.89,5.43l1.41,5.41l2.3,4.53l2.88,4.31l5.61,4.83l4.15,1.97l7.84,7.92l2.23,2.53l1.0,2.05l-1.38,2.99l-3.75,3.55l-2.02,3.34l-1.62,4.13l-0.31,9.18l-0.45,2.6l1.38,8.01l-0.96,4.52l0.17,10.47l-1.16,2.3l-1.72,2.44l-0.36,4.68l24.88,19.46l23.11,19.35l14.16,10.84l10.72,-2.18l2.02,5.03l-37.6,22.73l-15.14,30.11l-4.0,10.36l-1.5,1.18l-8.24,2.86l-2.77,2.13l-3.22,0.27l-3.89,2.43l-1.62,1.77l-3.34,2.67l-3.92,1.56l-4.58,1.02l-3.1,1.45l-11.47,7.97l-3.49,3.41l-12.5,8.57l-1.08,5.39l-0.79,1.97l-2.73,5.37l-9.42,16.04l-5.85,1.16l-3.85,1.63l-1.95,1.64l-2.32,0.92l-2.71,0.3l-3.96,-1.33l-4.27,-0.41l-2.42,-0.69l-2.13,0.85l-1.59,1.96l-2.77,1.23l-0.76,1.48l0.33,5.75l-0.69,1.57l-2.05,1.84l-0.73,1.92l0.19,1.85l4.02,6.57l0.07,2.3l-1.54,3.14l-0.41,1.65l-4.21,4.35l-4.3,3.6l-1.09,0.44l-2.18,2.3l-1.86,3.33l-2.58,9.96l-2.12,2.85l-0.98,0.48l-1.26,1.41l-2.57,1.81l-8.27,2.95l-7.34,1.94l-3.79,0.26l-10.51,-3.43l-1.99,0.03l-2.48,0.62l-2.13,1.02l-11.49,7.48l-4.86,4.06l-0.56,1.48l-1.02,1.22l-1.14,3.35l-5.52,8.22l-0.17,1.05l-2.8,5.11l-3.78,5.25l-0.39,1.31l-2.45,3.51l-1.85,1.83l-0.48,1.65l-2.43,3.11l-0.98,0.31l-3.09,4.31l-0.55,1.6l-3.13,4.2l-0.99,0.67l-2.04,2.99l-0.76,2.19l0.0,5.94l1.53,3.49l0.48,2.81l-0.36,4.2l0.59,4.1l1.41,4.68l0.82,0.93l8.2,20.92l3.03,8.98l0.67,1.04l1.21,4.79l0.75,1.04l2.55,7.21l2.32,4.38l4.39,16.92l2.01,3.22l3.03,6.24l0.6,3.46l-2.66,9.47l-0.08,5.04l1.05,5.14l0.56,0.85l0.95,4.08l0.29,5.82l2.02,9.27l2.31,5.19l-0.28,1.07l-2.42,2.7l-0.27,2.0l0.52,1.88l-2.08,5.87l-0.68,3.77l-1.35,4.27l-6.91,13.44l-4.54,10.37l-2.78,4.78l-2.97,2.42l-1.09,0.4l-2.91,2.15l-1.58,1.91l-4.92,9.28l-8.37,10.61l-3.18,5.95l-4.26,5.02l-0.93,1.54l-4.64,4.24l-7.92,9.86l-2.89,7.82l-6.51,10.54l-1.44,1.48l-1.98,1.3l-3.26,7.59l-6.46,4.76l-6.35,6.53l-1.29,0.43l-2.63,-0.2l-9.96,1.08l-6.14,2.44l-1.28,1.1l-3.87,1.78l-6.73,1.84l-6.49,4.37l-1.84,1.72l-6.9,2.62l-5.94,3.33l-7.26,4.84l-5.32,2.04l-7.21,1.28l-34.88,-157.68l-7.9,-36.95l-0.73,-1.16l-28.19,-129.54l-14.48,-63.67l-8.86,-41.11l-6.22,-24.9l-1.26,-2.38l-4.8,-20.66l-0.44,-0.11Z", "name": "Tataouine"}, "tn-kf": {"path": "M161.61,454.97l1.41,-1.77l-0.23,-1.86l0.36,-1.08l0.03,-2.34l1.1,-1.19l0.26,-0.75l1.18,-0.32l0.35,-0.63l0.77,0.17l0.81,-0.88l0.89,0.02l0.49,-0.49l-0.21,-0.8l0.38,-0.43l0.61,-8.37l1.0,-6.98l-1.01,-5.88l0.55,-2.05l0.79,-0.65l1.39,-2.19l1.08,-2.45l0.1,-2.62l1.48,-2.13l0.6,-2.1l4.67,-4.02l-0.43,-3.22l-0.87,-2.01l0.42,-2.43l-0.6,-2.6l-0.9,-1.02l-1.65,-1.08l-0.56,-1.07l-1.11,-0.9l-0.51,-1.46l-0.91,-0.39l-0.62,-3.62l1.11,-1.45l2.72,-1.83l1.21,-1.72l1.91,-6.31l1.38,-1.23l0.14,-1.43l1.54,-2.04l-0.28,-1.8l0.22,-4.06l-1.25,-2.41l-2.15,-0.81l1.52,-2.19l0.42,-1.43l1.58,-1.96l0.68,-0.26l2.12,-2.06l0.83,-0.36l2.26,-0.07l0.43,-1.57l1.39,-0.39l0.25,-0.59l-0.79,-1.29l-1.66,-1.07l-0.91,-2.23l-0.1,-2.04l1.01,-2.7l-0.8,-3.75l3.46,-3.37l13.04,1.42l7.4,-5.77l3.39,-0.93l4.71,-0.7l4.94,-4.78l2.04,-1.26l5.1,0.09l2.94,0.69l3.12,-0.11l3.1,-1.14l9.2,-4.42l3.46,0.68l4.7,1.47l3.72,1.87l2.72,0.41l3.88,-0.34l3.85,-1.15l3.57,-0.24l9.69,-2.09l3.02,0.04l3.6,-1.49l5.65,0.03l2.55,-0.76l2.92,-1.61l4.95,-5.76l1.54,5.28l2.25,4.39l5.51,6.23l0.85,3.42l1.72,3.66l0.47,2.3l-0.83,2.27l-5.75,6.2l-0.01,3.32l1.72,3.56l4.24,6.79l1.09,2.12l1.06,3.16l1.48,2.33l2.34,1.38l6.06,2.38l1.68,2.28l-0.62,3.06l1.06,3.61l-0.18,2.42l-1.78,2.54l-1.39,2.67l1.19,2.82l2.33,9.08l0.37,0.27l3.17,0.07l2.31,0.65l1.02,1.2l1.14,2.94l0.81,1.16l2.96,0.01l2.03,-0.33l1.34,3.49l7.7,2.6l-0.67,5.51l-0.13,4.58l0.8,6.57l1.31,5.46l-0.23,1.6l-2.48,2.42l-3.81,1.9l-6.49,6.2l-1.11,3.04l0.64,6.1l-0.09,2.99l-0.88,2.86l-3.26,2.26l-3.34,0.49l-2.95,1.65l-3.53,3.8l-1.63,5.9l0.33,0.51l2.66,0.38l-0.5,1.72l-2.94,2.63l-0.12,0.4l1.27,4.65l0.49,5.32l-0.66,4.07l-4.21,6.57l1.43,3.51l3.5,5.61l0.05,3.17l0.63,3.03l-0.24,2.44l-1.92,-0.29l-3.87,-2.43l-4.2,-1.83l-11.74,-2.24l-9.82,-2.8l-4.1,-1.85l-4.69,-3.17l-4.89,-2.82l-6.03,-5.41l-3.03,-1.73l-4.1,0.55l-5.39,2.3l-3.27,-1.12l-5.4,-2.82l-5.34,0.53l-2.36,4.05l-1.82,2.3l-4.75,2.27l-4.43,3.98l0.57,3.72l-0.52,3.69l1.2,5.47l-0.54,3.65l-2.88,2.59l-4.25,4.83l-2.73,-0.13l-2.95,1.92l-5.65,-6.49l-4.0,-2.52l-3.47,0.34l-6.19,1.3l-9.33,0.27l-3.24,2.28l-3.69,3.8l-2.49,2.89l-1.53,3.07l-0.97,0.25l-2.94,-0.07l0.27,-2.55l-0.2,-1.11l-0.68,-1.08l0.4,-1.31l-0.55,-3.54l-0.52,-1.0l-3.36,-2.04l-0.82,-0.93l-1.19,-0.28l-2.6,0.09l-1.35,-1.8l-0.49,-0.26l-0.55,0.15l-1.12,-2.58l-4.71,-5.76l-3.18,-1.9l0.36,-2.11l-1.02,-1.97l-0.7,-4.73l0.25,-1.73l1.12,-2.4l0.28,-2.29l-0.33,-0.7l0.12,-1.78l0.32,-1.37l0.58,-0.91l0.1,-2.71l0.56,-0.54l0.09,-1.05l-1.24,-13.82l0.48,-0.77l-0.2,-0.54l0.35,-1.67l1.05,-0.9l0.39,-1.58l-0.34,-0.58l-2.78,0.07l0.24,-0.61l0.96,-0.82l0.56,-1.56l-0.5,-0.54l-2.65,-0.89l-0.02,-0.74Z", "name": "Le Kef"}, "tn-me": {"path": "M647.37,1061.54l1.7,0.74l0.8,-0.15l0.43,0.44l1.51,0.3l0.45,0.44l-0.33,0.34l0.31,0.78l-1.48,0.22l-1.32,-0.44l-0.83,0.77l-0.06,2.37l-0.58,0.92l-0.37,-0.07l-0.46,0.55l0.89,0.62l1.19,-0.98l0.65,0.1l0.65,-0.55l0.31,-0.81l0.74,-0.59l-0.45,-0.78l1.28,0.3l-0.84,0.85l0.23,0.71l-0.78,0.62l0.65,0.62l0.8,-0.37l1.17,1.55l0.46,-0.47l-0.26,-0.6l0.38,-0.55l1.26,-0.3l0.46,-0.47l-0.93,-0.84l0.18,-0.76l0.36,0.29l0.92,0.0l1.23,-0.29l0.55,-0.52l0.86,0.15l0.7,-0.52l1.14,0.44l0.79,-0.7l0.25,0.25l0.39,-0.26l1.89,0.12l0.86,-0.29l0.46,-0.47l-0.26,-0.33l0.36,-0.23l0.86,0.0l0.36,0.3l1.27,-0.63l0.33,0.33l0.68,-0.29l0.22,0.23l-0.77,0.15l-0.46,0.47l0.71,0.62l1.72,-0.52l1.29,-1.03l-1.14,2.48l-0.12,2.58l0.46,0.47l0.44,-0.22l0.42,0.29l1.03,-0.15l1.55,1.03l0.68,-0.37l1.17,0.37l1.63,-1.43l-0.06,-0.74l-0.77,-0.55l-0.93,1.18l-0.54,-0.59l-0.71,0.55l-0.53,-0.55l-0.48,0.07l-1.56,-0.81l-0.38,-1.09l1.06,-2.56l0.63,0.09l2.16,-1.03l2.94,-0.3l0.83,-0.77l0.0,-0.34l0.95,-0.44l0.75,-0.96l1.42,-0.37l0.72,0.3l1.04,-0.3l0.55,-0.59l0.8,0.07l3.56,-0.81l1.41,-0.81l2.98,-2.95l2.98,-2.22l2.33,-0.59l1.07,-1.11l0.97,-0.44l2.32,0.0l2.02,-0.44l2.43,1.4l0.93,1.04l1.84,5.12l-1.04,3.04l-0.55,3.48l-1.23,1.46l-0.37,1.18l0.31,4.94l0.98,3.23l-0.12,2.31l-0.43,1.17l-0.89,0.26l-0.95,1.15l-0.8,4.53l-1.44,0.0l-1.81,2.07l-2.43,1.4l-2.12,2.17l-0.86,1.77l-0.43,4.05l0.89,1.06l0.79,-0.29l1.34,0.66l1.16,0.91l0.74,1.18l0.12,2.31l-0.92,2.65l-0.55,0.58l0.31,1.99l1.63,0.99l0.37,0.0l0.63,-0.66l0.85,0.29l2.32,-0.07l1.22,0.37l2.08,1.81l0.95,1.8l0.97,0.15l0.75,0.59l3.45,-0.29l3.67,0.15l1.61,-2.06l1.03,0.07l1.54,-0.44l0.95,-1.06l0.76,-1.88l3.95,-0.29l3.75,-1.33l1.87,-2.36l3.11,-0.44l4.07,-1.7l2.88,-0.52l3.61,-1.16l0.32,0.2l1.14,-0.78l0.52,0.34l0.61,-0.44l0.62,0.8l0.95,-0.69l0.31,-0.66l-1.29,-0.97l1.05,-1.09l0.18,-0.97l1.78,-1.98l0.28,-0.93l0.83,-0.84l-0.06,-1.33l0.86,-1.03l0.25,-1.25l-0.31,-0.96l-0.98,-1.02l-0.92,-2.45l-0.98,-0.8l-0.98,-1.66l-0.55,-1.75l-1.01,-0.84l-1.41,-0.15l-0.89,-0.59l0.06,-1.96l1.52,-1.37l1.22,0.0l1.17,-1.11l1.07,-0.37l1.33,0.22l0.95,-0.92l0.18,-0.81l1.97,0.33l0.83,0.67l0.98,0.0l1.41,1.18l3.07,-0.22l0.44,-0.42l1.09,-0.17l1.01,-1.21l-0.18,-2.07l-0.65,-0.47l-0.58,0.74l-0.37,-0.1l0.06,-0.59l0.41,-0.28l1.46,0.59l2.0,-0.14l0.12,0.77l1.69,1.58l4.36,1.62l1.6,-0.15l1.2,-0.52l2.39,3.29l1.29,0.96l-0.37,0.37l0.25,0.89l1.2,1.51l1.26,0.77l2.46,3.04l0.49,1.33l3.99,5.52l0.74,2.14l0.49,3.04l0.55,0.65l-0.43,1.05l0.47,0.96l-0.29,0.29l0.06,1.25l0.68,1.76l-0.18,0.75l0.43,0.73l-0.43,1.26l0.25,0.65l-0.25,0.97l0.49,0.6l-0.85,0.81l-0.74,1.33l1.82,1.96l-2.93,2.39l-0.8,2.81l-2.15,4.33l-0.12,4.12l2.89,5.01l-0.25,2.36l0.77,0.4l0.95,-1.06l3.04,2.98l2.15,1.69l0.28,-0.15l0.06,0.48l-2.38,2.63l-1.56,1.14l-1.21,1.66l-2.19,0.3l-1.55,-1.03l-1.38,1.14l0.0,0.66l0.52,0.4l0.86,-0.69l0.18,0.18l-0.64,0.55l0.74,0.49l-0.06,0.39l0.4,0.4l0.54,-0.22l0.69,0.44l1.11,0.15l0.81,-0.59l0.66,0.15l0.43,-0.3l2.06,-1.94l0.18,-0.7l1.46,-0.67l3.17,1.85l3.85,4.12l1.23,1.66l0.06,2.57l0.77,0.92l2.41,0.66l0.79,0.51l0.49,-0.07l0.74,0.88l0.46,-0.15l3.17,1.47l1.59,0.37l4.46,2.13l5.94,4.12l3.19,1.55l-1.97,-0.44l-0.92,-0.73l-1.89,-0.29l-4.87,-2.28l-4.04,-1.03l-9.17,-3.9l-1.68,0.0l-2.49,-1.03l-2.03,-0.15l-0.86,0.15l-1.44,1.47l-1.33,-0.44l-1.04,0.15l-0.71,0.77l-0.49,1.32l-0.31,3.34l-0.32,0.28l-0.38,-0.34l-0.98,-0.07l-0.4,0.4l1.23,4.48l0.71,0.55l1.22,-0.75l1.46,2.48l1.57,1.8l2.99,1.4l1.53,1.76l-0.12,1.44l1.47,2.34l-0.18,4.13l2.27,4.11l2.67,1.21l1.97,-0.44l0.88,-0.88l2.19,-0.22l0.41,-0.38l5.43,1.48l6.07,-0.73l5.29,1.76l0.75,0.59l4.06,0.89l2.89,1.24l4.6,0.88l2.59,1.03l1.83,0.29l0.53,0.29l-0.06,0.55l0.52,0.55l0.62,-0.15l1.47,1.32l0.89,-1.13l1.04,-0.66l0.96,-2.84l0.73,0.67l1.26,0.26l1.85,1.5l1.01,1.32l0.68,0.07l0.6,-0.42l0.32,0.2l0.3,-0.3l1.94,-0.36l1.26,1.69l0.96,0.37l1.13,1.17l0.95,0.0l0.83,0.66l1.35,-0.22l1.69,-1.72l0.22,0.85l-0.65,0.55l0.4,0.77l0.48,-0.29l0.87,0.22l0.59,-0.59l1.07,0.73l1.35,0.15l1.57,-1.13l-0.46,-0.55l-0.52,0.1l-0.89,-0.77l-0.58,0.15l-0.01,-1.14l-0.4,-0.4l-0.58,0.36l0.06,-0.77l-1.32,-1.14l-2.64,-0.81l-1.32,1.32l-0.43,-0.07l0.37,-1.88l-0.12,-1.03l-0.58,-0.77l-1.41,-0.66l-4.49,-3.31l-1.03,-0.15l-1.18,-0.81l-1.04,-1.18l-6.13,-4.41l-2.95,-2.57l-1.61,-1.76l-2.06,-1.7l0.09,0.0l2.38,1.62l3.22,2.87l1.46,0.74l5.48,4.78l2.08,1.03l4.87,3.38l3.65,1.69l3.97,2.5l2.7,1.32l1.28,0.07l1.79,1.25l4.98,1.69l2.09,0.51l1.09,-0.07l1.3,0.66l2.41,-0.66l1.62,0.18l-0.89,2.44l0.31,2.18l-2.35,8.68l-4.15,7.48l-0.74,3.22l-0.66,5.34l-0.53,10.6l-0.49,1.95l1.56,1.53l0.29,2.87l-2.83,3.39l-2.94,12.22l-3.16,9.92l1.52,4.19l2.51,9.0l-1.46,4.44l-1.14,5.47l-1.55,10.37l1.95,8.81l0.2,3.61l-0.95,8.19l-1.21,5.32l0.29,3.03l1.04,3.5l3.05,7.82l2.64,2.75l2.51,1.17l2.36,2.06l4.99,6.87l2.75,2.29l2.77,4.16l1.78,4.15l-15.57,31.4l-13.16,9.77l-0.92,1.18l-2.84,1.17l-5.63,0.62l-7.19,5.2l-5.71,3.04l-2.38,0.87l-4.43,0.93l-4.54,1.88l-24.51,8.26l-11.81,5.25l3.49,-9.04l15.08,-29.99l37.64,-22.68l0.16,-0.49l-2.28,-5.66l-0.46,-0.24l-10.54,2.28l-14.01,-10.73l-23.11,-19.34l-24.71,-19.32l0.47,-3.99l1.64,-2.25l1.26,-2.59l-0.17,-10.55l0.96,-4.61l-1.38,-8.01l0.45,-2.51l0.31,-9.09l1.55,-3.92l1.94,-3.21l3.79,-3.6l1.5,-3.24l-1.11,-2.62l-10.24,-10.67l-4.18,-2.0l-5.46,-4.69l-2.81,-4.2l-2.24,-4.39l-2.54,-11.23l-60.62,-29.02l-9.34,-3.85l-0.51,0.14l-1.14,1.7l-14.37,-8.81l3.72,-2.03l1.47,-1.75l0.79,-3.04l1.33,-2.59l2.41,-1.89l-0.39,-3.17l-0.55,-0.29l-3.06,1.3l-2.72,1.85l-6.71,1.92l-2.61,-0.7l-3.0,-2.26l-7.9,-2.82l-5.29,0.02l-7.92,3.98l-14.74,9.74l-10.25,1.83l-3.38,0.92l-3.58,1.52l-7.14,0.32l-3.17,2.06l-4.55,6.68l-4.12,3.75l-4.8,1.68l-8.94,-2.0l-4.0,-1.84l-4.27,0.06l-4.12,0.91l-2.92,1.48l-2.46,3.18l-1.91,3.55l-0.42,3.64l-1.65,2.17l-5.03,2.02l-4.85,1.15l-8.23,1.4l-5.9,1.53l-9.86,-0.67l0.4,-22.65l-0.34,-7.35l-3.96,-2.85l-6.49,-0.82l-7.6,0.75l-2.9,-1.48l-3.67,-1.0l-3.14,-3.74l-2.99,-0.58l-5.09,-3.9l-4.76,-5.17l-6.46,-6.34l1.6,0.05l3.19,1.71l4.79,1.61l4.94,0.72l3.88,-0.41l6.21,-2.54l6.35,-0.72l2.3,1.19l4.14,-0.48l4.46,-1.09l2.96,1.13l4.32,0.07l3.88,-1.13l2.67,-1.89l2.29,-2.63l1.86,0.09l2.66,1.74l3.16,0.73l2.75,-2.79l5.69,-0.85l3.81,-1.63l3.31,-2.74l4.52,-2.88l0.35,-4.26l-0.43,-2.73l2.03,-1.65l3.39,-0.61l3.51,-1.83l2.31,-3.98l0.21,-2.74l7.09,-4.11l3.99,-1.65l3.94,0.04l4.73,0.86l4.87,-0.01l4.26,-3.62l1.3,-2.87l1.05,-3.9l5.28,-5.66l2.39,-3.51l1.58,-3.05l4.77,-6.78l0.94,-4.39l3.92,-6.9l2.19,-3.3l3.02,-3.72l2.15,-4.58l2.13,-2.98l5.11,-2.49l3.38,-2.67ZM649.72,1065.39l-0.01,-0.01l0.04,0.0l-0.01,0.01l-0.01,0.0ZM749.07,1056.14l-0.69,-0.2l-1.4,1.26l-0.44,-0.3l-1.23,0.15l-1.87,2.34l-0.56,1.76l-0.18,5.86l-0.37,1.08l-0.77,-0.62l-1.44,-0.19l-0.49,-2.73l-0.55,-1.32l0.74,-1.12l0.06,-2.38l1.17,-1.32l0.37,-1.33l-0.37,-3.4l-2.7,-2.84l-0.31,-0.92l-4.12,-4.72l-0.86,-1.42l-2.98,-3.13l-1.17,-0.22l-2.46,0.59l-1.92,1.85l-1.22,0.15l-1.84,1.4l-1.01,1.21l-0.31,0.89l0.0,3.66l-1.01,-0.67l-3.93,1.18l-1.81,-3.44l-2.52,-2.17l-0.12,-0.78l-0.9,-1.14l0.17,-0.86l-0.8,-3.03l-1.12,-1.98l0.14,-1.94l-0.59,-1.22l0.47,-0.7l-0.23,-0.55l0.72,-1.61l0.46,-0.03l0.46,-0.92l0.46,0.25l0.77,-0.84l-0.13,-1.0l1.54,-2.63l0.37,-1.63l-0.18,-2.97l0.25,-0.95l-0.43,-1.84l0.37,-0.38l-0.3,-0.39l0.23,-1.6l-0.31,-0.62l0.43,-1.9l-0.43,-1.48l-0.74,-1.17l0.06,-0.83l-0.43,-0.83l0.25,-0.7l0.71,0.15l0.58,-0.47l0.31,-0.89l-1.35,-1.17l0.18,-3.04l-0.66,-0.47l0.47,-1.94l1.57,-0.65l3.87,-0.83l0.46,-0.37l1.02,0.15l3.5,-0.74l0.65,-0.77l0.71,0.62l0.61,-0.38l0.37,0.3l0.73,-0.3l0.69,0.37l0.67,-0.07l1.6,0.81l0.79,-0.3l2.88,1.04l1.56,1.04l1.03,0.11l1.31,0.86l0.44,-0.38l1.41,1.34l2.58,1.26l0.92,0.0l0.89,-0.54l2.25,1.36l2.32,-0.07l1.98,0.37l3.27,-0.52l0.85,0.15l1.26,-1.21l0.18,-1.48l-1.29,-2.56l0.23,-0.2l3.15,2.68l0.25,0.68l2.18,2.4l2.21,1.78l3.59,2.07l1.23,2.19l3.96,3.95l2.58,1.55l1.41,0.44l0.75,-0.44l1.22,0.07l1.04,-0.74l0.43,0.59l1.33,0.44l1.35,1.01l0.06,4.96l0.92,3.15l-0.41,0.38l-0.57,-0.83l0.18,-0.33l-0.49,-2.66l-0.46,-0.47l-0.58,0.4l-0.06,0.89l0.18,1.92l1.84,2.44l0.06,0.81l0.38,0.39l-0.44,0.94l-0.83,-0.62l-1.54,0.22l-1.61,1.48l-1.89,1.03l-2.35,3.03l-2.45,0.22l-2.06,1.5l-2.94,4.88l-0.49,1.63l-0.18,3.62l-0.46,-0.4l-0.58,0.62l-1.04,7.83l-1.35,-2.5l0.68,-1.34l0.06,-1.93l0.37,-0.65l-0.74,-2.35l0.18,-2.3l-0.58,-0.84l-0.55,0.0l-0.81,0.74l-1.22,-0.07l-1.26,1.51l-1.17,2.81l-0.37,2.3l-1.11,2.03l-1.07,0.15l-0.74,0.52l-2.93,3.01ZM763.77,1048.35l0.0,0.6l0.12,0.59l-0.43,-0.58l0.31,-0.62ZM763.9,1049.92l0.0,0.08l-0.06,0.06l0.0,-0.08l0.06,-0.06ZM763.74,1047.59l0.04,-0.05l0.06,-0.06l0.0,0.09l-0.1,0.02ZM761.48,1055.5l-0.02,0.0l0.1,-0.12l0.0,0.04l-0.08,0.08ZM761.62,1055.31l0.0,0.01l-0.06,0.06l0.0,-0.01l0.06,-0.06ZM831.61,1162.48l-0.08,-0.08l0.12,0.08l-0.03,0.0ZM831.46,1162.33l-0.05,0.0l-0.38,-0.38l0.3,0.29l0.12,0.08ZM830.87,1161.89l-0.15,-0.15l-0.05,-0.01l0.08,0.0l0.2,0.15l-0.1,0.0ZM844.73,1168.72l-0.05,-0.0l-0.01,-0.01l0.05,0.0l0.01,0.01ZM840.49,1166.59l-0.37,-0.22l-0.17,0.0l-0.13,-0.08l0.35,0.07l0.32,0.23ZM839.73,1166.22l0.02,0.0l0.01,0.01l-0.02,0.0l-0.01,-0.01ZM840.98,1166.81l0.01,0.01l-0.04,-0.01l0.03,0.0ZM841.05,1166.88l1.09,0.29l1.73,1.04l-2.66,-1.18l-0.16,-0.16ZM843.94,1168.28l0.17,0.0l0.13,0.08l-0.22,0.0l-0.08,-0.08ZM844.54,1168.65l-0.23,-0.23l0.3,0.23l-0.07,0.0ZM870.95,1191.32l-0.12,-0.12l0.06,0.0l0.06,0.12ZM863.61,1189.36l0.06,0.0l0.46,-0.44l-0.23,0.45l-0.29,-0.01ZM763.94,1066.35l0.5,-0.6l0.8,0.56l-0.55,0.48l-0.76,-0.44ZM764.02,1062.94l0.06,0.57l-0.25,0.36l-0.49,-1.12l0.18,-0.28l0.49,0.47ZM763.53,1062.47l0.0,-0.01l0.06,-0.06l0.0,0.01l-0.06,0.06ZM761.99,1059.16l-0.25,-0.48l0.03,-0.38l0.58,0.25l0.0,0.52l-0.37,0.09ZM737.29,1077.98l-0.37,-0.39l1.01,-0.75l1.26,0.65l0.06,1.53l-0.49,1.24l-1.29,-1.55l-0.18,-0.73ZM716.64,1052.66l-0.17,-0.28l2.01,0.3l-0.37,0.63l0.28,0.48l-0.16,0.36l-0.95,-0.87l-0.64,-0.15l0.0,-0.47ZM703.24,1042.15l0.95,-1.06l1.05,-0.08l0.4,-0.4l0.0,-0.52l0.1,1.07l-0.47,0.92l0.37,2.41l-1.04,-0.74l-1.35,-1.61ZM705.64,1040.0l0.0,0.01l-0.04,-0.04l0.01,-0.01l0.03,0.03ZM653.53,1067.21l-0.12,-0.9l0.18,-0.07l0.18,0.38l-0.24,0.59Z", "name": "Medenine"}, "tn-ks": {"path": "M167.23,763.61l0.3,-5.31l0.63,-2.12l-0.1,-1.38l-1.15,-1.68l0.39,-1.74l-0.39,-2.44l-0.63,-2.32l-0.91,-1.0l0.6,-1.01l-1.08,-1.95l0.18,-3.08l-2.46,-3.38l-0.27,-1.94l0.45,-1.67l-0.14,-1.18l-1.06,-3.09l-0.06,-1.1l-0.96,-1.01l0.07,-1.0l-0.89,-1.03l1.67,-1.77l2.02,-1.17l1.14,-0.01l1.39,-1.68l1.09,-0.48l0.78,-1.02l1.57,-0.25l1.04,-0.54l0.45,-0.75l1.13,0.62l0.81,-0.33l1.32,0.22l0.48,-0.3l0.57,-14.31l-0.49,-2.32l6.07,-16.35l-0.1,-0.62l1.27,-1.77l0.78,-2.75l0.71,-0.64l0.37,-2.07l0.78,-1.01l3.4,-1.99l1.83,-1.85l1.2,-0.67l2.71,-2.77l3.17,-6.11l1.39,-7.26l0.87,-0.77l1.27,-2.46l3.5,-5.0l1.3,-2.83l5.2,-5.49l-0.05,-0.54l-0.54,-0.36l-2.64,0.93l-0.67,-0.25l-4.02,0.34l-2.14,-0.68l-2.01,-1.57l-2.2,-0.39l-1.56,0.29l-0.11,-0.72l-1.8,-0.64l-1.62,-1.99l-3.33,-2.4l-2.77,-1.01l-1.14,-1.33l-2.08,-0.67l-3.44,-0.39l-1.87,-2.62l0.02,-1.87l-0.61,-1.66l-1.98,-2.54l0.01,-2.95l0.84,0.05l0.42,-0.45l-0.13,-2.17l0.34,-2.6l-0.81,-4.28l0.31,-2.31l-0.47,-2.45l2.62,-5.29l0.66,-2.68l-0.61,-2.0l-1.94,-0.28l2.24,-1.56l1.97,-5.82l2.55,-2.84l0.75,-1.56l-0.11,-0.63l0.66,-0.48l1.84,-0.3l1.77,-0.83l2.49,0.2l0.56,-0.69l0.47,-4.77l-2.93,-2.92l-2.89,-7.68l0.75,-3.26l-0.04,-3.05l-1.95,-8.54l-0.19,-6.28l-0.58,-2.5l1.37,-2.58l0.31,-3.17l3.0,0.07l1.31,-0.33l1.79,-3.31l2.45,-2.85l3.64,-3.74l2.84,-2.07l9.23,-0.27l6.28,-1.31l3.26,-0.32l3.5,2.28l5.84,6.7l0.52,0.08l3.14,-2.04l2.9,0.04l1.8,-2.29l5.6,-5.53l0.58,-3.87l-1.21,-5.58l0.53,-3.58l-0.67,-3.33l4.21,-3.79l4.83,-2.34l1.94,-2.46l1.97,-3.68l4.83,-0.53l5.32,2.79l3.45,1.18l5.77,-2.35l3.56,-0.54l2.79,1.57l6.06,5.43l4.96,2.87l4.74,3.2l4.21,1.89l5.08,1.52l4.84,1.3l11.63,2.21l2.93,1.28l-2.33,1.72l-3.99,1.16l-2.5,1.21l-0.03,0.71l5.75,3.29l1.5,2.75l1.14,3.06l0.54,2.64l2.79,2.02l3.65,0.23l4.96,-2.08l1.65,2.27l1.02,2.39l1.8,2.92l2.7,1.67l5.12,-2.08l2.56,-0.1l2.6,0.69l3.89,0.06l2.14,-1.04l2.62,1.01l2.19,2.6l2.79,1.99l-0.1,2.14l-0.87,3.5l1.11,3.26l3.36,2.46l3.61,1.59l2.57,0.47l2.64,0.04l4.21,-1.33l1.46,3.97l3.16,0.53l1.98,1.29l2.87,3.23l1.87,4.7l0.5,2.13l-0.89,2.1l0.28,0.55l2.8,0.7l-6.38,4.7l-1.52,2.37l-2.65,1.72l-3.41,1.42l-3.01,2.25l-6.7,8.61l-4.84,8.12l-7.7,10.74l-1.72,3.24l-2.1,6.67l0.26,2.57l1.69,2.1l2.87,0.45l5.93,3.35l1.47,3.36l1.71,2.35l4.09,2.37l2.23,2.01l3.34,1.36l4.98,3.64l0.16,1.44l-4.95,2.73l-0.51,2.15l1.2,2.7l0.03,2.32l-0.83,2.43l0.86,3.15l-1.56,2.01l-0.87,2.15l1.35,4.97l2.01,3.56l-1.25,2.83l-0.42,3.04l1.6,2.72l1.87,2.08l2.23,1.38l-0.42,3.19l-2.13,4.18l-3.47,1.36l-4.85,0.33l-4.58,1.03l-7.94,0.67l-3.29,1.42l-2.88,2.29l-3.51,1.94l-3.47,0.53l-4.89,0.08l-1.82,2.4l-1.07,3.29l-7.53,8.26l-1.18,1.77l-0.65,3.1l-1.25,2.98l-0.39,3.16l1.33,1.68l3.21,1.39l1.53,1.46l-0.2,2.53l-8.68,4.11l-6.11,5.64l-8.5,3.11l-5.7,3.17l-9.17,2.95l-3.41,2.08l-6.11,5.01l-4.25,2.4l-4.55,1.48l-4.4,2.44l-3.83,3.89l-5.66,2.93l-5.74,1.21l-3.66,1.51l-4.39,2.88l-13.9,7.43l-8.1,3.23l-0.25,0.47l1.7,6.45l-0.71,2.48l-4.63,0.35l-5.86,-1.79l-3.95,-2.48l-3.83,-3.65l-8.74,-6.9l-3.74,-2.43l-5.06,-0.15l-7.55,-4.34l-16.61,-7.31l-1.52,-0.29l-2.57,-6.06Z", "name": "Kasserine"}, "tn-mh": {"path": "M586.17,630.73l0.75,-10.67l1.22,-5.15l0.45,-5.91l-5.77,-5.63l-0.9,-4.02l0.66,-3.86l1.7,-3.36l0.77,-2.77l-0.39,-2.15l0.8,-2.97l0.09,-2.12l1.72,-1.47l4.35,-2.28l1.37,-1.3l0.67,-1.71l0.4,-3.91l1.72,-1.86l4.44,-2.98l1.89,-2.46l-0.35,-2.41l-1.71,-2.89l-2.3,-2.81l-1.77,-3.06l-1.05,-3.28l3.85,-2.41l1.35,-1.6l2.19,-1.71l1.72,-0.83l6.11,-0.99l3.68,-1.4l0.87,0.09l-3.63,3.61l-0.65,2.6l0.98,4.07l1.62,2.87l1.9,2.23l2.21,1.71l1.19,2.45l1.37,1.41l1.8,1.12l1.06,1.27l0.5,1.92l1.39,2.0l2.14,0.11l0.39,-0.42l-0.09,-1.97l0.83,-1.13l1.43,-0.72l1.68,0.96l2.54,0.3l1.73,-0.71l1.2,0.69l2.1,2.41l1.85,1.06l2.8,-0.09l0.8,3.38l1.69,2.93l1.16,1.52l2.02,1.0l2.68,4.21l2.18,2.06l4.23,1.09l5.08,2.05l3.22,0.24l0.38,-0.21l2.96,-5.47l0.4,-2.24l1.19,-1.73l3.22,-1.76l3.74,-3.19l0.85,-3.38l-0.39,-3.79l9.79,-0.39l2.29,0.68l5.59,0.86l2.91,-0.16l4.1,-0.82l1.94,0.35l0.8,3.04l2.71,4.57l3.29,3.25l5.03,1.4l2.68,0.41l5.96,-0.69l1.85,-1.65l0.07,-4.86l2.83,-2.61l5.32,-5.73l7.26,-4.48l5.34,-4.15l3.54,-2.15l0.34,0.0l0.0,0.47l1.51,1.53l0.77,0.04l-0.06,0.92l0.95,0.93l1.55,-1.28l1.04,0.38l1.04,-0.08l2.53,-1.28l1.46,0.23l1.01,-1.08l-0.18,-1.51l0.56,-0.48l0.64,0.34l0.52,-0.55l-1.32,-3.02l10.23,-1.61l-0.37,3.51l0.31,4.99l0.43,2.34l1.78,4.3l2.8,3.19l2.58,1.51l1.04,0.15l2.61,-1.28l-0.37,0.63l-1.57,0.45l-0.73,0.97l-0.83,0.41l-0.06,0.51l-0.71,-0.08l-0.52,0.63l-0.37,1.78l-1.78,4.79l-0.18,1.83l-1.6,5.57l-0.61,7.32l0.49,2.71l0.74,2.11l0.49,0.59l0.34,1.56l-0.8,-0.21l-0.67,0.89l-0.44,-0.13l-0.74,0.45l-1.01,1.68l-0.18,6.63l1.11,6.03l0.68,2.18l2.95,4.74l5.53,6.48l4.12,3.98l0.68,1.14l1.75,1.3l1.38,0.6l0.12,0.43l2.98,2.81l2.79,1.81l1.09,1.05l2.08,0.3l1.07,0.9l-0.41,0.7l-0.68,0.4l-0.06,0.91l-0.66,0.42l-0.66,-0.75l-0.74,-0.3l-0.89,0.64l-0.46,-0.51l0.09,-0.63l-0.46,-0.4l-1.78,0.68l-0.57,0.68l-1.28,0.07l-0.65,0.55l0.0,1.14l-2.27,1.65l0.31,0.99l-0.55,0.96l0.0,1.13l0.49,1.37l-0.25,0.41l-0.71,0.0l-1.51,1.15l-0.37,0.75l0.06,0.98l-0.89,0.27l-0.89,0.93l-0.74,2.12l-0.8,1.04l0.0,0.53l1.46,1.3l-1.04,0.25l-2.23,-0.38l-1.34,0.38l-0.94,-0.38l-2.34,1.81l-0.52,0.62l0.18,0.44l-1.66,2.34l-3.56,6.54l-0.98,2.95l-11.73,-0.63l-4.44,-2.15l-3.76,1.3l-1.47,-0.59l-0.96,-5.95l-0.89,-2.94l0.58,-4.07l-2.13,-5.96l-1.39,-2.27l-2.0,-1.87l-2.12,-0.6l-0.44,0.16l-1.44,2.06l-0.83,2.55l-1.27,2.2l-5.96,2.67l-1.77,1.17l-0.87,-0.84l-0.47,-2.9l-0.87,-2.56l-1.88,-3.35l-3.42,-3.53l-2.01,-3.47l1.28,-11.44l-1.13,-2.64l-1.89,-1.93l-2.3,-1.25l-2.37,-0.45l-3.79,2.22l-3.26,2.61l-8.91,5.84l-4.06,0.34l-2.72,-0.71l-10.5,-4.45l-2.36,-1.32l-3.39,-0.35l-0.43,0.45l0.53,3.92l-3.3,4.94l-2.41,2.1l-0.41,1.48l3.93,4.31l1.4,2.63l-2.11,1.2l-4.24,1.16l-8.29,6.52l-4.82,5.15l-6.1,5.27l-4.35,4.45l-3.41,1.87l-3.61,-1.64l-5.48,-3.19l-2.39,-2.45l-3.5,-2.11l-2.46,-2.2l-5.68,-1.21l-11.68,1.1l-3.53,-1.5l-3.53,-2.05l-4.16,-1.13l-0.91,-2.69l-0.46,-2.91l0.39,-5.45l0.77,-2.11l0.49,-2.71l-1.35,-1.91l-6.1,-3.84l-1.82,-2.26l-0.31,-2.86Z", "name": "Mahdia"}, "tn-mn": {"path": "M454.12,207.27l-0.63,-0.35l-0.2,-1.02l0.49,-3.18l-1.58,-1.43l-2.81,-3.48l-0.57,-1.25l4.78,-6.4l0.92,-0.91l2.29,-1.03l2.57,0.0l1.67,0.22l0.82,1.96l0.76,0.75l0.59,-0.03l5.8,-6.61l3.43,-0.38l2.89,-0.87l3.46,-3.14l1.96,0.01l2.98,1.29l3.34,-0.53l2.2,-1.28l1.95,-2.02l1.46,-4.62l1.16,-2.27l3.59,-3.82l0.69,-4.31l1.51,-1.44l5.29,3.54l10.51,-0.16l2.93,0.77l3.24,0.28l4.43,1.67l1.49,1.13l2.13,3.92l0.8,2.53l1.58,1.64l2.28,0.12l2.35,-1.16l3.03,-0.6l1.5,2.42l0.01,1.62l-0.26,1.08l-1.25,1.6l-0.89,4.07l-1.97,2.37l-1.37,0.86l-2.08,0.4l-0.46,2.48l-1.65,0.9l-0.25,0.85l0.25,0.44l0.86,0.41l4.43,0.52l1.78,0.8l0.93,-0.02l0.71,-1.04l-0.28,-2.59l0.88,-0.9l2.32,0.34l1.78,-0.89l2.45,-0.23l1.14,-0.6l3.91,-3.52l3.53,8.51l2.5,4.39l3.71,3.4l1.92,0.9l0.58,1.28l1.1,0.82l0.2,1.35l-2.75,-0.28l-3.21,0.58l-2.53,1.32l-0.42,1.35l0.93,1.21l-0.06,0.63l-0.64,0.55l-2.36,0.13l-3.68,-4.12l-1.87,-0.4l-0.97,-0.94l-3.08,0.41l-1.64,1.03l-0.76,2.03l0.15,0.45l3.24,2.58l2.82,9.05l2.55,1.44l2.1,0.5l1.15,1.7l0.92,4.03l-0.34,1.83l-1.81,2.33l-0.82,2.05l-6.4,6.98l-2.33,1.22l-2.29,1.75l-1.52,1.75l-1.84,-2.02l-4.83,-2.52l-3.16,0.63l-2.04,1.95l-1.68,3.28l-1.67,3.83l-0.84,4.21l-1.77,5.07l-3.48,4.58l-2.49,1.14l-3.8,-0.25l-0.57,-1.94l-1.5,-2.74l-4.89,-6.08l-3.13,-6.64l-2.72,-1.98l-2.75,-3.74l-2.36,-4.65l-1.61,-6.71l0.93,-6.99l-0.46,-1.21l-1.5,-0.22l-1.92,0.72l-2.27,2.07l-3.05,-0.16l-1.36,-1.51l-11.68,-8.27l-4.45,-0.68l-2.24,-0.75l-4.18,-2.2l-1.44,-1.88l-1.01,-2.13l-0.39,-2.27l-0.8,-1.63l-0.47,-0.2l-1.22,0.35l-1.34,0.76Z", "name": "Manubah"}, "tn-kr": {"path": "M546.49,689.98l-0.53,-13.26l-1.0,-5.96l-1.5,-5.45l-0.39,-4.56l0.11,-5.45l-0.26,-0.38l-1.94,-0.54l-3.96,3.1l-3.6,0.96l-2.96,1.76l-4.16,1.8l-10.19,-5.67l-3.3,-2.55l-2.33,-0.82l-5.04,0.29l-5.63,-0.7l-4.39,-1.74l-4.96,0.83l-4.65,-1.15l-5.13,-3.38l-4.57,-2.37l0.78,-3.89l-1.88,-3.13l-3.33,-3.39l-2.48,-3.05l-2.3,-3.99l-3.02,-4.15l-3.81,-2.93l-2.99,-0.95l-3.59,3.1l-2.68,1.28l-2.6,2.01l-1.35,-2.51l-0.65,-2.38l-4.03,-7.04l-10.98,-6.17l-2.76,-2.22l-1.75,-2.84l-0.5,-3.15l3.88,-4.6l2.83,-2.72l2.67,-3.94l-0.03,-2.03l-1.66,-5.79l-0.87,-9.05l-4.05,-2.58l-5.06,-2.65l-1.88,-2.18l-1.53,-4.47l-1.26,-10.12l-3.77,-4.11l-5.17,-9.77l-3.4,-1.09l-2.85,-2.8l-2.76,-3.96l-3.24,-1.79l-3.5,-2.43l-6.15,-6.32l-1.99,-2.77l-1.24,-2.52l-0.52,-3.43l3.27,-4.51l2.53,-0.39l9.15,5.01l3.57,1.24l6.34,-0.43l2.94,1.58l0.45,-0.05l3.2,-2.78l5.19,-1.63l4.51,-1.84l2.55,-2.24l3.15,-1.41l4.88,-0.09l3.76,-0.64l2.29,-1.9l1.88,-2.01l-0.21,-0.66l-4.77,-0.97l-3.6,-3.37l-2.21,-2.68l-1.37,-2.79l-0.33,-2.82l4.43,-5.17l2.04,-2.95l-1.23,-3.85l1.28,-2.43l0.66,-3.59l-5.75,-9.59l-0.02,-2.05l7.39,-4.0l12.33,-10.51l5.61,-6.51l4.76,-6.92l4.2,-0.82l8.19,-8.62l3.91,-3.12l3.99,-4.0l2.57,-2.02l9.71,3.41l1.3,0.0l3.2,-3.82l2.03,-1.37l4.23,-1.88l8.61,2.84l2.58,4.96l2.18,2.37l3.27,1.65l7.4,-1.13l2.21,0.75l2.78,-0.49l1.67,0.63l2.48,1.64l2.16,0.5l1.08,2.73l1.95,2.26l2.36,1.63l3.33,0.9l2.89,-1.18l1.71,-2.68l0.96,-3.18l-0.19,-4.98l1.67,-3.49l-2.16,-4.37l0.27,-1.73l1.66,-1.09l1.23,1.79l2.34,2.48l2.3,0.88l3.7,-0.6l3.03,-1.88l2.77,-2.62l0.54,-3.12l1.59,-3.35l0.08,-3.03l-1.67,-2.19l0.95,-2.55l2.35,0.47l3.34,-0.36l3.25,0.61l4.63,-1.36l1.8,0.18l-2.37,3.08l-0.47,2.62l0.62,5.32l-0.17,2.43l-2.56,5.26l-0.08,2.53l0.37,0.41l9.49,0.88l1.72,1.26l1.92,4.9l2.24,8.41l0.24,5.92l-4.39,10.97l-3.03,4.98l-1.39,3.6l-0.84,3.33l-1.5,3.55l-3.59,5.96l-1.25,3.58l-2.63,2.58l-2.92,4.48l-0.64,2.81l1.97,3.03l6.03,7.76l1.09,2.36l1.29,4.63l5.97,5.01l4.58,13.86l1.8,2.73l2.61,5.21l2.05,7.02l3.68,3.65l-0.05,2.36l2.55,5.98l0.73,0.94l-2.81,1.08l-6.28,1.04l-1.88,0.91l-2.26,1.76l-1.32,1.58l-4.01,2.47l-0.21,0.48l1.2,3.73l1.81,3.12l2.33,2.87l1.62,2.76l0.33,1.72l-1.65,2.17l-4.42,2.97l-1.91,2.05l-0.51,4.21l-0.5,1.33l-1.19,1.13l-4.4,2.32l-1.89,1.62l-0.22,2.45l-0.81,3.01l0.39,2.14l-0.74,2.64l-1.69,3.33l-0.71,4.09l1.03,4.54l2.02,2.21l3.6,3.11l-0.43,5.63l-1.23,5.21l-0.75,10.67l0.33,3.14l2.03,2.62l6.16,3.89l1.11,1.6l-1.29,4.38l-0.4,5.6l0.47,3.06l0.81,2.22l-0.96,-0.18l-2.99,2.03l-5.64,0.3l-4.84,2.8l-5.31,6.6l-6.68,5.67l-4.77,4.93l-3.66,4.96l-4.84,7.93l-5.34,-0.64l-3.08,-1.58Z", "name": "Kairouan"}, "tn-an": {"path": "M531.89,193.29l1.75,-1.16l0.35,-2.34l1.74,-0.19l1.57,-0.95l2.23,-2.64l0.72,-2.24l0.23,-1.95l1.2,-1.48l0.35,-1.39l-0.05,-1.96l-1.4,-2.41l1.88,-0.84l1.78,-1.5l0.91,-1.28l0.0,-0.46l-1.5,-2.16l3.2,-8.28l0.31,-3.67l2.84,-1.97l3.52,-3.07l3.94,-7.14l2.12,-4.94l-0.13,-6.28l0.27,-2.69l-1.75,-4.05l0.68,-1.33l2.24,0.59l1.78,-1.55l2.44,-2.8l5.14,-2.46l2.35,0.24l2.08,0.7l3.36,-0.04l0.87,0.73l3.19,1.16l0.74,0.62l2.49,-0.08l0.18,0.83l2.74,2.56l4.64,-0.15l-0.48,0.97l-0.97,-0.15l-0.58,0.48l-0.31,0.69l0.46,0.48l0.52,-0.14l-2.46,2.13l-2.83,3.7l-0.43,1.79l-0.68,0.52l0.37,0.48l-0.12,1.0l-1.17,0.99l-0.37,0.77l-0.31,1.08l0.12,1.08l0.74,1.06l-0.25,1.02l0.72,1.19l0.14,1.36l0.61,0.39l0.18,1.31l0.8,0.52l0.74,1.62l-0.06,0.48l0.78,0.73l0.88,3.49l-0.55,1.48l2.09,4.23l3.69,5.08l2.81,2.4l0.01,0.64l1.42,2.23l2.27,2.29l0.64,1.24l2.19,1.07l3.08,3.07l0.21,2.32l1.42,1.44l0.0,1.06l-1.38,1.04l-1.71,4.28l0.96,2.24l1.44,1.13l-1.08,1.52l-7.06,-0.66l-2.77,0.14l-0.44,-0.3l-0.05,-2.15l-0.41,-0.43l-0.82,-0.03l-2.78,1.9l-1.35,1.84l-0.02,1.7l-4.38,-0.25l-3.04,0.53l-0.83,0.91l-0.65,0.07l-1.15,-0.13l-3.75,-2.77l-1.8,-0.67l-3.82,0.61l-1.29,1.14l-1.52,3.61l-1.5,1.91l-2.93,2.63l-1.67,-0.76l-3.54,-3.22l-2.43,-4.25l-1.98,-5.16l-1.67,-3.63l-0.38,-0.23l-1.01,0.26l-3.61,3.44l-1.0,0.51l-2.31,0.18l-1.67,0.87l-1.91,-0.37l-0.78,0.16l-1.2,1.36l0.29,1.87l-0.2,1.2l-2.29,-0.81l-2.14,-0.08l-2.72,-0.69ZM591.95,118.06l0.0,-0.57l0.92,-2.45l0.98,-0.6l-1.42,1.99l0.18,2.99l0.8,2.4l-0.92,-1.76l-0.55,-2.0Z", "name": "Ariana"}, "tn-gb": {"path": "M439.92,1103.68l1.26,-1.88l2.85,-1.8l1.03,-1.87l-0.23,-9.71l3.82,-4.8l4.74,-4.34l-0.07,-0.63l-5.16,-2.85l-2.83,-1.03l-2.25,-3.44l-1.7,-3.93l-2.21,-1.86l-2.78,-0.13l-3.7,0.3l-3.64,0.87l-2.76,-1.81l-0.92,-8.13l-1.97,-2.35l-2.08,-1.69l-1.76,-2.18l-3.77,-0.81l-3.2,0.01l-1.9,1.14l-2.59,-2.36l-4.26,-1.23l-1.16,-1.59l-2.08,-6.74l-0.47,-6.34l-2.6,-5.65l-4.13,-8.34l-3.38,-2.99l-2.75,-5.57l-3.84,-5.7l-1.78,-3.57l-1.35,-7.93l-0.1,-4.75l0.25,-5.57l0.82,-3.55l1.05,-14.03l-0.88,-5.31l0.48,-3.14l1.45,-2.42l2.32,-2.52l3.84,-2.59l2.98,-2.88l3.06,-1.8l4.05,-5.19l1.64,-2.89l-0.9,-2.26l-1.89,-2.36l-2.88,-2.34l-7.77,-8.26l-2.95,-2.4l-2.6,-3.49l5.44,-3.97l4.7,-1.46l4.26,-2.16l6.33,-0.81l19.05,3.68l7.17,-0.66l10.95,-4.18l5.06,-2.43l4.61,-4.14l2.37,-5.04l1.38,-4.09l15.11,-3.58l3.68,1.45l2.82,1.87l3.36,1.03l3.5,10.13l2.26,2.07l3.99,1.86l4.27,3.14l5.65,1.33l3.23,-0.65l2.79,-2.53l2.64,-1.02l7.39,3.47l1.64,2.1l1.05,3.88l1.75,2.81l2.15,1.35l2.5,3.79l3.2,2.03l3.32,0.98l5.0,-0.76l2.09,-1.58l1.45,-1.59l0.75,-1.74l-1.33,-2.29l-0.53,-2.17l1.15,-0.97l2.43,0.67l1.81,1.75l0.79,2.8l2.6,0.92l4.69,3.14l-0.16,1.26l-0.6,0.38l-0.49,1.11l0.68,1.11l1.29,1.1l0.0,1.65l0.37,1.25l-0.12,2.7l-0.49,1.47l0.06,1.79l-0.31,0.8l0.44,1.17l-0.31,0.46l0.65,0.64l-0.46,0.77l0.92,2.07l-0.49,0.98l0.18,2.57l-0.31,0.32l-0.06,1.04l1.11,3.03l0.06,2.91l0.37,0.73l0.61,6.02l0.37,0.58l1.84,7.58l0.38,0.53l-0.14,0.28l0.68,1.17l0.12,1.49l4.86,11.12l3.07,5.93l1.81,1.14l1.26,0.15l-0.86,0.79l0.25,0.81l0.65,0.55l1.08,-0.3l0.56,0.08l-1.43,1.15l-0.31,0.59l2.4,3.54l0.41,0.94l-0.16,0.48l0.52,0.47l1.0,-0.6l-0.42,0.72l1.54,2.81l13.64,15.48l3.53,3.34l11.04,7.76l1.35,1.51l-0.43,0.9l0.58,0.62l0.91,-0.59l2.75,2.22l2.45,3.13l-0.43,1.42l0.49,0.67l0.4,0.4l0.7,-0.36l1.06,0.87l8.63,9.01l4.98,3.18l0.49,0.0l1.17,1.03l3.61,2.07l0.75,0.81l0.87,0.23l0.42,0.58l0.58,-0.3l1.08,1.11l1.01,-0.37l1.57,1.62l0.49,0.0l0.58,-0.59l1.23,0.15l0.83,1.18l1.72,0.44l0.9,-0.22l0.64,1.11l1.11,-0.14l0.42,0.44l0.86,0.0l0.44,-0.68l0.81,0.45l-2.85,2.26l-5.16,2.51l-2.36,3.22l-2.18,4.63l-2.95,3.61l-2.23,3.36l-3.98,6.99l-0.92,4.36l-4.72,6.71l-1.6,3.07l-2.35,3.46l-5.3,5.68l-1.15,4.13l-1.12,2.55l-3.85,3.37l-4.66,0.01l-4.66,-0.85l-4.28,-0.02l-4.1,1.7l-7.32,4.23l-0.38,3.03l-2.05,3.64l-3.35,1.75l-3.5,0.66l-2.29,1.86l0.32,3.21l-0.15,3.69l-4.36,2.78l-3.23,2.69l-3.64,1.57l-5.98,0.98l-2.31,2.6l-2.85,-0.66l-2.76,-1.77l-2.16,-0.11l-2.71,2.88l-2.51,1.75l-3.52,1.02l-4.19,-0.07l-3.11,-1.14l-4.56,1.11l-3.94,0.46l-2.29,-1.18l-6.54,0.74l-6.35,2.57l-3.53,0.37l-4.78,-0.69l-4.72,-1.59l-3.36,-1.76l-2.64,-0.09l-6.92,-6.45l-3.44,-6.89l-5.21,-6.95l-4.03,-12.22l-3.3,-2.88l-3.11,-1.72l-8.1,-5.54l-1.41,-3.37l-5.83,-6.83Z", "name": "Gabes"}, "tn-sf": {"path": "M835.67,770.84l0.43,-1.82l1.5,-0.85l3.26,-0.38l0.46,-0.3l1.64,0.62l-2.53,-0.08l-2.03,0.9l-2.12,2.05l-0.55,0.12l-0.06,-0.26ZM836.23,750.94l-1.01,-1.33l0.27,-0.52l1.22,0.22l0.47,0.75l1.97,1.65l0.54,-0.08l0.68,0.15l0.52,0.22l-1.94,-0.05l-0.41,-0.37l-1.57,0.07l-0.73,-0.71ZM795.73,789.68l-0.52,-0.57l1.35,-0.38l0.4,-0.4l0.68,-0.97l0.49,-1.64l-0.74,-1.84l2.18,-0.52l0.74,-0.52l0.95,-1.07l1.54,-2.84l-0.06,-1.1l2.67,-0.75l1.26,-1.3l-1.35,-1.45l0.18,-0.72l-0.23,-0.42l1.8,0.15l0.83,-0.85l0.0,-0.6l-0.73,-1.77l-0.63,-0.68l-0.18,-1.43l-0.31,-0.35l1.25,-0.3l-0.45,0.65l0.0,0.67l1.04,1.03l0.06,0.61l1.51,1.3l0.58,0.04l0.4,0.55l0.55,0.0l0.8,0.75l0.69,-0.22l1.65,0.22l0.87,-0.45l0.79,0.67l1.17,0.37l0.74,0.0l0.65,-0.55l0.06,-0.75l-0.92,-1.73l0.52,0.04l0.52,-0.55l-0.37,-2.67l1.29,-1.07l0.0,-0.52l-0.89,-1.15l-0.44,0.0l-1.5,-1.31l-0.8,-2.31l2.37,0.75l0.68,-0.82l0.83,-0.22l0.12,0.8l0.52,0.4l0.71,-0.77l-0.06,-0.45l-0.58,-0.55l-0.73,-0.45l-0.16,-0.19l0.83,0.17l1.06,-0.54l1.03,0.31l0.46,-0.47l-0.18,-1.87l-0.86,-1.86l1.07,0.09l0.58,-0.62l-0.12,-1.57l-1.29,-1.19l-0.06,-1.4l0.71,-0.22l0.58,-0.7l-0.37,-0.72l0.89,0.37l0.58,-0.52l-0.25,0.72l1.72,1.18l0.37,1.74l0.74,0.88l0.0,0.76l1.01,1.22l1.23,0.75l0.55,0.0l0.4,-0.4l0.31,-0.9l-0.74,-1.27l-1.17,-0.7l0.17,-0.99l3.18,1.65l1.69,0.22l1.56,1.42l2.35,1.32l-0.35,0.35l-0.52,-0.6l-0.48,0.15l-1.55,-1.5l-0.61,-0.23l-1.85,0.23l-0.48,0.51l-0.37,-0.07l-0.71,1.07l1.27,1.4l-1.27,1.0l-0.06,0.75l0.68,1.5l1.36,1.53l-0.5,0.5l-1.84,-0.03l-0.31,-0.95l-0.89,-0.77l-0.43,0.0l-1.26,1.22l0.0,0.45l0.58,0.63l0.71,0.07l-0.37,1.55l0.18,0.9l4.95,3.93l-0.09,0.71l1.11,1.26l0.31,1.69l-0.19,0.41l-0.82,0.13l-0.65,0.86l-1.5,-0.64l-1.66,0.15l-1.08,1.27l-1.26,0.97l-0.61,0.0l-0.75,0.82l-0.77,0.07l-0.57,-0.52l-0.37,0.0l-0.46,0.6l-0.71,-0.23l-0.58,0.7l0.08,1.44l-0.76,0.78l-6.54,1.12l-2.12,1.3l-1.07,-0.33l-2.53,1.5l-0.54,-0.3l-1.08,0.92l-0.43,0.87l-1.38,0.45l-1.75,1.64l-0.77,0.0l-1.17,0.75l-1.54,1.42l-2.02,0.97l-0.68,0.75l-0.79,0.15l-1.36,1.35l-0.52,-0.04l-0.49,-1.57l0.43,-1.64ZM832.68,763.52l0.84,0.12l-0.18,0.9l0.31,0.51l-1.15,-0.99l0.19,-0.55ZM817.55,757.97l0.28,0.24l0.16,0.0l0.36,0.22l0.0,0.05l-0.45,-0.18l-0.35,-0.34ZM816.07,756.53l0.92,0.26l0.06,0.64l-0.94,-0.69l-0.04,-0.2ZM821.48,754.81l-0.06,-0.06l0.0,-0.0l0.06,0.06l0.0,0.0ZM821.36,754.6l0.0,-0.01l0.06,0.07l-0.06,-0.06ZM761.0,795.39l0.03,-0.1l0.32,0.32l-0.06,0.0l-0.29,-0.22ZM761.52,795.67l1.64,-1.3l1.6,-2.36l2.31,-0.94l1.71,0.79l2.46,0.0l2.1,-0.45l1.52,0.3l0.91,-0.6l1.07,0.23l1.77,1.12l0.8,-0.22l1.2,-1.0l0.4,0.4l0.61,-0.35l3.33,0.5l1.54,-0.3l0.67,-0.52l1.05,1.57l4.91,0.07l1.39,1.23l-0.22,0.58l-3.07,0.67l-4.13,3.36l-1.03,0.0l-1.01,1.45l-4.47,4.23l-1.78,-0.07l-1.19,1.59l0.54,0.94l-4.26,-4.26l-3.85,-1.12l-3.82,-2.32l-2.84,-2.61l-1.85,-0.62ZM543.99,918.65l-0.63,-2.61l-1.97,-1.91l-3.27,-0.77l-1.62,1.67l0.61,2.48l1.27,1.92l-0.56,1.36l-1.33,1.47l-1.79,1.42l-4.8,0.73l-3.01,-0.93l-2.99,-1.91l-2.39,-3.68l-2.15,-1.34l-1.62,-2.57l-1.13,-4.04l-1.89,-2.35l-7.94,-3.59l-2.96,1.16l-2.63,2.44l-3.02,0.61l-5.17,-1.22l-4.24,-3.11l-4.03,-1.89l-2.04,-1.89l-2.59,-7.32l6.88,3.3l4.12,-0.57l1.4,-3.09l-1.07,-2.48l-1.68,-1.84l-1.21,-2.92l-0.49,-2.8l-1.0,-2.62l1.43,-2.29l2.49,-1.82l4.35,-1.99l4.04,-1.28l6.72,0.6l7.91,-3.22l2.65,-3.02l2.8,-4.04l3.34,-5.93l0.64,-1.92l2.54,-3.55l1.61,-3.36l2.51,-1.48l1.85,1.06l4.06,0.57l1.64,-1.71l1.25,-2.02l4.2,-3.84l4.04,-1.55l5.23,-0.7l2.96,-1.38l1.76,-4.16l1.83,-2.2l1.36,-2.94l0.87,-6.74l-0.21,-0.42l-3.51,-1.84l-7.15,-4.59l-5.5,-2.64l-3.76,-4.38l-3.69,-1.99l-1.69,0.09l-6.37,2.34l-3.19,-0.16l-4.37,1.67l-6.04,0.36l-1.9,-4.21l-4.03,-5.76l-0.59,-3.21l2.14,-3.36l2.21,-4.34l1.51,-1.95l10.37,-17.43l1.69,-4.73l2.93,-6.58l6.36,-12.87l3.51,-3.35l-0.2,-2.75l2.81,-4.44l3.25,-3.18l2.64,-3.43l1.71,-4.35l2.47,-2.92l0.08,-3.43l2.31,-4.91l2.58,-8.2l1.26,-5.29l-1.18,-3.07l-2.22,-2.13l0.46,-1.49l4.57,-7.18l3.6,-4.88l4.72,-4.87l6.7,-5.69l5.3,-6.58l4.59,-2.64l5.47,-0.25l3.12,-2.04l5.46,1.59l3.46,2.02l3.81,1.58l11.73,-1.1l5.41,1.17l2.29,2.1l3.41,2.04l2.51,2.54l5.54,3.23l4.18,1.72l3.73,-2.06l4.36,-4.46l6.14,-5.3l4.77,-5.11l8.2,-6.44l4.07,-1.09l2.58,-1.46l0.15,-0.54l-1.61,-3.03l-3.78,-3.92l0.2,-0.93l2.4,-2.1l3.44,-5.15l-0.43,-3.83l2.64,0.25l9.65,4.54l6.25,1.99l4.44,-0.43l8.99,-5.89l3.24,-2.59l3.63,-2.13l1.77,0.41l2.2,1.19l1.7,1.76l0.98,2.34l-1.26,11.52l2.17,3.71l3.36,3.45l1.83,3.28l0.8,2.36l0.49,3.0l1.31,1.38l0.5,0.05l1.96,-1.3l6.08,-2.74l1.5,-2.5l0.81,-2.5l1.24,-1.78l1.75,0.49l1.72,1.66l1.28,2.11l2.04,5.74l-0.59,4.05l0.9,2.96l1.22,6.43l2.13,0.74l3.44,-1.31l4.48,2.14l11.7,0.63l-0.32,3.54l0.55,2.33l0.86,1.56l-0.55,0.54l0.12,1.67l-1.04,3.14l0.06,0.98l0.49,0.81l-0.0,1.8l-0.98,0.84l-0.12,0.84l-0.86,1.11l-0.26,1.09l-1.46,2.06l-0.07,1.93l-2.23,0.97l-2.55,2.24l-0.71,-0.36l-0.4,0.67l-1.01,-0.15l-0.87,0.82l-0.6,0.08l-1.84,1.2l-2.8,2.93l-2.1,1.59l-1.77,2.11l-0.18,0.69l-0.74,0.44l0.12,0.61l-0.68,1.11l0.21,0.36l-0.76,3.39l0.49,5.08l-0.49,3.24l0.8,3.36l-0.55,1.21l-0.18,2.4l0.22,0.64l-1.51,2.73l-2.34,3.02l-1.84,1.63l0.0,0.45l-1.97,2.02l-0.86,1.95l0.18,0.91l-0.25,0.97l-1.54,1.34l-1.29,1.94l-0.59,-0.55l-0.52,0.55l0.29,1.84l-0.23,1.08l1.62,2.61l-0.14,1.06l-1.57,0.34l-0.7,0.52l-2.92,0.22l-2.13,1.42l-2.05,0.9l-1.57,1.3l-1.63,2.97l-2.08,0.15l-0.71,0.7l-0.37,0.99l-0.83,0.26l-1.11,1.35l-2.21,0.67l-0.95,1.22l-0.12,0.65l-1.47,0.92l-0.8,1.42l0.25,1.42l1.99,1.47l-0.14,0.39l-1.27,-1.16l-1.38,1.24l-0.06,0.37l0.4,0.4l0.85,-0.46l1.07,1.16l-0.39,0.0l-0.52,0.77l-0.58,-0.85l-0.92,-0.15l-0.46,0.47l-0.12,0.37l0.68,0.44l0.31,1.56l-0.86,-0.06l-0.37,-1.56l-0.8,-0.47l0.0,-0.8l-0.83,-1.15l-1.32,0.7l0.0,0.42l-1.11,1.3l-0.37,1.19l-0.68,0.91l0.0,0.52l0.74,0.47l-0.31,0.87l1.33,0.87l-0.82,0.15l-0.67,-0.3l-0.65,0.7l0.12,2.39l0.37,0.4l0.0,1.17l0.43,0.52l-0.37,1.57l0.22,1.23l-2.74,3.33l-0.86,1.49l-1.57,-1.44l-0.54,0.0l-0.69,-0.67l-1.41,0.22l-2.06,1.15l-0.18,0.52l0.52,0.7l-0.67,0.76l-0.31,-0.07l-1.0,0.75l-0.6,-0.3l-1.05,0.07l-0.98,0.6l-0.52,0.9l-1.7,1.41l-0.55,0.2l-1.59,-0.58l-1.08,1.12l-1.48,0.92l-0.8,1.35l0.47,1.23l-0.16,0.35l-1.57,0.63l-0.95,0.92l-0.43,0.97l0.12,0.91l-2.4,3.66l-1.1,1.0l-0.59,-0.37l-1.2,1.22l-0.0,1.13l-0.74,0.81l-0.18,2.33l-0.37,0.73l0.06,1.04l0.37,0.5l-0.31,0.92l0.0,2.39l0.31,0.31l-1.75,2.42l-2.41,1.42l-6.58,2.91l-0.6,-0.97l-1.11,-0.07l-3.35,1.37l0.06,-0.53l-0.46,-0.47l-0.86,-0.15l-1.12,0.97l-3.0,-0.37l-1.2,0.77l-0.37,0.52l0.12,0.42l-0.52,-0.15l-1.3,0.82l-0.85,-0.37l-1.97,0.45l-0.43,0.45l-1.1,-0.07l-0.58,0.97l-1.63,0.37l-1.44,1.57l-2.24,1.42l-2.37,2.56l0.0,0.35l-0.98,0.7l-0.98,1.87l-3.44,3.8l-2.33,3.89l-2.15,2.15l-1.29,2.77l-1.17,0.96l-0.89,1.46l-2.12,0.37l-0.49,-0.22l-0.06,-1.24l-0.4,-0.4l-1.38,-0.45l-0.52,-0.52l-0.74,0.0l-0.58,0.47l-0.74,1.19l0.36,0.43l-1.16,0.91l0.49,0.88l-0.37,0.91l1.01,0.62l2.0,-1.45l-0.18,2.26l-0.47,0.85l-5.87,2.68l-0.87,-0.6l-1.32,0.03l-0.83,-1.07l-3.5,-1.56l-0.8,1.19l-0.55,-0.07l-0.52,0.55l0.52,0.57l-0.91,-0.22l-0.52,0.55l0.36,0.47l-0.3,0.44l0.58,0.61l0.51,0.0l-0.17,0.8l-0.18,0.36l-0.58,-0.55l-0.61,0.08l-0.95,1.0l-0.49,2.16l-1.12,1.61l-2.54,0.22l-2.22,0.89l-1.28,-0.22l-1.63,1.37l-1.22,1.68l-2.37,1.12l-0.65,0.92l-1.63,-1.97l-1.41,-0.74l-0.52,0.1l0.0,-0.52l-0.4,-0.4l-1.04,0.22l-0.58,0.62l0.18,0.91l-1.23,1.48l0.12,1.35l-1.35,2.87l-1.38,0.52l-0.4,0.46l-1.01,-0.54l-0.92,0.0l-0.77,0.55l0.18,1.97l-0.49,3.46l-3.23,-3.97l-2.07,0.28l-1.99,1.13l-2.12,2.56l0.06,0.39l-3.13,3.26l-0.74,1.26l-0.06,0.52l0.31,0.34l-0.71,-0.07l-1.44,1.96l-2.77,5.87l-2.4,7.3l-2.21,2.81l-1.66,3.51l-0.58,-0.41l-0.46,0.47l-0.12,5.47l-0.55,0.55l-0.31,2.17l-0.9,1.75l-0.54,-0.46l-1.54,-0.15l0.09,-2.02l-5.11,-3.43l-2.52,-0.9ZM711.21,783.49l0.89,0.3l0.06,0.96l-0.47,0.48l0.04,-0.95l-0.52,-0.8ZM612.54,873.73l0.31,-2.37l0.64,-0.15l0.99,-1.19l0.91,-0.45l0.34,1.39l0.92,0.82l0.18,0.73l0.25,1.44l-0.31,1.19l-0.57,0.26l-1.24,-0.37l-0.97,0.37l-1.09,-0.56l-0.37,-1.11ZM610.94,868.65l0.12,-0.52l0.18,0.01l0.12,0.4l-0.43,0.11Z", "name": "Sfax"}, "tn-sl": {"path": "M308.76,304.47l2.39,-1.55l14.04,-1.63l0.7,1.21l2.46,2.39l2.06,0.33l3.09,-0.25l1.87,0.27l1.8,1.33l1.65,4.35l3.75,2.61l0.96,1.6l-0.71,3.59l0.55,1.84l0.37,0.28l2.13,0.04l3.17,3.09l2.43,0.98l8.0,-2.63l5.67,-4.19l1.07,-0.48l5.65,0.76l4.8,0.04l3.51,0.44l2.66,0.74l2.34,1.04l2.25,3.14l2.55,2.36l2.74,1.42l3.62,-1.06l4.88,-2.66l2.46,-2.64l0.54,-2.87l-0.82,-2.99l0.09,-4.08l0.68,-3.01l2.27,-2.56l7.92,-2.86l6.49,-1.07l4.06,-0.26l2.8,0.37l4.39,-0.22l3.42,0.83l2.16,-1.1l3.95,-1.25l1.93,1.09l4.46,3.94l2.24,3.39l2.39,2.45l5.01,0.96l4.26,-0.63l3.25,0.13l2.58,1.75l3.31,-1.1l0.27,-0.39l-0.06,-1.85l0.86,-1.82l1.03,-1.2l9.27,1.1l3.97,-0.68l1.2,-1.85l0.63,1.97l0.35,3.63l-0.16,2.94l-1.86,13.24l-1.22,2.82l-0.51,2.39l-2.32,3.82l-1.33,3.37l-1.57,1.54l-4.7,2.82l-5.2,5.13l-2.41,0.81l-4.01,0.72l-5.39,-0.77l-2.28,0.99l-0.16,0.6l4.0,5.92l4.75,1.5l0.45,1.54l-0.04,4.84l0.91,2.83l0.43,0.27l1.72,-0.22l2.12,-1.44l1.55,-0.44l5.78,2.98l1.84,4.15l2.05,3.55l10.01,3.17l1.84,1.53l0.45,2.65l-1.06,4.01l-1.16,2.28l-0.76,2.87l-2.31,5.03l-1.46,2.11l-0.78,2.04l-0.87,3.22l0.34,0.51l-2.23,1.75l-3.96,3.97l-3.95,3.16l-8.13,8.55l-4.26,0.87l-4.82,7.01l-5.54,6.43l-12.27,10.46l-7.48,4.02l-0.23,0.37l0.07,2.59l5.69,9.32l-0.62,3.37l-1.32,2.75l1.26,3.46l-1.88,2.72l-4.53,5.3l0.26,3.36l1.51,3.1l2.29,2.77l3.7,3.46l4.37,0.95l-3.35,3.17l-3.56,0.61l-5.09,0.13l-3.28,1.47l-2.53,2.23l-4.4,1.79l-5.25,1.65l-3.19,2.74l-2.99,-1.55l-6.24,0.45l-3.36,-1.16l-9.52,-5.11l-3.09,0.6l-3.47,4.78l0.52,4.07l1.32,2.66l2.03,2.83l6.29,6.46l3.55,2.47l3.08,1.66l2.72,3.91l3.0,2.96l3.26,0.98l5.11,9.66l3.67,3.91l1.27,10.12l1.56,4.59l1.27,1.85l-3.08,1.51l-8.53,-1.75l-4.51,1.77l-8.61,0.88l-1.01,0.36l-2.23,-0.48l0.78,-2.02l-0.55,-2.35l-1.91,-4.8l-3.11,-3.51l-2.25,-1.42l-2.96,-0.49l-0.28,-1.64l-1.0,-2.23l-0.47,-0.22l-4.38,1.39l-2.53,-0.04l-2.43,-0.45l-3.36,-1.49l-3.23,-2.36l-0.88,-2.61l0.85,-3.43l0.12,-2.48l-3.02,-2.37l-2.39,-2.75l-2.89,-1.11l-2.35,1.05l-3.74,-0.05l-2.63,-0.7l-2.68,0.11l-4.8,2.07l-2.29,-1.37l-1.73,-2.81l-1.04,-2.42l-1.84,-2.54l-0.45,-0.15l-2.63,0.86l-2.63,1.31l-3.03,-0.19l-2.4,-1.62l-0.53,-2.57l-1.16,-3.12l-1.6,-2.93l-5.34,-3.12l1.73,-0.84l4.03,-1.17l2.84,-2.12l4.42,2.67l2.42,0.37l0.46,-0.36l0.28,-2.92l-0.65,-3.17l-0.05,-3.16l-3.6,-5.88l-1.3,-3.22l4.17,-6.25l0.69,-4.31l-0.5,-5.41l-1.22,-4.51l2.84,-2.55l0.78,-2.46l-0.33,-0.51l-2.66,-0.38l1.48,-5.4l3.32,-3.49l2.6,-1.46l3.53,-0.56l3.45,-2.39l1.11,-3.36l0.09,-3.13l-0.63,-6.02l0.92,-2.54l6.35,-6.08l3.85,-1.93l2.62,-2.56l0.37,-2.03l-1.33,-5.67l-0.78,-6.41l0.12,-4.48l0.71,-5.86l-0.32,-0.44l-7.77,-2.57l-1.15,-3.39l-0.44,-0.27l-4.67,0.52l-1.75,-3.8l-1.4,-1.59l-2.58,-0.72l-2.94,-0.06l-2.22,-8.76l-1.15,-2.75l3.15,-4.9l0.18,-2.76l-1.05,-3.38l0.56,-3.45l-2.04,-2.65l-6.11,-2.4l-2.06,-1.17l-1.4,-2.21l-1.01,-3.05l-1.13,-2.21l-4.27,-6.83l-1.64,-3.41l-0.04,-2.65l5.7,-6.14l0.98,-2.78l-0.5,-2.46l-1.75,-3.76l-0.84,-3.4l-5.58,-6.36l-2.18,-4.23l-1.77,-5.63Z", "name": "Siliana"}, "tn-ss": {"path": "M579.35,475.76l0.54,-2.45l2.85,-4.37l2.71,-2.7l1.23,-3.56l3.61,-6.0l1.52,-3.6l0.84,-3.35l1.36,-3.54l3.02,-4.96l2.46,-5.62l2.01,-5.65l-0.26,-6.13l-2.25,-8.48l-1.98,-5.08l-2.26,-1.65l-9.21,-0.85l0.03,-1.91l2.6,-5.38l0.18,-2.64l-0.61,-5.26l0.44,-2.38l1.14,-1.71l2.4,-2.42l1.84,-1.05l4.41,-0.9l1.66,-1.34l2.48,-7.38l1.15,-5.16l-0.04,-2.47l-0.95,-2.45l-0.3,-2.11l1.39,-2.02l4.0,-0.91l2.39,0.34l5.33,1.46l2.69,-0.83l5.32,-0.52l2.68,-2.0l1.95,-2.86l-0.03,-2.28l-0.97,-2.04l-1.47,-1.06l-2.64,-0.37l-0.44,-0.86l0.76,-1.0l1.65,-0.66l2.15,-0.17l1.21,-1.68l-0.01,-2.7l-0.68,-2.66l0.45,-2.64l-0.66,-2.79l-2.89,-5.16l-0.09,-3.34l1.18,-3.51l1.81,0.1l2.93,-0.92l5.25,-1.08l3.72,0.19l1.6,1.04l5.49,6.13l1.95,0.2l2.27,-1.86l0.63,-1.94l0.23,-2.24l1.05,-1.82l1.47,-1.3l1.41,0.38l9.71,11.45l-2.4,3.82l-1.9,3.89l-4.18,10.68l-3.81,12.73l-2.15,10.44l-0.86,7.23l-0.31,11.27l0.49,8.06l1.41,9.05l1.9,7.76l2.27,4.33l1.32,1.31l0.39,-0.27l1.49,0.12l0.86,0.53l0.71,0.99l0.56,-0.06l-0.04,2.47l0.37,2.28l0.48,0.4l-0.24,0.89l0.98,1.69l0.61,1.87l0.49,3.81l2.7,4.6l0.31,1.32l5.1,7.06l2.15,2.28l0.12,0.68l0.86,0.87l1.66,3.31l3.09,3.38l-0.32,0.33l0.06,1.21l0.74,3.11l3.07,3.7l0.8,2.67l1.23,2.12l3.38,3.02l0.46,1.02l1.24,0.75l-0.53,1.2l0.0,2.12l1.32,1.84l1.79,1.21l-2.65,2.95l0.55,3.04l-0.59,3.66l-1.29,2.2l-4.32,0.03l-0.39,0.49l1.2,3.46l-1.22,2.44l-0.66,5.74l0.13,4.84l1.66,3.31l-0.13,2.0l-5.45,5.74l-1.25,2.97l-0.3,2.85l-1.2,2.18l-2.5,1.29l-6.26,0.37l-3.34,1.03l-2.08,2.3l-0.29,3.35l1.29,2.62l1.46,2.06l-0.55,2.84l-1.71,2.19l-2.95,2.19l-2.64,1.59l-2.98,1.28l-1.21,1.89l0.11,2.3l0.88,2.9l1.28,2.36l1.92,1.86l2.15,0.49l2.04,1.41l2.5,0.4l0.42,-0.22l0.97,-1.98l0.49,-2.25l0.76,-1.64l1.41,-0.85l4.74,-1.02l5.06,3.64l0.6,4.39l-0.79,3.05l-3.48,2.87l-3.34,1.87l-1.3,1.88l-0.43,2.3l-2.8,5.18l-2.77,-0.19l-5.08,-2.05l-4.0,-0.98l-2.03,-1.9l-2.68,-4.23l-2.21,-1.17l-0.95,-1.3l-1.62,-2.82l-0.82,-3.54l-0.41,-0.31l-2.8,0.16l-1.68,-0.97l-1.99,-2.32l-1.53,-0.92l-1.97,0.7l-2.35,-0.28l-2.02,-0.98l-1.71,0.86l-1.11,1.44l-0.0,1.96l-1.18,0.04l-1.22,-1.76l-0.53,-1.96l-1.16,-1.39l-1.9,-1.21l-1.22,-1.27l-1.25,-2.51l-2.19,-1.69l-1.85,-2.17l-1.48,-2.62l-0.94,-3.92l0.59,-2.18l4.01,-3.99l-0.26,-0.66l-1.95,-0.14l-0.79,-1.0l-2.5,-5.86l-0.02,-2.55l-3.66,-3.58l-2.04,-6.97l-2.66,-5.31l-1.76,-2.65l-4.6,-13.92l-6.07,-5.15l-1.13,-4.32l-1.18,-2.58l-7.86,-10.36Z", "name": "Sousse"}, "tn-je": {"path": "M138.24,295.01l0.48,-0.75l1.18,0.23l1.36,-0.63l1.21,-1.05l0.79,-2.37l0.82,-0.2l3.26,1.72l3.13,-1.71l2.69,-0.46l0.58,-0.61l0.07,-0.71l1.42,-0.12l1.6,-1.27l0.52,0.06l0.75,-0.67l0.56,-0.03l0.83,-1.56l1.51,-0.9l1.79,0.54l2.24,-0.79l1.11,-0.21l1.06,0.22l1.46,-0.59l2.31,-2.24l1.07,-0.05l0.98,-0.5l1.0,-1.38l1.04,-0.74l0.22,-0.88l0.52,-0.48l-0.19,-0.86l0.85,-2.15l1.47,-0.61l1.0,0.02l1.52,-1.12l1.14,-0.14l0.53,-0.64l1.43,-0.61l0.79,-1.39l0.69,-0.52l2.96,-0.82l0.57,-0.52l1.47,1.01l1.86,-1.25l0.06,-1.25l1.01,-1.51l0.09,-1.16l0.88,-1.19l1.19,-0.03l1.27,-0.76l0.46,-0.65l2.94,0.87l3.88,-0.27l0.31,-0.56l-0.31,-0.78l0.84,-1.76l0.02,-1.22l0.94,-1.96l1.06,-4.31l-0.31,-0.73l-1.08,-0.59l1.29,-0.25l2.31,-1.33l1.36,-2.49l1.48,-1.25l0.5,-1.78l-0.33,-0.69l0.86,-1.19l0.0,-0.98l-0.23,-0.44l-1.25,-0.64l-0.26,-1.74l-0.85,-2.38l-1.47,-1.33l-0.62,-1.17l-0.33,-2.73l1.16,-1.82l-0.22,-0.55l-2.43,-2.08l-2.85,0.8l-1.51,-0.03l-0.36,-0.47l-0.74,-0.19l-0.73,-2.12l2.02,-0.38l4.24,-2.45l3.42,-0.73l1.4,-1.66l0.79,-0.33l3.78,0.26l5.1,-0.64l1.72,1.8l0.6,-0.29l1.79,0.46l1.94,-0.71l0.4,-0.42l1.66,1.12l1.55,-0.43l1.12,0.55l3.3,-4.6l1.63,-1.69l1.21,-0.78l1.78,1.82l0.98,0.17l1.68,-1.17l0.94,-1.74l1.55,0.09l4.6,-2.56l1.42,-0.46l2.91,-2.07l0.61,-1.82l1.11,-1.51l0.63,-2.1l-0.16,-0.64l-2.07,-1.12l-2.02,-2.58l-2.18,0.73l-2.16,-1.23l-0.98,0.1l-1.63,-0.72l-1.12,0.28l0.83,-1.8l-0.25,-1.56l0.57,-1.64l-0.35,-3.54l0.47,-1.56l-0.18,-1.22l0.68,-1.91l0.46,-1.08l3.86,-1.7l0.19,-0.51l-2.22,-3.87l-0.7,-2.94l2.59,-1.77l2.2,-0.85l1.23,-0.91l1.23,-0.09l0.51,-1.11l0.78,0.26l0.89,-0.69l1.03,-0.23l1.7,0.54l2.1,-1.77l-0.05,0.6l1.01,0.71l2.6,-1.08l2.14,0.23l1.06,-1.23l2.01,2.38l1.35,1.08l0.41,-0.11l1.67,1.65l3.5,-0.08l1.84,-1.21l3.01,-1.09l0.58,-0.72l0.71,0.18l3.55,-3.0l2.17,-0.38l5.16,-4.0l2.72,-2.54l0.84,-0.39l0.38,-0.69l6.3,-5.82l6.61,4.11l3.1,3.01l-0.24,4.49l-3.07,4.56l-0.76,1.87l-0.04,2.56l0.85,2.94l1.52,2.58l2.9,1.94l2.18,0.66l4.63,2.85l1.6,1.4l-1.02,5.9l-3.52,5.76l-4.17,3.5l-4.69,2.72l-0.55,1.92l-0.24,5.72l-0.92,2.49l-0.17,2.55l1.08,1.93l14.88,1.07l2.87,1.04l2.35,1.54l1.38,2.25l4.04,9.41l-1.62,2.7l-1.96,5.28l-0.93,3.64l0.22,3.45l1.24,3.37l1.52,2.94l7.89,9.77l1.35,2.86l0.18,3.08l-0.28,6.77l-0.42,2.63l-4.55,7.41l-0.84,2.66l-0.54,6.11l0.21,5.09l-7.58,2.12l-17.83,1.91l-2.69,1.76l-5.36,6.28l-2.74,1.49l-2.37,0.7l-5.55,-0.05l-3.75,1.52l-2.91,-0.06l-9.72,2.09l-3.61,0.25l-3.78,1.13l-3.79,0.33l-2.52,-0.39l-3.64,-1.85l-4.75,-1.48l-3.66,-0.72l-9.55,4.51l-2.99,1.1l-2.87,0.08l-5.36,-0.89l-2.86,0.12l-2.45,1.47l-4.84,4.68l-4.4,0.59l-3.54,0.97l-7.46,5.78l-12.23,-1.42l1.23,-1.92l-0.52,-2.27l0.88,-3.11l-0.86,-0.95l0.06,-0.36l2.84,-3.38l-0.44,-2.97l-0.88,-0.59l-4.25,-0.49l-2.34,-0.81l-1.21,-0.99l-0.62,-1.32l-2.29,-2.5l-0.98,-0.08l-2.3,2.94l-3.09,0.8l-0.13,-0.77l-0.69,-0.43l-0.56,0.15l-0.83,1.59l-0.33,-0.88l-1.23,-0.21l0.46,-0.96l-0.76,-1.15l-2.66,-0.62l-1.54,0.17l-1.3,-0.82l-5.05,1.9l-0.8,-0.88l-2.02,-1.15l-1.04,-0.13l-1.57,0.31l-2.89,-0.54l-3.03,0.11l-1.48,-0.84l-1.38,-2.32l-0.85,-0.61l-4.2,0.2l-1.08,-0.64l-0.47,-0.63l0.03,-0.71l-0.6,-1.5l-0.8,-1.19l0.27,-2.61l-0.2,-0.96l-1.71,-1.05ZM271.85,165.87l-0.18,-0.26l0.24,-0.25l0.06,0.64l-0.12,-0.14Z", "name": "Jendouba"}, "tn-sz": {"path": "M345.25,702.43l4.4,0.08l3.78,-0.59l3.6,-1.99l2.83,-2.26l3.18,-1.37l7.8,-0.64l4.55,-1.03l5.0,-0.36l3.86,-1.6l2.3,-4.53l0.46,-3.51l-0.19,-0.39l-2.31,-1.42l-1.75,-1.94l-1.5,-2.56l0.44,-2.57l1.26,-3.23l-2.04,-3.6l-1.3,-4.78l0.77,-1.71l1.67,-2.41l-0.88,-3.22l0.83,-2.28l-0.06,-2.63l-1.17,-2.65l0.44,-1.57l4.86,-2.57l-0.01,-2.25l-5.33,-4.06l-3.4,-1.39l-2.16,-1.97l-4.06,-2.35l-1.47,-2.06l-1.66,-3.62l-6.17,-3.49l-2.65,-0.34l-1.41,-1.67l-0.24,-2.36l2.05,-6.4l1.64,-3.07l7.69,-10.73l4.84,-8.12l6.65,-8.53l2.84,-2.11l3.31,-1.36l2.82,-1.83l1.53,-2.38l6.68,-4.93l-0.04,-0.69l9.05,-1.04l4.33,-1.76l8.55,1.75l3.84,-1.79l8.94,4.97l0.86,8.88l1.67,5.85l0.02,1.74l-2.5,3.57l-2.79,2.68l-4.01,4.76l0.45,3.73l1.88,3.11l2.93,2.39l10.81,6.01l3.96,6.91l0.64,2.36l1.6,2.96l0.6,0.13l2.94,-2.27l2.62,-1.24l3.18,-2.96l2.58,0.79l3.7,2.85l2.89,4.0l2.32,4.02l2.54,3.12l3.31,3.37l1.72,2.88l-0.85,3.74l0.21,0.44l4.79,2.48l5.29,3.46l4.8,1.18l4.88,-0.85l4.43,1.74l5.71,0.71l4.92,-0.3l2.08,0.71l3.34,2.56l10.39,5.78l4.71,-1.87l2.98,-1.76l3.53,-0.93l3.95,-3.08l1.11,0.41l-0.11,5.18l0.39,4.66l1.51,5.5l0.99,5.88l0.6,10.08l-0.08,3.35l0.22,0.36l3.5,1.77l5.27,0.63l-0.02,0.82l2.25,2.1l1.08,2.63l-1.23,5.14l-2.58,8.17l-2.31,4.89l-0.02,3.29l-2.48,2.97l-1.66,4.26l-2.55,3.32l-3.33,3.27l-2.91,4.6l0.25,2.62l-3.49,3.37l-6.4,12.95l-2.94,6.6l-1.67,4.66l-10.35,17.39l-1.52,1.96l-4.47,8.08l0.7,3.61l4.07,5.82l1.25,3.04l1.11,1.54l6.35,-0.37l4.46,-1.68l3.19,0.16l6.37,-2.35l1.2,-0.1l3.41,1.81l3.9,4.49l5.53,2.65l7.12,4.57l3.31,1.74l-0.79,6.32l-1.31,2.83l-1.85,2.23l-1.52,3.86l-2.76,1.29l-5.1,0.67l-4.35,1.67l-4.36,3.99l-1.29,2.09l-1.41,1.46l-3.42,-0.63l-1.86,-1.1l-3.23,1.66l-1.77,3.55l-2.56,3.57l-0.67,1.98l-3.31,5.88l-2.74,3.94l-2.41,2.82l-7.73,3.15l-6.68,-0.61l-4.18,1.33l-4.41,2.01l-2.66,1.94l-1.71,2.99l1.06,2.77l0.49,2.81l1.25,3.03l1.68,1.84l0.97,2.24l-1.21,2.39l-3.27,0.35l-7.4,-3.49l-0.8,-2.04l-3.51,-1.08l-2.78,-1.86l-3.84,-1.51l-7.19,1.81l-5.07,0.83l-2.95,0.93l-1.86,-1.43l-0.7,-1.86l2.32,-6.24l1.02,-7.55l0.99,-4.57l1.85,-3.12l1.06,-3.49l-1.61,-2.93l-3.42,-1.35l-3.44,-1.96l-6.29,-1.32l-4.71,-1.52l-2.72,-1.37l-4.43,-7.53l-4.5,-4.28l-10.33,-6.07l-10.11,-1.29l-5.35,0.33l-0.99,-1.35l0.13,-3.06l-1.36,-2.27l-2.67,-2.03l-3.36,-2.41l-2.48,-0.69l-2.23,0.86l-1.8,-0.04l-2.01,-1.5l-1.08,-1.75l-0.33,-2.06l0.23,-7.34l0.69,-2.59l-0.63,-2.34l-1.6,-2.37l-0.8,-2.86l2.36,-3.21l2.22,-1.67l2.35,-2.93l0.09,-3.69l-1.81,-2.31l-0.65,0.05l-1.67,2.76l-3.6,3.09l-2.49,-0.24l-1.12,-0.62l-3.96,-6.78l-0.37,-0.21l-4.99,0.42l-3.06,-2.21l-3.99,-0.49l-3.0,-1.85l-5.18,1.12l-5.0,-0.75l-7.97,-4.11l-5.56,3.08l-14.54,4.06l-2.13,-0.98l-3.3,-2.63l-3.25,-0.79l-2.8,-1.14l-2.27,-2.17l-2.11,-1.22l-8.6,-1.54l-5.51,-2.77l-2.81,-0.91l-3.81,-3.13l2.51,-0.82l4.31,-2.43l6.19,-5.06l3.29,-2.0l9.07,-2.91l5.73,-3.18l8.55,-3.13l6.23,-5.72l8.77,-4.15l0.32,-3.58l-1.84,-1.71l-3.18,-1.37l-1.0,-1.34l0.43,-2.63l1.22,-2.88l0.61,-3.0l1.06,-1.61l7.57,-8.31l1.18,-3.47l1.6,-2.07Z", "name": "Sidi Bou Zid"}, "tn-nb": {"path": "M620.65,291.8l3.67,-1.35l1.6,-1.53l0.05,-0.51l-1.05,-1.26l-4.58,-0.1l-0.81,-0.57l0.27,-1.54l2.49,-5.15l0.18,-2.08l3.52,-7.19l0.65,-2.51l-0.23,-2.28l-1.88,-1.68l-4.78,-0.54l-0.34,-1.05l5.2,-7.03l1.97,-5.7l1.11,-6.94l2.83,-1.8l1.47,-6.63l2.16,0.46l3.44,0.15l6.45,-2.22l1.6,-0.83l2.7,-0.47l0.69,-0.77l1.71,-0.69l0.65,-1.15l0.48,0.0l3.73,3.83l0.8,0.15l2.52,-1.23l1.2,-1.7l0.0,-0.54l-0.58,-0.55l-3.07,-0.46l-0.4,0.4l0.31,0.6l-0.49,0.29l-1.08,-0.52l-1.03,0.08l-1.13,-1.02l0.1,-0.36l1.44,-0.12l1.98,-1.0l1.4,0.0l1.06,-0.69l1.52,-0.31l2.64,-1.23l2.4,-1.38l0.95,-1.09l0.43,-1.44l0.71,-0.15l0.95,-0.86l0.98,-2.46l-0.18,-1.09l0.31,-0.91l0.0,-1.93l1.54,-1.14l0.49,-1.38l0.12,-2.85l0.74,-1.14l-0.12,-0.78l0.49,-0.68l-0.37,-0.69l0.37,-0.39l0.37,-1.76l0.12,-1.23l-0.3,-0.64l0.54,-0.67l-0.26,-0.44l0.55,-0.69l0.54,0.15l1.32,-1.63l0.31,-1.23l-0.34,-0.49l0.91,-2.03l2.29,-0.15l1.08,-0.86l0.35,-0.67l2.11,-1.17l0.06,-0.84l-0.74,-0.75l0.06,-0.31l1.67,0.15l1.24,1.38l0.8,0.0l1.04,-0.6l1.35,-0.02l0.81,-0.67l1.44,-0.18l0.77,0.31l1.58,-1.19l1.56,1.11l0.52,-0.4l0.58,1.17l1.49,-0.34l0.72,0.18l0.82,-0.62l0.72,0.62l1.29,0.0l0.51,-0.31l0.84,0.23l2.03,-0.69l6.47,-3.38l0.6,0.0l2.29,-1.77l1.7,-0.69l4.27,-5.26l2.38,-2.43l6.68,-4.0l2.72,-2.54l0.48,0.15l0.46,-0.62l1.38,-0.38l0.46,-0.63l-0.75,-0.68l0.97,-0.46l2.54,-2.62l0.81,-0.49l0.58,0.41l0.77,-1.08l0.89,-0.08l0.46,-0.48l-0.12,-1.99l0.71,0.23l2.18,-1.86l-0.04,-0.58l0.28,-0.25l0.35,-0.23l0.6,0.38l0.83,-0.86l-0.25,-1.28l0.71,-0.09l1.26,-1.55l-0.51,-0.75l1.4,0.92l1.11,0.23l0.4,-0.4l0.61,-1.77l0.06,-1.62l-1.26,-1.63l-0.41,-0.08l-0.75,-0.92l-0.52,0.0l0.06,-0.66l0.83,0.62l0.71,-0.63l0.12,-1.0l-1.17,-0.63l0.58,0.03l0.71,-0.94l-1.54,-1.14l1.11,-1.4l0.95,1.01l1.11,-0.15l0.34,-0.34l0.46,0.49l0.68,0.0l0.52,-1.0l1.55,-0.62l1.12,0.54l0.58,-0.49l0.77,0.34l0.88,-0.92l2.14,0.54l0.84,-0.62l0.88,1.15l1.11,0.23l1.01,-0.78l0.12,-0.45l0.89,0.15l1.25,-1.23l1.21,0.08l0.58,-0.92l1.01,0.08l3.99,-1.62l1.18,-1.54l0.68,-0.39l0.54,0.08l1.12,-0.92l0.6,0.08l0.95,-0.94l-0.8,-2.0l1.72,1.17l0.18,1.14l0.4,0.4l0.78,0.0l0.84,0.59l0.8,0.88l-0.12,1.52l0.31,0.54l3.11,3.5l-0.08,0.72l-0.45,0.47l0.28,0.55l-1.97,0.43l-1.44,2.56l-0.37,1.92l0.31,4.54l1.41,2.45l0.18,1.63l1.78,2.26l0.18,0.89l1.01,0.88l-0.4,0.81l1.29,1.37l0.65,1.26l1.03,0.08l0.72,0.89l0.37,1.86l0.49,0.52l-0.18,0.63l0.65,0.96l-0.16,1.19l0.55,2.86l-0.06,1.68l0.31,2.46l0.59,1.58l0.27,3.5l0.68,1.54l2.95,4.15l1.81,2.01l1.0,0.38l-1.21,2.44l-0.25,2.29l-0.92,1.02l0.17,0.88l-0.48,0.58l-0.68,2.76l-0.6,0.83l-0.26,0.18l-0.52,-0.57l-0.28,0.21l-0.46,-0.91l-0.92,0.0l-1.47,0.23l-1.38,1.08l-1.01,0.0l-4.76,3.99l-1.94,0.92l-3.05,3.16l-2.11,1.68l-3.41,3.78l-1.41,2.47l-2.03,2.59l-0.61,1.63l-3.26,5.06l-3.44,4.2l-1.54,3.16l-1.87,-1.11l-0.52,0.48l1.47,1.24l0.37,0.69l-5.96,9.1l-0.31,0.98l-1.29,1.47l0.27,0.44l-0.27,0.77l-1.84,2.77l0.0,0.78l-1.72,2.9l-0.31,1.09l-0.92,0.98l-3.26,5.82l-0.8,2.08l-1.72,2.74l-3.26,7.39l-0.68,0.64l-0.8,2.77l-1.23,1.36l0.25,0.4l-0.61,1.61l-1.78,3.43l-1.23,3.36l-0.37,2.17l-1.35,4.11l-1.35,1.82l0.16,0.5l-0.53,1.35l-0.46,-0.19l-0.4,0.4l-1.11,1.76l-0.43,1.68l0.64,0.62l-0.57,1.86l-0.43,0.49l-1.14,0.76l-0.59,-0.16l-0.48,0.62l-0.77,0.0l-0.58,0.61l-1.26,-0.84l-0.55,0.0l-2.41,1.22l-1.46,-0.31l-3.72,2.29l-2.66,0.23l-1.19,-0.54l-0.71,0.84l-2.12,0.31l-2.04,1.07l-0.35,-0.08l-1.38,0.99l-1.08,-0.15l-3.09,2.22l-2.01,0.61l-4.15,4.58l-1.58,0.53l-0.97,-0.08l-1.2,0.92l-0.89,-0.15l-3.89,2.14l-0.77,0.23l-0.04,-1.05l-2.67,-1.93l-2.95,0.23l-2.04,1.07l-0.78,0.0l-1.84,1.3l-2.98,2.84l-1.72,2.06l0.07,0.31l-2.03,2.85l-9.63,-11.34l-1.92,-0.58l-2.13,1.67l-1.12,1.95l-0.28,2.44l-0.56,1.71l-1.66,1.41l-1.37,-0.07l-5.4,-6.04l-1.99,-1.25l-3.98,-0.2l-8.25,2.01l-2.1,-0.15l-1.95,-1.44l-0.52,-1.81l-2.24,-4.37l0.22,-8.81l1.21,-9.74l-0.81,-4.18ZM747.43,149.99l-0.12,-0.12l0.12,0.0l0.0,0.12ZM747.55,142.0l-0.06,-0.06l0.0,-0.09l0.06,0.06l0.0,0.09ZM747.43,141.78l0.0,-0.01l0.06,0.08l-0.06,-0.06ZM747.43,141.77l-0.06,-0.06l0.0,-0.01l0.06,0.06l0.0,0.01ZM747.31,141.63l-0.12,-0.23l0.06,-0.38l0.12,0.12l-0.06,0.49ZM722.05,121.91l-0.78,-0.98l0.1,-0.48l2.46,-2.1l0.62,-0.77l-0.12,-0.94l0.4,-0.12l0.52,1.76l0.92,0.83l0.06,1.17l1.17,1.02l0.12,1.23l-0.65,0.36l-1.41,-0.47l-0.97,0.62l-0.94,-0.39l-1.35,0.52l-0.56,-0.55l0.41,-0.72Z", "name": "Nabeul"}, "tn-tu": {"path": "M575.35,193.7l1.2,0.41l3.83,2.81l1.51,0.2l1.15,-0.26l0.52,-0.74l2.97,-0.53l4.61,0.29l0.42,-0.42l-0.07,-1.74l1.22,-1.66l2.34,-1.64l0.27,0.0l0.06,2.03l1.11,0.87l2.77,0.1l0.23,-0.23l7.47,0.5l1.71,-2.21l-0.26,-0.68l-0.7,-0.06l-1.01,-0.84l-0.8,-1.57l1.58,-3.99l1.52,-1.3l0.0,-1.44l-1.44,-1.49l-0.33,-2.57l-3.23,-3.21l-2.06,-0.94l-0.68,-1.27l-2.83,-3.18l2.93,3.0l0.79,0.15l3.18,2.23l0.25,0.6l1.14,1.01l1.63,-0.08l1.63,1.23l2.09,0.92l1.78,0.17l0.49,0.52l0.49,-0.37l0.68,0.83l1.01,-0.11l0.43,1.26l-0.92,1.91l0.12,0.69l1.05,1.37l0.12,1.09l1.2,1.17l1.35,1.0l0.32,-0.17l2.44,2.17l1.01,0.54l0.86,1.35l-0.31,0.9l-0.58,-0.14l-1.93,1.01l-0.37,0.7l0.0,1.4l-1.78,1.44l-0.98,1.38l-0.25,0.54l0.18,1.68l-0.46,-0.01l-1.08,1.17l-1.04,2.82l-1.41,1.09l-1.04,1.61l0.0,0.46l1.14,0.72l-0.81,0.54l-1.77,-1.66l-0.45,0.27l-0.59,-0.27l-1.2,0.23l-0.29,-0.67l4.07,-1.9l1.08,-1.01l0.0,-0.61l-0.95,-0.63l-1.7,-0.08l-0.59,-0.42l0.05,-1.18l-0.65,-0.71l-2.27,-1.07l-1.84,-0.15l-1.11,0.54l-1.17,-1.15l-1.65,-0.19l-2.83,1.23l-2.74,-0.02l-1.5,1.44l-2.21,-0.0l-0.95,-0.5l-1.04,-0.0l-3.32,2.44l-1.09,1.08l-1.13,2.01l-0.09,2.81l2.42,4.15l0.92,0.19l0.25,1.34l0.52,0.48l-0.28,0.67l0.65,0.71l1.09,0.15l0.61,0.78l0.26,2.91l-0.32,1.78l-0.55,1.26l-1.52,1.35l-2.43,0.22l-4.38,1.08l-3.11,-0.01l-2.13,-1.07l-2.68,-0.25l-1.77,2.09l-0.64,2.09l-2.87,3.14l-1.77,0.83l-2.84,0.64l-4.13,0.1l-2.84,-0.48l-2.19,-0.84l0.31,-1.84l-1.01,-4.32l-1.52,-2.05l-2.12,-0.49l-2.16,-1.11l-1.87,-6.66l-0.95,-2.37l-3.25,-2.68l0.46,-1.4l1.32,-0.85l2.62,-0.41l0.95,0.89l1.77,0.31l3.55,4.16l3.16,-0.07l1.1,-1.05l0.03,-1.16l-0.89,-1.27l0.18,-0.41l2.18,-1.13l3.02,-0.58l3.35,0.33l0.28,-0.6l-0.31,-1.89l-1.18,-0.97l-0.47,-1.04l2.95,-2.65l1.58,-2.02l1.57,-3.69l0.78,-0.73l3.4,-0.61l0.41,0.17ZM590.4,214.39l0.38,-0.6l-0.18,-1.14l0.0,-0.38l0.18,0.0l0.25,2.07l-0.63,0.04Z", "name": "Tunis"}}, "height": 1954.3544733545057, "projection": {"type": "merc", "centralMeridian": 0.0}, "width": 900.0});

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