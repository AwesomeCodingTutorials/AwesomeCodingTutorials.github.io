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
            jQuery.fn.vectorMap('addMap', 'iraq', {"paths": {"1": {"path": "M125.762 71.4976l-0.7938 0.2467c-0.4965,0.1542 -0.8363,-0.0117 -1.0584,0.5666 -0.1883,0.4906 -0.1481,0.7334 -0.4745,1.1972 -0.3726,0.5293 -1.0559,0.7039 -0.9854,1.4805 0.0839,0.9234 0.3575,1.277 -0.4653,1.9465 -0.1845,0.3443 -0.4324,1.6622 -0.7756,1.7546 -0.2969,0.08 -1.0177,-0.6974 -1.177,-0.9413 -0.2237,-0.3423 -0.8904,-0.3658 -1.2592,-0.2924 -0.5173,0.1031 0.1802,0.5088 -0.0912,0.8042 -0.291,0.3169 0.2352,0.4444 0.146,0.8042 -0.0571,0.23 -0.4987,0.3691 -0.5201,0.5575 -0.0197,0.1743 0.1648,0.4201 0.1095,0.5209 -0.2754,0.5025 0.1518,0.6887 -0.0274,1.1971 -0.1255,0.3564 -0.2291,0.4782 -0.3102,0.8865 -0.0869,0.438 0.227,0.288 0.2737,0.4935 0.0558,0.245 0.0365,0.8223 0.0365,1.1058 0,0.4783 -0.6858,0.6319 -0.9854,0.9321 -0.107,0.2398 -0.357,0.4721 -0.511,0.6946 -0.1863,0.2694 -0.6754,0.2879 -0.9763,0.53 -0.3483,0.2804 -0.4053,1.2259 -0.7117,1.6358 -0.3265,0.437 -0.3284,1.1217 -0.3284,1.6358 0.926,0.1876 1.2041,-0.1586 1.8157,0.7037 0.4652,0.6561 1.388,0.7405 0.958,1.709 -0.0054,0.1713 0.0059,0.0488 -0.0091,0.1096 -0.1854,0.0927 -0.886,1.5501 -1.031,1.8095 -0.3903,0.6981 -0.0347,1.0128 0.3193,1.5444 0.1069,0.1607 -0.0582,2.2243 -0.2098,2.3761 -0.3034,0.3041 -0.8158,-0.0796 -1.0858,0.2467 -0.2167,0.262 -0.0935,0.7108 -0.2281,1.0784 -0.0758,0.222 -0.2187,0.3645 -0.365,0.5392 -0.1889,0.2254 -0.1638,0.6285 -0.1095,0.8956 0.0549,0.2705 0.2976,0.5049 0.4745,0.7036l0.265 0.393 0 0 -1.36 1.2794 0 0 -1.2135 -1.5901c-0.2411,-0.2632 -0.5015,-0.6908 -0.7299,-0.987 -0.2033,-0.2637 -0.5139,-0.4731 -0.7391,-0.7219 -0.5148,-0.5688 -0.6338,-0.7526 -0.6113,-1.5262 0.0143,-0.4901 -0.1625,-0.606 -0.3924,-0.9961 -0.3375,-0.5724 -0.5831,-0.6104 -1.1765,-0.7951l-4.5986 -0.0365 -1.2229 -0.9139 -5.4928 0 -7.7738 -9.7236 0.0182 -6.1046 -2.6642 3.0706 -5.8395 -4.0028 -0.4927 -7.9506 0 0 0 -3.6555 10.3833 -0.3473 -3.23 -5.0628c0.1264,-0.642 -0.2558,-1.6619 -0.2558,-2.376 0,-1.3906 0.9994,-2.1322 1.9343,-3.0341 0.4386,-0.4232 0.9549,-0.9725 1.5238,-1.1972 0.6425,-0.2539 1.5209,-0.026 2.2354,-0.265 0.594,-0.1945 1.1876,-0.4951 1.7519,-0.7768 0.4584,-0.2289 0.9803,-0.3038 1.4416,-0.5117l0.6569 -0.0822 0 0c0.0481,0.6366 0.0298,0.9099 -0.2098,1.5169 -0.1298,0.3291 -0.2778,0.6375 -0.3649,0.9779 -0.0307,0.1198 -0.2079,0.4587 -0.1095,0.5574 0.2255,0.2265 0.7802,0.2831 1.0858,0.4296 0.341,0.1634 0.2554,0.4876 0.2554,0.8224l0 0 -2.9559 1.0693 2.5183 6.1594c0.5629,0.3712 1.97,0.6815 2.6457,0.8134 1.3177,0.2574 2.4226,1.0733 3.6315,1.6084 1.2722,0.5632 1.6817,1.3643 2.6095,2.2938 0.6821,0.6357 1.1333,1.6724 2.2081,1.6724 0.2645,0 0.9659,-0.1084 1.1223,0.0822 0.971,1.1839 2.6094,1.9096 3.6041,3.0706 0.5995,0.6996 0.6633,0.3511 1.0857,-0.4204 0.4688,-0.856 0.6123,-2.1303 1.1406,-2.8512 0.3185,-0.2095 0.7264,-1.2365 0.8942,-1.6084 0.3772,-0.8361 0.8828,-1.4374 0.9763,-2.3761 0.0566,-0.569 -0.151,-1.5042 0.7025,-1.6449l0 0c0.0891,0.1455 0.2149,0.2746 0.292,0.4295 0.0314,0.0257 0.0411,0.0388 0.0639,0.0731 0.4656,0.2999 0.522,0.732 1.1861,0.8407 0.8036,0.1316 1.7691,0.0731 2.5913,0.0731 0.4239,0 0.8071,0.0259 1.2227,0.0823 0.5187,0.0703 0.7939,0.3667 1.2226,0.594 0.1945,0.2877 0.5056,0.5286 0.6479,0.8499 0.1827,0.4122 0.3179,0.8694 0.1642,1.316 -0.1378,0.4001 -0.3102,1.0892 -0.3102,1.5079l0.0182 0.5026 0 0z","name": "salah ad-Din"},"2": {"path": "M118.664 65.2285c0.0891,0.1455 0.2149,0.2746 0.292,0.4295 0.0314,0.0257 0.0411,0.0388 0.0639,0.0731 0.4656,0.2999 0.522,0.732 1.1861,0.8407 0.8036,0.1316 1.7691,0.0731 2.5913,0.0731 0.4239,0 0.8071,0.0259 1.2227,0.0823 0.5187,0.0703 0.7939,0.3667 1.2226,0.594 0.1945,0.2877 0.5056,0.5286 0.6479,0.8499 0.1827,0.4122 0.3179,0.8694 0.1642,1.316 -0.1378,0.4001 -0.3102,1.0892 -0.3102,1.5079l0.0182 0.5026 0 0c0.4194,0.21 0.8462,0.4882 1.3322,0.3198 1.0067,-0.3487 0.9951,-1.352 1.7792,-0.0457 0.6421,1.0696 1.0296,-0.5466 1.4872,-0.0182l0.7756 0.8956c0.1519,0.1753 -0.0726,0.5719 -0.1277,0.7859 -0.1691,0.6557 0.6843,0.1998 0.6843,0.7676 0,0.5248 0.0119,0.8572 0.3467,1.2886 -0.0616,0.4954 0.0698,0.7447 0.1278,1.2063 0.1201,0.06 0.2926,0.3005 0.4379,0.0914 0.2616,-0.3767 0.6902,-0.9738 1.0493,-1.2612 0.3051,-0.2443 0.6831,0.0512 0.9033,-0.1462 0.3613,-0.3237 1.0164,-0.4532 1.25,-0.8407 0.0921,-0.1529 0.0347,-0.4728 0.0822,-0.658 0.0884,-0.3442 0.1795,-0.5717 0.3193,-0.9047 0.2786,-0.661 0.7421,-0.9607 0.8759,-1.6907 0.2094,-1.1429 1.3068,-1.5315 1.8523,-2.4857 0.288,-0.504 -0.6205,-0.247 -0.6205,-0.6946 0,-0.1245 0.4295,-0.405 0.5292,-0.53 0.1672,-0.2095 0.1612,-0.4405 0.3467,-0.6397 0.2326,-0.0976 0.4824,-0.4292 0.584,-0.658 0.1154,-0.2597 0.0078,-0.8485 0.3558,-0.8682 0.3243,-0.0184 0.6927,-0.3107 1.022,-0.3107 0.153,0.6189 -0.1773,1.4864 -0.1095,2.175 0.0818,0.8314 0.3526,2.4684 0.6387,3.2534l0 0c0.4609,0 0.471,-0.101 0.9124,0.1462 0.4563,0.2554 0.4359,-0.6399 0.5292,-0.8864 0.0921,-0.2435 0.4079,-0.269 0.365,-0.5758 -0.0781,-0.5585 -0.6369,-1.1267 -0.1369,-1.6267 0.1561,-0.1561 1.1401,-0.0605 0.5748,-0.3838l0.1313 -0.6504c0.0091,-0.045 0.009,-0.0244 0.0426,-0.0041 0.0697,0.0427 0.1656,0.0533 0.328,0.0148 0.2052,-0.0487 0.5073,0.3621 0.6387,0.4843 0.2186,0.2032 0.4174,-0.1722 0.5474,-0.0274 0.1805,0.2011 0.1979,0.1387 0.4289,0.2102 0.058,0.018 0.7433,0.6325 0.6022,0.064 -0.2573,-1.0363 0.579,-0.2711 0.9945,-0.5209 0.2928,-0.176 0.7064,-0.0974 0.8668,-0.4204 0.0479,-0.0965 0.1037,-0.1837 0.1721,-0.2671l-0.3546 -0.3086c-0.3223,-0.324 -0.2697,-0.8511 0.0457,-1.1424 0.3578,-0.3306 0.629,-0.3076 0.2646,-0.8042 -0.2101,-0.2865 -0.1628,-0.3219 -0.5384,-0.2833 -0.4385,0.045 -0.8354,-0.0079 -0.5201,-0.5666 0.2304,-0.4085 0.7088,-0.4593 0.5931,-1.0418 -0.1118,-0.5634 -1.168,-1.3031 -1.688,-1.4713l-1.3504 -2.5771 0.0365 -0.7128 0.0183 -0.0092c0.0174,-0.0706 0.3134,-0.0438 0.3741,-0.0639 0,-0.0218 0.0056,-0.0308 -0.0183,-0.0366 0,-0.1142 -0.2554,-0.2106 -0.2554,-0.4295 0,-0.2436 -0.061,-0.3609 -0.2099,-0.5483 -0.5176,-0.6519 0.4593,-0.1214 0.6661,-0.1097 0.2859,0.0161 -0.0399,-0.4351 -0.1004,-0.53 -0.0654,-0.1028 -0.0547,-0.3008 -0.0547,-0.4204 0,-0.2506 0.1273,-0.269 -0.1734,-0.4113 -0.3088,-0.146 -0.1117,-0.2415 -0.0456,-0.5209 0.1115,-0.3357 0.4653,-1.0083 0.8668,-0.8773 0.4453,0.1454 0.8749,0.461 1.3869,0.2193 0.4665,-0.2201 0.2355,0.0823 0.6022,0.0823 0.203,-0.6137 0.5894,-0.8168 1.1861,-0.6763 0.5338,0.1256 0.8041,-0.2926 1.1497,-0.6397 0.3361,-0.3374 0.2691,-0.2536 0.7482,-0.3747 0.0307,-0.1244 -0.0752,-0.512 0.1095,-0.5574 0.019,-0.0774 0.0401,-0.6599 -0.0092,-0.6763 -0.021,-0.0849 -0.627,0.1268 -0.739,-0.329 -0.1969,-0.0486 -0.3889,0.5882 -0.9033,0.4661 -0.402,-0.0955 -0.5445,0.661 -0.9033,0.1645 -0.2779,-0.3847 -0.2954,0.0974 -0.5475,0.0822 -0.2007,-0.012 -0.438,-0.6489 -0.5292,-0.8133 -0.1317,-0.2375 -1.0654,-0.4202 -1.3048,-0.3747 -0.4018,0.0763 -0.5161,0.3975 -0.9945,0.3838 -0.3952,0 -0.8851,-0.111 -0.8851,0.2833 0,0.2099 -0.8772,-0.2193 -1.031,-0.2193 -0.3662,0 -0.3422,0.4025 -0.5383,0.5118 -0.1426,0.0796 -0.2185,-0.0979 -0.2829,-0.0731 -0.1202,0.0462 -0.2853,0.1693 -0.4197,0.1279 -0.1616,-0.0499 -0.3614,-0.3203 -0.438,-0.329 -0.1481,-0.0167 -0.2965,0.2219 -0.4653,0.265 -0.0982,0.0251 -0.2681,0.1855 -0.292,0.1828 -0.3148,-0.0359 -0.7615,-1.3924 -0.9489,-1.645 -0.2367,-0.3193 -0.6089,-0.4227 -0.6478,-0.8316 -0.0144,-0.1514 -0.8085,-0.8193 -0.9672,-0.8681 -0.4934,-0.152 -0.7933,-0.4701 -1.0949,-0.8682l-0.8942 -0.0731c-0.1526,0.0941 -0.3792,-0.0183 -0.5566,-0.0183 -0.1017,0 -0.6906,0.1556 -0.7755,0.2193 -0.3531,0.2651 -0.6056,0.6965 -0.9763,0.2102 -0.185,-0.2427 -0.2912,0.1579 -0.438,0 -0.0457,-0.0492 -0.0026,-0.2623 -0.1095,-0.201 -0.1145,0.0656 0.0509,-0.4037 -0.0912,-0.4478 -0.0033,-0.001 -0.0268,-0.0052 -0.0905,-0.0194 0.224,-0.3076 0.7558,-1.0303 0.8295,-1.4154 0.106,-0.5538 -0.1815,-0.5619 -0.5748,-0.7585 -0.5415,-0.2707 -0.366,-1.397 -0.2646,-1.8552 0.0361,-0.1636 -0.3472,-0.9064 -0.4745,-1.0144 -0.1718,-0.1456 -0.724,-0.0023 -0.666,-0.3198 0.0609,-0.3339 0.4562,-0.2019 0.4562,-0.5758 0,-0.3353 -0.7065,-0.3424 -0.6205,-0.6762 0.0274,-0.334 0.3641,-0.4424 0.2373,-0.7951 -0.1054,-0.2931 -0.0822,-0.5032 -0.0822,-0.8225 0,-0.267 -0.6273,-0.982 -0.8212,-0.9413 -0.2971,0.0625 -1.0653,0.0787 -1.2226,0.3199 -0.1218,0.1869 -0.3159,0.3653 -0.5475,0.2285 -0.682,-0.4027 -0.6748,-0.8591 -1.1131,-1.3708 -0.1788,-0.2089 -0.0358,-0.9249 -0.2373,-0.9961 -0.2042,-0.0721 -0.7413,-0.3477 -0.8602,-0.6481l0 0c-1.1616,0.436 -1.9794,-0.0912 -2.9628,0.9953 -0.7789,0.8605 -1.424,-0.7289 -1.9526,-0.859 -0.4388,-0.1079 -1.0156,0.383 -1.2409,0.7219 -0.4545,0.6839 -0.5372,0.9662 -1.4143,1.0419l0.0365 2.8512c0.3053,0.1032 0.9106,-0.1333 1.0949,-0.0822 0.3703,0.1026 0.2653,0.9333 0.9581,0.9595 0.4381,0.0165 0.4014,-0.039 0.4014,0.4752 0,0.572 0.156,0.4801 -0.4653,0.5027 -0.3098,0.0113 -1.7648,0.0559 -1.8066,0.2741 -0.073,0.3804 -0.0365,0.8952 -0.0365,1.2886 0,0.0735 -0.0596,0.383 0.0183,0.4021 0.0449,0.1817 1.4749,0.9603 1.7336,1.3525l1.5237 1.8278c0.4139,0.4967 0.777,0.7865 1.3048,1.124 0.236,0.1508 0.6573,0.4017 0.8121,0.6306 0.0853,0.126 0.6534,0.8875 0.2189,0.8042 -0.1651,-0.0317 -0.3698,-0.2709 -0.5201,-0.2102 -0.2811,0.1135 -0.0141,0.5113 -0.3467,0.594 -0.3423,0.0852 -0.3583,-0.4295 -0.5474,-0.4295 -0.2988,0 -0.346,0.818 -0.6935,0.3381 -0.3523,-0.4863 -0.7399,-0.466 -1.2409,-0.1828l0 0 0.2646 1.0693c0,0.8834 -0.3178,1.9544 0.5292,2.5405 0.8368,0.5789 -0.1678,1.6073 -0.2737,2.3304 -0.0791,0.5407 0.4422,1.4213 0.6478,1.9283 0.1181,0.5889 0.847,1.0918 0.8121,1.6723 -0.0242,0.4017 -0.8779,0.9319 -1.1679,1.2063 -1.1278,1.0669 -1.1195,1.9558 -1.6971,3.2534 -0.2333,0.524 -0.9889,1.4597 -1.5877,1.5536l-1.323 0.5118 0 0z","name": "As-Sulaymaniyyah"},"3": {"path": "M98.4807 57.36l-2.9559 1.0693 2.5183 6.1594c0.5629,0.3712 1.97,0.6815 2.6457,0.8134 1.3177,0.2574 2.4226,1.0733 3.6315,1.6084 1.2722,0.5632 1.6817,1.3643 2.6095,2.2938 0.6821,0.6357 1.1333,1.6724 2.2081,1.6724 0.2645,0 0.9659,-0.1084 1.1223,0.0822 0.971,1.1839 2.6094,1.9096 3.6041,3.0706 0.5995,0.6996 0.6633,0.3511 1.0857,-0.4204 0.4688,-0.856 0.6123,-2.1303 1.1406,-2.8512 0.3185,-0.2095 0.7264,-1.2365 0.8942,-1.6084 0.3772,-0.8361 0.8828,-1.4374 0.9763,-2.3761 0.0566,-0.569 -0.151,-1.5042 0.7025,-1.6449l0 0 1.323 -0.5118c0.5988,-0.0939 1.3544,-1.0296 1.5877,-1.5536 0.5776,-1.2976 0.5693,-2.1865 1.6971,-3.2534 0.29,-0.2744 1.1437,-0.8046 1.1679,-1.2063 0.0349,-0.5805 -0.694,-1.0834 -0.8121,-1.6723 -0.2056,-0.507 -0.7269,-1.3876 -0.6478,-1.9283 0.1059,-0.7231 1.1105,-1.7515 0.2737,-2.3304 -0.847,-0.5861 -0.5292,-1.6571 -0.5292,-2.5405l-0.2646 -1.0693 0 0 -0.5931 -0.1827c-0.5802,-0.0366 -0.7761,-0.1021 -1.2135,-0.4295 -0.2482,-0.1859 -1.165,0.5556 -1.3321,0.7676 -0.1952,0.2478 -0.4652,0.1994 -0.6935,0.0274 -0.3801,-0.2866 -0.7414,-0.1 -1.1405,0.0274 -0.4111,0.1311 -1.1616,0.745 -1.5511,0.6306 -0.4876,-0.1433 -0.2854,0.0573 -0.6479,0.1828 -0.1714,0.0594 -0.7391,-0.2309 -0.8941,-0.3199 -0.4519,-0.2594 -1.0061,-0.0874 -1.5055,-0.1188 -0.4306,0 -1.2071,-0.0681 -1.5785,0.1645 -0.3052,0.1912 -0.6936,0.9014 -0.9125,0.9687 -0.2416,0.0744 -1.5394,-1.0043 -1.7883,-1.1606 -2.2637,-1.4211 -3.2193,2.0587 -3.5311,3.5458 -0.1849,0.8519 -0.3207,1.8333 -0.6843,2.6228 -0.1991,0.4321 -0.1548,1.6922 -0.5019,1.8186 -0.3144,0.1146 -0.6452,-0.1109 -0.8668,-0.3198 -0.5607,-0.5288 -0.3863,-0.552 -1.1953,-0.4204 -0.424,0.069 -0.2483,1.5297 -0.3558,1.9648 -0.2983,0 -0.8636,-1.4348 -1.0949,-1.4348 -0.0533,0.217 -0.3285,0.2712 -0.3285,0.6489 0,0.2307 0.0368,0.454 -0.2555,0.2284l-1.3139 -1.0144 0 0z","name": "Kirkuk"},"4": {"path": "M110.769 17.3229l0.2482 0.8322c-0.0439,0.3169 0.5918,1.2374 0.3741,1.4348 -0.2189,0.1986 0.146,0.8703 0.146,1.1789l-0.0183 0.0091c-0.0163,0.0495 -0.4073,-0.084 -0.5657,0 -0.3536,0.1874 -0.508,0.6237 -0.7299,0.9687 -0.4494,0.699 -1.2827,1.0751 -1.8705,1.6358l-1.5329 1.4622 0 0 -0.6204 -0.1553c-0.4888,-0.0924 -1.0703,-0.0335 -1.5603,0.0274 -0.571,0.0709 -1.2403,0.3107 -1.7975,0.3107 -0.3225,0 -0.4052,0.013 -0.4744,0.3838 -0.0833,0.4459 -0.1469,0.4491 0.2646,0.5757 0.3036,0.0935 0.6286,0.2745 0.7664,0.5666 0.281,0.5952 0.1722,1.4393 -0.4106,1.8095 -0.7092,0.2364 -1.0382,0.4674 -1.8248,0.5483 -0.6729,0.0691 -1.0284,-0.1572 -1.5603,-0.5026 -0.7466,-0.4847 -1.957,-1.7977 -2.8832,-1.7089 -1.0578,0.1015 -1.1298,0.879 -1.8432,1.2977 -0.1709,0.8567 -0.9048,1.5747 -1.5602,2.111 -0.6086,0.4979 -1.2585,0.6762 -1.98,0.9504 -0.46,0.1747 -1.0898,0.3732 -1.5785,0.2102 -0.5986,-0.3426 -0.8011,0.9246 -1.2226,-0.0822 -0.2864,-0.684 -1.2004,0.3133 -1.0311,-0.5392 0.1414,-0.7123 -0.2662,-0.2259 -0.593,-0.6397 -0.595,-0.7536 -0.5413,-0.953 -1.3961,-0.4478 -0.8437,0.4985 -1.1166,-0.376 -1.5693,-0.923 -0.2839,-0.3432 -1.0109,-0.1836 -0.8303,-0.6123 0.1134,-0.3416 -0.1574,-0.2774 -0.2555,-0.4844 -0.0998,-0.2108 0.1814,-0.3577 0.1551,-0.5757 -0.0156,-0.1299 -0.173,-0.164 -0.2281,-0.265 -0.0747,-0.1371 0.0342,-0.4459 0.1004,-0.5666 0.2112,-0.3854 -0.3329,-0.1451 -0.4836,-0.1371 -0.2832,0.0152 -0.7457,-0.4402 -0.9216,-0.6397 -0.3271,-0.3707 -0.5153,-0.8171 -0.6478,-1.2886l-0.0932 -0.9408 0 0 -0.0963 -0.6981 -0.1021 -0.5178 0 0 0.8382 -0.0083c0.422,-0.0765 0.5797,-0.4048 0.9954,-0.4578 0.3477,-0.0444 0.6277,-0.0091 0.9854,-0.1005 0.2501,-0.0638 0.9939,-0.0799 1.0767,-0.3107 0.1051,-0.2926 0.2931,-0.5407 0.5201,-0.7677 0.1035,-0.1035 0.2812,-0.2822 0.2463,-0.4295 -0.049,-0.2072 0.4454,-0.4296 0.584,-0.6306 0.1378,-0.2 0.0456,-0.4663 0.0456,-0.7036 0.0727,-0.0183 0.4512,0.0026 0.4653,-0.0549 0.0183,-0.0045 0.1206,-0.385 0.1551,-0.4295 -0.0858,-0.7758 0.0759,-0.0755 0.5384,-0.5026 0.0574,-0.0531 0.2824,-0.1556 0.3011,-0.2102 0.0182,-0.0529 -0.0619,-0.336 0,-0.3564 0.069,-0.2809 0.8244,-0.5594 0.885,-0.8682l0.0092 -0.0091c0.1611,0 0.3677,0.1188 0.5657,0.1188 0.0112,0.0224 0.0377,0.0314 0.0638,0.0365l0.0092 0.0092c0.2046,0.8278 0.1759,0.2437 0.6387,0.53 0.3299,0.2042 1.5249,0.9159 1.8887,0.7402 0.0813,-0.0393 0.0535,-0.2283 0.219,-0.2833 0.5603,-0.1861 0.6743,0.007 0.8941,-0.6671 0.2809,0 0.3775,0.1209 0.5657,-0.0914 0.2348,-0.2651 0.6341,-0.1326 0.9307,-0.265 0.2579,-0.0285 1.4776,0.2516 1.5603,0.4387 0.1175,0.266 0.5909,-0.0661 0.7208,0.1462 0.12,0.1963 0.1809,0.2974 0.4197,0.3564 0.0801,0.3239 0.5324,0.7808 0.8942,0.5392 0.3463,-0.2311 0.2458,-0.5761 0.9124,-0.4113 0.1173,0.5974 1.2145,1.0254 1.7519,1.2795 0.4255,0.2013 0.3337,0.5273 0.9033,0.5026 0.2148,-0.0093 0.954,-0.564 1.0219,-0.0823 0.1649,0.0829 0.2412,0.1789 0.438,0.2376l0.2281 -0.0182c0.2151,0.5047 0.0633,0.5386 0.6843,0.3655 0.2245,-0.0626 0.6383,-0.351 0.8485,-0.3107 0.5086,0.0975 1.3296,-0.0349 1.7702,0.1462 0.2321,0.0954 0.2517,0.58 0.5109,0.6946 0.3138,0.1386 0.3275,-0.1914 0.4562,-0.4204 0.1997,-0.3555 0.7419,0.1081 1.1041,-0.1097 0.3641,-0.2191 0.4182,-0.5988 0.7299,-0.8225 0,-0.2265 0.1036,-0.4707 0.0821,-0.7768 -0.0061,-0.0879 0.477,-0.076 0.6205,-0.2101 0.2697,-0.2518 0.4677,-0.7002 0.885,-0.5392 0.0886,0.0342 0.1759,0.0769 0.2628,0.1182l0 0z","name": "Duhok"},"5": {"path": "M110.769 17.3229l0.2482 0.8322c-0.0439,0.3169 0.5918,1.2374 0.3741,1.4348 -0.2189,0.1986 0.146,0.8703 0.146,1.1789l-0.0183 0.0091c-0.0163,0.0495 -0.4073,-0.084 -0.5657,0 -0.3536,0.1874 -0.508,0.6237 -0.7299,0.9687 -0.4494,0.699 -1.2827,1.0751 -1.8705,1.6358l-1.5329 1.4622 0 0 1.688 0.6671c0.4293,0.1695 0.8173,0.5258 1.2774,0.7403 0.4178,0.1949 0.0949,0.8416 0.4471,0.9047 0.3606,0.0647 0.2925,0.2765 0.3376,0.6032 0.0805,0.5832 0.3793,0.1181 0.6661,0.201 0.2934,0.0849 0.4676,0.3269 0.7299,0.4661 0.2829,0.15 0.6586,-0.0119 0.9398,0.1005 0.3232,0.1291 0.9194,0.37 1.1405,0.6397 0.197,0.2401 0.2567,0.5681 0.3376,0.859 0.0718,0.2578 0.9431,0.4487 0.657,0.8865 -0.34,0.5205 -0.9183,0.7987 -1.2592,1.3525 -0.117,0.3642 -1.2105,1.2612 -1.5785,1.2612 -0.1812,0 -0.2714,-0.1935 -0.52,-0.1554 -0.3488,0.0534 -0.6528,0.3347 -0.949,0.064 -0.6049,-0.5531 -0.7431,-0.1854 -1.2226,0.3564 -0.1834,0.2071 -0.5019,0.4474 -0.6205,0.6854 -0.2246,0.4505 0.039,0.292 -0.4379,0.4661 -0.408,0.0697 -0.1012,0.594 -0.6661,0.594 -1.2974,0 -0.0839,0.9905 -0.9216,1.2702 -0.1485,0.0495 -0.5093,-0.1135 -0.447,0.1463 0.1874,0.7803 -0.9089,2.0426 -1.3869,2.5679 -0.745,0.8189 -1.9003,1.1634 -2.5457,2.1019 -0.1388,0.4062 -0.2177,0.9023 -0.7026,0.987 -0.631,0.1103 -0.8484,3.2448 -2.2719,3.7012 -0.98,0.3143 -0.6542,0.6004 -0.3924,1.4896 0.182,0.618 -0.5168,1.3684 -0.7573,1.91 0.0116,0.2929 -0.2638,0.5994 -0.3741,0.8773 -0.3282,0.8262 -0.1643,1.5777 -0.1643,2.4675l0 0c0.0481,0.6366 0.0298,0.9099 -0.2098,1.5169 -0.1298,0.3291 -0.2778,0.6375 -0.3649,0.9779 -0.0307,0.1198 -0.2079,0.4587 -0.1095,0.5574 0.2255,0.2265 0.7802,0.2831 1.0858,0.4296 0.341,0.1634 0.2554,0.4876 0.2554,0.8224l0 0 1.3139 1.0144c0.2923,0.2256 0.2555,0.0023 0.2555,-0.2284 0,-0.3777 0.2752,-0.4319 0.3285,-0.6489 0.2313,0 0.7966,1.4348 1.0949,1.4348 0.1075,-0.4351 -0.0682,-1.8958 0.3558,-1.9648 0.809,-0.1316 0.6346,-0.1084 1.1953,0.4204 0.2216,0.2089 0.5524,0.4344 0.8668,0.3198 0.3471,-0.1264 0.3028,-1.3865 0.5019,-1.8186 0.3636,-0.7895 0.4994,-1.7709 0.6843,-2.6228 0.3118,-1.4871 1.2674,-4.9669 3.5311,-3.5458 0.2489,0.1563 1.5467,1.235 1.7883,1.1606 0.2189,-0.0673 0.6073,-0.7775 0.9125,-0.9687 0.3714,-0.2326 1.1479,-0.1645 1.5785,-0.1645 0.4994,0.0314 1.0536,-0.1406 1.5055,0.1188 0.155,0.089 0.7227,0.3793 0.8941,0.3199 0.3625,-0.1255 0.1603,-0.3261 0.6479,-0.1828 0.3895,0.1144 1.14,-0.4995 1.5511,-0.6306 0.3991,-0.1274 0.7604,-0.314 1.1405,-0.0274 0.2283,0.172 0.4983,0.2204 0.6935,-0.0274 0.1671,-0.212 1.0839,-0.9535 1.3321,-0.7676 0.4374,0.3274 0.6333,0.3929 1.2135,0.4295l0.5931 0.1827 0 0c0.501,-0.2832 0.8886,-0.3035 1.2409,0.1828 0.3475,0.4799 0.3947,-0.3381 0.6935,-0.3381 0.1891,0 0.2051,0.5147 0.5474,0.4295 0.3326,-0.0827 0.0656,-0.4805 0.3467,-0.594 0.1503,-0.0607 0.355,0.1785 0.5201,0.2102 0.4345,0.0833 -0.1336,-0.6782 -0.2189,-0.8042 -0.1548,-0.2289 -0.5761,-0.4798 -0.8121,-0.6306 -0.5278,-0.3375 -0.8909,-0.6273 -1.3048,-1.124l-1.5237 -1.8278c-0.2587,-0.3922 -1.6887,-1.1708 -1.7336,-1.3525 -0.0779,-0.0191 -0.0183,-0.3286 -0.0183,-0.4021 0,-0.3934 -0.0365,-0.9082 0.0365,-1.2886 0.0418,-0.2182 1.4968,-0.2628 1.8066,-0.2741 0.6213,-0.0226 0.4653,0.0693 0.4653,-0.5027 0,-0.5142 0.0367,-0.4587 -0.4014,-0.4752 -0.6928,-0.0262 -0.5878,-0.8569 -0.9581,-0.9595 -0.1843,-0.0511 -0.7896,0.1854 -1.0949,0.0822l-0.0365 -2.8512c0.8771,-0.0757 0.9598,-0.358 1.4143,-1.0419 0.2253,-0.3389 0.8021,-0.8298 1.2409,-0.7219 0.5286,0.1301 1.1737,1.7195 1.9526,0.859 0.9834,-1.0865 1.8012,-0.5593 2.9628,-0.9953l0 0c-0.0396,-0.1002 -0.0329,-0.2032 0.0482,-0.3024 0.1432,-0.1751 0.4521,-0.0783 0.5931,-0.2193 0.1372,-0.1372 -0.1262,-0.5451 -0.1916,-0.6763 -0.2292,-0.4559 0.6843,-0.319 0.6843,-0.6397 0,-0.3181 0.0035,-0.7726 -0.0456,-1.0783 -0.1303,-0.8111 -0.3804,-1.9476 -1.4417,-1.709 -0.6301,0.1417 -0.1259,-1.26 -1.0037,-0.6854 -0.4095,0.2681 -0.5324,-0.1702 -0.8394,-0.0914 -0.6133,0.1576 -0.4731,0.0726 -0.6022,-0.4569 -0.1422,-0.5828 0.4614,-0.6236 0.4106,-0.8225 -0.1213,-0.4753 0.6414,-0.3213 0.7299,-0.795 0.0248,-0.4194 0.1016,-0.848 -0.0729,-1.2429 -0.1273,-0.2879 -0.3285,-0.3656 -0.3285,-0.722 0,-0.3104 0.4315,-1.1662 0.1551,-1.4439 -0.245,-0.246 -0.7005,0.0209 -0.8394,-0.466 -0.0257,-0.0043 -0.0163,-0.0072 -0.0365,-0.0275 -0.3345,0.084 -0.6365,0.4828 -0.8121,-0.0913 -0.0635,-0.2079 -0.3832,-0.5894 -0.3832,-0.6946 0,-0.2931 -0.1378,-0.3181 -0.1643,-0.5026 -0.0908,-0.0519 -0.2535,-0.2373 -0.2918,-0.329l0.5291 -0.53 0 0c-0.1674,-0.1221 -0.2615,-0.2387 -0.438,-0.329 -0.1665,-0.0853 -0.4532,-0.0211 -0.5839,-0.1645 -0.3663,-0.4016 -1.1536,0.1685 -1.3139,-0.2468 -0.1129,-0.2924 -0.6849,0.0247 -0.8395,0.1188 -0.0961,0.0586 -0.238,0.3386 -0.3193,0.3564 -0.1004,0.0219 -0.2496,-0.0008 -0.3559,0.0092 -0.1413,0.1939 -0.2172,0.7777 -0.4197,0.8407 -0.3808,0.1186 -0.2677,0.0064 -0.4288,0.3382 -0.0708,0.1457 -0.3135,0.2443 -0.4562,0.3198 -0.1932,0.1021 -1.8217,1.187 -1.9344,0.7311 -0.0652,0 -0.5495,0.289 -0.5931,0.3381 -0.032,0.0362 0.1886,0.3856 0.1552,0.5209 -0.3206,0.046 -0.7221,1.0255 -0.8121,1.2977 -0.1943,0 -0.4783,-0.3254 -0.7664,-0.3472 -0.4748,-0.0359 -0.3421,-0.236 -0.3924,-0.594 -0.0351,-0.2494 -0.1159,-0.2778 -0.2555,-0.4753 -0.2001,-0.2829 -0.0869,-0.4079 -0.1825,-0.7128 -0.657,-0.376 -0.3879,-0.4214 -0.593,-0.9595 -0.1464,-0.3844 0.2997,-0.6526 0.4836,-0.9687 0.0307,-0.0529 0.0712,-0.2783 0.1277,-0.2925 0.0212,-0.0859 0.9763,0.1431 0.9763,-0.3381 0,-0.4598 -0.2737,-0.6126 -0.2737,-0.9778 0,-0.1511 0.1148,-0.6805 0.073,-0.6946l0 -0.0183c-0.2541,-0.0357 -0.507,-0.3651 -0.5566,-0.6031 -0.0751,-0.3609 -0.4321,-0.1229 -0.6843,-0.2285 -0.179,-0.075 -0.1741,-0.2582 -0.438,-0.3198 -0.3883,-0.0908 -0.4823,-0.1662 -0.7208,-0.4661 -0.1233,-0.1549 -0.3719,0.0285 -0.5657,0.0457 -0.2851,0.1628 -0.5438,0.0503 -0.8048,-0.0737l0 0z","name": "Arbil"},"6": {"path": "M80.7412 23.127l0.0932 0.9408c0.1325,0.4715 0.3207,0.9179 0.6478,1.2886 0.1759,0.1995 0.6384,0.6549 0.9216,0.6397 0.1507,-0.008 0.6948,-0.2483 0.4836,0.1371 -0.0662,0.1207 -0.1751,0.4295 -0.1004,0.5666 0.0551,0.101 0.2125,0.1351 0.2281,0.265 0.0263,0.218 -0.2549,0.3649 -0.1551,0.5757 0.0981,0.207 0.3689,0.1428 0.2555,0.4844 -0.1806,0.4287 0.5464,0.2691 0.8303,0.6123 0.4527,0.547 0.7256,1.4215 1.5693,0.923 0.8548,-0.5052 0.8011,-0.3058 1.3961,0.4478 0.3268,0.4138 0.7344,-0.0726 0.593,0.6397 -0.1693,0.8525 0.7447,-0.1448 1.0311,0.5392 0.4215,1.0068 0.624,-0.2604 1.2226,0.0822 0.4887,0.163 1.1185,-0.0355 1.5785,-0.2102 0.7215,-0.2742 1.3714,-0.4525 1.98,-0.9504 0.6554,-0.5363 1.3893,-1.2543 1.5602,-2.111 0.7134,-0.4187 0.7854,-1.1962 1.8432,-1.2977 0.9262,-0.0888 2.1366,1.2242 2.8832,1.7089 0.5319,0.3454 0.8874,0.5717 1.5603,0.5026 0.7866,-0.0809 1.1156,-0.3119 1.8248,-0.5483 0.5828,-0.3702 0.6916,-1.2143 0.4106,-1.8095 -0.1378,-0.2921 -0.4628,-0.4731 -0.7664,-0.5666 -0.4115,-0.1266 -0.3479,-0.1298 -0.2646,-0.5757 0.0692,-0.3708 0.1519,-0.3838 0.4744,-0.3838 0.5572,0 1.2265,-0.2398 1.7975,-0.3107 0.49,-0.0609 1.0715,-0.1198 1.5603,-0.0274l0.6204 0.1553 0 0 1.688 0.6671c0.4293,0.1695 0.8173,0.5258 1.2774,0.7403 0.4178,0.1949 0.0949,0.8416 0.4471,0.9047 0.3606,0.0647 0.2925,0.2765 0.3376,0.6032 0.0805,0.5832 0.3793,0.1181 0.6661,0.201 0.2934,0.0849 0.4676,0.3269 0.7299,0.4661 0.2829,0.15 0.6586,-0.0119 0.9398,0.1005 0.3232,0.1291 0.9194,0.37 1.1405,0.6397 0.197,0.2401 0.2567,0.5681 0.3376,0.859 0.0718,0.2578 0.9431,0.4487 0.657,0.8865 -0.34,0.5205 -0.9183,0.7987 -1.2592,1.3525 -0.117,0.3642 -1.2105,1.2612 -1.5785,1.2612 -0.1812,0 -0.2714,-0.1935 -0.52,-0.1554 -0.3488,0.0534 -0.6528,0.3347 -0.949,0.064 -0.6049,-0.5531 -0.7431,-0.1854 -1.2226,0.3564 -0.1834,0.2071 -0.5019,0.4474 -0.6205,0.6854 -0.2246,0.4505 0.039,0.292 -0.4379,0.4661 -0.408,0.0697 -0.1012,0.594 -0.6661,0.594 -1.2974,0 -0.0839,0.9905 -0.9216,1.2702 -0.1485,0.0495 -0.5093,-0.1135 -0.447,0.1463 0.1874,0.7803 -0.9089,2.0426 -1.3869,2.5679 -0.745,0.8189 -1.9003,1.1634 -2.5457,2.1019 -0.1388,0.4062 -0.2177,0.9023 -0.7026,0.987 -0.631,0.1103 -0.8484,3.2448 -2.2719,3.7012 -0.98,0.3143 -0.6542,0.6004 -0.3924,1.4896 0.182,0.618 -0.5168,1.3684 -0.7573,1.91 0.0116,0.2929 -0.2638,0.5994 -0.3741,0.8773 -0.3282,0.8262 -0.1643,1.5777 -0.1643,2.4675l0 0 -0.6569 0.0822c-0.4613,0.2079 -0.9832,0.2828 -1.4416,0.5117 -0.5643,0.2817 -1.1579,0.5823 -1.7519,0.7768 -0.7145,0.239 -1.5929,0.0111 -2.2354,0.265 -0.5689,0.2247 -1.0852,0.774 -1.5238,1.1972 -0.9349,0.9019 -1.9343,1.6435 -1.9343,3.0341 0,0.7141 0.3822,1.734 0.2558,2.376l3.23 5.0628 -10.3833 0.3473 0 3.6555 0 0 -8.8875 0.1005 -3.8322 -1.2154c-0.489,-0.1966 -1.9201,-0.5846 -2.2263,-1.0144 -0.8084,-0.2015 -1.7486,0.0048 -2.6004,-0.1005 -0.0507,-0.0405 -0.1489,-0.0666 -0.1734,-0.128 -0.3988,-0.2498 -0.7649,-0.8062 -1.1679,-1.1149 -0.4167,-0.3193 -1.0228,-0.5255 -1.5055,-0.722l-0.8248 -0.3194 0 0 -0.0232 -0.6401 0.1095 -2.4492 0.8212 -2.3943 0.0364 -2.4858 2.0986 -2.9061 -0.292 -4.88 -1.989 -4.7887 0.4744 -6.3605 2.1533 -3.8017 7.5366 -1.4074 9.6511 -10.6095 0 0z","name": "Ninawa"},"7": {"path": "M119.704 109.423c-0.1021,0.0465 -0.1288,0.0457 -0.2281,0.0457 -0.1046,0.3208 -0.062,0.7747 -0.0821,1.1515 -0.0354,0.6605 -0.3288,0.5849 -0.876,0.5849 -0.0456,0.1379 -0.0023,0.5309 -0.0091,0.7128 -0.0346,0.9124 0.0278,0.453 0.657,0.7676 0.3562,0.178 0.3523,0.5763 0.6752,0.7951 0.6084,0.4125 0.9191,0.6173 1.5237,0.0822 0.1681,-0.1487 0.7055,-0.2651 0.9124,-0.137 0.2907,0.1798 0.2545,0.5651 0.4745,0.7585 0.1997,0.6364 1.0663,1.2836 1.6789,1.4713 0.5308,0.1627 1.0409,0.1529 1.5602,0.2742 0.273,0.0638 1.0139,1.4819 1.3595,1.782 0.2739,0.2379 0.4954,0.4626 0.8486,0.5849 0.1887,0.0654 0.6054,0.1868 0.7391,0.3198l0 0.064c-0.3609,0.2868 -0.4928,0.5657 -0.4928,1.051 0,1.0645 0.6811,0.6397 1.3869,0.6397 0.1406,0.2323 -0.0397,0.6885 -0.2098,0.859 -0.3213,0.3218 -1.3593,0.9094 -1.1132,1.4713 0.1421,0.3247 0.6073,0.1645 0.8851,0.1645 0.3543,0 0.5188,0.1525 0.666,0.4478l0.0365 0.4844 0 0c1.1687,0.3745 2.3277,0.3633 3.3669,1.1058 0.3779,0.2699 0.3773,0.5811 0.5931,0.9321 0.2127,0.3457 0.8032,0.549 1.1314,0.7951 0.6109,0.5526 0.9423,0.6958 1.2318,1.4987 0.1461,0.4051 0.0945,0.7384 0.4014,1.0875 0.5505,0.6259 1.063,0.9521 1.7336,1.4256 0.7132,0.5035 0.6399,1.1955 0.8486,1.9283l0.6569 1.0692 0 0 0.5201 -0.2559c0.0619,-0.0774 0.1765,-0.1113 0.2646,-0.1553 0.0325,-0.0029 0.0352,-0.0039 0.0639,-0.0183l6.7246 -0.064 3.8687 -0.1553 0 0c0.1463,-0.4036 0.7646,-0.4297 0.8485,-0.8682 0.0749,-0.3911 -0.5313,-0.7362 -0.6478,-1.0418 -0.0658,-0.1724 -0.1586,-0.691 0.0183,-0.8133 0.1308,-0.0905 0.3675,-0.1065 0.5201,-0.1828l1.9708 -0.8408c0.4949,-0.2111 0.3723,-0.5439 0.3011,-1.0509 -0.0178,-0.0071 -0.0203,-0.0096 -0.0274,-0.0274 -0.3888,-0.0562 -1.1135,-0.681 -1.1679,-1.0693 -0.1092,-0.7799 -0.3217,-1.0664 -0.8029,-1.6723 -0.7535,-0.9489 0.7915,-2.0716 0.9124,-3.1346 0,-0.3565 0.6205,0.1243 0.6205,-0.6946 0,-0.4907 -0.1271,-0.8222 -0.0274,-1.3433 0.216,-1.1293 0.1839,-2.4035 0.7391,-3.4545 0.1635,-0.3097 0.5807,-1.1587 0.4562,-1.4804 -0.2924,-0.7566 -0.403,-0.4984 0.146,-1.1678l0 0c-0.3264,-0.314 -0.6847,-0.5884 -1.1315,-0.6691 -0.4802,-0.0868 -0.7129,-0.4341 -1.1314,-0.6214 -0.9036,-0.4044 -2.0705,-1.0104 -3.1205,-0.8042 -0.6963,0.1368 -1.3732,0.4723 -2.0803,0.1827 -0.23,-0.0941 -0.6047,-0.4935 -0.8212,-0.4935 0,-0.1379 -0.0559,-0.7128 0.1186,-0.7128 0.4778,0 0.463,-0.2122 0.6205,-0.6123 0.1089,-0.0817 0.2134,-0.1753 0.3376,-0.2376 0.0086,-0.0697 0.0821,-0.1075 0.0821,-0.201l-0.0091 -0.0092c-0.3323,0 -0.7613,0.0913 -0.9672,-0.2193 -0.2276,-0.3435 -1.3132,-0.266 -1.2318,-0.4661 0.4408,-1.0822 1.2405,-0.0437 1.9526,-0.6488 0.2139,-0.1817 1.2912,-1.4193 1.0037,-1.5079 -0.4365,-0.1344 -0.4941,0.1461 -0.3559,-0.4204 0.0267,-0.1094 0.2732,-0.7864 0.1643,-0.8224 -0.019,-0.0776 -0.8664,-0.5773 -0.9946,-0.658 -0.5305,-0.3343 -0.2303,-0.5299 -0.4653,-0.9139 -0.1153,-0.1886 -0.4644,-0.2125 -0.5748,-0.4569 -0.1734,-0.3841 0.0509,-0.5879 -0.2555,-0.987 -0.253,-0.5571 -0.4439,-0.3979 -0.3924,-1.0784 0.0148,-0.1961 -0.2506,-0.6457 -0.447,-0.6945l0 0 -0.4106 0.3564c0.0289,0.4645 -1.0202,0.6901 -1.3504,0.7676 -1.4279,0.3353 -0.7203,1.2438 -1.5602,2.0837 -0.6136,0.6136 -1.0921,-0.2861 -1.6241,0.9595 -0.4373,1.0237 -0.7904,2.2674 -1.5967,3.0341 -1.3222,1.2571 -1.1361,0.3565 -2.5001,-0.1463 -0.7856,-0.1773 -1.3246,-0.4686 -2.2263,-0.4934 -0.6142,-0.0169 -1.3021,0.0202 -1.8795,-0.2194 -0.6727,-0.279 -1.7349,-0.9655 -2.2628,-1.4713 -0.7444,-0.7131 -1.7039,-0.5706 -2.6004,-0.7951 -0.5243,0.1016 -1.5382,0.1871 -1.9435,0.5118 -0.5902,0.4727 -0.7994,1.9265 -1.2043,2.6228 -0.4553,0.7832 -1.1455,1.4693 -1.8705,2.0014 -0.1599,0.3085 -0.5845,0.5664 -0.9036,0.6671 -0.974,0.3077 -0.4692,-0.8039 -0.7847,-1.2703 -0.2013,-0.2974 -0.4228,-0.189 -0.6296,0.0183 -0.2493,0.2501 -0.4736,-0.1176 -0.6113,-0.3016l0 0z","name": "Wasit"},"8": {"path": "M125.762 71.4976c0.4194,0.21 0.8462,0.4882 1.3322,0.3198 1.0067,-0.3487 0.9951,-1.352 1.7792,-0.0457 0.6421,1.0696 1.0296,-0.5466 1.4872,-0.0182l0.7756 0.8956c0.1519,0.1753 -0.0726,0.5719 -0.1277,0.7859 -0.1691,0.6557 0.6843,0.1998 0.6843,0.7676 0,0.5248 0.0119,0.8572 0.3467,1.2886 -0.0616,0.4954 0.0698,0.7447 0.1278,1.2063 0.1201,0.06 0.2926,0.3005 0.4379,0.0914 0.2616,-0.3767 0.6902,-0.9738 1.0493,-1.2612 0.3051,-0.2443 0.6831,0.0512 0.9033,-0.1462 0.3613,-0.3237 1.0164,-0.4532 1.25,-0.8407 0.0921,-0.1529 0.0347,-0.4728 0.0822,-0.658 0.0884,-0.3442 0.1795,-0.5717 0.3193,-0.9047 0.2786,-0.661 0.7421,-0.9607 0.8759,-1.6907 0.2094,-1.1429 1.3068,-1.5315 1.8523,-2.4857 0.288,-0.504 -0.6205,-0.247 -0.6205,-0.6946 0,-0.1245 0.4295,-0.405 0.5292,-0.53 0.1672,-0.2095 0.1612,-0.4405 0.3467,-0.6397 0.2326,-0.0976 0.4824,-0.4292 0.584,-0.658 0.1154,-0.2597 0.0078,-0.8485 0.3558,-0.8682 0.3243,-0.0184 0.6927,-0.3107 1.022,-0.3107 0.153,0.6189 -0.1773,1.4864 -0.1095,2.175 0.0818,0.8314 0.3526,2.4684 0.6387,3.2534l0 0c-0.1938,0 0.2259,0.9565 -0.1369,1.2337 -0.1414,0.1081 -0.4407,0.3258 -0.5931,0.3838 -0.4647,0.1771 -0.2157,-0.0194 -0.4197,-0.2924l-0.6934 0.6671c-0.1048,0.1008 0.2965,0.5639 0.0638,0.6397 0,0.1373 0.1278,0.1285 0.1278,0.2925 -0.5217,0.0643 -0.2958,0.339 -0.5019,0.6488 -0.3489,0.5241 -0.2937,0.4099 0.3011,0.7585 0.2656,0.2568 0.1187,0.2843 0.1187,0.5666 0,0.2436 0.1637,0.1715 0.2828,0.3382 0.0794,0.1113 0.2372,0.7535 0.2372,0.8864 0,0.3944 0.0394,0.3954 0.1734,0.7494 0.0852,0.2254 -0.0525,0.4214 -0.0091,0.6488 0.0132,0.0692 0.1741,0.3303 0.0821,0.393 -0.4616,0.3149 -0.532,-0.2644 -0.8394,-0.3381 -0.1235,-0.0296 -0.3043,0.0832 -0.4198,0.1279 -0.1811,0.0702 -0.2751,-0.1786 -0.5839,-0.064 -0.9151,0.3394 -1.1547,-0.091 -1.3413,-0.8499 -0.0653,0 -0.3227,-0.0136 -0.3376,-0.0731 -0.1355,0 -0.3596,0.6734 -0.4562,0.8316 -0.0731,0.1195 0.1901,0.3008 0.2099,0.4753 0.0376,0.3315 -0.0427,0.5459 -0.0639,0.8681 -0.1668,0.4498 -0.3473,0.6441 -0.8212,0.3839 -0.0189,-0.0104 -0.6442,0.3261 -0.7026,0.4021 -0.0337,0.0437 0.3103,0.6642 0.3103,0.8499 0,0.2642 -0.0666,0.5252 0.1095,0.7402 0.1524,0.1862 0.3969,0.9701 0.5748,0.9595 0.1335,-0.008 0.2252,-0.242 0.3832,-0.1279 0.2585,0.1869 0.3647,-0.176 0.6113,0.1279 0.739,0.9105 0.723,1.6495 0.146,2.7325 -0.0099,0.3941 0.1719,1.1562 0.5201,1.3891 0,0.1017 -0.7436,0.3911 -0.8942,0.4843 -0.2645,0.1635 -0.4601,0.3541 -0.6387,0.6123 -0.1759,0.2542 -0.2521,0.262 -0.4471,0.457 -0.1807,0.1807 0.024,0.2852 0.0365,0.4386 0.008,0.0978 -0.1743,0.9494 -0.2281,0.9961 -0.2128,0.1844 -0.4924,-0.0523 -0.5474,0.3108 -0.0777,0.5129 -0.6075,0.204 -0.1734,0.9138 0.1068,0.1746 1.2078,0.0457 1.4599,0.0457l0.0091 0.0092c0.1318,0.5334 0.0925,0.7088 0.6387,1.0509 0.0939,0.2736 0.3497,0.5153 0.4197,0.8133 0.1017,0.4331 0.2763,0.9195 0.6205,1.2246 0.1488,0.132 0.6993,0.4344 0.7482,0.5758 0.0611,0.177 -0.0365,0.4492 -0.0365,0.6488 0,0.9118 1.1062,1.727 1.7883,2.1842 0.3232,0.1273 0.5824,0.004 0.4745,0.4386 -0.0445,0.1796 -0.2646,0.5463 -0.2646,0.6671 0.2268,-0.1695 0.6749,-0.1341 0.8759,-0.3472 0.3687,-0.3911 0.9482,-0.4314 1.5055,-0.4752 0.0756,-0.0059 0.6723,-0.1522 0.5566,0.0913 -0.2694,0.5671 -0.084,0.5277 0.3194,0.9322 0.6285,0.6304 -0.03,0.9744 -0.5566,1.3982 -0.4361,0.3511 -1.0689,0.6231 -0.146,0.658 0.5348,0.0202 0.661,0.2991 1.0128,-0.1371 0.124,-0.1539 0.84,-0.3854 0.958,-0.201 0.1212,0.1892 -0.1599,0.3511 0.1552,0.4295l0 0 -0.4106 0.3564c0.0289,0.4645 -1.0202,0.6901 -1.3504,0.7676 -1.4279,0.3353 -0.7203,1.2438 -1.5602,2.0837 -0.6136,0.6136 -1.0921,-0.2861 -1.6241,0.9595 -0.4373,1.0237 -0.7904,2.2674 -1.5967,3.0341 -1.3222,1.2571 -1.1361,0.3565 -2.5001,-0.1463 -0.7856,-0.1773 -1.3246,-0.4686 -2.2263,-0.4934 -0.6142,-0.0169 -1.3021,0.0202 -1.8795,-0.2194 -0.6727,-0.279 -1.7349,-0.9655 -2.2628,-1.4713 -0.7444,-0.7131 -1.7039,-0.5706 -2.6004,-0.7951 -0.5243,0.1016 -1.5382,0.1871 -1.9435,0.5118 -0.5902,0.4727 -0.7994,1.9265 -1.2043,2.6228 -0.4553,0.7832 -1.1455,1.4693 -1.8705,2.0014 -0.1599,0.3085 -0.5845,0.5664 -0.9036,0.6671 -0.974,0.3077 -0.4692,-0.8039 -0.7847,-1.2703 -0.2013,-0.2974 -0.4228,-0.189 -0.6296,0.0183 -0.2493,0.2501 -0.4736,-0.1176 -0.6113,-0.3016l0 0 -0.1639 -0.7402c-0.0527,-0.2835 -0.1183,-0.5525 -0.2555,-0.8134 -0.1152,-0.2192 -0.5331,-0.319 -0.7573,-0.3929 -0.7697,-0.254 -0.1988,-0.9858 -0.4379,-1.4805l0 0 0.5474 0.0092c0.3982,0.069 1.1275,-0.0321 1.3778,-0.4021 0.295,-0.4359 0.0793,-0.6022 0.1003,-1.0876 0.012,-0.2763 0.0839,-0.5793 0.1186,-0.859 0.0498,-0.4019 0.0694,-0.8613 0,-1.2611 -0.1173,-0.676 -0.2635,-0.7852 -0.9124,-0.8225l-3.6496 -0.2102 0 0 -0.265 -0.393c-0.1769,-0.1987 -0.4196,-0.4331 -0.4745,-0.7036 -0.0543,-0.2671 -0.0794,-0.6702 0.1095,-0.8956 0.1463,-0.1747 0.2892,-0.3172 0.365,-0.5392 0.1346,-0.3676 0.0114,-0.8164 0.2281,-1.0784 0.27,-0.3263 0.7824,0.0574 1.0858,-0.2467 0.1516,-0.1518 0.3167,-2.2154 0.2098,-2.3761 -0.354,-0.5316 -0.7096,-0.8463 -0.3193,-1.5444 0.145,-0.2594 0.8456,-1.7168 1.031,-1.8095 0.015,-0.0608 0.0037,0.0617 0.0091,-0.1096 0.43,-0.9685 -0.4928,-1.0529 -0.958,-1.709 -0.6116,-0.8623 -0.8897,-0.5161 -1.8157,-0.7037 0,-0.5141 0.0019,-1.1988 0.3284,-1.6358 0.3064,-0.4099 0.3634,-1.3554 0.7117,-1.6358 0.3009,-0.2421 0.79,-0.2606 0.9763,-0.53 0.154,-0.2225 0.404,-0.4548 0.511,-0.6946 0.2996,-0.3002 0.9854,-0.4538 0.9854,-0.9321 0,-0.2835 0.0193,-0.8608 -0.0365,-1.1058 -0.0467,-0.2055 -0.3606,-0.0555 -0.2737,-0.4935 0.0811,-0.4083 0.1847,-0.5301 0.3102,-0.8865 0.1792,-0.5084 -0.248,-0.6946 0.0274,-1.1971 0.0553,-0.1008 -0.1292,-0.3466 -0.1095,-0.5209 0.0214,-0.1884 0.463,-0.3275 0.5201,-0.5575 0.0892,-0.3598 -0.437,-0.4873 -0.146,-0.8042 0.2714,-0.2954 -0.4261,-0.7011 0.0912,-0.8042 0.3688,-0.0734 1.0355,-0.0499 1.2592,0.2924 0.1593,0.2439 0.8801,1.0213 1.177,0.9413 0.3432,-0.0924 0.5911,-1.4103 0.7756,-1.7546 0.8228,-0.6695 0.5492,-1.0231 0.4653,-1.9465 -0.0705,-0.7766 0.6128,-0.9512 0.9854,-1.4805 0.3264,-0.4638 0.2862,-0.7066 0.4745,-1.1972 0.2221,-0.5783 0.5619,-0.4124 1.0584,-0.5666l0.7938 -0.2467 0 0z","name": "Diyala"},"9": {"path": "M114.311 102.642l1.36 -1.2794 0 0 3.6496 0.2102c0.6489,0.0373 0.7951,0.1465 0.9124,0.8225 0.0694,0.3998 0.0498,0.8592 0,1.2611 -0.0347,0.2797 -0.1066,0.5827 -0.1186,0.859 -0.021,0.4854 0.1947,0.6517 -0.1003,1.0876 -0.2503,0.37 -0.9796,0.4711 -1.3778,0.4021l-0.5474 -0.0092 0 0c-0.9394,0 -1.6685,0.2674 -2.4544,0.7859 -0.8912,0.5878 -1.7469,0.2366 -2.5913,-0.1553 -0.4529,-0.2101 -1.0879,-0.3972 -1.4781,-0.6946l2.7459 -3.2899z","name": "Baghdad"},"10": {"path": "M120.197 129.62l-1.7154 1.3708 -0.0182 2.3212c0.2746,0.5073 0.5778,1.3094 0.9672,1.6998 0.5555,0.5571 -1.169,1.0384 -1.0493,1.6633 0.0896,0.4683 0.2977,0.7427 0.1186,1.252 -0.0941,0.2675 -0.2704,0.4119 -0.3741,0.6488 -0.104,0.2377 0.085,0.6387 0.1642,0.8773 0.0758,0.5948 0.7654,1.8889 -0.3011,1.7638 -0.3615,-0.0424 -0.8869,0.4643 -0.6752,0.7677l0.9307 1.3342c0.3664,0.5251 0.4526,1.4549 1.1132,1.5993l3.4672 0.7585 0.7938 0.2467 0 0c-0.5083,0.4581 -1.1559,2.0604 -1.3504,2.7234 -0.2833,0.9653 -0.8244,1.9461 -1.5602,2.641 -0.5736,0.5416 -0.5167,1.5622 -0.9125,2.1568 -0.1591,1.0684 -0.2911,2.4585 -1.0675,3.2807 -0.7532,0.7978 -1.1497,1.9279 -1.9343,2.7142 -0.4859,0.4868 -1.1121,1.4077 -1.6789,1.7364 -1.5533,1.4576 -2.2474,3.7499 -3.0293,5.6568 -0.1477,0.3602 -0.3721,1.4362 -0.6295,1.6633 -0.119,0.9057 -0.68,1.8693 -0.8669,2.7873 -0.1418,0.697 -0.6659,1.6353 -1.1679,2.1384 -0.3262,0.3268 -0.4973,0.7629 -0.812,1.0967 -0.4483,0.4753 -0.6892,1.2186 -1.1314,1.7089l-0.5267 1.0497 0 0 -16.4446 -13.825 0 0 0.0552 -7.6588c0.03,-1.2041 0.803,-3.4239 1.7424,-4.2221 0.4244,-0.3605 0.7751,-0.8011 1.2227,-1.1514 0.4613,-0.3612 0.2431,-1.6802 0.3376,-2.2116 0.1101,-0.6266 0.0471,-1.0951 0.2919,-1.7089 0.3055,-0.7656 1.4143,-1.5634 1.4143,-2.3761 0,-1.201 -0.0783,-2.3028 0.7482,-3.2808 0.481,-0.271 1.0487,-1.5784 1.4142,-2.0653 0.6345,-0.845 1.2589,-2.026 2.0074,-2.7416 1.0954,-1.0474 2.1026,-1.1738 3.5037,-1.709 0.172,-0.0638 0.4123,-0.2855 0.5383,-0.4203 0.2464,-0.2638 0.5768,-0.4809 0.8486,-0.722 0.1316,-0.1166 0.2489,-0.2489 0.3832,-0.3564 0.1934,-0.155 0.4,-0.2356 0.6113,-0.3564l0.8851 -0.9779 -1.7701 -1.8825 0 0 9.1612 -3.8109 0 0 0.8481 3.6921 1.1405 -0.064 1.5147 -1.8186 2.792 2.0105 0 0z","name": "An-Najaf"},"11": {"path": "M120.197 129.62c0.3288,0.3294 1.8679,0.7805 2.3358,0.8134 0.5129,0.036 1.2796,0.1303 1.7701,0.0091l0.0092 -1.3982c0.0023,-0.3457 -0.1664,-0.5412 -0.2008,-0.786 -0.0596,-0.4231 1.0691,-0.5391 1.3869,-0.5391 0.8068,0 1.0724,-0.7293 1.5511,-1.3069 0.2745,-0.296 0.5498,-0.1888 0.8577,-0.4021 0.1747,-0.1211 0.2991,-0.4605 0.4197,-0.6488 0.4098,-0.64 1.2179,-1.055 1.7701,-1.5627l0 0c1.1687,0.3745 2.3277,0.3633 3.3669,1.1058 0.3779,0.2699 0.3773,0.5811 0.5931,0.9321 0.2127,0.3457 0.8032,0.549 1.1314,0.7951 0.6109,0.5526 0.9423,0.6958 1.2318,1.4987 0.1461,0.4051 0.0945,0.7384 0.4014,1.0875 0.5505,0.6259 1.063,0.9521 1.7336,1.4256 0.7132,0.5035 0.6399,1.1955 0.8486,1.9283l0.6569 1.0692 0 0c-0.4131,0.6908 0.2929,1.4865 0.5019,2.0837 0.3245,0.9268 0.5383,1.7511 0.5383,2.769 0,0.1596 -0.0091,0.3169 -0.0091,0.4752 0,0.4189 0.0736,0.8154 0.1642,1.2246l0.1643 0.6397 0 0c-0.5437,0 -1.1341,-0.219 -1.6424,-0.3838l-2.2537 -0.7311c-0.4715,-0.1528 -1.0791,-0.4669 -1.5603,-0.4935 -0.8573,-0.1497 -3.8153,-1.6256 -4.3249,-0.6032 -0.173,0.347 -0.4011,0.7995 -0.7938,0.9139 -0.5572,0.1622 -1.3214,-0.0141 -1.9161,0.0365 -0.8296,0.0705 -1.3162,0.0185 -0.3193,0.6489 0.3186,0.2015 1.5713,1.3011 1.1223,1.6815 -0.1937,0.3396 -0.2555,0.7748 -0.4836,1.0784 -0.2606,0.3471 -0.576,0.3025 -0.8121,0.7676 -0.4239,0.8353 -0.4899,2.0216 -0.9854,2.8421 -0.2285,0.3782 -0.7117,1.2178 -0.7117,1.6541 -0.1119,0.0848 -0.6642,-0.1112 -0.8029,-0.1462 -0.1902,-0.7526 -1.5884,-2.026 -2.3176,-2.175l0 0 -0.7938 -0.2467 -3.4672 -0.7585c-0.6606,-0.1444 -0.7468,-1.0742 -1.1132,-1.5993l-0.9307 -1.3342c-0.2117,-0.3034 0.3137,-0.8101 0.6752,-0.7677 1.0665,0.1251 0.3769,-1.169 0.3011,-1.7638 -0.0792,-0.2386 -0.2682,-0.6396 -0.1642,-0.8773 0.1037,-0.2369 0.28,-0.3813 0.3741,-0.6488 0.1791,-0.5093 -0.029,-0.7837 -0.1186,-1.252 -0.1197,-0.6249 1.6048,-1.1062 1.0493,-1.6633 -0.3894,-0.3904 -0.6926,-1.1925 -0.9672,-1.6998l0.0182 -2.3212 1.7154 -1.3708 0 0z","name": "Al-Qadisyyah"},"12": {"path": "M111.565 105.932c0.3902,0.2974 1.0252,0.4845 1.4781,0.6946 0.8444,0.3919 1.7001,0.7431 2.5913,0.1553 0.7859,-0.5185 1.515,-0.7859 2.4544,-0.7859l0 0c0.2391,0.4947 -0.3318,1.2265 0.4379,1.4805 0.2242,0.0739 0.6421,0.1737 0.7573,0.3929 0.1372,0.2609 0.2028,0.5299 0.2555,0.8134l0.1639 0.7402 0 0c-0.1021,0.0465 -0.1288,0.0457 -0.2281,0.0457 -0.1046,0.3208 -0.062,0.7747 -0.0821,1.1515 -0.0354,0.6605 -0.3288,0.5849 -0.876,0.5849 -0.0456,0.1379 -0.0023,0.5309 -0.0091,0.7128 -0.0346,0.9124 0.0278,0.453 0.657,0.7676 0.3562,0.178 0.3523,0.5763 0.6752,0.7951 0.6084,0.4125 0.9191,0.6173 1.5237,0.0822 0.1681,-0.1487 0.7055,-0.2651 0.9124,-0.137 0.2907,0.1798 0.2545,0.5651 0.4745,0.7585 0.1997,0.6364 1.0663,1.2836 1.6789,1.4713 0.5308,0.1627 1.0409,0.1529 1.5602,0.2742 0.273,0.0638 1.0139,1.4819 1.3595,1.782 0.2739,0.2379 0.4954,0.4626 0.8486,0.5849 0.1887,0.0654 0.6054,0.1868 0.7391,0.3198l0 0.064c-0.3609,0.2868 -0.4928,0.5657 -0.4928,1.051 0,1.0645 0.6811,0.6397 1.3869,0.6397 0.1406,0.2323 -0.0397,0.6885 -0.2098,0.859 -0.3213,0.3218 -1.3593,0.9094 -1.1132,1.4713 0.1421,0.3247 0.6073,0.1645 0.8851,0.1645 0.3543,0 0.5188,0.1525 0.666,0.4478l0.0365 0.4844 0 0c-0.5522,0.5077 -1.3603,0.9227 -1.7701,1.5627 -0.1206,0.1883 -0.245,0.5277 -0.4197,0.6488 -0.3079,0.2133 -0.5832,0.1061 -0.8577,0.4021 -0.4787,0.5776 -0.7443,1.3069 -1.5511,1.3069 -0.3178,0 -1.4465,0.116 -1.3869,0.5391 0.0344,0.2448 0.2031,0.4403 0.2008,0.786l-0.0092 1.3982c-0.4905,0.1212 -1.2572,0.0269 -1.7701,-0.0091 -0.4679,-0.0329 -2.007,-0.484 -2.3358,-0.8134l0 0 -2.792 -2.0105 -1.5147 1.8186 -1.1405 0.064 -0.8481 -3.6921 0 0 -0.9489 -2.3212c-0.3973,-0.4702 -0.6506,-0.9636 -1.1223,-1.3982 -0.1975,-0.1821 -0.9129,-1.0048 -0.8942,-1.252 0.0419,-0.5538 0.9786,-1.7558 1.3687,-2.1659 0.4262,-0.4482 0.812,-0.3332 0.812,-0.9413 0,-0.0937 -0.077,-0.6177 -0.1642,-0.6397 -0.0258,-0.1023 -0.9023,-0.2459 -1.0402,-0.265 -0.4038,-0.0559 -0.9436,-0.2602 -1.3504,-0.3747l0 0 -0.0182 -0.5483c0.3999,-0.8021 0.8034,-1.8489 0.9033,-2.7325 0.0912,-0.8063 -0.2007,-1.562 -0.2007,-2.312 0,-0.5284 0.0937,-1.0236 -0.0183,-1.5353 -0.0498,-0.1377 -0.4621,-0.5009 -0.5931,-0.5941 -0.1829,-0.1303 -0.2664,-0.3367 -0.3102,-0.5574 -0.0556,-0.2805 -0.9733,-0.7168 -1.25,-0.6763 -0.3608,0.0529 -0.4147,0.3502 -0.6478,-0.0822 -0.1123,-0.2082 -0.365,-0.8971 -0.365,-1.1149 0,-0.2404 0.0913,-0.4413 0.0913,-0.6763l3.4124 0.3198 0 0z","name": "Babil"},"13": {"path": "M110.562 116.442c0.4068,0.1145 0.9466,0.3188 1.3504,0.3747 0.1379,0.0191 1.0144,0.1627 1.0402,0.265 0.0872,0.022 0.1642,0.546 0.1642,0.6397 0,0.6081 -0.3858,0.4931 -0.812,0.9413 -0.3901,0.4101 -1.3268,1.6121 -1.3687,2.1659 -0.0187,0.2472 0.6967,1.0699 0.8942,1.252 0.4717,0.4346 0.725,0.928 1.1223,1.3982l0.9489 2.3212 0 0 -9.1612 3.8109 0 0 -8.4488 -8.6909 5.0366 -1.1698 5.4383 -2.4126c0.4377,-0.1706 0.8483,-0.4228 1.3139,-0.53 0.5642,-0.13 1.1933,-0.2833 1.7701,-0.2833l0.7116 -0.0823 0 0z","name": "Karbala"},"14": {"path": "M90.506 163.452l0.0552 -7.6588c0.03,-1.2041 0.803,-3.4239 1.7424,-4.2221 0.4244,-0.3605 0.7751,-0.8011 1.2227,-1.1514 0.4613,-0.3612 0.2431,-1.6802 0.3376,-2.2116 0.1101,-0.6266 0.0471,-1.0951 0.2919,-1.7089 0.3055,-0.7656 1.4143,-1.5634 1.4143,-2.3761 0,-1.201 -0.0783,-2.3028 0.7482,-3.2808 0.481,-0.271 1.0487,-1.5784 1.4142,-2.0653 0.6345,-0.845 1.2589,-2.026 2.0074,-2.7416 1.0954,-1.0474 2.1026,-1.1738 3.5037,-1.709 0.172,-0.0638 0.4123,-0.2855 0.5383,-0.4203 0.2464,-0.2638 0.5768,-0.4809 0.8486,-0.722 0.1316,-0.1166 0.2489,-0.2489 0.3832,-0.3564 0.1934,-0.155 0.4,-0.2356 0.6113,-0.3564l0.8851 -0.9779 -1.7701 -1.8825 0 0 -8.4488 -8.6909 5.0366 -1.1698 5.4383 -2.4126c0.4377,-0.1706 0.8483,-0.4228 1.3139,-0.53 0.5642,-0.13 1.1933,-0.2833 1.7701,-0.2833l0.7116 -0.0823 0 0 -0.0182 -0.5483c0.3999,-0.8021 0.8034,-1.8489 0.9033,-2.7325 0.0912,-0.8063 -0.2007,-1.562 -0.2007,-2.312 0,-0.5284 0.0937,-1.0236 -0.0183,-1.5353 -0.0498,-0.1377 -0.4621,-0.5009 -0.5931,-0.5941 -0.1829,-0.1303 -0.2664,-0.3367 -0.3102,-0.5574 -0.0556,-0.2805 -0.9733,-0.7168 -1.25,-0.6763 -0.3608,0.0529 -0.4147,0.3502 -0.6478,-0.0822 -0.1123,-0.2082 -0.365,-0.8971 -0.365,-1.1149 0,-0.2404 0.0913,-0.4413 0.0913,-0.6763l3.4124 0.3198 0 0 2.7459 -3.2899 0 0 -1.2135 -1.5901c-0.2411,-0.2632 -0.5015,-0.6908 -0.7299,-0.987 -0.2033,-0.2637 -0.5139,-0.4731 -0.7391,-0.7219 -0.5148,-0.5688 -0.6338,-0.7526 -0.6113,-1.5262 0.0143,-0.4901 -0.1625,-0.606 -0.3924,-0.9961 -0.3375,-0.5724 -0.5831,-0.6104 -1.1765,-0.7951l-4.5986 -0.0365 -1.2229 -0.9139 -5.4928 0 -7.7738 -9.7236 0.0182 -6.1046 -2.6642 3.0706 -5.8395 -4.0028 -0.4927 -7.9506 0 0 -8.8875 0.1005 -3.8322 -1.2154c-0.489,-0.1966 -1.9201,-0.5846 -2.2263,-1.0144 -0.8084,-0.2015 -1.7486,0.0048 -2.6004,-0.1005 -0.0507,-0.0405 -0.1489,-0.0666 -0.1734,-0.128 -0.3988,-0.2498 -0.7649,-0.8062 -1.1679,-1.1149 -0.4167,-0.3193 -1.0228,-0.5255 -1.5055,-0.722l-0.8248 -0.3194 0 0 0.2688 7.4385 -1.8796 2.6867 -2.4824 5.5381 -6.1439 1.9129 -32.8881 20.0199 0 0 5.2257 18.5888 -1.7046 0.3831 1.0767 3.7286 3.7044 -1.1515 0.7117 2.632 -1.6887 1.6632 0 0 20.6573 4.2038 0.9614 0.1338 18.3004 12.0572 11.4601 5.3553 14.7625 12.4109 0 0z","name": "Al-Anbar"},"15": {"path": "M165.453 151.479l-0.0091 5.8854 -0.5932 2.6684c-0.0522,0.2551 -0.2463,0.4326 -0.2463,0.6855 0,0.8395 0.3194,1.602 0.3194,2.44l-0.0183 0.0091c-0.0219,0.0671 -0.2542,-0.0589 -0.2919,-0.0822 -0.3278,-0.2033 -0.6957,-0.3292 -1.0402,-0.5118 -0.2032,-0.1078 -0.3797,-0.2546 -0.5931,-0.3564 -0.1746,-0.0834 -0.3946,-0.1322 -0.5566,-0.2193l-6.7519 2.4217 0 0 0.292 2.9061c0.1052,1.0482 0.763,2.0102 1.3321,2.8513 0.6738,1.0344 0.9124,2.0358 0.9124,3.2534 0,0.997 -0.0652,2.3344 -0.3558,3.2807l-1.2318 5.2365c-0.4309,0.9199 -0.7038,1.9957 -0.5748,3.0066 0.098,0.7688 0.0988,1.5953 -0.0274,2.3578 -0.0725,0.4376 -0.4319,0.7409 -0.584,1.1515 -0.2386,0.6436 -0.2984,1.1336 -0.3558,1.8277l0.0511 2.1816 0 0 0.1223 -0.0431 0 0 1.0219 -1.2246c0.4279,-0.4867 0.9857,-0.7778 1.3504,-1.3434 0.4638,-0.7195 0.9947,-1.4039 1.3777,-2.175 0.1946,-0.62 0.7632,-1.0096 1.2044,-1.4256 0.5611,-0.5292 1.0662,-1.6513 1.3048,-2.3852 0.3243,-0.9978 1.0336,-1.625 1.4599,-2.5314 0.2076,-0.4947 0.3285,-1.0143 0.3285,-1.5536 0,-0.6199 0.8541,-1.5675 1.0949,-2.1567 0.4087,-1.0003 0.8848,-2.0542 1.1496,-3.1163 0.7263,-0.4455 0.5627,-1.0391 1.5694,-1.1881 0.5172,-0.0766 1.0564,-0.4046 1.5055,-0.6762 0.8917,-0.5393 0.935,-0.8146 2.0712,-0.7951l5.3103 0.0914 4.5987 2.4035 0 0c0.8361,-1.2246 1.4959,-1.2524 2.865,-1.0053 0.6548,0.1182 1.2383,0.2292 1.8614,0.4844 0.9042,0.2583 1.6695,1.1473 2.4544,1.6541 0.3863,0.2495 1.2768,0.1553 1.7519,0.1553 0.2003,0 0.2928,-0.1462 0.4653,-0.1462 0.2109,0 0.5625,0.2198 0.8303,0.2559 0.2092,0.0281 0.3127,-0.3109 0.3011,-0.4661 -0.0109,-0.1447 -1.7336,-0.5362 -1.7336,-1.0327l0 0c-0.2009,-0.2437 -0.387,-0.5006 -0.6025,-0.7311 -0.3984,-0.4262 0.2683,-1.1175 -0.6204,-1.6449 -0.8411,-0.4991 -0.3467,-1.2779 -0.3467,-2.0288 0,-1.1 -3.0123,-2.4873 -3.6862,-3.162 -0.9131,-0.9143 -0.7351,-1.9992 -2.3906,-2.2847 -0.1302,-0.0224 -0.2564,-0.0463 -0.3964,-0.0749l0.1227 -10.8549 -6.1862 -0.0549 0.014 -4.2678 0 0c-0.4512,0 -1.1371,-0.0368 -1.5741,-0.1553 -0.3134,-0.085 -0.6251,-0.2825 -0.9398,-0.3472 -1.9628,-0.984 -4.4015,-0.5649 -6.2501,0.4295 -0.5423,0.2916 -0.7214,0.9144 -1.104,1.3251l0.0182 1.0783 0 0z","name": "Al-Basrah"},"16": {"path": "M123.618 145.923c0.7292,0.149 2.1274,1.4224 2.3176,2.175 0.1387,0.035 0.691,0.231 0.8029,0.1462 0,-0.4363 0.4832,-1.2759 0.7117,-1.6541 0.4955,-0.8205 0.5615,-2.0068 0.9854,-2.8421 0.2361,-0.4651 0.5515,-0.4205 0.8121,-0.7676 0.2281,-0.3036 0.2899,-0.7388 0.4836,-1.0784 0.449,-0.3804 -0.8037,-1.48 -1.1223,-1.6815 -0.9969,-0.6304 -0.5103,-0.5784 0.3193,-0.6489 0.5947,-0.0506 1.3589,0.1257 1.9161,-0.0365 0.3927,-0.1144 0.6208,-0.5669 0.7938,-0.9139 0.5096,-1.0224 3.4676,0.4535 4.3249,0.6032 0.4812,0.0266 1.0888,0.3407 1.5603,0.4935l2.2537 0.7311c0.5083,0.1648 1.0987,0.3838 1.6424,0.3838l0 0c0.3286,0.3898 0.4386,0.5572 0,0.8499 -0.432,0.2884 -0.1095,0.8627 -0.1095,1.252 0,0.8221 -0.2871,1.4774 -0.4745,2.2664 -0.0302,0.3456 -0.2723,0.5926 -0.3193,0.9138 -0.0264,0.181 -0.1534,0.7255 0.0821,0.8042 0.1266,0.0422 0.2772,-0.4031 0.4744,-0.1827 0.2767,0.3095 -0.276,0.8695 -0.3741,1.124 -0.506,1.3133 1.134,3.1928 -0.2737,4.2495 -0.411,0.5728 -0.3619,0.9718 -0.6204,1.5536 -0.3313,0.7454 -0.8025,0.4945 -1.2592,0.859 -0.0036,0.0262 -0.008,0.0355 -0.0274,0.0549 0,0.7611 -0.1587,2.1413 0.1734,2.8055 2.2243,1.0146 5.0953,0.9139 7.5458,1.0053 0.7267,0.2019 1.4957,0.3655 2.2537,0.3655 0.9282,0 1.984,0.5332 2.6825,1.115 0.3584,0.2984 0.7601,0.6089 1.0493,0.9869 0.2906,0.38 0.4902,0.8706 0.7847,1.2246 0.0748,0.5852 1.0292,1.9733 1.5055,2.3578 0.1826,0.1476 0.4818,0.077 0.7117,0.0914l0.4471 -0.1097 0 0 0.292 2.9061c0.1052,1.0482 0.763,2.0102 1.3321,2.8513 0.6738,1.0344 0.9124,2.0358 0.9124,3.2534 0,0.997 -0.0652,2.3344 -0.3558,3.2807l-1.2318 5.2365c-0.4309,0.9199 -0.7038,1.9957 -0.5748,3.0066 0.098,0.7688 0.0988,1.5953 -0.0274,2.3578 -0.0725,0.4376 -0.4319,0.7409 -0.584,1.1515 -0.2386,0.6436 -0.2984,1.1336 -0.3558,1.8277l0.0511 2.1816 0 0 -2.2986 0.8108 -30.2079 -2.8309 -15.6726 -13.1762 0 0 0.5267 -1.0497c0.4422,-0.4903 0.6831,-1.2336 1.1314,-1.7089 0.3147,-0.3338 0.4858,-0.7699 0.812,-1.0967 0.502,-0.5031 1.0261,-1.4414 1.1679,-2.1384 0.1869,-0.918 0.7479,-1.8816 0.8669,-2.7873 0.2574,-0.2271 0.4818,-1.3031 0.6295,-1.6633 0.7819,-1.9069 1.476,-4.1992 3.0293,-5.6568 0.5668,-0.3287 1.193,-1.2496 1.6789,-1.7364 0.7846,-0.7863 1.1811,-1.9164 1.9343,-2.7142 0.7764,-0.8222 0.9084,-2.2123 1.0675,-3.2807 0.3958,-0.5946 0.3389,-1.6152 0.9125,-2.1568 0.7358,-0.6949 1.2769,-1.6757 1.5602,-2.641 0.1945,-0.663 0.8421,-2.2653 1.3504,-2.7234l0 0z","name": "Al-Muthanna"},"17": {"path": "M140.06 133.641l0.5201 -0.2559c0.0619,-0.0774 0.1765,-0.1113 0.2646,-0.1553 0.0325,-0.0029 0.0352,-0.0039 0.0639,-0.0183l6.7246 -0.064 3.8687 -0.1553 0 0c0.1202,0.1861 0.2307,0.3072 0.2007,0.5209 -0.2216,0.1769 -0.5414,0.3451 -0.7847,0.4661 -0.0045,0.0183 -0.0091,0.0241 -0.0091,0.0457 0.476,0.2973 0.8841,0.8577 1.25,1.2977 0.2197,0.2641 0.4076,0.5606 0.5566,0.8681 0.1957,0.4037 0.2361,0.8306 0.4106,1.2246 -0.097,0.3668 -0.2101,1.8717 0.0456,2.1476 0.1728,0.1864 0.3313,0.2286 0.5019,0.4661 0.3374,0.4699 0.6379,0.1839 0.8394,0.8407 0.18,0.5867 0.8423,1.1041 1.3139,1.5353 0.6142,0.5614 0.3355,1.4218 0.1277,2.0745 -0.4442,1.3787 0.9951,1.6251 1.8796,2.1476 0.8425,0.4976 1.0676,0.4266 1.0676,1.4531 0,0.2347 -0.1295,0.3922 -0.1643,0.6305 -0.0223,0.1524 0.0635,1.1066 0.1278,1.2155 0.1275,0.2161 0.5099,0.3495 0.6752,0.6031 0.2468,0.3784 0.4049,0.901 0.9033,0.9047l2.3814 0.0183 2.6278 0.0274 0 0 -0.0091 5.8854 -0.5932 2.6684c-0.0522,0.2551 -0.2463,0.4326 -0.2463,0.6855 0,0.8395 0.3194,1.602 0.3194,2.44l-0.0183 0.0091c-0.0219,0.0671 -0.2542,-0.0589 -0.2919,-0.0822 -0.3278,-0.2033 -0.6957,-0.3292 -1.0402,-0.5118 -0.2032,-0.1078 -0.3797,-0.2546 -0.5931,-0.3564 -0.1746,-0.0834 -0.3946,-0.1322 -0.5566,-0.2193l-6.7519 2.4217 0 0 -0.4471 0.1097c-0.2299,-0.0144 -0.5291,0.0562 -0.7117,-0.0914 -0.4763,-0.3845 -1.4307,-1.7726 -1.5055,-2.3578 -0.2945,-0.354 -0.4941,-0.8446 -0.7847,-1.2246 -0.2892,-0.378 -0.6909,-0.6885 -1.0493,-0.9869 -0.6985,-0.5818 -1.7543,-1.115 -2.6825,-1.115 -0.758,0 -1.527,-0.1636 -2.2537,-0.3655 -2.4505,-0.0914 -5.3215,0.0093 -7.5458,-1.0053 -0.3321,-0.6642 -0.1734,-2.0444 -0.1734,-2.8055 0.0194,-0.0194 0.0238,-0.0287 0.0274,-0.0549 0.4567,-0.3645 0.9279,-0.1136 1.2592,-0.859 0.2585,-0.5818 0.2094,-0.9808 0.6204,-1.5536 1.4077,-1.0567 -0.2323,-2.9362 0.2737,-4.2495 0.0981,-0.2545 0.6508,-0.8145 0.3741,-1.124 -0.1972,-0.2204 -0.3478,0.2249 -0.4744,0.1827 -0.2355,-0.0787 -0.1085,-0.6232 -0.0821,-0.8042 0.047,-0.3212 0.2891,-0.5682 0.3193,-0.9138 0.1874,-0.789 0.4745,-1.4443 0.4745,-2.2664 0,-0.3893 -0.3225,-0.9636 0.1095,-1.252 0.4386,-0.2927 0.3286,-0.4601 0,-0.8499l0 0 -0.1643 -0.6397c-0.0906,-0.4092 -0.1642,-0.8057 -0.1642,-1.2246 0,-0.1583 0.0091,-0.3156 0.0091,-0.4752 0,-1.0179 -0.2138,-1.8422 -0.5383,-2.769 -0.209,-0.5972 -0.915,-1.3929 -0.5019,-2.0837l0 0z","name": "Dhi Qar"},"18": {"path": "M155.362 114.15c-0.549,0.6694 -0.4384,0.4112 -0.146,1.1678 0.1245,0.3217 -0.2927,1.1707 -0.4562,1.4804 -0.5552,1.051 -0.5231,2.3252 -0.7391,3.4545 -0.0997,0.5211 0.0274,0.8526 0.0274,1.3433 0,0.8189 -0.6205,0.3381 -0.6205,0.6946 -0.1209,1.063 -1.6659,2.1857 -0.9124,3.1346 0.4812,0.6059 0.6937,0.8924 0.8029,1.6723 0.0544,0.3883 0.7791,1.0131 1.1679,1.0693 0.0071,0.0178 0.0096,0.0203 0.0274,0.0274 0.0712,0.507 0.1938,0.8398 -0.3011,1.0509l-1.9708 0.8408c-0.1526,0.0763 -0.3893,0.0923 -0.5201,0.1828 -0.1769,0.1223 -0.0841,0.6409 -0.0183,0.8133 0.1165,0.3056 0.7227,0.6507 0.6478,1.0418 -0.0839,0.4385 -0.7022,0.4646 -0.8485,0.8682l0 0c0.1202,0.1861 0.2307,0.3072 0.2007,0.5209 -0.2216,0.1769 -0.5414,0.3451 -0.7847,0.4661 -0.0045,0.0183 -0.0091,0.0241 -0.0091,0.0457 0.476,0.2973 0.8841,0.8577 1.25,1.2977 0.2197,0.2641 0.4076,0.5606 0.5566,0.8681 0.1957,0.4037 0.2361,0.8306 0.4106,1.2246 -0.097,0.3668 -0.2101,1.8717 0.0456,2.1476 0.1728,0.1864 0.3313,0.2286 0.5019,0.4661 0.3374,0.4699 0.6379,0.1839 0.8394,0.8407 0.18,0.5867 0.8423,1.1041 1.3139,1.5353 0.6142,0.5614 0.3355,1.4218 0.1277,2.0745 -0.4442,1.3787 0.9951,1.6251 1.8796,2.1476 0.8425,0.4976 1.0676,0.4266 1.0676,1.4531 0,0.2347 -0.1295,0.3922 -0.1643,0.6305 -0.0223,0.1524 0.0635,1.1066 0.1278,1.2155 0.1275,0.2161 0.5099,0.3495 0.6752,0.6031 0.2468,0.3784 0.4049,0.901 0.9033,0.9047l2.3814 0.0183 2.6278 0.0274 0 0 -0.0182 -1.0783c0.3826,-0.4107 0.5617,-1.0335 1.104,-1.3251 1.8486,-0.9944 4.2873,-1.4135 6.2501,-0.4295 0.3147,0.0647 0.6264,0.2622 0.9398,0.3472 0.437,0.1185 1.1229,0.1553 1.5741,0.1553l0 0 0.0135 -4.0666 3.1297 -7.6948c0.1436,-0.3176 0.1733,-0.7101 -0.1004,-0.9687 -0.3373,-0.3189 -0.7493,-0.4132 -0.9763,-0.8682 0.0384,-0.0064 0.0106,0.0083 0,0.0457 0.0267,-0.121 0.2402,-0.466 0.1825,-0.5666 -0.0854,-0.1486 -0.3913,0.0567 -0.4562,-0.3016 -0.0914,-0.5052 -0.6178,-0.2766 -0.7847,-0.8224 -0.081,-0.2652 -0.2793,-0.5118 -0.3467,-0.7677 -0.0561,-0.2134 -0.1185,-0.826 -0.2281,-0.9778 -0.1325,-0.1833 -0.4651,0.0739 -0.6022,-0.2011 -0.1198,-0.2401 -0.1698,-0.3526 -0.3285,-0.5666 -0.1717,-0.2316 0.1868,-0.5057 -0.0548,-0.6762l-0.8668 -0.6123c-0.4558,-0.3219 -0.5969,0.4621 -0.8942,-0.3382 -0.0797,-0.2144 -0.319,-0.2227 -0.4379,-0.4386 -0.1088,-0.4756 0.2725,-0.6128 0.5657,-0.8316 0.2011,-0.1502 0.0912,-0.5676 0.0912,-0.8042 -0.4842,-0.1223 -0.7388,-0.3564 -0.9763,-0.8043 -0.2597,-0.49 0.4726,-0.348 0.1825,-0.8224 -0.1004,-0.1641 -0.8154,-0.0897 -1.0037,-0.2102 -0.0882,-0.0565 -0.0088,-0.2717 -0.0729,-0.3838 -0.0777,-0.1361 -0.447,-0.324 -0.365,-0.4478 0.2903,-0.4378 0.824,-0.6033 0.1004,-1.0784 -0.4074,-0.2721 -0.8716,-1.4212 -1.2957,-1.3617 -0.4328,0.0608 -1.5913,-0.4323 -1.6332,-0.4021 -0.289,0.2088 -0.3841,0.5829 -0.7756,0.658 -2.2778,0.4372 -4.0861,-2.2622 -5.7483,-3.3722 -0.5729,-0.3503 -1.1445,-0.8738 -1.4964,-1.4439 -0.2593,-0.4203 -0.7374,-0.375 -0.885,-0.859 -0.0872,-0.2858 -0.395,-0.4443 -0.5931,-0.658 -0.4187,-0.4518 -0.2114,-0.5109 -0.8486,-0.6854 -0.4109,-0.1126 -1.2475,-0.4197 -1.5055,-0.7676 -0.2374,-0.3203 -0.5014,-0.5594 -0.8303,-0.8043 -0.0332,-0.0331 -0.0666,-0.0661 -0.1003,-0.0985l0 0z","name": "Maysan"}},"height": 300,"width": 306});

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