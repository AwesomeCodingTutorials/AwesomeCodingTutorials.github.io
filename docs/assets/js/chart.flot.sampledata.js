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
            // Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.


var flotSampleData1 = [
	[0, 52.0372905861701],
	[1, 51.6784633777384],
	[2, 50.93706057748914],
	[3, 55.04861395738878],
	[4, 52.445845968822006],
	[5, 50.93681261537495],
	[6, 55.41621667661467],
	[7, 57.10873028593814],
	[8, 54.09853093352003],
	[9, 57.63062912168092],
	[10, 61.76480188676403],
	[11, 59.58083036192488],
	[12, 63.457788916796034],
	[13, 62.954499198759066],
	[14, 59.19255443449066],
	[15, 61.107062594673295],
	[16, 61.797400811178974],
	[17, 64.60795847250468],
	[18, 64.94400805384853],
	[19, 61.50219489844255],
	[20, 61.93683013860428],
	[21, 62.12178115474478],
	[22, 64.02455260206408],
	[23, 61.58732990833391],
	[24, 63.551262643229364],
	[25, 65.22361572255349],
	[26, 60.441963794914685],
	[27, 64.64029619252607],
	[28, 62.426770751912244],
	[29, 65.57029913775051],
	[30, 63.00164434725933],
	[31, 59.938730316943264],
	[32, 61.21292489988514],
	[33, 65.77130118594573],
	[34, 65.5541721142882],
	[35, 63.93401015856749],
	[36, 67.01353513480325],
	[37, 65.66695461954404],
	[38, 64.11915246645671],
	[39, 60.65295583256223],
	[40, 59.84531890600387],
	[41, 62.84128868653511],
	[42, 62.05109680732927],
	[43, 60.639329151330514],
	[44, 65.27372270996493],
	[45, 65.75252599947375],
	[46, 67.44937748479448],
	[47, 71.85312747921894],
	[48, 71.20453830988976],
	[49, 73.704094626496],
	[50, 72.09874239461732],
	[51, 76.26158453144669],
	[52, 75.11484055938921],
	[53, 71.3184658319678],
	[54, 69.27430732410659],
	[55, 74.11974834063744],
	[56, 70.45309021701111],
	[57, 71.5642128350373],
	[58, 73.77304771466723],
	[59, 72.23324279222032],
	[60, 73.39178539498548],
	[61, 71.07239154046417],
	[62, 72.27891949571499],
	[63, 76.72119426813776],
	[64, 75.00229551979022],
	[65, 73.0935978147839],
	[66, 70.69810340351626],
	[67, 72.05286144835289],
	[68, 72.26298086101808],
	[69, 72.6436242921161],
	[70, 68.41406882360485],
	[71, 69.93434725721592],
	[72, 67.83261787459914],
	[73, 65.9604178593469],
	[74, 66.24812269600427],
	[75, 65.96271498539507],
	[76, 67.30395720979544],
	[77, 71.85328027085012],
	[78, 75.30294246959333],
	[79, 77.08382476806544],
	[80, 74.32981965803775],
	[81, 78.14855029424592],
	[82, 79.24777726499396],
	[83, 74.56684531031232],
	[84, 77.5645488122174],
	[85, 81.07429461477984],
	[86, 84.82578743840715],
	[87, 85.74869992672912],
	[88, 90.25008494594036],
	[89, 87.46803318760058],
	[90, 89.44662570313793],
	[91, 90.59202152961588],
	[92, 87.74638816118593],
	[93, 90.73036160804772],
	[94, 89.96736529325918],
	[95, 90.98255637520919],
	[96, 93.62173197144477],
	[97, 90.21433255298969],
	[98, 90.94677353162982],
	[99, 95.89555582498052],
	[100, 94.69882355905038]
];
var flotSampleData2 = [
	[0, 49.331065063219285],
	[1, 48.79814898366035],
	[2, 50.61793547911337],
	[3, 53.31696317779434],
	[4, 54.78560952831719],
	[5, 53.84293992505776],
	[6, 54.682958355082874],
	[7, 56.742547193381654],
	[8, 56.99677491680908],
	[9, 56.144488388681445],
	[10, 56.567122269843885],
	[11, 60.355022877262684],
	[12, 58.7457726121753],
	[13, 61.445407102315514],
	[14, 61.112870581452086],
	[15, 58.57202276349258],
	[16, 54.72497594269612],
	[17, 52.070341498681124],
	[18, 51.09867716530438],
	[19, 47.48185519192089],
	[20, 48.57861168097493],
	[21, 48.99789250679436],
	[22, 53.582491800119456],
	[23, 50.28407438696142],
	[24, 46.24606628705599],
	[25, 48.614330310543856],
	[26, 51.75313497797672],
	[27, 51.34463925296746],
	[28, 50.217320673443936],
	[29, 54.657281647073304],
	[30, 52.445057217757245],
	[31, 53.063914668561345],
	[32, 57.07494250387825],
	[33, 52.970403392565515],
	[34, 48.723854145068756],
	[35, 52.69064629353968],
	[36, 53.590890118378205],
	[37, 58.52332126105745],
	[38, 55.1037709679581],
	[39, 58.05347017020425],
	[40, 61.350810521199946],
	[41, 57.746188675088575],
	[42, 60.276910973029786],
	[43, 61.00841651851749],
	[44, 57.786733623457636],
	[45, 56.805721677811356],
	[46, 58.90301959619822],
	[47, 62.45091969566289],
	[48, 58.75007922945926],
	[49, 58.405842466185355],
	[50, 56.746633122658444],
	[51, 52.76631598845634],
	[52, 52.3020769891715],
	[53, 50.56370473325533],
	[54, 55.407205992344544],
	[55, 50.49825590435839],
	[56, 52.4975614755482],
	[57, 48.79614749316488],
	[58, 47.46776704767111],
	[59, 43.317880548036456],
	[60, 38.96296121124144],
	[61, 34.73218432559628],
	[62, 31.033700732272116],
	[63, 32.637987000382296],
	[64, 36.89513637594264],
	[65, 35.89701755609185],
	[66, 32.742284578187544],
	[67, 33.20516407297906],
	[68, 30.82094321791933],
	[69, 28.64770271525896],
	[70, 28.44679026902145],
	[71, 27.737654438195236],
	[72, 27.755190738237744],
	[73, 25.96228929938593],
	[74, 24.38197394166947],
	[75, 21.95038772723346],
	[76, 22.08944448751686],
	[77, 23.54611335622507],
	[78, 27.309610481106425],
	[79, 30.276849322378055],
	[80, 27.25409223418214],
	[81, 29.920374921780102],
	[82, 25.143447932376702],
	[83, 23.09444253479626],
	[84, 23.79459089729409],
	[85, 23.46775072519832],
	[86, 27.9908486073969],
	[87, 23.218855925354447],
	[88, 23.9163141686872],
	[89, 19.217667423877607],
	[90, 15.135179958932145],
	[91, 15.08666008920407],
	[92, 11.006269617032526],
	[93, 9.201671310476282],
	[94, 7.475865090236113],
	[95, 11.645754524211824],
	[96, 15.76161040821357],
	[97, 13.995208323029495],
	[98, 12.59338056489445],
	[99, 13.536707176236195],
	[100, 15.01308268888571],
	[101, 13.957161242832626],
	[102, 13.237091619700053],
	[103, 18.10178875669874],
	[104, 20.634765519499563],
	[105, 21.064946755449817],
	[106, 25.370593801826132],
	[107, 25.321453557866203],
	[108, 20.947464543531186],
	[109, 18.750516645477425],
	[110, 15.382042945356737],
	[111, 14.569147793065632],
	[112, 17.949159188821604],
	[113, 15.965876707018058],
	[114, 16.359355082317443],
	[115, 14.163139419453657],
	[116, 12.106761506858124],
	[117, 14.843319717588216],
	[118, 17.24291158460492],
	[119, 17.799018581487058],
	[120, 14.038359368301329],
	[121, 18.658227817264983],
	[122, 18.463689935573676],
	[123, 22.687619584142652],
	[124, 25.088957744790036],
	[125, 28.184893996099582],
	[126, 28.03276492115397],
	[127, 24.11167758305713],
	[128, 24.28007484247854],
	[129, 28.23487421795626],
	[130, 26.246971673504287],
	[131, 29.330939820784877],
	[132, 26.07749855928238],
	[133, 23.921786397788168],
	[134, 28.825012181053275],
	[135, 25.140449169947626],
	[136, 21.79048000172746],
	[137, 23.05414699421924],
	[138, 20.712904460250886],
	[139, 19.727388210287337],
	[140, 15.219713454550508],
	[141, 16.567062865467058],
	[142, 21.46105146001275],
	[143, 24.699736621958863],
	[144, 20.05510726036824],
	[145, 16.200669070105356],
	[146, 16.938945414022744],
	[147, 15.50411643355061],
	[148, 14.788500646665874],
	[149, 16.97330575970296]
];
var flotSampleData3 = [
	[0, 36.57749563156254],
	[1, 38.990117798360984],
	[2, 42.33951429212372],
	[3, 41.81299261981016],
	[4, 37.43049180497279],
	[5, 32.50742948537699],
	[6, 28.15321230561721],
	[7, 24.734038382708317],
	[8, 23.48248771261796],
	[9, 20.406002456692214],
	[10, 16.59886277727973],
	[11, 12.156859927914581],
	[12, 9.229765251904174],
	[13, 5.183401848384374],
	[14, 9.605706708466142],
	[15, 10.832074796645134],
	[16, 13.268792742800557],
	[17, 18.216203428328363],
	[18, 13.963666987062208],
	[19, 18.712081450016612],
	[20, 13.72401606510321],
	[21, 11.305095416130975],
	[22, 13.773906992422056],
	[23, 15.834031310396583],
	[24, 12.926545228583812],
	[25, 17.595569228566347],
	[26, 21.90850212276817],
	[27, 18.29990271583387],
	[28, 14.340994854410802],
	[29, 18.22389641710976],
	[30, 14.883609800856053],
	[31, 13.019139849150623],
	[32, 14.553083951054631],
	[33, 15.417025583778472],
	[34, 16.640872368623782],
	[35, 19.456813236353057],
	[36, 14.595960349995135],
	[37, 17.729784515799526],
	[38, 13.86824197051369],
	[39, 9.492952801660538],
	[40, 11.912479814449945],
	[41, 9.798782954230068],
	[42, 6.117552232900492],
	[43, 1.4130313413037507],
	[44, 2.3640186232524685],
	[45, 2.3620174492590778],
	[46, 4.523611468529182],
	[47, 3.7627065666017216],
	[48, 5.7686167365911043],
	[49, 5.08594242151745846],
	[50, 1.905264426860338],
	[51, 8.27642052341136036],
	[52, 7.9183672429606382],
	[53, 5.027341617316905],
	[54, 2.8449308083068967],
	[55, 6.827661569105635],
	[56, 6.215632967625112],
	[57, 9.831855054294463],
	[58, 9.393752601741996],
	[59, 11.962549642491954],
	[60, 10.01016629019579],
	[61, 9.03698508678906],
	[62, 6.053332776990388],
	[63, 4.56216961329746],
	[64, 2.7601184969979364],
	[65, 4.345620131013858],
	[66, 3.6626759042117385],
	[67, 4.27936456640813],
	[68, 2.0166954203189142],
	[69, 1.4881023513956224],
	[70, 3.7196511214339196],
	[71, 1.5333390837655454],
	[72, 5.780072548768565],
	[73, 4.904719814229008],
	[74, 1.0799012554825165],
	[75, 4.72338119051706],
	[76, 6.314725021867233],
	[77, 4.277597816664166],
	[78, 5.1544567140954225],
	[79, 5.239845249502064],
	[80, 3.877879174711641],
	[81, 8.225872226683242],
	[82, 7.264487465012946],
	[83, 6.504325850409032],
	[84, 1.7088839316517497],
	[85, 11.49433994707275364],
	[86, 10.5002886069980867],
	[87, 3.8186248032905223],
	[88, 4.790166662214078],
	[89, 8.584014466610698],
	[90, 10.231484497623207],
	[91, 11.085662593015236],
	[92, 15.692957864072707],
	[93, 19.729820239992353],
	[94, 18.14728404932766],
	[95, 13.557879905430191],
	[96, 12.0222003194338],
	[97, 7.527743748664358],
	[98, 3.7125580070986235],
	[99, 9.7561429229810717],
	[100, 9.24510598794585],
	[101, 13.491288627936356],
	[102, 18.422574259759138],
	[103, 22.48813237262491],
	[104, 18.7617308169055],
	[105, 15.200987690731651],
	[106, 14.567673790440317],
	[107, 14.493364129654488],
	[108, 12.06862995100759],
	[109, 13.792354597964184],
	[110, 13.398123710429495],
	[111, 15.43357006142243],
	[112, 15.838711304223441],
	[113, 17.717113116366015],
	[114, 14.363451521168152],
	[115, 10.632076034419065],
	[116, 12.704986280918988],
	[117, 14.730515775966076],
	[118, 18.64339616589121],
	[119, 22.966268490839116],
	[120, 18.086847938929818],
	[121, 22.85442941807395],
	[122, 23.862425058129165],
	[123, 27.15039006269054],
	[124, 24.7853194960341],
	[125, 20.05439683907793],
	[126, 22.789014412927482],
	[127, 20.999064905231663],
	[128, 16.665833423656743],
	[129, 15.119579474719686],
	[130, 13.122059029397477],
	[131, 10.758963293991616],
	[132, 11.409391406435187],
	[133, 13.187657409342435],
	[134, 10.191416382864197],
	[135, 9.299880450312266],
	[136, 9.200558705463123],
	[137, 10.3761519864489],
	[138, 15.201427613560849],
	[139, 12.563611410586677],
	[140, 14.01025663372129],
	[141, 18.218049208936158],
	[142, 16.36071205382429],
	[143, 17.780867922487836],
	[144, 18.918372217382256],
	[145, 15.30583162112299],
	[146, 18.133034345626925],
	[147, 16.378646720850767],
	[148, 14.835942770608781],
	[149, 10.041195447639177]
];
var flotSampleData4 = [
	[0, 53.08330533680049],
	[1, 50.33339517545416],
	[2, 49.4029746664779],
	[3, 47.791939081203566],
	[4, 49.09471219192674],
	[5, 50.66529743518582],
	[6, 48.749718825997206],
	[7, 48.84333276982059],
	[8, 53.51394720398375],
	[9, 52.93467940905747],
	[10, 49.083909652316756],
	[11, 50.27480737843102],
	[12, 48.37957308101624],
	[13, 44.84022012471776],
	[14, 40.71830916489318],
	[15, 41.24962375997834],
	[16, 45.63889630450356],
	[17, 44.66117259629492],
	[18, 41.393918522372914],
	[19, 38.20495807999945],
	[20, 39.68970488580452],
	[21, 41.02366924388095],
	[22, 39.41137193753915],
	[23, 35.66049049363585],
	[24, 38.5316402746093],
	[25, 38.536952802123125],
	[26, 40.69853423533536],
	[27, 38.79970643855877],
	[28, 42.98845795943349],
	[29, 46.360136088412915],
	[30, 43.5528691841886],
	[31, 40.65605934650181],
	[32, 36.5040222131244],
	[33, 31.79517009935011],
	[34, 28.913911507798105],
	[35, 29.681580006957674],
	[36, 29.57017024157237],
	[37, 33.13695968240512],
	[38, 37.084637076369454],
	[39, 35.86922272605444],
	[40, 37.60007436604805],
	[41, 39.6599902960551],
	[42, 39.01855935146662],
	[43, 34.101066517369006],
	[44, 37.486228204869676],
	[45, 39.29733687111992],
	[46, 38.46411897069526],
	[47, 37.71927995665536],
	[48, 40.15208911247334],
	[49, 35.897096450476575],
	[50, 31.505997358944384],
	[51, 31.816999110802946],
	[52, 30.50460962834996],
	[53, 25.741310049337464],
	[54, 28.23602445151448],
	[55, 28.48317685385772],
	[56, 30.001070495921475],
	[57, 32.164958534602505],
	[58, 32.99295659942683],
	[59, 37.68193430054417],
	[60, 35.24212764591677],
	[61, 39.18772362995824],
	[62, 41.376347845481895],
	[63, 41.45950716612605],
	[64, 43.78985456358012],
	[65, 39.416694565047884],
	[66, 39.32972776309515],
	[67, 43.80480524720717],
	[68, 42.434410137245514],
	[69, 43.67300580223356],
	[70, 38.79887604059381],
	[71, 43.570128406921526],
	[72, 41.81988828932836],
	[73, 44.829528785933896],
	[74, 46.19223595854988],
	[75, 47.69550173883899],
	[76, 49.010522215031536],
	[77, 46.40480781018069],
	[78, 51.28051836395483],
	[79, 50.158430192052556],
	[80, 53.60466613842059],
	[81, 56.08734803007076],
	[82, 52.72459300615355],
	[83, 56.601951946760394],
	[84, 60.26245067204903],
	[85, 58.36945168202019],
	[86, 56.59491823723127],
	[87, 55.755294545253776],
	[88, 54.74810139653445],
	[89, 54.27203682664068],
	[90, 58.659985887413185],
	[91, 57.00658547275452],
	[92, 60.52029839853601],
	[93, 57.6015284629649],
	[94, 56.48890586246457],
	[95, 55.10455188969404],
	[96, 54.357265081931686],
	[97, 52.394359471010326],
	[98, 54.52899302331695],
	[99, 54.16762513026156],
	[100, 51.95657669321307],
	[101, 51.19677107897459],
	[102, 46.35100350085707],
	[103, 48.33623433000422],
	[104, 45.84986413510889],
	[105, 48.22054173701362],
	[106, 43.30402458869659],
	[107, 45.823705773087944],
	[108, 43.48498341409474],
	[109, 41.32116785138174],
	[110, 40.99342590634263],
	[111, 38.496913606221845],
	[112, 40.10010461807938],
	[113, 44.861885054292394],
	[114, 44.03401133327108],
	[115, 41.41251651321317],
	[116, 37.800397369625514],
	[117, 39.295001424962734],
	[118, 35.24310363081255],
	[119, 32.125154958611844],
	[120, 35.68772234352005],
	[121, 38.00169527592055],
	[122, 37.960866448524754],
	[123, 38.702527394097245],
	[124, 37.457771477588224],
	[125, 37.51129389195443],
	[126, 33.108727543689724],
	[127, 35.09710598798716],
	[128, 33.11742126933996],
	[129, 31.873922447406848],
	[130, 29.18642792871095],
	[131, 31.91579925678714],
	[132, 34.370661166914054],
	[133, 32.91433174216821],
	[134, 33.17197835246117],
	[135, 37.16446574836367],
	[136, 32.60291809386715],
	[137, 36.94627368938524],
	[138, 35.9869296328639],
	[139, 38.12898104938889],
	[140, 42.55368007736426],
	[141, 41.57493569939069],
	[142, 45.54394197350075],
	[143, 46.30674824728742],
	[144, 45.73213644396193],
	[145, 45.42768540578047],
	[146, 42.52964420434585],
	[147, 44.44398524408891],
	[148, 39.74894644038498],
	[149, 44.71669577260144]
];
var flotSampleData5 = [
	[0, 48.11708650372481],
	[1, 44.83834104995953],
	[2, 45.727409628208974],
	[3, 44.69213146554142],
	[4, 44.92113232835135],
	[5, 44.200874587557415],
	[6, 41.750527715312444],
	[7, 44.84511185791557],
	[8, 46.04672992189592],
	[9, 45.9480092098883],
	[10, 46.9249480823427],
	[11, 43.600609487921346],
	[12, 40.29988975207692],
	[13, 42.03310106988357],
	[14, 39.457750445961125],
	[15, 40.540159797957294],
	[16, 37.277912393740806],
	[17, 41.43887402339309],
	[18, 39.47430428214318],
	[19, 36.91189415889479],
	[20, 36.42847097453014],
	[21, 36.96844325047937],
	[22, 35.54647151074562],
	[23, 32.998974290143025],
	[24, 30.43526314490385],
	[25, 31.14797888879888],
	[26, 27.20589032036549],
	[27, 25.777592542626508],
	[28, 30.052675048145275],
	[29, 30.92837408600937],
	[30, 34.190241658736014],
	[31, 37.57718922878679],
	[32, 41.18083316913268],
	[33, 41.27110666976231],
	[34, 36.33819281943194],
	[35, 37.39239238651191],
	[36, 37.046485292242615],
	[37, 34.594801853250495],
	[38, 31.488044618299227],
	[39, 34.69970813498227],
	[40, 39.66083111892072],
	[41, 40.203292838001616],
	[42, 36.089709320758985],
	[43, 40.31141091738469],
	[44, 44.170004784953846],
	[45, 48.84998014705778],
	[46, 43.93624560052546],
	[47, 40.62473022491363],
	[48, 39.154068738786684],
	[49, 42.803089612673666],
	[50, 40.6511024461858],
	[51, 38.34516630158569],
	[52, 39.546885205159555],
	[53, 42.50715860274628],
	[54, 38.1455129028495],
	[55, 33.87761157196474],
	[56, 37.30125615378047],
	[57, 38.799409423316405],
	[58, 39.185431079286275],
	[59, 43.32737024276462],
	[60, 41.52185070435002],
	[61, 41.613587244137946],
	[62, 44.23763577861365],
	[63, 44.91439321362589],
	[64, 42.18546432611939],
	[65, 41.0624926886062],
	[66, 44.24453261527582],
	[67, 47.34794952778721],
	[68, 48.10833243543891],
	[69, 43.640893412371504],
	[70, 40.614056030997666],
	[71, 42.9374730102888],
	[72, 46.1355421298619],
	[73, 48.995759760197956],
	[74, 52.19926195857424],
	[75, 49.2778849176981],
	[76, 52.46274689069702],
	[77, 56.74969793098863],
	[78, 60.92623317241021],
	[79, 57.70969775380601],
	[80, 57.35168105637668],
	[81, 59.39818648636745],
	[82, 58.87944453401413],
	[83, 63.104976246068674],
	[84, 60.16160410107729],
	[85, 60.3461385910513],
	[86, 63.41836851069141],
	[87, 58.881150853965565],
	[88, 54.25129328569841],
	[89, 49.66170902762076],
	[90, 45.671308451937406],
	[91, 43.42038067966773],
	[92, 46.505793156464286],
	[93, 46.06001872195206],
	[94, 50.91335602988896],
	[95, 46.84735026131701],
	[96, 47.41734754711108],
	[97, 44.36126529495156],
	[98, 41.99470503666513],
	[99, 43.632976322955784],
	[100, 46.36805334166653],
	[101, 48.16660610657209],
	[102, 50.56661518795267],
	[103, 47.20511080729683],
	[104, 51.57928093061832],
	[105, 46.82629992437289],
	[106, 43.71656947498538],
	[107, 46.11727847268647],
	[108, 46.239411607006936],
	[109, 41.99170406788848],
	[110, 44.59078988734815],
	[111, 39.99864995462555],
	[112, 39.59607991752385],
	[113, 40.86135028690851],
	[114, 39.81036719656035],
	[115, 40.328012974674394],
	[116, 41.65325716849331],
	[117, 45.00093543523572],
	[118, 46.04624698953661],
	[119, 48.003663497054745],
	[120, 50.17606274884235],
	[121, 55.05679484483894],
	[122, 55.96838640846091],
	[123, 55.544955954661],
	[124, 54.84832728252716],
	[125, 52.55313725959578],
	[126, 49.91965607013097],
	[127, 54.037850934955415],
	[128, 57.10789770988697],
	[129, 58.48651605604872],
	[130, 60.7485271818432],
	[131, 65.34376786732726],
	[132, 67.43791704755618],
	[133, 62.787033615491154],
	[134, 65.01110323823873],
	[135, 66.76229363100968],
	[136, 68.37430484004857],
	[137, 71.70168521356638],
	[138, 68.57137402747702],
	[139, 67.39836039140941],
	[140, 70.31406498879772],
	[141, 70.32681376237582],
	[142, 69.44430239433778],
	[143, 68.41358873180461],
	[144, 72.61057980411566],
	[145, 70.04463291270768],
	[146, 70.28596044322113],
	[147, 65.6023891614268],
	[148, 67.46401070074405],
	[149, 62.80776411813089]
];
var flotSampleData6 = [
	[0, 52.0372905861701],
	[1, 51.6784633777384],
	[2, 50.93706057748914],
	[3, 55.04861395738878],
	[4, 52.445845968822006],
	[5, 50.93681261537495],
	[6, 55.41621667661467],
	[7, 57.10873028593814],
	[8, 54.09853093352003],
	[9, 57.63062912168092],
	[10, 61.76480188676403],
	[11, 59.58083036192488],
	[12, 63.457788916796034],
	[13, 62.954499198759066],
	[14, 59.19255443449066],
	[15, 71.107062594673295],
	[16, 71.797400811178974],
	[17, 74.60795847250468],
	[18, 64.94400805384853],
	[19, 61.50219489844255],
	[20, 61.93683013860428],
	[21, 42.12178115474478],
	[22, 44.02455260206408],
	[23, 41.58732990833391],
	[24, 63.551262643229364],
	[25, 65.22361572255349],
	[26, 60.441963794914685],
	[27, 64.64029619252607],
	[28, 62.426770751912244],
	[29, 65.57029913775051]
];
var flotSampleData7 = [
	[0, 49.94286358017402],
	[1, 54.75195271853288],
	[2, 59.622053296327735],
	[3, 60.738689215257594],
	[4, 56.70698194695498],
	[5, 57.52045722160073],
	[6, 55.4934878455616],
	[7, 58.43501666521898],
	[8, 57.525488680182036],
	[9, 55.80777569057727],
	[10, 53.682652257555645],
	[11, 54.81436164727582],
	[12, 55.59622041652305],
	[13, 56.550206500228064],
	[14, 58.12076521746503],
	[15, 59.03652643269743],
	[16, 62.50683301850617],
	[17, 59.48044106699237],
	[18, 60.22405802611539],
	[19, 55.75619342134348],
	[20, 54.27524732322225],
	[21, 49.460602930912856],
	[22, 47.34020893802209],
	[23, 50.1570575505057],
	[24, 49.823374599769124],
	[25, 50.42642956481375],
	[26, 53.119011480591055],
	[27, 54.465212016350385],
	[28, 51.37591924922336],
	[29, 49.66602279516306]
];
var flotSampleData8 = [
	[0, 51.35337906430415],
	[1, 55.09767736474683],
	[2, 56.11713418071085],
	[3, 56.62830445362504],
	[4, 58.374859207924956],
	[5, 62.842829855606894],
	[6, 63.69291962857514],
	[7, 60.69251163731542],
	[8, 61.650299044110085],
	[9, 64.06410201262507],
	[10, 67.43880456193354],
	[11, 70.2095435826324],
	[12, 73.01907211149363],
	[13, 75.305867265774],
	[14, 73.15232973097093],
	[15, 75.67663616265044],
	[16, 77.50025675637558],
	[17, 74.56982822506586],
	[18, 78.22708826685283],
	[19, 75.88418124127114],
	[20, 78.96304160187246],
	[21, 83.19746269424613],
	[22, 81.99514960164132],
	[23, 80.34748479228385],
	[24, 83.01785617267964],
	[25, 80.47961270294873],
	[26, 81.43180744942623],
	[27, 80.54908115981],
	[28, 80.89790184638714],
	[29, 82.57585847055765]
];
var flotSampleData9 = [
	[0, 51.99566242992652],
	[1, 56.40988734156261],
	[2, 52.712016949483605],
	[3, 52.13903665420402],
	[4, 55.38856697356215],
	[5, 56.51241090203006],
	[6, 54.13065859506406],
	[7, 54.52096980767574],
	[8, 58.778974107485055],
	[9, 55.51439929034389],
	[10, 56.957814217917],
	[11, 57.61073578735697],
	[12, 59.7297766750641],
	[13, 61.93295319184848],
	[14, 62.50241769531192],
	[15, 60.542234578733925],
	[16, 58.29300184711166],
	[17, 55.342699297074184],
	[18, 58.10368017734648],
	[19, 55.992767202287844],
	[20, 59.85513950723005],
	[21, 55.06877119665919],
	[22, 54.32937925983862],
	[23, 55.85921051952968],
	[24, 55.51272173544296],
	[25, 53.28302387501565],
	[26, 49.99125994698088],
	[27, 45.20738945047653],
	[28, 46.435525588283454],
	[29, 41.869140235144116]
];
var flotSampleData10 = [
	[0, 56.30265026531465],
	[1, 54.65369685879262],
	[2, 59.159497004318396],
	[3, 61.52890228654445],
	[4, 65.42115864654912],
	[5, 70.17659339534826],
	[6, 73.96323073101196],
	[7, 74.9799695221578],
	[8, 73.44264143602075],
	[9, 69.096593751918],
	[10, 73.93254876657517],
	[11, 69.04685379865136],
	[12, 73.34743744019225],
	[13, 77.32268965816827],
	[14, 72.32758104850645],
	[15, 75.74676439307586],
	[16, 71.02133074957086],
	[17, 69.1420714301864],
	[18, 67.38421380482295],
	[19, 68.25200534621919],
	[20, 67.64452676952739],
	[21, 66.86973130150578],
	[22, 61.93648092979845],
	[23, 58.61497756300247],
	[24, 56.55146918091553],
	[25, 53.029935488894246],
	[26, 52.44600163135212],
	[27, 57.20889655681769],
	[28, 59.636191788043945],
	[29, 63.85312806354426],
	[30, 60.04386094475659],
	[31, 62.2538125564533],
	[32, 64.59204959205982],
	[33, 67.48303315626455],
	[34, 66.52279556782956],
	[35, 67.91455924692552],
	[36, 71.05638683697502],
	[37, 66.72457618335497],
	[38, 64.2368446398455],
	[39, 62.57701362369215],
	[40, 66.34915956039481],
	[41, 65.92124496694505],
	[42, 62.80711501850641],
	[43, 66.7197967332439],
	[44, 63.3010169282898],
	[45, 66.65701148334526],
	[46, 64.17648367224142],
	[47, 65.59358408684454],
	[48, 69.01887774539038],
	[49, 65.5916290145015],
	[50, 69.30622431045381],
	[51, 65.36388366769279],
	[52, 68.85971422470584],
	[53, 73.43083746573741],
	[54, 71.7164115189851],
	[55, 71.36090147065387],
	[56, 75.60606020386383],
	[57, 77.09189207721045],
	[58, 81.79401314743293],
	[59, 79.0135714357103],
	[60, 76.06480727464617],
	[61, 74.7692576621101],
	[62, 75.6074434905874],
	[63, 76.0736128539269],
	[64, 78.06361318915312],
	[65, 81.74368470683947],
	[66, 82.9328380240206],
	[67, 87.85966921603924],
	[68, 85.23106037681157],
	[69, 82.11378075638285],
	[70, 82.01651870800575],
	[71, 77.0287988653718],
	[72, 80.34970120412052],
	[73, 84.61941727966564],
	[74, 83.98199644857034],
	[75, 88.56888111947441],
	[76, 89.75548290328453],
	[77, 88.80767166533053],
	[78, 83.85630479076563],
	[79, 87.83276509161898],
	[80, 85.55774605623898],
	[81, 85.70223088952179],
	[82, 90.33890157972317],
	[83, 92.69926264237287],
	[84, 97.63201173326506],
	[85, 80],
	[86, 82.45304715092216],
	[87, 81.64397094909111],
	[88, 84.19735416169136],
	[89, 85.71802570566479],
	[90, 90.63845353334818],
	[91, 91.50786669397307],
	[92, 90.18513939708971],
	[93, 89.11333767424885],
	[94, 86.13169895547603],
	[95, 83.71642685988863],
	[96, 82.53308667208871],
	[97, 87.03202111687101],
	[98, 85.80275250512847],
	[99, 87.50661490640158],
	[100, 82.94568964820422],
	[101, 87.9133760526002],
	[102, 86.3911423200192],
	[103, 83.79442454428464],
	[104, 84.61901232577792],
	[105, 80.55092396236854],
	[106, 79.514769277758],
	[107, 78.30133774514849],
	[108, 76.12798140610029],
	[109, 79.01711099389404],
	[110, 74.76408790118617],
	[111, 77.44087400934131],
	[112, 78.260017083701],
	[113, 80.86067605373901],
	[114, 77.42886467363506],
	[115, 77.78073925389896],
	[116, 76.08468600523165],
	[117, 75.58351138198233],
	[118, 76.99163028653041],
	[119, 76.28846074258988],
	[120, 71.78398785201554],
	[121, 75.60986394070363],
	[122, 71.26195146607357],
	[123, 73.47598268366161],
	[124, 71.6907716935556],
	[125, 72.73874358328845],
	[126, 73.86356688134639],
	[127, 73.7770525507534],
	[128, 75.5682997869134],
	[129, 73.1630845932067],
	[130, 77.27828980131197],
	[131, 76.32774748166499],
	[132, 71.6304650335553],
	[133, 76.001962543172],
	[134, 71.2306864813009],
	[135, 67.7809120535992],
	[136, 69.93749142887862],
	[137, 65.21786790574946],
	[138, 61.86750668240158],
	[139, 58.998337266110376],
	[140, 59.53982536229391],
	[141, 55.64390968002628],
	[142, 57.45505304780762],
	[143, 58.588511338448896],
	[144, 60.938984927001556],
	[145, 64.52543413478776],
	[146, 61.744812501883445],
	[147, 63.90888496784042],
	[148, 68.83286359079715],
	[149, 71.22144807517391]
];
var flotSampleData11 = [
	[0, 40.42460652446133],
	[1, 39.746131861430484],
	[2, 35.95109348595284],
	[3, 33.295567798337025],
	[4, 28.87960054374564],
	[5, 28.498853797438535],
	[6, 24.44598918395687],
	[7, 20.218403695742982],
	[8, 17.498233218421312],
	[9, 16.54060961040485],
	[10, 19.002383747980975],
	[11, 16.471725580977914],
	[12, 13.155182881964787],
	[13, 18.077483369454345],
	[14, 17.938434631237822],
	[15, 18.92413124205944],
	[16, 18.461208995002494],
	[17, 19.661876313219913],
	[18, 18.042303047352455],
	[19, 17.785290125636354],
	[20, 20.151980264909543],
	[21, 18.924923650083358],
	[22, 17.088923942341232],
	[23, 17.11745721938192],
	[24, 15.703502004647063],
	[25, 15.078540825575075],
	[26, 14.510809401000387],
	[27, 15.226574724712297],
	[28, 18.01709489679379],
	[29, 19.770761552221565],
	[30, 23.670209769802682],
	[31, 27.985742905483164],
	[32, 30.80634374024116],
	[33, 28.56215635604935],
	[34, 29.459971127621614],
	[35, 29.506514532069936],
	[36, 27.289754685028775],
	[37, 24.365568424856836],
	[38, 22.893664052525622],
	[39, 26.57527073377395],
	[40, 28.04483981176638],
	[41, 27.77031588135324],
	[42, 30.245343380918406],
	[43, 26.57479109054868],
	[44, 22.18111812493286],
	[45, 19.644777576179102],
	[46, 16.745896664550347],
	[47, 17.213789404459703],
	[48, 20.056299583848645],
	[49, 16.133489834808596],
	[50, 12.954908672170685],
	[51, 10.710124578123633],
	[52, 7.99331653229623],
	[53, 11.330824794029468],
	[54, 15.366888531658518],
	[55, 20.162146683566043],
	[56, 22.56433862111984],
	[57, 19.342499731952728],
	[58, 18.325580989588303],
	[59, 20.7511874504748],
	[60, 17.099488390174667],
	[61, 19.327912207799372],
	[62, 18.31650048764758],
	[63, 14.34889182281918],
	[64, 9.939606691311928],
	[65, 10.640765261408266],
	[66, 6.184018402150329],
	[67, 10.32603369640253],
	[68, 12.800228260925913],
	[69, 13.441825186707572],
	[70, 18.356807970216398],
	[71, 22.877870826719246],
	[72, 22.265182194135164],
	[73, 26.922230352208814],
	[74, 22.50189449417149],
	[75, 18.14060836488997],
	[76, 19.06846754782137],
	[77, 19.73961245162804],
	[78, 18.82061647678131],
	[79, 23.33852310774632],
	[80, 20.4810751737507],
	[81, 25.47004674625981],
	[82, 28.842343230667943],
	[83, 29.09658130355575],
	[84, 27.714558649179516],
	[85, 25.220943394214757],
	[86, 25.43025835749838],
	[87, 24.13072502126257],
	[88, 20.020443915879174],
	[89, 18.387986699568284],
	[90, 18.307930265812836],
	[91, 18.72058117598284],
	[92, 22.46850401457292],
	[93, 21.718447234477544],
	[94, 26.488413058421976],
	[95, 29.882771503348536],
	[96, 26.94717052753741],
	[97, 28.06481155716483],
	[98, 30.40253552214977],
	[99, 28.987765656899995],
	[100, 30.13551373541587],
	[101, 27.605418583328863],
	[102, 30.214101672191696],
	[103, 26.88133118194294],
	[104, 25.727723710013045],
	[105, 28.279900485071032],
	[106, 27.89821646957165],
	[107, 30.69854959893513],
	[108, 31.4282872565538],
	[109, 36.14975119379828],
	[110, 32.0227980362552],
	[111, 27.309945041337073],
	[112, 29.51230564564233],
	[113, 32.67035607222466],
	[114, 28.82372957289023],
	[115, 28.85242847072152],
	[116, 29.63844624105993],
	[117, 29.157219655397313],
	[118, 27.90616896335908],
	[119, 30.71160984027734],
	[120, 28.026131698214115],
	[121, 23.82439628518755],
	[122, 18.83160453591808],
	[123, 14.487027404093734],
	[124, 11.761696821209515],
	[125, 12.758521331246762],
	[126, 11.367219794014758],
	[127, 14.21423733022224],
	[128, 11.602480291802959],
	[129, 15.244397384751025],
	[130, 13.050114582189945],
	[131, 17.253378403411432],
	[132, 18.506683542934038],
	[133, 23.04087000728893],
	[134, 21.87625260158983],
	[135, 25.974296957094985],
	[136, 22.463388750666468],
	[137, 17.675052230498956],
	[138, 14.806456821972226],
	[139, 18.589538541056534],
	[140, 20.005874168046084],
	[141, 22.934846222699328],
	[142, 25.155316598067426],
	[143, 27.883126867602705],
	[144, 27.76231130416712],
	[145, 28.618896779193612],
	[146, 26.413595554645298],
	[147, 28.097785659338193],
	[148, 29.502272077881898],
	[149, 26.1165859635503]
];

var dashData2 = [
  [0,27.23664159018842],
  [1,29.950034069379143],
  [2,29.644830736016026],
  [3,25.769612795319304],
  [4,25.9672980159902],
  [5,29.306231062193945],
  [6,31.147632883383046],
  [7,27.909654447655207],
  [8,28.426864707429758],
  [9,25.465005080095395],
  [10,23.200993777812627],
  [11,18.298423899495088],
  [12,14.064190975238525],
  [13,12.756500849206802],
  [14,11.009698256259721],
  [15,13.777021847639084],
  [16,9.764516822388899],
  [17,12.692252142103655],
  [18,10.993546294133743],
  [19,12.76637263741139],
  [20,13.843200048454541],
  [21,12.99710730408541],
  [22,13.822031388180491],
  [23,10.292515338153533],
  [24,5.810285403597657],
  [25,7.660875205768917],
  [26,8.80933653938396],
  [27,5.686812232232839],
  [28,5.63261704703088],
  [29,6.316648245814662],
  [30,4.292790984709081],
  [31,3.697685557314916],
  [32,5.455501325916567],
  [33,6.531394786185377],
  [34,8.182002901837398],
  [35,10.97985605046474],
  [36,7.670515545499569],
  [37,9.735460695108053],
  [38,10.953255620842702],
  [39,9.507118597321119],
  [40,5.406694867279592],
  [41,4.93085440378951],
  [42,0.7194264766862029],
  [43,2.3619348017672],
  [44,5.584661939154044],
  [45,10.081512479626763],
  [46,10.688764814852894],
  [47,8.312501373210273],
  [48,8.453461343329785],
  [49,8.544757446852685],
  [50,5.845487925639054],
  [51,1.5807150114153075],
  [52,0.563335804242973],
  [53,4.894286843146261],
  [54,9.856287534207203],
  [55,4.896396641974256],
  [56,1.2942099540425414],
  [57,5.809421858534812],
  [58,1.733415110300613],
  [59,5.460384956746324],
  [60,5.990998309935479],
  [61,7.594177171313888],
  [62,10.660329512374963],
  [63,5.973124255808589],
  [64,3.3313399294306265],
  [65,2.9044866902167623],
  [66,6.997197180694009],
  [67,3.523117772813361],
  [68,0.2391695609805211],
  [69,7.542664698417907],
  [70,9.803040324502735],
  [71,13.065087817954282],
  [72,13.995144609672131],
  [73,9.572683988371006],
  [74,6.262408675238298],
  [75,6.343448236306536],
  [76,6.594421915015488],
  [77,2.2274478023982844],
  [78,2.917574438953957],
  [79,6.405517005560797]
];



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