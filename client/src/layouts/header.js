import React, { useEffect, useState } from 'react';
import '../Assets/css/grandbid.css';
import '../Assets/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import $ from 'jquery';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
		href=""
		style={{color: 'white'}}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const Header = () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;
	const [categories, setCats] = useState([]);

	useEffect(function() {
		axios.get('/api/category/findAll').then(res => {
			setCats(res.data);
		});
		window.addEventListener('scroll', () => {
			var scroll = $(window).scrollTop();
			if ($(window).width() > 767) {
				if (scroll >= 48) {
					$("body").addClass("g-fixed");
				} else {
					$("body").removeClass("g-fixed");
				}
			}
		});
	}, []);

	return (
		<header className="g-header">
			<div className="extra-navigation">
					<div className="container-fluid">
						<div className="nav justify-content-end">
								<div className="form-inline">
									<div className="section-top">
											<form method="post" id="CurrrencyForm">
												<div className="btn-group bootstrap-select" style={{width: 73.85}}>
														<Dropdown>
															<Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
																<img src="images/flags/UAE.jpg" width="25" /> <font size="-1">AED</font><span className="glyphicon glyphicon-ok check-mark"></span>
															</Dropdown.Toggle>

															<Dropdown.Menu>
																<Dropdown.Item href=""><img src="images/flags/UAE.jpg" width="25" /> <font size="-1">AED</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/Armenia.jpg" width="25" /> <font size="-1">AMD</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/Australia.jpg" width="25" /> <font size="-1">AUD</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/euro.jpg" width="25" /> <font size="-1">EUR</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/United_Kingdom.jpg" width="25" /> <font size="-1">GBP</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/Antigua_and_Barbuda.jpg" width="25" /> <font size="-1">XCD</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
																<Dropdown.Item href=""><img src="images/flags/Benin.jpg" width="25" /> <font size="-1">XOF</font><span className="glyphicon glyphicon-ok check-mark"></span></Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
												</div>
											</form>
											&nbsp;&nbsp;&nbsp;
											<div className="nav-registration"> <a href="login">Login</a> / <a href="register"> Request An Account</a> </div>
									</div>
									<div id="header_search_form">
											<form role="search" method="post" action="result"> 
												<input type="text" className="search" placeholder="Search items... " value="" name="search_key" title="search" /> 
												<i className="fa fa-search" id="header_search"></i> 
											</form>
									</div>
								</div>
						</div>
					</div>
			</div>
			<div id="myHeader">
					<nav className="navbar navbar-expand-md navbar-light bg-faded">
						<div className="container">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs4navbar" aria-controls="bs4navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> <a className="navbar-brand" href="./"> <img src="images/logo/gb-dark.png" /> </a>
								<div className="mobile-controller" hidden>
									<div className="mobile-search align-center">
											<div id="header_search_form">
												<form role="search" method="post" action="result" id="searchFormMobile"> <input type="text" className="search" placeholder="Search items... " value="" name="search_key" title="search" /> <i className="fas fa-search" id="header_search" onclick="searchFormMobile()"></i> </form>
											</div>
											<i className="fas fa-times" onclick="togglemobileSearch()"></i> 
									</div>
									<i className="fas fa-search" onclick="togglemobileSearch()"></i> <i className="far fa-bookmark" onclick="openCat()"></i> 
								</div>
								<div className="mobile-login" hidden>
									<div className="nav-registration"> <a href="login">Login</a> / <a href="register"> Request An Account</a></div>
								</div>
								<div className="col-sm-8">
									<div className="nav justify-content-end align-center">
											<div id="bs4navbar" className="collapse navbar-collapse">
												<ul id="menu-navbar" className="navbar-nav ml-auto">
														<li className="menu-item nav-item dropdown">
															<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">GrandBid</a> 
															<div className="dropdown-menu dropdown-menu-right animated fadeInUp animation-dur-05" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="listing-add">Sell old</a><a className="dropdown-item" href="page?pagelink=About">About</a><a className="dropdown-item" href="page?pagelink=Careers">Careers</a><a className="dropdown-item" href="page?pagelink=FAQ">FAQ</a><a className="dropdown-item" href="Contact">Contact</a></div>
														</li>
														<li id="menu-item-2" className="menu-item nav-item"><a href="result" className="nav-link">Buy</a></li>
														<li id="menu-item-3" className="menu-item nav-item"><a href="register" className="nav-link">Sell</a></li>
														<li id="menu-item-4" className="menu-item nav-item"><a href="service" className="nav-link">Service Provider</a></li>
												</ul>
											</div>
									</div>
								</div>
						</div>
					</nav>
					<div className="category_slider">
						<div className="container">
						<ItemsCarousel
							requestToChangeActive={setActiveItemIndex}
							activeItemIndex={activeItemIndex}
							numberOfCards={8}
							gutter={20}
							leftChevron={<span className="fa fa-caret-left slide-prev"></span>}
							rightChevron={<span className="fa fa-caret-right slide-next"></span>}
							outsideChevron
							infiniteLoop
							chevronWidth={chevronWidth}
						>
							{categories.map(item => 
								<a class="g-category-item" href={``} style={{display: 'inline-block', width: '100%'}}>
									<img class="category-img" src={`images/categories_images/${item.inActive_image}`} />
									<img class="category-img active" src={`images/categories_images/${item.inActive_image}`} />
									<span class="category-name">
											{item.name}
									</span>
									<span class="category-post-count">
											0
									</span>
								</a>
							)}
						</ItemsCarousel>
								<ul id="category-slick" hidden className="slick-initialized slick-slider">
								</ul>
						</div>
					</div>
			</div>
		</header>
	);
}

export default Header;
