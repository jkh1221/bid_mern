import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer class="g-footer">
            <div class="social-share">
                <div class="container">
                    <div class="row">
                        <div class="col-12 nav justify-content-end align-center">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//luxurygrandbid.com/" target="_blank">
                                        <i class="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/share?url=https://luxurygrandbid.com/&amp;text=Online Auctions ..." target="_blank">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/share?url=https://luxurygrandbid.com/" target="_blank">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://luxurygrandbid.com/" target="_blank">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://www.reddit.com/submit?url=https://luxurygrandbid.com/&amp;title=Grandbid Auctions"
                                        onclick="window.open(this.href, 'redditwindow','left=20,top=20,width=600,height=700,toolbar=0,resizable=1'); return false;"
                                        title="reddit Share"
                                        target="_blank"
                                    >
                                        <i class="fa fa-reddit"></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="http://digg.com/submit?url=http://www.luxurygrandbid.com/&amp;title=keyword1, keyword2, keyword3"
                                        onclick="window.open(this.href, 'diggwindow','left=20,top=20,width=600,height=700,toolbar=0,resizable=1'); return false;"
                                    >
                                        <i class="fa fa-digg"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-links padding-large">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <h4 class="g-footer-title">Menu</h4>
                            <div class="g-footer-links">
                                <div class="menu-navbar-container">
                                    <ul id="" class="menu two-cols">
                                        <li class="menu-item">
                                            <a href="result">Buy</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="register">Sell</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="service">Service Provider</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <h4 class="g-footer-title">All about GrandBid</h4>
                            <div class="g-footer-links">
                                <ul class="menu">
                                    <li class="menu-item">
                                        <a href="page?pagelink=15">About</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="page?pagelink=16">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <h4 class="g-footer-title">Information</h4>
                            <div class="g-footer-links">
                                <ul class="menu">
                                    <li class="menu-item">
                                        <a href="page?pagelink=17">FAQ</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="Contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
