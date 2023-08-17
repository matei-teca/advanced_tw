
import CarouselSlide from "./CarouselSlide";
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Navbar from "react-bootstrap/Navbar";
import CarouselNavbar1 from "./CarouselNavbar1.jsx";
import CarouselNavbar2 from "./CarouselNavbar2.jsx";


export default function WelcomeCard({ searchNames }) {
  return (
    !searchNames && (

      //       This app can help you track your daily diet goal. Search for a food
      //       by it's name or barcode and enjoy it!

      <div className="welcome-message--container">

      <div className="carousel--container">
      <MDBCarousel showIndicators>
          <MDBCarouselItem
            className='d-block'
            itemId={1}
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            style = {{height: "80vh", opacity: "1", paddingTop: "5vh"}}
            alt='...'
          >
            <div style={{ marginBottom:"20%", color: "white"}}>
              <h5>Welcome</h5>
              <p>          
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              porttitor nunc. Integer condimentum, justo nec bibendum euismod,
              orci massa suscipit purus, in placerat lectus lacus a ligula. Donec
              sodales, felis nec semper sagittis, purus neque tempor nisl, ac
              pharetra metus tellus vel elit.
              </p> 
              
              <p>Sed ultrices, nunc nec tincidunt
              varius, sapien nibh facilisis odio, elementum faucibus augue nisi
              vel massa. Ut tempus vitae enim eu congue. Vivamus sodales, orci ac
              condimentum aliquet, magna sapien eleifend orci, vel suscipit lectus
              risus pellentesque neque. Ut velit augue, commodo non scelerisque
              consectetur, tempus id diam. Suspendisse sed nulla in ante fermentum
              elementum quis non libero.
              </p>
            </div>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='d-block'
            itemId={2}
            src='https://images.squarespace-cdn.com/content/v1/639f3fb4cb41156603ac38af/0725b12a-98ee-4d22-a878-91381ce2fbfb/planet-earth.png'
            // src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            style = {{maxHeight: "80vh", opacity: "1", borderRadius:"5%"}}
            alt='...'
          >
              <div className="carousel-navbar1--container">
                  <CarouselNavbar1 />
              </div>

              <div style={{ marginBottom:"-14px"}}>
              <h5>Explore any products for your diet</h5>
              </div>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            style = {{maxHeight: "80vh", opacity: "0.6"}}
            alt='...'
          >
              <div style={{ marginBottom:"55%"}}>
                  <h5>Login or Sign Up!</h5>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                      porttitor nunc. Integer condimentum, justo nec bibendum euismod,
                      orci massa suscipit purus, in placerat lectus lacus a ligula. Donec
                      sodales, felis nec semper sagittis, purus neque tempor nisl, ac
                      pharetra metus tellus vel elit.
                  </p>

                  <div className="carousel-navbar2--container">
                      <CarouselNavbar2 />
                  </div>

              </div>
          </MDBCarouselItem>
        </MDBCarousel>
        </div>
       
        </div>
        )
    )
}

      //   <div className="welcome-message">
      //   Testing
      //   Welcome! 
      //   <p>
          // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          // porttitor nunc. Integer condimentum, justo nec bibendum euismod,
          // orci massa suscipit purus, in placerat lectus lacus a ligula. Donec
          // sodales, felis nec semper sagittis, purus neque tempor nisl, ac
          // pharetra metus tellus vel elit. Sed ultrices, nunc nec tincidunt
          // varius, sapien nibh facilisis odio, elementum faucibus augue nisi
          // vel massa. Ut tempus vitae enim eu congue. Vivamus sodales, orci ac
          // condimentum aliquet, magna sapien eleifend orci, vel suscipit lectus
          // risus pellentesque neque. Ut velit augue, commodo non scelerisque
          // consectetur, tempus id diam. Suspendisse sed nulla in ante fermentum
          // elementum quis non libero. 
      //     </p>

      //     <p>
      //     Sed porttitor sodales lectus quis
      //     lobortis. In hac habitasse platea dictumst. Aliquam massa velit,
      //     congue in varius et, blandit a libero. In ac molestie diam. In in
      //     dui eget sapien imperdiet condimentum. Aenean ac sem finibus,
      //     imperdiet ipsum vel, semper arcu. Sed maximus eget metus a congue.
      //     Praesent nec odio erat. Integer gravida non enim facilisis maximus.
      //     Praesent nec volutpat sapien.
      //   </p>
      // </div> 