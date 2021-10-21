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
            /*!
 * QUnit 1.18.0
 * http://qunitjs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-03T10:23Z
 */

(function( window ) {

var QUnit,
	config,
	onErrorFnPrev,
	loggingCallbacks = {},
	fileName = ( sourceFromStacktrace( 0 ) || "" ).replace( /(:\d+)+\)?/, "" ).replace( /.+\//, "" ),
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	// Keep a local reference to Date (GH-283)
	Date = window.Date,
	now = Date.now || function() {
		return new Date().getTime();
	},
	globalStartCalled = false,
	runStarted = false,
	setTimeout = window.setTimeout,
	clearTimeout = window.clearTimeout,
	defined = {
		document: window.document !== undefined,
		setTimeout: window.setTimeout !== undefined,
		sessionStorage: (function() {
			var x = "qunit-test-string";
			try {
				sessionStorage.setItem( x, x );
				sessionStorage.removeItem( x );
				return true;
			} catch ( e ) {
				return false;
			}
		}())
	},
	/**
	 * Provides a normalized error string, correcting an issue
	 * with IE 7 (and prior) where Error.prototype.toString is
	 * not properly implemented
	 *
	 * Based on http://es5.github.com/#x15.11.4.4
	 *
	 * @param {String|Error} error
	 * @return {String} error message
	 */
	errorString = function( error ) {
		var name, message,
			errorString = error.toString();
		if ( errorString.substring( 0, 7 ) === "[object" ) {
			name = error.name ? error.name.toString() : "Error";
			message = error.message ? error.message.toString() : "";
			if ( name && message ) {
				return name + ": " + message;
			} else if ( name ) {
				return name;
			} else if ( message ) {
				return message;
			} else {
				return "Error";
			}
		} else {
			return errorString;
		}
	},
	/**
	 * Makes a clone of an object using only Array or Object as base,
	 * and copies over the own enumerable properties.
	 *
	 * @param {Object} obj
	 * @return {Object} New object with only the own properties (recursively).
	 */
	objectValues = function( obj ) {
		var key, val,
			vals = QUnit.is( "array", obj ) ? [] : {};
		for ( key in obj ) {
			if ( hasOwn.call( obj, key ) ) {
				val = obj[ key ];
				vals[ key ] = val === Object( val ) ? objectValues( val ) : val;
			}
		}
		return vals;
	};

QUnit = {};

/**
 * Config object: Maintain internal state
 * Later exposed as QUnit.config
 * `config` initialized at top of scope
 */
config = {
	// The queue of tests to run
	queue: [],

	// block until document ready
	blocking: true,

	// by default, run previously failed tests first
	// very useful in combination with "Hide passed tests" checked
	reorder: true,

	// by default, modify document.title when suite is done
	altertitle: true,

	// by default, scroll to top of the page when suite is done
	scrolltop: true,

	// when enabled, all tests must call expect()
	requireExpects: false,

	// depth up-to which object will be dumped
	maxDepth: 5,

	// add checkboxes that are persisted in the query-string
	// when enabled, the id is set to `true` as a `QUnit.config` property
	urlConfig: [
		{
			id: "hidepassed",
			label: "Hide passed tests",
			tooltip: "Only show tests and assertions that fail. Stored as query-strings."
		},
		{
			id: "noglobals",
			label: "Check for Globals",
			tooltip: "Enabling this will test if any test introduces new properties on the " +
				"`window` object. Stored as query-strings."
		},
		{
			id: "notrycatch",
			label: "No try-catch",
			tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging " +
				"exceptions in IE reasonable. Stored as query-strings."
		}
	],

	// Set of all modules.
	modules: [],

	// The first unnamed module
	currentModule: {
		name: "",
		tests: []
	},

	callbacks: {}
};

// Push a loose unnamed module to the modules collection
config.modules.push( config.currentModule );

// Initialize more QUnit.config and QUnit.urlParams
(function() {
	var i, current,
		location = window.location || { search: "", protocol: "file:" },
		params = location.search.slice( 1 ).split( "&" ),
		length = params.length,
		urlParams = {};

	if ( params[ 0 ] ) {
		for ( i = 0; i < length; i++ ) {
			current = params[ i ].split( "=" );
			current[ 0 ] = decodeURIComponent( current[ 0 ] );

			// allow just a key to turn on a flag, e.g., test.html?noglobals
			current[ 1 ] = current[ 1 ] ? decodeURIComponent( current[ 1 ] ) : true;
			if ( urlParams[ current[ 0 ] ] ) {
				urlParams[ current[ 0 ] ] = [].concat( urlParams[ current[ 0 ] ], current[ 1 ] );
			} else {
				urlParams[ current[ 0 ] ] = current[ 1 ];
			}
		}
	}

	if ( urlParams.filter === true ) {
		delete urlParams.filter;
	}

	QUnit.urlParams = urlParams;

	// String search anywhere in moduleName+testName
	config.filter = urlParams.filter;

	if ( urlParams.maxDepth ) {
		config.maxDepth = parseInt( urlParams.maxDepth, 10 ) === -1 ?
			Number.POSITIVE_INFINITY :
			urlParams.maxDepth;
	}

	config.testId = [];
	if ( urlParams.testId ) {

		// Ensure that urlParams.testId is an array
		urlParams.testId = decodeURIComponent( urlParams.testId ).split( "," );
		for ( i = 0; i < urlParams.testId.length; i++ ) {
			config.testId.push( urlParams.testId[ i ] );
		}
	}

	// Figure out if we're running the tests from a server or not
	QUnit.isLocal = location.protocol === "file:";

	// Expose the current QUnit version
	QUnit.version = "1.18.0";
}());

// Root QUnit object.
// `QUnit` initialized at top of scope
extend( QUnit, {

	// call on start of module test to prepend name to all tests
	module: function( name, testEnvironment ) {
		var currentModule = {
			name: name,
			testEnvironment: testEnvironment,
			tests: []
		};

		// DEPRECATED: handles setup/teardown functions,
		// beforeEach and afterEach should be used instead
		if ( testEnvironment && testEnvironment.setup ) {
			testEnvironment.beforeEach = testEnvironment.setup;
			delete testEnvironment.setup;
		}
		if ( testEnvironment && testEnvironment.teardown ) {
			testEnvironment.afterEach = testEnvironment.teardown;
			delete testEnvironment.teardown;
		}

		config.modules.push( currentModule );
		config.currentModule = currentModule;
	},

	// DEPRECATED: QUnit.asyncTest() will be removed in QUnit 2.0.
	asyncTest: function( testName, expected, callback ) {
		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		}

		QUnit.test( testName, expected, callback, true );
	},

	test: function( testName, expected, callback, async ) {
		var test;

		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		}

		test = new Test({
			testName: testName,
			expected: expected,
			async: async,
			callback: callback
		});

		test.queue();
	},

	skip: function( testName ) {
		var test = new Test({
			testName: testName,
			skip: true
		});

		test.queue();
	},

	// DEPRECATED: The functionality of QUnit.start() will be altered in QUnit 2.0.
	// In QUnit 2.0, invoking it will ONLY affect the `QUnit.config.autostart` blocking behavior.
	start: function( count ) {
		var globalStartAlreadyCalled = globalStartCalled;

		if ( !config.current ) {
			globalStartCalled = true;

			if ( runStarted ) {
				throw new Error( "Called start() outside of a test context while already started" );
			} else if ( globalStartAlreadyCalled || count > 1 ) {
				throw new Error( "Called start() outside of a test context too many times" );
			} else if ( config.autostart ) {
				throw new Error( "Called start() outside of a test context when " +
					"QUnit.config.autostart was true" );
			} else if ( !config.pageLoaded ) {

				// The page isn't completely loaded yet, so bail out and let `QUnit.load` handle it
				config.autostart = true;
				return;
			}
		} else {

			// If a test is running, adjust its semaphore
			config.current.semaphore -= count || 1;

			// Don't start until equal number of stop-calls
			if ( config.current.semaphore > 0 ) {
				return;
			}

			// throw an Error if start is called more often than stop
			if ( config.current.semaphore < 0 ) {
				config.current.semaphore = 0;

				QUnit.pushFailure(
					"Called start() while already started (test's semaphore was 0 already)",
					sourceFromStacktrace( 2 )
				);
				return;
			}
		}

		resumeProcessing();
	},

	// DEPRECATED: QUnit.stop() will be removed in QUnit 2.0.
	stop: function( count ) {

		// If there isn't a test running, don't allow QUnit.stop() to be called
		if ( !config.current ) {
			throw new Error( "Called stop() outside of a test context" );
		}

		// If a test is running, adjust its semaphore
		config.current.semaphore += count || 1;

		pauseProcessing();
	},

	config: config,

	// Safe object type checking
	is: function( type, obj ) {
		return QUnit.objectType( obj ) === type;
	},

	objectType: function( obj ) {
		if ( typeof obj === "undefined" ) {
			return "undefined";
		}

		// Consider: typeof null === object
		if ( obj === null ) {
			return "null";
		}

		var match = toString.call( obj ).match( /^\[object\s(.*)\]$/ ),
			type = match && match[ 1 ] || "";

		switch ( type ) {
			case "Number":
				if ( isNaN( obj ) ) {
					return "nan";
				}
				return "number";
			case "String":
			case "Boolean":
			case "Array":
			case "Date":
			case "RegExp":
			case "Function":
				return type.toLowerCase();
		}
		if ( typeof obj === "object" ) {
			return "object";
		}
		return undefined;
	},

	extend: extend,

	load: function() {
		config.pageLoaded = true;

		// Initialize the configuration options
		extend( config, {
			stats: { all: 0, bad: 0 },
			moduleStats: { all: 0, bad: 0 },
			started: 0,
			updateRate: 1000,
			autostart: true,
			filter: ""
		}, true );

		config.blocking = false;

		if ( config.autostart ) {
			resumeProcessing();
		}
	}
});

// Register logging callbacks
(function() {
	var i, l, key,
		callbacks = [ "begin", "done", "log", "testStart", "testDone",
			"moduleStart", "moduleDone" ];

	function registerLoggingCallback( key ) {
		var loggingCallback = function( callback ) {
			if ( QUnit.objectType( callback ) !== "function" ) {
				throw new Error(
					"QUnit logging methods require a callback function as their first parameters."
				);
			}

			config.callbacks[ key ].push( callback );
		};

		// DEPRECATED: This will be removed on QUnit 2.0.0+
		// Stores the registered functions allowing restoring
		// at verifyLoggingCallbacks() if modified
		loggingCallbacks[ key ] = loggingCallback;

		return loggingCallback;
	}

	for ( i = 0, l = callbacks.length; i < l; i++ ) {
		key = callbacks[ i ];

		// Initialize key collection of logging callback
		if ( QUnit.objectType( config.callbacks[ key ] ) === "undefined" ) {
			config.callbacks[ key ] = [];
		}

		QUnit[ key ] = registerLoggingCallback( key );
	}
})();

// `onErrorFnPrev` initialized at top of scope
// Preserve other handlers
onErrorFnPrev = window.onerror;

// Cover uncaught exceptions
// Returning true will suppress the default browser handler,
// returning false will let it run.
window.onerror = function( error, filePath, linerNr ) {
	var ret = false;
	if ( onErrorFnPrev ) {
		ret = onErrorFnPrev( error, filePath, linerNr );
	}

	// Treat return value as window.onerror itself does,
	// Only do our handling if not suppressed.
	if ( ret !== true ) {
		if ( QUnit.config.current ) {
			if ( QUnit.config.current.ignoreGlobalErrors ) {
				return true;
			}
			QUnit.pushFailure( error, filePath + ":" + linerNr );
		} else {
			QUnit.test( "global failure", extend(function() {
				QUnit.pushFailure( error, filePath + ":" + linerNr );
			}, { validTest: true } ) );
		}
		return false;
	}

	return ret;
};

function done() {
	var runtime, passed;

	config.autorun = true;

	// Log the last module results
	if ( config.previousModule ) {
		runLoggingCallbacks( "moduleDone", {
			name: config.previousModule.name,
			tests: config.previousModule.tests,
			failed: config.moduleStats.bad,
			passed: config.moduleStats.all - config.moduleStats.bad,
			total: config.moduleStats.all,
			runtime: now() - config.moduleStats.started
		});
	}
	delete config.previousModule;

	runtime = now() - config.started;
	passed = config.stats.all - config.stats.bad;

	runLoggingCallbacks( "done", {
		failed: config.stats.bad,
		passed: passed,
		total: config.stats.all,
		runtime: runtime
	});
}

// Doesn't support IE6 to IE9, it will return undefined on these browsers
// See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
function extractStacktrace( e, offset ) {
	offset = offset === undefined ? 4 : offset;

	var stack, include, i;

	if ( e.stack ) {
		stack = e.stack.split( "\n" );
		if ( /^error$/i.test( stack[ 0 ] ) ) {
			stack.shift();
		}
		if ( fileName ) {
			include = [];
			for ( i = offset; i < stack.length; i++ ) {
				if ( stack[ i ].indexOf( fileName ) !== -1 ) {
					break;
				}
				include.push( stack[ i ] );
			}
			if ( include.length ) {
				return include.join( "\n" );
			}
		}
		return stack[ offset ];

	// Support: Safari <=6 only
	} else if ( e.sourceURL ) {

		// exclude useless self-reference for generated Error objects
		if ( /qunit.js$/.test( e.sourceURL ) ) {
			return;
		}

		// for actual exceptions, this is useful
		return e.sourceURL + ":" + e.line;
	}
}

function sourceFromStacktrace( offset ) {
	var error = new Error();

	// Support: Safari <=7 only, IE <=10 - 11 only
	// Not all browsers generate the `stack` property for `new Error()`, see also #636
	if ( !error.stack ) {
		try {
			throw error;
		} catch ( err ) {
			error = err;
		}
	}

	return extractStacktrace( error, offset );
}

function synchronize( callback, last ) {
	if ( QUnit.objectType( callback ) === "array" ) {
		while ( callback.length ) {
			synchronize( callback.shift() );
		}
		return;
	}
	config.queue.push( callback );

	if ( config.autorun && !config.blocking ) {
		process( last );
	}
}

function process( last ) {
	function next() {
		process( last );
	}
	var start = now();
	config.depth = ( config.depth || 0 ) + 1;

	while ( config.queue.length && !config.blocking ) {
		if ( !defined.setTimeout || config.updateRate <= 0 ||
				( ( now() - start ) < config.updateRate ) ) {
			if ( config.current ) {

				// Reset async tracking for each phase of the Test lifecycle
				config.current.usedAsync = false;
			}
			config.queue.shift()();
		} else {
			setTimeout( next, 13 );
			break;
		}
	}
	config.depth--;
	if ( last && !config.blocking && !config.queue.length && config.depth === 0 ) {
		done();
	}
}

function begin() {
	var i, l,
		modulesLog = [];

	// If the test run hasn't officially begun yet
	if ( !config.started ) {

		// Record the time of the test run's beginning
		config.started = now();

		verifyLoggingCallbacks();

		// Delete the loose unnamed module if unused.
		if ( config.modules[ 0 ].name === "" && config.modules[ 0 ].tests.length === 0 ) {
			config.modules.shift();
		}

		// Avoid unnecessary information by not logging modules' test environments
		for ( i = 0, l = config.modules.length; i < l; i++ ) {
			modulesLog.push({
				name: config.modules[ i ].name,
				tests: config.modules[ i ].tests
			});
		}

		// The test run is officially beginning now
		runLoggingCallbacks( "begin", {
			totalTests: Test.count,
			modules: modulesLog
		});
	}

	config.blocking = false;
	process( true );
}

function resumeProcessing() {
	runStarted = true;

	// A slight delay to allow this iteration of the event loop to finish (more assertions, etc.)
	if ( defined.setTimeout ) {
		setTimeout(function() {
			if ( config.current && config.current.semaphore > 0 ) {
				return;
			}
			if ( config.timeout ) {
				clearTimeout( config.timeout );
			}

			begin();
		}, 13 );
	} else {
		begin();
	}
}

function pauseProcessing() {
	config.blocking = true;

	if ( config.testTimeout && defined.setTimeout ) {
		clearTimeout( config.timeout );
		config.timeout = setTimeout(function() {
			if ( config.current ) {
				config.current.semaphore = 0;
				QUnit.pushFailure( "Test timed out", sourceFromStacktrace( 2 ) );
			} else {
				throw new Error( "Test timed out" );
			}
			resumeProcessing();
		}, config.testTimeout );
	}
}

function saveGlobal() {
	config.pollution = [];

	if ( config.noglobals ) {
		for ( var key in window ) {
			if ( hasOwn.call( window, key ) ) {
				// in Opera sometimes DOM element ids show up here, ignore them
				if ( /^qunit-test-output/.test( key ) ) {
					continue;
				}
				config.pollution.push( key );
			}
		}
	}
}

function checkPollution() {
	var newGlobals,
		deletedGlobals,
		old = config.pollution;

	saveGlobal();

	newGlobals = diff( config.pollution, old );
	if ( newGlobals.length > 0 ) {
		QUnit.pushFailure( "Introduced global variable(s): " + newGlobals.join( ", " ) );
	}

	deletedGlobals = diff( old, config.pollution );
	if ( deletedGlobals.length > 0 ) {
		QUnit.pushFailure( "Deleted global variable(s): " + deletedGlobals.join( ", " ) );
	}
}

// returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
	var i, j,
		result = a.slice();

	for ( i = 0; i < result.length; i++ ) {
		for ( j = 0; j < b.length; j++ ) {
			if ( result[ i ] === b[ j ] ) {
				result.splice( i, 1 );
				i--;
				break;
			}
		}
	}
	return result;
}

function extend( a, b, undefOnly ) {
	for ( var prop in b ) {
		if ( hasOwn.call( b, prop ) ) {

			// Avoid "Member not found" error in IE8 caused by messing with window.constructor
			if ( !( prop === "constructor" && a === window ) ) {
				if ( b[ prop ] === undefined ) {
					delete a[ prop ];
				} else if ( !( undefOnly && typeof a[ prop ] !== "undefined" ) ) {
					a[ prop ] = b[ prop ];
				}
			}
		}
	}

	return a;
}

function runLoggingCallbacks( key, args ) {
	var i, l, callbacks;

	callbacks = config.callbacks[ key ];
	for ( i = 0, l = callbacks.length; i < l; i++ ) {
		callbacks[ i ]( args );
	}
}

// DEPRECATED: This will be removed on 2.0.0+
// This function verifies if the loggingCallbacks were modified by the user
// If so, it will restore it, assign the given callback and print a console warning
function verifyLoggingCallbacks() {
	var loggingCallback, userCallback;

	for ( loggingCallback in loggingCallbacks ) {
		if ( QUnit[ loggingCallback ] !== loggingCallbacks[ loggingCallback ] ) {

			userCallback = QUnit[ loggingCallback ];

			// Restore the callback function
			QUnit[ loggingCallback ] = loggingCallbacks[ loggingCallback ];

			// Assign the deprecated given callback
			QUnit[ loggingCallback ]( userCallback );

			if ( window.console && window.console.warn ) {
				window.console.warn(
					"QUnit." + loggingCallback + " was replaced with a new value.\n" +
					"Please, check out the documentation on how to apply logging callbacks.\n" +
					"Reference: http://api.qunitjs.com/category/callbacks/"
				);
			}
		}
	}
}

// from jquery.js
function inArray( elem, array ) {
	if ( array.indexOf ) {
		return array.indexOf( elem );
	}

	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[ i ] === elem ) {
			return i;
		}
	}

	return -1;
}

function Test( settings ) {
	var i, l;

	++Test.count;

	extend( this, settings );
	this.assertions = [];
	this.semaphore = 0;
	this.usedAsync = false;
	this.module = config.currentModule;
	this.stack = sourceFromStacktrace( 3 );

	// Register unique strings
	for ( i = 0, l = this.module.tests; i < l.length; i++ ) {
		if ( this.module.tests[ i ].name === this.testName ) {
			this.testName += " ";
		}
	}

	this.testId = generateHash( this.module.name, this.testName );

	this.module.tests.push({
		name: this.testName,
		testId: this.testId
	});

	if ( settings.skip ) {

		// Skipped tests will fully ignore any sent callback
		this.callback = function() {};
		this.async = false;
		this.expected = 0;
	} else {
		this.assert = new Assert( this );
	}
}

Test.count = 0;

Test.prototype = {
	before: function() {
		if (

			// Emit moduleStart when we're switching from one module to another
			this.module !== config.previousModule ||

				// They could be equal (both undefined) but if the previousModule property doesn't
				// yet exist it means this is the first test in a suite that isn't wrapped in a
				// module, in which case we'll just emit a moduleStart event for 'undefined'.
				// Without this, reporters can get testStart before moduleStart  which is a problem.
				!hasOwn.call( config, "previousModule" )
		) {
			if ( hasOwn.call( config, "previousModule" ) ) {
				runLoggingCallbacks( "moduleDone", {
					name: config.previousModule.name,
					tests: config.previousModule.tests,
					failed: config.moduleStats.bad,
					passed: config.moduleStats.all - config.moduleStats.bad,
					total: config.moduleStats.all,
					runtime: now() - config.moduleStats.started
				});
			}
			config.previousModule = this.module;
			config.moduleStats = { all: 0, bad: 0, started: now() };
			runLoggingCallbacks( "moduleStart", {
				name: this.module.name,
				tests: this.module.tests
			});
		}

		config.current = this;

		this.testEnvironment = extend( {}, this.module.testEnvironment );
		delete this.testEnvironment.beforeEach;
		delete this.testEnvironment.afterEach;

		this.started = now();
		runLoggingCallbacks( "testStart", {
			name: this.testName,
			module: this.module.name,
			testId: this.testId
		});

		if ( !config.pollution ) {
			saveGlobal();
		}
	},

	run: function() {
		var promise;

		config.current = this;

		if ( this.async ) {
			QUnit.stop();
		}

		this.callbackStarted = now();

		if ( config.notrycatch ) {
			promise = this.callback.call( this.testEnvironment, this.assert );
			this.resolvePromise( promise );
			return;
		}

		try {
			promise = this.callback.call( this.testEnvironment, this.assert );
			this.resolvePromise( promise );
		} catch ( e ) {
			this.pushFailure( "Died on test #" + ( this.assertions.length + 1 ) + " " +
				this.stack + ": " + ( e.message || e ), extractStacktrace( e, 0 ) );

			// else next test will carry the responsibility
			saveGlobal();

			// Restart the tests if they're blocking
			if ( config.blocking ) {
				QUnit.start();
			}
		}
	},

	after: function() {
		checkPollution();
	},

	queueHook: function( hook, hookName ) {
		var promise,
			test = this;
		return function runHook() {
			config.current = test;
			if ( config.notrycatch ) {
				promise = hook.call( test.testEnvironment, test.assert );
				test.resolvePromise( promise, hookName );
				return;
			}
			try {
				promise = hook.call( test.testEnvironment, test.assert );
				test.resolvePromise( promise, hookName );
			} catch ( error ) {
				test.pushFailure( hookName + " failed on " + test.testName + ": " +
					( error.message || error ), extractStacktrace( error, 0 ) );
			}
		};
	},

	// Currently only used for module level hooks, can be used to add global level ones
	hooks: function( handler ) {
		var hooks = [];

		// Hooks are ignored on skipped tests
		if ( this.skip ) {
			return hooks;
		}

		if ( this.module.testEnvironment &&
				QUnit.objectType( this.module.testEnvironment[ handler ] ) === "function" ) {
			hooks.push( this.queueHook( this.module.testEnvironment[ handler ], handler ) );
		}

		return hooks;
	},

	finish: function() {
		config.current = this;
		if ( config.requireExpects && this.expected === null ) {
			this.pushFailure( "Expected number of assertions to be defined, but expect() was " +
				"not called.", this.stack );
		} else if ( this.expected !== null && this.expected !== this.assertions.length ) {
			this.pushFailure( "Expected " + this.expected + " assertions, but " +
				this.assertions.length + " were run", this.stack );
		} else if ( this.expected === null && !this.assertions.length ) {
			this.pushFailure( "Expected at least one assertion, but none were run - call " +
				"expect(0) to accept zero assertions.", this.stack );
		}

		var i,
			bad = 0;

		this.runtime = now() - this.started;
		config.stats.all += this.assertions.length;
		config.moduleStats.all += this.assertions.length;

		for ( i = 0; i < this.assertions.length; i++ ) {
			if ( !this.assertions[ i ].result ) {
				bad++;
				config.stats.bad++;
				config.moduleStats.bad++;
			}
		}

		runLoggingCallbacks( "testDone", {
			name: this.testName,
			module: this.module.name,
			skipped: !!this.skip,
			failed: bad,
			passed: this.assertions.length - bad,
			total: this.assertions.length,
			runtime: this.runtime,

			// HTML Reporter use
			assertions: this.assertions,
			testId: this.testId,

			// DEPRECATED: this property will be removed in 2.0.0, use runtime instead
			duration: this.runtime
		});

		// QUnit.reset() is deprecated and will be replaced for a new
		// fixture reset function on QUnit 2.0/2.1.
		// It's still called here for backwards compatibility handling
		QUnit.reset();

		config.current = undefined;
	},

	queue: function() {
		var bad,
			test = this;

		if ( !this.valid() ) {
			return;
		}

		function run() {

			// each of these can by async
			synchronize([
				function() {
					test.before();
				},

				test.hooks( "beforeEach" ),

				function() {
					test.run();
				},

				test.hooks( "afterEach" ).reverse(),

				function() {
					test.after();
				},
				function() {
					test.finish();
				}
			]);
		}

		// `bad` initialized at top of scope
		// defer when previous test run passed, if storage is available
		bad = QUnit.config.reorder && defined.sessionStorage &&
				+sessionStorage.getItem( "qunit-test-" + this.module.name + "-" + this.testName );

		if ( bad ) {
			run();
		} else {
			synchronize( run, true );
		}
	},

	push: function( result, actual, expected, message ) {
		var source,
			details = {
				module: this.module.name,
				name: this.testName,
				result: result,
				message: message,
				actual: actual,
				expected: expected,
				testId: this.testId,
				runtime: now() - this.started
			};

		if ( !result ) {
			source = sourceFromStacktrace();

			if ( source ) {
				details.source = source;
			}
		}

		runLoggingCallbacks( "log", details );

		this.assertions.push({
			result: !!result,
			message: message
		});
	},

	pushFailure: function( message, source, actual ) {
		if ( !this instanceof Test ) {
			throw new Error( "pushFailure() assertion outside test context, was " +
				sourceFromStacktrace( 2 ) );
		}

		var details = {
				module: this.module.name,
				name: this.testName,
				result: false,
				message: message || "error",
				actual: actual || null,
				testId: this.testId,
				runtime: now() - this.started
			};

		if ( source ) {
			details.source = source;
		}

		runLoggingCallbacks( "log", details );

		this.assertions.push({
			result: false,
			message: message
		});
	},

	resolvePromise: function( promise, phase ) {
		var then, message,
			test = this;
		if ( promise != null ) {
			then = promise.then;
			if ( QUnit.objectType( then ) === "function" ) {
				QUnit.stop();
				then.call(
					promise,
					QUnit.start,
					function( error ) {
						message = "Promise rejected " +
							( !phase ? "during" : phase.replace( /Each$/, "" ) ) +
							" " + test.testName + ": " + ( error.message || error );
						test.pushFailure( message, extractStacktrace( error, 0 ) );

						// else next test will carry the responsibility
						saveGlobal();

						// Unblock
						QUnit.start();
					}
				);
			}
		}
	},

	valid: function() {
		var include,
			filter = config.filter && config.filter.toLowerCase(),
			module = QUnit.urlParams.module && QUnit.urlParams.module.toLowerCase(),
			fullName = ( this.module.name + ": " + this.testName ).toLowerCase();

		// Internally-generated tests are always valid
		if ( this.callback && this.callback.validTest ) {
			return true;
		}

		if ( config.testId.length > 0 && inArray( this.testId, config.testId ) < 0 ) {
			return false;
		}

		if ( module && ( !this.module.name || this.module.name.toLowerCase() !== module ) ) {
			return false;
		}

		if ( !filter ) {
			return true;
		}

		include = filter.charAt( 0 ) !== "!";
		if ( !include ) {
			filter = filter.slice( 1 );
		}

		// If the filter matches, we need to honour include
		if ( fullName.indexOf( filter ) !== -1 ) {
			return include;
		}

		// Otherwise, do the opposite
		return !include;
	}

};

// Resets the test setup. Useful for tests that modify the DOM.
/*
DEPRECATED: Use multiple tests instead of resetting inside a test.
Use testStart or testDone for custom cleanup.
This method will throw an error in 2.0, and will be removed in 2.1
*/
QUnit.reset = function() {

	// Return on non-browser environments
	// This is necessary to not break on node tests
	if ( typeof window === "undefined" ) {
		return;
	}

	var fixture = defined.document && document.getElementById &&
			document.getElementById( "qunit-fixture" );

	if ( fixture ) {
		fixture.innerHTML = config.fixture;
	}
};

QUnit.pushFailure = function() {
	if ( !QUnit.config.current ) {
		throw new Error( "pushFailure() assertion outside test context, in " +
			sourceFromStacktrace( 2 ) );
	}

	// Gets current test obj
	var currentTest = QUnit.config.current;

	return currentTest.pushFailure.apply( currentTest, arguments );
};

// Based on Java's String.hashCode, a simple but not
// rigorously collision resistant hashing function
function generateHash( module, testName ) {
	var hex,
		i = 0,
		hash = 0,
		str = module + "\x1C" + testName,
		len = str.length;

	for ( ; i < len; i++ ) {
		hash  = ( ( hash << 5 ) - hash ) + str.charCodeAt( i );
		hash |= 0;
	}

	// Convert the possibly negative integer hash code into an 8 character hex string, which isn't
	// strictly necessary but increases user understanding that the id is a SHA-like hash
	hex = ( 0x100000000 + hash ).toString( 16 );
	if ( hex.length < 8 ) {
		hex = "0000000" + hex;
	}

	return hex.slice( -8 );
}

function Assert( testContext ) {
	this.test = testContext;
}

// Assert helpers
QUnit.assert = Assert.prototype = {

	// Specify the number of expected assertions to guarantee that failed test
	// (no assertions are run at all) don't slip through.
	expect: function( asserts ) {
		if ( arguments.length === 1 ) {
			this.test.expected = asserts;
		} else {
			return this.test.expected;
		}
	},

	// Increment this Test's semaphore counter, then return a single-use function that
	// decrements that counter a maximum of once.
	async: function() {
		var test = this.test,
			popped = false;

		test.semaphore += 1;
		test.usedAsync = true;
		pauseProcessing();

		return function done() {
			if ( !popped ) {
				test.semaphore -= 1;
				popped = true;
				resumeProcessing();
			} else {
				test.pushFailure( "Called the callback returned from `assert.async` more than once",
					sourceFromStacktrace( 2 ) );
			}
		};
	},

	// Exports test.push() to the user API
	push: function( /* result, actual, expected, message */ ) {
		var assert = this,
			currentTest = ( assert instanceof Assert && assert.test ) || QUnit.config.current;

		// Backwards compatibility fix.
		// Allows the direct use of global exported assertions and QUnit.assert.*
		// Although, it's use is not recommended as it can leak assertions
		// to other tests from async tests, because we only get a reference to the current test,
		// not exactly the test where assertion were intended to be called.
		if ( !currentTest ) {
			throw new Error( "assertion outside test context, in " + sourceFromStacktrace( 2 ) );
		}

		if ( currentTest.usedAsync === true && currentTest.semaphore === 0 ) {
			currentTest.pushFailure( "Assertion after the final `assert.async` was resolved",
				sourceFromStacktrace( 2 ) );

			// Allow this assertion to continue running anyway...
		}

		if ( !( assert instanceof Assert ) ) {
			assert = currentTest.assert;
		}
		return assert.test.push.apply( assert.test, arguments );
	},

	ok: function( result, message ) {
		message = message || ( result ? "okay" : "failed, expected argument to be truthy, was: " +
			QUnit.dump.parse( result ) );
		this.push( !!result, result, true, message );
	},

	notOk: function( result, message ) {
		message = message || ( !result ? "okay" : "failed, expected argument to be falsy, was: " +
			QUnit.dump.parse( result ) );
		this.push( !result, result, false, message );
	},

	equal: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		this.push( expected == actual, actual, expected, message );
	},

	notEqual: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		this.push( expected != actual, actual, expected, message );
	},

	propEqual: function( actual, expected, message ) {
		actual = objectValues( actual );
		expected = objectValues( expected );
		this.push( QUnit.equiv( actual, expected ), actual, expected, message );
	},

	notPropEqual: function( actual, expected, message ) {
		actual = objectValues( actual );
		expected = objectValues( expected );
		this.push( !QUnit.equiv( actual, expected ), actual, expected, message );
	},

	deepEqual: function( actual, expected, message ) {
		this.push( QUnit.equiv( actual, expected ), actual, expected, message );
	},

	notDeepEqual: function( actual, expected, message ) {
		this.push( !QUnit.equiv( actual, expected ), actual, expected, message );
	},

	strictEqual: function( actual, expected, message ) {
		this.push( expected === actual, actual, expected, message );
	},

	notStrictEqual: function( actual, expected, message ) {
		this.push( expected !== actual, actual, expected, message );
	},

	"throws": function( block, expected, message ) {
		var actual, expectedType,
			expectedOutput = expected,
			ok = false,
			currentTest = ( this instanceof Assert && this.test ) || QUnit.config.current;

		// 'expected' is optional unless doing string comparison
		if ( message == null && typeof expected === "string" ) {
			message = expected;
			expected = null;
		}

		currentTest.ignoreGlobalErrors = true;
		try {
			block.call( currentTest.testEnvironment );
		} catch (e) {
			actual = e;
		}
		currentTest.ignoreGlobalErrors = false;

		if ( actual ) {
			expectedType = QUnit.objectType( expected );

			// we don't want to validate thrown error
			if ( !expected ) {
				ok = true;
				expectedOutput = null;

			// expected is a regexp
			} else if ( expectedType === "regexp" ) {
				ok = expected.test( errorString( actual ) );

			// expected is a string
			} else if ( expectedType === "string" ) {
				ok = expected === errorString( actual );

			// expected is a constructor, maybe an Error constructor
			} else if ( expectedType === "function" && actual instanceof expected ) {
				ok = true;

			// expected is an Error object
			} else if ( expectedType === "object" ) {
				ok = actual instanceof expected.constructor &&
					actual.name === expected.name &&
					actual.message === expected.message;

			// expected is a validation function which returns true if validation passed
			} else if ( expectedType === "function" && expected.call( {}, actual ) === true ) {
				expectedOutput = null;
				ok = true;
			}
		}

		currentTest.assert.push( ok, actual, expectedOutput, message );
	}
};

// Provide an alternative to assert.throws(), for enviroments that consider throws a reserved word
// Known to us are: Closure Compiler, Narwhal
(function() {
	/*jshint sub:true */
	Assert.prototype.raises = Assert.prototype[ "throws" ];
}());

// Test for equality any JavaScript type.
// Author: Philippe Rathé <prathe@gmail.com>
QUnit.equiv = (function() {

	// Call the o related callback with the given arguments.
	function bindCallbacks( o, callbacks, args ) {
		var prop = QUnit.objectType( o );
		if ( prop ) {
			if ( QUnit.objectType( callbacks[ prop ] ) === "function" ) {
				return callbacks[ prop ].apply( callbacks, args );
			} else {
				return callbacks[ prop ]; // or undefined
			}
		}
	}

	// the real equiv function
	var innerEquiv,

		// stack to decide between skip/abort functions
		callers = [],

		// stack to avoiding loops from circular referencing
		parents = [],
		parentsB = [],

		getProto = Object.getPrototypeOf || function( obj ) {
			/* jshint camelcase: false, proto: true */
			return obj.__proto__;
		},
		callbacks = (function() {

			// for string, boolean, number and null
			function useStrictEquality( b, a ) {

				/*jshint eqeqeq:false */
				if ( b instanceof a.constructor || a instanceof b.constructor ) {

					// to catch short annotation VS 'new' annotation of a
					// declaration
					// e.g. var i = 1;
					// var j = new Number(1);
					return a == b;
				} else {
					return a === b;
				}
			}

			return {
				"string": useStrictEquality,
				"boolean": useStrictEquality,
				"number": useStrictEquality,
				"null": useStrictEquality,
				"undefined": useStrictEquality,

				"nan": function( b ) {
					return isNaN( b );
				},

				"date": function( b, a ) {
					return QUnit.objectType( b ) === "date" && a.valueOf() === b.valueOf();
				},

				"regexp": function( b, a ) {
					return QUnit.objectType( b ) === "regexp" &&

						// the regex itself
						a.source === b.source &&

						// and its modifiers
						a.global === b.global &&

						// (gmi) ...
						a.ignoreCase === b.ignoreCase &&
						a.multiline === b.multiline &&
						a.sticky === b.sticky;
				},

				// - skip when the property is a method of an instance (OOP)
				// - abort otherwise,
				// initial === would have catch identical references anyway
				"function": function() {
					var caller = callers[ callers.length - 1 ];
					return caller !== Object && typeof caller !== "undefined";
				},

				"array": function( b, a ) {
					var i, j, len, loop, aCircular, bCircular;

					// b could be an object literal here
					if ( QUnit.objectType( b ) !== "array" ) {
						return false;
					}

					len = a.length;
					if ( len !== b.length ) {
						// safe and faster
						return false;
					}

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );
					for ( i = 0; i < len; i++ ) {
						loop = false;
						for ( j = 0; j < parents.length; j++ ) {
							aCircular = parents[ j ] === a[ i ];
							bCircular = parentsB[ j ] === b[ i ];
							if ( aCircular || bCircular ) {
								if ( a[ i ] === b[ i ] || aCircular && bCircular ) {
									loop = true;
								} else {
									parents.pop();
									parentsB.pop();
									return false;
								}
							}
						}
						if ( !loop && !innerEquiv( a[ i ], b[ i ] ) ) {
							parents.pop();
							parentsB.pop();
							return false;
						}
					}
					parents.pop();
					parentsB.pop();
					return true;
				},

				"object": function( b, a ) {

					/*jshint forin:false */
					var i, j, loop, aCircular, bCircular,
						// Default to true
						eq = true,
						aProperties = [],
						bProperties = [];

					// comparing constructors is more strict than using
					// instanceof
					if ( a.constructor !== b.constructor ) {

						// Allow objects with no prototype to be equivalent to
						// objects with Object as their constructor.
						if ( !( ( getProto( a ) === null && getProto( b ) === Object.prototype ) ||
							( getProto( b ) === null && getProto( a ) === Object.prototype ) ) ) {
							return false;
						}
					}

					// stack constructor before traversing properties
					callers.push( a.constructor );

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );

					// be strict: don't ensure hasOwnProperty and go deep
					for ( i in a ) {
						loop = false;
						for ( j = 0; j < parents.length; j++ ) {
							aCircular = parents[ j ] === a[ i ];
							bCircular = parentsB[ j ] === b[ i ];
							if ( aCircular || bCircular ) {
								if ( a[ i ] === b[ i ] || aCircular && bCircular ) {
									loop = true;
								} else {
									eq = false;
									break;
								}
							}
						}
						aProperties.push( i );
						if ( !loop && !innerEquiv( a[ i ], b[ i ] ) ) {
							eq = false;
							break;
						}
					}

					parents.pop();
					parentsB.pop();
					callers.pop(); // unstack, we are done

					for ( i in b ) {
						bProperties.push( i ); // collect b's properties
					}

					// Ensures identical properties name
					return eq && innerEquiv( aProperties.sort(), bProperties.sort() );
				}
			};
		}());

	innerEquiv = function() { // can take multiple arguments
		var args = [].slice.apply( arguments );
		if ( args.length < 2 ) {
			return true; // end transition
		}

		return ( (function( a, b ) {
			if ( a === b ) {
				return true; // catch the most you can
			} else if ( a === null || b === null || typeof a === "undefined" ||
					typeof b === "undefined" ||
					QUnit.objectType( a ) !== QUnit.objectType( b ) ) {

				// don't lose time with error prone cases
				return false;
			} else {
				return bindCallbacks( a, callbacks, [ b, a ] );
			}

			// apply transition with (1..n) arguments
		}( args[ 0 ], args[ 1 ] ) ) &&
			innerEquiv.apply( this, args.splice( 1, args.length - 1 ) ) );
	};

	return innerEquiv;
}());

// Based on jsDump by Ariel Flesler
// http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html
QUnit.dump = (function() {
	function quote( str ) {
		return "\"" + str.toString().replace( /"/g, "\\\"" ) + "\"";
	}
	function literal( o ) {
		return o + "";
	}
	function join( pre, arr, post ) {
		var s = dump.separator(),
			base = dump.indent(),
			inner = dump.indent( 1 );
		if ( arr.join ) {
			arr = arr.join( "," + s + inner );
		}
		if ( !arr ) {
			return pre + post;
		}
		return [ pre, inner + arr, base + post ].join( s );
	}
	function array( arr, stack ) {
		var i = arr.length,
			ret = new Array( i );

		if ( dump.maxDepth && dump.depth > dump.maxDepth ) {
			return "[object Array]";
		}

		this.up();
		while ( i-- ) {
			ret[ i ] = this.parse( arr[ i ], undefined, stack );
		}
		this.down();
		return join( "[", ret, "]" );
	}

	var reName = /^function (\w+)/,
		dump = {

			// objType is used mostly internally, you can fix a (custom) type in advance
			parse: function( obj, objType, stack ) {
				stack = stack || [];
				var res, parser, parserType,
					inStack = inArray( obj, stack );

				if ( inStack !== -1 ) {
					return "recursion(" + ( inStack - stack.length ) + ")";
				}

				objType = objType || this.typeOf( obj  );
				parser = this.parsers[ objType ];
				parserType = typeof parser;

				if ( parserType === "function" ) {
					stack.push( obj );
					res = parser.call( this, obj, stack );
					stack.pop();
					return res;
				}
				return ( parserType === "string" ) ? parser : this.parsers.error;
			},
			typeOf: function( obj ) {
				var type;
				if ( obj === null ) {
					type = "null";
				} else if ( typeof obj === "undefined" ) {
					type = "undefined";
				} else if ( QUnit.is( "regexp", obj ) ) {
					type = "regexp";
				} else if ( QUnit.is( "date", obj ) ) {
					type = "date";
				} else if ( QUnit.is( "function", obj ) ) {
					type = "function";
				} else if ( obj.setInterval !== undefined &&
						obj.document !== undefined &&
						obj.nodeType === undefined ) {
					type = "window";
				} else if ( obj.nodeType === 9 ) {
					type = "document";
				} else if ( obj.nodeType ) {
					type = "node";
				} else if (

					// native arrays
					toString.call( obj ) === "[object Array]" ||

					// NodeList objects
					( typeof obj.length === "number" && obj.item !== undefined &&
					( obj.length ? obj.item( 0 ) === obj[ 0 ] : ( obj.item( 0 ) === null &&
					obj[ 0 ] === undefined ) ) )
				) {
					type = "array";
				} else if ( obj.constructor === Error.prototype.constructor ) {
					type = "error";
				} else {
					type = typeof obj;
				}
				return type;
			},
			separator: function() {
				return this.multiline ? this.HTML ? "<br />" : "\n" : this.HTML ? "&#160;" : " ";
			},
			// extra can be a number, shortcut for increasing-calling-decreasing
			indent: function( extra ) {
				if ( !this.multiline ) {
					return "";
				}
				var chr = this.indentChar;
				if ( this.HTML ) {
					chr = chr.replace( /\t/g, "   " ).replace( / /g, "&#160;" );
				}
				return new Array( this.depth + ( extra || 0 ) ).join( chr );
			},
			up: function( a ) {
				this.depth += a || 1;
			},
			down: function( a ) {
				this.depth -= a || 1;
			},
			setParser: function( name, parser ) {
				this.parsers[ name ] = parser;
			},
			// The next 3 are exposed so you can use them
			quote: quote,
			literal: literal,
			join: join,
			//
			depth: 1,
			maxDepth: QUnit.config.maxDepth,

			// This is the list of parsers, to modify them, use dump.setParser
			parsers: {
				window: "[Window]",
				document: "[Document]",
				error: function( error ) {
					return "Error(\"" + error.message + "\")";
				},
				unknown: "[Unknown]",
				"null": "null",
				"undefined": "undefined",
				"function": function( fn ) {
					var ret = "function",

						// functions never have name in IE
						name = "name" in fn ? fn.name : ( reName.exec( fn ) || [] )[ 1 ];

					if ( name ) {
						ret += " " + name;
					}
					ret += "( ";

					ret = [ ret, dump.parse( fn, "functionArgs" ), "){" ].join( "" );
					return join( ret, dump.parse( fn, "functionCode" ), "}" );
				},
				array: array,
				nodelist: array,
				"arguments": array,
				object: function( map, stack ) {
					var keys, key, val, i, nonEnumerableProperties,
						ret = [];

					if ( dump.maxDepth && dump.depth > dump.maxDepth ) {
						return "[object Object]";
					}

					dump.up();
					keys = [];
					for ( key in map ) {
						keys.push( key );
					}

					// Some properties are not always enumerable on Error objects.
					nonEnumerableProperties = [ "message", "name" ];
					for ( i in nonEnumerableProperties ) {
						key = nonEnumerableProperties[ i ];
						if ( key in map && inArray( key, keys ) < 0 ) {
							keys.push( key );
						}
					}
					keys.sort();
					for ( i = 0; i < keys.length; i++ ) {
						key = keys[ i ];
						val = map[ key ];
						ret.push( dump.parse( key, "key" ) + ": " +
							dump.parse( val, undefined, stack ) );
					}
					dump.down();
					return join( "{", ret, "}" );
				},
				node: function( node ) {
					var len, i, val,
						open = dump.HTML ? "&lt;" : "<",
						close = dump.HTML ? "&gt;" : ">",
						tag = node.nodeName.toLowerCase(),
						ret = open + tag,
						attrs = node.attributes;

					if ( attrs ) {
						for ( i = 0, len = attrs.length; i < len; i++ ) {
							val = attrs[ i ].nodeValue;

							// IE6 includes all attributes in .attributes, even ones not explicitly
							// set. Those have values like undefined, null, 0, false, "" or
							// "inherit".
							if ( val && val !== "inherit" ) {
								ret += " " + attrs[ i ].nodeName + "=" +
									dump.parse( val, "attribute" );
							}
						}
					}
					ret += close;

					// Show content of TextNode or CDATASection
					if ( node.nodeType === 3 || node.nodeType === 4 ) {
						ret += node.nodeValue;
					}

					return ret + open + "/" + tag + close;
				},

				// function calls it internally, it's the arguments part of the function
				functionArgs: function( fn ) {
					var args,
						l = fn.length;

					if ( !l ) {
						return "";
					}

					args = new Array( l );
					while ( l-- ) {

						// 97 is 'a'
						args[ l ] = String.fromCharCode( 97 + l );
					}
					return " " + args.join( ", " ) + " ";
				},
				// object calls it internally, the key part of an item in a map
				key: quote,
				// function calls it internally, it's the content of the function
				functionCode: "[code]",
				// node calls it internally, it's an html attribute value
				attribute: quote,
				string: quote,
				date: quote,
				regexp: literal,
				number: literal,
				"boolean": literal
			},
			// if true, entities are escaped ( <, >, \t, space and \n )
			HTML: false,
			// indentation unit
			indentChar: "  ",
			// if true, items in a collection, are separated by a \n, else just a space.
			multiline: true
		};

	return dump;
}());

// back compat
QUnit.jsDump = QUnit.dump;

// For browser, export only select globals
if ( typeof window !== "undefined" ) {

	// Deprecated
	// Extend assert methods to QUnit and Global scope through Backwards compatibility
	(function() {
		var i,
			assertions = Assert.prototype;

		function applyCurrent( current ) {
			return function() {
				var assert = new Assert( QUnit.config.current );
				current.apply( assert, arguments );
			};
		}

		for ( i in assertions ) {
			QUnit[ i ] = applyCurrent( assertions[ i ] );
		}
	})();

	(function() {
		var i, l,
			keys = [
				"test",
				"module",
				"expect",
				"asyncTest",
				"start",
				"stop",
				"ok",
				"notOk",
				"equal",
				"notEqual",
				"propEqual",
				"notPropEqual",
				"deepEqual",
				"notDeepEqual",
				"strictEqual",
				"notStrictEqual",
				"throws"
			];

		for ( i = 0, l = keys.length; i < l; i++ ) {
			window[ keys[ i ] ] = QUnit[ keys[ i ] ];
		}
	})();

	window.QUnit = QUnit;
}

// For nodejs
if ( typeof module !== "undefined" && module && module.exports ) {
	module.exports = QUnit;

	// For consistency with CommonJS environments' exports
	module.exports.QUnit = QUnit;
}

// For CommonJS with exports, but without module.exports, like Rhino
if ( typeof exports !== "undefined" && exports ) {
	exports.QUnit = QUnit;
}

if ( typeof define === "function" && define.amd ) {
	define( function() {
		return QUnit;
	} );
	QUnit.config.autostart = false;
}

// Get a reference to the global object, like window in browsers
}( (function() {
	return this;
})() ));

/*istanbul ignore next */
// jscs:disable maximumLineLength
/*
 * This file is a modified version of google-diff-match-patch's JavaScript implementation
 * (https://code.google.com/p/google-diff-match-patch/source/browse/trunk/javascript/diff_match_patch_uncompressed.js),
 * modifications are licensed as more fully set forth in LICENSE.txt.
 *
 * The original source of google-diff-match-patch is attributable and licensed as follows:
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * More Info:
 *  https://code.google.com/p/google-diff-match-patch/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff( "the quick brown fox jumped over", "the quick fox jumps over" ) === "the  quick <del>brown </del> fox jump<ins>s</ins><del>ed</del over"
 */
QUnit.diff = (function() {

    function DiffMatchPatch() {

        // Defaults.
        // Redefine these in your program to override the defaults.

        // Number of seconds to map a diff before giving up (0 for infinity).
        this.DiffTimeout = 1.0;
        // Cost of an empty edit operation in terms of edit characters.
        this.DiffEditCost = 4;
    }

    //  DIFF FUNCTIONS

    /**
     * The data structure representing a diff is an array of tuples:
     * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
     * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
     */
    var DIFF_DELETE = -1,
		DIFF_INSERT = 1,
		DIFF_EQUAL = 0;

    /**
     * Find the differences between two texts.  Simplifies the problem by stripping
     * any common prefix or suffix off the texts before diffing.
     * @param {string} text1 Old string to be diffed.
     * @param {string} text2 New string to be diffed.
     * @param {boolean=} optChecklines Optional speedup flag. If present and false,
     *     then don't run a line-level diff first to identify the changed areas.
     *     Defaults to true, which does a faster, slightly less optimal diff.
     * @param {number} optDeadline Optional time when the diff should be complete
     *     by.  Used internally for recursive calls.  Users should set DiffTimeout
     *     instead.
     * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
     */
    DiffMatchPatch.prototype.DiffMain = function( text1, text2, optChecklines, optDeadline ) {
        var deadline, checklines, commonlength,
			commonprefix, commonsuffix, diffs;
        // Set a deadline by which time the diff must be complete.
        if ( typeof optDeadline === "undefined" ) {
            if ( this.DiffTimeout <= 0 ) {
                optDeadline = Number.MAX_VALUE;
            } else {
                optDeadline = ( new Date() ).getTime() + this.DiffTimeout * 1000;
            }
        }
        deadline = optDeadline;

        // Check for null inputs.
        if ( text1 === null || text2 === null ) {
            throw new Error( "Null input. (DiffMain)" );
        }

        // Check for equality (speedup).
        if ( text1 === text2 ) {
            if ( text1 ) {
                return [
                    [ DIFF_EQUAL, text1 ]
                ];
            }
            return [];
        }

        if ( typeof optChecklines === "undefined" ) {
            optChecklines = true;
        }

        checklines = optChecklines;

        // Trim off common prefix (speedup).
        commonlength = this.diffCommonPrefix( text1, text2 );
        commonprefix = text1.substring( 0, commonlength );
        text1 = text1.substring( commonlength );
        text2 = text2.substring( commonlength );

        // Trim off common suffix (speedup).
        /////////
        commonlength = this.diffCommonSuffix( text1, text2 );
        commonsuffix = text1.substring( text1.length - commonlength );
        text1 = text1.substring( 0, text1.length - commonlength );
        text2 = text2.substring( 0, text2.length - commonlength );

        // Compute the diff on the middle block.
        diffs = this.diffCompute( text1, text2, checklines, deadline );

        // Restore the prefix and suffix.
        if ( commonprefix ) {
            diffs.unshift( [ DIFF_EQUAL, commonprefix ] );
        }
        if ( commonsuffix ) {
            diffs.push( [ DIFF_EQUAL, commonsuffix ] );
        }
        this.diffCleanupMerge( diffs );
        return diffs;
    };

    /**
     * Reduce the number of edits by eliminating operationally trivial equalities.
     * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
     */
    DiffMatchPatch.prototype.diffCleanupEfficiency = function( diffs ) {
        var changes, equalities, equalitiesLength, lastequality,
			pointer, preIns, preDel, postIns, postDel;
        changes = false;
        equalities = []; // Stack of indices where equalities are found.
        equalitiesLength = 0; // Keeping our own length var is faster in JS.
        /** @type {?string} */
        lastequality = null;
        // Always equal to diffs[equalities[equalitiesLength - 1]][1]
        pointer = 0; // Index of current position.
        // Is there an insertion operation before the last equality.
        preIns = false;
        // Is there a deletion operation before the last equality.
        preDel = false;
        // Is there an insertion operation after the last equality.
        postIns = false;
        // Is there a deletion operation after the last equality.
        postDel = false;
        while ( pointer < diffs.length ) {
            if ( diffs[ pointer ][ 0 ] === DIFF_EQUAL ) { // Equality found.
                if ( diffs[ pointer ][ 1 ].length < this.DiffEditCost && ( postIns || postDel ) ) {
                    // Candidate found.
                    equalities[ equalitiesLength++ ] = pointer;
                    preIns = postIns;
                    preDel = postDel;
                    lastequality = diffs[ pointer ][ 1 ];
                } else {
                    // Not a candidate, and can never become one.
                    equalitiesLength = 0;
                    lastequality = null;
                }
                postIns = postDel = false;
            } else { // An insertion or deletion.
                if ( diffs[ pointer ][ 0 ] === DIFF_DELETE ) {
                    postDel = true;
                } else {
                    postIns = true;
                }
                /*
                 * Five types to be split:
                 * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
                 * <ins>A</ins>X<ins>C</ins><del>D</del>
                 * <ins>A</ins><del>B</del>X<ins>C</ins>
                 * <ins>A</del>X<ins>C</ins><del>D</del>
                 * <ins>A</ins><del>B</del>X<del>C</del>
                 */
                if ( lastequality && ( ( preIns && preDel && postIns && postDel ) ||
                        ( ( lastequality.length < this.DiffEditCost / 2 ) &&
                            ( preIns + preDel + postIns + postDel ) === 3 ) ) ) {
                    // Duplicate record.
                    diffs.splice( equalities[equalitiesLength - 1], 0, [ DIFF_DELETE, lastequality ] );
                    // Change second copy to insert.
                    diffs[ equalities[ equalitiesLength - 1 ] + 1 ][ 0 ] = DIFF_INSERT;
                    equalitiesLength--; // Throw away the equality we just deleted;
                    lastequality = null;
                    if (preIns && preDel) {
                        // No changes made which could affect previous entry, keep going.
                        postIns = postDel = true;
                        equalitiesLength = 0;
                    } else {
                        equalitiesLength--; // Throw away the previous equality.
                        pointer = equalitiesLength > 0 ? equalities[ equalitiesLength - 1 ] : -1;
                        postIns = postDel = false;
                    }
                    changes = true;
                }
            }
            pointer++;
        }

        if ( changes ) {
            this.diffCleanupMerge( diffs );
        }
    };

    /**
     * Convert a diff array into a pretty HTML report.
     * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
     * @param {integer} string to be beautified.
     * @return {string} HTML representation.
     */
    DiffMatchPatch.prototype.diffPrettyHtml = function( diffs ) {
        var op, data, x, html = [];
        for ( x = 0; x < diffs.length; x++ ) {
            op = diffs[x][0]; // Operation (insert, delete, equal)
            data = diffs[x][1]; // Text of change.
            switch ( op ) {
                case DIFF_INSERT:
                    html[x] = "<ins>" + data + "</ins>";
                    break;
                case DIFF_DELETE:
                    html[x] = "<del>" + data + "</del>";
                    break;
                case DIFF_EQUAL:
                    html[x] = "<span>" + data + "</span>";
                    break;
            }
        }
        return html.join("");
    };

    /**
     * Determine the common prefix of two strings.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {number} The number of characters common to the start of each
     *     string.
     */
    DiffMatchPatch.prototype.diffCommonPrefix = function( text1, text2 ) {
        var pointermid, pointermax, pointermin, pointerstart;
        // Quick check for common null cases.
        if ( !text1 || !text2 || text1.charAt(0) !== text2.charAt(0) ) {
            return 0;
        }
        // Binary search.
        // Performance analysis: http://neil.fraser.name/news/2007/10/09/
        pointermin = 0;
        pointermax = Math.min( text1.length, text2.length );
        pointermid = pointermax;
        pointerstart = 0;
        while ( pointermin < pointermid ) {
            if ( text1.substring( pointerstart, pointermid ) === text2.substring( pointerstart, pointermid ) ) {
                pointermin = pointermid;
                pointerstart = pointermin;
            } else {
                pointermax = pointermid;
            }
            pointermid = Math.floor( ( pointermax - pointermin ) / 2 + pointermin );
        }
        return pointermid;
    };

    /**
     * Determine the common suffix of two strings.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {number} The number of characters common to the end of each string.
     */
    DiffMatchPatch.prototype.diffCommonSuffix = function( text1, text2 ) {
        var pointermid, pointermax, pointermin, pointerend;
        // Quick check for common null cases.
        if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
            return 0;
        }
        // Binary search.
        // Performance analysis: http://neil.fraser.name/news/2007/10/09/
        pointermin = 0;
        pointermax = Math.min(text1.length, text2.length);
        pointermid = pointermax;
        pointerend = 0;
        while ( pointermin < pointermid ) {
            if (text1.substring( text1.length - pointermid, text1.length - pointerend ) ===
                text2.substring( text2.length - pointermid, text2.length - pointerend ) ) {
                pointermin = pointermid;
                pointerend = pointermin;
            } else {
                pointermax = pointermid;
            }
            pointermid = Math.floor( ( pointermax - pointermin ) / 2 + pointermin );
        }
        return pointermid;
    };

    /**
     * Find the differences between two texts.  Assumes that the texts do not
     * have any common prefix or suffix.
     * @param {string} text1 Old string to be diffed.
     * @param {string} text2 New string to be diffed.
     * @param {boolean} checklines Speedup flag.  If false, then don't run a
     *     line-level diff first to identify the changed areas.
     *     If true, then run a faster, slightly less optimal diff.
     * @param {number} deadline Time when the diff should be complete by.
     * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
     * @private
     */
    DiffMatchPatch.prototype.diffCompute = function( text1, text2, checklines, deadline ) {
        var diffs, longtext, shorttext, i, hm,
			text1A, text2A, text1B, text2B,
			midCommon, diffsA, diffsB;

        if ( !text1 ) {
            // Just add some text (speedup).
            return [
                [ DIFF_INSERT, text2 ]
            ];
        }

        if (!text2) {
            // Just delete some text (speedup).
            return [
                [ DIFF_DELETE, text1 ]
            ];
        }

        longtext = text1.length > text2.length ? text1 : text2;
        shorttext = text1.length > text2.length ? text2 : text1;
        i = longtext.indexOf( shorttext );
        if ( i !== -1 ) {
            // Shorter text is inside the longer text (speedup).
            diffs = [
                [ DIFF_INSERT, longtext.substring( 0, i ) ],
                [ DIFF_EQUAL, shorttext ],
                [ DIFF_INSERT, longtext.substring( i + shorttext.length ) ]
            ];
            // Swap insertions for deletions if diff is reversed.
            if ( text1.length > text2.length ) {
                diffs[0][0] = diffs[2][0] = DIFF_DELETE;
            }
            return diffs;
        }

        if ( shorttext.length === 1 ) {
            // Single character string.
            // After the previous speedup, the character can't be an equality.
            return [
                [ DIFF_DELETE, text1 ],
                [ DIFF_INSERT, text2 ]
            ];
        }

        // Check to see if the problem can be split in two.
        hm = this.diffHalfMatch(text1, text2);
        if (hm) {
            // A half-match was found, sort out the return data.
            text1A = hm[0];
            text1B = hm[1];
            text2A = hm[2];
            text2B = hm[3];
            midCommon = hm[4];
            // Send both pairs off for separate processing.
            diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
            diffsB = this.DiffMain(text1B, text2B, checklines, deadline);
            // Merge the results.
            return diffsA.concat([
                [ DIFF_EQUAL, midCommon ]
            ], diffsB);
        }

        if (checklines && text1.length > 100 && text2.length > 100) {
            return this.diffLineMode(text1, text2, deadline);
        }

        return this.diffBisect(text1, text2, deadline);
    };

    /**
     * Do the two texts share a substring which is at least half the length of the
     * longer text?
     * This speedup can produce non-minimal diffs.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {Array.<string>} Five element Array, containing the prefix of
     *     text1, the suffix of text1, the prefix of text2, the suffix of
     *     text2 and the common middle.  Or null if there was no match.
     * @private
     */
    DiffMatchPatch.prototype.diffHalfMatch = function(text1, text2) {
        var longtext, shorttext, dmp,
			text1A, text2B, text2A, text1B, midCommon,
			hm1, hm2, hm;
        if (this.DiffTimeout <= 0) {
            // Don't risk returning a non-optimal diff if we have unlimited time.
            return null;
        }
        longtext = text1.length > text2.length ? text1 : text2;
        shorttext = text1.length > text2.length ? text2 : text1;
        if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
            return null; // Pointless.
        }
        dmp = this; // 'this' becomes 'window' in a closure.

        /**
         * Does a substring of shorttext exist within longtext such that the substring
         * is at least half the length of longtext?
         * Closure, but does not reference any external variables.
         * @param {string} longtext Longer string.
         * @param {string} shorttext Shorter string.
         * @param {number} i Start index of quarter length substring within longtext.
         * @return {Array.<string>} Five element Array, containing the prefix of
         *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
         *     of shorttext and the common middle.  Or null if there was no match.
         * @private
         */
        function diffHalfMatchI(longtext, shorttext, i) {
            var seed, j, bestCommon, prefixLength, suffixLength,
				bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;
            // Start with a 1/4 length substring at position i as a seed.
            seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
            j = -1;
            bestCommon = "";
            while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
                prefixLength = dmp.diffCommonPrefix(longtext.substring(i),
                    shorttext.substring(j));
                suffixLength = dmp.diffCommonSuffix(longtext.substring(0, i),
                    shorttext.substring(0, j));
                if (bestCommon.length < suffixLength + prefixLength) {
                    bestCommon = shorttext.substring(j - suffixLength, j) +
                        shorttext.substring(j, j + prefixLength);
                    bestLongtextA = longtext.substring(0, i - suffixLength);
                    bestLongtextB = longtext.substring(i + prefixLength);
                    bestShorttextA = shorttext.substring(0, j - suffixLength);
                    bestShorttextB = shorttext.substring(j + prefixLength);
                }
            }
            if (bestCommon.length * 2 >= longtext.length) {
                return [ bestLongtextA, bestLongtextB,
                    bestShorttextA, bestShorttextB, bestCommon
                ];
            } else {
                return null;
            }
        }

        // First check if the second quarter is the seed for a half-match.
        hm1 = diffHalfMatchI(longtext, shorttext,
            Math.ceil(longtext.length / 4));
        // Check again based on the third quarter.
        hm2 = diffHalfMatchI(longtext, shorttext,
            Math.ceil(longtext.length / 2));
        if (!hm1 && !hm2) {
            return null;
        } else if (!hm2) {
            hm = hm1;
        } else if (!hm1) {
            hm = hm2;
        } else {
            // Both matched.  Select the longest.
            hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
        }

        // A half-match was found, sort out the return data.
        text1A, text1B, text2A, text2B;
        if (text1.length > text2.length) {
            text1A = hm[0];
            text1B = hm[1];
            text2A = hm[2];
            text2B = hm[3];
        } else {
            text2A = hm[0];
            text2B = hm[1];
            text1A = hm[2];
            text1B = hm[3];
        }
        midCommon = hm[4];
        return [ text1A, text1B, text2A, text2B, midCommon ];
    };

    /**
     * Do a quick line-level diff on both strings, then rediff the parts for
     * greater accuracy.
     * This speedup can produce non-minimal diffs.
     * @param {string} text1 Old string to be diffed.
     * @param {string} text2 New string to be diffed.
     * @param {number} deadline Time when the diff should be complete by.
     * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
     * @private
     */
    DiffMatchPatch.prototype.diffLineMode = function(text1, text2, deadline) {
        var a, diffs, linearray, pointer, countInsert,
			countDelete, textInsert, textDelete, j;
        // Scan the text on a line-by-line basis first.
        a = this.diffLinesToChars(text1, text2);
        text1 = a.chars1;
        text2 = a.chars2;
        linearray = a.lineArray;

        diffs = this.DiffMain(text1, text2, false, deadline);

        // Convert the diff back to original text.
        this.diffCharsToLines(diffs, linearray);
        // Eliminate freak matches (e.g. blank lines)
        this.diffCleanupSemantic(diffs);

        // Rediff any replacement blocks, this time character-by-character.
        // Add a dummy entry at the end.
        diffs.push( [ DIFF_EQUAL, "" ] );
        pointer = 0;
        countDelete = 0;
        countInsert = 0;
        textDelete = "";
        textInsert = "";
        while (pointer < diffs.length) {
            switch ( diffs[pointer][0] ) {
                case DIFF_INSERT:
                    countInsert++;
                    textInsert += diffs[pointer][1];
                    break;
                case DIFF_DELETE:
                    countDelete++;
                    textDelete += diffs[pointer][1];
                    break;
                case DIFF_EQUAL:
                    // Upon reaching an equality, check for prior redundancies.
                    if (countDelete >= 1 && countInsert >= 1) {
                        // Delete the offending records and add the merged ones.
                        diffs.splice(pointer - countDelete - countInsert,
                            countDelete + countInsert);
                        pointer = pointer - countDelete - countInsert;
                        a = this.DiffMain(textDelete, textInsert, false, deadline);
                        for (j = a.length - 1; j >= 0; j--) {
                            diffs.splice( pointer, 0, a[j] );
                        }
                        pointer = pointer + a.length;
                    }
                    countInsert = 0;
                    countDelete = 0;
                    textDelete = "";
                    textInsert = "";
                    break;
            }
            pointer++;
        }
        diffs.pop(); // Remove the dummy entry at the end.

        return diffs;
    };

    /**
     * Find the 'middle snake' of a diff, split the problem in two
     * and return the recursively constructed diff.
     * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
     * @param {string} text1 Old string to be diffed.
     * @param {string} text2 New string to be diffed.
     * @param {number} deadline Time at which to bail if not yet complete.
     * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
     * @private
     */
    DiffMatchPatch.prototype.diffBisect = function(text1, text2, deadline) {
        var text1Length, text2Length, maxD, vOffset, vLength,
			v1, v2, x, delta, front, k1start, k1end, k2start,
			k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2;
        // Cache the text lengths to prevent multiple calls.
        text1Length = text1.length;
        text2Length = text2.length;
        maxD = Math.ceil((text1Length + text2Length) / 2);
        vOffset = maxD;
        vLength = 2 * maxD;
        v1 = new Array(vLength);
        v2 = new Array(vLength);
        // Setting all elements to -1 is faster in Chrome & Firefox than mixing
        // integers and undefined.
        for (x = 0; x < vLength; x++) {
            v1[x] = -1;
            v2[x] = -1;
        }
        v1[vOffset + 1] = 0;
        v2[vOffset + 1] = 0;
        delta = text1Length - text2Length;
        // If the total number of characters is odd, then the front path will collide
        // with the reverse path.
        front = (delta % 2 !== 0);
        // Offsets for start and end of k loop.
        // Prevents mapping of space beyond the grid.
        k1start = 0;
        k1end = 0;
        k2start = 0;
        k2end = 0;
        for (d = 0; d < maxD; d++) {
            // Bail out if deadline is reached.
            if ((new Date()).getTime() > deadline) {
                break;
            }

            // Walk the front path one step.
            for (k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
                k1Offset = vOffset + k1;
                if ( k1 === -d || ( k1 !== d && v1[ k1Offset - 1 ] < v1[ k1Offset + 1 ] ) ) {
                    x1 = v1[k1Offset + 1];
                } else {
                    x1 = v1[k1Offset - 1] + 1;
                }
                y1 = x1 - k1;
                while (x1 < text1Length && y1 < text2Length &&
                    text1.charAt(x1) === text2.charAt(y1)) {
                    x1++;
                    y1++;
                }
                v1[k1Offset] = x1;
                if (x1 > text1Length) {
                    // Ran off the right of the graph.
                    k1end += 2;
                } else if (y1 > text2Length) {
                    // Ran off the bottom of the graph.
                    k1start += 2;
                } else if (front) {
                    k2Offset = vOffset + delta - k1;
                    if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                        // Mirror x2 onto top-left coordinate system.
                        x2 = text1Length - v2[k2Offset];
                        if (x1 >= x2) {
                            // Overlap detected.
                            return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                        }
                    }
                }
            }

            // Walk the reverse path one step.
            for (k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
                k2Offset = vOffset + k2;
                if ( k2 === -d || (k2 !== d && v2[ k2Offset - 1 ] < v2[ k2Offset + 1 ] ) ) {
                    x2 = v2[k2Offset + 1];
                } else {
                    x2 = v2[k2Offset - 1] + 1;
                }
                y2 = x2 - k2;
                while (x2 < text1Length && y2 < text2Length &&
                    text1.charAt(text1Length - x2 - 1) ===
                    text2.charAt(text2Length - y2 - 1)) {
                    x2++;
                    y2++;
                }
                v2[k2Offset] = x2;
                if (x2 > text1Length) {
                    // Ran off the left of the graph.
                    k2end += 2;
                } else if (y2 > text2Length) {
                    // Ran off the top of the graph.
                    k2start += 2;
                } else if (!front) {
                    k1Offset = vOffset + delta - k2;
                    if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                        x1 = v1[k1Offset];
                        y1 = vOffset + x1 - k1Offset;
                        // Mirror x2 onto top-left coordinate system.
                        x2 = text1Length - x2;
                        if (x1 >= x2) {
                            // Overlap detected.
                            return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                        }
                    }
                }
            }
        }
        // Diff took too long and hit the deadline or
        // number of diffs equals number of characters, no commonality at all.
        return [
            [ DIFF_DELETE, text1 ],
            [ DIFF_INSERT, text2 ]
        ];
    };

    /**
     * Given the location of the 'middle snake', split the diff in two parts
     * and recurse.
     * @param {string} text1 Old string to be diffed.
     * @param {string} text2 New string to be diffed.
     * @param {number} x Index of split point in text1.
     * @param {number} y Index of split point in text2.
     * @param {number} deadline Time at which to bail if not yet complete.
     * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
     * @private
     */
    DiffMatchPatch.prototype.diffBisectSplit = function( text1, text2, x, y, deadline ) {
        var text1a, text1b, text2a, text2b, diffs, diffsb;
        text1a = text1.substring(0, x);
        text2a = text2.substring(0, y);
        text1b = text1.substring(x);
        text2b = text2.substring(y);

        // Compute both diffs serially.
        diffs = this.DiffMain(text1a, text2a, false, deadline);
        diffsb = this.DiffMain(text1b, text2b, false, deadline);

        return diffs.concat(diffsb);
    };

    /**
     * Reduce the number of edits by eliminating semantically trivial equalities.
     * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
     */
    DiffMatchPatch.prototype.diffCleanupSemantic = function(diffs) {
        var changes, equalities, equalitiesLength, lastequality,
			pointer, lengthInsertions2, lengthDeletions2, lengthInsertions1,
			lengthDeletions1, deletion, insertion, overlapLength1, overlapLength2;
        changes = false;
        equalities = []; // Stack of indices where equalities are found.
        equalitiesLength = 0; // Keeping our own length var is faster in JS.
        /** @type {?string} */
        lastequality = null;
        // Always equal to diffs[equalities[equalitiesLength - 1]][1]
        pointer = 0; // Index of current position.
        // Number of characters that changed prior to the equality.
        lengthInsertions1 = 0;
        lengthDeletions1 = 0;
        // Number of characters that changed after the equality.
        lengthInsertions2 = 0;
        lengthDeletions2 = 0;
        while (pointer < diffs.length) {
            if (diffs[pointer][0] === DIFF_EQUAL) { // Equality found.
                equalities[equalitiesLength++] = pointer;
                lengthInsertions1 = lengthInsertions2;
                lengthDeletions1 = lengthDeletions2;
                lengthInsertions2 = 0;
                lengthDeletions2 = 0;
                lastequality = diffs[pointer][1];
            } else { // An insertion or deletion.
                if (diffs[pointer][0] === DIFF_INSERT) {
                    lengthInsertions2 += diffs[pointer][1].length;
                } else {
                    lengthDeletions2 += diffs[pointer][1].length;
                }
                // Eliminate an equality that is smaller or equal to the edits on both
                // sides of it.
                if (lastequality && (lastequality.length <=
                        Math.max(lengthInsertions1, lengthDeletions1)) &&
                    (lastequality.length <= Math.max(lengthInsertions2,
                        lengthDeletions2))) {
                    // Duplicate record.
                    diffs.splice( equalities[ equalitiesLength - 1 ], 0, [ DIFF_DELETE, lastequality ] );
                    // Change second copy to insert.
                    diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                    // Throw away the equality we just deleted.
                    equalitiesLength--;
                    // Throw away the previous equality (it needs to be reevaluated).
                    equalitiesLength--;
                    pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                    lengthInsertions1 = 0; // Reset the counters.
                    lengthDeletions1 = 0;
                    lengthInsertions2 = 0;
                    lengthDeletions2 = 0;
                    lastequality = null;
                    changes = true;
                }
            }
            pointer++;
        }

        // Normalize the diff.
        if (changes) {
            this.diffCleanupMerge(diffs);
        }

        // Find any overlaps between deletions and insertions.
        // e.g: <del>abcxxx</del><ins>xxxdef</ins>
        //   -> <del>abc</del>xxx<ins>def</ins>
        // e.g: <del>xxxabc</del><ins>defxxx</ins>
        //   -> <ins>def</ins>xxx<del>abc</del>
        // Only extract an overlap if it is as big as the edit ahead or behind it.
        pointer = 1;
        while (pointer < diffs.length) {
            if (diffs[pointer - 1][0] === DIFF_DELETE &&
                diffs[pointer][0] === DIFF_INSERT) {
                deletion = diffs[pointer - 1][1];
                insertion = diffs[pointer][1];
                overlapLength1 = this.diffCommonOverlap(deletion, insertion);
                overlapLength2 = this.diffCommonOverlap(insertion, deletion);
                if (overlapLength1 >= overlapLength2) {
                    if (overlapLength1 >= deletion.length / 2 ||
                        overlapLength1 >= insertion.length / 2) {
                        // Overlap found.  Insert an equality and trim the surrounding edits.
                        diffs.splice( pointer, 0, [ DIFF_EQUAL, insertion.substring( 0, overlapLength1 ) ] );
                        diffs[pointer - 1][1] =
                            deletion.substring(0, deletion.length - overlapLength1);
                        diffs[pointer + 1][1] = insertion.substring(overlapLength1);
                        pointer++;
                    }
                } else {
                    if (overlapLength2 >= deletion.length / 2 ||
                        overlapLength2 >= insertion.length / 2) {
                        // Reverse overlap found.
                        // Insert an equality and swap and trim the surrounding edits.
                        diffs.splice( pointer, 0, [ DIFF_EQUAL, deletion.substring( 0, overlapLength2 ) ] );
                        diffs[pointer - 1][0] = DIFF_INSERT;
                        diffs[pointer - 1][1] =
                            insertion.substring(0, insertion.length - overlapLength2);
                        diffs[pointer + 1][0] = DIFF_DELETE;
                        diffs[pointer + 1][1] =
                            deletion.substring(overlapLength2);
                        pointer++;
                    }
                }
                pointer++;
            }
            pointer++;
        }
    };

    /**
     * Determine if the suffix of one string is the prefix of another.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {number} The number of characters common to the end of the first
     *     string and the start of the second string.
     * @private
     */
    DiffMatchPatch.prototype.diffCommonOverlap = function(text1, text2) {
        var text1Length, text2Length, textLength,
			best, length, pattern, found;
        // Cache the text lengths to prevent multiple calls.
        text1Length = text1.length;
        text2Length = text2.length;
        // Eliminate the null case.
        if (text1Length === 0 || text2Length === 0) {
            return 0;
        }
        // Truncate the longer string.
        if (text1Length > text2Length) {
            text1 = text1.substring(text1Length - text2Length);
        } else if (text1Length < text2Length) {
            text2 = text2.substring(0, text1Length);
        }
        textLength = Math.min(text1Length, text2Length);
        // Quick check for the worst case.
        if (text1 === text2) {
            return textLength;
        }

        // Start by looking for a single character match
        // and increase length until no match is found.
        // Performance analysis: http://neil.fraser.name/news/2010/11/04/
        best = 0;
        length = 1;
        while (true) {
            pattern = text1.substring(textLength - length);
            found = text2.indexOf(pattern);
            if (found === -1) {
                return best;
            }
            length += found;
            if (found === 0 || text1.substring(textLength - length) ===
                text2.substring(0, length)) {
                best = length;
                length++;
            }
        }
    };

    /**
     * Split two texts into an array of strings.  Reduce the texts to a string of
     * hashes where each Unicode character represents one line.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
     *     An object containing the encoded text1, the encoded text2 and
     *     the array of unique strings.
     *     The zeroth element of the array of unique strings is intentionally blank.
     * @private
     */
    DiffMatchPatch.prototype.diffLinesToChars = function(text1, text2) {
        var lineArray, lineHash, chars1, chars2;
        lineArray = []; // e.g. lineArray[4] === 'Hello\n'
        lineHash = {}; // e.g. lineHash['Hello\n'] === 4

        // '\x00' is a valid character, but various debuggers don't like it.
        // So we'll insert a junk entry to avoid generating a null character.
        lineArray[0] = "";

        /**
         * Split a text into an array of strings.  Reduce the texts to a string of
         * hashes where each Unicode character represents one line.
         * Modifies linearray and linehash through being a closure.
         * @param {string} text String to encode.
         * @return {string} Encoded string.
         * @private
         */
        function diffLinesToCharsMunge(text) {
            var chars, lineStart, lineEnd, lineArrayLength, line;
            chars = "";
            // Walk the text, pulling out a substring for each line.
            // text.split('\n') would would temporarily double our memory footprint.
            // Modifying text would create many large strings to garbage collect.
            lineStart = 0;
            lineEnd = -1;
            // Keeping our own length variable is faster than looking it up.
            lineArrayLength = lineArray.length;
            while (lineEnd < text.length - 1) {
                lineEnd = text.indexOf("\n", lineStart);
                if (lineEnd === -1) {
                    lineEnd = text.length - 1;
                }
                line = text.substring(lineStart, lineEnd + 1);
                lineStart = lineEnd + 1;

                if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
                    (lineHash[line] !== undefined)) {
                    chars += String.fromCharCode( lineHash[ line ] );
                } else {
                    chars += String.fromCharCode(lineArrayLength);
                    lineHash[line] = lineArrayLength;
                    lineArray[lineArrayLength++] = line;
                }
            }
            return chars;
        }

        chars1 = diffLinesToCharsMunge(text1);
        chars2 = diffLinesToCharsMunge(text2);
        return {
            chars1: chars1,
            chars2: chars2,
            lineArray: lineArray
        };
    };

    /**
     * Rehydrate the text in a diff from a string of line hashes to real lines of
     * text.
     * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
     * @param {!Array.<string>} lineArray Array of unique strings.
     * @private
     */
    DiffMatchPatch.prototype.diffCharsToLines = function( diffs, lineArray ) {
        var x, chars, text, y;
        for ( x = 0; x < diffs.length; x++ ) {
            chars = diffs[x][1];
            text = [];
            for ( y = 0; y < chars.length; y++ ) {
                text[y] = lineArray[chars.charCodeAt(y)];
            }
            diffs[x][1] = text.join("");
        }
    };

    /**
     * Reorder and merge like edit sections.  Merge equalities.
     * Any edit section can move as long as it doesn't cross an equality.
     * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
     */
    DiffMatchPatch.prototype.diffCleanupMerge = function(diffs) {
        var pointer, countDelete, countInsert, textInsert, textDelete,
			commonlength, changes;
        diffs.push( [ DIFF_EQUAL, "" ] ); // Add a dummy entry at the end.
        pointer = 0;
        countDelete = 0;
        countInsert = 0;
        textDelete = "";
        textInsert = "";
        commonlength;
        while (pointer < diffs.length) {
            switch ( diffs[ pointer ][ 0 ] ) {
                case DIFF_INSERT:
                    countInsert++;
                    textInsert += diffs[pointer][1];
                    pointer++;
                    break;
                case DIFF_DELETE:
                    countDelete++;
                    textDelete += diffs[pointer][1];
                    pointer++;
                    break;
                case DIFF_EQUAL:
                    // Upon reaching an equality, check for prior redundancies.
                    if (countDelete + countInsert > 1) {
                        if (countDelete !== 0 && countInsert !== 0) {
                            // Factor out any common prefixies.
                            commonlength = this.diffCommonPrefix(textInsert, textDelete);
                            if (commonlength !== 0) {
                                if ((pointer - countDelete - countInsert) > 0 &&
                                    diffs[pointer - countDelete - countInsert - 1][0] ===
                                    DIFF_EQUAL) {
                                    diffs[pointer - countDelete - countInsert - 1][1] +=
                                        textInsert.substring(0, commonlength);
                                } else {
                                    diffs.splice( 0, 0, [ DIFF_EQUAL,
                                        textInsert.substring( 0, commonlength )
                                     ] );
                                    pointer++;
                                }
                                textInsert = textInsert.substring(commonlength);
                                textDelete = textDelete.substring(commonlength);
                            }
                            // Factor out any common suffixies.
                            commonlength = this.diffCommonSuffix(textInsert, textDelete);
                            if (commonlength !== 0) {
                                diffs[pointer][1] = textInsert.substring(textInsert.length -
                                    commonlength) + diffs[pointer][1];
                                textInsert = textInsert.substring(0, textInsert.length -
                                    commonlength);
                                textDelete = textDelete.substring(0, textDelete.length -
                                    commonlength);
                            }
                        }
                        // Delete the offending records and add the merged ones.
                        if (countDelete === 0) {
                            diffs.splice( pointer - countInsert,
                                countDelete + countInsert, [ DIFF_INSERT, textInsert ] );
                        } else if (countInsert === 0) {
                            diffs.splice( pointer - countDelete,
                                countDelete + countInsert, [ DIFF_DELETE, textDelete ] );
                        } else {
                            diffs.splice( pointer - countDelete - countInsert,
                                countDelete + countInsert, [ DIFF_DELETE, textDelete ], [ DIFF_INSERT, textInsert ] );
                        }
                        pointer = pointer - countDelete - countInsert +
                            (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
                    } else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
                        // Merge this equality with the previous one.
                        diffs[pointer - 1][1] += diffs[pointer][1];
                        diffs.splice(pointer, 1);
                    } else {
                        pointer++;
                    }
                    countInsert = 0;
                    countDelete = 0;
                    textDelete = "";
                    textInsert = "";
                    break;
            }
        }
        if (diffs[diffs.length - 1][1] === "") {
            diffs.pop(); // Remove the dummy entry at the end.
        }

        // Second pass: look for single edits surrounded on both sides by equalities
        // which can be shifted sideways to eliminate an equality.
        // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
        changes = false;
        pointer = 1;
        // Intentionally ignore the first and last element (don't need checking).
        while (pointer < diffs.length - 1) {
            if (diffs[pointer - 1][0] === DIFF_EQUAL &&
                diffs[pointer + 1][0] === DIFF_EQUAL) {
                // This is a single edit surrounded by equalities.
                if ( diffs[ pointer ][ 1 ].substring( diffs[ pointer ][ 1 ].length -
                        diffs[ pointer - 1 ][ 1 ].length ) === diffs[ pointer - 1 ][ 1 ] ) {
                    // Shift the edit over the previous equality.
                    diffs[pointer][1] = diffs[pointer - 1][1] +
                        diffs[pointer][1].substring(0, diffs[pointer][1].length -
                            diffs[pointer - 1][1].length);
                    diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                    diffs.splice(pointer - 1, 1);
                    changes = true;
                } else if ( diffs[ pointer ][ 1 ].substring( 0, diffs[ pointer + 1 ][ 1 ].length ) ===
                    diffs[ pointer + 1 ][ 1 ] ) {
                    // Shift the edit over the next equality.
                    diffs[pointer - 1][1] += diffs[pointer + 1][1];
                    diffs[pointer][1] =
                        diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
                        diffs[pointer + 1][1];
                    diffs.splice(pointer + 1, 1);
                    changes = true;
                }
            }
            pointer++;
        }
        // If shifts were made, the diff needs reordering and another shift sweep.
        if (changes) {
            this.diffCleanupMerge(diffs);
        }
    };

    return function(o, n) {
		var diff, output, text;
        diff = new DiffMatchPatch();
        output = diff.DiffMain(o, n);
        //console.log(output);
        diff.diffCleanupEfficiency(output);
        text = diff.diffPrettyHtml(output);

        return text;
    };
}());
// jscs:enable

(function() {

// Deprecated QUnit.init - Ref #530
// Re-initialize the configuration options
QUnit.init = function() {
	var tests, banner, result, qunit,
		config = QUnit.config;

	config.stats = { all: 0, bad: 0 };
	config.moduleStats = { all: 0, bad: 0 };
	config.started = 0;
	config.updateRate = 1000;
	config.blocking = false;
	config.autostart = true;
	config.autorun = false;
	config.filter = "";
	config.queue = [];

	// Return on non-browser environments
	// This is necessary to not break on node tests
	if ( typeof window === "undefined" ) {
		return;
	}

	qunit = id( "qunit" );
	if ( qunit ) {
		qunit.innerHTML =
			"<h1 id='qunit-header'>" + escapeText( document.title ) + "</h1>" +
			"<h2 id='qunit-banner'></h2>" +
			"<div id='qunit-testrunner-toolbar'></div>" +
			"<h2 id='qunit-userAgent'></h2>" +
			"<ol id='qunit-tests'></ol>";
	}

	tests = id( "qunit-tests" );
	banner = id( "qunit-banner" );
	result = id( "qunit-testresult" );

	if ( tests ) {
		tests.innerHTML = "";
	}

	if ( banner ) {
		banner.className = "";
	}

	if ( result ) {
		result.parentNode.removeChild( result );
	}

	if ( tests ) {
		result = document.createElement( "p" );
		result.id = "qunit-testresult";
		result.className = "result";
		tests.parentNode.insertBefore( result, tests );
		result.innerHTML = "Running...<br />&#160;";
	}
};

// Don't load the HTML Reporter on non-Browser environments
if ( typeof window === "undefined" ) {
	return;
}

var config = QUnit.config,
	hasOwn = Object.prototype.hasOwnProperty,
	defined = {
		document: window.document !== undefined,
		sessionStorage: (function() {
			var x = "qunit-test-string";
			try {
				sessionStorage.setItem( x, x );
				sessionStorage.removeItem( x );
				return true;
			} catch ( e ) {
				return false;
			}
		}())
	},
	modulesList = [];

/**
* Escape text for attribute or text content.
*/
function escapeText( s ) {
	if ( !s ) {
		return "";
	}
	s = s + "";

	// Both single quotes and double quotes (for attributes)
	return s.replace( /['"<>&]/g, function( s ) {
		switch ( s ) {
		case "'":
			return "&#039;";
		case "\"":
			return "&quot;";
		case "<":
			return "&lt;";
		case ">":
			return "&gt;";
		case "&":
			return "&amp;";
		}
	});
}

/**
 * @param {HTMLElement} elem
 * @param {string} type
 * @param {Function} fn
 */
function addEvent( elem, type, fn ) {
	if ( elem.addEventListener ) {

		// Standards-based browsers
		elem.addEventListener( type, fn, false );
	} else if ( elem.attachEvent ) {

		// support: IE <9
		elem.attachEvent( "on" + type, function() {
			var event = window.event;
			if ( !event.target ) {
				event.target = event.srcElement || document;
			}

			fn.call( elem, event );
		});
	}
}

/**
 * @param {Array|NodeList} elems
 * @param {string} type
 * @param {Function} fn
 */
function addEvents( elems, type, fn ) {
	var i = elems.length;
	while ( i-- ) {
		addEvent( elems[ i ], type, fn );
	}
}

function hasClass( elem, name ) {
	return ( " " + elem.className + " " ).indexOf( " " + name + " " ) >= 0;
}

function addClass( elem, name ) {
	if ( !hasClass( elem, name ) ) {
		elem.className += ( elem.className ? " " : "" ) + name;
	}
}

function toggleClass( elem, name ) {
	if ( hasClass( elem, name ) ) {
		removeClass( elem, name );
	} else {
		addClass( elem, name );
	}
}

function removeClass( elem, name ) {
	var set = " " + elem.className + " ";

	// Class name may appear multiple times
	while ( set.indexOf( " " + name + " " ) >= 0 ) {
		set = set.replace( " " + name + " ", " " );
	}

	// trim for prettiness
	elem.className = typeof set.trim === "function" ? set.trim() : set.replace( /^\s+|\s+$/g, "" );
}

function id( name ) {
	return defined.document && document.getElementById && document.getElementById( name );
}

function getUrlConfigHtml() {
	var i, j, val,
		escaped, escapedTooltip,
		selection = false,
		len = config.urlConfig.length,
		urlConfigHtml = "";

	for ( i = 0; i < len; i++ ) {
		val = config.urlConfig[ i ];
		if ( typeof val === "string" ) {
			val = {
				id: val,
				label: val
			};
		}

		escaped = escapeText( val.id );
		escapedTooltip = escapeText( val.tooltip );

		if ( config[ val.id ] === undefined ) {
			config[ val.id ] = QUnit.urlParams[ val.id ];
		}

		if ( !val.value || typeof val.value === "string" ) {
			urlConfigHtml += "<input id='qunit-urlconfig-" + escaped +
				"' name='" + escaped + "' type='checkbox'" +
				( val.value ? " value='" + escapeText( val.value ) + "'" : "" ) +
				( config[ val.id ] ? " checked='checked'" : "" ) +
				" title='" + escapedTooltip + "' /><label for='qunit-urlconfig-" + escaped +
				"' title='" + escapedTooltip + "'>" + val.label + "</label>";
		} else {
			urlConfigHtml += "<label for='qunit-urlconfig-" + escaped +
				"' title='" + escapedTooltip + "'>" + val.label +
				": </label><select id='qunit-urlconfig-" + escaped +
				"' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";

			if ( QUnit.is( "array", val.value ) ) {
				for ( j = 0; j < val.value.length; j++ ) {
					escaped = escapeText( val.value[ j ] );
					urlConfigHtml += "<option value='" + escaped + "'" +
						( config[ val.id ] === val.value[ j ] ?
							( selection = true ) && " selected='selected'" : "" ) +
						">" + escaped + "</option>";
				}
			} else {
				for ( j in val.value ) {
					if ( hasOwn.call( val.value, j ) ) {
						urlConfigHtml += "<option value='" + escapeText( j ) + "'" +
							( config[ val.id ] === j ?
								( selection = true ) && " selected='selected'" : "" ) +
							">" + escapeText( val.value[ j ] ) + "</option>";
					}
				}
			}
			if ( config[ val.id ] && !selection ) {
				escaped = escapeText( config[ val.id ] );
				urlConfigHtml += "<option value='" + escaped +
					"' selected='selected' disabled='disabled'>" + escaped + "</option>";
			}
			urlConfigHtml += "</select>";
		}
	}

	return urlConfigHtml;
}

// Handle "click" events on toolbar checkboxes and "change" for select menus.
// Updates the URL with the new state of `config.urlConfig` values.
function toolbarChanged() {
	var updatedUrl, value,
		field = this,
		params = {};

	// Detect if field is a select menu or a checkbox
	if ( "selectedIndex" in field ) {
		value = field.options[ field.selectedIndex ].value || undefined;
	} else {
		value = field.checked ? ( field.defaultValue || true ) : undefined;
	}

	params[ field.name ] = value;
	updatedUrl = setUrl( params );

	if ( "hidepassed" === field.name && "replaceState" in window.history ) {
		config[ field.name ] = value || false;
		if ( value ) {
			addClass( id( "qunit-tests" ), "hidepass" );
		} else {
			removeClass( id( "qunit-tests" ), "hidepass" );
		}

		// It is not necessary to refresh the whole page
		window.history.replaceState( null, "", updatedUrl );
	} else {
		window.location = updatedUrl;
	}
}

function setUrl( params ) {
	var key,
		querystring = "?";

	params = QUnit.extend( QUnit.extend( {}, QUnit.urlParams ), params );

	for ( key in params ) {
		if ( hasOwn.call( params, key ) ) {
			if ( params[ key ] === undefined ) {
				continue;
			}
			querystring += encodeURIComponent( key );
			if ( params[ key ] !== true ) {
				querystring += "=" + encodeURIComponent( params[ key ] );
			}
			querystring += "&";
		}
	}
	return location.protocol + "//" + location.host +
		location.pathname + querystring.slice( 0, -1 );
}

function applyUrlParams() {
	var selectedModule,
		modulesList = id( "qunit-modulefilter" ),
		filter = id( "qunit-filter-input" ).value;

	selectedModule = modulesList ?
		decodeURIComponent( modulesList.options[ modulesList.selectedIndex ].value ) :
		undefined;

	window.location = setUrl({
		module: ( selectedModule === "" ) ? undefined : selectedModule,
		filter: ( filter === "" ) ? undefined : filter,

		// Remove testId filter
		testId: undefined
	});
}

function toolbarUrlConfigContainer() {
	var urlConfigContainer = document.createElement( "span" );

	urlConfigContainer.innerHTML = getUrlConfigHtml();
	addClass( urlConfigContainer, "qunit-url-config" );

	// For oldIE support:
	// * Add handlers to the individual elements instead of the container
	// * Use "click" instead of "change" for checkboxes
	addEvents( urlConfigContainer.getElementsByTagName( "input" ), "click", toolbarChanged );
	addEvents( urlConfigContainer.getElementsByTagName( "select" ), "change", toolbarChanged );

	return urlConfigContainer;
}

function toolbarLooseFilter() {
	var filter = document.createElement( "form" ),
		label = document.createElement( "label" ),
		input = document.createElement( "input" ),
		button = document.createElement( "button" );

	addClass( filter, "qunit-filter" );

	label.innerHTML = "Filter: ";

	input.type = "text";
	input.value = config.filter || "";
	input.name = "filter";
	input.id = "qunit-filter-input";

	button.innerHTML = "Go";

	label.appendChild( input );

	filter.appendChild( label );
	filter.appendChild( button );
	addEvent( filter, "submit", function( ev ) {
		applyUrlParams();

		if ( ev && ev.preventDefault ) {
			ev.preventDefault();
		}

		return false;
	});

	return filter;
}

function toolbarModuleFilterHtml() {
	var i,
		moduleFilterHtml = "";

	if ( !modulesList.length ) {
		return false;
	}

	modulesList.sort(function( a, b ) {
		return a.localeCompare( b );
	});

	moduleFilterHtml += "<label for='qunit-modulefilter'>Module: </label>" +
		"<select id='qunit-modulefilter' name='modulefilter'><option value='' " +
		( QUnit.urlParams.module === undefined ? "selected='selected'" : "" ) +
		">< All Modules ></option>";

	for ( i = 0; i < modulesList.length; i++ ) {
		moduleFilterHtml += "<option value='" +
			escapeText( encodeURIComponent( modulesList[ i ] ) ) + "' " +
			( QUnit.urlParams.module === modulesList[ i ] ? "selected='selected'" : "" ) +
			">" + escapeText( modulesList[ i ] ) + "</option>";
	}
	moduleFilterHtml += "</select>";

	return moduleFilterHtml;
}

function toolbarModuleFilter() {
	var toolbar = id( "qunit-testrunner-toolbar" ),
		moduleFilter = document.createElement( "span" ),
		moduleFilterHtml = toolbarModuleFilterHtml();

	if ( !toolbar || !moduleFilterHtml ) {
		return false;
	}

	moduleFilter.setAttribute( "id", "qunit-modulefilter-container" );
	moduleFilter.innerHTML = moduleFilterHtml;

	addEvent( moduleFilter.lastChild, "change", applyUrlParams );

	toolbar.appendChild( moduleFilter );
}

function appendToolbar() {
	var toolbar = id( "qunit-testrunner-toolbar" );

	if ( toolbar ) {
		toolbar.appendChild( toolbarUrlConfigContainer() );
		toolbar.appendChild( toolbarLooseFilter() );
	}
}

function appendHeader() {
	var header = id( "qunit-header" );

	if ( header ) {
		header.innerHTML = "<a href='" +
			setUrl({ filter: undefined, module: undefined, testId: undefined }) +
			"'>" + header.innerHTML + "</a> ";
	}
}

function appendBanner() {
	var banner = id( "qunit-banner" );

	if ( banner ) {
		banner.className = "";
	}
}

function appendTestResults() {
	var tests = id( "qunit-tests" ),
		result = id( "qunit-testresult" );

	if ( result ) {
		result.parentNode.removeChild( result );
	}

	if ( tests ) {
		tests.innerHTML = "";
		result = document.createElement( "p" );
		result.id = "qunit-testresult";
		result.className = "result";
		tests.parentNode.insertBefore( result, tests );
		result.innerHTML = "Running...<br />&#160;";
	}
}

function storeFixture() {
	var fixture = id( "qunit-fixture" );
	if ( fixture ) {
		config.fixture = fixture.innerHTML;
	}
}

function appendUserAgent() {
	var userAgent = id( "qunit-userAgent" );

	if ( userAgent ) {
		userAgent.innerHTML = "";
		userAgent.appendChild(
			document.createTextNode(
				"QUnit " + QUnit.version  + "; " + navigator.userAgent
			)
		);
	}
}

function appendTestsList( modules ) {
	var i, l, x, z, test, moduleObj;

	for ( i = 0, l = modules.length; i < l; i++ ) {
		moduleObj = modules[ i ];

		if ( moduleObj.name ) {
			modulesList.push( moduleObj.name );
		}

		for ( x = 0, z = moduleObj.tests.length; x < z; x++ ) {
			test = moduleObj.tests[ x ];

			appendTest( test.name, test.testId, moduleObj.name );
		}
	}
}

function appendTest( name, testId, moduleName ) {
	var title, rerunTrigger, testBlock, assertList,
		tests = id( "qunit-tests" );

	if ( !tests ) {
		return;
	}

	title = document.createElement( "strong" );
	title.innerHTML = getNameHtml( name, moduleName );

	rerunTrigger = document.createElement( "a" );
	rerunTrigger.innerHTML = "Rerun";
	rerunTrigger.href = setUrl({ testId: testId });

	testBlock = document.createElement( "li" );
	testBlock.appendChild( title );
	testBlock.appendChild( rerunTrigger );
	testBlock.id = "qunit-test-output-" + testId;

	assertList = document.createElement( "ol" );
	assertList.className = "qunit-assert-list";

	testBlock.appendChild( assertList );

	tests.appendChild( testBlock );
}

// HTML Reporter initialization and load
QUnit.begin(function( details ) {
	var qunit = id( "qunit" );

	// Fixture is the only one necessary to run without the #qunit element
	storeFixture();

	if ( qunit ) {
		qunit.innerHTML =
			"<h1 id='qunit-header'>" + escapeText( document.title ) + "</h1>" +
			"<h2 id='qunit-banner'></h2>" +
			"<div id='qunit-testrunner-toolbar'></div>" +
			"<h2 id='qunit-userAgent'></h2>" +
			"<ol id='qunit-tests'></ol>";
	}

	appendHeader();
	appendBanner();
	appendTestResults();
	appendUserAgent();
	appendToolbar();
	appendTestsList( details.modules );
	toolbarModuleFilter();

	if ( qunit && config.hidepassed ) {
		addClass( qunit.lastChild, "hidepass" );
	}
});

QUnit.done(function( details ) {
	var i, key,
		banner = id( "qunit-banner" ),
		tests = id( "qunit-tests" ),
		html = [
			"Tests completed in ",
			details.runtime,
			" milliseconds.<br />",
			"<span class='passed'>",
			details.passed,
			"</span> assertions of <span class='total'>",
			details.total,
			"</span> passed, <span class='failed'>",
			details.failed,
			"</span> failed."
		].join( "" );

	if ( banner ) {
		banner.className = details.failed ? "qunit-fail" : "qunit-pass";
	}

	if ( tests ) {
		id( "qunit-testresult" ).innerHTML = html;
	}

	if ( config.altertitle && defined.document && document.title ) {

		// show ✖ for good, ✔ for bad suite result in title
		// use escape sequences in case file gets loaded with non-utf-8-charset
		document.title = [
			( details.failed ? "\u2716" : "\u2714" ),
			document.title.replace( /^[\u2714\u2716] /i, "" )
		].join( " " );
	}

	// clear own sessionStorage items if all tests passed
	if ( config.reorder && defined.sessionStorage && details.failed === 0 ) {
		for ( i = 0; i < sessionStorage.length; i++ ) {
			key = sessionStorage.key( i++ );
			if ( key.indexOf( "qunit-test-" ) === 0 ) {
				sessionStorage.removeItem( key );
			}
		}
	}

	// scroll back to top to show results
	if ( config.scrolltop && window.scrollTo ) {
		window.scrollTo( 0, 0 );
	}
});

function getNameHtml( name, module ) {
	var nameHtml = "";

	if ( module ) {
		nameHtml = "<span class='module-name'>" + escapeText( module ) + "</span>: ";
	}

	nameHtml += "<span class='test-name'>" + escapeText( name ) + "</span>";

	return nameHtml;
}

QUnit.testStart(function( details ) {
	var running, testBlock, bad;

	testBlock = id( "qunit-test-output-" + details.testId );
	if ( testBlock ) {
		testBlock.className = "running";
	} else {

		// Report later registered tests
		appendTest( details.name, details.testId, details.module );
	}

	running = id( "qunit-testresult" );
	if ( running ) {
		bad = QUnit.config.reorder && defined.sessionStorage &&
			+sessionStorage.getItem( "qunit-test-" + details.module + "-" + details.name );

		running.innerHTML = ( bad ?
			"Rerunning previously failed test: <br />" :
			"Running: <br />" ) +
			getNameHtml( details.name, details.module );
	}

});

QUnit.log(function( details ) {
	var assertList, assertLi,
		message, expected, actual,
		testItem = id( "qunit-test-output-" + details.testId );

	if ( !testItem ) {
		return;
	}

	message = escapeText( details.message ) || ( details.result ? "okay" : "failed" );
	message = "<span class='test-message'>" + message + "</span>";
	message += "<span class='runtime'>@ " + details.runtime + " ms</span>";

	// pushFailure doesn't provide details.expected
	// when it calls, it's implicit to also not show expected and diff stuff
	// Also, we need to check details.expected existence, as it can exist and be undefined
	if ( !details.result && hasOwn.call( details, "expected" ) ) {
		expected = escapeText( QUnit.dump.parse( details.expected ) );
		actual = escapeText( QUnit.dump.parse( details.actual ) );
		message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" +
			expected +
			"</pre></td></tr>";

		if ( actual !== expected ) {
			message += "<tr class='test-actual'><th>Result: </th><td><pre>" +
				actual + "</pre></td></tr>" +
				"<tr class='test-diff'><th>Diff: </th><td><pre>" +
				QUnit.diff( expected, actual ) + "</pre></td></tr>";
		} else {
			if ( expected.indexOf( "[object Array]" ) !== -1 ||
					expected.indexOf( "[object Object]" ) !== -1 ) {
				message += "<tr class='test-message'><th>Message: </th><td>" +
					"Diff suppressed as the depth of object is more than current max depth (" +
					QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " +
					" run with a higher max depth or <a href='" + setUrl({ maxDepth: -1 }) + "'>" +
					"Rerun</a> without max depth.</p></td></tr>";
			}
		}

		if ( details.source ) {
			message += "<tr class='test-source'><th>Source: </th><td><pre>" +
				escapeText( details.source ) + "</pre></td></tr>";
		}

		message += "</table>";

	// this occours when pushFailure is set and we have an extracted stack trace
	} else if ( !details.result && details.source ) {
		message += "<table>" +
			"<tr class='test-source'><th>Source: </th><td><pre>" +
			escapeText( details.source ) + "</pre></td></tr>" +
			"</table>";
	}

	assertList = testItem.getElementsByTagName( "ol" )[ 0 ];

	assertLi = document.createElement( "li" );
	assertLi.className = details.result ? "pass" : "fail";
	assertLi.innerHTML = message;
	assertList.appendChild( assertLi );
});

QUnit.testDone(function( details ) {
	var testTitle, time, testItem, assertList,
		good, bad, testCounts, skipped,
		tests = id( "qunit-tests" );

	if ( !tests ) {
		return;
	}

	testItem = id( "qunit-test-output-" + details.testId );

	assertList = testItem.getElementsByTagName( "ol" )[ 0 ];

	good = details.passed;
	bad = details.failed;

	// store result when possible
	if ( config.reorder && defined.sessionStorage ) {
		if ( bad ) {
			sessionStorage.setItem( "qunit-test-" + details.module + "-" + details.name, bad );
		} else {
			sessionStorage.removeItem( "qunit-test-" + details.module + "-" + details.name );
		}
	}

	if ( bad === 0 ) {
		addClass( assertList, "qunit-collapsed" );
	}

	// testItem.firstChild is the test name
	testTitle = testItem.firstChild;

	testCounts = bad ?
		"<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " :
		"";

	testTitle.innerHTML += " <b class='counts'>(" + testCounts +
		details.assertions.length + ")</b>";

	if ( details.skipped ) {
		testItem.className = "skipped";
		skipped = document.createElement( "em" );
		skipped.className = "qunit-skipped-label";
		skipped.innerHTML = "skipped";
		testItem.insertBefore( skipped, testTitle );
	} else {
		addEvent( testTitle, "click", function() {
			toggleClass( assertList, "qunit-collapsed" );
		});

		testItem.className = bad ? "fail" : "pass";

		time = document.createElement( "span" );
		time.className = "runtime";
		time.innerHTML = details.runtime + " ms";
		testItem.insertBefore( time, assertList );
	}
});

if ( defined.document ) {
	if ( document.readyState === "complete" ) {
		QUnit.load();
	} else {
		addEvent( window, "load", QUnit.load );
	}
} else {
	config.pageLoaded = true;
	config.autorun = true;
}

})();

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