import React from 'react'

export default function Footer() {
    return (
        <footer>
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-4">
              <h1>TRAVSO</h1>
              <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              <a href=""><i class="fab fa-youtube mr-3 mt-2"></i></a>
              <a href=""><i class="fab fa-instagram  mr-3"></i></a>
              <a href=""><i class="fab fa-twitter  mr-3"></i></a>
              <a href=""><i class="fab fa-facebook-f  mr-3"></i></a>
            </div>
            <div class="col-lg-3 contact-us pt-4">
              <h4 class="mb-4">Contact Us</h4>
              <ul>
                <li><a href=""> <span><i class="fas fa-map-marked-alt mr-2"></i></span>Travso 12, Barker St. Newyork. NY 10005</a><br/>
                </li>
                <li><a href=""> <span><i class="fas fa-phone mr-2"></i></span>Call Us 774302093</a>
                </li>
                <li><a href=""> <span><i class="far fa-envelope mr-2"></i></span>support@travso.com</a>
                </li>
              </ul> 
            </div>
            <div class="col-lg-2 quick pt-4">
              <h4 class="mb-4">Quick Links</h4>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Hot Places</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Contact</a></li>
              </ul> 
            </div>
            <div class="col-lg-3 gallery pt-4">
              <h4 class="mb-4">Instagram Gallery</h4>
                <div class="row">
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/jogja.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/malang.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/jogja.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/malang.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/komodo.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col p-1">
                    <a href="">
                      <img src="assets/img/malang.png" alt="" class="img-fluid"/>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
