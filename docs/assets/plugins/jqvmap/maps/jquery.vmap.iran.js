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
            /**
	Iran Vector Map
	Created By Mahmoud Eskandari E-mail:info@webafrooz.com
	http://Webafrooz.com
**/
jQuery.fn.vectorMap('addMap', 'iran_ir', {"paths": {"15": {"path": "M353.778,484.712c-0.204,0.204-0.767,1.047-1.086,0.647c-0.827-1.037-1.373-1.065,0.181-1.321c1.159-0.191,0.241-1.308,0.129-1.762,c1.186-0.392,0.011-1.69,1.216-1.813c0.314-0.032,0.236,0.389,0.362,0.596c0.17,0.278,1.727,0.29,1.5,0.648,c-0.309,0.486-1.089,0.681-1.449,1.269c-0.285,0.466-0.058,0.691,0.129,1.114c0.293,0.664,0.37,0.697,1.035,0.492,c1.294-0.398-0.207,1.125-0.207,1.451c0,0.426,0.75,0.525,0.75,1.166c0,0.801-1.546,0.131-1.733-0.544,c-0.095-0.344,0.073-0.81,0.181-1.088c0.068-0.176-0.222-0.894-0.414-0.751L353.778,484.712L353.778,484.712z M345.481,490.346,l1.34,0.013c0.671,0.399,1.383,0.555,1.319,1.554c-0.074,1.158-0.609,1.96-0.543,3.186c0.061,1.134-1.56,1.24-1.086,2.616,c0.447,1.301,0.758,2.382,0.414,3.782c-0.596,2.42,1.885,3.342,4.293,3.342l0,0c-0.346-1.397-0.552-2.951,0.491-4.196,c1.153-1.153,1.093-2.818,1.966-3.601c1.01-0.907,0.182-2.637,1.371-2.72c0.986-0.069-0.495-1.184-0.414-1.347,c0.24-0.482,0.528-0.418,0.181-0.984c-0.562-0.919,0.188-1.772,0.957-2.383c-0.399-0.526-0.618-0.158-1.164-0.311,c-0.457-0.128-0.411-0.699-0.828-0.699c-1.719,0-0.173-1.046-0.905-1.995c-0.475-0.615-4.146-2.35-4.371-2.124,c-0.819,0.819-1.219,2.63-1.888,3.678C346.177,488.842,345.809,489.582,345.481,490.346L345.481,490.346z", "name": "kish"},"16": {"path": "M88.025,126.032l3.75,9.17l0,0l-1.242,0.466c-1.013,0.757-0.514,0.974,0,1.943c0.528,0.995-0.879,0.732-0.879,1.632,c0,0.626-0.057,0.962-0.491,1.399c-0.707-0.142-2.869,0.147-3.569,0.44c-1.019,0.427-1.894-0.358-2.923-0.544,c-3.022-0.549-4.12-0.821-5.664-3.704c-0.14-0.261-4.453,1.089-5.405,1.14c-2.403,0.129-5.432,0.934-7.785,0.052,c-2.395,0-2.618,1.147-4.449-0.544c-1.483-1.37-3.149-0.943-4.863-0.337c-4.995,1.769,1.601,7.02-4.319,7.02,c-0.814,0-5.872-0.138-5.613,1.062c0.453,2.089,0.013,1.056-1.215,1.865c-0.527,0.347,0.242,0.937-0.052,1.399,c-0.196,0.308-0.76,0.949-0.828,1.217c-0.132,0.033-0.422,0.192-0.569,0.104c-1.182,0.705-0.506,1.224-1.112,2.357l-1.798,1.349l0,0,c-0.607-0.063-1.25-0.02-1.926,0.153c-3.41,0.875-2.708,0.088-2.043-2.513c0.355-1.39-0.312-1.358-1.138-2.487,c-0.83-1.134,0.065-2.718-0.595-3.601c0.582-0.778-0.295,0.567-0.698-1.502l-0.44-2.254c0.613-0.821-0.307-2.06-0.647-2.668,c-0.694-1.244-1.166-0.618-2.38-0.181c-3.151,1.133-2.089-2.262-3.905-3.341c-2.108-1.252,0.281-1.809-0.233-3.135,c-0.276-0.712,1.17-0.287,1.112-1.244c-0.053-0.881-0.172-2.377-0.517-3.16c-0.603-1.364-1.736-0.626-2.406-1.295,c-0.216-0.216-0.034-1.307-0.595-1.114c-0.786,0.27-0.988-0.207-1.707,0.026c-0.962,0.107-1.842,0.142-1.267-1.269,c0.184-0.453,0.599-0.971,0.724-1.347c0.166,0,0.465-0.176,0.621-0.207c0.344-1.361,1.191-1.689,0.13-3.316,c-0.568-0.87,1.157-2.6-0.31-2.953c-0.631-0.152-1.037-1.034-1.707-0.44c-0.432,0.382-0.403-0.434-0.569-0.622,c-0.312-0.353-0.621-0.252-0.621-0.829c0-0.726-0.939-0.56-0.802-1.269l0.621-1.191l0,0l0.052-1.244,c-0.228-0.536-0.488-1.089-0.388-1.684c0.094-0.561,0.719-0.657,1.034-1.088c1.038-1.414-0.911-1.704-1.707-2.28,c-0.711-0.513,0.19-1.551-0.828-1.813c-1.648-0.425-1.354-0.222-1.966-1.762c-2.102-0.297-1.198-1.036-1.811-2.59,c0-1.183,1.781-0.797,0.698-2.306c-0.596-0.83,0.773-1.285-0.44-2.409c-2.093-1.94,1.882-1.913,0.284-4.455,c-0.85-1.353-1.989-1.627-3.388-1.14c-1.449,0.505-1.908-1.46-2.664-2.461c-0.545-0.723-1.717-1.342-2.69-1.062,c-4.412,1.27-0.362-4.35-0.362-5.44c0.706-0.239,0.549-1.572,0.854-1.995c0-1.172,0.596-0.621,1.138-1.295,c0.501-0.622-0.633-1.01,0.543-1.01c0.401,0,1.037-2.409,0.983-2.824c-0.106-0.81-0.721-1.622,0.388-2.176,c0.585-0.292,2.246-1.031,2.302-1.761c0.085-1.131-1.451-2.459-2.431-1.943c-1.234,0.65-1.201-0.215-2.302,0.078,c-1.526,0.406-0.539-1.488-0.569-1.891c-0.078-1.037-1.135-1.662,0.052-2.849c-0.289-0.725-0.225-2.556,0.285-3.264,c-0.157-0.573,0.146-1.12-0.543-1.451c-0.704-0.337-1.434,0.246-0.957-1.218c0.565-1.734-1.473-1.105,0.337-3.057,c0.593-0.64-0.641-0.765,0.103-1.71c0.548-0.697,0.486-2.295-0.647-2.383c-1.784-0.139-1.077-2.062-1.992-2.875,c-0.683-0.608,0.13-1.425-0.336-1.762c-1.082-0.781,0.326-1.169,0.543-1.606c0.206-0.414-0.426-1.14-0.44-1.606,c-0.257-1.276,1.173-1.014,0.621-2.124c-0.139-0.279-1.063-2.11-1.19-2.202c-0.632-0.456-1.216-0.19-1.733-0.466,c-0.894-0.479-0.082-1.512-0.647-2.228c-0.317-0.402-0.166-0.768,0.052-1.166c0.232-0.424-0.607-2.388-1.034-2.668,c-0.624-0.409-0.122-1.53-0.155-1.502c0.621-1.347,1.686-0.641,2.38-0.026c0.743,0.658,2.1-0.974,3-0.751,c0.046,0.188,0.211,0.431,0.259,0.622c0.403,0.079,1.482,0.615,1.552,0.596c0.641-0.182,3.104-1.18,3.492-1.658,c0.745-0.918-1.121-0.886,0.259-2.383c0.746-0.81,0.28-1.267,0.052-2.124c-0.281-1.056,0.889-1.55,1.267-2.564,c0.498-1.334-0.293-2.462,0.853-3.419l3.104-2.772l1.242,2.305l2.354,0.518l0.461,1.31l1.453,0.71l0,0,c0.118,0.363,0.15,0.778,0.384,1.079c0.348,0.446,0.355,0.639,1.09,0.579c0.287-0.023,1.183-0.143,1.215,0.363,c0.002,0.035-0.082,1.047-0.052,1.321c0.004,0.034,0.007,0.112,0.052,0.129c0.68,0.268,0.541,1.293,0.983,1.787,c0.541,0.605,0.776,0.793,0.776,1.658c0,1.208,0.261,2.069,1.474,2.383c1.484,0.384,1.621,0.647,2.172,1.969,c0.242,0.579,0.836,1.044,1.086,1.606c0.448,1.007-0.174,2.844,1.009,3.575c1.055,0.653,4.628,0.653,5.121,1.554,c0.522,0.954,1.678,2.359,1.759,3.342c0.078,0.956,1.604,0.098,1.604,2.072c0,0.861,0.245,1.361,0.631,1.644l0,0l-1.174,3.796,c-0.076,0.058-0.23,0.207-0.336,0.233c-0.236,0.962-1.192,0.73-1.086,2.487c0.065,1.089-0.597,1.442-0.672,2.332,c-0.092,1.096,0.347,3.122,0.827,4.067c0.244,0.48,0.642,1.447,0.673,1.995c0.049,0.864-0.527,0.759-0.646,1.243,c-1.135,0.163-4.156,3.429-5.354,4.145c-1.239,1.553-2.131,2.754-2.276,4.818c-0.188,2.683,3.082,3.757,3.75,6.424,c0.736,2.938,0.724,5.99,0.724,9.041c0.408,2.176,0.336,4.302,1.086,6.45c0.986,2.824,3.563,3.061,3.337,6.321,c-0.254,3.655-2.212,5.331,1.215,8.083c1.672-0.324,5.477,3.043,6.543,4.196c1.91,2.065,1.981,2.36,4.837,1.917,c1.492-0.231,3.489-0.926,4.526,0.622c2.131,3.181,5.285,5.379,7.889,8.367c3.668-0.71,2.64-4.662,6.208-5.388,c1.793-0.365,1.039,1.257,2.405-0.751c1.885-2.772,3.462,1.012,4.759,1.347c2.552,0.66,0.651,2.484,1.759,3.834,c2.171,2.647-1.244,5.854,2.949,6.761C83.021,127.549,84.826,126.482,88.025,126.032L88.025,126.032z", "name": "west azarbaijan"},"17": {"path": "M122.165,111.707l2.286-2.053c2.929-0.999,3.038,0.377,5.215,1.769c1.317,0.842,2.151-0.129,2.923-1.088,c0.477-0.592,3.404-0.882,4.112-0.882l0,0c-0.139-0.34-0.198-0.669-0.155-0.983c0.299-1.103,1.149-3.97,0.181-4.74,c-1.701-1.352-3.029-2.186-4.009-4.274l-5.483-11.683c-0.095-0.774-0.879-1.213-0.879-2.046c0-0.829,0.611-1.261,0.802-1.969,c0.281-1.044-0.181-3.102,0.259-3.756c1.581-2.353,0.112-5.67,2.664-7.616c2.331-1.777-0.965-1.104-1.423-2.228,c-0.527-1.296,0.084-0.907-1.319-1.45l-0.084-5.983l0,0c-0.113-0.095-0.24-0.182-0.382-0.261c-0.222-0.123-0.892-0.409-1.009-0.622,c-0.209-0.381,0.188-0.904-0.052-1.295c-0.399-0.652-1.228,0.111-1.5-0.933c-0.053-0.203-0.258-1.153-0.233-1.166,c-0.362-0.488-1.51,0.147-2.069,0.259c-1.269,0.48-2.168-0.038-2.38-1.321c-0.213-1.293-1.597-0.63-1.319-1.995,c0.576-2.832-2.515-2.004-3.957-3.005c-0.443-0.308-0.427-1.145-1.06-1.425c-1.189-0.526-1.748-2.797-1.474-3.912,c0.444-0.11,0.691,0.145,1.267,0c0.012-0.05,0.028-0.065,0.078-0.078c0.447-2.266,4.801-0.884,6.595-2.409,c1.194-1.014,0.622-1.429,0.957-2.694c-0.105-0.415-0.883-2.154-1.112-2.435c-0.657-0.802-1.633,0.181-2.224-1.347,c-0.674-1.741-3.718-2.309-2.095-4.792c0.437-0.669,1.864-1.925,2.612-2.124c0.974-0.259,0.981,0.262,1.992-0.492,c0.757-0.566,1.46-0.278,1.862-1.269l-9.285-11.165l-2.194-0.998c-0.027,0.064-0.054,0.118-0.082,0.169,c-0.315,0.567-4.093,2.458-4.397,2.357c-1.127-0.375-1.411-0.177-2.121,0.958c-0.554,0.885-0.878,1.014-1.966,1.114,c-0.676,0.062-0.982,1.874-1.811,1.528c-0.233-0.097-0.795,0.09-1.112,0.285c-0.516,0.317-0.533,1.161-1.216,1.502,c-1.153,0.576-2.805,0.306-3.673,0.933c-1.574,1.137-3.351,5.511-5.483,5.673c-0.873,0.066-3.698,1.991-4.164,2.746,c-0.745,1.204-0.494,1.367-1.491,2.249l0,0l2.965,3.451c0.025,0.784,1.235,2.558,1.603,3.368c1.203,2.638-0.732,5.713,0.104,8.238,h0.103c0.149-0.442,2.494-1.829,3-2.668c0.899-1.49,2.311-4.025,3.751-4.87c2.393-1.404,2.378-1.242,2.819,1.217,c0.517,2.881,2.429,4.76,0.905,7.539c-0.91,1.659-4.453,2.773-4.061,4.766c1.718,0.422,1.656-0.441,3.311-0.441,c4.846-1.661-3.133,11.299-3.699,12.305c-0.891,1.586-1.106,1.049,0.491,2.124c1.632,1.098,4.413,2.596,6.259,3.16,c2.359,0.721,4.063-1.082,5.82-0.648c0.173,0.703,0.903,2.148,1.267,2.875l2.095,8.082l2.069,2.409l3.854,0.906,c0,0.73,0.447,1.43,0.052,2.15c-1.03,1.879-1.607,4.278-1.707,6.45c-0.158,3.425,0.743,4.18,3.776,5.699,c1.485-0.24,1.587,4.466,1.681,5.388c0.113,1.113,0.436,1.234,1.241,1.813C120.872,110.372,122.039,111.195,122.165,111.707,L122.165,111.707z", "name": "Ardabil"},"18": {"path": "M37.781,44.496c0.986,0.724,2.892,0.041,3.973,0.403c1.154,0.387,0.601,0.829,2.121,0.829c1.189,0,1.338,0.984,2.25,0.958,c1.591-0.045,1.839-0.001,3.026,1.192c1.474,1.48,1.306,0.056,2.483-0.078c0.887-0.101,0.907,0.981,2.095,0.492,c1.817-0.747,1.99,1.21,3.575,1.363l0,0c0.064,0.006,0.131,0.01,0.201,0.01c2.044,0,3.687-2.735,5.819-2.875,c1.315-0.086,1.208,1.212,2.845,0.751c1.03-0.29,1.67,0.217,2.51,0.315l0,0c0.354,0.041,0.744,0.01,1.215-0.186,c0.865-0.359,1.123-0.534,1.578-1.321c0.13-0.226,0.616-1.112,0.854-1.217c0.547-0.241,0.16-1.326,0.595-1.58,c1.149-0.673,1.968-0.287,2.302-1.813c0.236-1.077,0.846-0.823,1.552-1.528c0.887-0.887,0.963-2.894,2.897-2.357,c0.466,0.129,0.733,0.857,1.397,0.466c0.51-0.3,1.007-0.981,1.474-1.373c0.078-0.066,0.151-0.128,0.217-0.187l0,0l2.965,3.451,c0.025,0.784,1.235,2.558,1.603,3.368c1.203,2.638-0.732,5.713,0.104,8.238h0.103c0.149-0.442,2.494-1.829,3-2.668,c0.899-1.49,2.311-4.025,3.751-4.87c2.393-1.404,2.378-1.242,2.819,1.217c0.517,2.881,2.429,4.76,0.905,7.539,c-0.91,1.659-4.453,2.773-4.061,4.766c1.718,0.422,1.656-0.441,3.311-0.441c4.846-1.661-3.133,11.299-3.699,12.305,c-0.891,1.586-1.106,1.049,0.491,2.124c1.632,1.098,4.413,2.596,6.259,3.16c2.359,0.721,4.063-1.082,5.82-0.648,c0.173,0.703,0.903,2.148,1.267,2.875l2.095,8.082l2.069,2.409l3.854,0.906c0,0.73,0.447,1.43,0.052,2.15,c-1.03,1.879-1.607,4.278-1.707,6.45c-0.158,3.425,0.743,4.18,3.776,5.699c1.485-0.24,1.587,4.466,1.681,5.388,c0.113,1.113,0.436,1.234,1.241,1.813c0.414,0.297,1.581,1.12,1.707,1.632l0,0l-1.319,0.13c-0.578-0.289-1.172-0.427-1.759-0.751,c-0.422-0.233-0.741-0.558-1.215-0.725c-1.084-0.383-2.66-0.217-3.802,0.026c-0.891,0.189-1.832,0.115-2.741,0.285,c-1.364,0.114-2.735-1.294-3.751-0.751c-1.745,0.933-2.549,0.7-4.5,0.7c-2.711,0-6.016,3.304-8.277,4.715,c-1.54,0.961-1.702,3.162-3.233,3.808c-2.723,1.149-2.986,2.524-4.009,5.026l0.465,1.865l0,0c-3.199,0.45-5.004,1.516-8.302,0.803,c-4.193-0.907-0.778-4.114-2.949-6.761c-1.107-1.35,0.793-3.174-1.759-3.834c-1.297-0.335-2.874-4.119-4.759-1.347,c-1.366,2.008-0.613,0.387-2.405,0.751c-3.567,0.726-2.54,4.678-6.208,5.388c-2.603-2.988-5.758-5.186-7.889-8.367,c-1.037-1.548-3.035-0.853-4.526-0.622c-2.855,0.443-2.927,0.148-4.837-1.917c-1.066-1.153-4.872-4.52-6.543-4.196,c-3.428-2.751-1.469-4.427-1.215-8.083c0.227-3.26-2.351-3.497-3.337-6.321c-0.75-2.148-0.679-4.274-1.086-6.45,c0-3.051,0.012-6.102-0.724-9.041c-0.668-2.667-3.939-3.741-3.75-6.424c0.145-2.064,1.037-3.266,2.276-4.818,c1.198-0.716,4.219-3.982,5.354-4.145c0.12-0.484,0.695-0.38,0.646-1.243c-0.031-0.548-0.429-1.515-0.673-1.995,c-0.48-0.945-0.92-2.971-0.827-4.067c0.075-0.889,0.738-1.242,0.672-2.332c-0.106-1.756,0.85-1.525,1.086-2.487,c0.106-0.026,0.26-0.175,0.336-0.233L37.781,44.496L37.781,44.496z", "name": "East azarbaijan"},"19": {"path": "M140.063,222.347c0.521-1.967,4.346-1.949,3.647-4.741c-0.292-1.167-0.69-1.534-0.414-2.849c0.289-1.375-0.134-2.142-0.802-3.316,c-0.837-1.416-1.899-1.953-2.354-3.782c-0.388-1.559,0.446-3.232,0.155-4.818c-0.162-0.882-4.343-2.083-2.923-3.031,c0.431-0.288,2.37,0.698,3.518,0.311c0.939-0.317,2.051,0.602,2.328,1.451c1.473,0-1.464-4.296-1.293-5.181,c0.38-1.967,4.289-0.463,2.535-3.989c-0.259-0.806-1.321-1.903-0.595-2.824c0.082-0.104,4.752,0.657,5.768,0.544,c1.956-0.218,4.43-0.763,3.129,2.072c-0.606,1.32-1.43,2.726,0.337,3.29c1.183,0.378,5.065,4.071,3.957-0.674,c-0.523-2.243-1.266-5.141-3.311-6.451c-1.397-0.894-2.504-1.122-4.035-1.502c-0.623-0.155-2.567-1.427-2.043-2.254,c0.657-1.037,4.298,0.218,4.397-1.969c0.091-2.008-1.167-2.535-2.121-4.067c-0.453-0.783-0.583-3.704,0.207-4.274,c1.273-0.92,1.187,1.234,1.164,1.969c-0.048,1.556,1.723,2.332,2.483,0.803c0.921-1.855-0.828-2.485-0.828-4.041l0.104-1.451l0,0,c-0.811-1.426-3.456,0.009-4.681-0.518c-2.196-0.944-4.186,0.126-6.362-0.155c-1.46-0.188-2.075-1.325-0.828-2.487,c0.45-0.419,1.067-0.197,1.449-0.622c0.543-0.605-0.522-1.51-1.06-1.684c-1.412-1.238-3.036-2.327-4.94-2.435,c-0.679-0.039-1.225,0.363-1.81,0.363c-0.025,0.038-0.026,0.014-0.052,0.052c-0.135,0-0.334,0.214-0.414,0.285l0,0v2.772,l-2.871,1.217c-2.487-0.167-4.042-1.812-6.052-2.979c-2.242-1.301-3.165,1.697-5.509,1.114c-1.395-0.347-1.654-2.166-2.69-3.031l0,0,l-1.164-0.518c-0.916-0.916-2.125-1.987-3.311-2.513c-2.166-0.96-1.862,0.18-0.621,1.425c1.626,1.63,4.677,3.941,0.362,4.43,c-0.825,0.093-1.382,0.753-2.121,1.062c-2.375,0.994-0.793-4.999-2.819-2.643c-0.679,0.79-2.36,0.963-1.681,2.383,c1.071,2.243,2.801,3.924,3.388,6.424c0.233,0.996,0.13,3.497,1.449,3.497c1.379,1.973,3.841,2.384,4.888,4.689,c0.87,1.915,0.577,3.959-0.492,5.751c-1.236,2.073-1.641,1.735-2.457-0.052c-1.48-3.243-1.63,2.221-3.336,1.166,c-0.755-0.467-1.577-0.344-1.707,0.699l0,0c0.088,0.919,0.046,1.665-0.569,2.28c-0.553,0.553-1.326,0.857-1.862,1.451,c-0.692,0.766,1.255,2.616-0.465,3.057c-1.227,0.314-6.279,0.341-4.087,3.109c0.199,0.251,2.2,1.589,2.483,1.632,c0.885,0.135,2.498-0.58,2.845,0.829c0.383,0.723,0.059,2.823,0.647,3.083c1.017,0.449,1.365-1.052,1.681-1.658,c0.622-1.196,1.329-0.516,1.759-1.14c0.604-0.876,1.394-0.673,1.888,0.13c0.459,0.746-0.189,1.676-0.258,2.435,c-0.09,0.974,0.753,2.954-0.104,3.575c-0.485,0.351-4.484-0.717-5.276-0.958c-1.728-0.526-1.63,1.851-2.276,2.72l0,0l2.742,2.409,c0.894,0.689,2.586,1.691,3.207,2.487c1.524,1.952,4.08,0.866,6,3.652c1.278,1.854,2.945,1.843,5.018,1.762,c1.585-0.062,2.803,0.798,4.319,1.01c1.474,0.207,1.978-0.984,2.974-1.761c0.482-0.377,2.72,0.127,4.061-0.544,c1.221-0.612,1.466,1.153,2.483,1.969L140.063,222.347L140.063,222.347z", "name": "Hamadan"},"20": {"path": "M122.165,111.707l2.286-2.053c2.929-0.999,3.038,0.377,5.215,1.769c1.317,0.842,2.151-0.129,2.923-1.088,c0.477-0.592,3.404-0.882,4.112-0.882l0,0c1.049,2.559,6.683,5.723,8.173,7.876c1.143,1.652,1.159,3.67,1.604,5.544,c0.392,1.65,2.933,0.922,3.078,2.098l0,0l-9.492,5.44c-1.217,4.215,3.094,6.887,6.492,7.875c5.659,1.645,5.421,3.828,6.078,9.144,c0.165,1.046,1.605,4.199,0.388,4.844c-1.93,1.023-3.881,2.939-6.207,2.539c-1.483-0.255-2.36,0.391-3.518,1.243,c-0.301,0.221-2.163,1.275-2.354,0.518c-0.859-0.217-5.328-6.648-5.328-0.933c0,3.073-3.231,3.045-2.405,7.201l1.164,1.528l0,0,v2.772l-2.871,1.217c-2.487-0.167-4.042-1.812-6.052-2.979c-2.242-1.301-3.165,1.697-5.509,1.114,c-1.395-0.347-1.654-2.166-2.69-3.031l0,0c-0.545-1.094-0.087-2.106-1.5-2.798l-3.595-1.761c-1.816-0.89-5.851-2.272-3.518-4.767,c1.677-1.793,1.023-3.276,1.604-5.284c1.014-1.269,0.203-2.197-0.543-3.316c-0.959-1.439-0.755-2.357-1.086-3.886,c-0.814-3.756-4.053-2.322-6.828-3.316l-5.716-2.047c-1.38-0.494-1.865,0.483-3.362,0.441l-0.931-1.528l0,0l-3.75-9.17l0,0,l-0.465-1.865c1.023-2.502,1.285-3.877,4.009-5.026c1.531-0.646,1.693-2.847,3.233-3.808c2.26-1.411,5.566-4.715,8.277-4.715,c1.952,0,2.755,0.233,4.5-0.7c1.015-0.543,2.387,0.865,3.751,0.751c0.91-0.17,1.85-0.096,2.741-0.285,c1.143-0.242,2.718-0.409,3.802-0.026c0.475,0.168,0.794,0.493,1.215,0.725c0.587,0.325,1.181,0.462,1.759,0.751L122.165,111.707,L122.165,111.707z", "name": "Zanjan"},"21": {"path": "M91.775,135.203l0.931,1.528c1.497,0.042,1.982-0.934,3.362-0.441l5.716,2.047c2.775,0.993,6.014-0.441,6.828,3.316,c0.331,1.529,0.127,2.446,1.086,3.886c0.746,1.119,1.557,2.047,0.543,3.316c-0.581,2.009,0.074,3.491-1.604,5.284,c-2.333,2.495,1.701,3.877,3.518,4.767l3.595,1.761c1.413,0.692,0.955,1.704,1.5,2.798l0,0l-1.164-0.518,c-0.916-0.916-2.125-1.987-3.311-2.513c-2.166-0.96-1.862,0.18-0.621,1.425c1.626,1.63,4.677,3.941,0.362,4.43,c-0.825,0.093-1.382,0.753-2.121,1.062c-2.375,0.994-0.793-4.999-2.819-2.643c-0.679,0.79-2.36,0.963-1.681,2.383,c1.071,2.243,2.801,3.924,3.388,6.424c0.233,0.996,0.13,3.497,1.449,3.497c1.379,1.973,3.841,2.384,4.888,4.689,c0.87,1.915,0.577,3.959-0.492,5.751c-1.236,2.073-1.641,1.735-2.457-0.052c-1.48-3.243-1.63,2.221-3.336,1.166,c-0.755-0.467-1.577-0.344-1.707,0.699l0,0c-2.219,0-2.778,0.234-4.319-1.787c-1.332-1.748-1.905-3.886-4.371-3.886,c-1.359,0-2.132-2.15-2.974-1.917c-1.794,0.497,1.194,3.274-0.491,3.834c-0.959,0.319-1.928,0.249-2.949,0.052,c-3.336,0-0.63,5.541-3.802,3.86c-3.176-1.684-0.966,1.674-3.957,2.409c-0.175,0.712-0.207,3.038-1.293,2.824,c-2.672-0.528-1.357,1.21-1.448,2.202c-0.139,1.503-6.171-0.474-6.777-0.155c-2.808,1.479-1.613-2.334-1.707-3.264,c-0.13-1.273-1.423-0.466-2.069-0.466c-1.278-5.055-6.586-9.106-10.423-12.538l-3.698-1.714l0,0,c-0.09-0.852-0.645-1.503-1.268-2.198c-1.419-1.427-1.941-2.27-2.871-4.041c-0.793-1.512,0.365-2.007-0.336-3.29,c-0.834-1.524,0.122-0.668,0.905-0.933c0-1.786-1.132-1.532-0.103-3.135c1.145-1.784,1.318-1.036,3.517-1.036,c0.838,0,1.617-0.815,1.733-0.803c1.906,0.194,1.327,0.264,2.845-1.114c2.016-1.829,0.733-1.212,0.233-2.746,c-1.654,0-3.918,2.594-5.044-0.337c-0.479-1.248-5.23,0.406-5.276,0.544c-0.456,0-0.736-0.247-1.216-0.337,c-1.055,0-0.802,1.036-1.577,1.036c-0.509,0-0.997-0.537-1.552-0.259c-1.562,0.781-1.542-0.459-2.354-1.787,c-1.361-2.23-3.354-4.491-5.988-4.764l0,0l1.798-1.349c0.606-1.134-0.07-1.652,1.112-2.357c0.147,0.088,0.437-0.07,0.569-0.104,c0.068-0.268,0.632-0.909,0.828-1.217c0.294-0.462-0.475-1.052,0.052-1.399c1.229-0.809,1.668,0.224,1.215-1.865,c-0.26-1.2,4.798-1.062,5.613-1.062c5.92,0-0.676-5.251,4.319-7.02c1.714-0.607,3.38-1.034,4.863,0.337,c1.83,1.691,2.054,0.544,4.449,0.544c2.353,0.882,5.382,0.077,7.785-0.052c0.952-0.051,5.265-1.401,5.405-1.14,c1.544,2.883,2.643,3.156,5.664,3.704c1.028,0.187,1.904,0.971,2.923,0.544c0.7-0.293,2.862-0.582,3.569-0.44,c0.435-0.437,0.491-0.773,0.491-1.399c0-0.899,1.407-0.636,0.879-1.632c-0.514-0.969-1.013-1.186,0-1.943L91.775,135.203,L91.775,135.203z", "name": "kurdistan"},"22": {"path": "M291.472,136.187l-3.983,1.425c-0.003,0.002-0.293,0.161-0.31,0.233c-1.739,0.439-3.645,3.402-4.112,5.025,c-0.631,2.191,0.275,5.176-2.121,6.269c-1.846,1.406-2.17,2.113-3.362,4.171c-1.991,3.435-3.776,4.279-7.734,3.73,c-1.681-0.233-2.387-0.543-3.595,0.958c-1.045,1.298-2.422,0.725-3.802,0.725l-1.81,0.311l0,0c-1.624-0.41-3.292-2.612-4.733-1.891,c-4.141,2.07-4.712-0.92-8.121-1.632c-1.265-0.264-4.237-0.314-4.733-1.813c-2.851,0-4.758,3.599-6.802,5.155,c-2.517,2.517-3.978,3.94-7.811,1.839c-3.214-1.762-3.148-5.916-6.544-8.134c-2.677-1.749-4.387-1.829-7.604-1.736l-3.931,0.078l0,0,l-0.595-1.373c0-1.44,0.248-2.423-1.629-2.565c-1.424-0.108-2.44-1.111-3.906-1.321c-0.967-0.138-2.114,0.228-2.845-0.596,c-0.767-0.865-1.763-2.313-3-2.383c-0.956-0.054-1.509,0.069-2.354-0.414l-2.897-1.036l0,0c0.451-0.594,0.012-1.819-0.569-2.176,c-0.783-0.481-1.741-0.684-2.509-1.192l-5.173-3.419l-6.895-5.602l0,0c1.728,0.109,3.545-1.323,3.789-3.07,c0.303-2.171-0.663-4.424,1.966-5.518l3.088-1.287l0,0c0.166,0.122,0.319,0.246,0.457,0.374c5.232,4.834,14.559,8.61,21.674,9.507,c0.024,0.002,0.473,0.022,0.491,0.078c1.387-0.697,5.906,2.33,7.397,2.849c2.857,0.995,8.985,1.342,11.923,0.518l13.579-3.808,c0.062,0.006,0.385,0.087,0.466,0.026c1.149,0.46,6.984-1.636,8.535-2.047l12.725-3.368c3.11-0.823,8.528-0.464,11.406-1.554,c1.508,0,5.463-0.45,6.854-0.984c0.622-0.239,1.736-0.655,2.354-0.725c0.93-0.106,0.681,0.296,0.31,0.829,c-0.583,0.839-7.37,1.235-8.819,1.606c-0.702,0.18-6.893-0.06-4.035,0.907c-0.251,0.335-2.489-0.049-3.311,0.466,c-0.24,0.15,0.474,1.3,0.724,1.425c0.948,0.472,3.104-0.544,4.293-0.544c1.757,0,4.643,0.214,6.337,0.648,c1.406,0.36,2.858,0.121,3.982-0.583l0,0l-0.179,1.697l-2.172,1.503l-0.724,2.228l2.173,1.295l4.371,2.331L291.472,136.187,L291.472,136.187z", "name": "Mazandaran"},"23": {"path": "M177.991,128.824l6.895,5.602l5.173,3.419c0.768,0.508,1.726,0.71,2.509,1.192c0.581,0.357,1.02,1.581,0.569,2.176l0,0,c-0.956,0.185-2.726-0.271-3.698-0.544c-0.821-0.23-2.086,0.036-2.974-0.078c-1.547-0.199-2.718-0.596-4.345-0.052,c-2.229,0.745,1.132,3.188,1.785,3.653c-0.149,0.518,2.071,0.96,2.431,1.14c4.234,2.117-1.654,4.289-0.31,6.062,c-0.068,0.113-0.148,0.818-0.181,0.984c-0.745,1.653-0.602,2.011-2.483,2.953c-1.981,0.993-3.81,1.672-5.871,2.357,c-2.433,0.808-1.435,3.302-0.802,4.793l0.672,1.684l0,0c-0.923,0-1.461-0.506-2.354-0.337c-1.024,0.195-2.139,0.651-3,1.244,c-0.551,0.379-1.77,0.832-2.121,1.295c-2.532,0-3.869,1.174-6.13,1.865c-1.397,0.427-4.246,0.263-4.94,1.658,c-0.415,0.834,0.035,1.917-1.164,1.917c-1.093,0-3.694-0.871-4.578-0.233l0,0c-0.811-1.426-3.456,0.009-4.681-0.518,c-2.196-0.944-4.186,0.126-6.362-0.155c-1.46-0.188-2.075-1.325-0.828-2.487c0.45-0.419,1.067-0.197,1.449-0.622,c0.543-0.605-0.522-1.51-1.06-1.684c-1.412-1.238-3.036-2.327-4.94-2.435c-0.679-0.039-1.225,0.363-1.81,0.363,c-0.025,0.038-0.026,0.014-0.052,0.052c-0.135,0-0.334,0.214-0.414,0.285l0,0l-1.164-1.528c-0.826-4.156,2.405-4.128,2.405-7.201,c0-5.715,4.469,0.716,5.328,0.933c0.191,0.757,2.053-0.297,2.354-0.518c1.158-0.852,2.034-1.498,3.518-1.243,c2.327,0.4,4.277-1.516,6.207-2.539c1.217-0.645-0.223-3.798-0.388-4.844c-0.657-5.316-0.419-7.499-6.078-9.144,c-3.398-0.988-7.709-3.66-6.492-7.875l9.492-5.44l0,0l0.543,2.332c1.794,2.647,6.891,4.456,10.087,4.456,c2.774,0,4.297,0.126,6.802-0.984c2.186-0.969,4.466-2.798,6.983-2.798L177.991,128.824L177.991,128.824z", "name": "Qazvin"},"24": {"path": "M136.701,109.452c1.049,2.559,6.683,5.723,8.173,7.876c1.143,1.652,1.159,3.67,1.604,5.544c0.392,1.65,2.933,0.922,3.078,2.098l0,0,l0.543,2.332c1.794,2.647,6.891,4.456,10.087,4.456c2.774,0,4.297,0.126,6.802-0.984c2.186-0.969,4.466-2.798,6.983-2.798,l4.02,0.849l0,0c1.728,0.109,3.545-1.323,3.789-3.07c0.303-2.171-0.663-4.424,1.966-5.518l3.088-1.287l0,0,c-1.733-1.277-4.803-2.304-5.595-4.134c-3-2.984-3.629-2.985-4.94-6.942c-1.034-3.12-1.229-4.93-5.069-5.285,c-2.334-0.216-2.993-1.936-4.759-2.616c-0.017-0.007-1.425,1.136-2.328,1.062c-0.42-0.035-3.172-0.126-3.259-0.388,c-0.13,0-0.107-0.044-0.362-0.052c-1.06-0.635-4.91-0.539-6.311-0.751c-1.874-0.284-4.323-1.151-6-2.072,c-2.409-1.323-7.115-3.843-7.889-6.839c-0.556-2.151-2.472-5.598-2.044-7.823c0-2.644-0.925-4.967-0.724-7.616,c0.216-2.857-1.164-4.907-1.164-7.668c0-0.665-0.06-2.072-0.064-3.338l0,0c-0.891,0-3.049-0.18-3.583,0.54,c-0.821,1.108-1.312,1.098-2.612,1.036c-2.01-0.095-1.54-2.222-2.877-3.34l0,0l0.084,5.983c1.403,0.543,0.791,0.155,1.319,1.45,c0.458,1.124,3.754,0.451,1.423,2.228c-2.552,1.946-1.083,5.262-2.664,7.616c-0.439,0.654,0.022,2.712-0.259,3.756,c-0.19,0.708-0.802,1.14-0.802,1.969c0,0.834,0.784,1.272,0.879,2.046l5.483,11.683c0.98,2.088,2.309,2.922,4.009,4.274,c0.968,0.77,0.118,3.638-0.181,4.74C136.503,108.783,136.562,109.112,136.701,109.452L136.701,109.452z", "name": "Gilan"},"25": {"path": "M95.422,221.311c0.829,0.926,1.398,2.896,1.345,4.145c-0.045,1.062-0.542,1.981-1.5,2.461c-1.444,0.723-1.62,2.461-3.13,3.057,c-1.621,0.64-3.14-0.251-4.837,0.311c-1.616,0.925-4.422,1.215-5.509,3.109c-0.786,1.37-2.393,3.11-3.336,4.119,c-0.489,0.523,2.339,3.963,2.845,4.533c0.882,0.995,1.101,2.094,2.483,2.539c2.308,0.743,2.528,2.502,5.173,2.746,c3.016,0.279,3.665,1.601,5.949,3.031l8.949,6.684c-0.077,0.026,0.525,0.774,0.595,1.088c0.228,1.024,0.185,2.066,0.854,2.927,c0.933,1.2,0.908,2.285,1.629,3.471c0.326,0.537,0.854,0.809,0.854,1.502c0,0.758-0.252,1.698,0.155,2.383l1.707,1.71l0,0,c0,0.416-1.026,2.338-1.216,2.875c-0.387,1.096-0.582,2.419-1.319,3.368c-1.542,1.984-3.646,3.394-2.586,6.113,c0.563,1.444,0.477,2.493-0.828,3.497l-3.798,2.612l0,0c-0.326-0.33-0.606-0.539-0.806-0.565c-1.344-0.177-0.895-0.749-1.397-1.788,c0.211-0.211,0.508-0.395,0.75-0.544c0.223-0.137,0.354-0.541,0.362-0.544c0-0.77-1.111-1.582-1.733-1.736,c-0.109-0.554,0.604-1.228,0.155-1.477c-0.48-0.265-1.378-0.018-1.681-0.57c-0.899-1.636,0.406-1.623,0.077-2.435,c-0.631-1.558-4.353-4.52-5.535-3.186c-2.529,2.854-13.634-6.027-14.458-8.756c-2.075-1.04-4.061-3.123-5.975-4.663,c-2.908-2.34-6.196-3.238-9.88-3.238c-2.33,0-3.543,0.482-3.543-2.331c0.219-0.074,0.22-0.169,0.543-0.13,c0.073,0.009,0.522,0.065,0.543,0c2.97,0-5.567-3.523-1.448-3.523c1.715,0,4.393-1.062,2.638-2.824,c-0.381-0.383,0.513-1.148-0.233-1.865c-0.863-0.686-1.828-1.374-2.405-2.28c-0.407-0.639-0.323-2.148-1.19-2.435,c0-1.129-0.779-4.001-2.276-3.135c-1.276,0.739-3.609-0.016-1.423-1.114c1.892-0.95,0.201-1.53,0.078-2.409,c-0.216-1.537-2.4-1.177-3.518-0.596c-1.727,0.898-0.546,0.31-1.242-0.777c-0.038-0.059-0.1-0.124-0.18-0.194l0,0l0.723-4.676,c0.323-1.005,0.53-2.365,1.086-3.238c0.173-0.27,1.005-2.367,0.621-2.461c-0.048-0.195-2.065-2.628-0.595-2.305,c2.335,0.512,4.671,0.085,6.259-1.503c0.643-0.643,3.364,1.988,4.423,2.331c1.819,0.59,2.713-0.465,4.475-0.285,c2.074,0.212,3.957,2.878,5.509,4.093c2.135,1.671,5.215,1.961,7.837,2.202c0.958,0.028,2.436,0.555,3.311,0.026,c1.403-0.849,4.231-2.422,5.949-2.072c1.451,0.295,1.626,1.678,3.31,0.648c0.824-0.504,1.266-2.369,1.423-3.29,c0.14-0.818-2.771-3.558-0.569-4.015c0.686-0.142,3.987-0.84,4.475-0.544L95.422,221.311L95.422,221.311z", "name": "Illam"},"26": {"path": "M95.422,221.311c0.018-0.092,0.002-0.26,0.078-0.285c0-0.333,0.754-0.668,0.569-1.321c-0.332-1.172-1.443-2.804,0.388-3.264,c2.11-0.531,4.386,0.828,4.837-1.943c0.334-2.056-1.828-3.983,0.724-5.052l2.018,0.363l0,0l2.742,2.409,c0.894,0.689,2.586,1.691,3.207,2.487c1.524,1.952,4.08,0.866,6,3.652c1.278,1.854,2.945,1.843,5.018,1.762,c1.585-0.062,2.803,0.798,4.319,1.01c1.474,0.207,1.978-0.984,2.974-1.761c0.482-0.377,2.72,0.127,4.061-0.544,c1.221-0.612,1.466,1.153,2.483,1.969l5.225,1.554l0,0l-0.207,1.969c0.962,2.372-0.388,2.673-0.388,4.741,c0,0.72-0.611,1.458-0.492,2.15c0.164,0.954,0.781,0.272,1.345,0.648c0.349,0.233,0.605,1.177,1.19,1.01,c1.754-0.5,1.792,0.372,3.181,0.596c1.818,0.292,4.811-1.684,4.811-3.627c0-1.535,4.683-4.143,5.664-3.419,c1.392,1.026,2.845,1.942,2.845,3.86c0,2.004-0.902,3.606,1.448,4.611c1.064,0.293,1.899,0.573,2.38,1.58,c0.28,0.586,0.536,1.07,1.293,0.699c0.801-0.393,0.424-1.575,0.802-2.253c1.167-2.094,1.718,1.548,2.354,1.243,c0.406-0.195,1.392-1.489,1.837-0.596c0.372,0.747-0.647,2.254-0.647,3.135c0,1.603,0.961,0.311,1.759,0.311l0.595,1.14l0,0,c-0.12,0.478-0.537,0.916-0.854,1.295c-0.268,0.322-0.955,0.522-0.569,1.062c0.482,0.674,1.838,0.306,1.759,1.347,c-0.061,0.812-0.621,1.495-0.879,2.254c-0.529,0.526-1.804,2.985-1.992,3.652c-0.325,1.157,0.646,3.212-1.293,3.212,c-1.045,0-2.163,0.976-2.974,0.751c-2.375-0.659-0.681,0.523-2.173,1.011c-0.608,0.198-1.676,0.141-1.914,0.855,c-0.473,1.42,1.912,3.217,0.88,4.715c-1.437,2.085-4.202,0.326-5.638,3.756l0,0c-2.166,0-4.873,1.678-6.802,0.466,c-2.297-1.442-4.044-3.813-6.181-5.492c-1.554-1.22-2.697,1.074-4.113,0.13c-2.507-1.674-2.688,1.342-4.681-2.099,c-1.652-2.85-5.43-1.215-7.423,0.078c-3.419,0.724-8.33-2.58-9.57,1.943c-0.791,2.887-2.44,4.686-2.612,7.849,c-0.075,1.383-2.283,3.047-3.155,4.196l0,0l-1.707-1.71c-0.407-0.685-0.155-1.626-0.155-2.383c0-0.693-0.527-0.965-0.854-1.502,c-0.722-1.186-0.697-2.271-1.629-3.471c-0.669-0.861-0.625-1.903-0.854-2.927c-0.07-0.314-0.672-1.062-0.595-1.088l-8.949-6.684,c-2.283-1.43-2.932-2.752-5.949-3.031c-2.645-0.244-2.865-2.002-5.173-2.746c-1.382-0.445-1.601-1.543-2.483-2.539,c-0.506-0.57-3.334-4.01-2.845-4.533c0.944-1.009,2.55-2.749,3.336-4.119c1.087-1.894,3.893-2.184,5.509-3.109,c1.696-0.561,3.215,0.329,4.837-0.311c1.51-0.596,1.686-2.333,3.13-3.057c0.958-0.48,1.455-1.399,1.5-2.461,C96.82,224.207,96.251,222.237,95.422,221.311L95.422,221.311z", "name": "Lorestan"},"27": {"path": "M57.35,178.719l3.698,1.714c3.838,3.432,9.146,7.483,10.423,12.538c0.646,0,1.939-0.807,2.069,0.466,c0.094,0.93-1.101,4.743,1.707,3.264c0.606-0.319,6.638,1.659,6.777,0.155c0.092-0.992-1.223-2.73,1.448-2.202,c1.087,0.215,1.118-2.112,1.293-2.824c2.991-0.736,0.781-4.093,3.957-2.409c3.172,1.682,0.466-3.86,3.802-3.86,c1.02,0.197,1.99,0.267,2.949-0.052c1.685-0.559-1.303-3.336,0.491-3.834c0.842-0.234,1.615,1.917,2.974,1.917,c2.466,0,3.039,2.138,4.371,3.886c1.542,2.022,2.1,1.787,4.319,1.787l0,0c0.088,0.919,0.046,1.665-0.569,2.28,c-0.553,0.553-1.326,0.857-1.862,1.451c-0.692,0.766,1.255,2.616-0.465,3.057c-1.227,0.314-6.279,0.341-4.087,3.109,c0.199,0.251,2.2,1.589,2.483,1.632c0.885,0.135,2.498-0.58,2.845,0.829c0.383,0.723,0.059,2.823,0.647,3.083,c1.017,0.449,1.365-1.052,1.681-1.658c0.622-1.196,1.329-0.516,1.759-1.14c0.604-0.876,1.394-0.673,1.888,0.13,c0.459,0.746-0.189,1.676-0.258,2.435c-0.09,0.974,0.753,2.954-0.104,3.575c-0.485,0.351-4.484-0.717-5.276-0.958,c-1.728-0.526-1.63,1.851-2.276,2.72l0,0l-2.018-0.363c-2.552,1.068-0.39,2.995-0.724,5.052c-0.45,2.77-2.726,1.412-4.837,1.943,c-1.831,0.46-0.72,2.092-0.388,3.264c0.185,0.653-0.569,0.988-0.569,1.321c-0.075,0.025-0.06,0.193-0.078,0.285l0,0l-1.061,0.078,c-0.488-0.296-3.789,0.402-4.475,0.544c-2.202,0.457,0.709,3.197,0.569,4.015c-0.157,0.921-0.598,2.786-1.423,3.29,c-1.685,1.03-1.859-0.353-3.31-0.648c-1.718-0.35-4.546,1.224-5.949,2.072c-0.874,0.529-2.353,0.002-3.311-0.026,c-2.622-0.241-5.701-0.531-7.837-2.202c-1.552-1.215-3.435-3.882-5.509-4.093c-1.762-0.18-2.655,0.875-4.475,0.285,c-1.058-0.343-3.78-2.974-4.423-2.331c-1.588,1.588-3.925,2.015-6.259,1.503c-1.47-0.323,0.546,2.11,0.595,2.305,c0.384,0.094-0.448,2.191-0.621,2.461c-0.556,0.872-0.763,2.233-1.086,3.238l-0.723,4.676l0,0c-0.562-0.493-2.039-1.243-2.588-1.826,c-0.24-0.255-1.632-3.46-1.655-3.705c-0.729-0.729-0.458-1.409-0.879-2.176c-0.39-0.711-1.049-1.21-1.449-1.943,c-0.969-1.775-3.846-0.082-3.311-2.435c0.177-0.777,1.751-0.275,1.655-1.969c-0.052-0.914,0.862-2.114,1.655-2.668,c0.614-0.429,1.431-0.092,1.061-1.295c-0.493-1.6-0.354-1.055,0.181-2.409c0.488-1.233-0.095-2.216-0.44-3.394,c-0.32-0.74-1.056-0.863-1.785-1.036c-1.236-0.292-0.479-0.98-0.543-1.761c-0.056-0.686-2.186-2.768,0.698-2.28,c0.909,0.154,1.061-1.967,0.879-2.617c-0.081-0.29-0.841-1.908-0.491-1.994c0.09,0.364,2.058,1.149,2.535,1.528,c1.056,0.84,1.802-0.133,3.026,0.544c1.501,0.83-0.155-4.23-0.155-5.129c0-0.99-2.69-0.677-0.543-2.824,c0.837-0.837,0.704-0.893,0.491-2.098c0.798-0.798,3.615,0.398,2.768-2.072c-0.776-2.259,3.13,1.488,2.25-1.684,c-0.137-0.494,0.492-0.476,0.492-0.984c0-1.286-1.336-2.36,0.595-2.902c1.311-0.367-0.031-1.244,0.44-1.425,c0.185-0.07,0.623,0.339,0.802,0.441c0.751,0.425,1.701-0.149,2.069,0.078c0.74,0.455,1.63,1.796,1.63-0.285,c0-0.032,1.77-0.224,2.354-0.518c1.412-0.711-1.37-2.173,0.44-2.772c1.835-0.608-0.519-2.15-1.629-2.15,c-0.154-0.608,0.608-0.875,0.672-1.502C57.368,179.042,57.367,178.877,57.35,178.719L57.35,178.719z", "name": "Kermanshah"},"28": {"path": "M192.722,180.562c-1.182,4.092,0.944,12.279-5.25,12.279c-3.116,0-2.937,3.744-5.949,4.378c-3.162,0.666-3.569,1.323-3.569,4.663,c0.442,0.827,4.428,3.928,5.173,4.119c3.744,0.959,3.692,7.668,6.285,7.668c2.128,0,3.335-0.81,4.397,1.451,c0.891,1.898,0.87,2.564,3.233,2.564l1.112-0.388l0,0c0.82-0.645,1.293-4.819,1.293-5.88c0-9.376,16.095-2.658,21.286-6.451,l1.526-1.036l0,0l0.181-1.269c0.563-0.701,1.701-0.776,2.017-1.606c0.351-0.921,0.28-1.787,0.336-2.772,c0.119-2.102,1.907-4.245-0.181-5.855l0,0l-1.319-0.647c-2.116-2.128-3.718-2.521-6.595-3.264c-3.632-0.938-4.636-3.33-7.371-5.337,c-1.564-1.148-3.484-0.98-5.25-1.451c-2.473-0.66-3.071-2.774-5.897-1.891L192.722,180.562L192.722,180.562z", "name": "Qom"},"29": {"path": "M177.359,164.164c0.579,0.019,1.169,0.164,1.789,0.296c0.548,0.116,1.119,0.223,1.728,0.223c1.219,0,2.73,0.188,3.802,0.725,c0.994,0.498,1.157,1.261,1.836,2.021c0.58,0.649,1.715,0.56,1.112-0.414c-0.456-0.737-1.345-1.82-0.673-2.668,c1.236-1.561,3.052-0.564,3.052,1.243c0,0.746-0.883,2.282,0.207,2.642c1.949,0.646,0.727-3.855,3.026-2.383,c1.042,0.667,1.686,2.629,2.095,3.73c-0.155,0.532,0.197,0.979,0.155,1.528c-0.129,1.705-0.834,3.161-1.319,4.741l-1.449,4.714l0,0,c-1.182,4.092,0.944,12.279-5.25,12.279c-3.116,0-2.937,3.744-5.949,4.378c-3.162,0.666-3.569,1.323-3.569,4.663,c0.442,0.827,4.428,3.928,5.173,4.119c3.744,0.959,3.692,7.668,6.285,7.668c2.128,0,3.335-0.81,4.397,1.451,c0.891,1.898,0.87,2.564,3.233,2.564l1.112-0.388l0,0c0.37,0.679,0.828,1.089,1.371,1.632c1.367-0.275,0.454,2.673,0.336,3.057,c-0.592,1.937-2.845,2.238-3.285,4.093c-0.216,0.911,0.459,1.832-0.026,2.746c-0.648,1.223-1.773,0.25-2.768,0.285,c-1.426,0.049-3.396,2.248-4.63,3.005c-0.981,0.613-3.196,1.621-4.397,1.425c-1.148-0.188-2.361-0.36-3.337,0.441,c-2.222,1.823-4.838,0.92-7.345,2.539c-1.581,1.021-2.781,2.477-4.242,3.627l0,0l-0.595-1.14c-0.797,0-1.759,1.292-1.759-0.311,c0-0.881,1.018-2.388,0.647-3.135c-0.444-0.893-1.43,0.401-1.837,0.596c-0.636,0.304-1.187-3.337-2.354-1.243,c-0.378,0.679-0.001,1.861-0.802,2.253c-0.758,0.371-1.013-0.113-1.293-0.699c-0.481-1.007-1.315-1.288-2.38-1.58,c-2.35-1.005-1.448-2.607-1.448-4.611c0-1.918-1.453-2.834-2.845-3.86c-0.981-0.723-5.664,1.884-5.664,3.419,c0,1.942-2.993,3.919-4.811,3.627c-1.39-0.224-1.428-1.096-3.181-0.596c-0.585,0.167-0.84-0.777-1.19-1.01,c-0.564-0.376-1.181,0.306-1.345-0.648c-0.119-0.692,0.492-1.43,0.492-2.15c0-2.068,1.35-2.369,0.388-4.741l0.207-1.969l0,0,c0.521-1.967,4.346-1.949,3.647-4.741c-0.292-1.167-0.69-1.534-0.414-2.849c0.289-1.375-0.134-2.142-0.802-3.316,c-0.837-1.416-1.899-1.953-2.354-3.782c-0.388-1.559,0.446-3.232,0.155-4.818c-0.162-0.882-4.343-2.083-2.923-3.031,c0.431-0.288,2.37,0.698,3.518,0.311c0.939-0.317,2.051,0.602,2.328,1.451c1.473,0-1.464-4.296-1.293-5.181,c0.38-1.967,4.289-0.463,2.535-3.989c-0.259-0.806-1.321-1.903-0.595-2.824c0.082-0.104,4.752,0.657,5.768,0.544,c1.956-0.218,4.43-0.763,3.129,2.072c-0.606,1.32-1.43,2.726,0.337,3.29c1.183,0.378,5.065,4.071,3.957-0.674,c-0.523-2.243-1.266-5.141-3.311-6.451c-1.397-0.894-2.504-1.122-4.035-1.502c-0.623-0.155-2.567-1.427-2.043-2.254,c0.657-1.037,4.298,0.218,4.397-1.969c0.091-2.008-1.167-2.535-2.121-4.067c-0.453-0.783-0.583-3.704,0.207-4.274,c1.273-0.92,1.187,1.234,1.164,1.969c-0.048,1.556,1.723,2.332,2.483,0.803c0.921-1.855-0.828-2.485-0.828-4.041l0.104-1.451l0,0,c0.884-0.638,3.485,0.233,4.578,0.233c1.199,0,0.749-1.083,1.164-1.917c0.694-1.395,3.543-1.23,4.94-1.658,c2.261-0.691,3.597-1.865,6.13-1.865c0.351-0.463,1.57-0.916,2.121-1.295c0.861-0.592,1.976-1.049,3-1.244,C175.899,163.658,176.436,164.164,177.359,164.164L177.359,164.164z", "name": "Markazi"},"30": {"path": "M177.359,164.164c0.579,0.019,1.169,0.164,1.789,0.296l0,0l1.573-0.814c2.54-1.36,5.817-0.272,8.638-1.321,c1.882-0.699,4.065-0.432,6-0.803c1.039-0.199,7.273,2.43,5.199-0.7c-1.13-1.704-0.844-2.13,0.543-3.057,c0.98-0.654,1.414-2.902,2.767-2.902c1.588-0.614,4.25,3.097,5.095,1.399c0.39-0.784-1.487-2.314-0.104-3.005,c0.445-0.222,0.892-0.044,1.216-0.492c0.243-0.337,0.285-1.443,0.285-1.865l0,0l-0.595-1.373c0-1.44,0.248-2.423-1.629-2.565,c-1.424-0.108-2.44-1.111-3.906-1.321c-0.967-0.138-2.114,0.228-2.845-0.596c-0.767-0.865-1.763-2.313-3-2.383,c-0.956-0.054-1.509,0.069-2.354-0.414l-2.897-1.036l0,0c-0.956,0.185-2.726-0.271-3.698-0.544c-0.821-0.23-2.086,0.036-2.974-0.078,c-1.547-0.199-2.718-0.596-4.345-0.052c-2.229,0.745,1.132,3.188,1.785,3.653c-0.149,0.518,2.071,0.96,2.431,1.14,c4.234,2.117-1.654,4.289-0.31,6.062c-0.068,0.113-0.148,0.818-0.181,0.984c-0.745,1.653-0.602,2.011-2.483,2.953,c-1.981,0.993-3.81,1.672-5.871,2.357c-2.433,0.808-1.435,3.302-0.802,4.793L177.359,164.164L177.359,164.164z", "name": "Alborz"},"31": {"path": "M179.148,164.46c0.548,0.116,1.119,0.223,1.728,0.223c1.219,0,2.73,0.188,3.802,0.725c0.994,0.498,1.157,1.261,1.836,2.021,c0.58,0.649,1.715,0.56,1.112-0.414c-0.456-0.737-1.345-1.82-0.673-2.668c1.236-1.561,3.052-0.564,3.052,1.243,c0,0.746-0.883,2.282,0.207,2.642c1.949,0.646,0.727-3.855,3.026-2.383c1.042,0.667,1.686,2.629,2.095,3.73,c-0.155,0.532,0.197,0.979,0.155,1.528c-0.129,1.705-0.834,3.161-1.319,4.741l-1.449,4.714l0,0l5.458-0.725,c2.826-0.883,3.423,1.231,5.897,1.891c1.766,0.471,3.686,0.303,5.25,1.451c2.735,2.006,3.74,4.398,7.371,5.337,c2.878,0.743,4.479,1.136,6.595,3.264l1.319,0.647l0,0c0.304-0.535,0.796-1.103,1.009-1.658c0.158-0.412-0.104-1.25-0.104-1.735,c0-1.084,1.528-2.679,2.224-3.471c2.782-1.395-2.078-5.21-3.052-6.347c-2.83-3.305-0.104-4.809-0.104-8.082,c0-1.616-0.641-4.264,1.837-2.254c0.286,0.232,1.642,0.065,1.655,0.104c0.065,0,2.116,1.246,2.793,1.425,c1.039,0.274,2.131,1.494,2.897,2.202c1.981,1.831,3.511,2.278,6.078,1.451c2.163-0.539,4.442,1.847,6.518,2.28,c2.245,0.468,4.938-0.205,7.113-0.751c1.999-0.502,8.456-6.824,8.613-8.886c0.187-2.468-1.707-4.971-1.448-7.668l0,0,c-1.624-0.41-3.292-2.612-4.733-1.891c-4.141,2.07-4.712-0.92-8.121-1.632c-1.265-0.264-4.237-0.314-4.733-1.813,c-2.851,0-4.758,3.599-6.802,5.155c-2.517,2.517-3.978,3.94-7.811,1.839c-3.214-1.762-3.148-5.916-6.544-8.134,c-2.677-1.749-4.387-1.829-7.604-1.736l-3.931,0.078l0,0c0,0.423-0.041,1.529-0.285,1.865c-0.324,0.448-0.771,0.27-1.216,0.492,c-1.383,0.691,0.494,2.221,0.104,3.005c-0.846,1.698-3.507-2.013-5.095-1.399c-1.353,0-1.787,2.247-2.767,2.902,c-1.387,0.926-1.673,1.352-0.543,3.057c2.074,3.13-4.16,0.5-5.199,0.7c-1.935,0.371-4.118,0.104-6,0.803,c-2.821,1.048-6.098-0.039-8.638,1.321L179.148,164.46L179.148,164.46z", "name": "Tehran"},"32": {"path": "M176.299,309.698c2.173,1.657,5.344,4.292,8.173,3.419c3.609-1.114,3.981,3.262,6.57,4.56c1.033,1.316,3.139,3.593,4.681,4.223,c0.784,0.32,1.439,1.05,2.327,0.855c1.148-0.252,1.155,0.208,2.069,0.389c0.268,0.822,2.176-0.495,2.431-0.751,c0.729-0.729,0.914-1.215,1.888-1.632l2.666-0.104l0,0c3.428-4.271-3.287-10.555-2.586-15.129c0.14-0.916,0.154-3.983,1.112-4.378,c1.179-0.485,1.205,0.221,1.293-1.14c-0.226-1.126-3.138-2.244-1.009-3.601c2.273-1.448,0.54-0.899,0.362-2.461,c-0.111-0.97,1.259-1.682,1.474-2.513c0.376-1.456-0.846-2.61-1.862-3.523l-5.276-4.741c-0.77-0.692-2.777-1.292-3.207-2.021,c-2.469-2.469,1.996-2.889,0.078-5.544c-0.631-0.873-0.281-0.896-0.388-1.839c-0.116-1.018-1.965,0.363-1.965-1.606,c0-1.297-0.183-3.599-2.173-2.824c-0.762,0.297-0.922,1.339-1.836,1.658c-2.339,0.815-3.876-0.914-6.44,0.829,c-1.154,0.575-1.931,1.43-2.974,2.124c-1.127,0.75-1.64-0.98-2.819-0.751c-1.031,0.2-1.376,0.829-2.354,0.052l-2.509-1.995,c-1.563-1.242-1.973,0.312-3.44,0.725c-0.904,0.254-1.44-0.575-2.224-0.622c-2.325-0.14-3.896,3.394-6.362,3.394l0,0l0.903,3.704,c0.044,1.507,2.161,3.243,3,4.404c1.649,2.283,1.582,5.883,4.681,6.683c2.863,0.74,0.458,5.227,3,7.046,c0.493,1.177,2.347,3.279,3.492,3.886c0.911,0.483,1.954,1.096,1.888,2.254c-0.076,1.336,1.258,2.228,0.336,3.471,C178.383,307.437,177.243,308.522,176.299,309.698L176.299,309.698z", "name": "Charmahal&Bakhtiari"},"33": {"path": "M186.283,354.902c-1.954,1.796,1.107,4.938,2.586,5.751c1.508,0.828,0.523,3.748,2.483,4.352c0.96,0.296,3.129,1.116,4.086,0.933,c1.086-0.208,2.077-0.673,3.207-0.544c0.682,0.077,1.398,0.685,2.043,0.933c2.094,0.804,4.714-0.527,5.147,2.901,c0.355,1.142-0.239,2.008,0.052,2.953c0.15,0.488,2.311,4.151,2.69,4.404c2.674,1.785,5.92,1.346,7.501,4.507,c1.259,2.517,4.095,7.385,4.423,10.051c0.399,1.421,2.156,3.164,3.13,4.326c3.664,4.375,3.763,10.737,5.949,15.673,c-0.084,0.578,2.198,4.905,2.587,5.855c0.396,0.968-0.242,3.614,0.724,4.145c2.484,1.364,3.202,2.063,5.147,4.197,c1.924,2.109,2.464,4.172,3.207,6.917c0.255,2.66,3.21,6.327,5.043,8.16c0.958,0.958,2.523,1.491,3.724,2.124,c1.335,0.703,2.334,1.782,3.466,2.772l1.655,1.606l0,0c-0.639,1.285-4.029,0.907-5.199,0.907c-0.796,0-1.398,0.265-2.147,0.337,l-1.225,1.308l0,0c-0.611-0.754-2.059-1.826-2.603-1.826c-0.326-0.987,0.849-0.318,1.086-1.036c0.566,0,0.983-0.191,1.423-0.337,c0-0.052-0.014-0.039,0.026-0.052c0-1.297-0.892-1.273-1.94-1.736c-1.01-0.446-1.174-2.255-1.888-3.057,c-1.797-2.018-3.391-3.058-6-3.29c-3.503-0.432-5.179-2.21-7.113-4.818c-0.829-1.118-8.63-1.018-10.294-0.699,c-1.204,0.231-1.528-0.475-2.509-0.544c-1.98-0.139-2.881-1.836-4.992-2.357c0.026-0.052-0.436-0.778-0.517-0.881,c-0.253-0.32-0.399-0.519-0.621,0.026c-0.406,0.998-1.164-0.254-1.448-0.933c-0.402-0.946-0.71-3.375-1.707-3.704,c-0.205,0.62-0.259,1.36-0.259,2.124c-0.281,0-0.672-1.988-0.672-2.357c0-0.894-0.667-1.552-0.362-2.746,c0.465-1.822-2.212-5.565-3.44-6.891c-2.024-2.183-1.674-3.783-2.198-6.502c0-1.055-0.074-2.5-0.414-3.445,c-0.404-1.124-1.364-1.748-1.707-2.642c-0.236-0.614,0.238-1.149-0.466-1.502c-0.833-0.418-1.964-0.078-2.871-0.311,c-1.323-0.339-1.386-1.965-2.147-3.109c-0.653-0.981,1.081-2.83,1.5-3.912c0.174-0.449,0.643,1.674,0.828,1.788,c0.735,0.452,0.311-1.943,0.155-2.228c-0.642-1.175-0.855-2.103-2.509-2.228c-0.748-0.056-3.124-1.424-3.673,0.233,c-0.998-0.741-0.855-1.522-0.957-2.591c0-0.569-0.047-0.981,0.077-1.528c0.054-0.238,0.667-1.086,0.569-1.217,c0.229-0.384-0.543-1.505-0.543-2.072c0-0.781,0.015-1.545-0.181-2.253c-0.146-0.527-1.492-3.39-1.759-3.549,c-0.126,0.094-0.494,0.294-0.543,0.44c-0.675,0-1.572-1.398-1.836-1.995c-0.534-1.209-1.344-1.679-2.224-2.564l-1.086-1.062,l-1.242-1.451c-1.286-1.037-1.82-2.711-2.845-3.886l-2.871-3.29c-1.597-1.829,0.635-4.119-0.931-6.787,c-1.176-2.003-1.632-2.272-3.152-2.637l0,0l2.945-1.871c0.777,0.226,1.664,0.055,2.406,0.492c1.184,0.698,1.876,0.669,3.233,0.44,c0.986-0.167,2.479,0.178,3.362-0.156l0,0c1.095,0.193,1.954-0.284,2.69,0.777c0.163,0.234,0.743,0.049,1.009,0.181,C185.761,354.122,185.984,354.603,186.283,354.902L186.283,354.902z", "name": "Bushehr"},"34": {"path": "M154.185,264.054l1.865,4.559c2.63,0.308,4.344-1.291,6.751,0.44c1.244,0.894,0.867,1.603,0.077,2.668,c-0.881,1.189-1.17,1.552-0.879,3.031l0,0l0.903,3.704c0.044,1.507,2.161,3.243,3,4.404c1.649,2.283,1.582,5.883,4.681,6.683,c2.863,0.74,0.458,5.227,3,7.046c0.493,1.177,2.347,3.279,3.492,3.886c0.911,0.483,1.954,1.096,1.888,2.254,c-0.076,1.336,1.258,2.228,0.336,3.471c-0.916,1.236-2.056,2.321-3,3.497l0,0l-1.474,3.238c-0.965,2.504-3.056,2.223-5.302,3.031,c-1.325,0.477-3.29,2.677-3,4.171c0.204,1.05,0.194,1.843,0.517,2.902c0.636,2.08,1.637,2.182,1.06,4.611,c-0.553,2.328-0.113,5.368,2.561,2.694c2.638-2.639,2.226,1.842,3.931,2.824c1.016,0.582,1.804,1.421,2.923,1.917,c1.446,0.64,3.828,0.678,3.828,2.824c0,0.643-1.174,3.213-1.785,3.419c0,1.828-0.819,2.343,0.957,3.938,c1.403,1.259,0.854,3.32,0.854,5.077l0.285,2.616l0,0c-0.883,0.334-2.376-0.011-3.362,0.156c-1.357,0.229-2.049,0.258-3.233-0.44,c-0.742-0.437-1.628-0.266-2.406-0.492l-2.945,1.871l0,0c-0.351-0.084-0.759-0.174-1.245-0.291c-0.97-0.234-1.832,0.903-2.483,0.777,l-5.328,3.808c-0.628,0.449-4.293,3.803-4.888,2.616c-0.21-0.419-1.461-1.904-1.216-2.15c0.319-0.321,2.547-2.927,0.466-2.927,c-1.778,0-4.783-0.768-6.156-0.207c-2.955,1.207-0.535-1.971-4.138-2.565c-1.49-0.245-2.542-0.711-3.466-1.788l-2.535-2.953,c-0.571-0.665,1.775-0.922,1.293-1.166c-0.58-0.292-1.723-0.026-2.354-0.026c-0.335,1.332-1.43,1.638-0.621,3.523l1.19,2.772,c0.82,0.207,0.17,4.416-0.052,5.077c-1.043,3.123-1.798,1.048-3.906,1.606c-3.93-1.464-3.089,2.432-4.63,2.305,c-0.595-0.049-1.331-0.765-1.681,0.207l0,0c-1.066-0.76-3.088-0.918-3.906-1.995c-0.582-0.766-0.159-2.857-0.905-3.186,c-0.868-0.383-0.846-0.874-0.647-1.762c0.207-0.331,0.348-0.887,0.517-1.114c-0.633-1.062-3.1-5.033-4.371-5.129,c-0.313-0.024-1.73,1.316-1.94,0.466c-0.204-0.052-0.429-2.639-0.647-3.083c-0.617-1.26-1.99-1.007-3.026-1.58l-1.291-0.567,l0.362-17.462H101.94V313.74l4.681-11.683c0.394-0.393,0.663-1.729,0.466-2.28c-0.281-0.785-0.953-0.602-1.345-1.217,c-0.219-0.343,0.055-1.028-0.155-1.451c-0.332-0.667-1.291-0.503-1.63-1.399c-0.372-0.984-2.645-4.689-4.056-6.118l0,0l3.798-2.612,c1.305-1.004,1.39-2.053,0.828-3.497c-1.059-2.72,1.044-4.129,2.586-6.113c0.737-0.949,0.932-2.272,1.319-3.368,c0.19-0.538,1.216-2.459,1.216-2.875l0,0c0.872-1.15,3.08-2.813,3.155-4.196c0.172-3.164,1.821-4.962,2.612-7.849,c1.24-4.522,6.151-1.219,9.57-1.943c1.993-1.293,5.771-2.928,7.423-0.078c1.994,3.441,2.174,0.425,4.681,2.099,c1.415,0.944,2.559-1.35,4.113-0.13c2.138,1.679,3.884,4.05,6.181,5.492C149.312,265.732,152.02,264.054,154.185,264.054,L154.185,264.054z", "name": "Khuzestan"},"35": {"path": "M181.653,352.959c1.095,0.193,1.954-0.284,2.69,0.777c0.163,0.234,0.743,0.049,1.009,0.181c0.41,0.204,0.632,0.685,0.931,0.984l0,0,l3.114-0.605c2.433,0.3,3.768,0.755,6.197,0.112c1.57-0.415,2.402-2.306,3.776-2.15c2.228,0.253,5.268-2.741,4.966-5.026,c-0.165-1.244-1.443-2.187-0.543-3.238c0.842-0.983-0.442-2.386-1.19-3.135c-0.143-0.279-0.336-0.493-0.336-0.803,c1.269-0.429-0.155-1.643-0.155-2.202c0-0.605,4.579,0.197,5.121,0.984c0.409,0.594,0.98,0.934,1.629,1.088,c1.478,0.351,1.126,2.046,2.819,2.046c4.777,0,7.105-1.412,6.13-6.372l-0.543-1.606l0,0c-1.617-2.015-4.689-3.401-6.647-5.077,c-2.485-2.128-3.538-5.086-3.516-8.264l0,0l-2.666,0.104c-0.974,0.417-1.159,0.903-1.888,1.632,c-0.256,0.256-2.163,1.573-2.431,0.751c-0.914-0.18-0.921-0.64-2.069-0.389c-0.888,0.195-1.544-0.535-2.327-0.855,c-1.542-0.63-3.649-2.907-4.681-4.223c-2.589-1.298-2.96-5.674-6.57-4.56c-2.829,0.873-6-1.763-8.173-3.419l0,0l-1.474,3.238,c-0.965,2.504-3.056,2.223-5.302,3.031c-1.325,0.477-3.29,2.677-3,4.171c0.204,1.05,0.194,1.843,0.517,2.902,c0.636,2.08,1.637,2.182,1.06,4.611c-0.553,2.328-0.113,5.368,2.561,2.694c2.638-2.639,2.226,1.842,3.931,2.824,c1.016,0.582,1.804,1.421,2.923,1.917c1.446,0.64,3.828,0.678,3.828,2.824c0,0.643-1.174,3.213-1.785,3.419,c0,1.828-0.819,2.343,0.957,3.938c1.403,1.259,0.854,3.32,0.854,5.077L181.653,352.959L181.653,352.959z", "name": "Kohgiluyeh&Boyer-Ahmad"},"36": {"path": "M328.406,243.589c1.906,2.51,4.877,4.674,6.466,7.202l3.776,6.01c1.611,2.564,4.353,5.927,6.621,7.875,c2.773,2.382,3.853,5.413,6.104,8.238c0,2.689,1.991,7.904,4.138,9.637c1.117,0.901,2.01,1.708,2.69,2.953,c0.344,0.63,0.656,1.305,1.035,1.917c0.284,0.46,2.961,3.322,3.026,3.782l0,0c-0.091,0-0.076,0.035-0.129,0.052,c0,1.654-3.957,3.954-5.276,3.316c-2.036,1.021-3.243,2.305-4.785,3.938c-1.384,1.466-3.182,2.129-4.888,3.083,c-3.035,1.697-7.507,2.231-10.164,4.378c-1.909,1.542-1.038,3.974-1.449,6.165c0,3.25,1.695,11.048-3.207,12.072,c-3.162,0.66-9.996,1.105-12.88-0.389c-4.115-0.452-8.991,3.262-12.622,2.565c-4.096-0.786-5.901,1.244-7.889,4.87,c-0.388,0.708-1.611,5.959-0.776,6.165c0.039,0.27,0.901,1.331,1.19,1.373c0.57,1.428,1.958,2.225,1.837,4.119,c0.497,1.361-0.012,4.509,1.034,5.207c1.747,1.167,2.46-0.234,2.328,2.668c-0.186,4.092-2.979,7.959-0.853,11.994,c1.458,2.767,0.491,1.793-2.043,2.28c-1.03,0.198-2.005,0.74-2.897,1.217l0,0c-1.436-2.525-7.139-3.555-9.518-5.129,c-3.245-2.147-1.58-8.77-3.233-12.098c-0.881-1.774-3.902-3.599-4.293-5.336c-4.583-4.571-8.795-14.572-10.449-20.828,c-0.358-2.891-2.099-7.51-3.931-9.818c-1.941-2.444-5.165-3.818-7.759-5.492l-6.053-2.072l0,0c0.415-1.43-1.371-3.374-1.371-5,c0-1.245-0.018-2.551,0.233-3.756c0.294-1.41,0.881-3.158,1.034-4.559c1.074-3.819,1.61-8.519,0.776-12.486,c-0.383-1.825-0.751-3.813,0.465-5.414c1.005-1.322,3.408-0.457,4.733-1.788c2.043-1.8,3.163-3.808,6.337-3.808,c4.46,0,8.005,2.367,12.208,2.176c4.577-0.208,8.73-3.341,12.648-5.311c1.549-0.049,4.662-1.579,6.544-1.891,c6.23-1.034,15.904-2.45,16.797-10.207c0.955-0.939,2.189-0.182,3.223-1.735c0.484-0.726,0.283-1.669,0.776-2.435,c0.749-1.164,1.906-2.208,3.207-2.642c1.616-0.538,2.76-1.722,4.293-2.487L328.406,243.589L328.406,243.589z", "name": "Yazd"},"37": {"path": "M217.268,333.997l2.716-0.803c0.632-1.181-0.157-2.267-0.233-3.445c-0.142-2.215,0.132-4.169,1.319-6.088,c1.409-2.278,2.096-3.955,2.431-6.684c0.258-0.586,1.345-4.213,0.362-4.456c-0.103-0.408-1.818-0.376-2.199-0.466,c-1.501-0.356-3.013-1.063-3.906-2.461c-1.75-2.742,0.776-2.043,2.509-1.503c1.323,0.412,3.749-0.194,4.63-1.373,c0.58-0.776,4.705-3.561,5.638-3.938c2.118-0.855,2.516-2.831,2.328,1.321c-0.171,3.777,3.012,3.336,6.233,4.145,c4.234,1.063,6.898-0.996,10.682-1.528l3.776-1.217l0,0l6.053,2.072c2.594,1.674,5.818,3.048,7.759,5.492,c1.832,2.307,3.574,6.926,3.931,9.818c1.654,6.255,5.866,16.257,10.449,20.828c0.391,1.738,3.412,3.562,4.293,5.336,c1.653,3.328-0.012,9.951,3.233,12.098c2.379,1.574,8.082,2.604,9.518,5.129l0,0l0.259,1.684l2.923,5.777,c-0.111,1.703,2.554,4.288,4.061,4.663c3.502,0.871,7.316-1.335,8.82,3.316c1.181,3.653,1.649,7.247,3.44,10.828l0.983,1.684l0,0,l1.267,3.393c0.318,0.989,0.693,1.643,0.44,2.668c-2.005,0.507-2.702,0.526-0.879,2.487c3.283,3.532,11.574,6.976,9.492,12.719,c-0.602,0.872-2.419,7.516-2.147,8.549c0.504,1.912,3.82,2.072,4.371,4.948c1.006,5.255-4.557,3.116-6.932,3.342,c-1.485,0.141-1.339,2.004-2.923,2.409c-2.152,0.552-2.085,1.495-3.233,3.419c0.261,1.623-1.366,4.54-2.819,5.362,c-3.058,1.729-5.88-1.548-8.613-2.072c-1.571-0.301-3.311,0.254-4.63,1.166c-1.79,1.238-2.089,0.585-3.879-0.311l-9.078,0.855,c-1.092,0.103-5.233,1.085-4.914,2.746c0.144,0.752,0.723,1.308,0.905,2.021c0.119,0.466-0.771,1.38-1.009,1.813,c-0.44,0.802,1.753,2.079,0.698,3.264c-0.564,0.633-1.981-0.064-2.742,0.7c-2.396,2.403-6.193-0.22-9.518-0.259,c-1.299,0.377-3.86,0.387-5.018-0.155c-1.366-0.641-1.28-2.272-3.078-2.72c-1.839-0.458-3.899,0.804-5.794,0.389,c-2.279-0.5-1.943-1.664-2.897-3.342l-1.216-0.7l0,0l-1.655-1.606c-1.132-0.99-2.131-2.068-3.466-2.772,c-1.201-0.633-2.766-1.166-3.724-2.124c-1.833-1.833-4.788-5.5-5.043-8.16c-0.743-2.745-1.283-4.807-3.207-6.917,c-1.945-2.134-2.664-2.833-5.147-4.197c-0.966-0.531-0.328-3.177-0.724-4.145c-0.389-0.95-2.671-5.277-2.587-5.855,c-2.185-4.935-2.284-11.297-5.949-15.673c-0.973-1.162-2.73-2.905-3.13-4.326c-0.328-2.667-3.164-7.534-4.423-10.051,c-1.581-3.162-4.826-2.722-7.501-4.507c-0.379-0.253-2.54-3.916-2.69-4.404c-0.291-0.945,0.303-1.812-0.052-2.953,c-0.433-3.429-3.053-2.098-5.147-2.901c-0.646-0.248-1.361-0.855-2.043-0.933c-1.13-0.129-2.121,0.336-3.207,0.544,c-0.957,0.183-3.126-0.637-4.086-0.933c-1.96-0.604-0.975-3.524-2.483-4.352c-1.479-0.813-4.54-3.955-2.586-5.751l0,0l3.114-0.605,c2.433,0.3,3.768,0.755,6.197,0.112c1.57-0.415,2.402-2.306,3.776-2.15c2.228,0.253,5.268-2.741,4.966-5.026,c-0.165-1.244-1.443-2.187-0.543-3.238c0.842-0.983-0.442-2.386-1.19-3.135c-0.143-0.279-0.336-0.493-0.336-0.803,c1.269-0.429-0.155-1.643-0.155-2.202c0-0.605,4.579,0.197,5.121,0.984c0.409,0.594,0.98,0.934,1.629,1.088,c1.478,0.351,1.126,2.046,2.819,2.046c4.777,0,7.105-1.412,6.13-6.372L217.268,333.997L217.268,333.997z", "name": "Fars"},"38": {"path": "M253.555,305.502c0.415-1.43-1.371-3.374-1.371-5c0-1.245-0.018-2.551,0.233-3.756c0.294-1.41,0.881-3.158,1.034-4.559,c1.074-3.819,1.61-8.519,0.776-12.486c-0.383-1.825-0.751-3.813,0.465-5.414c1.005-1.322,3.408-0.457,4.733-1.788,c2.043-1.8,3.163-3.808,6.337-3.808c4.46,0,8.005,2.367,12.208,2.176c4.577-0.208,8.73-3.341,12.648-5.311,c1.549-0.049,4.662-1.579,6.544-1.891c6.23-1.034,15.904-2.45,16.797-10.207c0.955-0.939,2.189-0.182,3.223-1.735,c0.484-0.726,0.283-1.669,0.776-2.435c0.749-1.164,1.906-2.208,3.207-2.642c1.616-0.538,2.76-1.722,4.293-2.487l2.948-0.57l0,0,c0-8.078-1.04-15.524-1.81-23.522l0,0l-27.623-0.466c-9.167,0-18.756-1.201-27.778-2.642c-6.502-1.039-15.626,0.091-19.064-6.419,c-1.116-0.173-2.22-0.357-3.309-0.55c-3.098-1.123-6.007-3.238-9.337-3.238c-3.639,0-8.011,1.021-11.432,0.13,c-1.074-0.28-4.751-1.938-5.38-2.824c-0.135-0.016-0.291-0.087-0.414-0.13l0,0l-1.526,1.036c-5.191,3.792-21.286-2.925-21.286,6.451,c0,1.062-0.474,5.235-1.293,5.88l0,0c0.37,0.679,0.828,1.089,1.371,1.632c1.367-0.275,0.454,2.673,0.336,3.057,c-0.592,1.937-2.845,2.238-3.285,4.093c-0.216,0.911,0.459,1.832-0.026,2.746c-0.648,1.223-1.773,0.25-2.768,0.285,c-1.426,0.049-3.396,2.248-4.63,3.005c-0.981,0.613-3.196,1.621-4.397,1.425c-1.148-0.188-2.361-0.36-3.337,0.441,c-2.222,1.823-4.838,0.92-7.345,2.539c-1.581,1.021-2.781,2.477-4.242,3.627l0,0c-0.12,0.478-0.537,0.916-0.854,1.295,c-0.268,0.322-0.955,0.522-0.569,1.062c0.482,0.674,1.838,0.306,1.759,1.347c-0.061,0.812-0.621,1.495-0.879,2.254,c-0.529,0.526-1.804,2.985-1.992,3.652c-0.325,1.157,0.646,3.212-1.293,3.212c-1.045,0-2.163,0.976-2.974,0.751,c-2.375-0.659-0.681,0.523-2.173,1.011c-0.608,0.198-1.676,0.141-1.914,0.855c-0.473,1.42,1.912,3.217,0.88,4.715,c-1.437,2.085-4.202,0.326-5.638,3.756l0,0l1.865,4.559c2.63,0.308,4.344-1.291,6.751,0.44c1.244,0.894,0.867,1.603,0.077,2.668,c-0.881,1.189-1.17,1.552-0.879,3.031l0,0c2.466,0,4.037-3.534,6.362-3.394c0.784,0.047,1.32,0.876,2.224,0.622,c1.467-0.413,1.877-1.967,3.44-0.725l2.509,1.995c0.978,0.777,1.322,0.148,2.354-0.052c1.179-0.229,1.692,1.501,2.819,0.751,c1.043-0.694,1.82-1.549,2.974-2.124c2.564-1.743,4.101-0.014,6.44-0.829c0.914-0.318,1.075-1.361,1.836-1.658,c1.99-0.775,2.173,1.526,2.173,2.824c0,1.969,1.85,0.588,1.965,1.606c0.107,0.943-0.243,0.966,0.388,1.839,c1.918,2.655-2.547,3.075-0.078,5.544c0.43,0.729,2.437,1.329,3.207,2.021l5.276,4.741c1.016,0.913,2.238,2.067,1.862,3.523,c-0.215,0.831-1.585,1.542-1.474,2.513c0.178,1.562,1.91,1.013-0.362,2.461c-2.13,1.357,0.783,2.475,1.009,3.601,c-0.089,1.361-0.114,0.655-1.293,1.14c-0.959,0.394-0.972,3.462-1.112,4.378c-0.7,4.573,6.015,10.857,2.586,15.129l0,0,c-0.022,3.177,1.03,6.135,3.516,8.264c1.958,1.677,5.03,3.063,6.647,5.077l0,0l2.716-0.803c0.632-1.181-0.157-2.267-0.233-3.445,c-0.142-2.215,0.132-4.169,1.319-6.088c1.409-2.278,2.096-3.955,2.431-6.684c0.258-0.586,1.345-4.213,0.362-4.456,c-0.103-0.408-1.818-0.376-2.199-0.466c-1.501-0.356-3.013-1.063-3.906-2.461c-1.75-2.742,0.776-2.043,2.509-1.503,c1.323,0.412,3.749-0.194,4.63-1.373c0.58-0.776,4.705-3.561,5.638-3.938c2.118-0.855,2.516-2.831,2.328,1.321,c-0.171,3.777,3.012,3.336,6.233,4.145c4.234,1.063,6.898-0.996,10.682-1.528L253.555,305.502L253.555,305.502z", "name": "Isfahan"},"39": {"path": "M357.141,131.213l1.5,0.518c1.201,0,2.353-0.958,3.543-0.958c1.058,0,1.796-0.148,2.716,0.44c0.566,0.363,0.926,0.958,1.423,1.295,c0.319,3.567-1.947,5.103-2.923,8.29c-1.009,3.293,1.769,6.551,0.905,9.637c1.001,2.417,1.186,4.622,2.845,6.684,c1.243,1.545,3.459,2.404,4.966,3.808c3.294,3.07,6.463,5.144,1.474,9.067c-4.038,4.055-1.004,8.803-7.552,10.492,c-4.116,1.061-6.406,2.549-8.692,5.145c-3.741,2.67-6.647,6.623-9.853,9.828l-0.258,1.606l0,0c5.691,0,10.888,2.374,17.277,1.347,c5.401-0.868,4.617-7.748,9.725-9.067c6.543-1.689,14.046-0.157,14.949,7.72c0.271,2.362-0.23,7.063,2.379,8.134,c2.921,1.2,2.47,4.386,1.19,6.632c-1.142,1.048-0.904,4.496,0.362,5.44c3.082,2.298,6.276-0.777,9.466-0.777,c1.2,0,2.271,0.77,2.949,1.71c0.444,0.615,2.561,2.072,2.535,2.176c2.966,1.111,9.807-0.762,13.423-0.311,c1.708-0.158,3.346,0.518,5.483,0.052c1.669-0.364,3.564-0.829,5.276-0.829c2.427,0,1.829,2.266,4.63,1.684l3.362-0.699,c1.19-0.248,1.962-1.252,3.181-1.373c2.703,0,3.841,1.219,6.311,1.865c4.416,1.154,8.082,3.714,12.337,4.974,c3.698,1.095,7.854-3.462,12.023-3.135l0,0l-0.307-1.709l1.138-3.342l3.31-3.083l0.181-1.114l6.698,0.207,c0.138-0.035,0.072-1.102-0.181-1.166c-0.105-0.535-1.526-1.057-1.526-1.528c0-1.014-0.75-1.308-0.75-2.254,c0-0.817,0.294-0.892-0.414-1.477c-0.277-0.229-2.247-1.188-1.992-1.477c0.142-0.162,2.381-0.855,2.664-0.855,c2.659,0,1.529-1.676,2.845-2.668c2.708,1.646,1.34-3.457,2.948-3.989c0-0.052-0.014-0.039,0.026-0.052,c0-0.058,0.026-0.071,0.026-0.13c0.1-0.033,0.045-0.092,0.052-0.285l0.978-2.085c-0.038-0.15-0.081-0.314-0.124-0.48,c-0.074-0.28,0.502-1.561,0.285-1.658c-0.024-0.01,0.023-0.066,0-0.078c-0.154-0.076,0.207-2.135,0.207-2.642,c0-1.063,1.225-1.48,0.931-2.409c-0.193-0.611-0.548-1.133,0.052-1.736c0.914-0.918,0.924-0.748,0.362-2.021,c-0.656-1.484-1.603-1.195-0.672-2.85c0.414-0.738-0.947-1.38-0.75-2.15c0.203-0.796,1.501-0.649,2.121-0.699,c1.509-0.124,0.501-1.818,0.776-2.539c0.737-1.932,1.302-3.421,2.354-5.129c0.616-1,0.605-2.495,0.179-3.792l0,0,c-0.223-0.68-0.56-1.305-0.98-1.777c-1.113-1.249,0.704-2.446,0.388-3.575c-0.102-0.366-0.052-1.49,0.207-1.969,c0.401-0.742-0.453-3.06-0.672-3.704c-0.507-1.488-0.842-0.742-2.328-0.855c-1.296-0.098-0.526-1.579,0.026-1.839,c0.304-0.144,0.75-2.21,0.828-2.228c0.564-0.128,0.683-1.605,0.983-2.15c1.195-2.17-0.536-3.527-0.983-5.751,c-0.136-0.679-0.75-0.593-0.75-1.347c0-0.489,0.232-0.964-0.052-1.373c-0.892-1.287,0.325-1.477,0.207-2.513,c-0.051-0.451-0.332-1.15,0.336-1.503c0.125-0.066,0.093-0.359-0.026-0.414c-0.966-0.448,0.29-2.215,0.517-2.772,c0.398-0.977-0.546-2.269-1.118-3.328l-8.917,0.349l-14.122-0.104l-3.466-5.647c-0.46-0.749-0.245-1.038-1.19-1.58,c-1.321-0.757-1.156-1.516-2.069-2.539c-0.892-1.601-0.949-3.564-2.587-4.637c-2.051-1.344-3.448,0.594-5.25-2.124,c-1.44-2.172-2.246-0.217-3.414-0.959c-0.615-0.391-0.902-0.941-1.759-0.751c-1.213,0.269-0.629,0.96-2.173,0.155,c-1.428-0.745-1.132-0.371-1.604-1.917c-0.378-1.24-1.474,0.133-1.474-1.839c0-0.409-1.664-2.493-2.095-2.59,c-1.368-0.824-0.68-1.83-1.138-3.109c-0.48-1.338,1.378-1.257,0.026-2.357c-0.312-0.254-0.44-1.673-0.595-2.176,c-0.217-0.704-2.269,0.259-2.897,0.259c-0.379,0-3.637-2.068-3.957-2.409c-1.099-1.172-3.878-2.807-5.505-2.943,c-1.392,0-2.308-1.51-3.531-1.51c-0.238,0.714,0.149,2.755-1.429,1.572l-0.306,0.163c-0.592,2.961-5.027-4.009-6.715-0.633,c-1.251,2.503-6.112,0.227-8.245-0.306c-0.217-1.084-0.338-4.082-1.796-4.082c-0.621,0-1.167-0.042-1.673-0.129l0,0l0.44,4.19,c-0.088,0.948,1.251,5.815,1.966,6.424c-0.014,0.049,1.422,2.678,1.422,3.627c0,2.799-0.193,3.253,2.147,5,c2.965,2.213,0.299,2.318,0,4.689c0.622,1.68-1.981,0.687-2.483,2.772c-0.218,0.906-0.177,1.753,0.491,2.513,c0.11,0.126,1.745,1.495,0.983,1.684c-0.115,0.467-3.774,2.331-4.397,2.643c-3.946,1.97-2.929,3.656-4.707,6.942,c-1.914,3.538-4.823,1.297-7.371,0.026l-10.164-5.259l-13.941-6.217l-11.898,7.823L357.141,131.213L357.141,131.213z", "name": "Razavi Khorasan"},"40": {"path": "M337.484,105.127c-2.603,0-4.637,6.755-5.276,8.73c-0.574,1.774-1.697,2.534-2.095,4.611c-0.323,1.688-0.022,3.997-0.181,5.777,c-0.425,4.993-11.137,1-14.82,1.477c-6.764,0.875-7.284,7.656-12.906,9.999c-1.299,0.345-2.688,1.319-4.061,0.933,c-1.748-0.492-3.578-1.065-5.457-0.907l-1.216,0.44l0,0l-3.828-2.564l-4.371-2.331l-2.173-1.295l0.724-2.228l2.172-1.503,l0.179-1.697l0,0c1.196-0.75,2.019-2.026,2.019-3.666c0-0.638,0.176-1.745-0.414-2.202c-1.087-0.843-0.724-0.593-0.724-1.969,c0-0.435-0.759-2.64-1.086-2.901c0-2.029-0.968-4.843-1.345-6.813c-0.135-0.703-0.238-1.46-0.319-2.246l0,0l9.653,0.876l1.143-1.082,l2.204,0.061l1.347-0.408l2.2-2.169c0.412-0.187,0.576,0.015,0.918-0.194c0.119-0.073,0.217-0.293,0.349-0.389,c0.192-0.137,1.65-0.816,1.733-0.816c0.619,0,1.253,0.631,1.914,0.79c0.856,0.206,1.546-0.597,1.94-1.217,c0.242-0.382,0.398-1.003,0.945-1.003c0.232,0,0.698-0.087,0.905-0.544c0.247-0.544,1.086-3.311,0.724-3.782,c-1.056-1.375,0.694-3.65,1.242-5.077c0.357-0.932,1.636-0.407,2.328-1.528c0.272-0.441,0.725-0.907,1.267-0.907,c0.954,0,0.761-0.768,1.345-1.192c0.556-0.403,1.164-1.653,1.68-2.21c0.38-0.41,1.046-1.019,1.513-1.296,c0.428-0.254,0.825,0.113,1.255-0.285c0.319-0.296,0.44-0.039,0.789-0.039c0.474,0,0.736-0.712,1.125-0.972,c0.516-0.344,1.31-0.667,1.915-0.613c0.614-1.376,2.826-1.114,3.609-2.314c1.267-1.939,1.284-0.075,2.123-0.755,c1.265-1.026,3.969-0.462,5.633-0.735c1.082-0.177,1.342-0.911,2.408-0.612c0.501,0.141,0.96-0.415,1.449-0.143,c0.393,0.218,0.758,0.524,1.143,0.755c2.828,1.515,5.116,0.388,8.021,0.388c0.638,0,1.55,0.68,2.053,0.853l0,0l-0.316,3.236,c-0.217,0.929-0.771,1.902-0.931,2.85c-0.159,0.946,0.091,1.844-0.233,2.798c-0.513,1.51-1.895,3.441-0.776,5.104,c0.822,1.22,2.872,1.077,3.724,2.228c1.106,1.491,0.172,3.851-1.63,4.196c-1.572,0.301-5.485-1.445-5.949,0.855l-1.707,0.674,c-0.873,0.395-1.448,1.025-1.448,2.021c0,0.461,0.014,0.71-0.259,1.088c-0.144,0.199-0.619,0.457-0.672,0.674,C338.53,104.117,337.759,104.714,337.484,105.127L337.484,105.127z", "name": "Golestan"},"41": {"path": "M337.484,105.127c0.225,2.342,2.438,1.913,3.078,3.989c0.353,1.148,0.71,3.203,2.354,2.901c0.857-0.157,2.954-0.161,3.466,0.7,c0.893,1.503-2.429,0.831-2.767,2.59c-0.218,1.138,2.136,1.597,1.371,3.627c-1.496,3.874,0.802,5.308,3.311,7.823,c1.006,1.009,2.256,2.464,3.518,3.057c1.325,0.622,3.015,0.001,4.423,0.881l0.905,0.518l0,0l1.5,0.518,c1.201,0,2.353-0.958,3.543-0.958c1.058,0,1.796-0.148,2.716,0.44c0.566,0.363,0.926,0.958,1.423,1.295,c0.319,3.567-1.947,5.103-2.923,8.29c-1.009,3.293,1.769,6.551,0.905,9.637c1.001,2.417,1.186,4.622,2.845,6.684,c1.243,1.545,3.459,2.404,4.966,3.808c3.294,3.07,6.463,5.144,1.474,9.067c-4.038,4.055-1.004,8.803-7.552,10.492,c-4.116,1.061-6.406,2.549-8.692,5.145c-3.741,2.67-6.647,6.623-9.853,9.828l-0.258,1.606l0,0l-3.983,5.596,c-1.651,3.307-4.342,7.019-5.225,10.621c-0.708,2.888-1.148,6.217-4.397,6.217c-1.517,0-5.844-0.069-7.035,0.57l0,0l-27.623-0.466,c-9.167,0-18.756-1.201-27.778-2.642c-6.502-1.039-15.626,0.091-19.064-6.419c-1.116-0.173-2.22-0.357-3.309-0.55,c-3.098-1.123-6.007-3.238-9.337-3.238c-3.639,0-8.011,1.021-11.432,0.13c-1.074-0.28-4.751-1.938-5.38-2.824,c-0.135-0.016-0.291-0.087-0.414-0.13l0,0l0.181-1.269c0.563-0.701,1.701-0.776,2.017-1.606c0.351-0.921,0.28-1.787,0.336-2.772,c0.119-2.102,1.907-4.245-0.181-5.855l0,0c0.304-0.535,0.796-1.103,1.009-1.658c0.158-0.412-0.104-1.25-0.104-1.735,c0-1.084,1.528-2.679,2.224-3.471c2.782-1.395-2.078-5.21-3.052-6.347c-2.83-3.305-0.104-4.809-0.104-8.082,c0-1.616-0.641-4.264,1.837-2.254c0.286,0.232,1.642,0.065,1.655,0.104c0.065,0,2.116,1.246,2.793,1.425,c1.039,0.274,2.131,1.494,2.897,2.202c1.981,1.831,3.511,2.278,6.078,1.451c2.163-0.539,4.442,1.847,6.518,2.28,c2.245,0.468,4.938-0.205,7.113-0.751c1.999-0.502,8.456-6.824,8.613-8.886c0.187-2.468-1.707-4.971-1.448-7.668l0,0l1.81-0.311,c1.38,0,2.757,0.573,3.802-0.725c1.208-1.501,1.914-1.191,3.595-0.958c3.958,0.548,5.743-0.296,7.734-3.73,c1.192-2.057,1.516-2.765,3.362-4.171c2.396-1.093,1.49-4.078,2.121-6.269c0.468-1.624,2.374-4.586,4.112-5.025,c0.018-0.072,0.307-0.231,0.31-0.233l3.983-1.425l0,0l1.216-0.44c1.879-0.158,3.709,0.415,5.457,0.907,c1.373,0.387,2.761-0.588,4.061-0.933c5.622-2.343,6.142-9.124,12.906-9.999c3.683-0.477,14.395,3.516,14.82-1.477,c0.159-1.779-0.142-4.089,0.181-5.777c0.398-2.077,1.521-2.837,2.095-4.611C332.847,111.882,334.881,105.127,337.484,105.127,L337.484,105.127z", "name": "Semnan"},"42": {"path": "M337.484,105.127c0.225,2.342,2.438,1.913,3.078,3.989c0.353,1.148,0.71,3.203,2.354,2.901c0.857-0.157,2.954-0.161,3.466,0.7,c0.893,1.503-2.429,0.831-2.767,2.59c-0.218,1.138,2.136,1.597,1.371,3.627c-1.496,3.874,0.802,5.308,3.311,7.823,c1.006,1.009,2.256,2.464,3.518,3.057c1.325,0.622,3.015,0.001,4.423,0.881l0.905,0.518l0,0l-0.44-5.88l11.898-7.823l13.941,6.217,l10.164,5.259c2.548,1.271,5.457,3.512,7.371-0.026c1.778-3.286,0.761-4.973,4.707-6.942c0.623-0.311,4.282-2.176,4.397-2.643,c0.762-0.188-0.872-1.558-0.983-1.684c-0.668-0.759-0.71-1.606-0.491-2.513c0.502-2.085,3.105-1.092,2.483-2.772,c0.299-2.371,2.965-2.476,0-4.689c-2.339-1.746-2.147-2.2-2.147-5c0-0.949-1.436-3.578-1.422-3.627,c-0.714-0.609-2.054-5.476-1.966-6.424l-0.44-4.19l0,0c-1.2-0.205-2.184-0.658-3.449-1.381c-1.145-0.52-2.025-1.039-3.021-1.674,c-0.942-0.6-1.756,1.25-2.306-0.163c-0.25-0.642-0.753-1.097-1.408-0.918c-0.737,0.2-0.807-0.832-2.041-0.653,c-0.925,0.134-3-0.819-3.408-0.674c-0.373,0.133-1.394,0.838-1.694,0.755c-0.549-0.152-3.957-1.688-4.102-2.123h-0.041,c-0.314-0.941-0.225-1.184-0.225-2.265c0.407-1.356-0.181-3.258-1.429-3.98c-0.576-0.334-0.687-0.752-0.653-1.408,c0.06-1.151-2.582-5.028-3.817-2.939c-1.07,1.811-1.805,2.905-3.857,2.796c-1.212-0.064-0.66-1.075-1.572-1.184,c-1.355-0.162-2.4,0.134-3.755-0.367c-0.762-0.282-2.692-2.33-3.061-2.102c-1.151,0.71-1.043,0.768-2.429,0.898,c-0.573,0.115-0.897,0.939-1.51,0.939c-0.506-1.519-2.888-1.266-4.388-0.959c-1.57,0.321-2.677,1.887-3.674,3.082,c-0.232,0.278,0.322,2.216,0.265,2.898c-0.111,1.337-2.017,0.666-3.184,1.184c-0.064,0.028-0.158,0.015-0.274-0.025l0,0,l-0.316,3.236c-0.217,0.929-0.771,1.902-0.931,2.85c-0.159,0.946,0.091,1.844-0.233,2.798c-0.513,1.51-1.895,3.441-0.776,5.104,c0.822,1.22,2.872,1.077,3.724,2.228c1.106,1.491,0.172,3.851-1.63,4.196c-1.572,0.301-5.485-1.445-5.949,0.855l-1.707,0.674,c-0.873,0.395-1.448,1.025-1.448,2.021c0,0.461,0.014,0.71-0.259,1.088c-0.144,0.199-0.619,0.457-0.672,0.674,C338.53,104.117,337.759,104.714,337.484,105.127L337.484,105.127z", "name": "North Khorasan"},"43": {"path": "M444.147,339.903l-3.027,12.227l-1.19,9.326c-0.282,1.952-0.828,3.059-1.396,4.922c-1.055,3.458-1.247,4.156,2.121,6.062,c1.804,1.021,0.922,5.156,1.293,7.046c-0.426,2.423,0.592,4.955-0.155,7.616c-0.587,2.089-3.388,4.112-3.388,6.191,c0,2.785,0.33,5.482,1.914,7.745c-0.041,0,0.297,1.091,0.233,1.425c-0.676,3.491-8.794,6.688-11.897,7.461,c-0.644,0.16-3.588,0.974-2.173,2.15c1.863,1.547,4.026,1.193,4.733,3.938c0.723,2.803-1.26,3.829-3.13,5.414l-1.061,1.192,c0,6.92,1.652,13.112-1.19,19.739c-1.174,2.668-2.626,9.347-1.5,12.15c0.946,2.356,0.414,3.369,0.414,5.751,c0,2.643,1.734,3.138,3.336,4.74c1.439,1.25,1.566,5.459-0.207,6.399c-1.267,0.672,1.609,2.62,1.552,3.627,c-0.04,0.704-1.984,0.734-2.276,1.865c-0.822,3.189,2.34,3.672,2.043,5.518c-0.226,1.409-3.004,2.734-2.561,4.792l-0.052,2.357,l-0.892,1.552l0,0c-0.363,0.678-0.906,1.191-0.815,2.085c0.138,1.35,0.538,0.798,1.448,1.23c0.455,0.217,0.485,0.901,0.737,1.296,c1.051,1.641,3.309,2.18,4.41,3.938c0.435,0.491,0.905,0.898,1.034,1.556c0.245,1.255-0.29,1.526,0.957,2.202,c0.517,0.281,1.246,0.447,1.19,1.166c-0.094,1.21,0.734,1.207,1.112,2.254c0.276,0.762,0.951,2.677,0.951,3.504l0,0,c0.978-0.299,1.97-0.628,2.954-0.861c5.065-1.203,5.112,2.658,9.234,2.15c0.753-0.219,4.674-0.268,5.276,0.104,c0.454,0.281,0.944,1.038,1.423,1.425c0.142,0.115,1.075-0.674,1.448-0.777c3.021-0.838,4.624,0.379,6.932,1.269,c0.683,0.263,0.823-1.251,1.526-1.684c2.061-1.269,1.901,1.338,3.362,1.658c0.624,0.137,2.769,0.872,3.13,0.622,c0,0-1.371-1.378-1.371-2.383c0-1.802,3.09-2.096,4.319-1.839c1.371,0.286,2.676,2.711,1.474,3.108,c1.237,1.244-0.647,2.435,2.949,2.435c2.861-0.279,8.055,2.128,11.147,2.564c1.518,0.215,1.46,1.122,2.431,1.891,c2.043,1.617,9.13,3.197,9.13-0.052c0-2.577,2.02-1.763,3.605-1.664l0,0l1.024-3.827l0.517-10.906,c0.404-0.575,0.647-0.432,0.647-1.14c-0.063-0.021,1.397-1.15,1.397-1.839c0.043-0.014,0.057-0.052,0.129-0.052,c0.069-0.204,1.114,0.34,1.164,0.492c0.941,0,1.422-0.939,1.862-1.529l-0.621-2.357c-0.257-0.975,0.916-0.862,1.19-1.477,c0.419-0.942-1.469-1.077-1.552-2.254c-0.056-0.803,0.535-1.047,0.776-1.684c0.191-0.505-0.269-1.093-0.078-1.736,c0.898-1.631,0.773-4.105,1.474-5.829c0.232-0.571,3.217-0.458,3.88-2.461c1.215,0,5.431,3.135,5.431,1.14,c0-0.594,0.198-1.401,1.009-1.088c0.627,0.242,0.285-4.274,0.931-4.274c0.544-1.644,1.234-2.836,3.388-2.616,c0.877,0.09,0.647-1.142,1.655-1.399c0.735-0.188,2.196,0.186,3.104,0.103c1.647-0.039,1.818-1.088,3.207-1.088,c0.19,0.584,2.058-0.806,2.276-1.217c0.418-0.79,4.329,0.53,5.458,0.104c1.103-0.418,8.675,0.749,7.138-1.813,c-0.245-0.408,0.543-2.76,0.077-3.912c-0.407-1.007,0.686-0.814,1.345-0.881c1.012-0.103-0.026-0.991-0.026-1.58,c0.072-0.024,0.251-0.205,0.336-0.233v-0.078l0.155-2.15l-0.026-3.756c0.52-1.282,1.3-0.554,2.069-1.166,c0.376-0.299-1.193-3.503-1.759-3.549c-1.674-0.137-0.931,0.041-2.095-0.984c-0.423-0.372-1.296,0.635-1.81,0.803,c-0.724,0.236-0.975-0.244-1.629-0.207c-0.936,0.053-1.685,0.907-2.871,0.907c-0.44,0-0.825,0.233-1.241,0.233,c-0.53,0-0.588-0.516-0.905-0.596c-0.023-0.092-0.118-0.057-0.181-0.103c-0.701,0.42-0.807,0.711-1.655,0.544,c-0.071-0.289-2.205-1.051-1.474-1.658c2.809-2.333-0.882-1.798,0.569-3.653c1.26-1.61,1.293-2.915,1.293-4.87l-0.414-7.953,l-1.94-8.6l0.88-8.341l-4.5,0.777c-2.099,0.173-2.205-0.202-3.284-1.813c-0.574-0.857-0.693-2.445-1.811-2.616,c-1.164-0.178-1.307-0.757-2.328-1.192c-0.831-0.354-2.33-0.655-3.233-0.829c-1.409-0.404-2.955-1.347-4.345-1.347,c-1.458,0-2.213-0.961-3.492-1.217c-0.806-0.161-2.04-0.081-2.664-0.673c-0.743-0.706-1.159-2.216-2.069-2.668,c-2.074-1.03-1.884-1.599-3.078-3.549c-0.299-0.489-1.801-0.856-2.431-1.736l-2.845-5.336c-0.141-0.719-0.448-1.798-1.267-1.891,c-1.195-0.136-0.432-0.984-0.103-1.399c0.4-0.506-0.604-0.737-0.672-1.036c-0.173-0.762,0.043-1.321-1.086-1.321,c-1.279,0-0.932-1.465-0.724-2.28c0.204-0.797-1.499-1.73-1.785-2.72c-0.213-0.738,0.517-0.968,0.233-1.71,c-0.222-0.578-0.212-1.488-0.388-2.021c-0.049,0-0.064,0.016-0.078-0.026c-0.26,0-0.457,0.103-0.724,0.103,c-0.123-0.372-0.677-0.425-0.698-1.088l-3.699-3.756l-8.509-10.854l0,0l25.89-31.371c-0.616-1.008,1.498-1.558,0.983-2.901,c-0.198-0.516-0.29-1.307-0.432-1.992l1.413-1.375l-0.181-3.963l-0.828-0.933l-0.207-2.124l-0.672-0.622l-0.052-3.471l-1.94-2.435,l-5.638-0.751l-11.505-1.794l0,0c0,1.14,0.876,2.604,0.876,3.763c0,1.028-0.49,1.696-1.164,2.409,c-0.523,0.555-0.605,1.567-1.112,1.969c-1.498,4.51-2.897,7.789-2.897,12.616c0,1.108,0.314,2.971,0.026,3.964,c0,1.973,0.361,3.519,0.646,5.388c0.136,0.889,0.58,3.786,1.061,4.43c-0.384,0.517-0.097,0.72-0.879,1.088,c-0.374,0.176-1.17,0.207-1.604,0.207c-1.095,0-2.285,0.088-3.337-0.181c-1.009-0.259-1.1-1.024-1.836-1.554,c-1.392-1.571-2.241-3.521-3.13-5.388c-0.905-1.899-2.542-1.796-3.828-3.083c-1.089-1.089-1.152-1.511-2.742-1.865,c-1.205-0.269-3.42-0.665-3.802-2.176c-1.545-0.39-2.357,1.444-3.957,1.295l-12.104,3.394l-2.897,0.44L444.147,339.903,L444.147,339.903z", "name": "Sistan&Baluchestan"},"44": {"path": "M298.791,366.275l0.259,1.684l2.923,5.777c-0.111,1.703,2.554,4.288,4.061,4.663c3.502,0.871,7.316-1.335,8.82,3.316,c1.181,3.653,1.649,7.247,3.44,10.828l0.983,1.684l0,0c1.398-0.75,5.471-0.186,6.751,0.699c2.265,1.568,4.853,6.44,7.656,5.984,c3.818-0.622,6.815-6.372,10.242-6.372c1.981-0.575,2.706,2.196,2.638,3.627c-0.134,2.807,0.531,5.67-0.026,8.342,c-0.628,3.011-2.267,4.882-0.285,7.668c0.323,2.5,8.182,7.464,10.604,7.823c3.551,0.527,6.755-1.85,8.897-4.507,c3.721-4.615,6.998-2.555,7.242,2.824c0.054,1.189,0.255,6.373,1.914,6.373c2.812,0,2.03-0.049,3.362,2.616l1.604,2.202,c0.531,0.729,2.942,2.696,2.095,3.653c-0.294,0.332-2.889,1.835-1.241,2.409c2.485,0.866,2.463,1.836,2.69,4.43l0.595,6.813,c-0.436,4.476-0.598,8.603,4.061,9.507c2.401,0.466,5.925,2.582,7.216,4.637c1.63,2.592,4.522-6.142,8.251-1.58,c1.164,1.423,3.195,2.45,4.164,3.912c0.238,0.359,0.775,2.229,0.258,2.487c-0.434,0.216-1.156-0.971-1.94-0.777,c-0.574,1.762,0.885,3.455-0.647,5.207c-0.686,0.715-0.166,2.013-0.776,3.005c-0.453,0.737-0.605,4.277-0.336,5.026,c0.272,0.758-0.396,2.525-0.853,3.212c-1.156,1.737,1.033,0.425,1.604,0.285c2.062-0.508,3.648,1.834,5.38,0.855,c0.345-0.195,1.341-1.639,1.836-0.829c0.579,0.946,1.098,0.917,2.043,1.269c0.376,0,2.433-0.58,2.095,0.44,c-0.302,0.911-0.533,0.728,0.026,1.502c0.436,0.603,0.291,3.427,1.138,3.368c0.509-0.036,0.857-0.596,1.5-0.596,c0.736,0,1.955,0.986,2.328-0.233c0.426-1.392,1.057-1.31,2.147-0.829c1.018,0.45,1.442,1.692,2.186,2.432l0,0l0.892-1.552,l0.052-2.357c-0.444-2.059,2.334-3.383,2.561-4.792c0.296-1.845-2.866-2.328-2.043-5.518c0.292-1.131,2.236-1.161,2.276-1.865,c0.057-1.007-2.819-2.955-1.552-3.627c1.773-0.94,1.646-5.149,0.207-6.399c-1.602-1.602-3.336-2.097-3.336-4.74,c0-2.382,0.533-3.395-0.414-5.751c-1.126-2.802,0.326-9.481,1.5-12.15c2.842-6.627,1.19-12.819,1.19-19.739l1.061-1.192,c1.869-1.585,3.852-2.612,3.13-5.414c-0.708-2.745-2.871-2.39-4.733-3.938c-1.415-1.176,1.529-1.99,2.173-2.15,c3.104-0.772,11.221-3.97,11.897-7.461c0.065-0.334-0.274-1.425-0.233-1.425c-1.584-2.264-1.914-4.961-1.914-7.745,c0-2.079,2.802-4.102,3.388-6.191c0.747-2.661-0.271-5.193,0.155-7.616c-0.371-1.891,0.511-6.025-1.293-7.046,c-3.368-1.906-3.176-2.604-2.121-6.062c0.569-1.863,1.114-2.97,1.396-4.922l1.19-9.326l3.027-12.227l0,0l-5.458-8.652l-5.845-9.844,l-19.76-9.326l-12.932-6.424l-6.104-2.176l0,0l-7.785-3.471c-3.533,0-7.423-3.889-10.708-5.052,c-3.807-1.348-6.55-3.338-10.785-3.601l-2.509-0.156l0,0c-0.091,0-0.076,0.035-0.129,0.052c0,1.654-3.957,3.954-5.276,3.316,c-2.036,1.021-3.243,2.305-4.785,3.938c-1.384,1.466-3.182,2.129-4.888,3.083c-3.035,1.697-7.507,2.231-10.164,4.378,c-1.909,1.542-1.038,3.974-1.449,6.165c0,3.25,1.695,11.048-3.207,12.072c-3.162,0.66-9.996,1.105-12.88-0.389,c-4.115-0.452-8.991,3.262-12.622,2.565c-4.096-0.786-5.901,1.244-7.889,4.87c-0.388,0.708-1.611,5.959-0.776,6.165,c0.039,0.27,0.901,1.331,1.19,1.373c0.57,1.428,1.958,2.225,1.837,4.119c0.497,1.361-0.012,4.509,1.034,5.207,c1.747,1.167,2.46-0.234,2.328,2.668c-0.186,4.092-2.979,7.959-0.853,11.994c1.458,2.767,0.491,1.793-2.043,2.28,C300.658,365.255,299.682,365.797,298.791,366.275L298.791,366.275z", "name": "Kerman"},"45": {"path": "M356.623,456.756c-0.599-0.279-1.332,0.137-1.332,0.842c0,0.331,0.126,0.688,0.414,0.881c0.301,0.201,0.581,0.104,0.918,0.104,c0.006-0.024,0.346-0.207,0.401-0.246c0.153-0.111,0.362-0.376,0.362-0.57c0-0.158-0.094-0.79-0.298-0.79L356.623,456.756,L356.623,456.756z M262.684,466.29c-0.279,0.065-1.269-0.738-1.513-0.933c-0.111-0.089-0.637-0.588-0.556-0.751,c0.042-0.085,0.56,0.13,0.647,0.155c1.065,0.306,2.339,0.458,3.44,0.674c0.475,0.093,2.612,0.106,2.612,0.712,c-1.138,0.363-2.346,0.389-3.569,0.389L262.684,466.29L262.684,466.29z M274.361,470.772c-0.505,0.118-1.321-0.206-1.177-0.803,c0.066,0,0.251-0.06,0.323-0.078c0.102-0.026,0.22,0.056,0.297,0.091c0.353,0.157,0.985-0.069,1.306,0.155,c0.504,0.351,0.054,0.595-0.414,0.635H274.361L274.361,470.772z M283.556,475.72c-0.556,0.126-1.299-0.635-1.397-1.14,c-0.133-0.689,0.726-0.755,1.151-0.855c1.069-0.251,2.033,0.273,2.587,1.179c0.724,1.183-0.839,0.946-1.565,0.946L283.556,475.72,L283.556,475.72z M314.775,496.6c-0.235-0.126-0.429-0.501-0.285-0.752c0.085-0.147,0.204-0.372,0.401-0.401,c0.224-0.034,0.519,0.387,0.595,0.557c0.138,0.309-0.249,0.513-0.504,0.609L314.775,496.6L314.775,496.6z M300.058,495.395,c-0.274,0-0.576-0.139-0.699-0.389c-0.1-0.203,0.293-0.308,0.427-0.375c0.238-0.119,0.571-0.439,0.828-0.259,c0.086,0.06,0.082,0.288,0.09,0.402c0.004,0.061,0.159,0.36,0.207,0.376c0,0.039,0.013,0.083,0.013,0.13,c-0.069,0.023-0.152,0.105-0.246,0.13c-0.133,0.035-0.282,0.085-0.414,0.103L300.058,495.395L300.058,495.395z M299.553,483.504,c-0.084-0.251-0.349-0.602-0.349-0.894c0-0.72,1.083-0.778,1.28-0.181c0.086,0.261-0.142,0.674-0.142,0.971,c0,0.256,0.008,0.44-0.052,0.673c-0.147,0-0.517-0.1-0.556-0.259L299.553,483.504L299.553,483.504z M329.518,469.169,c-0.052,0.155-3.32,1.446-3.698,1.477c-0.681,0.056-1.802,0.455-2.431,0.699c-0.93,0.361-1.393-0.414-1.966-0.414,c0,0.929,0.439,2.035,0.543,2.953c0.151,1.323,1.397-0.567,1.681-0.544c3.119,0.256,6.097-0.781,9.104-2.642,c1.375-0.851,7.229-3.112,7.733-1.062c-2.508,0.83-2.318,4.07-0.052,0.933c1.353-1.873,3.418-2.591,4.966-3.989,c0.909-0.822,1.946-3.85,2.949-4.015c0.67-0.11,3.512-1.361,1.604-1.995c-4.017-1.335-6.343,2.251-9.958,2.435,c-2.146,0.109-5.885-3.097-4.138,0.803c0.888,1.982-0.965,2.012-1.578,0.414c-0.188-0.49,0.283-0.999-0.104-1.632,c-0.156-0.256-2.774,3.013-1.371,3.756c2.682,1.422-1.397,1.363-2.561,2.383L329.518,469.169L329.518,469.169z M353.455,463.453,l0.556-0.104c0.368-0.185,0.988,0.478,0.88,0.829c-0.148,0.48-0.476,0.564-0.853,0.816c-0.657,0.439-2.32,1.012-1.849-0.428,C352.391,463.946,352.964,463.716,353.455,463.453L353.455,463.453z M436.719,510.339c-2.417,0.739-4.756,1.304-6.719-0.162,l-4.681-3.497c-0.451-0.336-8.991-2.117-9.776-1.995c-0.6,0.118-2.91,0.634-3.259,0.492c-1.109-0.452-1.151-1.323-2.56-1.036,c-1.345,0.274-5.55,2.675-6.828,1.969c-0.449-0.248-2.982-3.426-2.923-3.575c-0.807-0.807-1.606-0.653-2.638-0.026,c-0.671-0.404-1.79,0.649-2.354,0.881c-0.95,0.39-0.57-0.848-0.414-1.684c0-3.6-13.684,0.68-14.07-5.311,c-0.072-1.126-1-3.83-2.224-4.015c-2.075-0.314-0.068-4.794-0.44-5.621c-0.578-1.286-2.357-2.487-2.483-3.911,c0-0.697-0.827-1.663-0.827-1.943c-0.367-0.12-0.982-3.789-0.75-4.482c0.6-1.796,0.19-2.961,0.052-4.793,c-0.277-3.659-2.523-6.086-3.879-9.222c-0.966-1.602,0.902-2.953-1.681-2.953l-0.388-1.943c-0.251-1.257-0.965-0.098-1.552-1.528,c-0.366-0.892-4.58-1.58-5.613-1.58c-1.546,0-3.944,0.359-5.328,0c-0.487-0.126-1.51-0.903-1.888-0.803l-5.509,1.451,c-1.75,0.461-1.731,0.273-2.794,0.881c-0.146,0.591-1.522,1.542-2.147,1.347c-0.761-0.237-1.335,1.09-1.785,1.58,c-1.215,1.324-4.426-0.155-4.991,1.554c-1.801,0-3.017-1.018-4.604,0.57c-1.279,1.279-1.125,2.779-1.681,4.326,c-1.407,3.912-6.394,0.768-8.82,1.71c-0.472,0-2.018,3.057-2.457,1.709c-1.471,0.372-2.391,2.517-3.362,2.591,c-2.224,0.168-3.137,2.022-4.992,3.057c-2.592,1.446-7.227,2.477-8.819-0.414c-1.5-2.724-4.019,0.412-5.897-2.409,c-0.7-1.052-1.598-3.344-2.897-2.772c-2.341,1.032-2.968,0.045-5.121-0.155c-3.448-1.733-2.523,0.337-5.25,0.337,c-1.931,0-3.723-0.281-5.069,0.725c-1.088-1.626-4.126-2.81-5.613-4.145c-2.2-1.975-0.74-4.345-3.647-5.311l-5.302-1.761,c-1.376-0.457-6.265-2.022-7.138-2.979c-1.067-0.848-4.529-1.827-5.044-2.668c-0.769-1.257-2.169-2.588-3.725-2.901,c-0.03-0.123-0.127-0.28-0.268-0.454l0,0l1.225-1.308c0.749-0.072,1.351-0.337,2.147-0.337c1.169,0,4.56,0.378,5.199-0.907l0,0,l1.216,0.7c0.954,1.678,0.618,2.842,2.897,3.342c1.894,0.416,3.954-0.846,5.794-0.389c1.798,0.448,1.712,2.079,3.078,2.72,c1.157,0.543,3.719,0.533,5.018,0.155c3.325,0.039,7.122,2.662,9.518,0.259c0.761-0.763,2.178-0.067,2.742-0.7,c1.055-1.185-1.138-2.462-0.698-3.264c0.238-0.433,1.127-1.347,1.009-1.813c-0.182-0.713-0.761-1.269-0.905-2.021,c-0.319-1.661,3.822-2.643,4.914-2.746l9.078-0.855c1.791,0.895,2.09,1.549,3.879,0.311c1.318-0.912,3.059-1.467,4.63-1.166,c2.733,0.525,5.555,3.802,8.613,2.072c1.453-0.822,3.08-3.739,2.819-5.362c1.148-1.924,1.081-2.868,3.233-3.419,c1.583-0.406,1.438-2.268,2.923-2.409c2.375-0.226,7.938,1.913,6.932-3.342c-0.551-2.876-3.867-3.036-4.371-4.948,c-0.273-1.033,1.545-7.677,2.147-8.549c2.082-5.744-6.209-9.187-9.492-12.719c-1.823-1.961-1.126-1.98,0.879-2.487,c0.253-1.025-0.121-1.679-0.44-2.668l-1.267-3.393l0,0c1.398-0.75,5.471-0.186,6.751,0.699c2.265,1.568,4.853,6.44,7.656,5.984,c3.818-0.622,6.815-6.372,10.242-6.372c1.981-0.575,2.706,2.196,2.638,3.627c-0.134,2.807,0.531,5.67-0.026,8.342,c-0.628,3.011-2.267,4.882-0.285,7.668c0.323,2.5,8.182,7.464,10.604,7.823c3.551,0.527,6.755-1.85,8.897-4.507,c3.721-4.615,6.998-2.555,7.242,2.824c0.054,1.189,0.255,6.373,1.914,6.373c2.812,0,2.03-0.049,3.362,2.616l1.604,2.202,c0.531,0.729,2.942,2.696,2.095,3.653c-0.294,0.332-2.889,1.835-1.241,2.409c2.485,0.866,2.463,1.836,2.69,4.43l0.595,6.813,c-0.436,4.476-0.598,8.603,4.061,9.507c2.401,0.466,5.925,2.582,7.216,4.637c1.63,2.592,4.522-6.142,8.251-1.58,c1.164,1.423,3.195,2.45,4.164,3.912c0.238,0.359,0.775,2.229,0.258,2.487c-0.434,0.216-1.156-0.971-1.94-0.777,c-0.574,1.762,0.885,3.455-0.647,5.207c-0.686,0.715-0.166,2.013-0.776,3.005c-0.453,0.737-0.605,4.277-0.336,5.026,c0.272,0.758-0.396,2.525-0.853,3.212c-1.156,1.737,1.033,0.425,1.604,0.285c2.062-0.508,3.648,1.834,5.38,0.855,c0.345-0.195,1.341-1.639,1.836-0.829c0.579,0.946,1.098,0.917,2.043,1.269c0.376,0,2.433-0.58,2.095,0.44,c-0.302,0.911-0.533,0.728,0.026,1.502c0.436,0.603,0.291,3.427,1.138,3.368c0.509-0.036,0.857-0.596,1.5-0.596,c0.736,0,1.955,0.986,2.328-0.233c0.426-1.392,1.057-1.31,2.147-0.829c1.018,0.45,1.442,1.692,2.186,2.432l0,0,c-0.363,0.678-0.906,1.191-0.815,2.085c0.138,1.35,0.538,0.798,1.448,1.23c0.455,0.217,0.485,0.901,0.737,1.296,c1.051,1.641,3.309,2.18,4.41,3.938c0.435,0.491,0.905,0.898,1.034,1.556c0.245,1.255-0.29,1.526,0.957,2.202,c0.517,0.281,1.246,0.447,1.19,1.166c-0.094,1.21,0.734,1.207,1.112,2.254C436.043,507.597,436.719,509.512,436.719,510.339,L436.719,510.339z", "name": "Hormozgan"},"46": {"path": "M474.094,222.605l1.452,8.083l-0.828,2.694l0.103,3.212l0.595,1.632l3.828,1.969l5.949,0.026l0.957,0.751l-0.388,0.466l-1.345-0.207,l-0.75,0.725l0.233,2.305l-1.242,0.829l-5.354,5.751l-1.631,3.627l1.526,4.119l1.862,7.72l0.828,4.015l2.612,5.855l0.879,6.684l0,0,l1.138,3.73l-1.267,4.249l-0.75,1.114l0.414,1.684l-0.336,1.166l-0.155,7.564l0,0l1.19,8.316l7.427,1.159l0,0,c0,1.14,0.876,2.604,0.876,3.763c0,1.028-0.49,1.696-1.164,2.409c-0.523,0.555-0.605,1.567-1.112,1.969,c-1.498,4.51-2.897,7.789-2.897,12.616c0,1.108,0.314,2.971,0.026,3.964c0,1.973,0.361,3.519,0.646,5.388,c0.136,0.889,0.58,3.786,1.061,4.43c-0.384,0.517-0.097,0.72-0.879,1.088c-0.374,0.176-1.17,0.207-1.604,0.207,c-1.095,0-2.285,0.088-3.337-0.181c-1.009-0.259-1.1-1.024-1.836-1.554c-1.392-1.571-2.241-3.521-3.13-5.388,c-0.905-1.899-2.542-1.796-3.828-3.083c-1.089-1.089-1.152-1.511-2.742-1.865c-1.205-0.269-3.42-0.665-3.802-2.176,c-1.545-0.39-2.357,1.444-3.957,1.295l-12.104,3.394l-2.897,0.44l-4.216,1.347l0,0l-5.458-8.652l-5.845-9.844l-19.76-9.326,l-12.932-6.424l-6.104-2.176l0,0l-7.785-3.471c-3.533,0-7.423-3.889-10.708-5.052c-3.807-1.348-6.55-3.338-10.785-3.601,l-2.509-0.156l0,0c-0.065-0.46-2.742-3.322-3.026-3.782c-0.378-0.612-0.691-1.287-1.035-1.917c-0.68-1.245-1.572-2.052-2.69-2.953,c-2.147-1.732-4.138-6.948-4.138-9.637c-2.25-2.825-3.331-5.856-6.104-8.238c-2.268-1.949-5.01-5.311-6.621-7.875l-3.776-6.01,c-1.589-2.528-4.561-4.692-6.466-7.202l0,0c0-8.078-1.04-15.524-1.81-23.522l0,0c1.191-0.64,5.518-0.57,7.035-0.57,c3.249,0,3.689-3.329,4.397-6.217c0.883-3.602,3.574-7.314,5.225-10.621l3.983-5.596l0,0c5.691,0,10.888,2.374,17.277,1.347,c5.401-0.868,4.617-7.748,9.725-9.067c6.543-1.689,14.046-0.157,14.949,7.72c0.271,2.362-0.23,7.063,2.379,8.134,c2.921,1.2,2.47,4.386,1.19,6.632c-1.142,1.048-0.904,4.496,0.362,5.44c3.082,2.298,6.276-0.777,9.466-0.777,c1.2,0,2.271,0.77,2.949,1.71c0.444,0.615,2.561,2.072,2.535,2.176c2.966,1.111,9.807-0.762,13.423-0.311,c1.708-0.158,3.346,0.518,5.483,0.052c1.669-0.364,3.564-0.829,5.276-0.829c2.427,0,1.829,2.266,4.63,1.684l3.362-0.699,c1.19-0.248,1.962-1.252,3.181-1.373c2.703,0,3.841,1.219,6.311,1.865c4.416,1.154,8.082,3.714,12.337,4.974,C465.769,226.836,469.925,222.279,474.094,222.605L474.094,222.605z", "name": "South Khorasan"}},"height": 500,"width": 550});

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