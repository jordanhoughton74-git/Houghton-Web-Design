import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel(){
  return(
    <Carousel>
      <Carousel.Item align="center">
      <picture>
      <source className="d-block mx-auto" media="(max-width: 523px)" srcSet="/images/ReactSmall.png"/>
      <source media="(min-width: 523px)" srcSet="/images/ReactLogoHoughtonWebDesign.png"/>
        <img
          className="d-block mx-auto"
          max-width="100%"
          max-height="100%"
          src="/images/ReactLogoHoughtonWebDesign.png"
          alt="Houghton web design uses React Logo"
          align="center"
          title="Logo of React that is used in house by Houghton Web Design"

        />
        </picture>
      </Carousel.Item>

      <Carousel.Item>
      <picture>
      <source className="d-block mx-auto" media="(max-width: 523px)" srcSet="/images/WordPressSmall.png"/>
      <source media="(min-width: 523px)" srcSet="/images/WordPress.png"/>
        <img
          className="d-block mx-auto"
          max-width="100%"
          max-height="100%"
          src="/images/WordPress.png"
          alt="Freelance Web design uses Wordpress Logo"
          title="Logo of Wordpress that is used in house by Freelance Web Design"

        />
        </picture>
      </Carousel.Item>

      <Carousel.Item>
      <picture>
      <source className="d-block mx-auto" media="(max-width: 800px)" srcSet="/images/NextjsSmall.png"/>
      <source media="(min-width: 800px)" srcSet="/images/NextjsHoughtonWebDesign.png"/>
        <img
          className="d-block mx-auto"
          max-width="100%"
          max-height="100%"
          src="/images/NextjsHoughtonWebDesign.png"
          alt="houghton web design uses Next.js logo"
          title="Logo of NextJS that is used in house by Houghton Web Design"
        />
        </picture>
      </Carousel.Item>
    </Carousel>


  );
}


export default HomeCarousel;
