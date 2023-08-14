
import CarouselSlide from "./CarouselSlide";
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

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
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
            style = {{opacity: "0.2"}}
            alt='...'
          >
            <div style={{ marginBottom:"100px"}}>
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
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            style = {{opacity: "0.2"}}
            alt='...'
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
            style = {{opacity: "0.2"}}
            alt='...'
          >
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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