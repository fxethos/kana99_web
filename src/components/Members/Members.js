import React from "react";
import "./Members.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slide } from "react-awesome-reveal";
import  MembersCards from '../MembersCards/MembersCards';
import Testimonials from "../../content/Testimonials";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Members = () => {
  return (
    <React.Fragment>
      <div className="container-fluid member_block">
        <div className="container">
          <Slide direction="left" triggerOnce="true">
            <div className="row">
              <div className="col-md-12 mb-3 text-center">
                <h3>
                  <b> TAKE IT FROM OUR MEMBERS </b>
                </h3>
              </div>
            </div>
          </Slide>
          <Slide direction="right" delay={100} triggerOnce="true">
            <Carousel responsive={responsive}>
              {Testimonials.map(testimonial => {
                return (
                  <MembersCards {...testimonial} key={testimonial.username} />
                )
              })}
            </Carousel>
          </Slide>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Members;
