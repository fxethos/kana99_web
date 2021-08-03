import React from 'react';
import "./MembersCards.scss";


const MembersCards = () => {
    return (
             <div className="testimonial">
                <div className="testimonial__header">
                  <img
                    src="https://bobmatyas.github.io/fm-testimonials-grid/images/image-jeanette.jpg"
                    className="testimonial__photo"
                    alt="Jeanette Harmon"
                  />

                  <h2 className="testimonial__header__text ">
                    <b>theyvjn 3</b>
                    <span className="testimonial__header__text__verified testimonial__header__text__verified--black">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="date-time">3 days ago</span>
                      </div>
                    </span>
                  </h2>
                </div>
                <p
                  style={{ marginLeft: "0px" }}
                  className="testimonial__header__text mt-4"
                >
                  <b>Amazing app</b>
                </p>
                <p className="testimonial__quote testimonial__quote--black">
                  This app/groups is amazing I’m glad that I join them I wished
                  that
                </p>
                <p
                  className="read_more"
                >
                  Read more
                </p>
                <div className="text-gray-900 font-bold uppercase mt-5">
                  Posted on
                </div>
                <div className="text-blue-600">Apple App Store</div>
              </div>
                )
}

export default MembersCards;
