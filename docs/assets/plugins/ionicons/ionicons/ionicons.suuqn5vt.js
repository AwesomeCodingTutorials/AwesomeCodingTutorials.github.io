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
            /*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='ionicons']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e){const n=`data-${t.t}`;return e&&e!==S?`${n}-${e}`:n}function r(t){return{e:t[0],n:t[1],o:!!t[2],i:!!t[3],r:!!t[4]}}function s(t,e){if(L(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function c(t,e,n,o){const i=t.s.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.s.delete(e))}function l(t,e){let n,o,i=null,r=!1,s=!1;for(var c=arguments.length;c-- >2;)B.push(arguments[c]);for(;B.length>0;){let e=B.pop();if(e&&void 0!==e.pop)for(c=e.length;c--;)B.push(e[c]);else"boolean"==typeof e&&(e=null),(s="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(s=!1)),s&&r?i[i.length-1].vtext+=e:null===i?i=[s?{vtext:e}:e]:i.push(s?{vtext:e}:e),r=s}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(c in e.class)e.class[c]&&B.push(c);e.class=B.join(" "),B.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:i}),H):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,c:void 0,l:!1}}function f(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function u(t,e,n,o){e.split(" ").forEach(e=>{t[e]=!0,n&&(t[`${e}-${n}`]=!0,o&&(t[`${e}-${n}-${o}`]=t[`${e}-${o}`]=!0))})}function a(t,e){t.f.has(e)||(t.f.set(e,!0),t.u?t.queue.write(()=>d(t,e)):t.queue.tick(()=>d(t,e)))}function d(t,e,n,o,i,r){if(t.f.delete(e),!t.a.has(e)){if(o=t.d.get(e),n=!o){if((i=t.s.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{d(t,e)}),void(i.$onRender=i["s-rc"]);o=function s(t,e,n,o,i,r,c){try{(function l(t,e,n,o,i,r,s){for(s in t.p.set(o,n),t.m.has(n)||t.m.set(n,{}),(r=Object.assign({color:{type:String}},e.properties)).mode={type:String},r)m(t,r[s],n,o,s,i)})(t,i=t.b(e).v,e,o=new i,n),function f(t,e,n){if(e){const o=t.p.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.y(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(r=t.w.get(e)){for(c=0;c<r.length;c+=2)o[r[c]](r[c+1]);t.w.delete(e)}}catch(n){t.g(n,2,e)}}catch(n){o={},t.g(n,7,e,!0)}return t.d.set(e,o),o}(t,e,t.k.get(e));try{o.componentWillLoad&&(r=o.componentWillLoad())}catch(n){t.g(n,3,e)}}else try{o.componentWillUpdate&&(r=o.componentWillUpdate())}catch(n){t.g(n,5,e)}r&&r.then?r.then(()=>p(t,e,o,n)):p(t,e,o,n)}}function p(t,e,n,o){(function i(t,e,n,o){try{const i=e.v.host,r=e.v.encapsulation,s="shadow"===r&&t.j.M;let c,f;if(c=function i(t,e,n){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((n=n||{})[o]=e[o])}),n}(e.v.properties,o),f=s?n.shadowRoot:n,!n["s-rn"]){t.C(t,t.j,e,n);const i=n["s-sc"];i&&(t.j.O(n,function r(t){return`${t}-host`}(i),""),o.render||t.j.O(n,function s(t){return`${t}-slot`}(i),""))}if(o.render||o.hostData||i||c){t.x=!0;const a=o.render&&o.render();let d;if((d=o.hostData&&o.hostData())&&e.N){const t=Object.keys(d).reduce((t,n)=>{return e.N[n]?t.concat(n):e.N[q(n)]?t.concat(q(n)):t},[]);if(t.length>0)throw new Error("The following keys were attempted to be set with hostData() from the "+`${e.t} component: ${t.join(", ")}. `+"If you would like to modify these please set @Prop({ mutable: true, reflectToAttr: true}) on the @Prop() decorator.")}c&&(d=d?Object.assign(d,c):c),t.x=!1,i&&(d=function c(t,e,n){return t=t||{},Object.keys(e).forEach(o=>{"theme"===o?u(t.class=t.class||{},e[o],n.mode,n.color):"class"===o?u(t[o]=t[o]||{},e[o]):t[o]=e[o]}),t}(d,i,o));const p=t.W.get(n)||{};p.c=f;const m=l(null,d,a);m.l=!0,t.W.set(n,t.render(n,p,m,s,r))}t.P&&t.P.T(n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.x=!1,t.g(e,8,n,!0)}})(t,t.b(e),e,n);try{o?e["s-init"]():(n.componentDidUpdate&&n.componentDidUpdate(),j(t.W.get(e))),e["s-hmr-load"]&&e["s-hmr-load"]()}catch(n){t.g(n,6,e,!0)}}function m(t,e,n,o,i,r,c,l){if(e.type||e.state){const f=t.m.get(n);e.state||(!e.attr||void 0!==f[i]&&""!==f[i]||(c=r&&r.S)&&L(l=c[e.attr])&&(f[i]=s(e.type,l)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=s(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),e.watchCallbacks&&(f[F+i]=e.watchCallbacks.slice()),b(o,i,function f(e){return(e=t.m.get(t.p.get(this)))&&e[i]},function u(n,o){(o=t.p.get(this))&&(e.state||e.mutable)&&v(t,o,i,n)})}else if(e.elementRef)h(o,i,n);else if(e.method)h(n,i,o[i].bind(o));else if(e.context){const r=t.A(e.context);void 0!==r&&h(o,i,r.R&&r.R(n)||r)}else e.connect&&h(o,i,t.L(e.connect))}function v(t,e,n,o,i,r,s){(i=t.m.get(e))||t.m.set(e,i={});const c=i[n];if(o!==c&&(i[n]=o,r=t.d.get(e))){if(s=i[F+n])for(let t=0;t<s.length;t++)try{r[s[t]].call(r,o,c,n)}catch(t){}!t.x&&e["s-rn"]&&a(t,e)}}function h(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function b(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function y(t,e,n,o,i){const r=e!==(e=e.replace(/^xlink\:?/,"")),s=U[e]||o;s&&(!n||"false"===n)||i?r?t.removeAttributeNS(z,D(e)):t.removeAttribute(e):"function"!=typeof n&&(s&&(n=""),r?t.setAttributeNS(z,D(e),n):t.setAttribute(e,n))}function $(t,e,n,o,i,r,s){if("class"!==n||r)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.D(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!r&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.b(e);o&&o.N&&o.N[n]?(g(e,n,i),s&&o.N[n].q&&y(e,o.N[n].I,i,3===o.N[n].B,null==i)):"ref"!==n&&(g(e,n,null==i?"":i),null!=i&&!1!==i||t.j.H(e,n))}else null!=i&&"key"!==n?y(e,n,i):(r||t.j.F(e,n)&&(null==i||!1===i))&&t.j.H(e,n);else n=D(n)in e?D(n.substring(2)):D(n[2])+n.substring(3),i?i!==o&&t.j.U(e,n,i):t.j.z(e,n);else if(o!==i){const t=w(o),n=w(i),r=t.filter(t=>!n.includes(t)),s=w(e.className).filter(t=>!r.includes(t)),c=n.filter(e=>!t.includes(e)&&!s.includes(e));s.push(...c),e.className=s.join(" ")}}function w(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function g(t,e,n){try{t[e]=n}catch(t){}}function k(t,e,n,o,i){const r=11===n.c.nodeType&&n.c.host?n.c.host:n.c,s=e&&e.vattrs||A,c=n.vattrs||A;for(i in s)c&&null!=c[i]||null==s[i]||$(t,r,i,s[i],void 0,o,n.l);for(i in c)i in s&&c[i]===("value"===i||"checked"===i?r[i]:s[i])||$(t,r,i,s[i],c[i],o,n.l)}function M(t,e){function n(i,r,s,c,l,f,p,b,y){if(b=r.vchildren[s],u||(m=!0,"slot"===b.vtag&&(d&&e.O(c,d+"-slot",""),b.vchildren?b.Q=!0:b.Z=!0)),L(b.vtext))b.c=e.G(b.vtext);else if(b.Z)b.c=e.G("");else{if(f=b.c=Q||"svg"===b.vtag?e.J("http://www.w3.org/2000/svg",b.vtag):e.K(b.Q?"slot-fb":b.vtag),Q="svg"===b.vtag||"foreignObject"!==b.vtag&&Q,k(t,null,b,Q),L(d)&&f["s-si"]!==d&&e.O(f,f["s-si"]=d,""),L(a)&&e.O(f,T,a+"."+s+(function t(e){if(e)for(var n=0;n<e.length;n++)if("slot"!==e[n].vtag||t(e[n].vchildren))return!0;return!1}(b.vchildren)?"":".")),b.vchildren)for(l=0;l<b.vchildren.length;++l)(p=n(i,b,l,f))&&(L(a)&&3===p.nodeType&&!p["s-cr"]&&e.V(f,e.X("s."+a+"."+l)),e.V(f,p),L(a)&&3===p.nodeType&&!p["s-cr"]&&(e.V(f,e.X("/")),e.V(f,e.G(" "))));"svg"===b.vtag&&(Q=!1)}return b.c["s-hn"]=v,(b.Q||b.Z)&&(b.c["s-sr"]=!0,b.c["s-cr"]=h,b.c["s-sn"]=b.vname||"",(y=i&&i.vchildren&&i.vchildren[s])&&y.vtag===b.vtag&&i.c&&o(i.c)),b.c}function o(n,i,r,s){t.Y=!0;const f=e._(n);for(r=f.length-1;r>=0;r--)(s=f[r])["s-hn"]!==v&&s["s-ol"]&&(e.tt(s),e.et(l(s),s,c(s)),e.tt(s["s-ol"]),s["s-ol"]=null,m=!0),i&&o(s,i);t.Y=!1}function i(t,o,i,r,s,l,f,u){const a=t["s-cr"]||t.$defaultHolder;for((f=a&&e.nt(a)||t).shadowRoot&&e.ot(f)===v&&(f=f.shadowRoot);s<=l;++s)r[s]&&(u=L(r[s].vtext)?e.G(r[s].vtext):n(null,i,s,t))&&(r[s].c=u,e.et(f,u,c(o)))}function r(t,n,i,r){for(;n<=i;++n)L(t[n])&&(r=t[n].c,p=!0,r["s-ol"]?e.tt(r["s-ol"]):o(r,!0),e.tt(r))}function s(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.nt(t["s-ol"]?t["s-ol"]:t)}const f=[];let u,a,d,p,m,v,h;return function b(y,$,w,g,M,j,C,O,x,N,W,E){if(v=e.ot(y),h=y["s-cr"],u=g,a="shadow"!==M?j:null,d=y["s-sc"],m=p=!1,function f(u,a,d){const p=a.c=u.c,m=u.vchildren,v=a.vchildren;Q=a.c&&L(e.it(a.c))&&void 0!==a.c.ownerSVGElement,Q="svg"===a.vtag||"foreignObject"!==a.vtag&&Q,L(a.vtext)?(d=p["s-cr"]||p.$defaultHolder)?e.rt(e.nt(d),a.vtext):u.vtext!==a.vtext&&e.rt(p,a.vtext):("slot"!==a.vtag&&k(t,u,a,Q),L(m)&&L(v)?function h(t,u,a,d,p,m,v,b){let y=0,$=0,w=u.length-1,g=u[0],k=u[w],M=d.length-1,j=d[0],C=d[M];for(;y<=w&&$<=M;)if(null==g)g=u[++y];else if(null==k)k=u[--w];else if(null==j)j=d[++$];else if(null==C)C=d[--M];else if(s(g,j))f(g,j),g=u[++y],j=d[++$];else if(s(k,C))f(k,C),k=u[--w],C=d[--M];else if(s(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.nt(g.c)),f(g,C),e.et(t,g.c,e.st(k.c)),g=u[++y],C=d[--M];else if(s(k,j))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.nt(k.c)),f(k,j),e.et(t,k.c,g.c),k=u[--w],j=d[++$];else{for(p=null,m=y;m<=w;++m)if(u[m]&&L(u[m].vkey)&&u[m].vkey===j.vkey){p=m;break}L(p)?((b=u[p]).vtag!==j.vtag?v=n(u&&u[$],a,p,t):(f(b,j),u[p]=void 0,v=b.c),j=d[++$]):(v=n(u&&u[$],a,$,t),j=d[++$]),v&&e.et(l(g.c),v,c(g.c))}y>w?i(t,null==d[M+1]?null:d[M+1].c,a,d,$,M):$>M&&r(u,y,w)}(p,m,a,v):L(v)?(L(u.vtext)&&e.rt(p,""),i(p,null,a,v,0,v.length-1)):L(m)&&r(m,0,m.length-1)),Q&&"svg"===a.vtag&&(Q=!1)}($,w),L(a)&&e.O($.c,P,a),m){for(function t(n,o,i,r,s,c,l,u,a,d){for(s=0,c=(o=e._(n)).length;s<c;s++){if((i=o[s])["s-sr"]&&(r=i["s-cr"]))for(u=e._(e.nt(r)),a=i["s-sn"],l=u.length-1;l>=0;l--)(r=u[l])["s-cn"]||r["s-nr"]||r["s-hn"]===i["s-hn"]||((3===(d=e.ct(r))||8===d)&&""===a||1===d&&null===e.lt(r,"slot")&&""===a||1===d&&e.lt(r,"slot")===a)&&(f.some(t=>t.ft===r)||(p=!0,r["s-sn"]=a,f.push({ut:i,ft:r})));1===e.ct(i)&&t(i)}}(w.c),C=0;C<f.length;C++)(O=f[C]).ft["s-ol"]||((x=e.G(""))["s-nr"]=O.ft,e.et(e.nt(O.ft),O.ft["s-ol"]=x,O.ft));for(t.Y=!0,C=0;C<f.length;C++){for(O=f[C],W=e.nt(O.ut),E=e.st(O.ut),x=O.ft["s-ol"];x=e.at(x);)if((N=x["s-nr"])&&N&&N["s-sn"]===O.ft["s-sn"]&&W===e.nt(N)&&(N=e.st(N))&&N&&!N["s-nr"]){E=N;break}(!E&&W!==e.nt(O.ft)||e.st(O.ft)!==E)&&O.ft!==E&&(e.tt(O.ft),e.et(W,O.ft,E))}t.Y=!1}return p&&function t(n,o,i,r,s,c,l,f){for(r=0,s=(i=e._(n)).length;r<s;r++)if(o=i[r],1===e.ct(o)){if(o["s-sr"])for(l=o["s-sn"],o.hidden=!1,c=0;c<s;c++)if(i[c]["s-hn"]!==o["s-hn"])if(f=e.ct(i[c]),""!==l){if(1===f&&l===e.lt(i[c],"slot")){o.hidden=!0;break}}else if(1===f||3===f&&""!==e.dt(i[c]).trim()){o.hidden=!0;break}t(o)}}(w.c),f.length=0,w}}function j(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.c),t.vchildren&&t.vchildren.forEach(t=>{j(t,e)}))}function C(t,e,n,o,i){const r=t.ct(e);let s,c,l,f;if(i&&1===r){(c=t.lt(e,T))&&(l=c.split("."))[0]===o&&((f={}).vtag=t.ot(f.c=e),n.vchildren||(n.vchildren=[]),n.vchildren[l[1]]=f,n=f,i=""!==l[2]);for(let r=0;r<e.childNodes.length;r++)C(t,e.childNodes[r],n,o,i)}else 3===r&&(s=e.previousSibling)&&8===t.ct(s)&&"s"===(l=t.dt(s).split("."))[0]&&l[1]===o&&((f={vtext:t.dt(e)}).c=e,n.vchildren||(n.vchildren=[]),n.vchildren[l[2]]=f)}function O(t,e){const n=t.b(e);n.pt&&n.pt.forEach(n=>{n.o||t.j.U(e,n.e,function o(t,e,n,i){return o=>{(i=t.d.get(e))?i[n](o):((i=t.w.get(e)||[]).push(n,o),t.w.set(e,i))}}(t,e,n.n),n.r,n.i)})}function x(t,e){const n={nodeName:e},o=t.b(n);if(!o||!o.v)return Promise.resolve(null);const i=o.v,r=function s(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];let i;const r={name:n};if(o.state)i="states",r.mt=o.watchCallbacks||[];else if(o.elementRef)i="elements";else if(o.method)i="methods";else{i="props";let t="any";o.type&&(t=o.type,"function"==typeof o.type&&(t=o.type.name)),r.type=t.toLowerCase(),r.mutable=o.mutable||!1,r.connect=o.connect||"-",r.context=o.connect||"-",r.mt=o.watchCallbacks||[]}return e[i].push(r),e},{vt:[],ht:[],bt:[],yt:[]})}(i.properties||{}),c=(o.pt||[]).map(t=>{return{$t:t.e,capture:t.r,disabled:t.o,passive:t.i,method:t.n}}),l=i.events||[],f=Object.assign({wt:i.is,gt:o.kt||"unknown",encapsulation:i.encapsulation||"none"},r,{events:{Mt:l,listeners:c}});return Promise.resolve(f)}function N(t,e,n,o,i){return n.mode||(n.mode=t.jt(n)),n["s-cr"]||t.lt(n,P)||t.M&&1===e.encapsulation||(n["s-cr"]=t.G(""),n["s-cr"]["s-cn"]=!0,t.et(n,n["s-cr"],t._(n)[0])),t.M||1!==e.encapsulation||"shadowRoot"in HTMLElement.prototype||(n.shadowRoot=n),1===e.encapsulation&&t.M&&!n.shadowRoot&&t.Ct(n,{mode:"open"}),o={Ot:n["s-id"],S:{}},e.N&&Object.keys(e.N).forEach(r=>{(i=e.N[r].I)&&(o.S[i]=t.lt(n,i))}),o}function W(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.xt.has(o)||(t.xt.set(o,!0),O(t,o)),t.a.delete(o),t.Nt.has(o)||(t.Nt.set(o,!0),o["s-id"]||(o["s-id"]=t.Wt()),function i(t,e,n){for(n=e;n=t.j.it(n);)if(t.Et(n)){t.Pt.has(e)||(t.s.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.k.set(o,N(t.j,e,o)),t.Tt(e,o)}))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,r,c,l){if(t&&o!==r)for(c in t)if((l=t[c]).I&&D(l.I)===D(n)){e[c]=s(l.B,r);break}})(e.N,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n){if(!t.Y&&function o(t,e){for(;e;){if(!t.nt(e))return 9!==t.ct(e);e=t.nt(e)}}(t.j,n)){t.a.set(n,!0),c(t,n),j(t.W.get(n),!0),t.j.z(n),t.xt.delete(n);{const e=t.d.get(n);e&&e.componentDidUnload&&e.componentDidUnload()}t.P&&t.P.St(n),[t.s,t.At,t.k].forEach(t=>t.delete(n))}})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,r){if(!t.Pt.has(n)&&(i=t.d.get(n))&&!t.a.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.Pt.set(n,!0);try{j(t.W.get(n)),(r=t.At.get(n))&&(r.forEach(t=>t(n)),t.At.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.g(e,4,n)}n.classList.add(o),c(t,n)}})(t,this,o)},n["s-hmr"]=function(n){(function o(t,e,n,i){e.v=null,t.Pt.delete(n);const r=t.d.get(n);r&&(t.p.delete(r),t.d.delete(n)),t.j.z(n),t.xt.delete(n),e.pt=null,n["s-hmr-load"]=(()=>{delete n["s-hmr-load"],function o(t,e,n){t.xt.has(n)||(t.xt.set(n,!0),e.v&&e.v.listeners&&(e.pt=e.v.listeners.map(t=>{return{n:t.method,e:t.name,r:!!t.capture,i:!!t.passive,o:!!t.disabled}}),O(t,n)))}(t,e,n)}),t.k.set(n,N(t.j,e,n)),t.Tt(e,n,i)})(t,e,this,n)},n.forceUpdate=function(){a(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],r=i.Rt;1===r||2===r?b(n,o,function e(){return(t.m.get(this)||{})[o]},function e(n){v(t,this,o,s(i.B,n))}):6===r&&h(n,o,I)})}(t,e.N,n)}function E(t,e,n,o){return function(){const i=arguments;return function r(t,e,n){let o=e[n];const i=t.Lt.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.K(n),t.V(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const P="data-ssrv",T="data-ssrc",S="$",A={},R={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},L=t=>null!=t,D=t=>t.toLowerCase(),q=t=>D(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),I=()=>{},B=[],H={forEach:(t,e)=>{t.forEach(t=>e(f(t)))},map:(t,e)=>{return t.map(t=>(function n(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(f(t))))}},F="wc-",U={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},z="http://www.w3.org/1999/xlink";let Q=!1;(function Z(t,e,n,o,s,c){function f(t,e){if(!n.customElements.get(t.t)){W(y,u[t.t]=t,e.prototype,c);{const n=e.observedAttributes=[];for(const e in t.N)t.N[e].I&&n.push(t.N[e].I)}n.customElements.define(t.t,e)}}const u={html:{}},d={},p=n[t]=n[t]||{},m=function v(t,e,n){t.Dt||(t.Dt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.qt=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={Lt:n,It:!1,ct:t=>t.nodeType,K:t=>n.createElement(t),J:(t,e)=>n.createElementNS(t,e),G:t=>n.createTextNode(t),X:t=>n.createComment(t),et:(t,e,n)=>t.insertBefore(e,n),tt:t=>t.remove(),V:(t,e)=>t.appendChild(e),_:t=>t.childNodes,nt:t=>t.parentNode,st:t=>t.nextSibling,at:t=>t.previousSibling,ot:t=>D(t.nodeName),dt:t=>t.textContent,rt:(t,e)=>t.textContent=e,lt:(t,e)=>t.getAttribute(e),O:(t,e,n)=>t.setAttribute(e,n),Bt:(t,e,n,o)=>t.setAttributeNS(e,n,o),H:(t,e)=>t.removeAttribute(e),F:(t,e)=>t.hasAttribute(e),jt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Ht:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.it(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t},U:(e,n,r,s,c,l,f,u)=>{const a=n;let d=e,p=o.get(e);if(p&&p[a]&&p[a](),"string"==typeof l?d=i.Ht(e,l):"object"==typeof l?d=l:(u=n.split(":")).length>1&&(d=i.Ht(e,u[0]),n=u[1]),!d)return;let m=r;(u=n.split(".")).length>1&&(n=u[0],m=(t=>{t.keyCode===R[u[1]]&&r(t)})),f=i.It?{capture:!!s,passive:!!c}:!!s,t.Dt(d,n,m,f),p||o.set(e,p={}),p[a]=(()=>{d&&t.qt(d,n,m,f),p[a]=null})},z:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Ct:(t,e)=>t.attachShadow(e)};i.M=!!i.Lt.documentElement.attachShadow,e.location.search.indexOf("shadow=false")>0&&(i.M=!1),i.Ft=((t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)));try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.It=!0}))}catch(t){}return i.it=((t,e)=>(e=i.nt(t))&&11===i.ct(e)?e.host:e),i}(p,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=s,e.enableListener=((t,e,n,o,i)=>(function r(t,e,n,o,i,s){if(e){const r=t.p.get(e),c=t.b(r);if(c&&c.pt)if(o){const o=c.pt.find(t=>t.e===n);o&&t.j.U(r,n,t=>e[o.n](t),o.r,void 0===s?o.i:!!s,i)}else t.j.z(r,n)}})(y,t,e,n,o,i)),e.emit=((t,n,o)=>m.Ft(t,e.eventNameFn?e.eventNameFn(n):n,o)),p.h=l,p.Context=e;const h=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let b=0;const y={j:m,Ut:f,y:e.emit,b:t=>u[m.ot(t)],A:t=>e[t],isClient:!0,Et:t=>!(!h[m.ot(t)]&&!y.b(t)),Wt:()=>t+b++,g:(t,e,n)=>void 0,L:t=>(function e(t,n,o){return{create:E(t,n,o,"create"),componentOnReady:E(t,n,o,"componentOnReady")}})(m,d,t),queue:e.queue=function $(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&r()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(l);const e=r()+7*Math.ceil(a*(1/22));o(f,e),o(u,e),f.length>0&&(u.push(...f),f.length=0),(d=l.length+f.length+u.length>0)?t.raf(i):a=0}const r=()=>e.performance.now(),s=Promise.resolve(),c=[],l=[],f=[],u=[];let a=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){c.push(t),1===c.length&&s.then(()=>n(c))},read(e){l.push(e),d||(d=!0,t.raf(i))},write(e){f.push(e),d||(d=!0,t.raf(i))}}}(p,n),Tt:function w(t,e,n){if(t.v)a(y,e);else{const o="string"==typeof t.kt?t.kt:t.kt[e.mode],i=2===t.encapsulation||1===t.encapsulation&&!m.M;let r=s+o+(i?".sc":"")+".js";n&&(r+="?s-hmr="+n),import(r).then(n=>{try{t.v=n[q(t.t)],function o(t,e,n,i,r){if(i){const o=e.t+(r||S);if(!e[o]){const s=t.K("template");e[o]=s;{const o=["<style",` data-style-tag="${e.t}"`];t.O(s,"data-tmpl-style-tag",e.t),r&&(o.push(` data-style-mode="${r}"`),t.O(s,"data-tmpl-style-mode",r)),(2===n||1===n&&!t.M)&&(o.push(' data-style-scoped="true"'),t.O(s,"data-tmpl-style-scoped","true")),o.push(">"),o.push(i),o.push("</style>"),s.innerHTML=o.join("")}t.V(t.Lt.head,s)}}}(m,t,t.encapsulation,t.v.style,t.v.styleMode)}catch(e){t.v=class{}}a(y,e)}).catch(t=>void 0)}},s:new WeakMap,zt:new WeakMap,Nt:new WeakMap,xt:new WeakMap,Pt:new WeakMap,p:new WeakMap,k:new WeakMap,d:new WeakMap,a:new WeakMap,f:new WeakMap,At:new WeakMap,w:new WeakMap,W:new WeakMap,m:new WeakMap};y.render=M(y,m);const g=m.Lt.documentElement;g["s-ld"]=[],g["s-rn"]=!0,g["s-init"]=(()=>{y.Pt.set(g,p.loaded=y.u=!0),m.Ft(n,"appload",{detail:{namespace:t}})}),function k(t,e,n){const o=n.querySelectorAll(`[${P}]`),i=o.length;let r,s,c,l,f,u;if(i>0)for(t.Pt.set(n,!0),l=0;l<i;l++)for(r=o[l],s=e.lt(r,P),(c={}).vtag=e.ot(c.c=r),t.W.set(r,c),f=0,u=r.childNodes.length;f<u;f++)C(e,r.childNodes[f],c,s,!0)}(y,m,g),y.C=((t,e,n,o)=>{(function r(t,e,n,o){const r=n.encapsulation,s=2===r||1===r&&!t.j.M;let c=n.t+o.mode,l=n[c];if(s&&(o["s-sc"]=i(n,o.mode)),l||(l=n[c=n.t+S],s&&(o["s-sc"]=i(n))),l){let n=e.Lt.head;if(e.M)if(1===r)n=o.shadowRoot;else{let t=o;for(;t=e.nt(t);)if(t.host&&t.host.shadowRoot){n=t.host.shadowRoot;break}}let i=t.zt.get(n);if(i||t.zt.set(n,i={}),!i[c]){let t;{t=l.content.cloneNode(!0),i[c]=!0;const o=n.querySelectorAll("[data-styles]");e.et(n,t,o.length&&o[o.length-1].nextSibling||n.firstChild)}}}})(t,e,n,o)}),function j(t,e,n,o){const i=n.Qt=n.Qt||{};return i.Zt=i.Zt||[],i.Zt.push(function r(t,e,n){return{namespace:e,Gt:t=>{return t&&t.tagName?Promise.all([x(n,t.tagName),function e(t,n){return Promise.resolve(t.d.get(n))}(n,t)]).then(t=>{return t[0]&&t[1]?{Jt:t[0],Kt:t[1]}:null}):Promise.resolve(null)},Vt:t=>{return x(n,t)},Xt:()=>{return Promise.all(t.components.map(t=>{return x(n,t[0])})).then(t=>{return t.filter(t=>t)})}}}(t,e,o)),i.Gt||(i.Gt=(t=>{return Promise.all(i.Zt.map(e=>{return e.Gt(t)})).then(t=>{return t.find(t=>!!t)})})),i.Xt||(i.Xt=(()=>{const t=[];return i.Zt.forEach(e=>{t.push(e.Xt())}),Promise.all(t).then(t=>{const e=[];return t.forEach(t=>{t.forEach(t=>{e.push(t)})}),e})})),i}(p,t,n,y),(p.components||[]).map(t=>{const e=function n(t,e,o){const i={t:t[0],N:{color:{I:"color"}}};i.kt=t[1];const s=t[3];if(s)for(e=0;e<s.length;e++)o=s[e],i.N[o[0]]={Rt:o[1],q:!!o[2],I:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,B:o[4]};return i.encapsulation=t[4],t[5]&&(i.pt=t[5].map(r)),i}(t);return u[e.t]=e}).forEach(t=>f(t,class extends HTMLElement{})),function O(t,e,n,o,i,r){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.b(e);if(o)if(t.Pt.has(e))n(e);else{const o=t.At.get(e)||[];o.push(n),t.At.set(e,o)}return!!o}),i){for(r=i.length-1;r>=0;r--)e.componentOnReady(i[r][0],i[r][1])&&i.splice(r,1);for(r=0;r<o.length;r++)if(!n[o[r]].componentOnReady)return;for(r=0;r<i.length;r++)i[r][1](null);i.length=0}}(y,p,n,n["s-apps"],n["s-cr"]),p.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"ionicons","hydrated");
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