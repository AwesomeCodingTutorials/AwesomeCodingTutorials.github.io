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
jQuery.fn.vectorMap('addMap', 'north-america_en', {"width":950,"height":550,"paths":{"mx":{"path":"m 330.70592,371.79351 8.52959,26.86025 -3.97341,2.22511 0.44149,5.3332 7.50533,5.77469 v 10.68406 l 9.27129,8.90044 -3.97341,-26.24217 -5.29788,-17.35939 1.32447,-12.00853 4.4149,0.44149 1.76596,4.00873 -1.76596,10.22491 22.95748,44.92603 v 16.01726 l 18.54259,21.79195 20.30854,9.34193 8.38831,-4.89171 11.92023,9.78342 7.06384,-7.11682 -3.09043,-8.01745 10.15428,-3.10809 3.09043,1.78361 3.09043,-3.10809 h 4.85639 l 8.8298,-15.57577 -4.4149,-4.00872 -17.21811,4.00872 -3.97342,11.56704 -10.15427,1.78362 -11.92023,-4.89171 -5.29788,-16.90024 4.00873,-21.31514 -8.19406,-5.10362 -3.90277,-20.46748 -3.26702,-1.39511 -5.96895,6.05724 -6.85193,-3.65553 -2.68426,-13.65088 -27.14281,-2.84319 -14.02172,-10.54279 -13.35066,0.68873 0,0 z","name":"Mexico"},"gl":{"path":"m 655.00687,62.11471 -2.40171,3.832134 4.32661,4.326603 -1.9249,4.326603 6.2515,8.158736 7.68193,-2.401706 10.08363,-0.953618 11.53172,12.485339 7.68193,20.644079 -6.23384,12.96215 8.63554,-1.44809 4.80342,2.87851 0.4768,6.2515 -10.56044,0.47681 5.75703,5.75703 7.20512,1.44809 -15.84066,21.12089 -1.9249,12.96214 3.35532,10.56045 -2.4017,6.2515 4.3266,13.43895 8.15874,9.13002 2.4017,-0.47681 5.28023,-1.44809 0.4768,7.68193 3.35533,4.80341 6.23384,-0.47681 4.80341,-17.76556 14.41024,-17.76556 21.61535,-8.63555 13.43896,-16.81194 6.23384,2.87852 h 12.96215 l 10.56044,-10.56044 12.96215,-5.28023 1.44809,-8.15873 -8.15874,-7.20512 -7.20512,-2.40171 -3.84979,-10.08363 9.13001,-5.28022 14.41024,7.68193 4.80341,-5.28023 -7.68193,-4.3266 16.33514,-22.092161 -2.87852,-9.606824 -7.68193,-0.47681 2.87852,-8.635545 9.60682,-4.326603 19.69046,-17.288752 -5.75703,-6.233839 -22.09216,1.924896 -11.53172,11.531721 6.7283,-14.887045 -7.68192,-1.924897 -4.32661,7.681927 -6.23384,-5.280221 -17.28875,1.924897 4.80342,-7.681928 28.326,-0.953618 -7.20512,-9.606824 -30.72771,-5.757031 -12.48534,1.924897 0.47681,6.251499 -12.96215,-4.326602 0.47681,-4.326603 -9.13001,1.924897 -1.9249,4.803412 9.60682,3.355324 -10.08363,7.205118 -7.20512,-8.158736 -10.08363,-2.878516 -1.44809,7.681928 h -10.08363 l -3.84979,-8.158737 -15.84067,-2.401706 -8.63554,4.326603 -0.47681,5.757031 -11.03726,-1.448088 -6.7283,2.878515 0.47681,6.728309 v 3.355325 l -12.48534,2.401706 -5.75703,-3.832134 -3.8498,6.23384 5.75703,6.251499 12.00853,-1.448087 0.95362,3.849793 -9.13001,4.326603 -8.14108,-3.885113 0,0 m 38.4273,74.91204 2.87851,4.3266 -1.44809,5.28022 h -2.87851 l -3.8498,-4.3266 0.95362,-3.35533 4.34427,-1.92489 0,0 m 120.04998,-12.00853 8.15873,2.4017 -0.47681,6.72831 -8.63554,-4.3266 -1.9249,-2.40171 2.87852,-2.4017 0,0 z","name":"Greenland"},"us":{"path":"m 210.05551,67.90706 6.11022,11.425763 3.92044,-0.88298 v -3.955751 l -10.03066,-6.587032 0,0 m -34.45388,100.5008 -0.30022,5.31554 3.81448,-0.88298 v -2.36639 l -3.51426,-2.06617 0,0 m -5.86299,2.36639 -7.62895,3.84979 1.18319,4.13235 2.9315,-2.36639 5.86299,-2.6666 -2.34873,-2.94915 0,0 m -31.69899,5.01532 -5.28022,-1.18319 -0.88298,2.36639 0.58277,4.43256 5.58043,-5.61576 0,0 m -11.16087,-0.28255 -4.99767,-2.06617 -1.76596,3.24936 3.23171,3.24937 3.53192,-4.43256 0,0 m -17.30641,-4.73277 -2.34873,-3.24937 -2.34872,0.88298 v 4.43256 l 2.64894,1.76596 2.04851,-3.83213 0,0 M 90.5,149.77698 l 2.931494,2.06617 -0.88298,2.36639 H 90.5 v -4.43256 l 0,0 m 15.06364,263.11042 -0.24723,4.11469 3.60256,2.41937 2.15447,-1.9249 -5.5098,-4.60916 0,0 m 9.34193,6.05725 -3.35532,2.41936 2.87851,3.62022 3.35533,-2.89617 -2.87852,-3.14341 0,0 m 6.72831,5.79235 -2.87852,3.86745 0.95362,2.41937 4.07937,-1.9249 -2.15447,-4.36192 0,0 m 4.78575,7.48767 -1.67766,9.6598 1.67766,3.62022 5.5098,-1.69532 2.87851,-4.83873 -6.00426,-5.56278 -2.38405,-1.18319 0,0 m 440.14795,37.80921 -4.66214,-1.5717 -3.74383,2.34872 1.87191,2.18979 6.37512,0.93596 0.15894,-3.90277 0,0 M 252.3326,52.967036 l -14.81641,3.514261 3.05512,16.688325 16.12321,4.397241 0.86532,3.514261 -23.96408,7.470012 -13.50959,22.392374 4.78575,23.71685 7.84086,5.26256 6.11023,-5.70405 1.7483,3.51426 -7.41704,8.77682 -28.76749,13.17407 -18.31301,4.39724 -0.44149,6.58703 42.27709,-12.29108 17.43003,-4.83874 16.12322,-19.76109 17.87151,-11.84959 -9.14767,15.36385 10.03065,1.32447 17.0062,-7.47001 3.05511,12.29108 11.7613,2.63128 12.20278,11.8496 0.86533,8.77682 -1.74831,2.18979 2.17214,8.33533 h 3.05511 l 0.44149,-14.05704 h 3.47894 l 0.86532,34.68346 8.72384,-7.47001 -6.11022,-36.00793 h -9.14767 L 316.80781,141.6359 366.06044,58.194278 317.2493,19.996557 262.76943,30.53934 l -2.17213,16.688325 11.76129,7.028522 -4.36192,11.425763 -15.66407,-12.714914 0,0 m 98.27569,200.348194 -1.76596,7.09916 -6.1632,-3.99107 h -3.07277 l -1.76596,7.54065 -21.56238,48.31668 5.72172,42.10049 7.04618,3.54958 1.32447,11.53172 h 14.51619 l 14.0747,10.63108 27.70792,2.6666 3.07277,14.18066 4.39724,3.10809 6.16321,-6.19852 4.83873,2.20745 4.39724,20.37918 7.47001,4.87406 6.1632,-11.53173 18.91344,-13.73917 12.30874,5.75703 10.56044,0.88298 0.44149,-6.64001 21.98621,0.44149 4.39724,4.87405 0.88298,11.07257 -2.63128,6.19853 3.07277,10.63108 h 6.60469 l 6.60469,-10.18959 -2.63128,-4.87405 -2.63128,-10.63109 3.95575,-11.97321 18.03046,-15.50513 13.63321,-3.99107 -1.76596,-12.85619 18.91343,-20.39684 18.91344,-3.10809 -3.07277,-10.61342 18.47194,-10.63108 v -14.18066 l -1.76596,-0.88298 -6.60469,2.20745 -0.88298,8.68852 -21.95089,0.26489 -17.20045,11.42577 -27.00153,8.8298 -4.30895,-5.28022 12.25577,-18.54259 -6.05724,-5.77469 -4.11469,-7.84086 -8.52959,-6.85193 -9.27129,-0.77702 -17.51833,-11.95555 -124.57084,-20.5028 0,0 z","name":"United States of America"},"bb":{"path":"m 586.02846,499.68435 -2.17213,1.57171 1.71298,3.14341 2.80788,-1.57171 -2.34873,-3.14341 0,0 z","name":"Barbados"},"tt":{"path":"m 586.32867,511.92246 -1.87191,1.73064 -2.03086,0.31787 v 2.50767 l 3.74384,3.44362 1.55404,-2.50767 0.93596,-2.82553 -0.31787,-2.34873 -2.0132,-0.31787 0,0 z","name":"Trinidad and Tobago"},"do":{"path":"m 552.54585,468.93898 -9.34193,-6.11022 -4.4149,-1.50106 -1.4834,10.59576 1.55404,2.98447 2.03085,-2.34873 5.91597,-1.5717 5.13895,1.09489 0.60042,-3.14341 0,0 z","name":"Dominican Republic"},"ht":{"path":"m 530.91284,460.00323 6.0749,0.63574 -0.72404,7.45235 -0.60043,3.92044 -7.0815,-0.38852 -1.25383,1.88958 -2.17213,-0.15893 -0.77702,-4.07937 7.47001,-0.61809 -0.45915,-4.2383 -3.42596,-1.41277 2.94915,-3.00213 0,0 z","name":"Haiti"},"cu":{"path":"m 477.91637,445.0632 v 2.24277 l 9.39491,0.1766 4.43256,-2.57831 0.68872,1.88958 9.21832,2.24277 8.19405,7.39938 -1.87192,2.5783 0.33554,2.93149 6.83426,1.71298 6.83427,-3.09043 3.07277,-3.09043 -4.43256,-2.24277 -22.86919,-13.4213 -8.01746,-0.86532 -11.81427,4.11469 0,0 z","name":"Cuba"},"bs":{"path":"m 511.04579,431.30637 -2.22511,-0.68872 -0.1766,4.29128 2.73724,2.7549 1.87192,-2.7549 -2.20745,-3.60256 0,0 m 4.43256,6.71065 -3.07278,1.71298 2.89618,4.13235 1.53639,-2.06618 -1.35979,-3.77915 0,0 m 9.90703,3.09043 -3.24936,-0.1766 0.33553,2.06618 2.38405,3.44362 2.04851,-2.24277 -1.51873,-3.09043 0,0 m -1.53638,-4.11469 -5.29788,-2.24277 -1.02426,-5.3332 2.04851,-0.86532 2.04852,4.13235 2.04851,1.55404 0.1766,2.7549 0,0 m -5.12129,-10.84299 -2.73724,-0.68873 -0.51212,-3.44362 -2.89618,-1.02426 1.87192,-1.88958 3.4083,1.20086 2.56064,1.55404 -1.69532,4.29129 0,0 z","name":"Bahamas"},"jm":{"path":"m 509.84493,467.43792 -6.14554,1.55404 v 1.71298 l 3.5849,2.06618 h 3.7615 l 2.38404,-2.7549 -3.5849,-2.5783 0,0 z","name":"Jamaica"},"ca":{"path":"m 447.68313,37.073393 0.38851,7.099161 -14.09236,14.604491 3.53192,11.831934 10.17193,-2.754898 5.88065,-8.688524 14.86938,-5.527456 12.13215,-0.794682 -9.39491,-10.26023 -4.69745,3.549581 -3.53192,-1.183194 -1.96022,-4.344262 -4.30894,-4.344263 -8.98874,0.812342 0,0 m 18.40131,-20.90897 -3.12575,5.527456 15.27555,5.527456 5.47448,-8.282354 2.34873,5.527456 h 3.92043 l 7.43469,-8.282354 -9.0064,-2.366387 -3.53192,-2.754898 -4.69745,4.732774 -14.09236,0.370851 0,0 m 26.63068,11.054912 -12.13215,5.121285 v 3.938091 l 15.66407,5.915967 -3.53192,3.938092 2.34872,5.121284 9.78342,-4.344262 h 8.22938 l 3.92043,6.304478 6.65767,-6.710649 -1.5717,-6.322138 -5.47448,1.977876 -0.77702,-7.893843 2.73724,-4.732773 h -2.73724 l -4.30895,2.754898 -1.96021,1.571704 1.18319,5.527456 -3.12575,2.366387 -4.69745,-0.388511 -1.1832,-7.099161 -9.02405,-7.046181 0,0 m 16.05258,-12.238105 -1.1832,3.938091 7.4347,3.54958 5.47447,-3.161068 -0.38851,-2.366387 -11.33746,-1.960216 0,0 m 5.86298,-6.7106493 -5.47447,1.9778753 0.38851,2.754898 12.13215,-0.794682 -0.38851,-2.7548979 -6.65768,-1.1831934 0,0 m 26.24217,6.7106493 -0.77702,2.754898 -1.96021,2.754898 v 3.938091 l 7.43469,-1.183193 7.8232,6.710649 h 2.73724 v -6.710649 l -7.8232,-8.688525 -7.4347,0.423831 0,0 m 19.97302,7.893842 3.12575,3.549581 -2.73724,4.732773 1.96021,5.121285 8.61789,-4.732774 v -3.54958 l -5.08597,-5.915967 -5.88064,0.794682 0,0 m 11.35512,-9.077036 0.38851,6.304479 h 10.5781 l 2.73724,2.366386 -0.38851,2.754899 -9.39491,1.183193 6.65767,9.077036 9.0064,1.571705 12.52066,-5.527456 -18.0128,-27.231108 -5.47447,3.5495802 0.38851,4.7327738 -6.26916,-2.366387 -2.73724,3.584899 0,0 m -91.22951,44.590498 -14.86938,3.938091 -8.61789,7.505332 0.77702,8.282354 15.66407,4.732773 -3.53192,7.893843 -11.35513,-7.099161 -3.12575,5.915967 7.4347,5.121285 -0.38851,8.282352 11.35512,3.16107 13.70385,-0.79468 2.34873,-4.34426 10.17193,11.44342 7.04618,-2.36639 1.1832,-7.89384 5.08596,3.54958 0.77702,-7.893843 -6.26915,-3.938091 0.38851,-24.847061 -5.47448,-4.344263 -5.86299,7.893843 -16.44109,-14.198321 0,0 m 47.76923,17.35939 -5.08597,-2.366387 -2.73724,3.54958 5.47448,8.688525 0.38851,8.282354 11.74364,-7.099161 V 76.542606 l 4.30894,-4.344262 -4.30894,-3.161069 h -7.04618 l -2.73724,6.710649 0,0 m 25.05897,-3.54958 -8.22937,6.710649 1.96022,8.282353 h 5.08596 l 2.34873,-4.344262 3.53192,3.54958 3.53192,-0.388511 9.39491,-7.893842 -17.62429,-5.915967 0,0 m -0.79468,-13.032787 -1.96021,3.938091 8.61788,3.161069 2.34873,-3.54958 -9.0064,-3.54958 0,0 m -5.08596,-14.993003 -8.61789,1.183193 -5.08597,4.732774 9.39491,0.388511 -2.73724,7.09916 1.96022,3.161069 2.73724,-0.388511 6.65767,-10.648741 -4.30894,-5.527455 0,0 m 14.88704,-2.754898 -4.69745,1.571704 0.77702,6.304478 7.8232,5.121285 0.38852,3.938092 -2.34873,2.366387 1.18319,7.893842 30.14494,9.854059 8.22938,2.754898 8.22937,-7.099161 -9.78342,-7.893842 -9.00639,2.366387 -12.52066,-1.183194 -4.69746,-4.732773 -1.18319,-13.015128 -7.8232,-3.938091 -4.71512,-4.308943 0,0 m 24.65281,41.040917 -8.61789,-0.794682 -10.17193,3.938091 -5.47448,7.487672 1.57171,20.520456 16.8296,0.79468 16.05258,7.89385 11.35512,13.01512 8.61789,-0.38851 -2.34873,12.22045 -7.8232,13.01513 -8.61789,3.93809 -6.26916,-1.1832 -3.12575,-2.75489 -4.69745,6.30447 1.96021,6.30448 6.65768,0.38851 8.22937,-3.93809 7.04618,18.15407 17.62429,11.44343 12.13214,-15.38152 -10.17193,-16.5647 5.88065,-6.71065 8.22937,13.80981 14.86939,-13.01513 -2.73724,-5.91597 -10.17193,3.16107 -7.04618,-19.33727 6.65767,-11.03725 -13.31534,-14.19832 -7.43469,5.12129 -7.04619,-15.38152 -14.86938,1.97788 -3.92043,-18.542585 -12.13215,8.282354 -1.18319,10.260231 h -6.65767 l 0.77702,-9.077038 9.34193,-13.809809 0,0 m 17.62428,7.09916 -3.12575,3.161069 2.73724,4.344263 12.92683,1.571704 -8.22938,-8.688524 -4.30894,-0.388512 0,0 M 592.56251,44.967236 v 3.54958 l -8.61788,1.977875 2.34872,3.938092 9.78342,3.938091 10.96662,1.183194 7.8232,5.527456 7.82321,-4.344263 -5.47448,-5.527456 h 7.04618 l 4.30894,-4.732773 10.57811,-1.571705 V 46.53894 l -5.88065,-3.938091 0.77702,-4.344262 16.44109,2.754898 24.28195,-9.465548 -9.00639,-2.754898 2.34872,-3.161069 h 18.78982 l 3.12575,-3.161069 -37.9858,-13.4212978 -9.0064,-3.1610689 -9.78342,7.0991607 -10.96662,-9.0770363 -5.88064,-0.3885112 -1.1832,7.5053315 -7.43469,-6.7106494 -8.61789,2.7548981 1.57171,4.3442623 12.92683,2.754898 -0.77702,6.304478 7.04618,4.344263 17.23577,-4.344263 0.38851,5.915967 -14.09236,6.710649 -8.61789,-6.710649 -7.8232,0.794682 7.8232,11.054912 -3.92043,1.977876 -5.88065,-5.121285 -4.30894,2.754898 3.92043,7.487671 h 6.65767 l -1.5717,7.099161 -5.47448,-0.794682 -7.04618,-7.505332 -4.66214,0.830002 0,0 m -34.89537,108.588894 -7.47001,9.39491 -0.45915,10.34853 6.53405,-3.76149 h 7.92916 l 5.59809,5.17426 5.13895,-4.23831 -17.27109,-16.9179 0,0 m 90.96461,122.20446 -18.6662,17.87152 1.87192,4.2383 22.85153,8.45895 3.26702,-5.63341 -1.87192,-9.39491 -7.47001,0.93596 -4.20298,-4.69746 6.9932,-7.04618 -2.77256,-4.73277 0,0 M 367.31428,59.624706 l 3.51426,5.315541 1.76596,7.09916 8.79448,2.20745 6.1632,-6.64001 5.28022,2.6666 14.95769,1.32447 10.56044,-4.43256 1.76596,14.622151 h 6.1632 v -6.198521 l 6.1632,0.44149 15.39918,18.171732 10.11895,6.198521 -5.28022,8.42363 2.20745,2.20745 19.76109,3.99107 0.44149,8.86512 5.28023,0.88298 1.32447,-13.29768 8.35299,-2.20745 6.1632,9.30661 13.19172,6.19852 6.60469,1.32447 4.39725,-5.31554 0.44149,-8.42363 7.9115,-4.87405 2.63128,7.09916 -7.04618,12.4147 0.88298,6.19852 3.95575,-6.19852 7.9115,-7.09916 0.44149,-9.30661 -4.39724,-7.09916 1.32447,-5.757031 10.56044,-5.31554 4.83873,3.54958 0.88298,31.027921 7.47002,-6.64001 4.39724,2.6666 -6.16321,10.63108 7.91151,1.76596 11.44342,-17.73024 9.67746,10.18959 -3.95575,18.17173 -9.67746,5.31554 -9.23597,-4.43256 -16.70599,3.54958 1.76596,5.75703 -4.39724,7.09916 -13.63321,3.10809 -15.39918,11.97322 -13.63321,18.17173 -1.76596,5.75703 9.23597,3.54958 3.51426,8.86512 12.75024,12.85619 20.2379,8.86512 -4.39724,20.37918 -0.44149,5.75703 5.28022,3.54958 7.04618,-9.30661 0.88298,-17.73024 11.00194,-0.44149 5.28022,-10.18959 0.88298,-15.50513 14.0747,-27.47834 17.58897,6.19852 9.23597,12.85619 -3.95575,12.85619 7.04618,3.99107 17.14747,-11.53172 4.83873,31.46941 15.84067,19.05471 0.44149,9.7481 -17.58897,4.43256 -8.35299,8.86512 -17.58896,-3.99107 -8.79449,-0.44149 -15.39917,11.97321 9.23597,-2.20745 11.44343,-2.20745 2.20745,2.6666 -3.07277,9.7481 0.44149,8.86513 5.28022,3.54958 5.28022,-1.32447 2.64894,-3.99107 h 3.51426 l -5.72171,10.63108 -11.00193,0.44149 -4.83874,7.09916 h -6.1632 l -1.76596,-5.31554 8.79448,-8.86512 -10.56044,3.54958 -0.47681,-15.06365 -3.03745,-1.76596 -9.23597,3.99107 -0.88298,7.54065 h -21.12089 l -18.03045,12.41471 -24.19366,7.98214 -2.63128,-3.54958 12.18513,-18.18939 -6.92257,-6.65768 -4.39724,-8.44129 -8.95342,-6.83426 -9.60682,-0.79468 -17.21811,-12.06151 -124.87106,-20.52046 -2.06617,-8.45895 -11.44342,-10.63108 v -8.86512 l 1.76596,-7.98214 -0.88298,-4.43256 -4.39724,-4.43256 -0.88298,-7.09916 11.44342,-7.98215 -7.04618,-38.10942 -9.67746,-0.44149 -8.79449,-11.53172 48.31668,-82.099494 0,0 m -43.07178,140.835334 -3.00213,5.75703 1.04192,4.07937 1.96021,1.21851 -0.45914,1.66 -2.1015,0.60043 0.60043,6.05724 2.26043,2.27809 1.80128,-1.96021 -2.26043,-5.89831 1.34213,-4.69745 3.30234,-4.39725 -2.4017,-4.07936 -2.08384,-0.61809 0,0 m 9.9247,34.50686 -2.70192,1.05958 4.96235,5.75703 1.20085,6.81661 4.96235,5.29788 4.20299,-0.75936 v -6.95789 l -5.10363,-3.17873 -7.52299,-8.03512 0,0 z","name":"Canada"},"gt":{"path":"m 432.05438,488.50582 10.47215,7.66427 10.56044,-13.12108 -1.80128,-2.71958 -3.60256,-0.12362 v -7.68193 l -2.70192,-1.64234 -8.1764,2.43703 3.12575,7.20511 -7.87618,7.98214 0,0 z","name":"Guatemala"},"hn":{"path":"m 454.4291,483.66709 16.31747,-0.61808 4.83873,5.75703 -3.01979,-0.68873 -5.81001,0.24724 -7.59363,7.13448 -3.24937,7.22278 -2.13681,-1.13022 -0.0177,-7.9115 -4.69745,-3.14341 5.36852,-6.86959 0,0 z","name":"Honduras"},"sv":{"path":"m 444.00993,496.89414 8.30002,4.13234 -0.12362,-6.55171 -4.25597,-2.59596 -3.92043,5.01533 0,0 z","name":"El Salvador"},"ni":{"path":"m 472.42423,489.54774 3.86746,0.77702 0.12361,7.92917 -4.50319,12.85619 -12.13215,-1.20086 -2.70192,-6.19852 3.60256,-7.52299 6.83426,-6.35746 4.90937,-0.28255 0,0 z","name":"Nicaragua"},"cr":{"path":"m 471.78849,512.27565 2.45468,4.80341 1.99554,2.64894 -2.68426,7.96448 -5.12129,-3.60256 -8.37065,-7.66426 v -5.06831 l 11.72598,0.9183 0,0 z","name":"Costa Rica"},"pa":{"path":"m 477.45722,520.45205 -2.5783,8.05278 8.51193,2.20745 5.28022,1.04191 0.90064,-6.23384 5.66873,-2.86085 5.03299,2.59596 1.97787,3.16107 2.40171,-0.28256 1.88958,-5.73937 -6.28682,-2.59596 -4.76809,-2.59596 -4.7681,3.24937 -5.66873,2.86085 -5.79235,-2.33107 -1.80128,-0.52978 0,0 z","name":"Panama"},"bz":{"path":"m 449.14888,472.40027 -0.0883,6.44575 h 1.48341 l 5.05064,-9.43023 h -3.42596 l -3.01979,2.98448 0,0 z","name":"Belize"}}});

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